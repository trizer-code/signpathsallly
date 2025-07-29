import React from 'react';
import { GraduationCap, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const RoleSelection: React.FC = () => {
  const { setUserRole, user } = useAuth();

  const handleRoleSelect = (role: 'student' | 'tutor') => {
    setUserRole(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome, {user?.name}!
          </h1>
          <p className="text-xl text-gray-700">
            Choose your path to get started with SignPath
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Option */}
          <div 
            onClick={() => handleRoleSelect('student')}
            className="bg-white rounded-xl shadow-lg p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Student</h2>
              <p className="text-gray-600 mb-6">
                Learn sign language through our structured curriculum with AI assistance and expert tutors
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Beginner to Advanced levels</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>AI-powered learning tools</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Expert tutor access</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Progress tracking & tests</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                Start Learning
              </button>
            </div>
          </div>

          {/* Tutor Option */}
          <div 
            onClick={() => handleRoleSelect('tutor')}
            className="bg-white rounded-xl shadow-lg p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutor</h2>
              <p className="text-gray-600 mb-6">
                Share your expertise and earn by teaching sign language to students around the world
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Set your own rates</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Create custom curriculum</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Video call integration</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>70% earnings retention</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                Become a Tutor
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            You can always switch roles later in your profile settings
          </p>
        </div>
      </div>
    </div>
  );
};