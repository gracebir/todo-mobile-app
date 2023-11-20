/** @format */

import { View, Text } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    useBottomSheetModal,
} from "@gorhom/bottom-sheet";

import { style } from "./style";
import Colors from "../../constants/Colors";
import CustomButton from "../Button/CustomButton";
import CustomText from "../CustomText";
import { Formik } from "formik";
import CustomTextInput from "../CustomTextInput/CustomTextInput";
import HeadingText from "../HeadingText";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo(() => ["50%"], []);
    const { dismiss } = useBottomSheetModal();
    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                {...props}
            />
        ),
        []
    );
    return (
        <BottomSheetModal
            backgroundStyle={{
                borderRadius: 0,
                backgroundColor: Colors.baseColor,
            }}
            overDragResistanceFactor={0}
            backdropComponent={renderBackdrop}
            ref={ref}
            snapPoints={snapPoints}
        >
            <Formik
                initialValues={{
                    content: "",
                }}
                onSubmit={(value) => {}}
            >
                {({ handleBlur, handleChange, values, errors }) => (
                    <View style={style.contentContainer}>
                        <View style={style.titleContainer}>
                            <HeadingText text='Add new task' />
                        </View>
                        <View style={style.formContainer}>
                            <CustomTextInput
                                label='Content'
                                nativeID='content'
                                keyBoardOption='default'
                                onBlur={handleBlur("content")}
                                value={values.content}
                                placeholder='Add a task'
                                onChange={handleChange("content")}
                            />
                            {errors.content && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.content}
                                </Text>
                            )}
                            <CustomButton
                                text='Add Task'
                                onPress={() => dismiss()}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </BottomSheetModal>
    );
});

export default BottomSheet;
