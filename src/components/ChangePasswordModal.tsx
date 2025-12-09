import { X, Lock } from 'lucide-react';
import { useState } from 'react';

interface ChangePasswordModalProps {
    onClose: () => void;
}

export default function ChangePasswordModal({ onClose }: ChangePasswordModalProps) {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            alert('Mật khẩu mới không khớp!');
            return;
        }

        if (formData.newPassword.length < 6) {
            alert('Mật khẩu mới phải có ít nhất 6 ký tự!');
            return;
        }

        // Here you would typically call an API to change password
        console.log('Changing password...');
        alert('Đổi mật khẩu thành công!');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
                <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-white p-6 flex items-center justify-between rounded-t-xl">
                    <div className="flex items-center space-x-3">
                        <Lock className="w-6 h-6" />
                        <h2 className="text-2xl font-bold">Đổi Mật Khẩu</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mật Khẩu Hiện Tại <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            value={formData.currentPassword}
                            onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                            placeholder="Nhập mật khẩu hiện tại"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mật Khẩu Mới <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            value={formData.newPassword}
                            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                            placeholder="Nhập mật khẩu mới (tối thiểu 6 ký tự)"
                            required
                            minLength={6}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Xác Nhận Mật Khẩu Mới <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                            placeholder="Nhập lại mật khẩu mới"
                            required
                        />
                    </div>

                    <div className="flex space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-lg hover:shadow-lg transition-shadow"
                        >
                            Đổi Mật Khẩu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
