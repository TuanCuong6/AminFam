import { X, Users, Heart, MapPin, Phone, Mail, Calendar, TrendingUp, Sparkles } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface FamilyProfileModalProps {
    familyId: number;
    onClose: () => void;
}

export default function FamilyProfileModal({ familyId, onClose }: FamilyProfileModalProps) {
    const familyData = {
        id: familyId,
        name: 'Gia đình Nguyễn Văn A',
        address: '123 Đường Lê Lợi, Quận 1, TP.HCM',
        phone: '0901234567',
        email: 'nguyenvana@email.com',
        joinDate: '15/01/2024',
        happinessScore: 8.2,
        members: [
            { id: 1, name: 'Nguyễn Văn A', role: 'Bố', age: 45 },
            { id: 2, name: 'Trần Thị B', role: 'Mẹ', age: 42 },
            { id: 3, name: 'Nguyễn Văn C', role: 'Con trai', age: 18 },
            { id: 4, name: 'Nguyễn Thị D', role: 'Con gái', age: 15 },
        ],
        weeklyScores: [
            { day: '3/12', score: 7.5 },
            { day: '4/12', score: 7.8 },
            { day: '5/12', score: 8.0 },
            { day: '6/12', score: 7.9 },
            { day: '7/12', score: 8.3 },
            { day: '8/12', score: 8.5 },
            { day: '9/12', score: 8.2 },
        ],
        aiAnalysis: 'Gia đình có xu hướng hạnh phúc tích cực với điểm số tăng dần trong tuần. Mối quan hệ giữa các thành viên rất tốt, đặc biệt vào cuối tuần khi có nhiều thời gian bên nhau. Nên duy trì các hoạt động chung để tăng cường sự gắn kết.',
    };

    const maxScore = 10;
    const minScore = 0;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-rose-400 to-rose-500 text-white p-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Hồ Sơ Gia Đình</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{familyData.name}</h3>
                            <div className="mt-3 space-y-2 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{familyData.address}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{familyData.phone}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span>{familyData.email}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Tham gia: {familyData.joinDate}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-rose-500">{familyData.happinessScore}</div>
                            <div className="text-sm text-gray-600 flex items-center space-x-1">
                                <Heart className="w-4 h-4" fill="currentColor" />
                                <span>Điểm hạnh phúc</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-rose-500" />
                            <span>Xu Hướng Hạnh Phúc (7 ngày)</span>
                        </h4>
                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={familyData.weeklyScores}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                    <XAxis dataKey="day" stroke="#9ca3af" />
                                    <YAxis stroke="#9ca3af" domain={[0, 10]} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#ffffff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                        }}
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#d9a86a"
                                        strokeWidth={2}
                                        dot={{ fill: '#d9a86a', r: 4 }}
                                        name="Điểm hạnh phúc"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                                <Users className="w-5 h-5 text-rose-500" />
                                <span>Thành Viên ({familyData.members.length})</span>
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {familyData.members.map((member) => (
                                    <div
                                        key={member.id}
                                        className="p-3 bg-gray-50 rounded-lg"
                                    >
                                        <p className="font-medium text-gray-900">{member.name}</p>
                                        <p className="text-sm text-gray-600">{member.role} • {member.age} tuổi</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                                <Sparkles className="w-5 h-5 text-rose-500" />
                                <span>Phân Tích AI</span>
                            </h4>
                            <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {familyData.aiAnalysis}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
