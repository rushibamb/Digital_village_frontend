import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  houseNumber: string;
  wardNumber: string;
  role: 'villager' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
  register: (userData: Omit<User, 'id' | 'role'>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const register = (userData: Omit<User, 'id' | 'role'>) => {
    const newUser: User = {
      ...userData,
      id: Math.random().toString(36).substr(2, 9),
      role: 'villager'
    };
    setUser(newUser);
  };

  const value = {
    user,
    isLoggedIn: !!user,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}