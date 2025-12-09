import { useState } from 'react';
import { Heart, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {
  onForgotPassword: () => void;
}

export default function Login({ onForgotPassword }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email || !password) {
        setError('Vui lòng nhập email và mật khẩu');
        return;
      }

      if (!email.includes('@')) {
        setError('Email không hợp lệ');
        return;
      }

      await login(email, password);
    } catch (err) {
      setError('Email hoặc mật khẩu không chính xác');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="md:w-1/2 bg-gradient-to-br from-rose-400 to-rose-500 p-8 flex items-center justify-center">
              <img
                src="/src/assets/img/anh1.png"
                alt="Family"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Login Form */}
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" fill="white" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Gia Đình Hạnh Phúc
              </h1>
              <p className="text-center text-gray-500 text-sm mb-6">
                Cổng Quản Lý Admin
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@familyapp.vn"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mật Khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-transparent outline-none transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-rose-400 focus:ring-rose-300"
                    />
                    <span className="text-gray-600">Nhớ tôi</span>
                  </label>
                  <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-rose-500 hover:text-rose-600 font-medium transition"
                  >
                    Quên mật khẩu?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white py-2.5 rounded-lg font-semibold hover:from-rose-500 hover:to-rose-600 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
                </button>
              </form>

              <p className="text-center text-gray-500 text-xs mt-6">
                © 2025 Gia Đình Hạnh Phúc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
