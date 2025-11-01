"use client";
import { useRouter } from "next/navigation";

export default function LinkedBanks() {
  const router = useRouter();

  return (
    <section className="bg-white p-5 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold mb-3">🏦 Linked Banks</h2>

      <ul className="space-y-2 text-gray-700">
        <li>1️⃣ CCPI Bank of India ✅ Active</li>
        <li>2️⃣ GreenPay Finance</li>
        <li>3️⃣ Urban Bank Ltd</li>
        <li>4️⃣ SmartPay Co-op Bank</li> 
      </ul>

      <button
        onClick={() => router.push("/dashboard/link-new-bank")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        ➕ Link Another Bank
      </button>
    </section>
  );
}
