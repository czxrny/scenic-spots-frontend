import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
    const [loginFailed, setLoginFailed] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const onSubmint = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            await login(email, password);
            console.log("Login successful");
            navigate("/");
        } catch (error) {
            setLoginFailed(true);
            console.error("Login failed:", error);
        }
    }

    return (
        <section className="bg-bg dark:bg-bg">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
                <div className="w-full bg-white dark:bg-bg rounded-lg shadow dark:border dark:border-secondary md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl dark:text-text">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmint}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-text dark:text-text">Your email</label>
                                <input

                                    name="email"
                                    id="email"
                                    className="bg-bg border border-secondary text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-bg dark:border-secondary dark:placeholder-gray-400 dark:text-text"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-text dark:text-text">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-bg border border-secondary text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-bg dark:border-secondary dark:placeholder-gray-400 dark:text-text"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary-hover"
                            >
                                Sign in
                            </button>
                            {loginFailed && (
                                <p className="text-red-500 text-sm">
                                    Login failed. Please check your email and password.
                                </p>
                            )}

                            <p className="text-sm font-light text-secondary dark:text-secondary">
                                Don’t have an account yet?{" "}
                                <a href="/register" className="font-medium text-primary hover:underline dark:text-primary">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}