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
            state = action.payload;
        }
    },
});


export const fetchEventsData = createAction("get_events_data");

export const { setEventsData } = eventsSlice.actions;
export const { reducer } = eventsSlice;