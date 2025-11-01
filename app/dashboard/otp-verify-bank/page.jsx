"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const OTPVerifyBank = () => {
  const router = useRouter();
  const params = useSearchParams();
  const bank = params.get("bank");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (otp.length < 6) {
      alert("Enter valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert(`✅ ${bank} linked successfully!`);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50">
      <h1 className="text-xl font-semibold text-gray-800">✅ OTP Verification</h1>

      <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
        <p className="text-gray-700">
          Enter the OTP sent to your registered email to link:
          <br />
          <span className="font-semibold text-blue-600">{bank}</span>
        </p>

        <input
          type="number"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.slice(0, 6))}
          className="w-full border border-gray-300 rounded-xl p-3 text-lg tracking-widest text-center"
          placeholder="● ● ● ● ● ●"
        />

        <div className="flex justify-between items-center text-sm">
          <button className="text-blue-600">⟳ Resend OTP</button>
        </div>

        <button
          onClick={handleVerify}
          className="w-full mt-4 px-4 py-3 bg-green-600 text-white rounded-xl font-medium"
        >
          {loading ? "Verifying..." : "✅ Verify"}
        </button>
      </div>
    </div>
  );
};

export default OTPVerifyBank;
