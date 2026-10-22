"use client";

import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]*$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
const PHONE_REGEX = /^\d{10}$/;

const validateField = (field: keyof FormData, value: string): string => {
  const v = value.trim();

  switch (field) {
    case "name":
      if (!v) return "Full name is required.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      if (!NAME_REGEX.test(v)) return "Name can only contain letters.";
      return "";
    case "email":
      if (!v) return "Email address is required.";
      if (!EMAIL_REGEX.test(v)) return "Please enter a valid email address.";
      return "";
    case "phone":
      if (!v) return ""; // optional
      if (!PHONE_REGEX.test(v)) return "Phone number must be exactly 10 digits.";
      return "";
    default:
      return "";
  }
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    // Phone: keep digits only, max 10
    if (field === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [field]: value }));

    // Re-validate live once the field already shows an error
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
    if (status) setStatus(null);
  };

  const handleBlur = (field: keyof FormData) => {
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, formData[field]),
    }));
  };

  const validateAll = (): boolean => {
    const newErrors: Errors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!validateAll()) {
      setStatus({
        type: "error",
        text: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      // Safe parse: the server might return a non-JSON error page
      let data: { success?: boolean; message?: string; debug?: string } = {};
      try {
        data = await res.json();
      } catch {
        data = { success: false, message: `Server error (${res.status})` };
      }

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          text: "Thank you! Your message has been sent. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        console.error("API error:", data.debug || data.message);
        setStatus({
          type: "error",
          text:
            data.message || "Failed to send your message. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
      errors[field]
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-blue-500"
    }`;

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ready to improve your workplace safety? Get in touch with our
              experts for a free consultation and custom quote tailored to your
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Send Us A Message
            </h2>

            {/* Inline status message */}
            {status && (
              <div
                role="status"
                className={`mb-6 rounded-md border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-green-300 bg-green-50 text-green-800"
                    : "border-red-300 bg-red-50 text-red-800"
                }`}
              >
                {status.text}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={inputClass("name")}
                  placeholder="Your Full Name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={inputClass("email")}
                  placeholder="your@email.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  className={inputClass("phone")}
                  placeholder="10-digit number (Optional)"
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className={inputClass("message")}
                  placeholder="Tell us more about your needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-800"
                } text-white font-medium py-3 px-6 rounded-md transition-colors duration-200`}
              >
                {loading && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}