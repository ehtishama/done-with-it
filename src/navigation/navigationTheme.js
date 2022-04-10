import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white,
    },
};
