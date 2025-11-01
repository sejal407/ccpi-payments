"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SendMoney() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  const CHARGE = 2;

  return (
    <div className="max-w-xl mx-auto p-6">
      
      {/* STEP 1 */}
      {step === 1 && (
        <div className="bg-white p-6 shadow rounded-xl space-y-4">
          <h1 className="text-xl font-semibold">Send Money</h1>

          <input
            type="text"
            placeholder="Email / Account No / QR Scan"
            className="border p-3 rounded-lg w-full"
            onChange={(e) => setReceiver(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Amount"
            className="border p-3 rounded-lg w-full"
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            type="text"
            placeholder="Remarks (optional)"
            className="border p-3 rounded-lg w-full"
            onChange={(e) => setRemarks(e.target.value)}
          />

          <button
            disabled={!receiver || !amount}
            onClick={() => setStep(2)}
            className="w-full bg-blue-600 text-white p-3 rounded-lg disabled:bg-gray-300"
          >
            Continue →
          </button>
        </div>
      )}

      {/* STEP 2 — PREVIEW */}
      {step === 2 && (
        <div className="bg-white p-6 shadow rounded-xl space-y-4">
          <h1 className="text-xl font-semibold">Transaction Preview</h1>

          <p>Amount: ₹{amount}</p>
          <p>CCPI Charges: ₹{CHARGE}</p>
          <hr />
          <p className="font-bold text-lg">Total: ₹{Number(amount) + CHARGE}</p>

          <button
            onClick={() => setStep(3)}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Enter PIN →
          </button>
        </div>
      )}

      {/* STEP 3 — PIN */}
      {step === 3 && (
        <div className="bg-white p-6 shadow rounded-xl space-y-4">
          <h1 className="text-xl font-semibold">Enter PIN</h1>

          <input
            type="password"
            maxLength={4}
            className="border p-3 rounded-lg w-full"
            placeholder="****"
          />

          <button
            onClick={() => {
              alert(`✅ ₹${amount} sent successfully.`);
              router.push("/dashboard");
            }}
            className="w-full bg-green-600 text-white p-3 rounded-lg"
          >
            ✅ Confirm
          </button>
        </div>
      )}
    </div>
  );
}
