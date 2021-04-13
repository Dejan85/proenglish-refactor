import { createSlice, createAction } from '@reduxjs/toolkit';
import { BLOG_SCOPE } from './constants';
import { PhotoType, InitialStateType } from './types';



export const initialState: InitialStateType = {
    blogData: []
};

const blogSlice = createSlice({
    name: BLOG_SCOPE,
    initialState,
    reducers: {
        setBlogData(state, action) {
            const data: object[] = action.payload.data.map(({ photo: { data: { data } }, created, _id, title, description }: PhotoType) => {
                return {
                    photo: new Buffer.from(data).toString("base64"),
                    created, _id, title, description
                };
            });
            state.blogData = data;
        }
    }
});

export const fetchBlogData = createAction("get_blog_data");

export const { setBlogData } = blogSlice.actions;
export const { reducer } = blogSlice;