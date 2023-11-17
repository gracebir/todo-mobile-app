/** @format */

import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { styles } from "./styles";

interface customButtonProps {
    text: string;
    onPress: () => void;
}

const CustomButton: FC<customButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text
                style={{
                    ...styles.buttonText,
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
