/** @format */

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Colors from "../constants/Colors";
import HeadingText from "../components/HeadingText";
import TaskList from "../components/TaskList/TaskList";
import { useSelector } from "react-redux";
import { RootState } from "../utils/rootReducer";

const DashBoard = () => {
    const navitagation = useNavigation();
    const { userInfo } = useSelector((state: RootState) => state.auth);

    //@ts-ignore
    console.log(userInfo.user.fullname);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/emilie.png")}
                />
                <Text style={styles.title}>
                    Welcome {userInfo.user.fullname}
                </Text>
            </View>
            <View style={styles.content}>
                <View style={styles.clockImageContainer}>
                    <Image
                        style={styles.clockImage}
                        source={require("../assets/data/clone-todo.png")}
                    />
                </View>
                <View style={styles.taskListContainer}>
                    <HeadingText text='Tasks List' />
                    <TaskList />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: Colors.baseColor,
    },
    content: {
        marginTop: 25,
        paddingHorizontal: 21,
        gap: 10,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
        width: "100%",
        paddingBottom: 20,
        gap: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    title: {
        color: "#FFF",
        fontSize: 22,
        fontFamily: "Poppins_700Bold",
    },
    clockImageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    clockImage: {
        width: 127.085,
        height: 126.571,
    },
    taskListContainer: {
        gap: 8,
    },
});

export default DashBoard;
