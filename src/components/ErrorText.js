import { Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function ErrorText({ children }) {
    if (!children) return null;
    return (
        <View style={styles.container}>
            <Text style={styles.error}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    error: {
        color: colors.danger,
    },
});
