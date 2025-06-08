import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [registerFailed, setRegisterFailed] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await register(email, username, password);
      console.log("Registration successful");
      navigate("/");
    } catch (error) {
      setRegisterFailed(true);
      console.error("Registration failed:", error);
    }
  };

  return (
    <section className="bg-bg dark:bg-bg">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
        <div className="w-full bg-white dark:bg-bg rounded-lg shadow dark:border dark:border-secondary sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-text">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-bg border border-secondary text-text rounded-lg block w-full p-2.5"
                  placeholder="yourname"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-bg border border-secondary text-text rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-text">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-bg border border-secondary text-text rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>

              {registerFailed && (
                <p className="text-red-500 text-sm">
                  Registration failed. Please check your inputs.
                </p>
              )}

              <p className="text-sm font-light text-secondary">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-primary hover:underline">
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
