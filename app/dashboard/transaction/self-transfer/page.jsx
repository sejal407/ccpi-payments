"use client";

import { useState } from "react";

export default function SelfTransfer() {
  const banks = [
    "CCPI Bank of India",
    "GreenPay Finance",
    "Urban Bank Ltd",
    "SmartPay Co-op Bank"
  ];

  const [fromBank, setFromBank] = useState("");
  const [toBank, setToBank] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = () => {
    alert(`✅ ₹${amount} transferred from ${fromBank} → ${toBank}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow space-y-4">
      <h1 className="text-xl font-semibold">Self Transfer</h1>

      <select
        className="border p-3 rounded-lg w-full"
        onChange={(e) => setFromBank(e.target.value)}
      >
        <option>Select From Bank</option>
        {banks.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>

      <select
        className="border p-3 rounded-lg w-full"
        onChange={(e) => setToBank(e.target.value)}
      >
        <option>Select To Bank</option>
        {banks.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Enter Amount"
        className="border p-3 rounded-lg w-full"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleTransfer}
        className="w-full bg-blue-600 text-white p-3 rounded-lg"
      >
        Transfer →
      </button>
    </div>
  );
}
