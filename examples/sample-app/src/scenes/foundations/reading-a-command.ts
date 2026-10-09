import type { Scene } from '@graphlearning/flow'
import { band } from '../master-map'
export const readingACommand: Scene = {
  id: 'foundations-reading-a-command-scene', padding: 0.18,
  nodes: [band('input', [
    {id: 'session', kind: 'code', filename: 'Fictional command · do not execute', label: 'queue inspect\npending: 2', hug: true},
    {id: 'interpret', label: 'Read the interaction', kind: 'list', framed: true, pattern: 'user', icon: 'terminal', items: ['queue · fictional command', 'inspect · requested action', 'pending: 2 · illustrative response']},
  ]), band('result', [{id: 'meaning', label: 'An observation', sub: 'A response describes one model state', icon: 'file', pattern: 'storage'}])], edges: [],
}
