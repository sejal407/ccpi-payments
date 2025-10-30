"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PinSetupPage() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();
    if (pin === confirmPin && pin.length === 4) {
      alert("PIN created successfully!");
      router.push("/dashboard");
    } else {
      alert("PINs do not match or not 4 digits!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Set Transaction PIN</h1>
        <form onSubmit={handleContinue} className="flex flex-col space-y-4">
          <input
            type="password"
            maxLength={4}
            placeholder="Enter 4-digit PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            className="border p-3 rounded-md text-center text-lg tracking-widest focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            maxLength={4}
            placeholder="Confirm PIN"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
            required
            className="border p-3 rounded-md text-center text-lg tracking-widest focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
