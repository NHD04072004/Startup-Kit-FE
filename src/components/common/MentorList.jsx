import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

export default function MentorList() {
  const mentors = [
    {
      avatar: "/src/assets/mentor1.png",
      name: "M. Chen",
      desc: "Chuyên gia Marketing",
      tag: "Mentor",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/mentor2.png",
      name: "M. Chen",
      desc: "Cố vấn Tài chính",
      tag: "Mentor",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/mentor3.png",
      name: "M. Chen",
      desc: "Chiến lược sản phẩm",
      tag: "Mentor",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/mentor4.png",
      name: "M. Chen",
      desc: "Chuyên gia phát triển thị trường",
      tag: "Mentor",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/mentor5.png",
      name: "M. Chen",
      desc: "Cố vấn công nghệ",
      tag: "Mentor",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/mentor6.png",
      name: "M. Chen",
      desc: "Chuyên gia vận hành",
      tag: "Mentor",
      button: "Kết nối",
    },
    {
      avatar: "/src/assets/mentor7.png",
      name: "M. Chen",
      desc: "Cố vấn pháp lý",
      tag: "Mentor",
      button: "Kết nối",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % mentors.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [startIndex, mentors.length]);

  // Hiển thị 5 mentor liên tiếp, tự động lặp lại
  const visibleMentors = Array.from({ length: 5 }, (_, i) => {
    return mentors[(startIndex + i) % mentors.length];
  });

  return (
    <section className="max-w-6xl mx-auto mt-10 text-center px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Kết nối với Mentor
      </h2>
      <p className="text-gray-500 mb-6 text-sm md:text-base">
        Xây dựng kết nối giá trị với những mentor giàu kinh nghiệm
      </p>
      <div className="flex flex-col gap-3 md:flex-row md:gap-6 justify-center pb-4">
        {visibleMentors.map((m, idx) => (
          <div key={idx + startIndex} className="flex-shrink-0">
            <ProfileCard {...m} />
          </div>
        ))}
      </div>
    </section>
  );
}
