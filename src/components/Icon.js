import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Icon({
    name,
    backgroundColor = colors.black,
    iconColor = colors.white,
    iconSize = 20,
}) {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={iconSize}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
});
