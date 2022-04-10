import Card from "./src/components/Card";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { View } from "react-native";
import colors from "./src/config/colors";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import Icon from "./src/components/Icon";
import Screen from "./src/components/Screen";
import ListItem from "./src/components/ListItem";
import MyAccountScreen from "./src/screens/MyAccountScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import AppTextInput from "./src/components/AppTextInput";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabbedScreen from "./src/screens/TabbedScreen";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
import ListingEditScreen from "./src/screens/ListingEditScreen";
import { AppTheme } from "./src/navigation/navigationTheme";
const Stack = createNativeStackNavigator();

export default function App() {
    // return <ListingEditScreen />;
    // return <MessagesScreen />;

    return (
        <NavigationContainer theme={AppTheme}>
            {/* TODO:: Conditionally render one of the below navigators */}
            {/* <AuthNavigator /> */}
            <AppNavigator />
        </NavigationContainer>
    );
}
