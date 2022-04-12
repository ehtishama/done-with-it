import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ErrorText from "../components/ErrorText";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import AppAcitivtyIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password"),
});

export default function RegisterScreen() {
    const [registerError, setRegisterError] = useState(false);
    const { login: tokenAuth } = useAuth();

    const registerApi = useApi(authApi.register);
    const loginApi = useApi(authApi.login);

    const handleSubmit = async ({ name, email, password }, { resetForm }) => {
        let result = await registerApi.request(name, email, password);

        if (!result.ok) {
            setRegisterError(true);
            return;
        }

        const { data: authToken } = await loginApi.request(email, password);
        tokenAuth(authToken);

        resetForm();
        setRegisterError(false);
    };

    return (
        <>
            <AppAcitivtyIndicator
                visible={loginApi.loading || registerApi.loading}
            />
            <Screen scrollable>
                <Formik
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {({ handleChange, handleSubmit, errors, values }) => (
                        <>
                            {registerError && (
                                <ErrorText>
                                    A user with the given email already exists
                                </ErrorText>
                            )}
                            <AppTextInput
                                iconName={"account"}
                                placeholder="Name"
                                onChangeText={handleChange("name")}
                                value={values.name}
                            />
                            <ErrorText>{errors.name}</ErrorText>
                            <AppTextInput
                                iconName={"email"}
                                placeholder="Email"
                                onChangeText={handleChange("email")}
                                autoCapitalize={"none"}
                                textContentType={"emailAddress"}
                                autoComplete={"email"}
                                value={values.email}
                            />
                            <ErrorText>{errors.email}</ErrorText>
                            <AppTextInput
                                iconName={"account-lock"}
                                secureTextEntry
                                placeholder="Password"
                                onChangeText={handleChange("password")}
                                value={values.password}
                            />
                            <ErrorText>{errors.password}</ErrorText>

                            <AppButton
                                title={"Register"}
                                color={colors.primary}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </Screen>
        </>
    );
}
