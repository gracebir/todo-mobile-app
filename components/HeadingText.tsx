/** @format */

import { Text } from "react-native";
import React, { FC } from "react";

interface headingProp {
    text: string;
}

const HeadingText: FC<headingProp> = ({ text }) => {
    return (
        <Text
            style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 22,
                color: "#000",
            }}
        >
            {text}
        </Text>
    );
};

export default HeadingText;
