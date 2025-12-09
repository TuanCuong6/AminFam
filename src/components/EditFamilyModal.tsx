import { X } from 'lucide-react';
import { useState } from 'react';

interface EditFamilyModalProps {
    family: {
        id: number;
        name: string;
        members: number;
        happinessScore: number;
        status: string;
        address?: string;
        phone?: string;
        email?: string;
        notes?: string;
    };
    onClose: () => void;
    onSave: (data: any) => void;
}

export default function EditFamilyModal({ family, onClose, onSave }: EditFamilyModalProps) {
    const [formData, setFormData] = useState({
        name: family.name,
        members: family.members,
        happinessScore: family.happinessScore,
        status: family.status,
        address: family.address || '',
        phone: family.phone || '',
        email: family.email || '',
        notes: family.notes || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...family, ...formData });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-white p-6 flex items-center justify-between rounded-t-xl">
                    <h2 className="text-2xl font-bold">Chỉnh Sửa Gia Đình</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tên Gia Đình <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Số Thành Viên <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                value={formData.members}
                                onChange={(e) => setFormData({ ...formData, members: parseInt(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                                min="1"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Điểm Hạnh Phúc <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                value={formData.happinessScore}
                                onChange={(e) => setFormData({ ...formData, happinessScore: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                                min="0"
                                max="10"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Trạng Thái <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                            >
                                <option value="active">Khỏe mạnh</option>
                                <option value="warning">Cần chú ý</option>
                                <option value="critical">Cần hỗ trợ</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Địa Chỉ
                        </label>
                        <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                            placeholder="Nhập địa chỉ gia đình"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Số Điện Thoại
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                                placeholder="0901234567"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                                placeholder="email@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ghi Chú
                        </label>
                        <textarea
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                            rows={3}
                            placeholder="Nhập ghi chú về gia đình..."
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
                            Lưu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
