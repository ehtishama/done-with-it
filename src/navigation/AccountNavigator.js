import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../screens/MessagesScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import routes from "./routes";
const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.ACCOUNT_TAB}
                component={MyAccountScreen}
                options={{ title: "My Account" }}
            />
            <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
        </Stack.Navigator>
    );
}
