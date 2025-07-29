# SignPath by Sally - Sign Language Learning Platform

A comprehensive sign language learning platform built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multi-role System**: Students, Tutors, and Admin dashboards
- **Three Learning Levels**: Beginner (free/paid), Intermediate (paid), Advanced (premium)
- **AI-Powered Learning**: Free AI lessons for beginners
- **Tutor Marketplace**: Connect with certified sign language tutors
- **Content Management**: Upload PDFs, Word docs, and YouTube videos
- **Payment Integration**: M-Pesa integration for course payments
- **Progress Tracking**: Tests and progress monitoring for students

## 🚀 Live Demo

Visit the live application: [https://magical-pudding-4dff22.netlify.app](https://magical-pudding-4dff22.netlify.app)

### Demo Accounts
- **Admin**: admin@signpath.com / admin123
- **Student/Tutor**: Any email / any password (8+ characters)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/signpath-learning-platform.git
cd signpath-learning-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── admin/           # Admin dashboard components
│   ├── student/         # Student dashboard components
│   ├── tutor/           # Tutor dashboard components
│   ├── LandingPage.tsx  # Homepage with auth forms
│   └── RoleSelection.tsx # User role selection
├── contexts/
│   └── AuthContext.tsx  # Authentication context
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## 🎯 User Roles & Features

### 👨‍🎓 Students
- **Beginner Level**: Free AI lessons + paid tutor sessions
- **Intermediate Level**: Paid content (100 KES via M-Pesa)
- **Advanced Level**: Premium sign reading and video practice
- Progress tracking and testing system

### 👨‍🏫 Tutors
- Profile setup with ID verification
- Education video submission
- Custom content creation (PDFs, syllabi)
- Student interaction and earnings tracking (70% payout)

### 🔐 Admin
- User management (students and tutors)
- Content management (upload PDFs, Word docs, YouTube videos)
- Tutor approval workflow
- Payment tracking and tutor payouts
- System monitoring and analytics

## 💳 Payment Integration

- **M-Pesa Number**: 0729641116
- **Intermediate Course**: 100 KES
- **Tutor Sessions**: Variable rates set by tutors
- **Tutor Earnings**: 70% of student payments

## 🚀 Deployment

The application is deployed on Netlify. To deploy your own version:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service.

## 🔮 Future Enhancements

- [ ] Supabase integration for persistent data
- [ ] Real-time video calling for tutor sessions
- [ ] Mobile app development
- [ ] Advanced AI features for sign recognition
- [ ] Automated payment processing
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please contact Sally at the M-Pesa number: 0729641116