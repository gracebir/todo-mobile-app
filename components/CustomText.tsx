/** @format */

import { Text } from "react-native";
import React, { FC } from "react";

interface textProp {
    text: string;
    isLabel?: boolean;
    isCentered?: boolean;
}

const CustomText: FC<textProp> = ({
    text,
    isLabel = false,
    isCentered = false,
}) => {
    return (
        <Text
            style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 15,
                color: "#000",
                textAlign: isCentered ? "center" : "auto",
                marginLeft: isLabel ? 10 : 0,
            }}
        >
            {text}
        </Text>
    );
};

export default CustomText;
