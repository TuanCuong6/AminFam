import { X, User, Mail, Phone, Shield, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AdminProfileModalProps {
    onClose: () => void;
}

export default function AdminProfileModal({ onClose }: AdminProfileModalProps) {
    const { admin } = useAuth();

    const adminData = {
        name: admin?.name || 'Admin',
        email: admin?.email || 'admin@giadinhhanphuc.vn',
        phone: '0987654321',
        role: admin?.role || 'Super Admin',
        joinDate: '01/01/2024',
        totalFamilies: 1247,
        totalUsers: 4988,
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
                <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-white p-6 flex items-center justify-between rounded-t-xl">
                    <h2 className="text-2xl font-bold">Hồ Sơ Của Tôi</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                            {adminData.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{adminData.name}</h3>
                            <div className="flex items-center space-x-2 text-gray-600 mt-1">
                                <Shield className="w-4 h-4" />
                                <span className="text-sm">{adminData.role}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-gray-700">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <span>{adminData.email}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <span>{adminData.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span>Tham gia: {adminData.joinDate}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{adminData.totalFamilies}</div>
                            <div className="text-sm text-gray-600 mt-1">Gia đình</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{adminData.totalUsers}</div>
                            <div className="text-sm text-gray-600 mt-1">Người dùng</div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
}
