import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

export default function AppButton({ title, color, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.button,
                    { backgroundColor: color || colors.primary },
                ]}
            >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
    },
    button: {
        width: "100%",
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        marginVertical: 8,
    },

    text: {
        color: colors.white,
        textAlign: "center",
        fontSize: 18,
        textTransform: "uppercase",
    },
});
