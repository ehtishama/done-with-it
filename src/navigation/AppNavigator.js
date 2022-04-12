import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={routes.FEED}
                component={FeedNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.EDIT_LISTING}
                component={ListingEditScreen}
                options={{
                    tabBarButton: () => (
                        <NewListingButton
                            onPress={() =>
                                navigation.navigate(routes.EDIT_LISTING)
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.ACCOUNT}
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
