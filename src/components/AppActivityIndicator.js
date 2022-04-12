import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
export default function AppAcitivtyIndicator({ visible }) {
    if (!visible) return null;
    return (
        <View style={styles.container}>
            <LottieView
                source={require("../../assets/animations/loader.json")}
                autoPlay={true}
                loop={true}
                style={styles.loader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        opacity: .8
    },
    loader: {
        width: 350,
    },
});
