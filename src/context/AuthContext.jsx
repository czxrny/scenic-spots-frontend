import React, { createContext, useState, useContext } from "react";
import loginApi from "../utils/api/login";
import * as jwt_decode from "jwt-decode";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = jwt_decode(token);
            return {
                token,
                userId: payload.lid || payload.userId,
                username: payload.usr || payload.username,
                userRole: payload.rol || payload.userRole,
                expire: payload.exp,
            };
        }
        return null;
    });


    const login = async (username, password) => {
        const data = await loginApi(username, password);
        const { token } = data;
        const payload = jwt_decode(token);
        const userData = {
            token,
            userId: payload.lid || payload.userId,
            username: payload.usr || payload.username,
            userRole: payload.rol || payload.userRole,
            expire: payload.exp,
        };
        setAuth(userData);
        console.log("Login successful:", userData);
        localStorage.setItem("token", token);
    };


    const logout = () => {
        setAuth(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}