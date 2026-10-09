import puppeteer from 'puppeteer'
import { build } from 'esbuild'
import { mkdirSync, writeFileSync } from 'node:fs'
const bundled = await build({stdin: {contents: "export { COURSES } from './src/content'; export { SCENES } from './src/scenes'", resolveDir: process.cwd()}, bundle: true, platform: 'node', format: 'esm', write: false})
const { COURSES, SCENES } = await import('data:text/javascript;base64,' + Buffer.from(bundled.outputFiles[0].text).toString('base64'))
const base = process.env.PREVIEW_URL ?? 'http://localhost:5183/sample-app/'
const out = process.env.REVIEW_OUT ?? 'scripts/out/review'
mkdirSync(out, {recursive: true})
const browser = await puppeteer.launch({executablePath: process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true})
try {
  const page = await browser.newPage()
  const errors = []
  const results = []
  page.on('pageerror', error => errors.push(error.message))
  const count = nodes => nodes.reduce((total,node) => total + 1 + count(node.children ?? []),0)
  for (const [width,height] of [[1440,900],[390,844]]) {
    await page.setViewport({width,height})
    for (const course of Object.values(COURSES)) for (const section of course.sections) {
      const route = `${course.id}-${section.id}`
      await page.goto(`${base}#/${route}`, {waitUntil: 'networkidle0'})
      await new Promise(resolve => setTimeout(resolve,400))
      if (width === 390) {
        const hide = await page.$('button[aria-label="Hide slide"]'); if (hide) await hide.click()
        await new Promise(resolve => setTimeout(resolve,350))
        await page.screenshot({path: `${out}/${route}-${width}-scene.png`})
      }
      const header = await page.$eval('.reel-head__eyebrow', e => {const r=e.getBoundingClientRect(); return {text:e.textContent,right:r.right}})
      if (header.text !== 'WORKSHOP · FOUNDATIONS' || header.right > (width === 390 ? width - 48 : width)) throw new Error('Header overflow/mismatch ' + route)
      if (width === 390) { const show=await page.$('button[aria-label="Show slide"]'); if(show) await show.click(); await new Promise(resolve => setTimeout(resolve,350)) }
      const data = await page.evaluate(() => {const r=document.querySelector('.slide-panel__scaler').getBoundingClientRect(); return {nodes:document.querySelectorAll('.react-flow__node').length,overflow:document.documentElement.scrollWidth>innerWidth,links:document.querySelectorAll('.slide-panel a').length,slideTop:r.top,slideBottom:r.bottom}})
      if(data.nodes !== count(SCENES[section.scene].nodes) || data.overflow || data.links || data.slideTop < 24 || data.slideBottom > height-64) throw new Error('Layout failed ' + route)
      await page.screenshot({path: `${out}/${route}-${width}.png`})
      results.push({route,width,height,header,...data})
    }
  }
  await page.setViewport({width:1440,height:900})
  await page.goto(`${base}#/foundations-system-roles`,{waitUntil:'networkidle0'})
  await page.click('button[aria-label="Next section (Shift+→)"]')
  await page.waitForFunction(() => location.hash.endsWith('reading-a-command'))
  await page.keyboard.down('Shift'); await page.keyboard.press('ArrowLeft'); await page.keyboard.up('Shift')
  await page.waitForFunction(() => location.hash.endsWith('system-roles'))
  await page.goto(`${base}#/workshop-system-map`,{waitUntil:'networkidle0'})
  await page.waitForSelector('.react-flow__node')
  await page.goBack(); await page.waitForFunction(() => location.hash.endsWith('system-roles'))
  if(errors.length) throw new Error(errors.join('\n'))
  writeFileSync(`${out}/results.json`,JSON.stringify({errors,results,navigation:['Next','Shift+Left','Reference scene','Back']},null,2))
  console.log(`Preview checks passed: ${results.length}; no browser errors. Human/accessibility review still required.`)
} finally {await browser.close()}
