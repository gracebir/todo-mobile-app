/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    tasks: {},
    isLoading: false,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
});

export default taskSlice.reducer;
