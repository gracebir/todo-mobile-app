/** @format */

import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

interface customButtonProps {
    text: string;
    onPress?: () => void;
}

const CustomButton = ({ text, onPress }: customButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
