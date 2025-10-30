"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  // Dummy existing users (later replace with backend check)
  const existingUsers = ["test@gmail.com", "user@gmail.com"];

  const handleContinue = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email!");
      return;
    }

    if (existingUsers.includes(email)) {
      // ✅ Existing user → OTP Login
      router.push("/otp");
    } else {
      // 🆕 New user → Go to Bank Selection
      router.push("/bank-select");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4 text-sky-700">
          Login to CCPI
        </h2>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-4 focus:ring-2 focus:ring-sky-400 outline-none"
        />

        <button
          onClick={handleContinue}
          className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
