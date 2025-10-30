"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AccountSummary from "./AccountSummary";
import QuickActions from "./QuickActions";
import LinkedBanks from "./LinkedBanks";
import QRSection from "./QRSection";
import RecentTransactions from "./RecentTransactions";
import { Bell, Menu } from "lucide-react";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow-sm p-4 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu size={22} />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">
              CCPI Payments
            </h1>
          </div>

          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Bell size={20} />
          </button>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          <section className="bg-white p-5 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">
              👤 Welcome, Priya Sharma
            </h2>
            <p className="text-gray-600 mt-1">
              🏦 Active Bank:{" "}
              <span className="font-medium">CCPI Bank of India</span>{" "}
              <button className="ml-2 text-blue-600 text-sm hover:underline">
                [🔄 Switch ▼]
              </button>
            </p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
              📷 My QR Code
            </button>
          </section>

          <AccountSummary />
          <QuickActions />
          <LinkedBanks />
          <RecentTransactions />
          <QRSection />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
