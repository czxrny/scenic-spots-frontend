import React from "react";
import { useAuth } from "../context/AuthContext";
import RegisterForm from "../components/RegisterForm";

function Register() {
    const { auth } = useAuth();

    return (
        <div className="w-full flex items-center h-full  justify-center min-h-[80vh]">
            <div className="w-full max-w-md">
                <RegisterForm />
            </div>
        </div>
    );
}

export default Register;