/** @format */

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import CustomText from "../components/CustomText";
import HeadingText from "../components/HeadingText";
import Colors from "../constants/Colors";
import CustomTextInput from "../components/CustomTextInput/CustomTextInput";
import TextLink from "../components/TextLink";
import CustomButton from "../components/Button/CustomButton";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    return (
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
                    <View style={styles.forgetPassword}>
                        <TextLink href={"/"} text='Forgot Password?' />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Link href={"/dashboard"} asChild>
                        <CustomButton text='Login' />
                    </Link>
                    <View style={styles.linkText}>
                        <CustomText text='Don’t have an account? ' />
                        <TextLink text='Sign Up' href={"/register"} />
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
