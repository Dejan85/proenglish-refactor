import { initialState } from './slice';
import { ABOUT_SCOPE } from './constants';

export const getAboutData = (state: any) => state[ABOUT_SCOPE] || initialState;