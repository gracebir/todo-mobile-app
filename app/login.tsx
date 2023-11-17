/** @format */

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Login = () => {
    const navitagation = useNavigation();
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity
                onPress={() => {
                    navitagation.goBack();
                }}
            >
                <Text>Go back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
