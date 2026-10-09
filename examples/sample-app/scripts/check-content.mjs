import { build } from 'esbuild'
const bundle = await build({stdin: {contents: "export { COURSES } from './src/content'; export { SCENES, REFERENCE_SCENES } from './src/scenes'", resolveDir: process.cwd()}, bundle: true, platform: 'node', format: 'esm', write: false})
const { COURSES, SCENES, REFERENCE_SCENES } = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'))
const routes = new Set()
const used = new Set()
for (const [key, course] of Object.entries(COURSES)) {
  if (key !== course.id || !course.title.trim() || !course.sections.length) throw new Error('Invalid course ' + key)
  for (const section of course.sections) {
    const route = `${course.id}-${section.id}`
    if (routes.has(route) || !section.title.trim() || !section.slide.trim() || !section.narration.trim()) throw new Error('Invalid section ' + route)
    routes.add(route)
    if (!SCENES[section.scene]) throw new Error('Missing scene ' + section.scene)
    used.add(section.scene)
  }
}
for (const [id, scene] of Object.entries({...SCENES, ...REFERENCE_SCENES})) {
  if (scene.id !== id || (SCENES[id] && REFERENCE_SCENES[id])) throw new Error('Invalid scene registry ' + id)
  const ids = new Set()
  const walk = nodes => nodes.forEach(node => {if (ids.has(node.id)) throw new Error('Duplicate node ' + node.id); ids.add(node.id); walk(node.children ?? [])})
  walk(scene.nodes)
  const edges = list => list.forEach(edge => {if (!ids.has(edge.source) || !ids.has(edge.target)) throw new Error('Dangling edge in ' + id)})
  const nested = nodes => nodes.forEach(node => {edges(node.edges ?? []); nested(node.children ?? [])})
  edges(scene.edges); nested(scene.nodes)
  for (const course of Object.values(COURSES)) for (const section of course.sections) if (section.scene === id && section.focus && !ids.has(section.focus)) throw new Error('Invalid focus ' + section.focus)
}
if (used.size !== Object.keys(SCENES).length) throw new Error('Unexpected curricular scene')
console.log(`Structure OK: ${Object.keys(COURSES).length} course(s), ${routes.size} sections. Not subject or release validation.`)
