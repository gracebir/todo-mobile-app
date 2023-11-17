/** @format */

import { View, TextInput, KeyboardTypeOptions } from "react-native";
import React, { FC } from "react";
import CustomText from "../CustomText";
import { styles } from "./style";

interface customTextInputProps {
    label: string;
    nativeID: string;
    placeholder: string;
    isPassword?: boolean;
    value: string;
    onChange: (e: string) => void;
    keyBoardOption: KeyboardTypeOptions;
}

const CustomTextInput: FC<customTextInputProps> = ({
    label,
    placeholder,
    nativeID,
    keyBoardOption,
    value,
    onChange,
    isPassword = false,
}) => {
    return (
        <View>
            <CustomText isLabel={true} text={label} />
            <TextInput
                nativeID={nativeID}
                onChangeText={onChange}
                value={value}
                secureTextEntry={isPassword}
                style={styles.textInput}
                placeholder={placeholder}
                keyboardType={keyBoardOption}
            />
        </View>
    );
};

export default CustomTextInput;
