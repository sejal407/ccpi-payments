import { useRouter } from "next/navigation";
import {
  Home,
  Banknote,
  CreditCard,
  Send,
  RefreshCw,
  ScanLine,
  FileText,
  QrCode,
  Plus,
  Settings,
  User,
  LogOut,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const router = useRouter();

  const menuItems = [
    { icon: <Home size={18} />, text: "Dashboard", path: "/dashboard/page" },
    { icon: <Banknote size={18} />, text: "Linked Banks", path: "/bank-select/page" },
    { icon: <CreditCard size={18} />, text: "My Accounts", path: "/dashboard/Account/page" },
    { icon: <Send size={18} />, text: "Send Money", path: "/dashboard/SendMoney/page" },
    { icon: <RefreshCw size={18} />, text: "Self Transfer", path: "/dashboard/SelfTransfer/page" },
    { icon: <ScanLine size={18} />, text: "Scan & Pay", path: "/dashboard/ScanPay/page" },
    { icon: <FileText size={18} />, text: "Transaction History", path: "/dashboard/Transaction/page" },
    { icon: <QrCode size={18} />, text: "My QR Code", path: "/dashboard/MyQR/page" },
    { icon: <Plus size={18} />, text: "Link New Bank", path: "/dashboard/LinkBank/page" },
    { icon: <Settings size={18} />, text: "Settings", path: "/dashboard/Settings/page" },
    { icon: <User size={18} />, text: "Profile", path: "/dashboard/Profile/page" },
    { icon: <LogOut size={18} />, text: "Logout", path: "/login/page" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold text-gray-800">CCPI Bank</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2 text-gray-700">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            onClick={() => router.push(item.path)}
          />
        ))}
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
  >
    {icon}
    <span>{text}</span>
  </button>
);

export default Sidebar;
