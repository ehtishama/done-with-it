import { create } from "apisauce";
import authStorage from "../auth/storage";

export const apiClient = create({
    baseURL: "http://192.168.43.163:9001/api/",
});

apiClient.addAsyncRequestTransform(async (request) => {
    const token = await authStorage.getToken();
    if (!token) return;

    request.headers["x-auth-token"] = token;
});
