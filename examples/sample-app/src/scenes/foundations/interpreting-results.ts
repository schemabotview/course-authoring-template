import type { Scene } from '@graphlearning/flow'
import { band } from '../master-map'
export const interpretingResults: Scene = {
  id: 'foundations-interpreting-results-scene', padding: 0.18,
  nodes: [band('result', [
    {id: 'comparison', label: 'Observation and interpretation', kind: 'table', headers: ['Observe', 'Interpret'], values: [['pending: 2', 'Two items in the fictional model'], ['No response', 'Check before concluding']], pattern: 'storage'},
    {id: 'verify', label: 'Keep the question precise', kind: 'list', framed: true, icon: 'search', pattern: 'service', items: ['Which state did we inspect?', 'What does the response establish?', 'What remains unknown?']},
  ])], edges: [],
}
