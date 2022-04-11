import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { AppTheme } from "./src/navigation/navigationTheme";

export default function App() {
    return (
        <NavigationContainer theme={AppTheme}>
            {/* TODO:: Conditionally render one of the below navigators */}
            {/* <AuthNavigator /> */}
            <AppNavigator />
        </NavigationContainer>
    );
}
