import {Modal, View, StyleSheet} from "react-native";
import {Bar as ProgressBar} from "react-native-progress"
import colors from "../config/colors";

export default function ProgressModal({progress, visible, onDone}) {
    return <Modal visible={visible}>
        <View style={styles.container}>
            <ProgressBar progress={progress} width={200} animated color={colors.primary}/>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})
