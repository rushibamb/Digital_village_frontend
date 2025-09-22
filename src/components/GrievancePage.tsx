import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from './LanguageProvider';
import { FileText, Plus, MessageCircle, Clock, CheckCircle, AlertTriangle, Camera } from 'lucide-react';

export function GrievancePage() {
  const { t } = useLanguage();
  const [showNewGrievanceForm, setShowNewGrievanceForm] = useState(false);

  const grievances = [
    {
      id: 'GRV001',
      title: { en: 'Street Light Not Working', mr: 'रस्ता दिवा काम करत नाही' },
      category: { en: 'Infrastructure', mr: 'पायाभूत सुविधा' },
      description: { en: 'The street light near temple is not working since 3 days', mr: 'मंदिराजवळील रस्ता दिवा ३ दिवसांपासून काम करत नाही' },
      status: 'in-progress',
      date: '10 Jan 2024',
      response: { en: 'We have forwarded your complaint to electricity department', mr: 'आम्ही तुमची तक्रार वीज विभागाकडे पाठवली आहे' }
    },
    {
      id: 'GRV002',
      title: { en: 'Water Supply Issue', mr: 'पाणीपुरवठ्याची समस्या' },
      category: { en: 'Water', mr: 'पाणी' },
      description: { en: 'Irregular water supply in ward 3', mr: 'वार्ड ३ मध्ये अनियमित पाणीपुरवठा' },
      status: 'resolved',
      date: '5 Jan 2024',
      response: { en: 'Issue has been resolved. New water connection installed', mr: 'समस्येचे निराकरण झाले आहे. नवीन पाणी कनेक्शन बसवले आहे' }
    },
    {
      id: 'GRV003',
      title: { en: 'Road Repair Needed', mr: 'रस्ता दुरुस्तीची गरज' },
      category: { en: 'Roads', mr: 'रस्ते' },
      description: { en: 'Main road has potholes causing inconvenience', mr: 'मुख्य रस्त्यावर खड्डे असल्यामुळे अडचण होत आहे' },
      status: 'pending',
      date: '8 Jan 2024',
      response: null
    }
  ];

  const categories = [
    { en: 'Infrastructure', mr: 'पायाभूत सुविधा' },
    { en: 'Water', mr: 'पाणी' },
    { en: 'Roads', mr: 'रस्ते' },
    { en: 'Electricity', mr: 'वीज' },
    { en: 'Health', mr: 'आरोग्य' },
    { en: 'Education', mr: 'शिक्षण' },
    { en: 'Other', mr: 'इतर' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500 text-white';
      case 'in-progress': return 'bg-blue-500 text-white';
      case 'resolved': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'in-progress': return <MessageCircle className="h-4 w-4" />;
      case 'resolved': return <CheckCircle className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-grievance rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t({ en: 'Grievance Redressal', mr: 'तक्रार निवारण' })}
          </h1>
          <p className="text-gray-600 text-lg">
            {t({ en: 'Submit complaints and track their resolution', mr: 'तक्रारी सबमिट करा आणि त्यांच्या निराकरणाचा मागोवा घ्या' })}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* New Grievance Button */}
            <Card className="mb-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t({ en: 'Have a Complaint?', mr: 'तक्रार आहे?' })}
                    </h3>
                    <p className="opacity-90">
                      {t({ en: 'Submit your grievance and we will address it promptly', mr: 'आपली तक्रार सबमिट करा आणि आम्ही तिचे तातडीने निराकरण करू' })}
                    </p>
                  </div>
                  <Button 
                    onClick={() => setShowNewGrievanceForm(!showNewGrievanceForm)}
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    {t({ en: 'New Grievance', mr: 'नवीन तक्रार' })}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* New Grievance Form */}
            {showNewGrievanceForm && (
              <Card className="mb-6 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-grievance">
                    {t({ en: 'Submit New Grievance', mr: 'नवीन तक्रार सबमिट करा' })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t({ en: 'Category', mr: 'श्रेणी' })} *
                        </label>
                        <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-grievance">
                          <option value="">{t({ en: 'Select Category', mr: 'श्रेणी निवडा' })}</option>
                          {categories.map((cat, index) => (
                            <option key={index} value={cat.en}>{t(cat)}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t({ en: 'Priority', mr: 'प्राधान्यता' })}
                        </label>
                        <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-grievance">
                          <option value="normal">{t({ en: 'Normal', mr: 'सामान्य' })}</option>
                          <option value="high">{t({ en: 'High', mr: 'उच्च' })}</option>
                          <option value="urgent">{t({ en: 'Urgent', mr: 'तातडीची' })}</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t({ en: 'Title', mr: 'शीर्षक' })} *
                      </label>
                      <input
                        type="text"
                        placeholder={t({ en: 'Brief title of your complaint', mr: 'तुमच्या तक्रारीचे संक्षिप्त शीर्षक' })}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-grievance"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t({ en: 'Description', mr: 'तपशील' })} *
                      </label>
                      <textarea
                        rows={4}
                        placeholder={t({ en: 'Describe your complaint in detail', mr: 'तुमच्या तक्रारीचे तपशीलवार वर्णन करा' })}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-grievance resize-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t({ en: 'Attach Photos (Optional)', mr: 'फोटो जोडा (पर्यायी)' })}
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                        <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">
                          {t({ en: 'Click to upload photos', mr: 'फोटो अपलोड करण्यासाठी क्लिक करा' })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="bg-grievance hover:bg-grievance/90 text-grievance-foreground">
                        {t({ en: 'Submit Grievance', mr: 'तक्रार सबमिट करा' })}
                      </Button>
                      <Button variant="outline" onClick={() => setShowNewGrievanceForm(false)}>
                        {t({ en: 'Cancel', mr: 'रद्द करा' })}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Grievances List */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {t({ en: 'Your Grievances', mr: 'तुमच्या तक्रारी' })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {grievances.map((grievance) => (
                    <div key={grievance.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-lg">{t(grievance.title)}</h3>
                            <Badge className={getStatusColor(grievance.status)}>
                              {getStatusIcon(grievance.status)}
                              <span className="ml-1 capitalize">{grievance.status}</span>
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span>ID: {grievance.id}</span>
                            <span>{grievance.date}</span>
                            <Badge variant="secondary">{t(grievance.category)}</Badge>
                          </div>
                          <p className="text-gray-700 mb-3">{t(grievance.description)}</p>
                          
                          {grievance.response && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <h4 className="font-medium text-blue-800 mb-1">
                                {t({ en: 'Response:', mr: 'प्रतिसाद:' })}
                              </h4>
                              <p className="text-blue-700">{t(grievance.response)}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {t({ en: 'Grievance Stats', mr: 'तक्रार आकडेवारी' })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      {t({ en: 'Pending', mr: 'प्रलंबित' })}
                    </span>
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      {t({ en: 'In Progress', mr: 'सुरू आहे' })}
                    </span>
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      {t({ en: 'Resolved', mr: 'निराकरण झाले' })}
                    </span>
                    <span className="font-bold">1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {t({ en: 'Common Categories', mr: 'सामान्य श्रेणी' })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(0, 5).map((category, index) => (
                    <div key={index} className="p-2 bg-purple-50 rounded-lg text-center hover:bg-purple-100 cursor-pointer">
                      <span className="text-purple-700">{t(category)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4 text-center">
                <h4 className="font-bold mb-2 text-purple-800">
                  {t({ en: 'Need Help?', mr: 'मदत हवी?' })}
                </h4>
                <p className="text-purple-700 text-sm mb-3">
                  {t({ 
                    en: 'Contact our grievance officer',
                    mr: 'आमच्या तक्रार अधिकार्‍याशी संपर्क साधा'
                  })}
                </p>
                <Button variant="outline" size="sm" className="border-purple-300 text-purple-700">
                  📞 +91 20 1234 5679
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}