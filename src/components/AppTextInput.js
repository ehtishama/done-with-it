import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppTextInput({ iconName, ...otherProps }) {
    return (
        <View style={styles.container}>
            {iconName && (
                <MaterialCommunityIcons
                    name={iconName}
                    size={20}
                    style={styles.icon}
                />
            )}
            <TextInput style={styles.input} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bgLight,
        margin: 10,
        paddingHorizontal: 25,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 5,
    },
    input: {
        width: "100%",
        padding: 10,
    },
});
