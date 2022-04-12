import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import ErrorText from "../components/ErrorText";
import AppButton from "../components/AppButton";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    email: Yup.string().label("Email").email().required(),
    password: Yup.string().label("Password").min(5).required(),
});

export default function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);

        setLoginFailed(false);
        login(result.data);
    };

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
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ handleChange, errors, handleSubmit }) => (
                    <>
                        {loginFailed && (
                            <ErrorText>Invalid email and/or password</ErrorText>
                        )}
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
