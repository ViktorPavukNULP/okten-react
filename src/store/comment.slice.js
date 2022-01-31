import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../services/comment.service";

export const getAllComments = createAsyncThunk(
    "commentSlice/getAllComments",
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const commentSlice = createSlice({
    name: "commentSlice",
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = "pending";
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = "error";
            state.error = action.payload;
        }
    }
});

const commentReducer = commentSlice.reducer;
export default commentReducer;
