/** @format */

import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { Link } from "expo-router";
import Colors from "../constants/Colors";

interface textLinkProps {
    text: string;
    href: any;
}

const TextLink: FC<textLinkProps> = ({ href, text }) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity>
                <Text style={styles.textLink}>{text}</Text>
            </TouchableOpacity>
        </Link>
    );
};

const styles = StyleSheet.create({
    textLink: {
        color: Colors.primary,
        fontFamily: "Poppins_700Bold",
        fontSize: 15,
    },
});

export default TextLink;
