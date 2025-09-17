import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

export default function InvestorList() {
  const investors = [
    {
      avatar: "/src/assets/investor1.png",
      name: "N. V. An",
      desc: "Đầu tư công nghệ",
      tag: "NĐT cá nhân",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/investor2.png",
      name: "T. T. Bình",
      desc: "Đầu tư y tế",
      tag: "NĐT cá nhân",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/investor3.png",
      name: "L. Q. Cường",
      desc: "Đầu tư giáo dục",
      tag: "NĐT cá nhân",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/investor4.png",
      name: "P. M. Đức",
      desc: "Đầu tư tài chính",
      tag: "NĐT cá nhân",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/investor5.png",
      name: "N. T. Hạnh",
      desc: "Đầu tư năng lượng",
      tag: "NĐT cá nhân",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/investor6.png",
      name: "V. H. Long",
      desc: "Đầu tư TMĐT",
      tag: "NĐT cá nhân",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/investor7.png",
      name: "Đ. T. Mai",
      desc: "Đầu tư AI",
      tag: "NĐT cá nhân",
      button: "Kết nối",
    },
    // Quỹ đầu tư giữ nguyên
    {
      avatar: "/src/assets/fund1.png",
      name: "Golden Gate Ventures",
      desc: "Quỹ đầu tư mạo hiểm",
      tag: "Quỹ đầu tư",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/fund2.png",
      name: "500 Startups Vietnam",
      desc: "Quỹ đầu tư Seed & Series A",
      tag: "Quỹ đầu tư",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/fund3.png",
      name: "VinaCapital Ventures",
      desc: "Quỹ đầu tư chiến lược",
      tag: "Quỹ đầu tư",
      button: "Kết nối",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % investors.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [startIndex, investors.length]);

  // Hiển thị 5 nhà đầu tư/quỹ đầu tư liên tiếp, tự động lặp lại
  const visibleInvestors = Array.from({ length: 5 }, (_, i) => {
    return investors[(startIndex + i) % investors.length];
  });

  return (
    <section className="max-w-6xl mx-auto mt-10 text-center px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
         Nhà đầu tư & Quỹ đầu tư tiêu biểu
      </h2>
      <p className="text-gray-500 mb-6 text-sm md:text-base">
        Khám phá các nhà đầu tư cá nhân và quỹ đầu tư nổi bật
      </p>
      <div className="flex flex-col gap-3 md:flex-row md:gap-6 justify-center pb-4">
        {visibleInvestors.map((i, idx) => (
          <div key={idx + startIndex} className="flex-shrink-0">
            <ProfileCard {...i} />
          </div>
        ))}
      </div>
    </section>
  );
}
