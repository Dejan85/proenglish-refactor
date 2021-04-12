import { createSlice, createAction } from '@reduxjs/toolkit';
import { BLOG_SCOPE } from './constants';




export const initialState = {
    blogData: null
};

const blogSlice = createSlice({
    name: BLOG_SCOPE,
    initialState,
    reducers: {
        setBlogData(state, action) {
            state.blogData = action.payload;
        }
    }
});

export const fetchBlogData = createAction("get_blog_data");

export const { setBlogData } = blogSlice.actions;
export const { reducer } = blogSlice;