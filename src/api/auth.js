import { apiClient } from "./apiClient";

const endpoint = "/auth";

function login(email, password) {
    return apiClient.post(endpoint, { email, password });
}

export default {
    login,
};
