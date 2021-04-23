import { initialState } from './slice';
import { BLOG_SCOPE } from './constants';

export const getBlogData = (state: any) => state[BLOG_SCOPE] || initialState;