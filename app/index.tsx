/** @format */

import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../components/Button/CustomButton";

const Page = () => {
    return (
        <View
            style={{
                gap: 8,
                padding: 10,
            }}
        >
            <Text>Page</Text>
            <CustomButton text='Login' onPress={() => {}} />
            <CustomButton text='Get Started' onPress={() => {}} />
            <CustomButton text='Regiter' onPress={() => {}} />
        </View>
    );
};

export default Page;
