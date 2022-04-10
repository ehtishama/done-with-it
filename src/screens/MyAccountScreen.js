import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListSeparator from "../components/ListSeparator";
import routes from "../navigation/routes";
import { useNavigation } from "@react-navigation/native";

const menuItems = [
    {
        id: 1,
        title: "My Listings",
        iconName: "format-list-bulleted",
        backgroundColor: colors.primary,
    },
    {
        id: 2,
        title: "My Messages",
        iconName: "email",
        backgroundColor: colors.secondary,
        route: routes.MESSAGES,
    },
];

export default function MyAccountScreen() {
    const navigation = useNavigation();

    return (
        <Screen style={defaultStyles.screen}>
            <View style={styles.container}>
                <ListItem
                    image={require("../../assets/ehtisham.png")}
                    title={"Ehtisham UL Hassan"}
                    subTitle={"ehtishamhassan9@gmail.com"}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.iconName}
                                    backgroundColor={item.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.route)}
                        />
                    )}
                    ItemSeparatorComponent={ListSeparator}
                />
            </View>

            <ListItem
                title={"Log Out"}
                IconComponent={
                    <Icon name={"logout"} backgroundColor={"#ffe66d"} />
                }
                onPress={(fn) => fn}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
});
