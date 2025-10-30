"use client";
import React from "react";

const QRSection = () => (
  <section className="bg-white p-5 rounded-2xl shadow-sm text-center">
    <h2 className="text-lg font-semibold text-gray-800 mb-3">📲 My QR Code</h2>
    <div className="flex justify-center">
      <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg">
        <span className="text-gray-500 text-sm">[QR Preview]</span>
      </div>
    </div>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
      🔄 Refresh QR
    </button>
  </section>
);

export default QRSection;
