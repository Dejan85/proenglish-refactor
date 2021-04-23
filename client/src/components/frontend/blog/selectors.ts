import { initialState } from '../home/pages/blog/slice';

export const getBlogData = (state: any, scope: string) => state[scope] || initialState;