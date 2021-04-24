import { createAction, createSlice } from '@reduxjs/toolkit';
import { EXAMS_SCOPE } from './contants';
import { InitialStateType } from './types';

export const initialState: InitialStateType = {
    examsData: []
};

const examsSlice = createSlice({
    name: EXAMS_SCOPE,
    initialState,
    reducers: {
        setExamsData(state, action) {
            state.examsData = action.payload.data;
        }
    }
});

export const fetchExamsData = createAction("fetch_exams_data");

export const { setExamsData } = examsSlice.actions;
export const { reducer } = examsSlice;