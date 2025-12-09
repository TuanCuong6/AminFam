import { Download, Eye, Calendar, TrendingUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function Reports() {
  const familyReports = [
    {
      id: 1,
      family: 'Gia đình Nguyễn Văn A',
      period: 'Tháng 11/2024',
      happinessScore: 8.2,
      trend: 'up',
      issues: [
        { type: 'Thiếu giao tiếp', status: 'improving', count: 3 },
        { type: 'Áp lực công việc', status: 'stable', count: 5 },
      ],
      highlights: [
        'Tăng tương tác giữa vợ chồng (+25%)',
        'Con cái cảm thấy được lắng nghe hơn',
      ],
      concerns: ['Căng thẳng về tài chính xuất hiện 2 lần'],
    },
    {
      id: 2,
      family: 'Gia đình Trần Thị B',
      period: 'Tháng 11/2024',
      happinessScore: 6.5,
      trend: 'down',
      issues: [
        { type: 'Xung đột vợ chồng', status: 'worsening', count: 8 },
        { type: 'Con cái stress học tập', status: 'critical', count: 12 },
      ],
      highlights: ['Bố mẹ đã bắt đầu chia sẻ nhiều hơn với con'],
      concerns: [
        'Điểm hạnh phúc giảm 15% so với tháng trước',
        'Cần can thiệp tư vấn gia đình',
      ],
    },
    {
      id: 3,
      family: 'Gia đình Lê Văn C',
      period: 'Tháng 11/2024',
      happinessScore: 9.1,
      trend: 'up',
      issues: [],
      highlights: [
        'Gia đình mẫu mực với điểm hạnh phúc cao nhất',
        'Tương tác tích cực tăng 40%',
        'Không có xung đột lớn trong tháng',
      ],
      concerns: [],
    },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-5 h-5 text-green-600" />;
    return <AlertTriangle className="w-5 h-5 text-red-600" />;
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 8) return 'bg-green-50 border-green-200';
    if (score >= 6) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const getIssueStatusIcon = (status: string) => {
    switch (status) {
      case 'improving':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'worsening':
      case 'critical':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getIssueStatusText = (status: string) => {
    switch (status) {
      case 'improving':
        return 'Đang cải thiện';
      case 'worsening':
        return 'Đang xấu đi';
      case 'critical':
        return 'Nghiêm trọng';
      default:
        return 'Ổn định';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Báo Cáo Hạnh Phúc</h1>
          <p className="text-gray-500 mt-1">
            Đánh giá chi tiết tình trạng hạnh phúc của các gia đình
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="w-5 h-5 text-gray-600" />
            <span>Chọn kỳ báo cáo</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow">
            <Download className="w-5 h-5" />
            <span>Xuất báo cáo</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Gia đình khỏe mạnh</p>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">892</p>
          <p className="text-sm text-gray-500 mt-1">71.5% tổng số gia đình</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Cần theo dõi</p>
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">332</p>
          <p className="text-sm text-gray-500 mt-1">26.6% tổng số gia đình</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 border-l-4 border-red-500">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Cần can thiệp</p>
            <XCircle className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900">23</p>
          <p className="text-sm text-gray-500 mt-1">1.9% tổng số gia đình</p>
        </div>
      </div>

      <div className="space-y-6">
        {familyReports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h2 className="text-xl font-bold text-gray-900">{report.family}</h2>
                  <span className="text-sm text-gray-500">{report.period}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className={`px-4 py-2 rounded-lg border-2 ${getScoreBgColor(
                      report.happinessScore
                    )}`}
                  >
                    <p className="text-xs text-gray-600">Điểm hạnh phúc</p>
                    <p className={`text-2xl font-bold ${getScoreColor(report.happinessScore)}`}>
                      {report.happinessScore}/10
                    </p>
                  </div>
                  {getTrendIcon(report.trend)}
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Điểm tích cực</span>
                  </h3>
                  {report.highlights.length > 0 ? (
                    <ul className="space-y-2">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 italic">Chưa có dữ liệu</p>
                  )}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Điểm cần chú ý</span>
                  </h3>
                  {report.concerns.length > 0 ? (
                    <ul className="space-y-2">
                      {report.concerns.map((concern, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start space-x-2">
                          <span className="text-yellow-500 mt-1">•</span>
                          <span>{concern}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-green-600 font-medium">
                      Không có vấn đề cần chú ý
                    </p>
                  )}
                </div>
              </div>

              {report.issues.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Vấn đề được ghi nhận</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {report.issues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          {getIssueStatusIcon(issue.status)}
                          <div>
                            <p className="text-sm font-medium text-gray-900">{issue.type}</p>
                            <p className="text-xs text-gray-500">
                              {getIssueStatusText(issue.status)}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                          {issue.count} lần
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Báo cáo được AI tạo tự động dựa trên dữ liệu trong tháng
                  </p>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Download className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Tải xuống PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
