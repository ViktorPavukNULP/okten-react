import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services/user.service";

export const getAllUsers = createAsyncThunk(
  "userSlice/getAllUsers",
    async ()=>{
      try{
          return await userService.getAll();
      }catch (e) {
          console.log(e);
      }
    }
);

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: []
    },
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        }
    }
})

const userReducer = userSlice.reducer;
export default userReducer;