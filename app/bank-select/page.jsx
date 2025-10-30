"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BankSelectPage() {
  const router = useRouter();
  const [bank, setBank] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();
    if (bank) router.push("/otp");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Select Your Bank</h1>
        <form onSubmit={handleContinue} className="flex flex-col space-y-3">
          {["CCPI Bank of India", "GreenPay Finance", "Urban Bank Ltd", "SmartPay Co-op Bank"].map(
            (b) => (
              <label
                key={b}
                className={`border p-3 rounded-md cursor-pointer ${
                  bank === b ? "bg-blue-100 border-blue-500" : ""
                }`}
              >
                <input
                  type="radio"
                  name="bank"
                  value={b}
                  onChange={() => setBank(b)}
                  className="mr-2"
                />
                {b}
              </label>
            )
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
