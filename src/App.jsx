import { Routes, Route } from "react-router-dom";
import TrangChu from "./pages/TrangChu";
import DangNhap from "./pages/DangNhap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/dangnhap" element={<DangNhap />} />
    </Routes>
  );
}
