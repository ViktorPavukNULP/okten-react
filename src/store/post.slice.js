import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services/post.service";

export const getAllPosts = createAsyncThunk(
    "postSlice/getAllPosts",
    async (_,{dispatch, rejectWithValue})=>{
        try {
            const posts = await postService.getAll();
            dispatch(setPosts(posts));
            return posts;
        }catch (e) {
            rejectWithValue(e);
        }
    }
);

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        }
    }
})

export const {setPosts} = postSlice.actions;
const postReducer = postSlice.reducer;
export default postReducer;