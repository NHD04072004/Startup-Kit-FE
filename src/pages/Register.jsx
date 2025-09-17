import { useState } from "react";
import logo from "../assets/images/logo.png";
import sidebar_register from "../assets/images/sidebar_register.png";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "startup",
    company: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
    console.log("Registration data:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gradient-to-b from-[#FFCE23]/10 to-white">
        <div className="container flex">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <img
              src={logo}
              alt="Logo"
              className="mx-auto mb-6"
              width={300}
              height={300}
            />
            {/* Registration Form */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFCE23] focus:border-[#FFCE23] transition-colors"
                    placeholder="Nhập tên đăng nhập"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFCE23] focus:border-[#FFCE23] transition-colors"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>

                {/* Company/Organization (conditional) */}
                {(formData.userType === "investor" ||
                  formData.userType === "mentor") && (
                  <div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFCE23] focus:border-[#FFCE23] transition-colors"
                      placeholder={
                        formData.userType === "investor"
                          ? "Tên quỹ đầu tư hoặc công ty"
                          : "Tên tổ chức bạn đang làm việc"
                      }
                    />
                  </div>
                )}

                {/* Password */}
                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFCE23] focus:border-[#FFCE23] transition-colors"
                      placeholder="Nhập mật khẩu"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFCE23] focus:border-[#FFCE23] transition-colors"
                      placeholder="Nhập lại mật khẩu"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>
                
                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Xác nhận vai trò:
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        formData.userType === "startup"
                          ? "border-[#FFCE23] bg-[#FFF9E0]"
                          : "border-gray-200 hover:border-[#FFCE23]"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          userType: "startup",
                        }))
                      }
                    >
                      <input
                        type="radio"
                        name="userType"
                        value="startup"
                        checked={formData.userType === "startup"}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-lg mb-1">🚀</div>
                        <div className="font-medium text-sm">Startup</div>
                      </div>
                    </div>
                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        formData.userType === "investor"
                          ? "border-[#FFCE23] bg-[#FFF9E0]"
                          : "border-gray-200 hover:border-[#FFCE23]"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          userType: "investor",
                        }))
                      }
                    >
                      <input
                        type="radio"
                        name="userType"
                        value="investor"
                        checked={formData.userType === "investor"}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-lg mb-1">💰</div>
                        <div className="font-medium text-sm">Nhà đầu tư</div>
                      </div>
                    </div>
                    <div
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        formData.userType === "mentor"
                          ? "border-[#FFCE23] bg-[#FFF9E0]"
                          : "border-gray-200 hover:border-[#FFCE23]"
                      }`}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, userType: "mentor" }))
                      }
                    >
                      <input
                        type="radio"
                        name="userType"
                        value="mentor"
                        checked={formData.userType === "mentor"}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-lg mb-1">👨‍🏫</div>
                        <div className="font-medium text-sm">Mentor</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-[#FFCE23] border-gray-300 rounded focus:ring-[#FFCE23]"
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                    Tôi đồng ý với{" "}
                    <a href="#" className="text-[#FFCE23] hover:underline">
                      Điều khoản dịch vụ
                    </a>{" "}
                    và{" "}
                    <a href="#" className="text-[#FFCE23] hover:underline">
                      Chính sách bảo mật
                    </a>{" "}
                    của StartupKit
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.agreeTerms}
                  className="w-full bg-[#FFCE23] hover:bg-[#FFD600] disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-bold py-3 px-6 rounded-md text-sm md:text-base transition-all duration-200"
                >
                  Tạo tài khoản
                </button>

                {/* Login Link */}
                <div className="text-center text-sm text-gray-600">
                  Đã có tài khoản?{" "}
                  <a
                    href="#"
                    className="text-[#FFCE23] hover:underline font-medium"
                  >
                    Đăng nhập ngay
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8">
            <img src={sidebar_register} alt="Logo" className="mx-auto mb-6" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
