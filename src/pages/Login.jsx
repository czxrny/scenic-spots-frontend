import React from "react";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";

function Login() {
    const { auth } = useAuth();

    return (
        <div className="w-full flex items-center h-full  justify-center min-h-[80vh]">
            <div className="w-full max-w-md">
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;