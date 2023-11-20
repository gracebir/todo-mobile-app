/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import { taskSliceApi } from "./slices/task.slice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [taskSliceApi.reducerPath]: taskSliceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(taskSliceApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
