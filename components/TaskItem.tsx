/** @format */

import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import Colors from "../constants/Colors";

export interface taskIteProps {
    id?: number;
    content: string;
    isCompleted: boolean;
}

const TaskItem = ({ id, content, isCompleted = false }: taskIteProps) => {
    return (
        <>
            <BouncyCheckbox
                size={20}
                fillColor={Colors.primary}
                unfillColor='#fff'
                iconStyle={{
                    borderColor: "#000",
                    borderRadius: 0,
                    borderWidth: 3,
                }}
                text={content}
                textStyle={{
                    fontSize: 15,
                    fontFamily: "Poppins_700Bold",
                    color: "#000",
                }}
                innerIconStyle={{
                    borderColor: Colors.primary,
                    borderRadius: 0,
                }}
                isChecked={isCompleted}
            />
        </>
    );
};

export default TaskItem;
