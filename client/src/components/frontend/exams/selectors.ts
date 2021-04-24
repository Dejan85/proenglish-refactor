import { initialState } from './slice';
import { EXAMS_SCOPE } from './contants';

export const getExamsData = (state: any) => state[EXAMS_SCOPE] || initialState;