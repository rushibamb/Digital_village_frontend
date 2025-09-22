import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from './LanguageProvider';
import { useAuth } from './AuthContext';
import { toast } from 'sonner@2.0.3';
import { 
  CreditCard, 
  AlertCircle, 
  CheckCircle, 
  Download, 
  History, 
  Search, 
  Droplets, 
  Home as HomeIcon,
  Phone,
  Sparkles,
  Calculator,
  Receipt,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Star,
  ArrowRight,
  User,
  MapPin,
  Calendar
} from 'lucide-react';

interface TaxRecord {
  id: string;
  ownerName: string;
  houseNumber: string;
  type: 'property' | 'water';
  amount: number;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
  details: any;
}

export function TaxPaymentPage() {
  const { t } = useLanguage();
  const { isLoggedIn } = useAuth();
  const [selectedTaxType, setSelectedTaxType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<TaxRecord[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedTaxForPayment, setSelectedTaxForPayment] = useState<TaxRecord | null>(null);

  // Mock database of tax records
  const taxDatabase: TaxRecord[] = [
    {
      id: 'PTAX001',
      ownerName: 'राम शर्मा',
      houseNumber: '123',
      type: 'property',
      amount: 2500,
      dueDate: '31 Jan 2024',
      status: 'pending',
      details: {
        area: '1200 sq ft',
        assessmentYear: '2023-24',
        wardNumber: '2',
        propertyType: 'Residential'
      }
    },
    {
      id: 'WTAX001',
      ownerName: 'राम शर्मा',
      houseNumber: '123',
      type: 'water',
      amount: 850,
      dueDate: '15 Feb 2024',
      status: 'pending',
      details: {
        connectionNumber: 'WC123456',
        consumption: '15,000 liters',
        billingPeriod: 'Jan 2024',
        meterReading: '45230'
      }
    },
    {
      id: 'PTAX002',
      ownerName: 'सीता पटेल',
      houseNumber: '456',
      type: 'property',
      amount: 3200,
      dueDate: '31 Jan 2024',
      status: 'overdue',
      details: {
        area: '1500 sq ft',
        assessmentYear: '2023-24',
        wardNumber: '3',
        propertyType: 'Commercial'
      }
    },
    {
      id: 'WTAX002',
      ownerName: 'मोहन कुमार',
      houseNumber: '789',
      type: 'water',
      amount: 1200,
      dueDate: '15 Feb 2024',
      status: 'paid',
      details: {
        connectionNumber: 'WC789012',
        consumption: '22,000 liters',
        billingPeriod: 'Jan 2024',
        meterReading: '67890'
      }
    }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error(t({ 
        en: 'Please enter search criteria', 
        mr: 'कृपया शोध निकष टाका' 
      }));
      return;
    }

    const results = taxDatabase.filter(record => 
      record.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.houseNumber === searchQuery.trim()
    );

    setSearchResults(results);
    setHasSearched(true);

    if (results.length === 0) {
      toast.error(t({ 
        en: 'No tax records found for the given criteria', 
        mr: 'दिलेल्या निकषानुसार कोणतेही कर रेकॉर्ड सापडले नाहीत' 
      }));
    } else {
      toast.success(t({ 
        en: `Found ${results.length} tax record(s)`, 
        mr: `${results.length} कर रेकॉर्ड सापडले` 
      }));
    }
  };

  const handlePayNow = (taxRecord: TaxRecord) => {
    setSelectedTaxForPayment(taxRecord);
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    if (!selectedPaymentMethod) {
      toast.error(t({ 
        en: 'Please select a payment method', 
        mr: 'कृपया पेमेंट पद्धत निवडा' 
      }));
      return;
    }

    toast.success(t({ 
      en: 'Payment processed successfully!', 
      mr: 'पेमेंट यशस्वीरित्या प्रक्रिया झाली!' 
    }));

    // Update the tax record status
    if (selectedTaxForPayment) {
      const updatedResults = searchResults.map(record =>
        record.id === selectedTaxForPayment.id 
          ? { ...record, status: 'paid' as const }
          : record
      );
      setSearchResults(updatedResults);
    }

    setShowPaymentModal(false);
    setSelectedPaymentMethod('');
    setSelectedTaxForPayment(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-gradient-to-r from-yellow-500 to-amber-600';
      case 'paid': return 'bg-gradient-to-r from-green-500 to-emerald-600';
      case 'overdue': return 'bg-gradient-to-r from-red-500 to-rose-600';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock;
      case 'paid': return CheckCircle;
      case 'overdue': return AlertCircle;
      default: return Clock;
    }
  };

  const paymentMethods = [
    {
      id: 'upi',
      name: { en: 'UPI Payment', mr: 'UPI पेमेंट' },
      description: { en: 'Pay using UPI apps like PhonePe, GPay', mr: 'PhonePe, GPay सारख्या UPI अॅप्स वापरा' },
      icon: '📱',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'card',
      name: { en: 'Credit/Debit Card', mr: 'क्रेडिट/डेबिट कार्ड' },
      description: { en: 'Secure card payment', mr: 'सुरक्षित कार्ड पेमेंट' },
      icon: '💳',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'netbanking',
      name: { en: 'Net Banking', mr: 'नेट बँकिंग' },
      description: { en: 'Online banking', mr: 'ऑनलाइन बँकिंग' },
      icon: '🏦',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const taxTypes = [
    { id: 'all', label: { en: 'All Taxes', mr: 'सर्व कर' }, icon: CreditCard, gradient: 'from-tax-color to-red-600' },
    { id: 'property', label: { en: 'Property Tax', mr: 'मालमत्ता कर' }, icon: HomeIcon, gradient: 'from-orange-500 to-red-600' },
    { id: 'water', label: { en: 'Water Tax', mr: 'पाणी कर' }, icon: Droplets, gradient: 'from-blue-500 to-cyan-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto max-w-6xl p-4 relative">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="relative inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-tax-color to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-glow hover-float">
              <CreditCard className="h-10 w-10 text-white animate-pulse-slow" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse-slow">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
          </div>
          <h1 className="mb-2 gradient-text animate-scale-in">
            {t({ en: 'Tax Payment Portal', mr: 'कर भरणा पोर्टल' })}
          </h1>
          <p className="text-gray-600 animate-slide-in-right">
            {t({ en: 'Pay your village taxes online securely and conveniently', mr: 'आपले गावचे कर ऑनलाइन सुरक्षित आणि सोयीस्करपणे भरा' })}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl hover-lift">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBwYXltZW50JTIwb25saW5lfGVufDF8fHx8MTc1NTQ1NDM1MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Online tax payment"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-red/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h2 className="mb-2 font-bold bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                  {t({ en: 'Digital Tax Collection', mr: 'डिजिटल कर संकलन' })}
                </h2>
                <p className="opacity-90">
                  {t({ en: 'Transparent • Secure • Instant', mr: 'पारदर्शक • सुरक्षित • तत्काळ' })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Type Filter */}
        <div className="flex justify-center mb-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex glass-card p-2 rounded-2xl shadow-lg">
            {taxTypes.map((type, index) => (
              <Button
                key={type.id}
                variant={selectedTaxType === type.id ? 'default' : 'ghost'}
                onClick={() => setSelectedTaxType(type.id)}
                className={`gap-2 transition-all duration-300 hover-scale ${
                  selectedTaxType === type.id 
                    ? `bg-gradient-to-r ${type.gradient} text-white shadow-lg animate-glow` 
                    : 'text-gray-600 hover:bg-gradient-to-r hover:' + type.gradient + ' hover:text-white glass-effect'
                } animate-slide-in-right`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <type.icon className="h-4 w-4" />
                {t(type.label)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search Section */}
            <Card className="mb-6 glass-card border-0 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="text-tax flex items-center gap-2">
                  <Search className="h-5 w-5 animate-pulse-slow" />
                  {t({ en: 'Find Tax Records', mr: 'कर रेकॉर्ड शोधा' })}
                </CardTitle>
                <p className="text-gray-600">
                  {t({ en: 'Search by full name or house number to view your tax dues', mr: 'तुमचे कर देणे पाहण्यासाठी पूर्ण नाव किंवा घर क्रमांकाने शोधा' })}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t({ en: 'Enter full name or house number (e.g., राम शर्मा, 123)', mr: 'पूर्ण नाव किंवा घर क्रमांक टाका (उदा., राम शर्मा, 123)' })}
                      className="glass-effect border-tax/20 focus:border-tax hover-glow transition-all duration-300"
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    className="bg-gradient-to-r from-tax-color to-red-600 text-white border-0 hover-scale hover:shadow-xl transition-all duration-300"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    {t({ en: 'Search', mr: 'शोधा' })}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Search Results */}
            {hasSearched && (
              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                {searchResults.length === 0 ? (
                  <Card className="glass-card border-0 shadow-xl">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-slate-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                        <Search className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-gray-700 mb-2 font-bold">
                        {t({ en: 'No Records Found', mr: 'कोणतेही रेकॉर्ड सापडले नाहीत' })}
                      </h3>
                      <p className="text-gray-600">
                        {t({ en: 'Please check the spelling or try a different search term', mr: 'कृपया स्पेलिंग तपासा किंवा वेगळा शोध शब्द वापरून पहा' })}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    {/* Pending Payments */}
                    {searchResults.filter(tax => tax.status === 'pending' || tax.status === 'overdue').length > 0 && (
                      <Card className="mb-6 glass-card border-0 shadow-xl animate-slide-in-left">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <AlertCircle className="h-6 w-6 text-red-600 animate-pulse-slow" />
                            {t({ en: 'Outstanding Tax Payments', mr: 'थकित कर भरणा' })}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {searchResults
                              .filter(tax => tax.status === 'pending' || tax.status === 'overdue')
                              .map((tax, index) => {
                                const StatusIcon = getStatusIcon(tax.status);
                                return (
                                  <div key={tax.id} 
                                       className="glass-effect p-4 rounded-xl hover-lift animate-slide-in-right"
                                       style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                                    <div className="flex justify-between items-start mb-3">
                                      <div className="flex items-start gap-3">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
                                          tax.type === 'property' ? 'bg-gradient-to-br from-orange-500 to-red-600' : 'bg-gradient-to-br from-blue-500 to-cyan-600'
                                        } animate-float`}>
                                          {tax.type === 'property' ? (
                                            <HomeIcon className="h-6 w-6 text-white" />
                                          ) : (
                                            <Droplets className="h-6 w-6 text-white" />
                                          )}
                                        </div>
                                        <div>
                                          <h3 className="font-bold gradient-text">
                                            {t({ 
                                              en: tax.type === 'property' ? 'Property Tax' : 'Water Tax',
                                              mr: tax.type === 'property' ? 'मालमत्ता कर' : 'पाणी कर'
                                            })}
                                          </h3>
                                          <div className="flex items-center gap-2 text-gray-600">
                                            <User className="h-4 w-4" />
                                            <span>{tax.ownerName}</span>
                                            <MapPin className="h-4 w-4 ml-2" />
                                            <span>{t({ en: `House ${tax.houseNumber}`, mr: `घर ${tax.houseNumber}` })}</span>
                                          </div>
                                          {tax.type === 'property' && (
                                            <p className="text-sm text-gray-500">
                                              {t({ en: `Area: ${tax.details.area}, Ward: ${tax.details.wardNumber}`, mr: `क्षेत्र: ${tax.details.area}, वार्ड: ${tax.details.wardNumber}` })}
                                            </p>
                                          )}
                                          {tax.type === 'water' && (
                                            <p className="text-sm text-gray-500">
                                              {t({ en: `Connection: ${tax.details.connectionNumber}, Usage: ${tax.details.consumption}`, mr: `कनेक्शन: ${tax.details.connectionNumber}, वापर: ${tax.details.consumption}` })}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                      <Badge className={`${getStatusColor(tax.status)} text-white border-0 animate-pulse-slow shadow-lg`}>
                                        <StatusIcon className="h-3 w-3 mr-1" />
                                        {t({ 
                                          en: tax.status === 'overdue' ? 'Overdue' : 'Due',
                                          mr: tax.status === 'overdue' ? 'मुदत संपली' : 'देय' 
                                        })}
                                      </Badge>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                      <div>
                                        <p className="font-bold gradient-text">₹{tax.amount}</p>
                                        <div className="flex items-center gap-1 text-sm text-gray-600">
                                          <Calendar className="h-4 w-4" />
                                          <span>{t({ en: `Due by ${tax.dueDate}`, mr: `${tax.dueDate} पर्यंत` })}</span>
                                        </div>
                                      </div>
                                      <Button 
                                        onClick={() => handlePayNow(tax)}
                                        className="bg-gradient-to-r from-tax-color to-red-600 text-white border-0 hover-scale hover:shadow-xl transition-all duration-300"
                                      >
                                        <CreditCard className="h-4 w-4 mr-2" />
                                        {t({ en: 'Pay Now', mr: 'आता भरा' })}
                                      </Button>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Payment History */}
                    {searchResults.filter(tax => tax.status === 'paid').length > 0 && (
                      <Card className="glass-card border-0 shadow-xl animate-slide-in-right">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <History className="h-6 w-6 text-green-600 animate-pulse-slow" />
                            {t({ en: 'Payment History', mr: 'पेमेंट इतिहास' })}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {searchResults
                              .filter(tax => tax.status === 'paid')
                              .map((tax, index) => (
                                <div key={tax.id} 
                                     className="glass-effect p-3 rounded-xl flex justify-between items-center hover-lift animate-fade-in-up"
                                     style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center animate-pulse-slow shadow-md">
                                      <CheckCircle className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold">
                                        {t({ 
                                          en: tax.type === 'property' ? 'Property Tax' : 'Water Tax',
                                          mr: tax.type === 'property' ? 'मालमत्ता कर' : 'पाणी कर'
                                        })}
                                      </h4>
                                      <p className="text-sm text-gray-600">
                                        {t({ en: `Paid on ${tax.dueDate}`, mr: `${tax.dueDate} रोजी भरले` })}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className="font-bold text-green-700">₹{tax.amount}</span>
                                    <Button variant="outline" size="sm" className="glass-effect hover-scale">
                                      <Download className="h-4 w-4 mr-2" />
                                      {t({ en: 'Receipt', mr: 'पावती' })}
                                    </Button>
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
            )}

            {/* Default Information when no search performed */}
            {!hasSearched && (
              <Card className="glass-card border-0 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                    <Calculator className="h-8 w-8 text-white animate-pulse-slow" />
                  </div>
                  <h3 className="text-blue-800 mb-4 font-bold">
                    {t({ en: 'Tax Information Center', mr: 'कर माहिती केंद्र' })}
                  </h3>
                  <div className="glass-effect p-6 rounded-xl mb-6">
                    <h4 className="font-bold mb-4 gradient-text">{t({ en: 'Tax Rates & Information', mr: 'कर दर आणि माहिती' })}</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="glass-effect p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <HomeIcon className="h-5 w-5 text-orange-600" />
                          <h5 className="font-semibold text-orange-600">{t({ en: 'Property Tax', mr: 'मालमत्ता कर' })}</h5>
                        </div>
                        <ul className="text-gray-600 space-y-1 text-left">
                          <li>• {t({ en: 'Residential: ₹25/sq ft annually', mr: 'निवासी: ₹२५/चौ.फुट वार्षिक' })}</li>
                          <li>• {t({ en: 'Commercial: ₹40/sq ft annually', mr: 'व्यावसायिक: ₹४०/चौ.फुट वार्षिक' })}</li>
                          <li>• {t({ en: 'Due: 31st January every year', mr: 'मुदत: दर वर्षी ३१ जानेवारी' })}</li>
                        </ul>
                      </div>
                      <div className="glass-effect p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Droplets className="h-5 w-5 text-blue-600" />
                          <h5 className="font-semibold text-blue-600">{t({ en: 'Water Tax', mr: 'पाणी कर' })}</h5>
                        </div>
                        <ul className="text-gray-600 space-y-1 text-left">
                          <li>• {t({ en: 'Usage: ₹2/1000 liters', mr: 'वापर: ₹२/१००० लिटर' })}</li>
                          <li>• {t({ en: 'Fixed charge: ₹200/month', mr: 'निश्चित शुल्क: ₹२००/महिना' })}</li>
                          <li>• {t({ en: 'Due: 15th of every month', mr: 'मुदत: दर महिन्याच्या १५ तारखेला' })}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {t({ 
                      en: 'To view your specific tax dues and payment history, please search using your full name or house number above',
                      mr: 'तुमचे विशिष्ट कर देणे आणि पेमेंट इतिहास पाहण्यासाठी, कृपया वरील तुमचे पूर्ण नाव किंवा घर क्रमांक वापरून शोधा'
                    })}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <Card className="glass-card border-0 shadow-xl animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-600 animate-pulse-slow" />
                  {t({ en: 'Quick Tips', mr: 'द्रुत टिप्स' })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="glass-effect p-3 rounded-lg hover-lift">
                    <p className="text-gray-700">
                      💡 {t({ en: 'Search with exact house number for faster results', mr: 'जलद परिणामांसाठी अचूक घर क्रमांकाने शोधा' })}
                    </p>
                  </div>
                  <div className="glass-effect p-3 rounded-lg hover-lift">
                    <p className="text-gray-700">
                      🏠 {t({ en: 'Property tax is calculated per square foot', mr: 'मालमत्ता कर प्रति चौरस फुट मोजला जातो' })}
                    </p>
                  </div>
                  <div className="glass-effect p-3 rounded-lg hover-lift">
                    <p className="text-gray-700">
                      💧 {t({ en: 'Water tax includes usage + fixed charges', mr: 'पाणी करात वापर + निश्चित शुल्क समाविष्ट आहे' })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="glass-card border-0 shadow-xl animate-slide-in-right" style={{ animationDelay: '0.7s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600 animate-pulse-slow" />
                  {t({ en: 'Secure Payment Methods', mr: 'सुरक्षित पेमेंट पद्धती' })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <div key={method.id} 
                         className="glass-effect p-3 rounded-lg hover-lift cursor-pointer transition-all duration-300 animate-scale-in"
                         style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center text-lg animate-float`}
                             style={{ animationDelay: `${index * 0.5}s` }}>
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{t(method.name)}</h4>
                          <p className="text-sm text-gray-600">{t(method.description)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="glass-card border-0 shadow-xl animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 animate-glow">
                  <Phone className="h-6 w-6 text-white animate-pulse-slow" />
                </div>
                <h4 className="font-bold mb-2 text-blue-800">
                  {t({ en: 'Need Help?', mr: 'मदत हवी?' })}
                </h4>
                <p className="text-blue-700 text-sm mb-3">
                  {t({ 
                    en: 'Contact our tax office for assistance',
                    mr: 'मदतीसाठी आमच्या कर कार्यालयाशी संपर्क साधा'
                  })}
                </p>
                <Button variant="outline" size="sm" className="glass-effect border-blue-300 text-blue-700 hover-scale">
                  📞 +91 20 1234 5678
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && selectedTaxForPayment && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up">
            <Card className="glass-card border-0 shadow-2xl max-w-md w-full animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-tax animate-pulse-slow" />
                  {t({ en: 'Complete Payment', mr: 'पेमेंट पूर्ण करा' })}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="font-semibold gradient-text mb-2">
                    {t({ 
                      en: selectedTaxForPayment.type === 'property' ? 'Property Tax' : 'Water Tax',
                      mr: selectedTaxForPayment.type === 'property' ? 'मालमत्ता कर' : 'पाणी कर'
                    })}
                  </h4>
                  <p className="text-gray-600">
                    {selectedTaxForPayment.ownerName} - {t({ en: `House ${selectedTaxForPayment.houseNumber}`, mr: `घर ${selectedTaxForPayment.houseNumber}` })}
                  </p>
                  <p className="font-bold gradient-text">₹{selectedTaxForPayment.amount}</p>
                </div>

                <div>
                  <Label className="font-semibold mb-3 block">{t({ en: 'Select Payment Method', mr: 'पेमेंट पद्धत निवडा' })}</Label>
                  <div className="space-y-2">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setSelectedPaymentMethod(method.id)}
                        className={`glass-effect p-3 rounded-lg cursor-pointer transition-all duration-300 hover-lift ${
                          selectedPaymentMethod === method.id 
                            ? `bg-gradient-to-r ${method.color} text-white border-2 border-white/30` 
                            : 'hover:border-2 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{method.icon}</span>
                          <div>
                            <h5 className="font-semibold">{t(method.name)}</h5>
                            <p className="text-sm opacity-90">{t(method.description)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    onClick={processPayment}
                    className="flex-1 bg-gradient-to-r from-tax-color to-red-600 text-white border-0 hover-scale hover:shadow-xl transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {t({ en: 'Pay Now', mr: 'आता भरा' })}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowPaymentModal(false);
                      setSelectedPaymentMethod('');
                      setSelectedTaxForPayment(null);
                    }}
                    className="glass-effect hover-scale"
                  >
                    {t({ en: 'Cancel', mr: 'रद्द करा' })}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}