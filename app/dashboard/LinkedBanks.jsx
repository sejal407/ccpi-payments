"use client";
import React from "react";

const LinkedBanks = () => {
  return (
    <section className="bg-white p-5 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">🏦 Linked Banks</h2>
      <ul className="space-y-2 text-gray-700">
        <li>1️⃣ CCPI Bank of India ✅ Active</li>
        <li>2️⃣ GreenPay Finance</li>
        <li>3️⃣ Urban Bank Ltd</li>
      </ul>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
        ➕ Link Another Bank
      </button>
    </section>
  );
};

export default LinkedBanks;
