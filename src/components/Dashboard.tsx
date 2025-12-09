import { Users, MessageSquare, TrendingUp, Heart, AlertCircle, CheckCircle } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Dashboard() {
  const stats = [
    {
      label: 'Tổng Gia Đình',
      value: '1,247',
      change: '+12.5%',
      icon: Users,
      color: 'bg-blue-400',
    },
    {
      label: 'Tổng Thành Viên',
      value: '4,982',
      change: '+8.2%',
      icon: Users,
      color: 'bg-emerald-400',
    },
    {
      label: 'Tâm Sự Hôm Nay',
      value: '342',
      change: '+15.3%',
      icon: MessageSquare,
      color: 'bg-amber-400',
    },
    {
      label: 'Điểm Hạnh Phúc TB',
      value: '7.8/10',
      change: '+0.5',
      icon: Heart,
      color: 'bg-rose-400',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      family: 'Gia đình Nguyễn Văn A',
      action: 'Tâm sự mới được chia sẻ',
      time: '5 phút trước',
      status: 'success',
    },
    {
      id: 2,
      family: 'Gia đình Trần Thị B',
      action: 'Phát hiện xung đột cần chú ý',
      time: '12 phút trước',
      status: 'warning',
    },
    {
      id: 3,
      family: 'Gia đình Lê Văn C',
      action: 'Điểm hạnh phúc tăng lên 8.5',
      time: '25 phút trước',
      status: 'success',
    },
    {
      id: 4,
      family: 'Gia đình Phạm Thị D',
      action: 'Thành viên mới tham gia',
      time: '1 giờ trước',
      status: 'info',
    },
    {
      id: 5,
      family: 'Gia đình Hoàng Văn E',
      action: 'Cần hỗ trợ tư vấn tâm lý',
      time: '2 giờ trước',
      status: 'warning',
    },
  ];

  const topIssues = [
    { issue: 'Thiếu giao tiếp', count: 156, percent: 32 },
    { issue: 'Áp lực công việc', count: 124, percent: 26 },
    { issue: 'Stress tài chính', count: 98, percent: 20 },
    { issue: 'Hiểu lầm', count: 76, percent: 15 },
    { issue: 'Thiếu thời gian cho nhau', count: 34, percent: 7 },
  ];

  const weeklyData = [
    { day: 'T2', messages: 45, happiness: 7.2 },
    { day: 'T3', messages: 52, happiness: 7.5 },
    { day: 'T4', messages: 48, happiness: 7.3 },
    { day: 'T5', messages: 61, happiness: 7.8 },
    { day: 'T6', messages: 58, happiness: 8.1 },
    { day: 'T7', messages: 42, happiness: 8.5 },
    { day: 'CN', messages: 38, happiness: 8.7 },
  ];

  const emotionData = [
    { name: 'Vui vẻ', value: 28 },
    { name: 'Bình thường', value: 22 },
    { name: 'Lo lắng', value: 20 },
    { name: 'Căng thẳng', value: 15 },
    { name: 'Buồn', value: 10 },
    { name: 'Giận dữ', value: 5 },
  ];

  const COLORS = ['#d9a86a', '#c9a56e', '#b9a573', '#a9a577', '#99a57b', '#89a57f'];

  const familyStatusData = [
    { name: 'Khỏe mạnh', value: 892 },
    { name: 'Cần theo dõi', value: 332 },
    { name: 'Cần can thiệp', value: 23 },
  ];

  const familyStatusColors = ['#4ade80', '#facc15', '#ef4444'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tổng Quan Hệ Thống</h1>
          <p className="text-gray-600 mt-1">Thống kê và hoạt động gần đây</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Cập nhật lần cuối</p>
          <p className="text-sm font-semibold text-gray-900">
            {new Date().toLocaleString('vi-VN')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-600">{stat.change}</span>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Hoạt Động Trong Tuần</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="messages"
                stroke="#d9a86a"
                strokeWidth={2}
                dot={{ fill: '#d9a86a', r: 4 }}
                name="Tâm sự"
              />
              <Line
                type="monotone"
                dataKey="happiness"
                stroke="#c9876e"
                strokeWidth={2}
                dot={{ fill: '#c9876e', r: 4 }}
                name="Điểm hạnh phúc"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Phân Bố Cảm Xúc</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={emotionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {emotionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Trạng Thái Gia Đình</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={familyStatusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {familyStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={familyStatusColors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top 5 Vấn Đề Phổ Biến</h2>
          <div className="space-y-4">
            {topIssues.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.issue}</span>
                  <span className="text-sm text-gray-500">{item.count} gia đình</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-rose-400 to-rose-300 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Hoạt Động Gần Đây</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div
                className={`mt-1 p-2 rounded-full ${
                  activity.status === 'success'
                    ? 'bg-green-100'
                    : activity.status === 'warning'
                    ? 'bg-amber-100'
                    : 'bg-blue-100'
                }`}
              >
                {activity.status === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : activity.status === 'warning' ? (
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                ) : (
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{activity.family}</p>
                <p className="text-sm text-gray-600">{activity.action}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
