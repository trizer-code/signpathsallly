import React, { useState } from 'react';
import { Users, DollarSign, Calendar, Upload, Video, FileText, MessageCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const TutorDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'profile' | 'students' | 'content' | 'earnings'>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tutor Dashboard</h1>
              <p className="text-gray-600">Welcome, {user?.name}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-purple-800">Pending Approval</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: <Users className="w-4 h-4" /> },
              { id: 'profile', label: 'Profile Setup', icon: <Upload className="w-4 h-4" /> },
              { id: 'students', label: 'My Students', icon: <Users className="w-4 h-4" /> },
              { id: 'content', label: 'Content', icon: <FileText className="w-4 h-4" /> },
              { id: 'earnings', label: 'Earnings', icon: <DollarSign className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && <TutorOverview />}
        {activeTab === 'profile' && <TutorProfile />}
        {activeTab === 'students' && <TutorStudents />}
        {activeTab === 'content' && <TutorContent />}
        {activeTab === 'earnings' && <TutorEarnings />}
      </main>
    </div>
  );
};

const TutorOverview: React.FC = () => (
  <div className="space-y-6">
    {/* Stats */}
    <div className="grid md:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Students</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <Users className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">This Month Earnings</p>
            <p className="text-2xl font-bold text-gray-900">0 KES</p>
          </div>
          <DollarSign className="w-8 h-8 text-green-600" />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Upcoming Sessions</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <Calendar className="w-8 h-8 text-purple-600" />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Rating</p>
            <p className="text-2xl font-bold text-gray-900">-</p>
          </div>
          <div className="text-yellow-500">⭐</div>
        </div>
      </div>
    </div>

    {/* Profile Setup Alert */}
    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-orange-800 mb-2">Complete Your Profile</h3>
      <p className="text-orange-700 mb-4">
        To start accepting students, please complete your tutor profile by uploading your ID and education video.
      </p>
      <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium">
        Complete Profile Setup
      </button>
    </div>

    {/* Recent Activity */}
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
      <div className="text-center py-8">
        <p className="text-gray-500">No activity yet. Complete your profile to get started!</p>
      </div>
    </div>
  </div>
);

const TutorProfile: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Profile Setup</h3>
      
      <div className="space-y-6">
        {/* ID Document Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload ID Document *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Click to upload your ID document</p>
            <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
            <input type="file" className="hidden" accept="image/*" />
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
              Choose File
            </button>
          </div>
        </div>

        {/* Education Video */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Education Video (Sign Language) *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Upload a video describing your education in sign language</p>
            <p className="text-sm text-gray-500">MP4, MOV up to 100MB, 2-5 minutes</p>
            <input type="file" className="hidden" accept="video/*" />
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
              Choose File
            </button>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Bio
          </label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tell students about your experience and teaching approach..."
          />
        </div>

        {/* Hourly Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hourly Rate (KES)
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="500"
          />
          <p className="text-sm text-gray-500 mt-1">You'll receive 70% after platform fees</p>
        </div>

        {/* Specializations */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specializations
          </label>
          <div className="grid md:grid-cols-2 gap-2">
            {['Beginner Teaching', 'Advanced Conversation', 'Deaf Culture', 'Technical Signs', 'Children Teaching', 'Adult Teaching'].map((spec) => (
              <label key={spec} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">{spec}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium">
          Submit for Approval
        </button>
      </div>
    </div>
  </div>
);

const TutorStudents: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-bold text-gray-900 mb-4">My Students</h3>
    <div className="text-center py-8">
      <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <p className="text-gray-500">No students assigned yet.</p>
      <p className="text-sm text-gray-400 mt-2">Complete your profile approval to start accepting students.</p>
    </div>
  </div>
);

const TutorContent: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Content Management</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h4 className="font-medium text-gray-900 mb-2">Upload Notes</h4>
          <p className="text-sm text-gray-600 mb-4">Share PDF or Word documents with students</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
            Upload Documents
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <Video className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h4 className="font-medium text-gray-900 mb-2">Create Syllabus</h4>
          <p className="text-sm text-gray-600 mb-4">Design your own teaching curriculum</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm">
            Create Syllabus
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6">
      <h4 className="font-medium text-gray-900 mb-4">My Content</h4>
      <div className="text-center py-8">
        <p className="text-gray-500">No content uploaded yet.</p>
      </div>
    </div>
  </div>
);

const TutorEarnings: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Earnings Overview</h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-600">Total Earned</p>
          <p className="text-2xl font-bold text-green-600">0 KES</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">This Month</p>
          <p className="text-2xl font-bold text-blue-600">0 KES</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Pending Payout</p>
          <p className="text-2xl font-bold text-orange-600">0 KES</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Payment Information</h4>
        <p className="text-sm text-blue-800">
          You earn 70% of all payments from students. Payouts are processed weekly by admin.
          Make sure to attend all scheduled Zoom classes to maintain good standing.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6">
      <h4 className="font-medium text-gray-900 mb-4">Payment History</h4>
      <div className="text-center py-8">
        <p className="text-gray-500">No payments received yet.</p>
      </div>
    </div>
  </div>
);