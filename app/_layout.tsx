/** @format */

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    useFonts,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";
import Colors from "../constants/Colors";

export const unstable_settings = {
    initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        Poppins_700Bold,
        Poppins_600SemiBold,
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    return (
        <>
            <View
                style={{
                    backgroundColor: Colors.baseColor,
                }}
            >
                <Image source={require("../assets/images/shape.png")} />
            </View>
            <Stack>
                <Stack.Screen name='index' options={{ headerShown: false }} />
                <Stack.Screen name='index1' options={{}} />
            </Stack>
        </>
    );
}
