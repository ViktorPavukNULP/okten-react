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
            return rejectWithValue(e.message);
        }
    }
);

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = "pending";
        },
        [getAllPosts.fulfilled]: (state) => {
            state.status = "fulfilled";
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.payload;
        }
    }
})

export const {setPosts} = postSlice.actions;
const postReducer = postSlice.reducer;
export default postReducer;