import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./user.slice";

const store = configureStore({
    reducer: {
        carReducer,
        userReducer
    }
});

export default store;
