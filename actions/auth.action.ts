/** @format */

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface registerType {
    fullname: string;
    email: string;
    password: string;
}

interface loginType {
    email: string;
    password: string;
}

const backendURL = "https://task-api-k86t.onrender.com";

export const registerUser = createAsyncThunk(
    "auth/signup",
    async (
        { fullname, email, password }: registerType,
        { rejectWithValue }
    ) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.post(
                `${backendURL}/api/auth/signup`,
                { fullname, email, password },
                config
            );
        } catch (error) {
            if (error) {
                return rejectWithValue(error);
            } else {
                return rejectWithValue(error);
            }
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/signin",
    async ({ email, password }: loginType, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                `${backendURL}/api/auth/signin`,
                { email, password },
                config
            );
            return data;
        } catch (error) {
            if (error) {
                return rejectWithValue(error);
            } else {
                return rejectWithValue(error);
            }
        }
    }
);
