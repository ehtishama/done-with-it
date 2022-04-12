import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    ScrollView,
} from "react-native";
import colors from "../config/colors";

export default function Screen({ children, style }) {
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar />
            <ScrollView>
                <View style={style}>{children}</View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
