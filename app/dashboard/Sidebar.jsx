"use client";

import {
  Home,
  Banknote,
  CreditCard,
  Send,
  Repeat,
  ScanLine,
  FileText,
  QrCode,
  Plus,
  Settings,
  User,
  LogOut,
} from "lucide-react";

import Link from "next/link";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-30"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-40 shadow-lg transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* User Info */}
        <div className="p-5 border-b bg-white">
          <h2 className="text-lg font-semibold">Priya Sharma</h2>
          <p className="text-gray-600 text-sm">priya@gmail.com</p>
          <p className="text-blue-600 mt-1 text-sm">CCPI Bank of India</p>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2 text-gray-700">
          <SidebarItem icon={<Home size={18} />} text="Dashboard" link="/dashboard" />
          <SidebarItem icon={<Banknote size={18} />} text="Linked Banks" link="/dashboard" />
          <SidebarItem icon={<CreditCard size={18} />} text="My Accounts" link="/dashboard" />

          {/* ✅ Transactions */}
          <SidebarItem icon={<Send size={18} />} text="Send Money" link="/dashboard/transaction/send-money" />
          <SidebarItem icon={<Repeat size={18} />} text="Self Transfer" link="/dashboard/transaction/self-transfer" />
          <SidebarItem icon={<ScanLine size={18} />} text="Scan & Pay" link="/dashboard/transaction/scan-pay" />
          <SidebarItem icon={<FileText size={18} />} text="Transaction History" link="/dashboard/transaction/history" />

          <SidebarItem icon={<QrCode size={18} />} text="My QR Code" link="/dashboard/transaction/my-qr" />
          <SidebarItem icon={<Plus size={18} />} text="Link New Bank" link="/dashboard/link-new-bank" />

          <SidebarItem icon={<Settings size={18} />} text="Settings" link="/dashboard" />
          <SidebarItem icon={<User size={18} />} text="Profile" link="/dashboard" />
          <SidebarItem icon={<LogOut size={18} />} text="Logout" link="/login" />
        </nav>
      </div>
    </>
  );
}

/* ✅ Sidebar Menu Component */
function SidebarItem({ icon, text, link }) {
  return (
    <Link href={link}>
      <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-left">
        {icon}
        <span>{text}</span>
      </button>
    </Link>
  );
}
