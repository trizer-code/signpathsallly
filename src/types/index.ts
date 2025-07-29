export interface User {
  id: string;
  email: string;
  role: 'student' | 'tutor' | 'admin';
  name: string;
  createdAt: string;
  profile?: StudentProfile | TutorProfile;
}

export interface StudentProfile {
  level: 'beginner' | 'intermediate' | 'advanced';
  progress: {
    completed_lessons: string[];
    test_scores: TestScore[];
  };
  subscription_status: 'free' | 'paid';
}

export interface TutorProfile {
  approved: boolean;
  education_video_url?: string;
  id_document_url?: string;
  bio: string;
  hourly_rate: number;
  specializations: string[];
  earnings: number;
}

export interface TestScore {
  level: string;
  score: number;
  total: number;
  completed_at: string;
}

export interface LessonContent {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  type: 'ai' | 'tutor' | 'video' | 'document';
  content_url?: string;
  description: string;
  is_free: boolean;
}