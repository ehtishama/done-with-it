import * as SecureStore from "expo-secure-store";

const tokenKey = "authToken";

const storeToken = async (token) => {
    try {
        await SecureStore.setItemAsync(tokenKey, token);
    } catch (error) {
        console.error(error);
    }
};

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(tokenKey);
    } catch (error) {
        console.error(error);
    }
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(tokenKey);
    } catch (error) {
        console.error(error);
    }
};

const authStorage = {
    storeToken,
    getToken,
    removeToken,
};

export default authStorage;
