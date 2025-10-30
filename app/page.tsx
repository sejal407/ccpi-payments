"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 2500);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-600 text-white">
      <h1 className="text-3xl font-bold mb-3">🏦 CCPI PAYMENTS</h1>
      <p className="text-lg">Secure Multi-Bank Digital Banking</p>
      <div className="mt-6 animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent"></div>
    </div>
  );
}
