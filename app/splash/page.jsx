"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 2500); 
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-600 text-white">
      <h1 className="text-3xl font-bold mb-4 animate-pulse">🏦 CCPI PAYMENTS</h1>
      <p className="text-lg">Secure Multi-Bank Digital Banking</p>
      <div className="mt-6 animate-spin h-10 w-10 border-4 border-white border-t-transparent rounded-full"></div>
    </div>
  );
}
