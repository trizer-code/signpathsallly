import React, { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const LandingPage: React.FC = () => {
  const { login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let success = false;
      if (isLogin) {
        success = await login(email, password);
      } else {
        if (password.length < 8) {
          setError('Password must be at least 8 characters long');
          setLoading(false);
          return;
        }
        success = await signup(email, password, name);
      }

      if (!success) {
        setError('Authentication failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col">
      {/* Header */}
      <header className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">SignPath by Sally</div>
          
          {/* Login Form - Top Right */}
          <div className="bg-white rounded-lg shadow-md p-4 w-80">
            <div className="flex mb-4">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-l-md text-sm font-medium ${
                  isLogin 
                    ? 'bg-yellow-400 text-gray-900' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <LogIn className="w-4 h-4 inline mr-2" />
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-r-md text-sm font-medium ${
                  !isLogin 
                    ? 'bg-yellow-400 text-gray-900' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <UserPlus className="w-4 h-4 inline mr-2" />
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-4 rounded-md font-medium transition-colors disabled:opacity-50"
              >
                {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up')}
              </button>
            </form>
            
            <div className="mt-3 text-xs text-gray-600 text-center">
              Demo: admin@signpath.com / admin123
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl font-bold text-black mb-8 leading-tight">
            Welcome to SignPath by Sally
          </h1>
          <p className="text-2xl font-bold text-black mb-12">
            Your journey in sign language starts today.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold mb-2">Beginner</h3>
              <p className="text-gray-600">Learn alphabet, finger spelling, and basic signs</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Intermediate</h3>
              <p className="text-gray-600">Master vocabulary, sentence structure, and culture</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">Advanced</h3>
              <p className="text-gray-600">Perfect sign reading and video communication</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <h3 className="text-lg font-bold mb-2">New to SignPath?</h3>
          <p className="text-gray-600 mb-4">Join thousands of learners mastering sign language</p>
          <button
            onClick={() => setIsLogin(false)}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-6 rounded-md font-medium transition-colors"
          >
            Start Learning Today
          </button>
        </div>
      </footer>
    </div>
  );
};