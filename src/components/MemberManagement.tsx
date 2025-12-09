import { Search, Edit, Ban, UserPlus, Users as UsersIcon } from 'lucide-react';
import { useState } from 'react';

export default function MemberManagement() {
    const [members, setMembers] = useState([
        {
            id: 1,
            name: 'Nguyễn Văn A',
            role: 'Bố',
            family: 'Gia đình Nguyễn Văn A',
            emotion: 'Vui vẻ',
            status: 'active',
            joinDate: '01/01/2024',
            lastActive: '5 phút trước',
        },
        {
            id: 2,
            name: 'Trần Thị B',
            role: 'Mẹ',
            family: 'Gia đình Nguyễn Văn A',
            emotion: 'Bình thường',
            status: 'active',
            joinDate: '01/01/2024',
            lastActive: '10 phút trước',
        },
        {
            id: 3,
            name: 'Nguyễn Văn C',
            role: 'Con',
            family: 'Gia đình Nguyễn Văn A',
            emotion: 'Lo lắng',
            status: 'active',
            joinDate: '01/01/2024',
            lastActive: '2 giờ trước',
        },
        {
            id: 4,
            name: 'Lê Văn D',
            role: 'Bố',
            family: 'Gia đình Lê Văn D',
            emotion: 'Căng thẳng',
            status: 'active',
            joinDate: '15/01/2024',
            lastActive: '1 giờ trước',
        },
        {
            id: 5,
            name: 'Phạm Thị E',
            role: 'Mẹ',
            family: 'Gia đình Lê Văn D',
            emotion: 'Vui vẻ',
            status: 'inactive',
            joinDate: '15/01/2024',
            lastActive: '5 ngày trước',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedMember, setSelectedMember] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: '',
        role: 'Bố',
        family: '',
        emotion: 'Bình thường',
    });

    const getEmotionColor = (emotion: string) => {
        switch (emotion) {
            case 'Vui vẻ':
                return 'bg-green-100 text-green-700';
            case 'Bình thường':
                return 'bg-blue-100 text-blue-700';
            case 'Lo lắng':
                return 'bg-yellow-100 text-yellow-700';
            case 'Căng thẳng':
                return 'bg-orange-100 text-orange-700';
            case 'Buồn':
                return 'bg-purple-100 text-purple-700';
            case 'Giận dữ':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const getStatusColor = (status: string) => {
        return status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700';
    };

    const getStatusText = (status: string) => {
        return status === 'active' ? 'Đang hoạt động' : 'Vô hiệu hóa';
    };

    const handleAddMember = () => {
        setModalMode('add');
        setFormData({ name: '', role: 'Bố', family: '', emotion: 'Bình thường' });
        setShowModal(true);
    };

    const handleEditMember = (member: any) => {
        setModalMode('edit');
        setSelectedMember(member);
        setFormData({
            name: member.name,
            role: member.role,
            family: member.family,
            emotion: member.emotion,
        });
        setShowModal(true);
    };

    const handleSaveMember = () => {
        if (formData.name && formData.family) {
            if (modalMode === 'add') {
                const newMember = {
                    id: members.length + 1,
                    ...formData,
                    status: 'active',
                    joinDate: new Date().toLocaleDateString('vi-VN'),
                    lastActive: 'Vừa xong',
                };
                setMembers([...members, newMember]);
            } else {
                setMembers(
                    members.map((m) =>
                        m.id === selectedMember.id ? { ...m, ...formData } : m
                    )
                );
            }
            setShowModal(false);
        }
    };

    const handleToggleStatus = (id: number) => {
        setMembers(
            members.map((m) =>
                m.id === id ? { ...m, status: m.status === 'active' ? 'inactive' : 'active' } : m
            )
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Quản Lý Người Dùng</h1>
                    <p className="text-gray-600 mt-1">Quản lý thành viên trong các gia đình</p>
                </div>
                <button
                    onClick={handleAddMember}
                    className="flex items-center space-x-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white px-4 py-2 rounded-lg hover:from-rose-500 hover:to-rose-600 transition"
                >
                    <UserPlus className="w-5 h-5" />
                    <span>Thêm Người Dùng</span>
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6 gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm người dùng..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                        />
                    </div>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent">
                        <option>Tất cả vai trò</option>
                        <option>Bố</option>
                        <option>Mẹ</option>
                        <option>Con</option>
                        <option>Anh/Chị</option>
                        <option>Em</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent">
                        <option>Tất cả cảm xúc</option>
                        <option>Vui vẻ</option>
                        <option>Bình thường</option>
                        <option>Lo lắng</option>
                        <option>Căng thẳng</option>
                        <option>Buồn</option>
                        <option>Giận dữ</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent">
                        <option>Tất cả trạng thái</option>
                        <option>Đang hoạt động</option>
                        <option>Vô hiệu hóa</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                    Tên
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                    Vai Trò
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                    Gia Đình
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                    Cảm Xúc Chủ Đạo
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                                    Trạng Thái
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
                            {members.map((member) => (
                                <tr
                                    key={member.id}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                >
                                    <td className="py-4 px-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                                {member.name.charAt(0)}
                                            </div>
                                            <p className="font-medium text-gray-900">{member.name}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                                            {member.role}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center space-x-2">
                                            <UsersIcon className="w-4 h-4 text-gray-400" />
                                            <p className="text-gray-700">{member.family}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEmotionColor(member.emotion)}`}>
                                            {member.emotion}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(member.status)}`}>
                                            {getStatusText(member.status)}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <p className="text-sm text-gray-600">{member.lastActive}</p>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handleEditMember(member)}
                                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                            >
                                                <Edit className="w-4 h-4 text-gray-600" />
                                            </button>
                                            <button
                                                onClick={() => handleToggleStatus(member.id)}
                                                className={`p-2 rounded-lg transition-colors ${member.status === 'active'
                                                        ? 'hover:bg-red-100'
                                                        : 'hover:bg-green-100'
                                                    }`}
                                            >
                                                <Ban
                                                    className={`w-4 h-4 ${member.status === 'active' ? 'text-red-600' : 'text-green-600'
                                                        }`}
                                                />
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
                            {modalMode === 'add' ? 'Thêm Người Dùng Mới' : 'Chỉnh Sửa Người Dùng'}
                        </h2>

                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tên
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
                                    Vai Trò
                                </label>
                                <select
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none transition"
                                >
                                    <option>Bố</option>
                                    <option>Mẹ</option>
                                    <option>Con</option>
                                    <option>Anh/Chị</option>
                                    <option>Em</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Gia Đình
                                </label>
                                <input
                                    type="text"
                                    value={formData.family}
                                    onChange={(e) => setFormData({ ...formData, family: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none transition"
                                    placeholder="Tên gia đình"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Cảm Xúc Chủ Đạo
                                </label>
                                <select
                                    value={formData.emotion}
                                    onChange={(e) => setFormData({ ...formData, emotion: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none transition"
                                >
                                    <option>Vui vẻ</option>
                                    <option>Bình thường</option>
                                    <option>Lo lắng</option>
                                    <option>Căng thẳng</option>
                                    <option>Buồn</option>
                                    <option>Giận dữ</option>
                                </select>
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
                                onClick={handleSaveMember}
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
