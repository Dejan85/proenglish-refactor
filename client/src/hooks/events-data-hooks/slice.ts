import { createSlice, createAction } from '@reduxjs/toolkit';
import { EVENTS_SCOPE } from './constants';

export const initialState = {
    eventsData: [],
    filteredActiveEventsDates: [],
    filteredDailyEventsData: []
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
            state.filteredActiveEventsDates = action.payload;
        },
        filterDailyEvents(state, action) {
            state.filteredDailyEventsData = action.payload;
        }
    },
});


export const fetchEventsData = createAction("get_events_data");
export const filterEventsAction = createAction<Record<string, any>>("filter_events");
export const filterDailyEventsAction = createAction<Record<string, any>>("filter_daily_events");

export const { setEventsData, filterEvents, filterDailyEvents } = eventsSlice.actions;
export const { reducer } = eventsSlice;