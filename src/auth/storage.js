import * as SecureStore from "expo-secure-store";

const tokenKey = "authToken";

const storeToken = async (token) => {
    try {
        await SecureStore.setItemAsync(tokenKey, token);
    } catch (error) {}
};

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(tokenKey);
    } catch (error) {}
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(tokenKey);
    } catch (error) {}
};

const authStorage = {
    storeToken,
    getToken,
    removeToken,
};

export default authStorage;
