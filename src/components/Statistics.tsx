import { TrendingUp, TrendingDown, Users, MessageSquare, Heart, AlertCircle } from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from 'recharts';

export default function Statistics() {
  const emotionData = [
    { emotion: 'Vui vẻ', count: 1245, percent: 28, color: 'bg-green-500', trend: '+12%' },
    { emotion: 'Bình thường', count: 982, percent: 22, color: 'bg-blue-500', trend: '+5%' },
    { emotion: 'Lo lắng', count: 876, percent: 20, color: 'bg-yellow-500', trend: '+8%' },
    { emotion: 'Căng thẳng', count: 654, percent: 15, color: 'bg-orange-500', trend: '-3%' },
    { emotion: 'Buồn', count: 432, percent: 10, color: 'bg-purple-500', trend: '-7%' },
    { emotion: 'Giận dữ', count: 211, percent: 5, color: 'bg-red-500', trend: '-10%' },
  ];

  const weeklyStats = [
    { day: 'T2', messages: 45, happiness: 7.2 },
    { day: 'T3', messages: 52, happiness: 7.5 },
    { day: 'T4', messages: 48, happiness: 7.3 },
    { day: 'T5', messages: 61, happiness: 7.8 },
    { day: 'T6', messages: 58, happiness: 8.1 },
    { day: 'T7', messages: 42, happiness: 8.5 },
    { day: 'CN', messages: 38, happiness: 8.7 },
  ];

  const relationshipStats = [
    { type: 'Vợ - Chồng', interactions: 1234, avgScore: 7.5, issues: 45 },
    { type: 'Bố - Con', interactions: 876, avgScore: 8.2, issues: 23 },
    { type: 'Mẹ - Con', interactions: 1098, avgScore: 8.6, issues: 18 },
    { type: 'Anh - Em', interactions: 543, avgScore: 7.9, issues: 31 },
  ];

  const topKeywords = [
    { word: 'Mệt mỏi', count: 234 },
    { word: 'Công việc', count: 198 },
    { word: 'Yêu thương', count: 187 },
    { word: 'Lo lắng', count: 156 },
    { word: 'Áp lực', count: 142 },
    { word: 'Hiểu nhau', count: 128 },
    { word: 'Thời gian', count: 115 },
    { word: 'Quan tâm', count: 98 },
  ];

  const maxMessages = Math.max(...weeklyStats.map((s) => s.messages));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Thống Kê & Phân Tích</h1>
        <p className="text-gray-500 mt-1">Dữ liệu chi tiết về cảm xúc và tương tác</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Phân Bố Cảm Xúc (7 Ngày Qua)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={emotionData} margin={{ bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="emotion"
                stroke="#9ca3af"
                angle={-15}
                textAnchor="end"
                height={60}
                interval={0}
              />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="count" fill="#d9a86a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Hoạt Động Theo Tuần
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyStats}>
              <defs>
                <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d9a86a" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#d9a86a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Area type="monotone" dataKey="messages" stroke="#d9a86a" fillOpacity={1} fill="url(#colorMessages)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Thống Kê Theo Mối Quan Hệ
          </h2>
          <div className="space-y-4">
            {relationshipStats.map((rel, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{rel.type}</h3>
                  <span className="text-sm font-bold text-rose-600">{rel.avgScore}/10</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Tương tác</p>
                    <p className="font-semibold text-gray-900">{rel.interactions} lần</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Vấn đề</p>
                    <p className="font-semibold text-gray-900">{rel.issues} vấn đề</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Từ Khóa Phổ Biến
          </h2>
          <div className="flex flex-wrap gap-3">
            {topKeywords.map((keyword, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-full hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-gray-700">{keyword.word}</span>
                <span className="ml-2 text-xs text-gray-500">({keyword.count})</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Insight AI</h3>
                <p className="text-sm text-blue-800">
                  Từ khóa "Mệt mỏi" và "Áp lực" xuất hiện nhiều hơn 45% so với tuần trước. Đề xuất tăng
                  cường các hoạt động giảm stress cho gia đình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Heart className="w-10 h-10" />
            <TrendingUp className="w-6 h-6" />
          </div>
          <p className="text-sm opacity-90">Điểm hạnh phúc TB</p>
          <p className="text-3xl font-bold mt-1">7.8/10</p>
          <p className="text-sm mt-2 opacity-75">+0.5 so với tuần trước</p>
        </div>

        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <MessageSquare className="w-10 h-10" />
            <TrendingUp className="w-6 h-6" />
          </div>
          <p className="text-sm opacity-90">Tổng tâm sự tuần này</p>
          <p className="text-3xl font-bold mt-1">2,156</p>
          <p className="text-sm mt-2 opacity-75">+12% so với tuần trước</p>
        </div>

        <div className="bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-10 h-10" />
            <TrendingDown className="w-6 h-6" />
          </div>
          <p className="text-sm opacity-90">Gia đình cần hỗ trợ</p>
          <p className="text-3xl font-bold mt-1">23</p>
          <p className="text-sm mt-2 opacity-75">-5 so với tuần trước</p>
        </div>
      </div>
    </div>
  );
}
