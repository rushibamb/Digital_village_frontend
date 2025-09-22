import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useLanguage } from './LanguageProvider';
import { useAuth } from './AuthContext';
import { LogIn, User, Lock, Phone, Home } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const { t } = useLanguage();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    houseNumber: '',
    wardNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Mock login - in real app, this would validate against backend
      if (formData.email && formData.password) {
        login({
          id: '1',
          name: 'राम शर्मा / Ram Sharma',
          email: formData.email,
          phone: '+91 9876543210',
          houseNumber: '123',
          wardNumber: '2',
          role: 'villager'
        });
        toast.success(t({ en: 'Login successful!', mr: 'लॉगिन यशस्वी!' }));
        onNavigate('home');
      } else {
        toast.error(t({ en: 'Please fill all fields', mr: 'कृपया सर्व फील्ड भरा' }));
      }
    } else {
      // Mock registration
      if (formData.name && formData.email && formData.phone && formData.houseNumber && formData.wardNumber) {
        login({
          id: Math.random().toString(36).substr(2, 9),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          houseNumber: formData.houseNumber,
          wardNumber: formData.wardNumber,
          role: 'villager'
        });
        toast.success(t({ en: 'Registration successful!', mr: 'नोंदणी यशस्वी!' }));
        onNavigate('home');
      } else {
        toast.error(t({ en: 'Please fill all fields', mr: 'कृपया सर्व फील्ड भरा' }));
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl">
            {isLogin 
              ? t({ en: 'Welcome Back', mr: 'परत स्वागत आहे' })
              : t({ en: 'Create Account', mr: 'खाते तयार करा' })
            }
          </CardTitle>
          <p className="text-gray-600">
            {isLogin 
              ? t({ en: 'Sign in to access your village services', mr: 'आपल्या गावातील सेवांमध्ये प्रवेश करण्यासाठी साइन इन करा' })
              : t({ en: 'Register to access village services', mr: 'गावातील सेवांमध्ये प्रवेश करण्यासाठी नोंदणी करा' })
            }
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t({ en: 'Full Name', mr: 'पूर्ण नाव' })} *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={t({ en: 'Enter your full name', mr: 'आपले पूर्ण नाव टाका' })}
                  className="mt-1"
                />
              </div>
            )}
            
            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                {t({ en: 'Email / Mobile', mr: 'ईमेल / मोबाइल' })} *
              </Label>
              <Input
                id="email"
                type="text"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={t({ en: 'Enter email or mobile number', mr: 'ईमेल किंवा मोबाइल नंबर टाका' })}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                {t({ en: 'Password', mr: 'पासवर्ड' })} *
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder={t({ en: 'Enter password', mr: 'पासवर्ड टाका' })}
                className="mt-1"
              />
            </div>
            
            {!isLogin && (
              <>
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {t({ en: 'Mobile Number', mr: 'मोबाइल नंबर' })} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder={t({ en: 'Enter mobile number', mr: 'मोबाइल नंबर टाका' })}
                    className="mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="houseNumber" className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      {t({ en: 'House No.', mr: 'घर क्र.' })} *
                    </Label>
                    <Input
                      id="houseNumber"
                      type="text"
                      value={formData.houseNumber}
                      onChange={(e) => handleInputChange('houseNumber', e.target.value)}
                      placeholder={t({ en: 'House No.', mr: 'घर क्र.' })}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="wardNumber" className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      {t({ en: 'Ward No.', mr: 'वार्ड क्र.' })} *
                    </Label>
                    <Input
                      id="wardNumber"
                      type="text"
                      value={formData.wardNumber}
                      onChange={(e) => handleInputChange('wardNumber', e.target.value)}
                      placeholder={t({ en: 'Ward No.', mr: 'वार्ड क्र.' })}
                      className="mt-1"
                    />
                  </div>
                </div>
              </>
            )}
            
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              {isLogin 
                ? t({ en: 'Sign In', mr: 'साइन इन करा' })
                : t({ en: 'Create Account', mr: 'खाते तयार करा' })
              }
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin 
                ? t({ en: "Don't have an account?", mr: 'खाते नाही?' })
                : t({ en: 'Already have an account?', mr: 'आधीच खाते आहे?' })
              }
            </p>
            <Button 
              variant="link" 
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary"
            >
              {isLogin 
                ? t({ en: 'Create Account', mr: 'खाते तयार करा' })
                : t({ en: 'Sign In', mr: 'साइन इन करा' })
              }
            </Button>
          </div>
          
          <div className="mt-4 text-center">
            <Button 
              variant="outline" 
              onClick={() => onNavigate('home')}
              className="text-gray-600"
            >
              {t({ en: 'Continue as Guest', mr: 'अतिथी म्हणून सुरू ठेवा' })}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}