import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { Constants } from "expo-constants";
export default function Screen({ children, style }) {
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar />
            <View style={style}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
