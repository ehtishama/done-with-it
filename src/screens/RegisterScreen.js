import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { Formik } from "formik";
import ErrorText from "../components/ErrorText";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).required().label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password"),
});

export default function RegisterScreen() {
    return (
        <Screen>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            iconName={"account"}
                            placeholder="Name"
                            onChangeText={handleChange("name")}
                        />
                        <ErrorText>{errors.name}</ErrorText>
                        <AppTextInput
                            iconName={"email"}
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            autoCapitalize={"none"}
                            textContentType={"emailAddress"}
                            autoComplete={"email"}
                        />
                        <ErrorText>{errors.email}</ErrorText>
                        <AppTextInput
                            iconName={"account-lock"}
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={handleChange("password")}
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
