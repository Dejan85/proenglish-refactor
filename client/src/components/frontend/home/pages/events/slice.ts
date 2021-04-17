import { createSlice, createAction } from '@reduxjs/toolkit';
import { EVENTS_SCOPE } from './constants';

export const initialState = {
    eventsData: []
};

const eventsSlice = createSlice({
    name: EVENTS_SCOPE,
    initialState,
    reducers: {
        setEventsData(state, action) {
            const { data } = action.payload;
            state.eventsData = data;
        },
        filterEvents(state, action) {
            console.log('test', action.payload);
        }
    },
});


export const fetchEventsData = createAction("get_events_data");
export const filterEventsAction = createAction<Record<string, any>>("filter_events");

export const { setEventsData, filterEvents } = eventsSlice.actions;
export const { reducer } = eventsSlice;