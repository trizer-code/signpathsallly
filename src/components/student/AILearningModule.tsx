import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Play, Pause, CheckCircle, X } from 'lucide-react';

interface AILearningModuleProps {
  onBack: () => void;
}

export const AILearningModule: React.FC<AILearningModuleProps> = ({ onBack }) => {
  const [currentLesson, setCurrentLesson] = useState<'alphabet' | 'fingerspelling' | 'words' | 'name'>('alphabet');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [completedSigns, setCompletedSigns] = useState<Set<string>>(new Set());

  // AI-generated sign language data (in a real app, this would come from an AI service)
  const lessons = {
    alphabet: {
      title: 'Sign Language Alphabet',
      description: 'Learn the ASL alphabet with AI-generated visual guides',
      signs: [
        { letter: 'A', image: 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Make a fist with thumb on the side' },
        { letter: 'B', image: 'https://images.pexels.com/photos/8613321/pexels-photo-8613321.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Four fingers up, thumb across palm' },
        { letter: 'C', image: 'https://images.pexels.com/photos/8613322/pexels-photo-8613322.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Curved hand like holding a cup' },
        { letter: 'D', image: 'https://images.pexels.com/photos/8613323/pexels-photo-8613323.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Index finger up, other fingers touch thumb' },
        { letter: 'E', image: 'https://images.pexels.com/photos/8613324/pexels-photo-8613324.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Fingers curled down, thumb on top' },
        { letter: 'F', image: 'https://images.pexels.com/photos/8613325/pexels-photo-8613325.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Index and thumb touch, other fingers up' },
        { letter: 'G', image: 'https://images.pexels.com/photos/8613326/pexels-photo-8613326.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Index finger and thumb pointing sideways' },
        { letter: 'H', image: 'https://images.pexels.com/photos/8613327/pexels-photo-8613327.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Index and middle finger sideways' },
      ]
    },
    fingerspelling: {
      title: 'Finger Spelling Practice',
      description: 'Practice spelling common words using finger spelling',
      signs: [
        { letter: 'CAT', image: 'https://images.pexels.com/photos/8613328/pexels-photo-8613328.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Spell C-A-T slowly and clearly' },
        { letter: 'DOG', image: 'https://images.pexels.com/photos/8613329/pexels-photo-8613329.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Spell D-O-G with proper hand positioning' },
        { letter: 'BOOK', image: 'https://images.pexels.com/photos/8613330/pexels-photo-8613330.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Spell B-O-O-K letter by letter' },
        { letter: 'LOVE', image: 'https://images.pexels.com/photos/8613331/pexels-photo-8613331.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Spell L-O-V-E with emotion' },
      ]
    },
    words: {
      title: '3-Letter Words',
      description: 'Learn common 3-letter words in sign language',
      signs: [
        { letter: 'YES', image: 'https://images.pexels.com/photos/8613332/pexels-photo-8613332.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Fist nodding up and down' },
        { letter: 'NO', image: 'https://images.pexels.com/photos/8613333/pexels-photo-8613333.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Index and middle finger closing like mouth' },
        { letter: 'YOU', image: 'https://images.pexels.com/photos/8613334/pexels-photo-8613334.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Point directly at the person' },
        { letter: 'ME', image: 'https://images.pexels.com/photos/8613335/pexels-photo-8613335.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Point to yourself with index finger' },
        { letter: 'GO', image: 'https://images.pexels.com/photos/8613336/pexels-photo-8613336.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Index fingers pointing forward and moving' },
        { letter: 'EAT', image: 'https://images.pexels.com/photos/8613337/pexels-photo-8613337.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Fingers to mouth like eating' },
      ]
    },
    name: {
      title: 'Sign Your Name',
      description: 'Learn to spell your name in sign language',
      signs: [
        { letter: 'Practice', image: 'https://images.pexels.com/photos/8613338/pexels-photo-8613338.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Use the alphabet to spell your name slowly' },
        { letter: 'Tips', image: 'https://images.pexels.com/photos/8613339/pexels-photo-8613339.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Keep hand at chest level, spell clearly' },
      ]
    }
  };

  const currentLessonData = lessons[currentLesson];
  const currentSign = currentLessonData.signs[currentIndex];

  const nextSign = () => {
    if (currentIndex < currentLessonData.signs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSign = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const markAsCompleted = () => {
    const newCompleted = new Set(completedSigns);
    newCompleted.add(`${currentLesson}-${currentIndex}`);
    setCompletedSigns(newCompleted);
  };

  const resetLesson = () => {
    setCurrentIndex(0);
    setCompletedSigns(new Set());
  };

  const isCompleted = completedSigns.has(`${currentLesson}-${currentIndex}`);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900 flex items-center space-x-2"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Sign Language Learning</h1>
                <p className="text-gray-600">Interactive visual learning with AI guidance</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-green-800">Free AI Lessons</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Lesson Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Lessons</h3>
              <div className="space-y-2">
                {Object.entries(lessons).map(([key, lesson]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentLesson(key as any);
                      setCurrentIndex(0);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentLesson === key
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="font-medium">{lesson.title}</div>
                    <div className="text-sm opacity-75">{lesson.signs.length} signs</div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-sm text-gray-600 mb-2">Progress</div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(completedSigns.size / Object.values(lessons).reduce((acc, lesson) => acc + lesson.signs.length, 0)) * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {completedSigns.size} of {Object.values(lessons).reduce((acc, lesson) => acc + lesson.signs.length, 0)} completed
                </div>
              </div>
            </div>
          </div>

          {/* Main Learning Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {/* Lesson Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{currentLessonData.title}</h2>
                    <p className="text-gray-600">{currentLessonData.description}</p>
                  </div>
                  <button
                    onClick={resetLesson}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-sm">Reset</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    {currentIndex + 1} of {currentLessonData.signs.length}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentIndex + 1) / currentLessonData.signs.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Sign Display */}
              <div className="text-center mb-8">
                <div className="bg-gray-100 rounded-2xl p-8 mb-6">
                  <div className="relative inline-block">
                    <img
                      src={currentSign.image}
                      alt={`Sign for ${currentSign.letter}`}
                      className="w-80 h-80 object-cover rounded-xl shadow-lg mx-auto"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=400';
                      }}
                    />
                    {isCompleted && (
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{currentSign.letter}</h3>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">{currentSign.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <button
                    onClick={prevSign}
                    disabled={currentIndex === 0}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={markAsCompleted}
                    disabled={isCompleted}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      isCompleted
                        ? 'bg-green-100 text-green-800 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isCompleted ? 'Completed!' : 'Mark as Learned'}
                  </button>

                  <button
                    onClick={nextSign}
                    disabled={currentIndex === currentLessonData.signs.length - 1}
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Practice Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-3">💡 Practice Tips</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Practice in front of a mirror to check your hand position</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Keep your hand at chest level for clear visibility</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Move slowly and deliberately when learning</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Practice daily for 10-15 minutes for best results</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <h4 className="font-bold text-gray-900 mb-4">Quick Reference</h4>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {currentLessonData.signs.map((sign, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative p-2 rounded-lg border-2 transition-colors ${
                      currentIndex === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={sign.image}
                      alt={sign.letter}
                      className="w-full h-16 object-cover rounded"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=400';
                      }}
                    />
                    <div className="text-xs font-medium mt-1 text-gray-700">{sign.letter}</div>
                    {completedSigns.has(`${currentLesson}-${index}`) && (
                      <div className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};