import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <SafeAreaProvider className="pb">
            <StatusBar hidden={false} className="bg-primary"/>
            <Stack>
                <Stack.Screen 
                name="(tabs)"
                options={{ headerShown: false }} 
                />
                <Stack.Screen 
                name="movies/[id]"
                options={{ headerShown: false }} 
                />
            </Stack>
        </SafeAreaProvider>
    );
}
