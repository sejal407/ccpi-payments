"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LinkNewBank() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedBank, setSelectedBank] = useState("");

  const banks = [
    "CCPI Bank of India",
    "GreenPay Finance",
    "SmartPay Co-op Bank",
    "Urban Bank Ltd",
  ];

  return (
    <div className="p-6 min-h-screen bg-white">
      
      {/* STEP 1 (Select Bank) */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border max-w-2xl mx-auto">
          <h1 className="text-xl font-semibold mb-5">Select Bank to Link</h1>

          <div className="space-y-4">
            {banks.map((bank) => (
              <label
                key={bank}
                className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition"
              >
                <input
                  type="radio"
                  name="bank"
                  value={bank}
                  onChange={() => setSelectedBank(bank)}
                  className="h-4 w-4"
                />
                <span className="text-base">{bank}</span>
              </label>
            ))}
          </div>

          <button
            disabled={!selectedBank}
            onClick={() => setStep(2)}
            className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
          >
            Continue →
          </button>
        </div>
      )}

      {/* STEP 2 (OTP) */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            OTP Verification ({selectedBank})
          </h2>

          <input
            type="text"
            maxLength={6}
            className="border p-3 w-full rounded-lg mb-3"
            placeholder="Enter 6 digit OTP"
          />

          <div className="flex justify-between mt-2">
            <button className="text-blue-600 font-medium">Resend OTP</button>

            <button
              onClick={() => router.push("/dashboard")}
              className="px-6 py-2 bg-green-600 text-white rounded-lg"
            >
              Verify ✅
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
