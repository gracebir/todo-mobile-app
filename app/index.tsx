/** @format */

import { Text, View } from "react-native";
import React from "react";
import TextLink from "../components/TextLink";

const Page = () => {
    return (
        <View>
            <Text>Home page</Text>
            <TextLink text='Go to login' href={"login"} />
            <TextLink text='Go to register' href={"register"} />
            <TextLink text='Go to dashboard' href={"dashboard"} />
        </View>
    );
};

export default Page;
