import { Modal, View, StyleSheet } from "react-native";
import { Bar as ProgressBar } from "react-native-progress";
import colors from "../config/colors";
import AnimatedLottieView from "lottie-react-native";

export default function ProgressModal({ progress, visible, onDone }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress >= 1 ? (
                    <AnimatedLottieView
                        autoPlay
                        loop={false}
                        source={require("../../assets/animations/done.json")}
                        style={styles.animation}
                        onAnimationFinish={onDone}
                    />
                ) : (
                    <ProgressBar
                        animated
                        progress={progress}
                        width={200}
                        color={colors.primary}
                    />
                )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    animation: {
        width: 150,
    },
});
