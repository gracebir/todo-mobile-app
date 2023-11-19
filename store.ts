/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import taskSlice from "./slices/task.slice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        task: taskSlice,
    },
});
