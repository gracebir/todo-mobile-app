/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/auth.action";

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
};

interface registerType {
    fullname: string;
    email: string;
    password: string;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                //@ts-ignore
                state.error = action.payload;
                state.success = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.userInfo = payload;
                state.userToken = payload.token;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false;
                //@ts-ignore
                state.error = payload;
            });
    },
});

export default authSlice.reducer;
