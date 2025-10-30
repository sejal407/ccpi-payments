"use client";
import React from "react";
import { Send, RefreshCw, ScanLine, FileText } from "lucide-react";

const actions = [
  { icon: <Send />, label: "Send Money" },
  { icon: <RefreshCw />, label: "Self Transfer" },
  { icon: <ScanLine />, label: "Scan & Pay" },
  { icon: <FileText />, label: "Transactions" },
];

const QuickActions = () => {
  return (
    <section className="bg-white p-5 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">⚡ Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {actions.map((a, i) => (
          <button
            key={i}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium"
          >
            {a.icon} {a.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
