import { createAction, createSlice } from '@reduxjs/toolkit';
import { EXAMS__SCOPE } from './contants';
import { InitialStateType } from './types';

export const initialState: InitialStateType = {
    examsData: []
};

const examsSlice = createSlice({
    name: EXAMS__SCOPE,
    initialState,
    reducers: {
        getExamsData(state, action) {
            state = action.payload;
        }
    }
});

export const fetchExamsData = createAction("fetch_exams_data");

export const { getExamsData } = examsSlice.actions;
export const { reducer } = examsSlice;