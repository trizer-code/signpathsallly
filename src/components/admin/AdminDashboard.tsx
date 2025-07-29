import React, { useState } from 'react';
import { Users, FileText, DollarSign, Video, Upload, Settings, CheckCircle, XCircle } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'content' | 'tutors' | 'payments'>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">SignPath Management Portal</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-red-800">Administrator</span>
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
              { id: 'overview', label: 'Overview', icon: <Settings className="w-4 h-4" /> },
              { id: 'users', label: 'Students', icon: <Users className="w-4 h-4" /> },
              { id: 'tutors', label: 'Tutors', icon: <CheckCircle className="w-4 h-4" /> },
              { id: 'content', label: 'Content', icon: <FileText className="w-4 h-4" /> },
              { id: 'payments', label: 'Payments', icon: <DollarSign className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-600 text-red-600'
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
        {activeTab === 'overview' && <AdminOverview />}
        {activeTab === 'users' && <AdminUsers />}
        {activeTab === 'tutors' && <AdminTutors />}
        {activeTab === 'content' && <AdminContent />}
        {activeTab === 'payments' && <AdminPayments />}
      </main>
    </div>
  );
};

const AdminOverview: React.FC = () => (
  <div className="space-y-6">
    {/* Stats */}
    <div className="grid md:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Students</p>
            <p className="text-2xl font-bold text-gray-900">1</p>
          </div>
          <Users className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Tutors</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Pending Approvals</p>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </div>
          <XCircle className="w-8 h-8 text-orange-600" />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">0 KES</p>
          </div>
          <DollarSign className="w-8 h-8 text-purple-600" />
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Registrations</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Demo User</h4>
              <p className="text-sm text-gray-600">Student • Just now</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">System Status</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Platform Health</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Healthy</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">M-Pesa Integration</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">AI Learning System</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Online</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdminUsers: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">Student Management</h3>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Search students..."
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Export
        </button>
      </div>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 font-medium text-gray-700">Name</th>
            <th className="text-left py-3 font-medium text-gray-700">Email</th>
            <th className="text-left py-3 font-medium text-gray-700">Level</th>
            <th className="text-left py-3 font-medium text-gray-700">Progress</th>
            <th className="text-left py-3 font-medium text-gray-700">Status</th>
            <th className="text-left py-3 font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3">Demo User</td>
            <td className="py-3">demo@example.com</td>
            <td className="py-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Beginner</span>
            </td>
            <td className="py-3">0%</td>
            <td className="py-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Active</span>
            </td>
            <td className="py-3">
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
                <button className="text-gray-600 hover:text-gray-700 text-sm">Edit</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const AdminTutors: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Tutor Applications</h3>
        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
          0 Pending Approval
        </span>
      </div>
      
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">No pending tutor applications</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6">
      <h4 className="font-medium text-gray-900 mb-4">Approved Tutors</h4>
      <div className="text-center py-8">
        <p className="text-gray-500">No approved tutors yet</p>
      </div>
    </div>
  </div>
);

const AdminContent: React.FC = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Content</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content Type
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>PDF Document</option>
              <option>Word Document</option>
              <option>YouTube Video</option>
              <option>Test Questions</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Learning Level
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload File
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Drop files here or click to upload</p>
              <input type="file" className="hidden" />
              <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Choose File
              </button>
            </div>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium">
            Upload Content
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">YouTube Videos</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              YouTube URL
            </label>
            <input
              type="url"
              placeholder="https://youtube.com/watch?v=..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Video Title
            </label>
            <input
              type="text"
              placeholder="Enter video title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Level
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium">
            Add YouTube Video
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6">
      <h4 className="font-medium text-gray-900 mb-4">Content Library</h4>
      <div className="text-center py-8">
        <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">No content uploaded yet</p>
      </div>
    </div>
  </div>
);

const AdminPayments: React.FC = () => (
  <div className="space-y-6">
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Total Revenue</h3>
        <p className="text-3xl font-bold text-green-600">0 KES</p>
        <p className="text-sm text-gray-600 mt-1">All time</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">This Month</h3>
        <p className="text-3xl font-bold text-blue-600">0 KES</p>
        <p className="text-sm text-gray-600 mt-1">December 2024</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Tutor Payouts</h3>
        <p className="text-3xl font-bold text-purple-600">0 KES</p>
        <p className="text-sm text-gray-600 mt-1">Pending</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Payment Transactions</h3>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Transactions</option>
            <option>Student Payments</option>
            <option>Tutor Payouts</option>
          </select>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
            Export
          </button>
        </div>
      </div>

      <div className="text-center py-8">
        <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">No payment transactions yet</p>
        <p className="text-sm text-gray-400 mt-2">Payments will appear here once students start purchasing courses</p>
      </div>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
      <h4 className="font-medium text-blue-900 mb-2">M-Pesa Integration</h4>
      <p className="text-sm text-blue-800 mb-4">
        Students can pay for intermediate courses via M-Pesa: 0729641116
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <span className="text-sm font-medium text-blue-900">Integration Status:</span>
          <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
        </div>
        <div>
          <span className="text-sm font-medium text-blue-900">Auto-verification:</span>
          <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Manual</span>
        </div>
      </div>
    </div>
  </div>
);