import { initialState } from './slice';

export const getBlogData = (state: any, scope: string) => state[scope] || initialState;