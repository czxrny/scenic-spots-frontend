import React from "react";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";

function Login() {
    const { auth } = useAuth();

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-bg">
            <div className="w-full max-w-md">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;