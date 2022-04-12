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

const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password"),
});

export default function RegisterScreen() {
    const [registerError, setRegisterError] = useState(false);
    const { login: tokenAuth } = useAuth();

    const handleSubmit = async ({ name, email, password }, { resetForm }) => {
        let result = await authApi.register(name, email, password);

        if (!result.ok) {
            setRegisterError(true);
            return;
        }

        const { data: authToken } = await authApi.login(email, password);
        tokenAuth(authToken);

        resetForm();
        setRegisterError(false);
    };

    return (
        <Screen>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
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
                            color={colors.secondary}
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
        </Screen>
    );
}
