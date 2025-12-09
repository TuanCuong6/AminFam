import { Search, Eye, UserPlus, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import FamilyProfileModal from './FamilyProfileModal';
import EditFamilyModal from './EditFamilyModal';

export default function FamilyManagement() {
  const [selectedFamilyId, setSelectedFamilyId] = useState<number | null>(null);
  const [editingFamily, setEditingFamily] = useState<any>(null);

  const [familiesData, setFamiliesData] = useState([
    {
      id: 1,
      name: 'Gia đình Nguyễn Văn A',
      members: 4,
      happinessScore: 8.2,
      status: 'active',
      joinDate: '15/01/2024',
      lastActive: '2 giờ trước',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      phone: '0901234567',
      email: 'nguyenvana@email.com',
      notes: 'Gia đình hòa thuận, tích cực tham gia hoạt động',
    },
    {
      id: 2,
      name: 'Gia đình Trần Thị B',
      members: 5,
      happinessScore: 6.5,
      status: 'warning',
      joinDate: '10/01/2024',
      lastActive: '5 giờ trước',
      address: '456 Đường XYZ, Quận 3, TP.HCM',
      phone: '0912345678',
      email: 'tranthib@email.com',
      notes: 'Cần theo dõi thêm về mối quan hệ gia đình',
    },
    {
      id: 3,
      name: 'Gia đình Lê Văn C',
      members: 3,
      happinessScore: 9.1,
      status: 'active',
      joinDate: '08/01/2024',
      lastActive: '1 giờ trước',
      address: '789 Đường DEF, Quận 5, TP.HCM',
      phone: '0923456789',
      email: 'levanc@email.com',
      notes: 'Gia đình mẫu mực, rất tích cực',
    },
    {
      id: 4,
      name: 'Gia đình Phạm Thị D',
      members: 6,
      happinessScore: 7.8,
      status: 'active',
      joinDate: '05/01/2024',
      lastActive: '3 giờ trước',
      address: '321 Đường GHI, Quận 7, TP.HCM',
      phone: '0934567890',
      email: 'phamthid@email.com',
      notes: 'Gia đình đông con, cần hỗ trợ thêm',
    },
    {
      id: 5,
      name: 'Gia đình Hoàng Văn E',
      members: 4,
      happinessScore: 5.2,
      status: 'critical',
      joinDate: '01/01/2024',
      lastActive: '12 giờ trước',
      address: '654 Đường JKL, Quận 10, TP.HCM',
      phone: '0945678901',
      email: 'hoangvane@email.com',
      notes: 'Cần can thiệp và hỗ trợ khẩn cấp',
    },
    {
      id: 6,
      name: 'Gia đình Đỗ Thị F',
      members: 3,
      happinessScore: 8.7,
      status: 'active',
      joinDate: '28/12/2023',
      lastActive: '30 phút trước',
      address: '987 Đường MNO, Quận 2, TP.HCM',
      phone: '0956789012',
      email: 'dothif@email.com',
      notes: 'Gia đình nhỏ, quan hệ tốt',
    },
  ]);

  const handleSaveFamily = (updatedFamily: any) => {
    setFamiliesData(familiesData.map(f => f.id === updatedFamily.id ? updatedFamily : f));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      case 'critical':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Khỏe mạnh';
      case 'warning':
        return 'Cần chú ý';
      case 'critical':
        return 'Cần hỗ trợ';
      default:
        return 'Không rõ';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Gia Đình</h1>
          <p className="text-gray-500 mt-1">Danh sách các gia đình đang sử dụng ứng dụng</p>
        </div>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow">
          <UserPlus className="w-5 h-5" />
          <span>Thêm Gia Đình</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm gia đình..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-3">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent">
              <option>Tất cả trạng thái</option>
              <option>Khỏe mạnh</option>
              <option>Cần chú ý</option>
              <option>Cần hỗ trợ</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent">
              <option>Sắp xếp: Mới nhất</option>
              <option>Điểm hạnh phúc cao</option>
              <option>Điểm hạnh phúc thấp</option>
              <option>Số thành viên</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Tên Gia Đình
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Thành Viên
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Điểm Hạnh Phúc
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Trạng Thái
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Ngày Tham Gia
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Hoạt Động
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Thao Tác
                </th>
              </tr>
            </thead>
            <tbody>
              {familiesData.map((family) => (
                <tr
                  key={family.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setSelectedFamilyId(family.id)}
                >
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900 hover:text-rose-500 transition-colors">{family.name}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-700">{family.members} người</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className={`font-bold ${getScoreColor(family.happinessScore)}`}>
                      {family.happinessScore}/10
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        family.status
                      )}`}
                    >
                      {getStatusText(family.status)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{family.joinDate}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{family.lastActive}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFamilyId(family.id);
                        }}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                        title="Xem hồ sơ"
                      >
                        <Eye className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingFamily(family);
                        }}
                        className="p-2 hover:bg-green-50 rounded-lg transition-colors group"
                        title="Chỉnh sửa"
                      >
                        <Edit className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm('Bạn có chắc muốn xóa gia đình này?')) {
                            setFamiliesData(familiesData.filter(f => f.id !== family.id));
                          }
                        }}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                        title="Xóa"
                      >
                        <Trash2 className="w-4 h-4 text-gray-600 group-hover:text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Hiển thị 1-6 trong tổng số 1,247 gia đình</p>
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

      {selectedFamilyId && createPortal(
        <FamilyProfileModal
          familyId={selectedFamilyId}
          onClose={() => setSelectedFamilyId(null)}
        />,
        document.body
      )}

      {editingFamily && createPortal(
        <EditFamilyModal
          family={editingFamily}
          onClose={() => setEditingFamily(null)}
          onSave={handleSaveFamily}
        />,
        document.body
      )}
    </div>
  );
}
