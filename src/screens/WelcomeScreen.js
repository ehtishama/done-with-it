import {
    Text,
    View,
    StyleSheet,
    Platform,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../assets/background.jpg")}
                style={styles.background}
            >
                <View style={styles.header}>
                    <Image
                        source={require("../../assets/logo-red.png")}
                        style={styles.logo}
                    />
                    <Text>Sell What You Don't Need</Text>
                </View>

                <View style={styles.buttons}>
                    <AppButton
                        title={"Register"}
                        color={colors.primary}
                        onPress={() => navigation.navigate("Register")}
                    />
                    <AppButton
                        title={"Login"}
                        color={colors.secondary}
                        onPress={() => navigation.navigate("Login")}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    header: {
        alignItems: "center",
        top: 70,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    buttons: {
        marginTop: "auto",
        paddingHorizontal: 20,
    },
});
