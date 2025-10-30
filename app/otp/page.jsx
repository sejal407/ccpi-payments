"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === "123456") router.push("/pin-setup");
    else alert("Invalid OTP! Try 123456");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Enter OTP</h1>
        <form onSubmit={handleVerify} className="flex flex-col space-y-4">
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="border p-3 rounded-md text-center text-lg tracking-widest focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Verify OTP
          </button>
          <button
            type="button"
            onClick={() => alert("OTP resent! (demo)")}
            className="text-blue-500 underline text-sm"
          >
            Resend OTP
          </button>
        </form>
      </div>
    </div>
  );
}
