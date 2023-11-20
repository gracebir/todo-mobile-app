/** @format */

import { View, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import { Formik } from "formik";
import TextLink from "../components/TextLink";
import CustomButton from "../components/Button/CustomButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import HeadingText from "../components/HeadingText";
import Colors from "../constants/Colors";
import { signupSchema } from "../utils/baseSchema";
import { RootState } from "../utils/rootReducer";
import { registerUser } from "../actions/auth.action";
import { AppDispatch } from "../store";
import { router } from "expo-router";

const Register = () => {
    const { loading, error, success } = useSelector(
        (state: RootState) => state.auth
    );

    const dispatch: AppDispatch = useDispatch();

    const showToast = () => {
        Toast.show({
            type: success ? "success" : "error",
            text1: "user created successfull",
            text2: "This is some something 👋",
        });
    };
    return (
        <Formik
            initialValues={{
                fullname: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={signupSchema}
            onSubmit={async (value) => {
                try {
                    await dispatch(
                        registerUser({
                            fullname: value.fullname,
                            email: value.email,
                            password: value.password,
                        })
                    );

                    // Handle success, navigate to another screen, etc.
                } catch (error) {
                    // Handle error (display an error message, etc.)
                    console.error("Registration failed:", error);
                }
            }}
        >
            {({
                handleChange,
                handleBlur,
                values,
                errors,
                handleSubmit,
                resetForm,
            }) => (
                <View style={styles.container}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        <View style={styles.title}>
                            <HeadingText text='Welcome Oboard!' />
                            <CustomText text='Lets help you in completing your tasks' />
                        </View>

                        <View style={styles.formContainer}>
                            <CustomTextInput
                                label='Full Name'
                                onBlur={handleBlur("fullname")}
                                nativeID='fullname'
                                keyBoardOption='default'
                                value={values.fullname}
                                placeholder='Mary Elliot'
                                onChange={handleChange("fullname")}
                            />
                            {errors.fullname && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.fullname}
                                </Text>
                            )}
                            <CustomTextInput
                                label='Email'
                                nativeID='email'
                                keyBoardOption='email-address'
                                value={values.email}
                                placeholder='mary.elliot@mail.com'
                                onBlur={handleBlur("email")}
                                onChange={handleChange("email")}
                            />
                            {errors.email && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.email}
                                </Text>
                            )}
                            <CustomTextInput
                                label='Password'
                                nativeID='password'
                                keyBoardOption='default'
                                isPassword={true}
                                value={values.password}
                                placeholder='**************'
                                onBlur={handleBlur("password")}
                                onChange={handleChange("password")}
                            />
                            {errors.password && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.password}
                                </Text>
                            )}
                            <CustomTextInput
                                label='Confirm'
                                nativeID='confirm'
                                keyBoardOption='default'
                                isPassword={true}
                                value={values.confirmPassword}
                                placeholder='**************'
                                onBlur={handleBlur("confirmPassword")}
                                onChange={handleChange("confirmPassword")}
                            />
                            {errors.confirmPassword && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.confirmPassword}
                                </Text>
                            )}
                        </View>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                text={loading ? "Loading..." : "Register"}
                                onPress={() => {
                                    handleSubmit();
                                    if (!loading && success) {
                                        showToast();
                                        resetForm();
                                        setTimeout(() => {
                                            router.replace("/dashboard");
                                        }, 2000);
                                    }
                                }}
                            />
                            <View style={styles.linkText}>
                                <CustomText text='Already have an account ?  ' />
                                <TextLink text='Sign In?' href={"/login"} />
                            </View>
                        </View>
                    </ScrollView>
                    <Toast />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        paddingBottom: 10,
        backgroundColor: Colors.baseColor,
    },
    title: {
        marginVertical: 49,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 33,
    },
    image: {
        width: 187.2,
        height: 170,
    },
    formContainer: {
        gap: 10,
    },
    forgetPassword: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginHorizontal: 10,
    },
    buttonContainer: {
        gap: 10,
        marginTop: 68,
    },
    linkText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Register;
