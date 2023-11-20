/** @format */

import * as yup from "yup";

export const signupSchema = yup.object().shape({
    fullname: yup.string().required("fullname required"),
    email: yup.string().email().required("email required"),
    password: yup.string().min(8).required("password required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), "null"], "password must match"),
});

export const signinSchema = yup.object().shape({
    email: yup.string().email().required("Email Required"),
    password: yup.string().min(8).required("Password required"),
});

export const taskSchema = yup.object().shape({
    content: yup.string().required("Content can not be empty"),
});
