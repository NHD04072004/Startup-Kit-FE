import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function ProjectBasicInfoForm({ onNext }) {
  const [form, setForm] = useState({
    name: "",
    field: "",
    stage: "",
    year: "",
    location: "",
    contact: ""
  });
  const [showProjectProfileModal, setShowProjectProfileModal] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-6 mb-6 w-full max-w-xl mx-auto">
        <div>
          <label className="block text-sm font-medium mb-2">Tên dự án</label>
          <input className="w-full border rounded px-4 py-2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Tên dự án" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Lĩnh vực</label>
          <input className="w-full border rounded px-4 py-2" value={form.field} onChange={e => setForm({ ...form, field: e.target.value })} placeholder="Lĩnh vực" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Giai đoạn</label>
          <input className="w-full border rounded px-4 py-2" value={form.stage} onChange={e => setForm({ ...form, stage: e.target.value })} placeholder="Giai đoạn" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Năm thành lập</label>
          <input className="w-full border rounded px-4 py-2" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} placeholder="Năm thành lập" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Trụ sở</label>
          <input className="w-full border rounded px-4 py-2" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="Trụ sở" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Liên hệ</label>
          <input className="w-full border rounded px-4 py-2" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="Email/SĐT" />
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded" onClick={onNext}>
          Tiếp theo
        </button>
      </div>
    </div>
  );
}


