/** @format */

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import HeadingText from "../components/HeadingText";
import CustomText from "../components/CustomText";
import { Link } from "expo-router";
import CustomButton from "../components/Button/CustomButton";

const Page = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/data/1.png")}
                />
            </View>
            <View style={styles.textContainer}>
                <HeadingText text='Get things done with TODO' />
                <CustomText
                    isCentered={true}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere gravida purus id eu condimentum est diam quam. Condimentum blandit diam.`}
                />
            </View>
            <Link href={"/login"} asChild>
                <CustomButton text='Get Started' />
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.baseColor,
        flex: 1,
        paddingHorizontal: 20,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    image: {
        width: 187.2,
        height: 170,
    },
    textContainer: {
        marginTop: 70,
        alignItems: "center",
        marginHorizontal: 25,
        marginBottom: 111,
    },
});

export default Page;
