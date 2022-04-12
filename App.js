import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import jwtDecode from "jwt-decode";
import { useState } from "react";

import { AppTheme } from "./src/navigation/navigationTheme";
import AuthContext from "./src/auth/context";
import authStorage from "./src/auth/storage";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";

export default function App() {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    const restoreToken = async () => {
        const token = await authStorage.getToken();
        if (!token) return;

        const user = jwtDecode(token);
        setUser(user);
    };

    const ready = () => setIsReady(true);

    if (!isReady)
        return (
            <AppLoading
                startAsync={restoreToken}
                onFinish={ready}
                onError={console.error}
            />
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer theme={AppTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
