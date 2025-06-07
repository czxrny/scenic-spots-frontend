import React from "react";

export default function LoginForm() {
    return (
        <section className="bg-bg dark:bg-bg">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white dark:bg-bg rounded-lg shadow dark:border dark:border-secondary md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl dark:text-text">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-text dark:text-text">Your email</label>
                                <input
                                    type="email"
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
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-secondary rounded bg-bg focus:ring-3 focus:ring-primary dark:bg-bg dark:border-secondary"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-secondary dark:text-secondary">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary hover:underline dark:text-primary">Forgot password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary-hover"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-secondary dark:text-secondary">
                                Don’t have an account yet?{" "}
                                <a href="#" className="font-medium text-primary hover:underline dark:text-primary">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}