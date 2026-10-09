import type { Course } from './types'
import { foundations } from './foundations'
export const COURSES: Record<string, Course> = {[foundations.id]: foundations}
export { slugOf, allSections } from '@graphlearning/shell'
