import jwtDecode from "jwt-decode";
import { useContext } from "react";

import AuthContext from "./context";
import authStorage from "./storage";

export default function useAuth() {
    const { user, setUser } = useContext(AuthContext);

    const logout = () => {
        setUser(null);
        authStorage.removeToken();
    };

    const login = (authToken) => {
        setUser(jwtDecode(authToken));
        authStorage.storeToken(authToken);
    };

    return { user, setUser, logout, login };
}
