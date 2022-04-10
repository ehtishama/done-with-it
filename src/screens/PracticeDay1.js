import { StyleSheet } from "react-native";
import {
    StyleSheet,
    Text,
    Alert,
    SafeAreaView,
    Image,
    Button,
    Platform,
    StatusBar,
    TouchableOpacity,
} from "react-native";

export default function PracticeDay1() {
    function displayAlert() {
        Alert.alert("Custom Title", "Custom Message", [
            { text: "OK", onPress: () => console.log("OK Pressed!") },
            { text: "Cancel", onPress: () => console.log("Cancel Pressed!") },
        ]);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Button color={"orange"} onPress={displayAlert} title="Button" />

            <Text numberOfLines={1}>
                This view contains a lot of text. That should span on multiple
                lines. Let's see if it goes on to multiple lines.
            </Text>

            <TouchableOpacity>
                <Image
                    source={{
                        width: 200,
                        height: 300,
                        uri: "https://picsum.photos/200/300",
                    }}
                    style={{
                        borderColor: "red",
                        borderWidth: 1,
                    }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
