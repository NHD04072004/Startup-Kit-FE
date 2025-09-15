import { Routes, Route } from "react-router";
import TrangChu from "./pages/TrangChu";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TrangChu />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