// Component: Các bước tạo hồ sơ
function ProjectSteps({ currentStep, onStepClick }) {
  const steps = [
    "Chọn mẫu hồ sơ",
    "Nhập thông tin cơ bản",
    "Tải lên logo/hình ảnh",
    "Xác định ý tưởng/vấn đề",
    "Đề xuất giải pháp/sản phẩm",
    "Phân tích thị trường đối thủ",
    "Xây dựng mô hình kinh doanh",
    "Hoàn thành và xác nhận"
  ];
  const progress = Math.round(((currentStep + 1) / steps.length) * 100);
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h3 className="text-base font-semibold mb-4">Các bước tạo hồ sơ</h3>
      {/* Thanh tiến trình */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-yellow-400 h-3 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Tiến độ: <span className="font-bold text-yellow-600">{progress}%</span>
      </p>
      <ol className="space-y-3">
        {steps.map((step, idx) => (
          <li key={idx}>
            <button
              className={`w-full flex items-center gap-3 text-sm rounded px-3 py-2 border transition ${
                currentStep === idx
                  ? "bg-yellow-400 text-white border-yellow-400 font-bold"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-yellow-50"
              }`}
              onClick={() => onStepClick(idx)}
            >
              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full border text-xs ${
                  currentStep === idx
                    ? "bg-white text-yellow-500 border-yellow-400"
                    : "bg-gray-100 text-gray-400 border-gray-300"
                }`}
              >
                {idx + 1}
              </span>
              <span>{step}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Component: Hoạt động gần đây


function RecentActivitySidebar() {
  const [showHistory, setShowHistory] = useState(false);
  const activities = [
    { name: "Lê Tuấn Đạt", time: "09:45" },
    { name: "Nguyễn An", time: "10:15" },
    { name: "Mai Linh", time: "10:45" },
    { name: "Trần Minh", time: "09:30" }
  ];
  const history = [
    { user: "Lê Tuấn Đạt", action: "Chỉnh sửa mô tả dự án", time: "09:45" },
    { user: "Nguyễn An", action: "Thêm thành viên", time: "10:15" },
    { user: "Mai Linh", action: "Cập nhật tiến độ", time: "10:45" },
    { user: "Trần Minh", action: "Xóa tài liệu cũ", time: "09:30" }
  ];
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h3 className="text-base font-semibold mb-3">Hoạt động gần đây</h3>
      <ul className="space-y-2 mb-3">
        {activities.map((a, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="font-medium text-gray-700">{a.name}</span>
            <span className="text-gray-400 ml-auto">{a.time}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold rounded py-2" onClick={() => setShowHistory(true)}>
        Xem tất cả
      </button>

      {/* Modal lịch sử chỉnh sửa */}
      {showHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Lịch sử chỉnh sửa dự án</h3>
            <ul className="space-y-3 mb-4">
              {history.map((h, idx) => (
                <li key={idx} className="text-sm flex flex-col">
                  <span className="font-semibold text-gray-800">{h.user}</span>
                  <span className="text-gray-600">{h.action}</span>
                  <span className="text-gray-400 text-xs">{h.time}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold rounded py-2" onClick={() => setShowHistory(false)}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


// Component: Trợ lý AI
function AiAssistantSidebar() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "ai", text: "Xin chào! Tôi là trợ lý AI giúp bạn phân tích và gợi ý cho hồ sơ khởi nghiệp của bạn." },
    { type: "ai", text: "Để khởi tạo hồ sơ, vui lòng nhập các thông tin dự án, giải pháp, mô hình kinh doanh, v.v." }
  ]);
  const recentFeedback = [
    "Phân tích mô hình kinh doanh",
    "Gợi ý cải tiến sản phẩm",
    "Xem gợi ý"
  ];
  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setInput("");
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="mb-2">
        <h3 className="text-base font-bold mb-1">Trợ lý AI</h3>
        <div className="text-xs text-gray-600 mb-2">Tôi sẽ hỗ trợ bạn phân tích và đưa ra giải pháp cho hồ sơ khởi nghiệp.</div>
      </div>
      <div className="flex-1 bg-gray-50 rounded border border-gray-200 p-3 mb-2 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <span className={`inline-block px-3 py-2 rounded-lg text-xs ${msg.type === "ai" ? "bg-white text-gray-700 border border-gray-200" : "bg-yellow-400 text-white"}`}>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-2">
        <input
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
          placeholder="Nhập ý kiến..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-4 py-2 rounded" onClick={handleSend}>
          Gửi
        </button>
      </div>
      <div className="text-xs text-gray-500 mb-1 font-semibold">Phản hồi gần đây:</div>
      <ul className="text-xs text-gray-600 mb-2">
        {recentFeedback.map((fb, idx) => (
          <li key={idx} className="mb-1">- {fb}</li>
        ))}
      </ul>
      <div className="text-xs text-blue-500 underline cursor-pointer">Xem gợi ý chi tiết</div>
    </div>
  );
}

// Component: Chọn mẫu hồ sơ
function ProjectTemplateSelector({ onSelect }) {
  const templates = [
    { type: "Từ cuộc thi", items: ["Techfest 2021"] },
    { type: "Trạng trắng", items: ["Chọn mẫu trống"] }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Chọn mẫu hồ sơ khởi nghiệp</h3>
      </div>
      <div className="flex gap-6 mb-6 flex-wrap">
        {templates.map((group, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg border border-gray-200 p-6 flex-1 flex flex-col items-center"
          >
            <span className="text-sm font-bold text-yellow-500 mb-3">{group.type}</span>
            {group.items.map((item, i) => (
              <button
                key={i}
                className={`w-full bg-white hover:bg-yellow-100 text-sm rounded px-4 py-2 border mb-2 font-semibold ${
                  group.type === "Trạng trắng"
                    ? "text-yellow-600 border-yellow-400"
                    : "text-gray-700 border-gray-200"
                }`}
                onClick={() => onSelect(item)}
              >
                {item}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded">
          Tiếp theo
        </button>
      </div>
    </div>
  );
}

// Layout trang tạo dự án
export default function CreateProject() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showAI, setShowAI] = useState(true);
  const [showProjectProfileModal, setShowProjectProfileModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar trái: các bước + hoạt động gần đây */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <ProjectSteps currentStep={currentStep} onStepClick={setCurrentStep} />
          <RecentActivitySidebar />
        </div>

        {/* Nội dung chính */}
            <div className="lg:col-span-9 flex items-center justify-center">
              <div className="w-full min-h-[500px] max-w-[1800px] mx-auto">
                {currentStep === 1 ? (
                  <div className="flex w-full min-h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className={`flex-${showAI ? '[2]' : '[1]'} p-12 border-r border-gray-200 w-full`}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Nhập thông tin cơ bản</span>
                        {!showAI && (
                          <button
                            className="bg-gray-100 hover:bg-yellow-400 text-yellow-500 hover:text-white p-2 rounded-full border border-gray-300 transition flex items-center justify-center"
                            onClick={() => setShowAI(true)}
                            title="Hiện trợ lý AI"
                          >
                            <FontAwesomeIcon icon={faRobot} className="w-6 h-6" />
                          </button>
                        )}
                      </div>
                      <ProjectBasicInfoForm onNext={() => setCurrentStep(2)} />
                    </div>
                    {showAI && (
                      <div className="flex-[1] p-4 flex flex-col justify-between min-w-[260px] max-w-[320px]">
                        <AiAssistantSidebar />
                      </div>
                    )}
                  </div>
                ) : currentStep === 2 ? (
                  <div className="flex w-full min-h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-1 p-12">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Tải ảnh logo, sản phẩm, hoạt động</h3>
                      </div>
                      <div className="mb-6">
                        <label className="block font-semibold mb-2">Logo Công Ty</label>
                        <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 text-gray-400 cursor-pointer">
                          <span className="text-2xl mb-2">📷</span>
                          <span>Kéo và thả hoặc click để chọn ảnh</span>
                          <span className="text-xs mt-2">PNG, JPG, tối đa 5MB</span>
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block font-semibold mb-2">Ảnh Hoạt Động (Tối đa 3 ảnh)</label>
                        <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 text-gray-400 cursor-pointer">
                          <span className="text-2xl mb-2">📷</span>
                          <span>Kéo và thả hoặc click để chọn ảnh</span>
                          <span className="text-xs mt-2">PNG, JPG, tối đa 5MB/ảnh</span>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 text-sm text-gray-700">
                          <b>Gợi ý ảnh:</b>
                          <ul className="list-disc ml-4 mt-2">
                            <li>Ảnh hoạt động nổi bật của dự án</li>
                            <li>Ảnh sản phẩm, dịch vụ, sự kiện</li>
                            <li>Ảnh truyền thông, báo chí</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="block font-semibold mb-2">Ảnh Đội Ngũ (Tối đa 5 ảnh)</label>
                        <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 text-gray-400 cursor-pointer">
                          <span className="text-2xl mb-2">📷</span>
                          <span>Kéo và thả hoặc click để chọn ảnh</span>
                          <span className="text-xs mt-2">PNG, JPG, tối đa 5MB/ảnh</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded" onClick={() => setCurrentStep(3)}>
                          Tiếp theo
                        </button>
                      </div>
                    </div>
                    {showAI && (
                      <div className="flex-[1] p-4 flex flex-col justify-between min-w-[260px] max-w-[320px] border-l border-gray-200">
                        <AiAssistantSidebar />
                      </div>
                    )}
                  </div>
                ) : currentStep === 3 ? (
                  <div className="flex w-full min-h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-1 p-12">
                      <h3 className="text-lg font-semibold mb-6">Xác định ý tưởng và vấn đề</h3>
                      {/* Đã bỏ thanh tiến độ và tiến độ */}
                      <div className="mb-6 mt-6">
                        <label className="block font-medium mb-2">Mô tả ý tưởng của bạn</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[80px] resize-none" placeholder="Nhập mô tả ý tưởng khởi nghiệp" />
                        <span className="text-xs text-gray-500 mt-2 block">Ghi rõ mô tả ý tưởng bạn muốn làm</span>
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Vấn đề thị trường bạn muốn giải quyết</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[80px] resize-none" placeholder="Nhập vấn đề thị trường" />
                        <span className="text-xs text-gray-500 mt-2 block">Xác định rõ vấn đề mà sản phẩm của bạn sẽ giải quyết</span>
                      </div>
                      <div className="flex justify-between">
                        <button className="bg-gray-100 hover:bg-gray-200 text-sm font-semibold px-6 py-3 rounded" onClick={() => setCurrentStep(2)}>
                          Quay lại
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded" onClick={() => setCurrentStep(4)}>
                          Tiếp theo
                        </button>
                      </div>
                    </div>
                    {showAI && (
                      <div className="flex-[1] p-4 flex flex-col justify-between min-w-[260px] max-w-[320px] border-l border-gray-200">
                        <AiAssistantSidebar />
                      </div>
                    )}
                  </div>
                ) : currentStep === 4 ? (
                  <div className="flex w-full min-h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-1 p-12">
                      <h3 className="text-lg font-semibold mb-6">Giải pháp & Sản phẩm/Dịch vụ</h3>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Giải pháp</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[80px] resize-none" placeholder="Mô tả các giải pháp giúp bạn giải quyết vấn đề đã xác định" />
                        <span className="text-xs text-gray-500 mt-2 block">Mô tả rõ các giải pháp/sản phẩm/dịch vụ sẽ phát triển</span>
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Sản phẩm/Dịch vụ</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[80px] resize-none" placeholder="Mô tả sản phẩm/dịch vụ sẽ phát triển" />
                        <span className="text-xs text-gray-500 mt-2 block">Mô tả sản phẩm, dịch vụ, công nghệ, giá trị mang lại</span>
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Ảnh sản phẩm (Tối đa 5 ảnh)</label>
                        <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 text-gray-400 cursor-pointer">
                          <span className="text-2xl mb-2">📷</span>
                          <span>Kéo và thả ảnh đội ngũ tại đây hoặc click để chọn</span>
                          <span className="text-xs mt-2">PNG, JPG, tối đa 5MB/ảnh</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button className="bg-gray-100 hover:bg-gray-200 text-sm font-semibold px-6 py-3 rounded" onClick={() => setCurrentStep(3)}>
                          Quay lại
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded" onClick={() => setCurrentStep(5)}>
                          Tiếp theo
                        </button>
                      </div>
                    </div>
                    {showAI && (
                      <div className="flex-[1] p-4 flex flex-col justify-between min-w-[260px] max-w-[320px] border-l border-gray-200">
                        <AiAssistantSidebar />
                      </div>
                    )}
                  </div>
                ) : currentStep === 5 ? (
                  <div className="flex w-full min-h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-1 p-12">
                      <h3 className="text-lg font-semibold mb-6">Phân tích thị trường và đối thủ</h3>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Thị trường mục tiêu</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Nhà khởi nghiệp 18-35 tuổi, chủ yếu xây dựng kế hoạch kinh doanh chuyên nghiệp..." />
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Đối thủ cạnh tranh & Lợi thế</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Upwork, LinkedIn... Lợi thế AI hỗ trợ, tối ưu hóa kinh doanh Việt Nam..." />
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Quy mô thị trường</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Thị trường khởi nghiệp Việt Nam, 3.000 doanh nghiệp mới mỗi năm..." />
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Giai đoạn phát triển</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Liệt kê các giai đoạn và mốc phát triển của dự án hoặc sản phẩm..." />
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Các cột mốc quan trọng</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Các cột mốc quan trọng" />
                      </div>
                      <div className="flex justify-between">
                        <button className="bg-gray-100 hover:bg-gray-200 text-sm font-semibold px-6 py-3 rounded" onClick={() => setCurrentStep(4)}>
                          Quay lại
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded" onClick={() => setCurrentStep(6)}>
                          Tiếp theo
                        </button>
                      </div>
                    </div>
                    {showAI && (
                      <div className="flex-[1] p-4 flex flex-col justify-between min-w-[260px] max-w-[320px] border-l border-gray-200">
                        <AiAssistantSidebar />
                      </div>
                    )}
                  </div>
                ) : currentStep === 6 ? (
                  <div className="flex w-full min-h-[500px] bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex-1 p-12">
                      <h3 className="text-lg font-semibold mb-6">Xây dựng mô hình kinh doanh</h3>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Mô hình kinh doanh</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Mô hình kinh doanh" />
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Doanh thu dự kiến</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Doanh thu dự kiến" />
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Chi phí dự kiến</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Chi phí dự kiến" />
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Kênh phân phối</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Kênh phân phối" />
                      </div>
                      <div className="mb-6">
                        <label className="block font-medium mb-2">Kế hoạch phát triển</label>
                        <textarea className="w-full border rounded px-4 py-3 min-h-[60px] resize-none" placeholder="Kế hoạch phát triển" />
                      </div>
                      <div className="flex justify-end">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded" onClick={() => setCurrentStep(7)}>
                          Tiếp theo
                        </button>
                      </div>
                    </div>
                    {showAI && (
                      <div className="flex-[1] p-4 flex flex-col justify-between min-w-[260px] max-w-[320px] border-l border-gray-200">
                        <AiAssistantSidebar />
                      </div>
                    )}
                  </div>
                ) : currentStep === 7 ? (
                  <div className="flex w-full min-h-[650px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    {/* Nội dung chính */}
                    <div className="flex-1 p-10 flex flex-col gap-10">
                      {/* Tiêu đề */}
                      <h3 className="text-2xl font-bold text-gray-900">Hoàn thiện & Kết nối</h3>

                      {/* Preview hồ sơ */}
                      <div>
                        <h4 className="text-lg font-semibold text-yellow-600 mb-4">Preview hồ sơ</h4>
                        <div className="border-2 border-yellow-400 rounded-xl p-8 bg-yellow-50 shadow-sm space-y-4">
                          <div>
                            <span className="font-bold text-gray-700">Tên dự án:</span>
                            <span className="ml-2 text-gray-800">Nền tảng giáo dục công nghệ</span>
                          </div>
                          <div>
                            <span className="font-bold text-gray-700">Lĩnh vực:</span>
                            <span className="ml-2 text-gray-800">Công nghệ giáo dục</span>
                          </div>
                          <div>
                            <span className="font-bold text-gray-700">Ý tưởng/Vấn đề:</span>
                            <span className="ml-2 text-gray-800">Giải quyết vấn đề tiếp cận giáo dục chất lượng</span>
                          </div>
                          <div>
                            <span className="font-bold text-gray-700">Giải pháp/Sản phẩm:</span>
                            <span className="ml-2 text-gray-800">Nền tảng học tập AI cá nhân hóa</span>
                          </div>
                          <div>
                            <span className="font-bold text-gray-700">Thị trường/Đối thủ:</span>
                            <span className="ml-2 text-gray-800">Thị trường giáo dục Việt Nam, đối thủ: Edtech, Coursera...</span>
                          </div>
                          <div>
                            <span className="font-bold text-gray-700">Mô hình kinh doanh:</span>
                            <span className="ml-2 text-gray-800">Thu phí theo khóa học, hợp tác trường học</span>
                          </div>
                        </div>
                      </div>

                      {/* Hành động & kết nối */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Cột trái */}
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id="watermark"
                              className="w-4 h-4 accent-yellow-400"
                              defaultChecked
                            />
                            <label
                              htmlFor="watermark"
                              className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                              Watermark
                            </label>
                            <span className="ml-2 text-xs text-gray-500">
                              Bảo vệ hồ sơ khi chia sẻ
                            </span>
                          </div>
                          <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded-lg shadow transition">
                            Tùy chỉnh hồ sơ
                          </button>

                            <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-6 py-3 rounded-lg shadow transition" onClick={() => setShowProjectProfileModal(true)}>
                              Đăng thông tin dự án
                            </button>

                        </div>

                        {/* Cột phải */}
                        <div className="flex flex-col gap-6">
                          <div>
                            <h4 className="font-semibold text-base mb-2">Kết nối</h4>
                            <div className="flex gap-3 mb-4">
                              <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-4 py-2 rounded-lg shadow transition">
                                Xuất hồ sơ
                              </button>
                              <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold px-4 py-2 rounded-lg shadow transition">
                                Share
                              </button>
                            </div>
                            <button className="w-full bg-yellow-100 hover:bg-yellow-200 text-sm font-semibold px-4 py-2 rounded-lg shadow transition">
                              Gửi yêu cầu kết nối với Mentor/Investor
                            </button>
                          </div>

                          {/* Thành viên dự án */}
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Thành viên dự án</h4>
                            <div className="bg-gray-50 border rounded-lg p-4 space-y-3 shadow-sm">
                              {[
                                { name: "Lê Tuấn Đạt", role: "CEO" },
                                { name: "Nguyễn An", role: "Co-Founder" },
                                { name: "Trần Đạt", role: "Co-Founder" }
                              ].map((m, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <span className="font-bold text-gray-800">{m.name}</span>
                                  <span className="bg-white border px-2 py-1 text-xs rounded text-gray-600">
                                    {m.role}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Nút quay lại */}
                    {/* Modal xem trước hồ sơ dự án */}
                    {showProjectProfileModal && (
                      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl shadow-xl p-0 w-full max-w-3xl relative">
                          {/* Header */}
                          <div className="flex items-center justify-between px-8 pt-8 pb-2">
                            <div>
                              <h2 className="text-2xl font-bold text-gray-900">Edutech Platform</h2>
                              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Đang phát triển</span>
                              <span className="ml-3 text-xs text-gray-400">Cập nhật: 25/08/2025</span>
                            </div>
                            <button
                              className="text-gray-400 hover:text-gray-700 text-2xl"
                              onClick={() => setShowProjectProfileModal(false)}
                            >
                              &times;
                            </button>
                          </div>
                          {/* Main content */}
                          <div className="grid grid-cols-2 gap-6 px-8 pb-8">
                            {/* Đội ngũ */}
                            <div>
                              <h4 className="font-semibold mb-3">Đội ngũ</h4>
                              <div className="flex gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
                                  <div>
                                    <div className="font-bold text-gray-800">Lê Tuấn Đạt <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded ml-2">CEO</span></div>
                                    <div className="text-xs text-gray-500">Founder & Leader</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="avatar" className="w-10 h-10 rounded-full" />
                                  <div>
                                    <div className="font-bold text-gray-800">Nguyễn An <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded ml-2">Co-founder</span></div>
                                    <div className="text-xs text-gray-500">Technical Lead</div>
                                  </div>
                                </div>
                              </div>
                              {/* Vấn đề & Giải pháp */}
                              <div className="bg-white border rounded-xl p-5 mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-red-100 text-red-500 rounded-full w-6 h-6 flex items-center justify-center"><svg width="16" height="16" fill="currentColor"><circle cx="8" cy="8" r="8"/></svg></span>
                                  <span className="font-semibold text-gray-800">Vấn đề và Giải pháp</span>
                                </div>
                                <div className="mb-2">
                                  <span className="font-bold text-gray-700">Vấn đề</span>
                                  <div className="text-sm text-gray-700 mt-1">Hệ thống giáo dục truyền thống không đáp ứng được nhu cầu học tập cá nhân hóa và linh hoạt của học sinh trong thời đại số.</div>
                                </div>
                                <div>
                                  <span className="font-bold text-gray-700">Giải pháp</span>
                                  <div className="text-sm text-gray-700 mt-1">Nền tảng giáo dục trực tuyến với AI cá nhân hóa, cung cấp trải nghiệm học tập thích ứng và tương tác cao cho học sinh.</div>
                                </div>
                              </div>
                              {/* Thị trường */}
                              <div className="bg-white border rounded-xl p-5">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-blue-100 text-blue-500 rounded-full w-6 h-6 flex items-center justify-center"><svg width="16" height="16" fill="currentColor"><rect width="16" height="16"/></svg></span>
                                  <span className="font-semibold text-gray-800">Thị trường</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                  <div>
                                    <div className="text-xs text-gray-500 mb-1">Quy mô thị trường</div>
                                    <div className="font-semibold text-gray-700">Thị trường EdTech toàn cầu</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-gray-500 mb-1">Khách hàng mục tiêu</div>
                                    <div className="font-semibold text-gray-700">Học sinh tại Việt Nam</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Tiến độ & Mô hình kinh doanh */}
                            <div className="flex flex-col gap-6">
                              {/* Tiến độ */}
                              <div className="bg-white border rounded-xl p-5 mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-purple-100 text-purple-500 rounded-full w-6 h-6 flex items-center justify-center"><svg width="16" height="16" fill="currentColor"><rect width="16" height="16"/></svg></span>
                                  <span className="font-semibold text-gray-800">Tiến độ</span>
                                </div>
                                <div className="mb-2">
                                  <span className="font-bold text-gray-700">Giai đoạn hiện tại</span>
                                  <div className="text-sm text-gray-700 mt-1">MVP Development Phase</div>
                                </div>
                                <div>
                                  <span className="font-bold text-gray-700">Các mốc quan trọng</span>
                                  <ul className="mt-2 space-y-1 text-sm">
                                    <li><span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>Q2 2025: Hoàn thành nghiên cứu thị trường</li>
                                    <li><span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>Q3 2025: Phát triển MVP (đang thực hiện)</li>
                                    <li><span className="inline-block w-2 h-2 rounded-full bg-gray-300 mr-2"></span>Q4 2025: Beta testing với 1000 users</li>
                                    <li><span className="inline-block w-2 h-2 rounded-full bg-gray-300 mr-2"></span>Q1 2026: Official launch</li>
                                  </ul>
                                </div>
                              </div>
                              {/* Mô hình kinh doanh */}
                              <div className="bg-white border rounded-xl p-5">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-green-100 text-green-500 rounded-full w-6 h-6 flex items-center justify-center"><svg width="16" height="16" fill="currentColor"><rect width="16" height="16"/></svg></span>
                                  <span className="font-semibold text-gray-800">Mô hình Kinh doanh</span>
                                </div>
                                <div>
                                  <span className="font-bold text-gray-700">Nguồn doanh thu</span>
                                  <div className="text-sm text-gray-700 mt-1">Subscription Model<br />Gói học phí hàng tháng/năm</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Footer */}
                          <div className="flex items-center justify-end gap-4 px-8 pb-8">
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg" onClick={() => setShowProjectProfileModal(false)}>Đóng</button>
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                              <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                              Đăng dự án
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                      <div className="flex justify-start mt-6">
                        <button
                          className="bg-gray-100 hover:bg-gray-200 text-sm font-semibold px-6 py-3 rounded-lg shadow transition"
                          onClick={() => { setCurrentStep(6); setShowProjectProfileModal(true); }}
                          onClickCapture={() => setShowProjectProfileModal(false)}
                        >
                          Quay lại
                        </button>
                      </div>
                    </div>

                    {/* Trợ lý AI */}
                    {showAI && (
                      <div className="flex-[1] p-8 min-w-[320px] max-w-[400px] border-l border-gray-200 bg-gray-50">
                        <AiAssistantSidebar />
                      </div>
                    )}
                  </div>
                ) : (
                  <ProjectTemplateSelector onSelect={() => setCurrentStep(1)} />
                )}
              </div>
            </div>

        {/* Sidebar phải: Trợ lý AI */}
        {/* Đã nối khung AI vào form, không cần sidebar phải nữa */}
      </div>
    </div>
  );
}
