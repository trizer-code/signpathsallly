import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  setUserRole: (role: 'student' | 'tutor') => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('signpath_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Demo login logic - replace with actual authentication
      if (email === 'admin@signpath.com' && password === 'admin123') {
        const adminUser: User = {
          id: '1',
          email,
          role: 'admin',
          name: 'Admin User',
          createdAt: new Date().toISOString(),
        };
        setUser(adminUser);
        localStorage.setItem('signpath_user', JSON.stringify(adminUser));
        return true;
      }
      
      // Demo user login
      const demoUser: User = {
        id: '2',
        email,
        role: 'student', // Will be updated after role selection
        name: email.split('@')[0],
        createdAt: new Date().toISOString(),
      };
      setUser(demoUser);
      localStorage.setItem('signpath_user', JSON.stringify(demoUser));
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      // Demo signup logic
      const newUser: User = {
        id: Date.now().toString(),
        email,
        role: 'student', // Will be updated after role selection
        name,
        createdAt: new Date().toISOString(),
      };
      setUser(newUser);
      localStorage.setItem('signpath_user', JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('signpath_user');
  };

  const setUserRole = (role: 'student' | 'tutor') => {
    if (user) {
      const updatedUser = { ...user, role };
      setUser(updatedUser);
      localStorage.setItem('signpath_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, setUserRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
};