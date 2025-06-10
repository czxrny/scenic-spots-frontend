import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function NewSpot() {
  const { auth } = useAuth();
  const token = auth?.token || "";

  const [form, setForm] = useState({
    name: "",
    description: "",
    latitude: "",
    longitude: "",
    category: "",
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  if (!token) {
    return (
      <div className="max-w-md mx-auto mt-16 p-6 bg-red-100 text-red-700 rounded">
        Zaloguj się aby dodać nowy spot.
      </div>
    );
  }

  const validate = () => {
    const errs = {};

  if (!form.name.trim()) {
    errs.name = "Nazwa jest wymagana";
  } else if (form.name.length > 32) {
    errs.name = "Nazwa może mieć maksymalnie 32 znaki";
  }

  if (form.description.length > 300) {
    errs.description = "Opis może mieć maksymalnie 300 znaków";
  }

  const lat = parseFloat(form.latitude);
  if (isNaN(lat)) {
    errs.latitude = "Szerokość geograficzna jest wymagana i musi być liczbą";
  } else if (lat < -90 || lat > 90) {
    errs.latitude = "Szerokość geograficzna musi być między -90 a 90";
  }

  const lng = parseFloat(form.longitude);
  if (isNaN(lng)) {
    errs.longitude = "Długość geograficzna jest wymagana i musi być liczbą";
  } else if (lng < -180 || lng > 180) {
    errs.longitude = "Długość geograficzna musi być między -180 a 180";
  }

  if (!form.category.trim()) {
    errs.category = "Kategoria jest wymagana";
  } else if (form.category.length > 32) {
    errs.category = "Kategoria może mieć maksymalnie 32 znaki";
  }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");
    if (!validate()) return;

    try {
      await fetch("http://localhost:8080/spot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: form.name.trim(),
          description: form.description.trim(),
          latitude: parseFloat(form.latitude),
          longitude: parseFloat(form.longitude),
          category: form.category.trim(),
        }),
      });
      setSubmitMessage("Spot created successfully!");
      setForm({
        name: "",
        description: "",
        latitude: "",
        longitude: "",
        category: "",
      });
      setErrors({});
    } catch (error) {
      setSubmitMessage("Failed to create spot. Try again.");
    }
  };

  return (
    <section className="bg-bg dark:bg-bg min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-bg rounded-lg shadow dark:border dark:border-secondary p-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl dark:text-text mb-6 text-center">
          Dodaj nowy spot
        </h1>
        <form onSubmit={handleSubmit} noValidate className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-text dark:text-text"
            >
              Nazwa*
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              maxLength={32}
              required
              className={`bg-bg border ${
                errors.name ? "border-red-500" : "border-secondary"
              } text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-bg dark:border-secondary dark:placeholder-gray-400 dark:text-text`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-text dark:text-text"
            >
              Opis
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              maxLength={300}
              rows={4}
              className={`bg-bg border ${
                errors.description ? "border-red-500" : "border-secondary"
              } text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-bg dark:border-secondary dark:placeholder-gray-400 dark:text-text`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="latitude"
              className="block mb-2 text-sm font-medium text-text dark:text-text"
            >
              Szerokość geograficzna*
            </label>
            <input
              id="latitude"
              name="latitude"
              type="number"
              step="any"
              min={-90}
              max={90}
              value={form.latitude}
              onChange={handleChange}
              required
              className={`bg-bg border ${
                errors.latitude ? "border-red-500" : "border-secondary"
              } text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-bg dark:border-secondary dark:placeholder-gray-400 dark:text-text`}
            />
            {errors.latitude && (
              <p className="text-red-500 text-sm mt-1">{errors.latitude}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="longitude"
              className="block mb-2 text-sm font-medium text-text dark:text-text"
            >
              Wysokość geograficzna*
            </label>
            <input
              id="longitude"
              name="longitude"
              type="number"
              step="any"
              min={-180}
              max={180}
              value={form.longitude}
              onChange={handleChange}
              required
              className={`bg-bg border ${
                errors.longitude ? "border-red-500" : "border-secondary"
              } text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-bg dark:border-secondary dark:placeholder-gray-400 dark:text-text`}
            />
            {errors.longitude && (
              <p className="text-red-500 text-sm mt-1">{errors.longitude}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-text dark:text-text"
            >
              Kategoria*
            </label>
            <input
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              maxLength={32}
              required
              className={`bg-bg border ${
                errors.category ? "border-red-500" : "border-secondary"
              } text-text rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-bg dark:border-secondary dark:placeholder-gray-400 dark:text-text`}
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary-hover transition"
          >
            Dodaj spot
          </button>

          {submitMessage && (
            <p className="mt-4 text-center font-medium text-text dark:text-text">
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
