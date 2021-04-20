import { createAction, createSlice } from '@reduxjs/toolkit';
import { ABOUT_SCOPE } from './constants';

export const initialState = {
    aboutData: []
};


const aboutSlice = createSlice({
    name: ABOUT_SCOPE,
    initialState,
    reducers: {
        setAboutData(state, action) {
            const { data } = action.payload;
            state.aboutData = data;
        }
    }
});

export const fetchAboutDataAction = createAction("get_about_data");
export const { setAboutData } = aboutSlice.actions;
export const { reducer } = aboutSlice;
