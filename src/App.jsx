import { Routes, Route } from "react-router-dom";
import TrangChu from "./pages/TrangChu";
import DangNhap from "./pages/DangNhap";
import Dashboard from "./pages/Dashboard";
import ProfileManagement from "./pages/ProfileManagement";
import CreateProjectDashboard from "./pages/CreateProjectDashboard";
import CustomProfileBuilder from "./pages/CustomProfileBuilder";
import Connections from "./pages/Connections";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/dangnhap" element={<DangNhap />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile-management" element={<ProfileManagement />} />
      <Route path="/create-project" element={<CreateProjectDashboard />} />
  <Route path="/custom-profile-builder" element={<CustomProfileBuilder />} />
  <Route path="/connections" element={<Connections />} />
    </Routes>
  );
}
