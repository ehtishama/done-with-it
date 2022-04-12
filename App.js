import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AuthContext from "./src/auth/context";

import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { AppTheme } from "./src/navigation/navigationTheme";

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer theme={AppTheme}>
                {/* TODO:: Conditionally render one of the below navigators */}
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
