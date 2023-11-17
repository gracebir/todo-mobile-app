/** @format */

import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import TextLink from "../components/TextLink";
import CustomButton from "../components/Button/CustomButton";
import CustomText from "../components/CustomText";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import HeadingText from "../components/HeadingText";
import Colors from "../constants/Colors";

const Register = () => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    return (
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
                        nativeID='fullname'
                        keyBoardOption='default'
                        value={form.fullName}
                        placeholder='Mary Elliot'
                        onChange={(fullName) => {
                            setForm({
                                ...form,
                                fullName,
                            });
                        }}
                    />
                    <CustomTextInput
                        label='Email'
                        nativeID='email'
                        keyBoardOption='email-address'
                        value={form.email}
                        placeholder='mary.elliot@mail.com'
                        onChange={(email) => {
                            setForm({
                                ...form,
                                email,
                            });
                        }}
                    />
                    <CustomTextInput
                        label='Password'
                        nativeID='password'
                        keyBoardOption='default'
                        isPassword={true}
                        value={form.password}
                        placeholder='**************'
                        onChange={(password) => {
                            setForm({
                                ...form,
                                password,
                            });
                        }}
                    />
                    <CustomTextInput
                        label='Confirm'
                        nativeID='confirm'
                        keyBoardOption='default'
                        isPassword={true}
                        value={form.password}
                        placeholder='**************'
                        onChange={(confirmPassword) => {
                            setForm({
                                ...form,
                                confirmPassword,
                            });
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Link href={"/dashboard"} asChild>
                        <CustomButton text='Register' />
                    </Link>
                    <View style={styles.linkText}>
                        <CustomText text='Already have an account ?  ' />
                        <TextLink text='Sign In?' href={"/login"} />
                    </View>
                </View>
            </ScrollView>
        </View>
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
