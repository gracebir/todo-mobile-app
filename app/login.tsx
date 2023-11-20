/** @format */

import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";
import HeadingText from "../components/HeadingText";
import Colors from "../constants/Colors";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import TextLink from "../components/TextLink";
import CustomButton from "../components/Button/CustomButton";
import { Formik } from "formik";
import { signinSchema } from "../utils/baseSchema";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/rootReducer";
import { AppDispatch } from "../store";
import { loginUser } from "../actions/auth.action";
import Toast from "react-native-toast-message";
import { router } from "expo-router";

const Login = () => {
    const { loading, error, userInfo } = useSelector(
        (state: RootState) => state.auth
    );

    const showToast = () => {
        Toast.show({
            type: !error ? "success" : "error",
            text1: "signin successfull",
            text2: "Welcome  👋",
        });
    };
    const dispatch: AppDispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={async (value) => {
                try {
                    await dispatch(
                        loginUser({
                            email: value.email,
                            password: value.password,
                        })
                    );
                } catch (error) {
                    console.error("Login failed:", error);
                }
            }}
            validationSchema={signinSchema}
        >
            {({ handleBlur, handleChange, handleSubmit, errors, values }) => (
                <View style={styles.container}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        <View style={styles.title}>
                            <HeadingText text='Welcome Back!' />
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require("../assets/data/2.png")}
                            />
                        </View>
                        <View style={styles.formContainer}>
                            <CustomTextInput
                                label='Email'
                                nativeID='email'
                                keyBoardOption='email-address'
                                onBlur={handleBlur("email")}
                                value={values.email}
                                placeholder='mary.elliot@mail.com'
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
                                onBlur={handleBlur("password")}
                                value={values.password}
                                placeholder='**************'
                                onChange={handleChange("password")}
                            />
                            {errors.password && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.password}
                                </Text>
                            )}
                            <View style={styles.forgetPassword}>
                                <TextLink href={"/"} text='Forgot Password?' />
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                text={loading ? "Loading..." : "Login"}
                                onPress={async () => {
                                    handleSubmit();
                                    if (!loading) {
                                        showToast();
                                        console.log(userInfo);
                                        setTimeout(() => {
                                            router.replace("/dashboard");
                                        }, 2000);
                                    }
                                }}
                            />
                            <View style={styles.linkText}>
                                <CustomText text='Don’t have an account? ' />
                                <TextLink text='Sign Up' href={"/register"} />
                            </View>
                        </View>
                    </ScrollView>
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
export default Login;
