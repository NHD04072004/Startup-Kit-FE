import { useState, useEffect } from "react";
import StartupCard from "./StartupCard";

export default function StartupList() {
  const startups = [
    {
      img: "/src/assets/techflow.png",
      title: "TechFlow",
      desc: "Tự động hóa quy trình bằng AI",
      tag: "SaaS",
      stage: "Series A",
    },
    {
      img: "/src/assets/financehub.png",
      title: "FinanceHub",
      desc: "Giải pháp tài chính thông minh",
      tag: "Fintech",
      stage: "Seed",
    },
    {
      img: "/src/assets/eduspace.png",
      title: "EduSpace",
      desc: "Nền tảng học trực tuyến",
      tag: "Edtech",
      stage: "Pre-seed",
    },
    {
      img: "/src/assets/healthplus.png",
      title: "HealthPlus",
      desc: "Giải pháp y tế số",
      tag: "Healthtech",
      stage: "Series B",
    },
    {
      img: "/src/assets/greentech.png",
      title: "GreenTech",
      desc: "Khởi nghiệp năng lượng xanh",
      tag: "Energy",
      stage: "Seed",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % startups.length);
    }, 3000); // đổi thời gian nếu muốn nhanh/chậm hơn
    return () => clearTimeout(timer);
  }, [startIndex, startups.length]);

  // Lấy 5 startup liên tiếp, nếu vượt quá thì quay lại đầu
  const visibleStartups = Array.from({ length: 5 }, (_, i) => {
    return startups[(startIndex + i) % startups.length];
  });

  return (
    <section className="max-w-5xl mx-auto mt-16 text-center px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Các Startup Nổi Bật</h2>
      <p className="text-gray-500 mb-8 text-xs md:text-base">
        Khám phá những công ty sáng tạo đang tìm kiếm đối tác và cơ hội phát triển
      </p>
      <div className="flex flex-col gap-3 md:flex-row md:gap-6 justify-center pb-4">
        {visibleStartups.map((s, i) => (
          <div key={i + startIndex} className="flex-shrink-0">
            <StartupCard {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}
