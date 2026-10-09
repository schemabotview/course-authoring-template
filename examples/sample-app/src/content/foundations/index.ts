import type { Course } from '../types'
import { systemRoles } from './system-roles'
import { readingACommand } from './reading-a-command'
import { interpretingResults } from './interpreting-results'
export const foundations: Course = {id: 'foundations', title: 'Workshop Foundations', sections: [systemRoles, readingACommand, interpretingResults]}
