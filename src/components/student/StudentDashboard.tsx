import React, { useState } from 'react';
import { BookOpen, Brain, Award, Play, FileText, Star } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced' | null>(null);

  const levels = [
    {
      id: 'beginner' as const,
      title: 'Beginner',
      subtitle: 'Start your journey',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-green-500',
      lightColor: 'bg-green-100',
      textColor: 'text-green-600',
      description: 'Learn alphabet, finger spelling, and basic 3-letter words',
      features: ['AI-powered learning (Free)', 'Professional tutors (Paid)', 'Alphabet & finger spelling', 'Spell your name in signs'],
      price: 'Free / Paid options available'
    },
    {
      id: 'intermediate' as const,
      title: 'Intermediate',
      subtitle: 'Build your skills',
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      description: 'Master vocabulary, sentence structure, and deaf culture',
      features: ['Advanced vocabulary', 'TSVO sentence structure', 'Facial expressions', 'Classifier handshapes', 'Deaf culture studies'],
      price: '100 KES via M-Pesa (0729641116)'
    },
    {
      id: 'advanced' as const,
      title: 'Advanced',
      subtitle: 'Master the language',
      icon: <Award className="w-8 h-8" />,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      description: 'Perfect sign reading and video communication',
      features: ['Advanced sign reading', 'Video recording practice', 'Fluency assessment', 'Complex conversations'],
      price: 'Premium tier'
    }
  ];

  if (selectedLevel) {
    return <LevelDetailView level={selectedLevel} onBack={() => setSelectedLevel(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.name}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-yellow-800">Free Account</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Overview */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Learning Progress</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Lessons Completed</h3>
                <p className="text-2xl font-bold text-blue-600">0</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Tests Passed</h3>
                <p className="text-2xl font-bold text-green-600">0</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Current Level</h3>
                <p className="text-2xl font-bold text-purple-600">New</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Levels */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Learning Level</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level) => (
              <div
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer p-6"
              >
                <div className="flex items-center mb-4">
                  <div className={`${level.lightColor} p-3 rounded-lg mr-4`}>
                    <div className={level.textColor}>{level.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{level.title}</h3>
                    <p className="text-gray-600 text-sm">{level.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{level.description}</p>

                <div className="space-y-2 mb-4">
                  {level.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-gray-900">{level.price}</p>
                  <button className={`w-full mt-3 ${level.color} hover:opacity-90 text-white py-2 px-4 rounded-lg font-medium transition-colors`}>
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Start</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-4 rounded-lg font-medium transition-colors">
                <Play className="w-5 h-5" />
                <span>Try Free AI Lesson</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 px-4 rounded-lg font-medium transition-colors">
                <FileText className="w-5 h-5" />
                <span>Download Study Materials</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Available Tutors</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">Sarah M.</h4>
                  <p className="text-sm text-gray-600">5 years experience</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">500 KES/hr</p>
                  <button className="text-sm text-blue-600 hover:text-blue-700">Book Session</button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">John K.</h4>
                  <p className="text-sm text-gray-600">3 years experience</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">400 KES/hr</p>
                  <button className="text-sm text-blue-600 hover:text-blue-700">Book Session</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Level Detail Component
const LevelDetailView: React.FC<{ 
  level: 'beginner' | 'intermediate' | 'advanced'; 
  onBack: () => void; 
}> = ({ level, onBack }) => {
  const levelContent = {
    beginner: {
      title: 'Beginner Level',
      lessons: [
        { id: 1, title: 'Sign Language Alphabet', type: 'AI', duration: '15 min', free: true },
        { id: 2, title: 'Finger Spelling Basics', type: 'AI', duration: '20 min', free: true },
        { id: 3, title: 'Your Name in Signs', type: 'AI', duration: '10 min', free: true },
        { id: 4, title: 'Personal Tutor Session', type: 'Tutor', duration: '60 min', free: false },
      ]
    },
    intermediate: {
      title: 'Intermediate Level',
      lessons: [
        { id: 1, title: 'Occupations Vocabulary', type: 'Video', duration: '25 min', free: false },
        { id: 2, title: 'Places and Transport', type: 'Video', duration: '30 min', free: false },
        { id: 3, title: 'TSVO Sentence Structure', type: 'Interactive', duration: '40 min', free: false },
        { id: 4, title: 'Facial Expressions', type: 'Video', duration: '20 min', free: false },
        { id: 5, title: 'Deaf Culture Introduction', type: 'Reading', duration: '30 min', free: false },
      ]
    },
    advanced: {
      title: 'Advanced Level',
      lessons: [
        { id: 1, title: 'Advanced Sign Reading', type: 'Video', duration: '45 min', free: false },
        { id: 2, title: 'Video Recording Practice', type: 'Interactive', duration: '60 min', free: false },
        { id: 3, title: 'Complex Conversations', type: 'Practice', duration: '90 min', free: false },
        { id: 4, title: 'Fluency Assessment', type: 'Test', duration: '30 min', free: false },
      ]
    }
  };

  const currentLevel = levelContent[level];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to Dashboard
            </button>
            <h1 className="text-2xl font-bold text-gray-900">{currentLevel.title}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Course Content</h2>
          <div className="space-y-4">
            {currentLevel.lessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Play className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                    <p className="text-sm text-gray-600">{lesson.type} • {lesson.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {lesson.free ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Free</span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">Premium</span>
                  )}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    {lesson.free ? 'Start' : 'Unlock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {level !== 'beginner' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">Payment Required</h3>
            <p className="text-yellow-700 mb-4">
              This level requires payment to access. Send payment to M-Pesa: 0729641116
            </p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-medium">
              Verify Payment
            </button>
          </div>
        )}
      </main>
    </div>
  );
};