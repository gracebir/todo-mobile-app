/** @format */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 260,
        width: "100%",
        gap: 18,
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingHorizontal: 21,
        paddingVertical: 12,
        shadowColor: "#000",
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    taskHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    taskHeaderTitle: {
        fontSize: 17,
        fontFamily: "Poppins_700Bold",
        color: "#000",
    },
    plusImage: {
        width: 20,
        height: 20,
    },
});
