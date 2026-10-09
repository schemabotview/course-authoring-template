import { masterMap } from './master-map'
import { systemRoles } from './foundations/system-roles'
import { readingACommand } from './foundations/reading-a-command'
import { interpretingResults } from './foundations/interpreting-results'
import type { Scene } from '@graphlearning/flow'
export const SCENES: Record<string, Scene> = Object.fromEntries([systemRoles, readingACommand, interpretingResults].map(scene => [scene.id, scene]))
export const REFERENCE_SCENES: Record<string, Scene> = {[masterMap.id]: masterMap}
export function getScene(id: string): Scene | undefined { return SCENES[id] ?? REFERENCE_SCENES[id] }
