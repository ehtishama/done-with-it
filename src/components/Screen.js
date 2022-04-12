import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    ScrollView,
} from "react-native";
import colors from "../config/colors";

export default function Screen({ children, style, scrollable }) {
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar />
            {scrollable ? (
                <ScrollView>{children}</ScrollView>
            ) : (
                <View style={style}>{children}</View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
