import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.productImage}
                source={require("../../assets/chair.jpg")}
            />
            <View style={styles.header}>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons
                        name="close"
                        size={35}
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <MaterialCommunityIcons
                        name="trash-can"
                        size={35}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    productImage: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
    },
    header: {
        position: "absolute",
        top: 40,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
