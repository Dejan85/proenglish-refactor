import { initialState } from './slice';
import { EVENTS_SCOPE } from './constants';

export const getEventsState = (state: any) => state[EVENTS_SCOPE] || initialState;