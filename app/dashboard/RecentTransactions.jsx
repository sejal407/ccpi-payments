"use client";
import React from "react";

const RecentTransactions = () => (
  <section className="bg-white p-5 rounded-2xl shadow-sm">
    <h2 className="text-lg font-semibold text-gray-800 mb-3">
      📜 Recent Transactions
    </h2>
    <ul className="space-y-2 text-gray-700">
      <li>✅ Sent ₹1,500 to Ankit (Today)</li>
      <li>💰 Received ₹2,000 from Riya (Yesterday)</li>
      <li>🧾 Paid ₹799 to Netflix (25 Oct)</li>
    </ul>
  </section>
);

export default RecentTransactions;
