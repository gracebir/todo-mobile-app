/** @format */

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    useFonts,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import CustomerHeader from "../components/CustomerHeader/CustomerHeader";
import { store } from "../store";

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
        <Provider store={store}>
            <BottomSheetModalProvider>
                <Stack>
                    <Stack.Screen
                        name='index'
                        options={{ header: () => <CustomerHeader /> }}
                    />
                    <Stack.Screen
                        name='login'
                        options={{ header: () => <CustomerHeader /> }}
                    />
                    <Stack.Screen
                        name='register'
                        options={{ header: () => <CustomerHeader /> }}
                    />
                    <Stack.Screen
                        name='dashboard'
                        options={{
                            header: () => <CustomerHeader isBgColor={true} />,
                        }}
                    />
                </Stack>
            </BottomSheetModalProvider>
        </Provider>
    );
}
