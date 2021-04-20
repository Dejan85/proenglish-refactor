import { createAction, createSlice } from '@reduxjs/toolkit';
import { ABOUT_SCOPE } from './constants';

const initialState = {
    aboutData: []
};


const aboutSlice = createSlice({
    name: ABOUT_SCOPE,
    initialState,
    reducers: {
        setAboutData(state, action) {
            state = action.payload;
        }
    }
});

export const fetchAboutDataAction = createAction("get_about_data");
export const { setAboutData } = aboutSlice.actions;
export const { reducer } = aboutSlice;
