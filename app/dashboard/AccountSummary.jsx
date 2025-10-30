"use client";
import React from "react";
import { CreditCard, PiggyBank, Calendar, DollarSign } from "lucide-react";

const AccountSummary = () => {
  const items = [
    { icon: <CreditCard />, label: "Savings Account - ₹12,450" },
    { icon: <PiggyBank />, label: "FD - ₹50,000 (Active)" },
    { icon: <Calendar />, label: "RD - ₹2,000/month" },
    { icon: <DollarSign />, label: "Loan - ₹25,000 (Active)" },
  ];

  return (
    <section className="bg-white p-5 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        💰 Accounts Summary
      </h2>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.icon} {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AccountSummary;
