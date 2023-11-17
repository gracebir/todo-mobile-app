/** @format */

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

interface customHeaderProp {
    isBgColor?: boolean;
}

const CustomerHeader = ({ isBgColor = false }: customHeaderProp) => {
    return (
        <View
            style={{
                backgroundColor: isBgColor ? Colors.primary : Colors.baseColor,
            }}
        >
            <Image source={require("../../assets/images/shape.png")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default CustomerHeader;
