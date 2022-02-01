import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        tasks: [],
        done: 0
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({name: action.payload, id: Date.now()});
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        incrementDone: state => {
            state.done += 1;
        },
        decrementDone: state => {
            state.done -= 1;
        }
    }
});

export const {addTask, deleteTask, incrementDone, decrementDone} = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;