import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";

export default function PickerItem({label, onPress, icon, backgroundColor}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.iconContainer, {backgroundColor}]}>
                    <MaterialCommunityIcons name={icon} size={40} color={colors.white}/>
                </View>
            </TouchableOpacity>
            <Text>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "33%",
        padding: 10
    },

    iconContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"

    },
});
