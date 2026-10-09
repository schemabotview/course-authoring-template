import type { Scene, SceneNode } from '@graphlearning/flow'

// Reuse labels and semantic patterns; expand only the currently taught layer.
const layers = {
  input: { id: 'map-input', label: 'Input · request', pattern: 'user' },
  processing: { id: 'map-processing', label: 'Processing · work', pattern: 'service' },
  result: { id: 'map-result', label: 'Result · observation', pattern: 'storage' },
} as const
export function band(layer: keyof typeof layers, children: SceneNode[]): SceneNode {
  return {...layers[layer], icon: 'none', cols: 2, children}
}
export const masterMap: Scene = {
  id: 'workshop-system-map', padding: 0.18,
  nodes: [{id: 'system', label: 'A fictional queue · shared map', pattern: 'group', flow: 'LR',
    children: [
      band('input', [{id: 'request', label: 'Request', sub: 'Ask for the queue state', icon: 'terminal', pattern: 'user'}]),
      band('processing', [{id: 'inspect', label: 'Inspect', sub: 'Read the model', icon: 'search', pattern: 'service'}]),
      band('result', [{id: 'observation', label: 'Observe', sub: 'Interpret the response', icon: 'file', pattern: 'storage'}]),
    ], edges: [{source: 'map-input', target: 'map-processing', label: 'request'}, {source: 'map-processing', target: 'map-result', label: 'response'}],
  }], edges: [],
}
