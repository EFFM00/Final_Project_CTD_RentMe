import { api } from "./api/api";

export const register = async (newUser) => {
    let resp = await api.post("/auth/register", newUser)

    return resp;

    // console.log(newUser)
}

export const login = async (credentials) => {
    let resp = await api.post("/auth/login", credentials)

    return resp;
}