import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { Formik } from "formik";
import AppTextInput from "../components/AppTextInput";
import ErrorText from "../components/ErrorText";
import AppButton from "../components/AppButton";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
    email: Yup.string().label("Email").email().required(),
    password: Yup.string().label("Password").min(8).required(),
});
export default function LoginScreen() {
    const navigation = useNavigation();

    return (
        <Screen>
            <Image
                source={require("../../assets/logo-red.png")}
                style={styles.logo}
            />

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => navigation.navigate("TabbedHome")}
                validationSchema={validationSchema}
            >
                {({ handleChange, errors, handleSubmit }) => (
                    <>
                        <AppTextInput
                            iconName={"email"}
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            autoCapitalize={"none"}

                        />
                        <ErrorText>{errors.email}</ErrorText>
                        <AppTextInput
                            iconName={"account-lock"}
                            placeholder="password"
                            onChangeText={handleChange("password")}
                            secureTextEntry
                        />
                        <ErrorText>{errors.password}</ErrorText>

                        <AppButton title={"Login"} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {},
    logo: {
        height: 70,
        width: 70,
        alignSelf: "center",
        marginVertical: 80,
    },
});
