import { Search, Filter, Eye, Smile, Frown, Meh, AlertTriangle } from 'lucide-react';

export default function MessagesManagement() {
  const messages = [
    {
      id: 1,
      family: 'Gia đình Nguyễn Văn A',
      sender: 'Vợ',
      receiver: 'Chồng',
      emotion: 'stress',
      subject: 'Áp lực công việc',
      preview: 'Em cảm thấy rất mệt mỏi với công việc gần đây...',
      time: '10 phút trước',
      priority: 'high',
      status: 'delivered',
    },
    {
      id: 2,
      family: 'Gia đình Trần Thị B',
      sender: 'Con gái',
      receiver: 'Mẹ',
      emotion: 'happy',
      subject: 'Chia sẻ niềm vui',
      preview: 'Con muốn kể cho mẹ nghe về điều vui hôm nay...',
      time: '25 phút trước',
      priority: 'low',
      status: 'delivered',
    },
    {
      id: 3,
      family: 'Gia đình Lê Văn C',
      sender: 'Chồng',
      receiver: 'Vợ',
      emotion: 'sad',
      subject: 'Xin lỗi',
      preview: 'Anh biết anh đã sai, anh thật sự xin lỗi em...',
      time: '1 giờ trước',
      priority: 'medium',
      status: 'read',
    },
    {
      id: 4,
      family: 'Gia đình Phạm Thị D',
      sender: 'Con trai',
      receiver: 'Bố',
      emotion: 'worried',
      subject: 'Lo lắng về học tập',
      preview: 'Con lo lắng về kỳ thi sắp tới...',
      time: '2 giờ trước',
      priority: 'medium',
      status: 'delivered',
    },
    {
      id: 5,
      family: 'Gia đình Hoàng Văn E',
      sender: 'Vợ',
      receiver: 'Chồng',
      emotion: 'angry',
      subject: 'Xung đột gia đình',
      preview: 'Em thấy anh không quan tâm đến gia đình...',
      time: '3 giờ trước',
      priority: 'high',
      status: 'pending',
    },
    {
      id: 6,
      family: 'Gia đình Đỗ Thị F',
      sender: 'Mẹ',
      receiver: 'Con gái',
      emotion: 'love',
      subject: 'Động viên',
      preview: 'Mẹ rất tự hào về con, con đã làm rất tốt...',
      time: '4 giờ trước',
      priority: 'low',
      status: 'read',
    },
  ];

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case 'happy':
      case 'love':
        return <Smile className="w-5 h-5 text-green-500" />;
      case 'sad':
      case 'angry':
        return <Frown className="w-5 h-5 text-red-500" />;
      case 'worried':
      case 'stress':
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      default:
        return <Meh className="w-5 h-5 text-gray-500" />;
    }
  };

  const getEmotionLabel = (emotion: string) => {
    switch (emotion) {
      case 'happy':
        return 'Vui vẻ';
      case 'sad':
        return 'Buồn';
      case 'angry':
        return 'Giận dữ';
      case 'worried':
        return 'Lo lắng';
      case 'stress':
        return 'Căng thẳng';
      case 'love':
        return 'Yêu thương';
      default:
        return 'Bình thường';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'Cao';
      case 'medium':
        return 'Trung bình';
      case 'low':
        return 'Thấp';
      default:
        return 'Không xác định';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-blue-100 text-blue-700';
      case 'read':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Đã gửi';
      case 'read':
        return 'Đã đọc';
      case 'pending':
        return 'Chờ xử lý';
      default:
        return 'Không rõ';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Tâm Sự</h1>
          <p className="text-gray-500 mt-1">Theo dõi các tâm sự được chia sẻ trong gia đình</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500">Hôm nay</p>
            <p className="text-lg font-bold text-gray-900">342 tâm sự</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            <p className="text-xs text-gray-500">Tuần này</p>
            <p className="text-lg font-bold text-gray-900">2,156 tâm sự</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm tâm sự..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            <span>Lọc</span>
          </button>
        </div>

        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {getEmotionIcon(message.emotion)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{message.subject}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(
                          message.priority
                        )}`}
                      >
                        {getPriorityLabel(message.priority)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{message.preview}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="font-medium">{message.family}</span>
                      <span>•</span>
                      <span>
                        {message.sender} → {message.receiver}
                      </span>
                      <span>•</span>
                      <span>{getEmotionLabel(message.emotion)}</span>
                      <span>•</span>
                      <span>{message.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 ml-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      message.status
                    )}`}
                  >
                    {getStatusLabel(message.status)}
                  </span>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Hiển thị 1-6 trong tổng số 342 tâm sự hôm nay</p>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Trước
            </button>
            <button className="px-4 py-2 bg-rose-500 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
