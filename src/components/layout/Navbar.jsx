import { useState } from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-100 overflow-visible">
      <div className="flex items-center justify-between px-4 md:px-8 h-16 overflow-visible">
        {/* Logo giữ nguyên kích thước trên mọi thiết bị */}
        <img
          src="src/assets/images/logo.png"
          alt="Logo"
          className="h-12 md:h-16 w-auto object-contain origin-left"
          style={{ transform: "scale(1.8) translateX(12px)" }}
        />

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 ml-auto text-[#374151] text-xs md:text-sm font-medium">
          <span className="cursor-pointer hover:text-[#FFCE23] transition-colors duration-200">
            Khởi tạo dự án
          </span>
          <span className="cursor-pointer hover:text-[#FFCE23] transition-colors duration-200">
            Khám phá
          </span>
          <span className="cursor-pointer hover:text-[#FFCE23] transition-colors duration-200">
            Nền tảng của chúng tôi
          </span>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-3 ml-8">
          <button className="bg-white border border-[#FFCE23] text-black font-semibold px-3 py-1 rounded-md text-sm hover:bg-[#FFF9E0] transition-all duration-200" onClick={handleRegister}>
            Đăng Ký
          </button>
          <button className="bg-[#FFCE23] hover:bg-[#FFD600] text-black font-semibold px-3 py-1 rounded-md text-sm transition-all duration-200">
            Đăng nhập
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setShowMenu((v) => !v)}
          aria-label="Mở menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="#374151" />
            <rect y="11" width="24" height="2" rx="1" fill="#374151" />
            <rect y="17" width="24" height="2" rx="1" fill="#374151" />
          </svg>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {showMenu && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2 text-[#374151] text-xs font-medium z-50">
          <span className="cursor-pointer hover:text-[#FFCE23] transition-colors duration-200 py-2 border-b border-gray-100 text-center">
            Khởi tạo dự án
          </span>
          <span className="cursor-pointer hover:text-[#FFCE23] transition-colors duration-200 py-2 border-b border-gray-100 text-center">
            Khám phá
          </span>
          <span className="cursor-pointer hover:text-[#FFCE23] transition-colors duration-200 py-2 border-b border-gray-100 text-center">
            Nền tảng
          </span>
          <div className="flex flex-col gap-2 mt-3">
            <button className="bg-white border border-[#FFCE23] text-black font-semibold px-3 py-1 rounded-md text-xs hover:bg-[#FFF9E0] transition-all duration-200 w-full">
              Đăng Ký
            </button>
            <button className="bg-[#FFCE23] hover:bg-[#FFD600] text-black font-semibold px-3 py-1 rounded-md text-xs transition-all duration-200 w-full">
              Đăng nhập
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
