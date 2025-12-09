import { Search, Eye, Edit, Trash2, UserPlus, MoreVertical, Shield, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn Admin',
      email: 'admin@familyapp.vn',
      role: 'Super Admin',
      status: 'active',
      joinDate: '01/01/2024',
      lastLogin: '5 phút trước',
      families: 12,
    },
    {
      id: 2,
      name: 'Trần Thị Moderator',
      email: 'moderator1@familyapp.vn',
      role: 'Moderator',
      status: 'active',
      joinDate: '15/01/2024',
      lastLogin: '2 giờ trước',
      families: 45,
    },
    {
      id: 3,
      name: 'Lê Văn Support',
      email: 'support@familyapp.vn',
      role: 'Support Staff',
      status: 'active',
      joinDate: '08/01/2024',
      lastLogin: '30 phút trước',
      families: 78,
    },
    {
      id: 4,
      name: 'Phạm Thị Analyst',
      email: 'analyst@familyapp.vn',
      role: 'Data Analyst',
      status: 'inactive',
      joinDate: '20/01/2024',
      lastLogin: '5 ngày trước',
      families: 0,
    },
    {
      id: 5,
      name: 'Hoàng Văn Editor',
      email: 'editor@familyapp.vn',
      role: 'Content Editor',
      status: 'active',
      joinDate: '10/01/2024',
      lastLogin: '1 giờ trước',
      families: 34,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Support Staff',
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Super Admin':
        return 'bg-purple-100 text-purple-700';
      case 'Moderator':
        return 'bg-blue-100 text-blue-700';
      case 'Support Staff':
        return 'bg-green-100 text-green-700';
      case 'Data Analyst':
        return 'bg-orange-100 text-orange-700';
      case 'Content Editor':
        return 'bg-cyan-100 text-cyan-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700';
  };

  const getStatusText = (status: string) => {
    return status === 'active' ? 'Hoạt động' : 'Không hoạt động';
  };

  const handleAddUser = () => {
    setModalMode('add');
    setFormData({ name: '', email: '', role: 'Support Staff' });
    setShowModal(true);
  };

  const handleSaveUser = () => {
    if (formData.name && formData.email) {
      if (modalMode === 'add') {
        const newUser = {
          id: users.length + 1,
          ...formData,
          status: 'active',
          joinDate: new Date().toLocaleDateString('vi-VN'),
          lastLogin: 'Vừa xong',
          families: 0,
        };
        setUsers([...users, newUser]);
      }
      setShowModal(false);
    }
  };

  const handleDeleteUser = (id: number) => {
    if (id !== 1) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Trị Admin</h1>
          <p className="text-gray-600 mt-1">Quản lý tài khoản admin và phân quyền hệ thống</p>
        </div>
        <button
          onClick={handleAddUser}
          className="flex items-center space-x-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white px-4 py-2 rounded-lg hover:from-rose-500 hover:to-rose-600 transition"
        >
          <UserPlus className="w-5 h-5" />
          <span>Thêm Admin</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm admin..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent">
            <option>Tất cả vai trò</option>
            <option>Super Admin</option>
            <option>Moderator</option>
            <option>Support Staff</option>
            <option>Data Analyst</option>
            <option>Content Editor</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Tên Admin
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Vai Trò
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Trạng Thái
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Gia Đình
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Hoạt Động Cuối
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                  Thao Tác
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-700">{user.email}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                      {getStatusText(user.status)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-700 font-medium">{user.families}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{user.lastLogin}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        disabled={user.id === 1}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trash2 className={`w-4 h-4 ${user.id === 1 ? 'text-gray-300' : 'text-red-600'}`} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {modalMode === 'add' ? 'Thêm Admin Mới' : 'Chỉnh Sửa Admin'}
            </h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tên Admin
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none transition"
                  placeholder="Nhập tên"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none transition"
                  placeholder="user@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vai Trò
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none transition"
                >
                  <option>Super Admin</option>
                  <option>Moderator</option>
                  <option>Support Staff</option>
                  <option>Data Analyst</option>
                  <option>Content Editor</option>
                </select>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  Mật khẩu tạm thời sẽ được gửi qua email. Admin phải đổi mật khẩu khi đăng nhập lần đầu.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Hủy
              </button>
              <button
                onClick={handleSaveUser}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg hover:from-rose-500 hover:to-rose-600 transition"
              >
                {modalMode === 'add' ? 'Thêm' : 'Cập Nhật'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
