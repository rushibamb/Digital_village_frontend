import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageProvider';
import { useAuth } from './AuthContext';
import { toast } from 'sonner@2.0.3';
import { 
  Users, 
  UserPlus, 
  UserCheck,
  Phone, 
  Upload,
  ArrowLeft,
  CheckCircle,
  Clock,
  AlertCircle,
  Shield,
  Edit3,
  Sparkles,
  Star,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';

interface VillagerProfile {
  id: string;
  fullName: string;
  address: string;
  mobile: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  aadharNumber: string;
  idProofPhoto?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export function ManageVillagerPage() {
  const { t } = useLanguage();
  const { isLoggedIn, user } = useAuth();
  const [currentView, setCurrentView] = useState<'dashboard' | 'add' | 'edit' | 'otp'>('dashboard');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [mobileForEdit, setMobileForEdit] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<VillagerProfile | null>(null);
  const [profilesForMobile, setProfilesForMobile] = useState<VillagerProfile[]>([]);
  
  // Add villager form state
  const [addForm, setAddForm] = useState({
    fullName: '',
    address: '',
    mobile: '',
    gender: '',
    dateOfBirth: '',
    aadharNumber: '',
    idProofPhoto: null as File | null
  });

  // Edit form state
  const [editForm, setEditForm] = useState({
    fullName: '',
    address: '',
    mobile: '',
    gender: '',
    dateOfBirth: '',
    aadharNumber: '',
    idProofPhoto: null as File | null
  });

  // Mock data for villager statistics
  const villagerStats = {
    total: 1247,
    male: 634,
    female: 589,
    other: 24
  };

  // Mock data for recent submissions (admin view only)
  const recentSubmissions = [
    {
      id: 'REQ001',
      type: 'add',
      name: 'राम शर्मा',
      mobile: '+91 9876543210',
      status: 'pending',
      submittedAt: '2024-01-15T10:30:00',
      submittedBy: 'user@example.com'
    },
    {
      id: 'REQ002', 
      type: 'edit',
      name: 'सीता पटेल',
      mobile: '+91 9876543211',
      status: 'approved',
      submittedAt: '2024-01-14T15:45:00',
      submittedBy: 'user2@example.com'
    }
  ];

  const handleSendOtp = () => {
    if (!mobileForEdit) {
      toast.error(t({ 
        en: 'Please enter mobile number', 
        mr: 'कृपया मोबाइल नंबर टाका' 
      }));
      return;
    }

    // Mock profiles linked to the mobile number
    const mockProfiles = [
      {
        id: 'V001',
        fullName: 'राम शर्मा',
        address: 'वार्ड नं. 2, घर नं. 123',
        mobile: mobileForEdit,
        gender: 'male' as const,
        dateOfBirth: '1978-05-15',
        aadharNumber: '1234 5678 9012',
        status: 'approved' as const,
        createdAt: '2023-01-15T00:00:00'
      },
      {
        id: 'V002',
        fullName: 'सुनीता शर्मा',
        address: 'वार्ड नं. 2, घर नं. 123',
        mobile: mobileForEdit,
        gender: 'female' as const,
        dateOfBirth: '1982-08-20',
        aadharNumber: '2345 6789 0123',
        status: 'approved' as const,
        createdAt: '2023-02-10T00:00:00'
      }
    ];

    setProfilesForMobile(mockProfiles);
    setShowOtpInput(true);
    toast.success(t({ 
      en: 'OTP sent to your mobile number', 
      mr: 'तुमच्या मोबाइल नंबरवर OTP पाठवला आहे' 
    }));
  };

  const handleVerifyOtp = () => {
    if (otpCode === '123456') { // Mock OTP verification
      setCurrentView('edit');
      toast.success(t({ 
        en: 'Mobile number verified successfully', 
        mr: 'मोबाइल नंबर यशस्वीरित्या पडताळला' 
      }));
    } else {
      toast.error(t({ 
        en: 'Invalid OTP. Please try again.', 
        mr: 'चुकीचा OTP. कृपया पुन्हा प्रयत्न करा.' 
      }));
    }
  };

  const handleSelectProfile = (profile: VillagerProfile) => {
    setSelectedProfile(profile);
    setEditForm({
      fullName: profile.fullName,
      address: profile.address,
      mobile: profile.mobile,
      gender: profile.gender,
      dateOfBirth: profile.dateOfBirth,
      aadharNumber: profile.aadharNumber,
      idProofPhoto: null
    });
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!addForm.fullName || !addForm.mobile || !addForm.gender || !addForm.aadharNumber) {
      toast.error(t({ 
        en: 'Please fill all required fields', 
        mr: 'कृपया सर्व आवश्यक फील्ड भरा' 
      }));
      return;
    }

    toast.success(t({ 
      en: 'Application submitted successfully! Admin will review and approve.', 
      mr: 'अर्ज यशस्वीरित्या सबमिट झाला! प्रशासक तपासून मंजूर करेल.' 
    }));
    
    // Reset form
    setAddForm({
      fullName: '',
      address: '',
      mobile: '',
      gender: '',
      dateOfBirth: '',
      aadharNumber: '',
      idProofPhoto: null
    });
    setCurrentView('dashboard');
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success(t({ 
      en: 'Edit request submitted successfully! Admin will review and approve.', 
      mr: 'संपादन विनंती यशस्वीरित्या सबमिट झाली! प्रशासक तपासून मंजूर करेल.' 
    }));
    
    // Reset states
    setSelectedProfile(null);
    setCurrentView('dashboard');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, formType: 'add' | 'edit') => {
    const file = e.target.files?.[0];
    if (file) {
      if (formType === 'add') {
        setAddForm(prev => ({ ...prev, idProofPhoto: file }));
      } else {
        setEditForm(prev => ({ ...prev, idProofPhoto: file }));
      }
      toast.success(t({ 
        en: 'Photo uploaded successfully', 
        mr: 'फोटो यशस्वीरित्या अपलोड झाला' 
      }));
    }
  };

  // Dashboard View
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto max-w-6xl p-4 relative">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <div className="relative inline-block mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-villager-color to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-glow hover-float">
                <Users className="h-10 w-10 text-white animate-pulse-slow" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse-slow">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
            <h1 className="mb-2 gradient-text-villager animate-scale-in">
              {t({ en: 'Manage Villagers', mr: 'गावकरी व्यवस्थापन' })}
            </h1>
            <p className="text-gray-600 animate-slide-in-right">
              {t({ en: 'Register and manage villager information', mr: 'गावकऱ्यांची नोंदणी आणि माहिती व्यवस्थापित करा' })}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740477138822-906f6b845579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwcGVvcGxlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc1NTQ1NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Village community"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-purple/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <h2 className="mb-2 font-bold bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                    {t({ en: 'Our Village Community', mr: 'आमचा गाव समुदाय' })}
                  </h2>
                  <p className="opacity-90">
                    {t({ en: 'Together we build a stronger village', mr: 'आम्ही मिळून एक मजबूत गाव बनवतो' })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Villager Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card hover-lift hover-glow animate-scale-in border-0 shadow-xl" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <Users className="h-8 w-8 mx-auto mb-2 text-cyan-600 animate-pulse-slow" />
                  <div className="mb-1 gradient-text-villager font-bold animate-pulse">{villagerStats.total}</div>
                  <p className="text-gray-700 font-medium">{t({ en: 'Total Villagers', mr: 'एकूण गावकरी' })}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover-lift hover-glow animate-scale-in border-0 shadow-xl" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-600 animate-pulse-slow" />
                  <div className="mb-1 text-blue-600 font-bold animate-pulse">{villagerStats.male}</div>
                  <p className="text-gray-700 font-medium">{t({ en: 'Male', mr: 'पुरुष' })}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover-lift hover-glow animate-scale-in border-0 shadow-xl" style={{ animationDelay: '0.5s' }}>
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-rose-500/20 rounded-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <Star className="h-8 w-8 mx-auto mb-2 text-pink-600 animate-pulse-slow" />
                  <div className="mb-1 text-pink-600 font-bold animate-pulse">{villagerStats.female}</div>
                  <p className="text-gray-700 font-medium">{t({ en: 'Female', mr: 'महिला' })}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover-lift hover-glow animate-scale-in border-0 shadow-xl" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-violet-500/20 rounded-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <Activity className="h-8 w-8 mx-auto mb-2 text-purple-600 animate-pulse-slow" />
                  <div className="mb-1 text-purple-600 font-bold animate-pulse">{villagerStats.other}</div>
                  <p className="text-gray-700 font-medium">{t({ en: 'Other', mr: 'इतर' })}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {!isLoggedIn ? (
            <Card className="glass-card border-0 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <CardContent className="p-8 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-glow">
                    <Shield className="h-8 w-8 text-white animate-pulse-slow" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-blue-800 mb-2 font-bold">
                  {t({ en: 'Login Required', mr: 'लॉगिन आवश्यक' })}
                </h3>
                <p className="text-blue-700 mb-4">
                  {t({ 
                    en: 'Please login to add or edit villager information',
                    mr: 'गावकऱ्यांची माहिती जोडण्यासाठी किंवा संपादित करण्यासाठी कृपया लॉगिन करा'
                  })}
                </p>
                <Button className="btn-gradient hover-scale">
                  {t({ en: 'Login Now', mr: 'आता लॉगिन करा' })}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* User Actions */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card hover-lift hover-glow cursor-pointer border-0 shadow-xl animate-slide-in-left transition-all duration-500 hover:shadow-2xl group" 
                      style={{ animationDelay: '0.8s' }}
                      onClick={() => setCurrentView('add')}>
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-villager-color/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-villager-color to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-float group-hover:animate-glow">
                        <UserPlus className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-villager mb-2 font-bold">
                        {t({ en: 'Add New Villager', mr: 'नवीन गावकरी जोडा' })}
                      </h3>
                      <p className="text-gray-600">
                        {t({ en: 'Register a new villager with complete details', mr: 'संपूर्ण तपशीलांसह नवीन गावकरी नोंदवा' })}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card hover-lift hover-glow cursor-pointer border-0 shadow-xl animate-slide-in-right transition-all duration-500 hover:shadow-2xl group"
                      style={{ animationDelay: '0.9s' }}
                      onClick={() => setCurrentView('otp')}>
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-float group-hover:animate-glow" style={{ animationDelay: '1s' }}>
                        <Edit3 className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-orange-600 mb-2 font-bold">
                        {t({ en: 'Edit Villager Info', mr: 'गावकरी माहिती संपादित करा' })}
                      </h3>
                      <p className="text-gray-600">
                        {t({ en: 'Update existing villager information', mr: 'विद्यमान गावकरी माहिती अद्ययावत करा' })}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Admin Only: Recent Submissions */}
              {user?.role === 'admin' && (
                <Card className="glass-card border-0 shadow-xl animate-fade-in-up" style={{ animationDelay: '1s' }}>
                  <CardHeader>
                    <CardTitle className="text-villager flex items-center gap-2">
                      <Zap className="h-5 w-5 animate-pulse-slow" />
                      {t({ en: 'Recent Submissions', mr: 'अलीकडील सबमिशन' })}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentSubmissions.map((submission, index) => (
                        <div key={submission.id} 
                             className="flex items-center justify-between p-4 glass-effect rounded-xl hover-lift animate-slide-in-right"
                             style={{ animationDelay: `${1.1 + index * 0.1}s` }}>
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                              submission.type === 'add' ? 'bg-gradient-to-br from-villager-color to-cyan-600' : 'bg-gradient-to-br from-orange-500 to-red-600'
                            } animate-pulse-slow`}>
                              {submission.type === 'add' ? (
                                <UserPlus className="h-5 w-5 text-white" />
                              ) : (
                                <Edit3 className="h-5 w-5 text-white" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{submission.name}</p>
                              <p className="text-gray-600 text-sm">{submission.mobile}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={`shadow-md ${
                              submission.status === 'pending' ? 'bg-gradient-to-r from-yellow-500 to-amber-600' :
                              submission.status === 'approved' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-rose-600'
                            } text-white border-0 animate-pulse-slow`}>
                              {submission.status === 'pending' && <Clock className="h-3 w-3 mr-1" />}
                              {submission.status === 'approved' && <CheckCircle className="h-3 w-3 mr-1" />}
                              {submission.status === 'rejected' && <AlertCircle className="h-3 w-3 mr-1" />}
                              {t({ 
                                en: submission.status,
                                mr: submission.status === 'pending' ? 'प्रलंबित' : 
                                    submission.status === 'approved' ? 'मंजूर' : 'नाकारले' 
                              })}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  // Add Villager Form View
  if (currentView === 'add') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-villager-color/20 to-cyan-600/20 rounded-full animate-float"></div>
        
        <div className="container mx-auto max-w-4xl p-4 relative">
          <Card className="glass-card border-0 shadow-2xl animate-scale-in">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="hover-scale glass-effect">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <CardTitle className="text-villager flex items-center gap-2">
                    <UserPlus className="h-5 w-5 animate-pulse-slow" />
                    {t({ en: 'Add New Villager', mr: 'नवीन गावकरी जोडा' })}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">
                    {t({ en: 'Fill all required information for villager registration', mr: 'गावकरी नोंदणीसाठी सर्व आवश्यक माहिती भरा' })}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    <Label htmlFor="fullName" className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-villager" />
                      {t({ en: 'Full Name *', mr: 'पूर्ण नाव *' })}
                    </Label>
                    <Input
                      id="fullName"
                      value={addForm.fullName}
                      onChange={(e) => setAddForm(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder={t({ en: 'Enter full name', mr: 'पूर्ण नाव टाका' })}
                      className="glass-effect border-villager/20 focus:border-villager hover-glow transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                    <Label htmlFor="mobile" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-villager" />
                      {t({ en: 'Mobile Number *', mr: 'मोबाइल नंबर *' })}
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={addForm.mobile}
                      onChange={(e) => setAddForm(prev => ({ ...prev, mobile: e.target.value }))}
                      placeholder={t({ en: '+91 9876543210', mr: '+91 9876543210' })}
                      className="glass-effect border-villager/20 focus:border-villager hover-glow transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                    <Label htmlFor="gender" className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-villager" />
                      {t({ en: 'Gender *', mr: 'लिंग *' })}
                    </Label>
                    <Select value={addForm.gender} onValueChange={(value) => setAddForm(prev => ({ ...prev, gender: value }))}>
                      <SelectTrigger className="glass-effect border-villager/20 focus:border-villager hover-glow transition-all duration-300">
                        <SelectValue placeholder={t({ en: 'Select gender', mr: 'लिंग निवडा' })} />
                      </SelectTrigger>
                      <SelectContent className="glass-effect">
                        <SelectItem value="male">{t({ en: 'Male', mr: 'पुरुष' })}</SelectItem>
                        <SelectItem value="female">{t({ en: 'Female', mr: 'महिला' })}</SelectItem>
                        <SelectItem value="other">{t({ en: 'Other', mr: 'इतर' })}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                    <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-villager" />
                      {t({ en: 'Date of Birth', mr: 'जन्मतारीख' })}
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={addForm.dateOfBirth}
                      onChange={(e) => setAddForm(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                      className="glass-effect border-villager/20 focus:border-villager hover-glow transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                    <Label htmlFor="aadharNumber" className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-villager" />
                      {t({ en: 'Aadhar Number *', mr: 'आधार नंबर *' })}
                    </Label>
                    <Input
                      id="aadharNumber"
                      value={addForm.aadharNumber}
                      onChange={(e) => setAddForm(prev => ({ ...prev, aadharNumber: e.target.value }))}
                      placeholder={t({ en: '1234 5678 9012', mr: '1234 5678 9012' })}
                      className="glass-effect border-villager/20 focus:border-villager hover-glow transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                    <Label htmlFor="idProof" className="flex items-center gap-2">
                      <Upload className="h-4 w-4 text-villager" />
                      {t({ en: 'ID Proof Photo', mr: 'ओळखपत्र फोटो' })}
                    </Label>
                    <div className="flex items-center gap-3">
                      <Input
                        id="idProof"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'add')}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('idProof')?.click()}
                        className="glass-effect border-villager/20 hover:bg-villager hover:text-white transition-all duration-300 hover-scale"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {t({ en: 'Upload Photo', mr: 'फोटो अपलोड करा' })}
                      </Button>
                      {addForm.idProofPhoto && (
                        <span className="text-green-600 font-medium animate-fade-in-up">✓ {addForm.idProofPhoto.name}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-villager" />
                    {t({ en: 'Address', mr: 'पत्ता' })}
                  </Label>
                  <Textarea
                    id="address"
                    value={addForm.address}
                    onChange={(e) => setAddForm(prev => ({ ...prev, address: e.target.value }))}
                    placeholder={t({ en: 'Enter complete address', mr: 'संपूर्ण पत्ता टाका' })}
                    rows={3}
                    className="glass-effect border-villager/20 focus:border-villager hover-glow transition-all duration-300"
                  />
                </div>

                <div className="flex gap-4 animate-scale-in" style={{ animationDelay: '0.8s' }}>
                  <Button type="submit" className="bg-gradient-to-r from-villager-color to-cyan-600 text-white border-0 hover-scale hover:shadow-xl transition-all duration-300">
                    <UserCheck className="h-4 w-4 mr-2" />
                    {t({ en: 'Submit Application', mr: 'अर्ज सबमिट करा' })}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setCurrentView('dashboard')} className="glass-effect hover-scale">
                    {t({ en: 'Cancel', mr: 'रद्द करा' })}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // OTP Verification View
  if (currentView === 'otp') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full animate-float"></div>
        
        <div className="container mx-auto max-w-2xl p-4 relative">
          <Card className="glass-card border-0 shadow-2xl animate-scale-in">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => setCurrentView('dashboard')} className="hover-scale glass-effect">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <CardTitle className="text-orange-600 flex items-center gap-2">
                    <Phone className="h-5 w-5 animate-pulse-slow" />
                    {t({ en: 'Verify Mobile Number', mr: 'मोबाइल नंबर पडताळा' })}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">
                    {t({ en: 'Enter mobile number to find and edit villager profiles', mr: 'गावकरी प्रोफाइल शोधण्यासाठी आणि संपादित करण्यासाठी मोबाइल नंबर टाका' })}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Label htmlFor="mobileEdit" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  {t({ en: 'Mobile Number', mr: 'मोबाइल नंबर' })}
                </Label>
                <Input
                  id="mobileEdit"
                  type="tel"
                  value={mobileForEdit}
                  onChange={(e) => setMobileForEdit(e.target.value)}
                  placeholder={t({ en: '+91 9876543210', mr: '+91 9876543210' })}
                  disabled={showOtpInput}
                  className="glass-effect border-orange-300/50 focus:border-orange-500 hover-glow transition-all duration-300"
                />
              </div>

              {!showOtpInput ? (
                <Button onClick={handleSendOtp} className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 hover-scale hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <Phone className="h-4 w-4 mr-2" />
                  {t({ en: 'Send OTP', mr: 'OTP पाठवा' })}
                </Button>
              ) : (
                <>
                  <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                    <Label htmlFor="otp" className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {t({ en: 'Enter OTP', mr: 'OTP टाका' })}
                    </Label>
                    <Input
                      id="otp"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder={t({ en: 'Enter 6-digit OTP', mr: '6-अंकी OTP टाका' })}
                      maxLength={6}
                      className="glass-effect border-green-300/50 focus:border-green-500 hover-glow transition-all duration-300 text-center text-lg tracking-wider"
                    />
                    <p className="text-sm text-gray-600 glass-effect px-3 py-2 rounded-lg">
                      {t({ en: 'Demo OTP: 123456', mr: 'डेमो OTP: 123456' })}
                    </p>
                  </div>

                  <Button onClick={handleVerifyOtp} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 hover-scale hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {t({ en: 'Verify OTP', mr: 'OTP पडताळा' })}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Edit Villager View
  if (currentView === 'edit') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto max-w-4xl p-4 relative">
          {!selectedProfile ? (
            <Card className="glass-card border-0 shadow-2xl animate-scale-in">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" onClick={() => setCurrentView('otp')} className="hover-scale glass-effect">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <div>
                    <CardTitle className="text-orange-600 flex items-center gap-2">
                      <Edit3 className="h-5 w-5 animate-pulse-slow" />
                      {t({ en: 'Select Profile to Edit', mr: 'संपादित करण्यासाठी प्रोफाइल निवडा' })}
                    </CardTitle>
                    <p className="text-gray-600 mt-1">
                      {t({ en: `Found ${profilesForMobile.length} profiles for ${mobileForEdit}`, mr: `${mobileForEdit} साठी ${profilesForMobile.length} प्रोफाइल सापडले` })}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profilesForMobile.map((profile, index) => (
                    <Card key={profile.id} 
                          className="glass-card border-0 hover-lift hover-glow cursor-pointer transition-all duration-500 hover:shadow-2xl group animate-slide-in-right"
                          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                          onClick={() => handleSelectProfile(profile)}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center animate-float group-hover:animate-glow">
                              <Users className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold gradient-text">{profile.fullName}</h3>
                              <p className="text-gray-600">{profile.address}</p>
                              <p className="text-sm text-gray-500">
                                {t({ en: `Gender: ${profile.gender}`, mr: `लिंग: ${profile.gender === 'male' ? 'पुरुष' : profile.gender === 'female' ? 'महिला' : 'इतर'}` })} • 
                                {t({ en: ` DOB: ${profile.dateOfBirth}`, mr: ` जन्मतारीख: ${profile.dateOfBirth}` })}
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 animate-pulse-slow shadow-lg">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {t({ en: 'Active', mr: 'सक्रिय' })}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-card border-0 shadow-2xl animate-scale-in">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" onClick={() => setSelectedProfile(null)} className="hover-scale glass-effect">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <div>
                    <CardTitle className="text-orange-600 flex items-center gap-2">
                      <Edit3 className="h-5 w-5 animate-pulse-slow" />
                      {t({ en: 'Edit Villager Information', mr: 'गावकरी माहिती संपादित करा' })}
                    </CardTitle>
                    <p className="text-gray-600 mt-1">
                      {t({ en: `Editing profile: ${selectedProfile.fullName}`, mr: `प्रोफाइल संपादित करत आहे: ${selectedProfile.fullName}` })}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEditSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                      <Label htmlFor="editFullName" className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-orange-600" />
                        {t({ en: 'Full Name *', mr: 'पूर्ण नाव *' })}
                      </Label>
                      <Input
                        id="editFullName"
                        value={editForm.fullName}
                        onChange={(e) => setEditForm(prev => ({ ...prev, fullName: e.target.value }))}
                        className="glass-effect border-orange-300/50 focus:border-orange-500 hover-glow transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                      <Label htmlFor="editMobile" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-orange-600" />
                        {t({ en: 'Mobile Number *', mr: 'मोबाइल नंबर *' })}
                      </Label>
                      <Input
                        id="editMobile"
                        type="tel"
                        value={editForm.mobile}
                        onChange={(e) => setEditForm(prev => ({ ...prev, mobile: e.target.value }))}
                        className="glass-effect border-orange-300/50 focus:border-orange-500 hover-glow transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                      <Label htmlFor="editGender" className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-orange-600" />
                        {t({ en: 'Gender *', mr: 'लिंग *' })}
                      </Label>
                      <Select value={editForm.gender} onValueChange={(value) => setEditForm(prev => ({ ...prev, gender: value }))}>
                        <SelectTrigger className="glass-effect border-orange-300/50 focus:border-orange-500 hover-glow transition-all duration-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="glass-effect">
                          <SelectItem value="male">{t({ en: 'Male', mr: 'पुरुष' })}</SelectItem>
                          <SelectItem value="female">{t({ en: 'Female', mr: 'महिला' })}</SelectItem>
                          <SelectItem value="other">{t({ en: 'Other', mr: 'इतर' })}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                      <Label htmlFor="editDateOfBirth" className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-orange-600" />
                        {t({ en: 'Date of Birth', mr: 'जन्मतारीख' })}
                      </Label>
                      <Input
                        id="editDateOfBirth"
                        type="date"
                        value={editForm.dateOfBirth}
                        onChange={(e) => setEditForm(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                        className="glass-effect border-orange-300/50 focus:border-orange-500 hover-glow transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                      <Label htmlFor="editAadharNumber" className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-orange-600" />
                        {t({ en: 'Aadhar Number *', mr: 'आधार नंबर *' })}
                      </Label>
                      <Input
                        id="editAadharNumber"
                        value={editForm.aadharNumber}
                        onChange={(e) => setEditForm(prev => ({ ...prev, aadharNumber: e.target.value }))}
                        className="glass-effect border-orange-300/50 focus:border-orange-500 hover-glow transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                      <Label htmlFor="editIdProof" className="flex items-center gap-2">
                        <Upload className="h-4 w-4 text-orange-600" />
                        {t({ en: 'ID Proof Photo', mr: 'ओळखपत्र फोटो' })}
                      </Label>
                      <div className="flex items-center gap-3">
                        <Input
                          id="editIdProof"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, 'edit')}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('editIdProof')?.click()}
                          className="glass-effect border-orange-300/50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white transition-all duration-300 hover-scale"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {t({ en: 'Upload New Photo', mr: 'नवीन फोटो अपलोड करा' })}
                        </Button>
                        {editForm.idProofPhoto && (
                          <span className="text-green-600 font-medium animate-fade-in-up">✓ {editForm.idProofPhoto.name}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <Label htmlFor="editAddress" className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-orange-600" />
                      {t({ en: 'Address', mr: 'पत्ता' })}
                    </Label>
                    <Textarea
                      id="editAddress"
                      value={editForm.address}
                      onChange={(e) => setEditForm(prev => ({ ...prev, address: e.target.value }))}
                      rows={3}
                      className="glass-effect border-orange-300/50 focus:border-orange-500 hover-glow transition-all duration-300"
                    />
                  </div>

                  <div className="flex gap-4 animate-scale-in" style={{ animationDelay: '0.8s' }}>
                    <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-0 hover-scale hover:shadow-xl transition-all duration-300">
                      <Edit3 className="h-4 w-4 mr-2" />
                      {t({ en: 'Submit Edit Request', mr: 'संपादन विनंती सबमिट करा' })}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setCurrentView('dashboard')} className="glass-effect hover-scale">
                      {t({ en: 'Cancel', mr: 'रद्द करा' })}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }
}