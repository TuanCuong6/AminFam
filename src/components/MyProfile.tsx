import { User, Mail, Phone, Shield, Calendar, Save, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

interface MyProfileProps {
    onBack: () => void;
}

export default function MyProfile({ onBack }: MyProfileProps) {
    const { admin } = useAuth();

    const [formData, setFormData] = useState({
        name: admin?.name || 'Admin',
        phone: '0987654321',
    });

    const adminData = {
        email: admin?.email || 'admin@giadinhhanphuc.vn',
        role: admin?.role || 'Super Admin',
        joinDate: '01/01/2024',
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically call an API to update the profile
        console.log('Updating profile:', formData);
        alert('Cập nhật thông tin thành công!');
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Hồ Sơ Của Tôi</h1>
                    <p className="text-gray-500 mt-1">Quản lý thông tin cá nhân của bạn</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-5xl mb-4">
                                {formData.name.charAt(0)}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{formData.name}</h3>
                            <div className="flex items-center space-x-2 text-gray-600 mt-2">
                                <Shield className="w-4 h-4" />
                                <span className="text-sm">{adminData.role}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500 mt-1">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">Tham gia: {adminData.joinDate}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Thông Tin Cá Nhân</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Họ và Tên <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={adminData.email}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                                        disabled
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Email không thể thay đổi</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Số Điện Thoại <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                                        placeholder="0987654321"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center space-x-2"
                                >
                                    <Save className="w-5 h-5" />
                                    <span>Cập Nhật Thông Tin</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
