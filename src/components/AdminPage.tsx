import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { useLanguage } from './LanguageProvider';
import { ContractsManagement } from './ContractsManagement';
import { ContractsContentManager } from './ContractsContentManager';
import { AdminContractsTab } from './AdminContractsTab';
import { AdminNavButton } from './AdminNavButton';
import { AdminFloatingContractsButton } from './AdminFloatingContractsButton';
import { 
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Home,
  CreditCard,
  ArrowLeft,
  Upload,
  Search,
  Filter,
  FileText,
  CheckCircle,
  AlertTriangle,
  Download,
  Eye,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Clock,
  XCircle,
  Phone,
  Mail,
  User,
  UserCheck,
  Calendar,
  MapPin,
  Settings,
  Camera,
  Video,
  Image,
  Play,
  Grid3X3,
  List,
  Tag,
  Heart,
  Share2,
  Star,
  Newspaper,
  Megaphone,
  Zap,
  Droplets,
  Construction,
  Bell,
  Info,
  FileBarChart,
  TrendingUp,
  Target,
  Building,
  Badge as BadgeIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon
} from 'lucide-react';

export function AdminPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('home-content');
  const fileInputRef = useRef(null);

  // Function to navigate to contracts management
  const handleContractsNavigation = () => {
    window.location.href = '/admin/contracts';
  };

  // Home content management states
  const [isContentDialogOpen, setIsContentDialogOpen] = useState(false);
  const [currentContentItem, setCurrentContentItem] = useState(null);
  const [contentFormData, setContentFormData] = useState({});

  const [heroContent, setHeroContent] = useState({
    mainImage: 'https://images.unsplash.com/photo-1655974239313-5ab1747a002e',
    title: { en: 'Welcome to Rampur Village', mr: 'रामपूर गावात आपले स्वागत आहे' },
    subtitle: { 
      en: 'A progressive smart village embracing technology for sustainable living and digital governance',
      mr: 'शाश्वत जीवन आणि डिजिटल गव्हर्नन्ससाठी तंत्रज्ञानाचा अवलंब करणारे प्रगतिशील स्मार्ट गाव'
    }
  });

  const [statistics, setStatistics] = useState([
    { id: 1, label: { en: 'Total Population', mr: 'एकूण लोकसंख्या' }, value: '3,247', icon: 'Users' },
    { id: 2, label: { en: 'Households', mr: 'कुटुंबे' }, value: '823', icon: 'Home' },
    { id: 3, label: { en: 'Area (Hectares)', mr: 'क्षेत्रफळ (हेक्टर)' }, value: '1,250', icon: 'TreePine' },
    { id: 4, label: { en: 'Literacy Rate', mr: 'साक्षरता दर' }, value: '78%', icon: 'GraduationCap' }
  ]);

  const [facilities, setFacilities] = useState([
    {
      id: 1,
      name: { en: 'Primary School', mr: 'प्राथमिक शाळा' },
      description: { en: 'Modern educational facility with smart classrooms', mr: 'स्मार्ट वर्गखोल्यांसह आधुनिक शैक्षणिक सुविधा' },
      icon: 'GraduationCap'
    },
    {
      id: 2,
      name: { en: 'Health Center', mr: 'आरोग्य केंद्र' },
      description: { en: '24/7 primary healthcare services', mr: '२४/७ प्राथमिक आरोग्य सेवा' },
      icon: 'Heart'
    },
    {
      id: 3,
      name: { en: 'Solar Grid', mr: 'सौर ग्रिड' },
      description: { en: 'Renewable energy with 80% solar coverage', mr: '८०% सौर कव्हरेजसह नवीकरणीय ऊर्जा' },
      icon: 'Zap'
    },
    {
      id: 4,
      name: { en: 'Water System', mr: 'जल प्रणाली' },
      description: { en: 'Smart water management and purification', mr: 'स्मार्ट जल व्यवस्थापन आणि शुद्धीकरण' },
      icon: 'Droplets'
    }
  ]);

  const [developments, setDevelopments] = useState([
    {
      id: 1,
      title: { en: 'Digital Infrastructure Upgrade', mr: 'डिजिटल पायाभूत सुविधा सुधारणा' },
      date: '15 Jan 2024',
      category: { en: 'Technology', mr: 'तंत्रज्ञान' },
      image: 'https://images.unsplash.com/photo-1655974239313-5ab1747a002e'
    },
    {
      id: 2,
      title: { en: 'Community Health Program', mr: 'सामुदायिक आरोग्य कार्यक्रम' },
      date: '12 Jan 2024',
      category: { en: 'Health', mr: 'आरोग्य' },
      image: 'https://images.unsplash.com/photo-1740477138822-906f6b845579'
    }
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: { en: 'Best Digital Village 2023', mr: 'सर्वोत्तम डिजिटल गाव २०२३' },
      description: { en: 'State Government Recognition', mr: 'राज्य सरकार मान्यता' },
      icon: '🏆'
    },
    {
      id: 2,
      title: { en: 'Clean Village Award', mr: 'स्वच्छ गाव पुरस्कार' },
      description: { en: 'District Level Achievement', mr: 'जिल्हा स्तरीय उपलब्धी' },
      icon: '🌟'
    }
  ]);

  const [footerContent, setFooterContent] = useState({
    address: {
      en: 'Village Panchayat Office\nMain Road, Rampur\nDist. Pune - 412345',
      mr: 'ग्राम पंचायत कार्यालय\nमुख्य रस्ता, रामपूर\nजि. पुणे - ४१२३४५'
    },
    phone: '+91 20 1234 5678',
    email: 'rampur.panchayat@gov.in',
    officeHours: {
      en: 'Monday - Friday\n9:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM',
      mr: 'सोमवार - शुक्रवार\n९:०० AM - ५:०० PM\nशनिवार: ९:०० AM - १:०० PM'
    }
  });

  // Tax management states
  const [taxRecords, setTaxRecords] = useState([
    {
      id: 'TAX001',
      houseNumber: 'H-101',
      ownerName: 'राम शंकर पाटील',
      taxType: 'Property Tax',
      amountDue: 5000,
      status: 'Pending',
      dueDate: '2024-03-31',
      createdDate: '2024-01-15',
      paidDate: null,
      receiptNumber: null
    },
    {
      id: 'TAX002',
      houseNumber: 'H-102',
      ownerName: 'सुनीता रामेश देशमुख',
      taxType: 'Water Tax',
      amountDue: 1200,
      status: 'Paid',
      dueDate: '2024-03-31',
      createdDate: '2024-01-15',
      paidDate: '2024-01-20',
      receiptNumber: 'RCP001'
    },
    {
      id: 'TAX003',
      houseNumber: 'H-103',
      ownerName: 'मोहन कुमार शर्मा',
      taxType: 'Trade License',
      amountDue: 3000,
      status: 'Pending',
      dueDate: '2024-02-28',
      createdDate: '2024-01-10',
      paidDate: null,
      receiptNumber: null
    },
    {
      id: 'TAX004',
      houseNumber: 'H-104',
      ownerName: 'अनिता विजय कुलकर्णी',
      taxType: 'Property Tax',
      amountDue: 7500,
      status: 'Overdue',
      dueDate: '2024-01-31',
      createdDate: '2023-12-01',
      paidDate: null,
      receiptNumber: null
    },
    {
      id: 'TAX005',
      houseNumber: 'H-105',
      ownerName: 'विकास अशोक गायकवाड',
      taxType: 'Water Tax',
      amountDue: 1500,
      status: 'Paid',
      dueDate: '2024-03-31',
      createdDate: '2024-01-12',
      paidDate: '2024-01-25',
      receiptNumber: 'RCP002'
    }
  ]);

  // Tax management UI states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [taxTypeFilter, setTaxTypeFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isAddRecordDialogOpen, setIsAddRecordDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Grievance management states
  const [grievances, setGrievances] = useState([
    {
      id: 'GRV001',
      title: 'Street Light Not Working',
      titleMr: 'रस्ता दिवा काम करत नाही',
      category: 'Infrastructure',
      categoryMr: 'पायाभूत सुविधा',
      description: 'The street light near temple is not working since 3 days',
      descriptionMr: 'मंदिराजवळील रस्ता दिवा ३ दिवसांपासून काम करत नाही',
      submittedBy: 'राम पाटील',
      mobile: '+91 9876543210',
      address: 'गल्ली नंबर ५',
      priority: 'high',
      status: 'pending',
      adminStatus: 'unapproved', // New field for admin approval
      submissionDate: '2024-01-10',
      assignedWorker: null,
      response: null,
      photos: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96']
    },
    {
      id: 'GRV002',
      title: 'Water Supply Issue',
      titleMr: 'पाणीपुरवठ्याची समस्या',
      category: 'Water',
      categoryMr: 'पाणी',
      description: 'Irregular water supply in ward 3',
      descriptionMr: 'वार्ड ३ मध्ये अनियमित पाणीपुरवठा',
      submittedBy: 'सुनीता देशमुख',
      mobile: '+91 9876543211',
      address: 'मुख्य रस्ता',
      priority: 'urgent',
      status: 'in-progress',
      adminStatus: 'approved',
      submissionDate: '2024-01-08',
      assignedWorker: 'WRK001',
      response: 'Water connection team has been notified',
      photos: []
    },
    {
      id: 'GRV003',
      title: 'Road Repair Needed',
      titleMr: 'रस्ता दुरुस्तीची गरज',
      category: 'Roads',
      categoryMr: 'रस्ते',
      description: 'Main road has potholes causing inconvenience',
      descriptionMr: 'मुख्य रस्त्यावर खड्डे असल्यामुळे अडचण होत आहे',
      submittedBy: 'मोहन शर्मा',
      mobile: '+91 9876543212',
      address: 'शिवाजी चौक',
      priority: 'normal',
      status: 'resolved',
      adminStatus: 'approved',
      submissionDate: '2024-01-05',
      assignedWorker: 'WRK002',
      response: 'Road repair work completed successfully',
      photos: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96']
    }
  ]);

  const [workers, setWorkers] = useState([
    {
      id: 'WRK001',
      name: 'सुरेश जादव',
      department: 'Water & Sanitation',
      departmentMr: 'पाणी आणि स्वच्छता',
      phone: '+91 9876501235',
      email: 'suresh.jadav@rampur.gov.in',
      specialization: 'Water Supply Management',
      status: 'active'
    },
    {
      id: 'WRK002',
      name: 'अनिल पवार',
      department: 'Roads & Transportation',
      departmentMr: 'रस्ते आणि वाहतूक',
      phone: '+91 9876501236',
      email: 'anil.pawar@rampur.gov.in',
      specialization: 'Road Maintenance',
      status: 'active'
    },
    {
      id: 'WRK003',
      name: 'विजय इंजिनीअर',
      department: 'Electricity',
      departmentMr: 'वीज विभाग',
      phone: '+91 9876501234',
      email: 'vijay.engineer@rampur.gov.in',
      specialization: 'Electrical Systems',
      status: 'active'
    }
  ]);

  // Grievance management UI states
  const [grievanceSearchTerm, setGrievanceSearchTerm] = useState('');
  const [grievanceStatusFilter, setGrievanceStatusFilter] = useState('All');
  const [grievanceAdminStatusFilter, setGrievanceAdminStatusFilter] = useState('All');
  const [grievanceCategoryFilter, setGrievanceCategoryFilter] = useState('All');
  const [grievanceCurrentPage, setGrievanceCurrentPage] = useState(1);
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [isGrievanceDetailOpen, setIsGrievanceDetailOpen] = useState(false);
  const [isWorkerManagementOpen, setIsWorkerManagementOpen] = useState(false);
  const [isAddWorkerOpen, setIsAddWorkerOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [newWorker, setNewWorker] = useState({
    name: '',
    department: '',
    departmentMr: '',
    phone: '',
    email: '',
    specialization: ''
  });

  // Villager management states
  const [villagers, setVillagers] = useState([
    {
      id: 'V001',
      fullName: 'राम शर्मा',
      address: 'वार्ड नं. 2, घर नं. 123',
      mobile: '+91 9876543210',
      gender: 'male',
      dateOfBirth: '1978-05-15',
      aadharNumber: '1234 5678 9012',
      idProofPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      status: 'approved',
      requestType: 'registration',
      submittedBy: 'user@example.com',
      submissionDate: '2024-01-10',
      approvedDate: '2024-01-12',
      createdAt: '2024-01-12'
    },
    {
      id: 'V002',
      fullName: 'सुनीता देशमुख',
      address: 'मुख्य रस्ता, घर नं. 45',
      mobile: '+91 9876543211',
      gender: 'female',
      dateOfBirth: '1985-03-20',
      aadharNumber: '2345 6789 0123',
      idProofPhoto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
      status: 'pending',
      requestType: 'registration',
      submittedBy: 'user2@example.com',
      submissionDate: '2024-01-15',
      approvedDate: null,
      createdAt: '2024-01-15'
    },
    {
      id: 'V003',
      fullName: 'मोहन पाटील',
      address: 'शिवाजी चौक, घर नं. 78',
      mobile: '+91 9876543212',
      gender: 'male',
      dateOfBirth: '1965-08-10',
      aadharNumber: '3456 7890 1234',
      idProofPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      status: 'pending',
      requestType: 'edit',
      submittedBy: 'user3@example.com',
      submissionDate: '2024-01-14',
      approvedDate: null,
      createdAt: '2024-01-10',
      previousData: {
        address: 'पुराना पत्ता, घर नं. 56',
        mobile: '+91 9876543200'
      }
    },
    {
      id: 'V004',
      fullName: 'गीता कुमार',
      address: 'गल्ली नं. 3, घर नं. 12',
      mobile: '+91 9876543213',
      gender: 'female',
      dateOfBirth: '1992-12-05',
      aadharNumber: '4567 8901 2345',
      idProofPhoto: null,
      status: 'rejected',
      requestType: 'registration',
      submittedBy: 'user4@example.com',
      submissionDate: '2024-01-13',
      approvedDate: null,
      createdAt: '2024-01-13',
      rejectionReason: 'Incomplete documentation'
    }
  ]);

  // Villager management UI states
  const [villagerSearchTerm, setVillagerSearchTerm] = useState('');
  const [villagerStatusFilter, setVillagerStatusFilter] = useState('All');
  const [villagerRequestTypeFilter, setVillagerRequestTypeFilter] = useState('All');
  const [villagerGenderFilter, setVillagerGenderFilter] = useState('All');
  const [villagerCurrentPage, setVillagerCurrentPage] = useState(1);
  const [selectedVillager, setSelectedVillager] = useState(null);
  const [isVillagerDetailOpen, setIsVillagerDetailOpen] = useState(false);
  const [isAddVillagerOpen, setIsAddVillagerOpen] = useState(false);
  const [newVillager, setNewVillager] = useState({
    fullName: '',
    address: '',
    mobile: '',
    gender: '',
    dateOfBirth: '',
    aadharNumber: '',
    idProofPhoto: null
  });

  // Committee management states
  const [committeeMembers, setCommitteeMembers] = useState([
    {
      id: 1,
      name: { en: 'Smt. Sunita Devi', mr: 'श्रीमती सुनीता देवी' },
      position: { en: 'Sarpanch (Village Head)', mr: 'सरपंच (गाव प्रमुख)' },
      ward: 'All Wards',
      phone: '+91 9876543210',
      email: 'sarpanch.rampur@gov.in',
      experience: { en: '8 years in local governance', mr: '८ वर्षांचा स्थानिक प्रशासनाचा अनुभव' },
      education: { en: 'B.A., Diploma in Rural Development', mr: 'बी.ए., ग्रामीण विकास डिप्लोमा' },
      achievements: [
        { en: 'Village Development Award 2022', mr: 'गाव विकास पुरस्कार २०२२' },
        { en: 'Digital Village Initiative', mr: 'डिजिटल व्हिलेज इनिशिएटिव्ह' }
      ],
      photo: 'https://images.unsplash.com/photo-1667564790635-0f560121359e',
      color: 'bg-purple-500',
      isActive: true,
      joinDate: '2020-01-15',
      termEnd: '2025-01-15'
    },
    {
      id: 2,
      name: { en: 'Shri Ram Kumar Sharma', mr: 'श्री राम कुमार शर्मा' },
      position: { en: 'Deputy Sarpanch', mr: 'उप सरपंच' },
      ward: 'Ward 1 & 2',
      phone: '+91 9876543211',
      email: 'deputy.rampur@gov.in',
      experience: { en: '5 years in village administration', mr: '५ वर्षांचा गाव प्रशासनाचा अनुभव' },
      education: { en: 'B.Com, Rural Management Certificate', mr: 'बी.कॉम, ग्रामीण व्यवस्थापन प्रमाणपत्र' },
      achievements: [
        { en: 'Water Conservation Project', mr: 'जल संधारण प्रकल्प' },
        { en: 'Best Ward Development 2023', mr: 'सर्वोत्तम वार्ड विकास २०२३' }
      ],
      photo: null,
      color: 'bg-blue-500',
      isActive: true,
      joinDate: '2021-06-10',
      termEnd: '2025-06-10'
    }
  ]);

  const [departments, setDepartments] = useState([
    {
      id: 1,
      name: { en: 'Revenue Department', mr: 'महसूल विभाग' },
      head: { en: 'Shri Anil Khade', mr: 'श्री अनिल खडे' },
      phone: '+91 9876543215',
      email: 'revenue.rampur@gov.in',
      services: [
        { en: 'Land Records', mr: 'जमीन नोंदी' },
        { en: 'Property Tax', mr: 'मालमत्ता कर' },
        { en: 'Revenue Certificates', mr: 'महसूल प्रमाणपत्रे' }
      ],
      isActive: true
    },
    {
      id: 2,
      name: { en: 'Development Department', mr: 'विकास विभाग' },
      head: { en: 'Smt. Priya Kulkarni', mr: 'श्रीमती प्रिया कुलकर्णी' },
      phone: '+91 9876543216',
      email: 'development.rampur@gov.in',
      services: [
        { en: 'Infrastructure Projects', mr: 'पायाभूत सुविधा प्रकल्प' },
        { en: 'Road Maintenance', mr: 'रस्ता देखभाल' },
        { en: 'Public Facilities', mr: 'सार्वजनिक सुविधा' }
      ],
      isActive: true
    }
  ]);

  const [officeInfo, setOfficeInfo] = useState({
    address: {
      en: 'Village Panchayat Building\nMain Road, Rampur\nTaluka: Pune, District: Pune\nMaharashtra - 412345',
      mr: 'ग्राम पंचायत इमारत\nमुख्य रस्ता, रामपूर\nतालुका: पुणे, जिल्हा: पुणे\nमहाराष्ट्र - ४१२३४५'
    },
    phone: '+91 20 1234 5678',
    email: 'office.rampur@gov.in',
    emergencyContact: '+91 9876543210',
    publicMeeting: {
      en: 'Every first Monday of the month at 10:00 AM',
      mr: 'दर महिन्याच्या पहिल्या सोमवारी सकाळी १०:०० वाजता'
    }
  });

  const [officeHours, setOfficeHours] = useState([
    { day: { en: 'Monday', mr: 'सोमवार' }, hours: '9:00 AM - 5:00 PM', available: true },
    { day: { en: 'Tuesday', mr: 'मंगळवार' }, hours: '9:00 AM - 5:00 PM', available: true },
    { day: { en: 'Wednesday', mr: 'बुधवार' }, hours: '9:00 AM - 5:00 PM', available: true },
    { day: { en: 'Thursday', mr: 'गुरुवार' }, hours: '9:00 AM - 5:00 PM', available: true },
    { day: { en: 'Friday', mr: 'शुक्रवार' }, hours: '9:00 AM - 5:00 PM', available: true },
    { day: { en: 'Saturday', mr: 'शनिवार' }, hours: '9:00 AM - 1:00 PM', available: true },
    { day: { en: 'Sunday', mr: 'रविवार' }, hours: 'Closed', available: false }
  ]);

  // Committee management UI states
  const [selectedCommitteeMember, setSelectedCommitteeMember] = useState(null);
  const [isCommitteeMemberDetailOpen, setIsCommitteeMemberDetailOpen] = useState(false);
  const [isAddCommitteeMemberOpen, setIsAddCommitteeMemberOpen] = useState(false);
  const [isEditCommitteeMemberOpen, setIsEditCommitteeMemberOpen] = useState(false);
  const [isDepartmentManagementOpen, setIsDepartmentManagementOpen] = useState(false);
  const [isAddDepartmentOpen, setIsAddDepartmentOpen] = useState(false);
  const [isOfficeInfoEditOpen, setIsOfficeInfoEditOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [newCommitteeMember, setNewCommitteeMember] = useState({
    name: { en: '', mr: '' },
    position: { en: '', mr: '' },
    ward: '',
    phone: '',
    email: '',
    experience: { en: '', mr: '' },
    education: { en: '', mr: '' },
    achievements: [],
    photo: null,
    color: 'bg-blue-500',
    joinDate: '',
    termEnd: ''
  });
  const [newDepartment, setNewDepartment] = useState({
    name: { en: '', mr: '' },
    head: { en: '', mr: '' },
    phone: '',
    email: '',
    services: []
  });

  // Media management states
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      type: 'photo',
      title: { en: 'Ganesh Festival Celebration', mr: 'गणेश उत्सव साजरा' },
      description: { en: 'Annual Ganesh festival celebrated with great enthusiasm', mr: 'वार्षिक गणेश उत्सव मोठ्या उत्साहाने साजरा केला' },
      url: 'https://images.unsplash.com/photo-1745988583865-2249654d864c',
      thumbnail: 'https://images.unsplash.com/photo-1745988583865-2249654d864c',
      category: 'festivals',
      tags: ['festival', 'ganesh', 'celebration'],
      date: '2024-08-25',
      uploadDate: '2024-08-26',
      views: 245,
      likes: 32,
      fileSize: '2.3 MB',
      dimensions: '1920x1080',
      isActive: true,
      isFeatured: true,
      uploadedBy: 'admin'
    },
    {
      id: 2,
      type: 'photo',
      title: { en: 'New Road Construction', mr: 'नवीन रस्ता बांधकाम' },
      description: { en: 'Construction of new concrete road connecting to main highway', mr: 'मुख्य महामार्गाला जोडणारा नवीन काँक्रीट रस्ता बांधकाम' },
      url: 'https://images.unsplash.com/photo-1683633570715-dce2fd5dfe90',
      thumbnail: 'https://images.unsplash.com/photo-1683633570715-dce2fd5dfe90',
      category: 'development',
      tags: ['development', 'road', 'construction'],
      date: '2024-07-15',
      uploadDate: '2024-07-16',
      views: 189,
      likes: 28,
      fileSize: '1.8 MB',
      dimensions: '1920x1080',
      isActive: true,
      isFeatured: false,
      uploadedBy: 'admin'
    },
    {
      id: 3,
      type: 'video',
      title: { en: 'Village Development Documentary', mr: 'गाव विकास माहितीपट' },
      description: { en: '10-minute documentary showcasing village transformation', mr: 'गावातील परिवर्तन दाखवणारा १० मिनिटांचा माहितीपट' },
      url: 'https://example.com/video1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1683633570715-dce2fd5dfe90',
      category: 'development',
      tags: ['documentary', 'development', 'transformation'],
      date: '2024-07-20',
      uploadDate: '2024-07-21',
      views: 1240,
      likes: 89,
      duration: '10:23',
      fileSize: '85.4 MB',
      resolution: '1920x1080',
      isActive: true,
      isFeatured: true,
      uploadedBy: 'admin'
    }
  ]);

  const [mediaCategories, setMediaCategories] = useState([
    { id: 'festivals', label: { en: 'Festivals', mr: 'सण-उत्सव' }, count: 15 },
    { id: 'development', label: { en: 'Development', mr: 'विकास' }, count: 12 },
    { id: 'education', label: { en: 'Education', mr: 'शिक्षण' }, count: 8 },
    { id: 'agriculture', label: { en: 'Agriculture', mr: 'शेती' }, count: 10 },
    { id: 'events', label: { en: 'Events', mr: 'कार्यक्रम' }, count: 3 }
  ]);

  // Media management UI states
  const [mediaSearchTerm, setMediaSearchTerm] = useState('');
  const [mediaTypeFilter, setMediaTypeFilter] = useState('All');
  const [mediaCategoryFilter, setMediaCategoryFilter] = useState('All');
  const [mediaStatusFilter, setMediaStatusFilter] = useState('All');
  const [mediaCurrentPage, setMediaCurrentPage] = useState(1);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isMediaDetailOpen, setIsMediaDetailOpen] = useState(false);
  const [isAddMediaOpen, setIsAddMediaOpen] = useState(false);
  const [isEditMediaOpen, setIsEditMediaOpen] = useState(false);
  const [isCategoryManagementOpen, setIsCategoryManagementOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mediaViewMode, setMediaViewMode] = useState('grid');
  const [newMediaItem, setNewMediaItem] = useState({
    type: 'photo',
    title: { en: '', mr: '' },
    description: { en: '', mr: '' },
    category: '',
    tags: [],
    file: null,
    isFeatured: false
  });
  const [newMediaCategory, setNewMediaCategory] = useState({
    label: { en: '', mr: '' }
  });

  // News management states
  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      category: 'alerts',
      priority: 'high',
      title: { en: 'Water Supply Disruption Notice', mr: 'पाणी पुरवठा खंडित होण्याची सूचना' },
      content: { 
        en: 'Water supply will be disrupted on January 25th from 6 AM to 4 PM due to pipeline maintenance work. Residents are advised to store water in advance.',
        mr: 'पाइपलाइन देखभाल कामामुळे २५ जानेवारी सकाळी ६ ते दुपारी ४ वाजेपर्यंत पाणी पुरवठा खंडित राहील. रहिवाशांना आगाऊ पाणी साठवण्याचा सल्ला दिला जातो.'
      },
      summary: {
        en: 'Water disruption on Jan 25th from 6 AM to 4 PM',
        mr: '२५ जानेवारी सकाळी ६ ते दुपारी ४ वाजेपर्यंत पाणी खंडित'
      },
      date: '2024-01-22',
      time: '09:30 AM',
      publishDate: '2024-01-22T09:30:00',
      expiryDate: '2024-01-26T00:00:00',
      isPublished: true,
      isFeatured: true,
      isBreaking: true,
      image: null,
      tags: ['water', 'maintenance', 'alert'],
      author: 'Admin',
      readCount: 245,
      iconType: 'Droplets',
      colorScheme: {
        text: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200'
      }
    },
    {
      id: 2,
      category: 'announcements',
      priority: 'medium',
      title: { en: 'Village Gram Sabha Meeting', mr: 'गाव ग्राम सभा बैठक' },
      content: { 
        en: 'Monthly Gram Sabha meeting scheduled for January 28th at 10 AM at the Village Panchayat Hall. All villagers are requested to attend.',
        mr: '२८ जानेवारी सकाळी १० वाजता गाव पंचायत हॉलमध्ये मासिक ग्राम सभा बैठक नियोजित आहे. सर्व गावकऱ्यांना उपस्थित राहण्याची विनंती.'
      },
      summary: {
        en: 'Monthly Gram Sabha meeting on Jan 28th at 10 AM',
        mr: '२८ जानेवारी सकाळी १० वाजता मासिक ग्राम सभा बैठक'
      },
      date: '2024-01-20',
      time: '02:15 PM',
      publishDate: '2024-01-20T14:15:00',
      expiryDate: '2024-01-29T00:00:00',
      isPublished: true,
      isFeatured: false,
      isBreaking: false,
      image: 'https://images.unsplash.com/photo-1667564790635-0f560121359e',
      tags: ['meeting', 'gram-sabha', 'announcement'],
      author: 'Sarpanch Office',
      readCount: 156,
      iconType: 'Megaphone',
      colorScheme: {
        text: 'text-purple-600',
        bg: 'bg-purple-50',
        border: 'border-purple-200'
      }
    },
    {
      id: 3,
      category: 'utilities',
      priority: 'medium',
      title: { en: 'Electricity Maintenance Work', mr: 'वीज देखभाल कार्य' },
      content: { 
        en: 'Scheduled power outage on January 26th from 11 AM to 3 PM in Ward 2 and Ward 3 for transformer maintenance.',
        mr: 'ट्रान्सफॉर्मर देखभालीसाठी २६ जानेवारी सकाळी ११ ते दुपारी ३ वाजेपर्यंत वार्ड २ आणि वार्ड ३ मध्ये नियोजित वीज खंडित.'
      },
      summary: {
        en: 'Power outage on Jan 26th from 11 AM to 3 PM in Ward 2 & 3',
        mr: '२६ जानेवारी सकाळी ११ ते दुपारी ३ वार्ड २ आणि ३ मध्ये वीज खंडित'
      },
      date: '2024-01-19',
      time: '11:00 AM',
      publishDate: '2024-01-19T11:00:00',
      expiryDate: '2024-01-27T00:00:00',
      isPublished: true,
      isFeatured: false,
      isBreaking: false,
      image: null,
      tags: ['electricity', 'maintenance', 'ward2', 'ward3'],
      author: 'Electricity Department',
      readCount: 98,
      iconType: 'Zap',
      colorScheme: {
        text: 'text-yellow-600',
        bg: 'bg-yellow-50',
        border: 'border-yellow-200'
      }
    }
  ]);

  const [newsCategories, setNewsCategories] = useState([
    { id: 'announcements', label: { en: 'Announcements', mr: 'घोषणा' }, icon: 'Megaphone', count: 5 },
    { id: 'events', label: { en: 'Events', mr: 'कार्यक्रम' }, icon: 'Calendar', count: 3 },
    { id: 'alerts', label: { en: 'Alerts', mr: 'सूचना' }, icon: 'AlertTriangle', count: 2 },
    { id: 'utilities', label: { en: 'Utilities', mr: 'सुविधा' }, icon: 'Zap', count: 4 },
    { id: 'general', label: { en: 'General News', mr: 'सामान्य बातम्या' }, icon: 'Newspaper', count: 6 }
  ]);

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      date: '28',
      month: 'Jan',
      year: '2024',
      title: { en: 'Gram Sabha Meeting', mr: 'ग्राम सभा बैठक' },
      time: '10:00 AM',
      location: { en: 'Village Panchayat Hall', mr: 'गाव पंचायत हॉल' },
      description: { en: 'Monthly village meeting', mr: 'मासिक गाव बैठक' },
      isActive: true
    },
    {
      id: 2,
      date: '26',
      month: 'Jan', 
      year: '2024',
      title: { en: 'Republic Day', mr: 'प्रजासत्ताक दिन' },
      time: '08:00 AM',
      location: { en: 'Village Ground', mr: 'गाव मैदान' },
      description: { en: 'National celebration', mr: 'राष्ट्रीय सण' },
      isActive: true
    }
  ]);

  // News management UI states
  const [newsSearchTerm, setNewsSearchTerm] = useState('');
  const [newsCategoryFilter, setNewsCategoryFilter] = useState('All');
  const [newsPriorityFilter, setNewsPriorityFilter] = useState('All');
  const [newsStatusFilter, setNewsStatusFilter] = useState('All');
  const [newsCurrentPage, setNewsCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isNewsDetailOpen, setIsNewsDetailOpen] = useState(false);
  const [isAddNewsOpen, setIsAddNewsOpen] = useState(false);
  const [isEditNewsOpen, setIsEditNewsOpen] = useState(false);
  const [isNewsPreviewOpen, setIsNewsPreviewOpen] = useState(false);
  const [isEventManagementOpen, setIsEventManagementOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isNewsCategoryManagementOpen, setIsNewsCategoryManagementOpen] = useState(false);
  const [isAddNewsCategoryOpen, setIsAddNewsCategoryOpen] = useState(false);
  const [newsViewMode, setNewsViewMode] = useState('grid');
  const [newNewsItem, setNewNewsItem] = useState({
    category: '',
    priority: 'medium',
    title: { en: '', mr: '' },
    content: { en: '', mr: '' },
    summary: { en: '', mr: '' },
    tags: [],
    image: null,
    isFeatured: false,
    isBreaking: false,
    publishDate: '',
    expiryDate: '',
    iconType: 'Newspaper'
  });
  const [newEvent, setNewEvent] = useState({
    title: { en: '', mr: '' },
    description: { en: '', mr: '' },
    location: { en: '', mr: '' },
    date: '',
    time: '',
    isActive: true
  });
  const [newNewsCategory, setNewNewsCategory] = useState({
    label: { en: '', mr: '' },
    icon: 'Newspaper'
  });

  // New record form state
  const [newRecord, setNewRecord] = useState({
    houseNumber: '',
    ownerName: '',
    taxType: '',
    amountDue: '',
    dueDate: ''
  });

  const recordsPerPage = 10;

  // Filter and search logic
  const filteredRecords = taxRecords.filter(record => {
    const matchesSearch = record.houseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || record.status === statusFilter;
    const matchesType = taxTypeFilter === 'All' || record.taxType === taxTypeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedRecords = filteredRecords.slice(startIndex, startIndex + recordsPerPage);

  // Grievance filter and search logic
  const filteredGrievances = grievances.filter(grievance => {
    const matchesSearch = grievance.title.toLowerCase().includes(grievanceSearchTerm.toLowerCase()) ||
                         grievance.submittedBy.toLowerCase().includes(grievanceSearchTerm.toLowerCase()) ||
                         grievance.id.toLowerCase().includes(grievanceSearchTerm.toLowerCase());
    const matchesStatus = grievanceStatusFilter === 'All' || grievance.status === grievanceStatusFilter;
    const matchesAdminStatus = grievanceAdminStatusFilter === 'All' || grievance.adminStatus === grievanceAdminStatusFilter;
    const matchesCategory = grievanceCategoryFilter === 'All' || grievance.category === grievanceCategoryFilter;
    
    return matchesSearch && matchesStatus && matchesAdminStatus && matchesCategory;
  });

  // Grievance pagination logic
  const grievancesPerPage = 10;
  const totalGrievancePages = Math.ceil(filteredGrievances.length / grievancesPerPage);
  const grievanceStartIndex = (grievanceCurrentPage - 1) * grievancesPerPage;
  const paginatedGrievances = filteredGrievances.slice(grievanceStartIndex, grievanceStartIndex + grievancesPerPage);

  // Villager filter and search logic
  const filteredVillagers = villagers.filter(villager => {
    const matchesSearch = villager.fullName.toLowerCase().includes(villagerSearchTerm.toLowerCase()) ||
                         villager.mobile.includes(villagerSearchTerm) ||
                         villager.id.toLowerCase().includes(villagerSearchTerm.toLowerCase()) ||
                         villager.aadharNumber.includes(villagerSearchTerm);
    const matchesStatus = villagerStatusFilter === 'All' || villager.status === villagerStatusFilter;
    const matchesRequestType = villagerRequestTypeFilter === 'All' || villager.requestType === villagerRequestTypeFilter;
    const matchesGender = villagerGenderFilter === 'All' || villager.gender === villagerGenderFilter;
    
    return matchesSearch && matchesStatus && matchesRequestType && matchesGender;
  });

  // Villager pagination logic
  const villagersPerPage = 10;
  const totalVillagerPages = Math.ceil(filteredVillagers.length / villagersPerPage);
  const villagerStartIndex = (villagerCurrentPage - 1) * villagersPerPage;
  const paginatedVillagers = filteredVillagers.slice(villagerStartIndex, villagerStartIndex + villagersPerPage);

  // Villager statistics
  const villagerStats = {
    total: villagers.filter(v => v.status === 'approved').length,
    pending: villagers.filter(v => v.status === 'pending').length,
    male: villagers.filter(v => v.status === 'approved' && v.gender === 'male').length,
    female: villagers.filter(v => v.status === 'approved' && v.gender === 'female').length,
    other: villagers.filter(v => v.status === 'approved' && v.gender === 'other').length
  };

  // Media filter and search logic
  const filteredMedia = mediaItems.filter(media => {
    const matchesSearch = media.title.en.toLowerCase().includes(mediaSearchTerm.toLowerCase()) ||
                         media.title.mr.toLowerCase().includes(mediaSearchTerm.toLowerCase()) ||
                         media.tags.some(tag => tag.toLowerCase().includes(mediaSearchTerm.toLowerCase()));
    const matchesType = mediaTypeFilter === 'All' || media.type === mediaTypeFilter;
    const matchesCategory = mediaCategoryFilter === 'All' || media.category === mediaCategoryFilter;
    const matchesStatus = mediaStatusFilter === 'All' || 
                         (mediaStatusFilter === 'Active' && media.isActive) ||
                         (mediaStatusFilter === 'Inactive' && !media.isActive) ||
                         (mediaStatusFilter === 'Featured' && media.isFeatured);
    
    return matchesSearch && matchesType && matchesCategory && matchesStatus;
  });

  // Media pagination logic
  const mediaPerPage = 12;
  const totalMediaPages = Math.ceil(filteredMedia.length / mediaPerPage);
  const mediaStartIndex = (mediaCurrentPage - 1) * mediaPerPage;
  const paginatedMedia = filteredMedia.slice(mediaStartIndex, mediaStartIndex + mediaPerPage);

  // Media statistics
  const mediaStats = {
    total: mediaItems.length,
    photos: mediaItems.filter(m => m.type === 'photo').length,
    videos: mediaItems.filter(m => m.type === 'video').length,
    featured: mediaItems.filter(m => m.isFeatured).length,
    active: mediaItems.filter(m => m.isActive).length,
    totalViews: mediaItems.reduce((sum, m) => sum + m.views, 0),
    totalLikes: mediaItems.reduce((sum, m) => sum + m.likes, 0)
  };

  // News filter and search logic
  const filteredNews = newsItems.filter(news => {
    const matchesSearch = news.title.en.toLowerCase().includes(newsSearchTerm.toLowerCase()) ||
                         news.title.mr.toLowerCase().includes(newsSearchTerm.toLowerCase()) ||
                         news.content.en.toLowerCase().includes(newsSearchTerm.toLowerCase()) ||
                         news.tags.some(tag => tag.toLowerCase().includes(newsSearchTerm.toLowerCase()));
    const matchesCategory = newsCategoryFilter === 'All' || news.category === newsCategoryFilter;
    const matchesPriority = newsPriorityFilter === 'All' || news.priority === newsPriorityFilter;
    const matchesStatus = newsStatusFilter === 'All' || 
                         (newsStatusFilter === 'Published' && news.isPublished) ||
                         (newsStatusFilter === 'Draft' && !news.isPublished) ||
                         (newsStatusFilter === 'Featured' && news.isFeatured) ||
                         (newsStatusFilter === 'Breaking' && news.isBreaking);
    
    return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
  });

  // News pagination logic
  const newsPerPage = 10;
  const totalNewsPages = Math.ceil(filteredNews.length / newsPerPage);
  const newsStartIndex = (newsCurrentPage - 1) * newsPerPage;
  const paginatedNews = filteredNews.slice(newsStartIndex, newsStartIndex + newsPerPage);

  // News statistics
  const newsStats = {
    total: newsItems.length,
    published: newsItems.filter(n => n.isPublished).length,
    draft: newsItems.filter(n => !n.isPublished).length,
    featured: newsItems.filter(n => n.isFeatured).length,
    breaking: newsItems.filter(n => n.isBreaking).length,
    highPriority: newsItems.filter(n => n.priority === 'high').length,
    totalReads: newsItems.reduce((sum, n) => sum + n.readCount, 0),
    events: upcomingEvents.filter(e => e.isActive).length
  };

  // Helper functions
  const getStatusBadge = (status) => {
    const configs = {
      'Pending': { color: 'bg-orange-500 text-white', icon: AlertTriangle },
      'Paid': { color: 'bg-green-500 text-white', icon: CheckCircle },
      'Overdue': { color: 'bg-red-500 text-white', icon: AlertTriangle }
    };
    
    const config = configs[status] || configs['Pending'];
    const IconComponent = config.icon;
    
    return (
      <Badge className={`${config.color} border-0 flex items-center gap-1`}>
        <IconComponent className="h-3 w-3" />
        {status}
      </Badge>
    );
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const allowedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    if (!allowedTypes.includes(file.type)) {
      setUploadStatus('Error: Please upload only Excel (.xlsx) or CSV files');
      return;
    }

    // Simulate file processing
    setUploadStatus('Processing file...');
    setTimeout(() => {
      setUploadStatus('Success: 15 new tax records have been uploaded and added to the database');
      // Here you would typically process the file and update taxRecords
    }, 2000);
  };

  const handleAddRecord = () => {
    if (!newRecord.houseNumber || !newRecord.ownerName || !newRecord.taxType || !newRecord.amountDue || !newRecord.dueDate) {
      alert('Please fill all required fields');
      return;
    }

    const record = {
      id: `TAX${String(Date.now()).slice(-3)}`,
      ...newRecord,
      amountDue: parseFloat(newRecord.amountDue),
      status: 'Pending',
      createdDate: new Date().toISOString().split('T')[0],
      paidDate: null,
      receiptNumber: null
    };

    setTaxRecords([...taxRecords, record]);
    setNewRecord({ houseNumber: '', ownerName: '', taxType: '', amountDue: '', dueDate: '' });
    setIsAddRecordDialogOpen(false);
  };

  const handleEditRecord = () => {
    if (!selectedRecord) return;
    
    setTaxRecords(taxRecords.map(record => 
      record.id === selectedRecord.id ? selectedRecord : record
    ));
    setIsEditDialogOpen(false);
    setSelectedRecord(null);
  };

  const handleMarkAsPaid = (record) => {
    const confirmed = window.confirm(`Mark tax record for ${record.ownerName} (${record.houseNumber}) as Paid?`);
    if (!confirmed) return;

    const receiptNumber = `RCP${String(Date.now()).slice(-6)}`;
    setTaxRecords(taxRecords.map(r => 
      r.id === record.id 
        ? { ...r, status: 'Paid', paidDate: new Date().toISOString().split('T')[0], receiptNumber }
        : r
    ));
  };

  const handleDeleteRecord = (record) => {
    const confirmed = window.confirm(`Are you sure you want to permanently delete this tax record for ${record.ownerName}? This action cannot be undone.`);
    if (!confirmed) return;

    setTaxRecords(taxRecords.filter(r => r.id !== record.id));
  };

  // Grievance management helper functions
  const getGrievanceStatusBadge = (status) => {
    const configs = {
      'pending': { color: 'bg-orange-500 text-white', icon: Clock },
      'in-progress': { color: 'bg-blue-500 text-white', icon: MessageSquare },
      'resolved': { color: 'bg-green-500 text-white', icon: CheckCircle },
      'rejected': { color: 'bg-red-500 text-white', icon: XCircle }
    };
    
    const config = configs[status] || configs['pending'];
    const IconComponent = config.icon;
    
    return (
      <Badge className={`${config.color} border-0 flex items-center gap-1`}>
        <IconComponent className="h-3 w-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getAdminStatusBadge = (adminStatus) => {
    const configs = {
      'unapproved': { color: 'bg-gray-500 text-white', label: 'Unapproved' },
      'approved': { color: 'bg-green-500 text-white', label: 'Approved' },
      'rejected': { color: 'bg-red-500 text-white', label: 'Rejected' }
    };
    
    const config = configs[adminStatus] || configs['unapproved'];
    
    return (
      <Badge className={`${config.color} border-0`}>
        {config.label}
      </Badge>
    );
  };

  const getPriorityBadge = (priority) => {
    const configs = {
      'urgent': { color: 'bg-red-500 text-white', icon: AlertTriangle },
      'high': { color: 'bg-orange-500 text-white', icon: AlertTriangle },
      'normal': { color: 'bg-blue-500 text-white', icon: Clock },
      'low': { color: 'bg-gray-500 text-white', icon: Clock }
    };
    
    const config = configs[priority] || configs['normal'];
    const IconComponent = config.icon;
    
    return (
      <Badge className={`${config.color} border-0 flex items-center gap-1`}>
        <IconComponent className="h-3 w-3" />
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </Badge>
    );
  };

  const handleApproveGrievance = (grievance) => {
    const confirmed = window.confirm(`Approve grievance "${grievance.title}" by ${grievance.submittedBy}?`);
    if (!confirmed) return;

    setGrievances(grievances.map(g => 
      g.id === grievance.id ? { ...g, adminStatus: 'approved' } : g
    ));
  };

  const handleRejectGrievance = (grievance) => {
    const confirmed = window.confirm(`Reject grievance "${grievance.title}" by ${grievance.submittedBy}?`);
    if (!confirmed) return;

    setGrievances(grievances.map(g => 
      g.id === grievance.id ? { ...g, adminStatus: 'rejected', status: 'rejected' } : g
    ));
  };

  const handleAssignWorker = (grievanceId, workerId) => {
    setGrievances(grievances.map(g => 
      g.id === grievanceId ? { ...g, assignedWorker: workerId, status: 'in-progress' } : g
    ));
  };

  const handleUpdateGrievanceStatus = (grievanceId, newStatus) => {
    setGrievances(grievances.map(g => 
      g.id === grievanceId ? { ...g, status: newStatus } : g
    ));
  };

  const handleAddWorker = () => {
    if (!newWorker.name || !newWorker.department || !newWorker.phone) {
      alert('Please fill all required fields');
      return;
    }

    const worker = {
      id: `WRK${String(Date.now()).slice(-3)}`,
      ...newWorker,
      status: 'active'
    };

    setWorkers([...workers, worker]);
    setNewWorker({ name: '', department: '', departmentMr: '', phone: '', email: '', specialization: '' });
    setIsAddWorkerOpen(false);
  };

  const handleUpdateWorker = () => {
    if (!selectedWorker) return;
    
    setWorkers(workers.map(w => 
      w.id === selectedWorker.id ? selectedWorker : w
    ));
    setSelectedWorker(null);
  };

  // Villager management helper functions
  const getVillagerStatusBadge = (status) => {
    const configs = {
      'pending': { color: 'bg-orange-500 text-white', icon: Clock },
      'approved': { color: 'bg-green-500 text-white', icon: CheckCircle },
      'rejected': { color: 'bg-red-500 text-white', icon: XCircle }
    };
    
    const config = configs[status] || configs['pending'];
    const IconComponent = config.icon;
    
    return (
      <Badge className={`${config.color} border-0 flex items-center gap-1`}>
        <IconComponent className="h-3 w-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getRequestTypeBadge = (requestType) => {
    const configs = {
      'registration': { color: 'bg-blue-500 text-white', label: 'New Registration' },
      'edit': { color: 'bg-purple-500 text-white', label: 'Edit Request' }
    };
    
    const config = configs[requestType] || configs['registration'];
    
    return (
      <Badge className={`${config.color} border-0`}>
        {config.label}
      </Badge>
    );
  };

  const handleApproveVillager = (villager) => {
    const confirmed = window.confirm(`Approve ${villager.requestType} for "${villager.fullName}"?`);
    if (!confirmed) return;

    const approvedDate = new Date().toISOString().split('T')[0];
    setVillagers(villagers.map(v => 
      v.id === villager.id ? { ...v, status: 'approved', approvedDate } : v
    ));
  };

  const handleRejectVillager = (villager) => {
    const reason = window.prompt(`Enter rejection reason for "${villager.fullName}"`);
    if (!reason) return;

    setVillagers(villagers.map(v => 
      v.id === villager.id ? { ...v, status: 'rejected', rejectionReason: reason } : v
    ));
  };

  const handleAddVillager = () => {
    if (!newVillager.fullName || !newVillager.mobile || !newVillager.gender || !newVillager.aadharNumber) {
      alert('Please fill all required fields');
      return;
    }

    const villager = {
      id: `V${String(Date.now()).slice(-3)}`,
      ...newVillager,
      status: 'approved',
      requestType: 'manual',
      submittedBy: 'admin',
      submissionDate: new Date().toISOString().split('T')[0],
      approvedDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString().split('T')[0]
    };

    setVillagers([...villagers, villager]);
    setNewVillager({
      fullName: '',
      address: '',
      mobile: '',
      gender: '',
      dateOfBirth: '',
      aadharNumber: '',
      idProofPhoto: null
    });
    setIsAddVillagerOpen(false);
  };

  const exportVillagersToCSV = () => {
    const headers = [
      'ID', 'Full Name', 'Address', 'Mobile', 'Gender', 'Date of Birth', 
      'Aadhar Number', 'Status', 'Request Type', 'Submission Date', 'Approved Date'
    ];
    
    const csvContent = [
      headers.join(','),
      ...villagers.map(v => [
        v.id,
        `"${v.fullName}"`,
        `"${v.address}"`,
        v.mobile,
        v.gender,
        v.dateOfBirth,
        v.aadharNumber,
        v.status,
        v.requestType,
        v.submissionDate,
        v.approvedDate || ''
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `villagers_data_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Committee management helper functions
  const handleAddCommitteeMember = () => {
    if (!newCommitteeMember.name.en || !newCommitteeMember.position.en || !newCommitteeMember.phone) {
      alert('Please fill all required fields');
      return;
    }

    const member = {
      id: Date.now(),
      ...newCommitteeMember,
      isActive: true
    };

    setCommitteeMembers([...committeeMembers, member]);
    setNewCommitteeMember({
      name: { en: '', mr: '' },
      position: { en: '', mr: '' },
      ward: '',
      phone: '',
      email: '',
      experience: { en: '', mr: '' },
      education: { en: '', mr: '' },
      achievements: [],
      photo: null,
      color: 'bg-blue-500',
      joinDate: '',
      termEnd: ''
    });
    setIsAddCommitteeMemberOpen(false);
  };

  const handleUpdateCommitteeMember = () => {
    if (!selectedCommitteeMember) return;
    
    setCommitteeMembers(committeeMembers.map(m => 
      m.id === selectedCommitteeMember.id ? selectedCommitteeMember : m
    ));
    setSelectedCommitteeMember(null);
    setIsEditCommitteeMemberOpen(false);
  };

  const handleDeleteCommitteeMember = (member) => {
    const confirmed = window.confirm(`Are you sure you want to remove ${member.name.en} from the committee?`);
    if (!confirmed) return;

    setCommitteeMembers(committeeMembers.filter(m => m.id !== member.id));
  };

  const handleAddDepartment = () => {
    if (!newDepartment.name.en || !newDepartment.head.en || !newDepartment.phone) {
      alert('Please fill all required fields');
      return;
    }

    const department = {
      id: Date.now(),
      ...newDepartment,
      isActive: true
    };

    setDepartments([...departments, department]);
    setNewDepartment({
      name: { en: '', mr: '' },
      head: { en: '', mr: '' },
      phone: '',
      email: '',
      services: []
    });
    setIsAddDepartmentOpen(false);
  };

  const handleUpdateDepartment = () => {
    if (!selectedDepartment) return;
    
    setDepartments(departments.map(d => 
      d.id === selectedDepartment.id ? selectedDepartment : d
    ));
    setSelectedDepartment(null);
  };

  const handleDeleteDepartment = (department) => {
    const confirmed = window.confirm(`Are you sure you want to delete the ${department.name.en}?`);
    if (!confirmed) return;

    setDepartments(departments.filter(d => d.id !== department.id));
  };

  const exportCommitteeToCSV = () => {
    const headers = [
      'ID', 'Name (English)', 'Name (Marathi)', 'Position (English)', 'Position (Marathi)', 
      'Ward', 'Phone', 'Email', 'Join Date', 'Term End', 'Status'
    ];
    
    const csvContent = [
      headers.join(','),
      ...committeeMembers.map(m => [
        m.id,
        `"${m.name.en}"`,
        `"${m.name.mr}"`,
        `"${m.position.en}"`,
        `"${m.position.mr}"`,
        `"${m.ward}"`,
        m.phone,
        m.email,
        m.joinDate || '',
        m.termEnd || '',
        m.isActive ? 'Active' : 'Inactive'
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `committee_members_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Media management helper functions
  const handleAddMedia = () => {
    if (!newMediaItem.title.en || !newMediaItem.category || !newMediaItem.file) {
      alert('Please fill all required fields and upload a file');
      return;
    }

    // Simulate file upload URL
    const fileUrl = URL.createObjectURL(newMediaItem.file);
    
    const mediaItem = {
      id: Date.now(),
      type: newMediaItem.type,
      title: newMediaItem.title,
      description: newMediaItem.description,
      url: fileUrl,
      thumbnail: fileUrl,
      category: newMediaItem.category,
      tags: newMediaItem.tags,
      date: new Date().toISOString().split('T')[0],
      uploadDate: new Date().toISOString().split('T')[0],
      views: 0,
      likes: 0,
      fileSize: `${(newMediaItem.file.size / (1024 * 1024)).toFixed(1)} MB`,
      dimensions: newMediaItem.type === 'photo' ? '1920x1080' : undefined,
      resolution: newMediaItem.type === 'video' ? '1920x1080' : undefined,
      duration: newMediaItem.type === 'video' ? '0:00' : undefined,
      isActive: true,
      isFeatured: newMediaItem.isFeatured,
      uploadedBy: 'admin'
    };

    setMediaItems([...mediaItems, mediaItem]);
    
    // Update category count
    setMediaCategories(prevCategories => 
      prevCategories.map(cat => 
        cat.id === newMediaItem.category 
          ? { ...cat, count: cat.count + 1 }
          : cat
      )
    );

    setNewMediaItem({
      type: 'photo',
      title: { en: '', mr: '' },
      description: { en: '', mr: '' },
      category: '',
      tags: [],
      file: null,
      isFeatured: false
    });
    setIsAddMediaOpen(false);
  };

  const handleUpdateMedia = () => {
    if (!selectedMedia) return;
    
    setMediaItems(mediaItems.map(m => 
      m.id === selectedMedia.id ? selectedMedia : m
    ));
    setSelectedMedia(null);
    setIsEditMediaOpen(false);
  };

  const handleDeleteMedia = (media) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${media.title.en}"?`);
    if (!confirmed) return;

    setMediaItems(mediaItems.filter(m => m.id !== media.id));
    
    // Update category count
    setMediaCategories(prevCategories => 
      prevCategories.map(cat => 
        cat.id === media.category 
          ? { ...cat, count: Math.max(0, cat.count - 1) }
          : cat
      )
    );
  };

  const handleToggleMediaStatus = (media) => {
    setMediaItems(mediaItems.map(m => 
      m.id === media.id ? { ...m, isActive: !m.isActive } : m
    ));
  };

  const handleToggleFeatured = (media) => {
    setMediaItems(mediaItems.map(m => 
      m.id === media.id ? { ...m, isFeatured: !m.isFeatured } : m
    ));
  };

  const handleAddCategory = () => {
    if (!newMediaCategory.label.en) {
      alert('Please fill the category name');
      return;
    }

    const category = {
      id: newMediaCategory.label.en.toLowerCase().replace(/\s+/g, '-'),
      label: newMediaCategory.label,
      count: 0
    };

    setMediaCategories([...mediaCategories, category]);
    setNewMediaCategory({ label: { en: '', mr: '' } });
    setIsAddCategoryOpen(false);
  };

  const handleDeleteCategory = (categoryId) => {
    const confirmed = window.confirm('Are you sure you want to delete this category?');
    if (!confirmed) return;

    setMediaCategories(mediaCategories.filter(cat => cat.id !== categoryId));
  };

  const exportMediaToCSV = () => {
    const headers = [
      'ID', 'Type', 'Title (English)', 'Title (Marathi)', 'Category', 'Date', 'Upload Date',
      'Views', 'Likes', 'File Size', 'Status', 'Featured', 'Uploaded By'
    ];
    
    const csvContent = [
      headers.join(','),
      ...mediaItems.map(m => [
        m.id,
        m.type,
        `"${m.title.en}"`,
        `"${m.title.mr}"`,
        m.category,
        m.date,
        m.uploadDate,
        m.views,
        m.likes,
        m.fileSize,
        m.isActive ? 'Active' : 'Inactive',
        m.isFeatured ? 'Yes' : 'No',
        m.uploadedBy
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `media_items_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // News management helper functions
  const handleAddNews = () => {
    if (!newNewsItem.title.en || !newNewsItem.category || !newNewsItem.content.en) {
      alert('Please fill all required fields');
      return;
    }

    const newsItem = {
      id: Date.now(),
      category: newNewsItem.category,
      priority: newNewsItem.priority,
      title: newNewsItem.title,
      content: newNewsItem.content,
      summary: newNewsItem.summary,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' }),
      publishDate: newNewsItem.publishDate || new Date().toISOString(),
      expiryDate: newNewsItem.expiryDate,
      isPublished: true,
      isFeatured: newNewsItem.isFeatured,
      isBreaking: newNewsItem.isBreaking,
      image: newNewsItem.image,
      tags: newNewsItem.tags,
      author: 'Admin',
      readCount: 0,
      iconType: newNewsItem.iconType,
      colorScheme: getColorSchemeForCategory(newNewsItem.category)
    };

    setNewsItems([newsItem, ...newsItems]);
    
    // Update category count
    setNewsCategories(prevCategories => 
      prevCategories.map(cat => 
        cat.id === newNewsItem.category 
          ? { ...cat, count: cat.count + 1 }
          : cat
      )
    );

    setNewNewsItem({
      category: '',
      priority: 'medium',
      title: { en: '', mr: '' },
      content: { en: '', mr: '' },
      summary: { en: '', mr: '' },
      tags: [],
      image: null,
      isFeatured: false,
      isBreaking: false,
      publishDate: '',
      expiryDate: '',
      iconType: 'Newspaper'
    });
    setIsAddNewsOpen(false);
  };

  const handleUpdateNews = () => {
    if (!selectedNews) return;
    
    setNewsItems(newsItems.map(n => 
      n.id === selectedNews.id ? selectedNews : n
    ));
    setSelectedNews(null);
    setIsEditNewsOpen(false);
  };

  const handleDeleteNews = (news) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${news.title.en}"?`);
    if (!confirmed) return;

    setNewsItems(newsItems.filter(n => n.id !== news.id));
    
    // Update category count
    setNewsCategories(prevCategories => 
      prevCategories.map(cat => 
        cat.id === news.category 
          ? { ...cat, count: Math.max(0, cat.count - 1) }
          : cat
      )
    );
  };

  const handleToggleNewsStatus = (news) => {
    setNewsItems(newsItems.map(n => 
      n.id === news.id ? { ...n, isPublished: !n.isPublished } : n
    ));
  };

  const handleToggleBreaking = (news) => {
    setNewsItems(newsItems.map(n => 
      n.id === news.id ? { ...n, isBreaking: !n.isBreaking } : n
    ));
  };

  const handleToggleNewsFeatured = (news) => {
    setNewsItems(newsItems.map(n => 
      n.id === news.id ? { ...n, isFeatured: !n.isFeatured } : n
    ));
  };

  const getColorSchemeForCategory = (category) => {
    const schemes = {
      'announcements': { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
      'alerts': { text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
      'events': { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
      'utilities': { text: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
      'general': { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' }
    };
    return schemes[category] || schemes['general'];
  };

  const handleAddEvent = () => {
    if (!newEvent.title.en || !newEvent.date || !newEvent.time) {
      alert('Please fill all required fields');
      return;
    }

    const event = {
      id: Date.now(),
      date: new Date(newEvent.date).getDate().toString(),
      month: new Date(newEvent.date).toLocaleDateString('en-US', { month: 'short' }),
      year: new Date(newEvent.date).getFullYear().toString(),
      title: newEvent.title,
      time: newEvent.time,
      location: newEvent.location,
      description: newEvent.description,
      isActive: newEvent.isActive
    };

    setUpcomingEvents([...upcomingEvents, event]);
    setNewEvent({
      title: { en: '', mr: '' },
      description: { en: '', mr: '' },
      location: { en: '', mr: '' },
      date: '',
      time: '',
      isActive: true
    });
    setIsAddEventOpen(false);
  };

  const handleDeleteEvent = (eventId) => {
    const confirmed = window.confirm('Are you sure you want to delete this event?');
    if (!confirmed) return;

    setUpcomingEvents(upcomingEvents.filter(e => e.id !== eventId));
  };

  const handleAddNewsCategory = () => {
    if (!newNewsCategory.label.en) {
      alert('Please fill the category name');
      return;
    }

    const category = {
      id: newNewsCategory.label.en.toLowerCase().replace(/\s+/g, '-'),
      label: newNewsCategory.label,
      icon: newNewsCategory.icon,
      count: 0
    };

    setNewsCategories([...newsCategories, category]);
    setNewNewsCategory({ label: { en: '', mr: '' }, icon: 'Newspaper' });
    setIsAddNewsCategoryOpen(false);
  };

  const handleDeleteNewsCategory = (categoryId) => {
    const confirmed = window.confirm('Are you sure you want to delete this category?');
    if (!confirmed) return;

    setNewsCategories(newsCategories.filter(cat => cat.id !== categoryId));
  };

  const exportNewsToCSV = () => {
    const headers = [
      'ID', 'Category', 'Priority', 'Title (English)', 'Title (Marathi)', 'Date', 'Published',
      'Featured', 'Breaking', 'Read Count', 'Author', 'Tags'
    ];
    
    const csvContent = [
      headers.join(','),
      ...newsItems.map(n => [
        n.id,
        n.category,
        n.priority,
        `"${n.title.en}"`,
        `"${n.title.mr}"`,
        n.date,
        n.isPublished ? 'Yes' : 'No',
        n.isFeatured ? 'Yes' : 'No',
        n.isBreaking ? 'Yes' : 'No',
        n.readCount,
        n.author,
        `"${n.tags.join(', ')}"`
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `news_items_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const downloadTemplate = () => {
    // Create a sample CSV template
    const csvContent = `House Number,Owner Name,Tax Type,Amount Due,Due Date
H-001,John Doe,Property Tax,5000,2024-03-31
H-002,Jane Smith,Water Tax,1200,2024-03-31`;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tax_records_template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Content management helper functions
  const handleContentEdit = (item, type) => {
    setCurrentContentItem({ ...item, type });
    setContentFormData(item);
    setIsContentDialogOpen(true);
  };

  const handleContentAdd = (type) => {
    setCurrentContentItem({ type, id: Date.now() });
    setContentFormData({});
    setIsContentDialogOpen(true);
  };

  const handleContentSave = () => {
    const updatedItem = { ...contentFormData, id: currentContentItem.id };
    
    switch (currentContentItem.type) {
      case 'statistic':
        if (currentContentItem.id && statistics.find(s => s.id === currentContentItem.id)) {
          setStatistics(statistics.map(s => s.id === currentContentItem.id ? updatedItem : s));
        } else {
          setStatistics([...statistics, updatedItem]);
        }
        break;
      case 'facility':
        if (currentContentItem.id && facilities.find(f => f.id === currentContentItem.id)) {
          setFacilities(facilities.map(f => f.id === currentContentItem.id ? updatedItem : f));
        } else {
          setFacilities([...facilities, updatedItem]);
        }
        break;
      case 'development':
        if (currentContentItem.id && developments.find(d => d.id === currentContentItem.id)) {
          setDevelopments(developments.map(d => d.id === currentContentItem.id ? updatedItem : d));
        } else {
          setDevelopments([...developments, updatedItem]);
        }
        break;
      case 'achievement':
        if (currentContentItem.id && achievements.find(a => a.id === currentContentItem.id)) {
          setAchievements(achievements.map(a => a.id === currentContentItem.id ? updatedItem : a));
        } else {
          setAchievements([...achievements, updatedItem]);
        }
        break;
    }
    
    setIsContentDialogOpen(false);
    setCurrentContentItem(null);
    setContentFormData({});
  };

  const handleContentDelete = (id, type) => {
    switch (type) {
      case 'statistic':
        setStatistics(statistics.filter(s => s.id !== id));
        break;
      case 'facility':
        setFacilities(facilities.filter(f => f.id !== id));
        break;
      case 'development':
        setDevelopments(developments.filter(d => d.id !== id));
        break;
      case 'achievement':
        setAchievements(achievements.filter(a => a.id !== id));
        break;
    }
  };

  const renderContentFormFields = () => {
    if (!currentContentItem) return null;

    switch (currentContentItem.type) {
      case 'statistic':
        return (
          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Label (English)', mr: 'लेबल (इंग्रजी)' })}</Label>
              <Input
                value={contentFormData.label?.en || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  label: { ...contentFormData.label, en: e.target.value }
                })}
                placeholder="Enter English label"
              />
            </div>
            <div>
              <Label>{t({ en: 'Label (Marathi)', mr: 'लेबल (मराठी)' })}</Label>
              <Input
                value={contentFormData.label?.mr || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  label: { ...contentFormData.label, mr: e.target.value }
                })}
                placeholder="मराठी लेबल टाका"
              />
            </div>
            <div>
              <Label>{t({ en: 'Value', mr: 'मूल्य' })}</Label>
              <Input
                value={contentFormData.value || ''}
                onChange={(e) => setContentFormData({ ...contentFormData, value: e.target.value })}
                placeholder="Enter value"
              />
            </div>
          </div>
        );

      case 'facility':
        return (
          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Name (English)', mr: 'नाव (इंग्र���ी)' })}</Label>
              <Input
                value={contentFormData.name?.en || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  name: { ...contentFormData.name, en: e.target.value }
                })}
                placeholder="Enter English name"
              />
            </div>
            <div>
              <Label>{t({ en: 'Name (Marathi)', mr: 'नाव (मराठी)' })}</Label>
              <Input
                value={contentFormData.name?.mr || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  name: { ...contentFormData.name, mr: e.target.value }
                })}
                placeholder="मराठी नाव टाका"
              />
            </div>
            <div>
              <Label>{t({ en: 'Description (English)', mr: 'वर्णन (इंग्रजी)' })}</Label>
              <Textarea
                value={contentFormData.description?.en || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  description: { ...contentFormData.description, en: e.target.value }
                })}
                placeholder="Enter English description"
              />
            </div>
            <div>
              <Label>{t({ en: 'Description (Marathi)', mr: 'वर्णन (मराठी)' })}</Label>
              <Textarea
                value={contentFormData.description?.mr || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  description: { ...contentFormData.description, mr: e.target.value }
                })}
                placeholder="मराठी वर्णन टाका"
              />
            </div>
          </div>
        );

      case 'development':
        return (
          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Title (English)', mr: 'शीर्षक (इंग्रजी)' })}</Label>
              <Input
                value={contentFormData.title?.en || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  title: { ...contentFormData.title, en: e.target.value }
                })}
                placeholder="Enter English title"
              />
            </div>
            <div>
              <Label>{t({ en: 'Title (Marathi)', mr: 'शीर्षक (मराठी)' })}</Label>
              <Input
                value={contentFormData.title?.mr || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  title: { ...contentFormData.title, mr: e.target.value }
                })}
                placeholder="मराठी शीर्षक टाका"
              />
            </div>
            <div>
              <Label>{t({ en: 'Date', mr: 'दिनांक' })}</Label>
              <Input
                value={contentFormData.date || ''}
                onChange={(e) => setContentFormData({ ...contentFormData, date: e.target.value })}
                placeholder="Enter date"
              />
            </div>
            <div>
              <Label>{t({ en: 'Category (English)', mr: 'श्रेणी (इंग्रजी)' })}</Label>
              <Input
                value={contentFormData.category?.en || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  category: { ...contentFormData.category, en: e.target.value }
                })}
                placeholder="Enter English category"
              />
            </div>
            <div>
              <Label>{t({ en: 'Category (Marathi)', mr: 'श्रेणी (मराठी)' })}</Label>
              <Input
                value={contentFormData.category?.mr || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  category: { ...contentFormData.category, mr: e.target.value }
                })}
                placeholder="मराठी श्रेणी टाका"
              />
            </div>
            <div>
              <Label>{t({ en: 'Image URL', mr: 'प्रतिमा URL' })}</Label>
              <Input
                value={contentFormData.image || ''}
                onChange={(e) => setContentFormData({ ...contentFormData, image: e.target.value })}
                placeholder="Enter image URL"
              />
            </div>
          </div>
        );

      case 'achievement':
        return (
          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Title (English)', mr: 'शीर्षक (इंग्रजी)' })}</Label>
              <Input
                value={contentFormData.title?.en || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  title: { ...contentFormData.title, en: e.target.value }
                })}
                placeholder="Enter English title"
              />
            </div>
            <div>
              <Label>{t({ en: 'Title (Marathi)', mr: 'शीर्षक (मराठी)' })}</Label>
              <Input
                value={contentFormData.title?.mr || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  title: { ...contentFormData.title, mr: e.target.value }
                })}
                placeholder="मराठी शीर्षक टाका"
              />
            </div>
            <div>
              <Label>{t({ en: 'Description (English)', mr: 'वर्णन (इंग्रजी)' })}</Label>
              <Textarea
                value={contentFormData.description?.en || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  description: { ...contentFormData.description, en: e.target.value }
                })}
                placeholder="Enter English description"
              />
            </div>
            <div>
              <Label>{t({ en: 'Description (Marathi)', mr: 'वर्णन (मराठी)' })}</Label>
              <Textarea
                value={contentFormData.description?.mr || ''}
                onChange={(e) => setContentFormData({
                  ...contentFormData,
                  description: { ...contentFormData.description, mr: e.target.value }
                })}
                placeholder="मराठी वर्णन टाका"
              />
            </div>
            <div>
              <Label>{t({ en: 'Icon (Emoji)', mr: 'चिन्ह (इमोजी)' })}</Label>
              <Input
                value={contentFormData.icon || ''}
                onChange={(e) => setContentFormData({ ...contentFormData, icon: e.target.value })}
                placeholder="Enter emoji"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold gradient-text">
                {t({ en: 'Admin Dashboard', mr: 'प्रशासन डॅशबोर्ड' })}
              </h1>
              <p className="text-gray-600 mt-1">
                {t({ en: 'Smart Village Portal Management', mr: 'स्मार्ट व्हिलेज पोर्टल व्यवस्थापन' })}
              </p>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="hover-scale"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t({ en: 'Back to Portal', mr: 'पोर्टलवर परत' })}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-7 mb-8 max-w-7xl mx-auto">
            <TabsTrigger value="home-content" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              {t({ en: 'Home Content', mr: 'होम सामग्री' })}
            </TabsTrigger>
            <TabsTrigger value="tax-management" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              {t({ en: 'Tax Management', mr: 'कर व्यवस्थापन' })}
            </TabsTrigger>
            <TabsTrigger value="grievance-management" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              {t({ en: 'Grievances', mr: 'तक्रारी' })}
            </TabsTrigger>
            <TabsTrigger value="villager-management" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {t({ en: 'Villagers', mr: 'गावकरी' })}
            </TabsTrigger>
            <TabsTrigger value="committee-management" className="flex items-center gap-2">
              <UserCheck className="h-4 w-4" />
              {t({ en: 'Committee', mr: 'समिती' })}
            </TabsTrigger>
            <TabsTrigger value="media-management" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              {t({ en: 'Media', mr: 'मीडिया' })}
            </TabsTrigger>
            <TabsTrigger value="news-management" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              {t({ en: 'News', mr: 'बातम्या' })}
            </TabsTrigger>
          </TabsList>

          {/* Home Content Management Tab */}
          <TabsContent value="home-content" className="space-y-6">
            {/* Hero Section */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardHeader>
                <CardTitle>{t({ en: 'Hero Section Management', mr: 'हीरो सेक्शन व्यवस्थापन' })}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>{t({ en: 'Main Image URL', mr: 'मुख्य प्रतिमा URL' })}</Label>
                  <Input
                    value={heroContent.mainImage}
                    onChange={(e) => setHeroContent({ ...heroContent, mainImage: e.target.value })}
                    placeholder="Enter image URL"
                    className="mt-2"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>{t({ en: 'Title (English)', mr: 'शीर्षक (इंग्रजी)' })}</Label>
                    <Input
                      value={heroContent.title.en}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        title: { ...heroContent.title, en: e.target.value }
                      })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>{t({ en: 'Title (Marathi)', mr: 'शीर्षक (मराठी)' })}</Label>
                    <Input
                      value={heroContent.title.mr}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        title: { ...heroContent.title, mr: e.target.value }
                      })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>{t({ en: 'Subtitle (English)', mr: 'उपशीर्षक (इंग्रजी)' })}</Label>
                    <Textarea
                      value={heroContent.subtitle.en}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        subtitle: { ...heroContent.subtitle, en: e.target.value }
                      })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>{t({ en: 'Subtitle (Marathi)', mr: 'उपशीर्षक (मराठी)' })}</Label>
                    <Textarea
                      value={heroContent.subtitle.mr}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        subtitle: { ...heroContent.subtitle, mr: e.target.value }
                      })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Save className="h-4 w-4 mr-2" />
                  {t({ en: 'Save Changes', mr: 'बदल जतन करा' })}
                </Button>
              </CardContent>
            </Card>

            {/* Village Statistics */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{t({ en: 'Village Statistics', mr: 'गावातील आकडेवारी' })}</CardTitle>
                  <Button onClick={() => handleContentAdd('statistic')} className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    {t({ en: 'Add Statistic', mr: 'आकडेवारी जोडा' })}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {statistics.map((stat) => (
                    <Card key={stat.id} className="border-0 shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{t(stat.label)}</h3>
                            <p className="text-2xl font-bold text-blue-600 mt-2">{stat.value}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleContentEdit(stat, 'statistic')}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleContentDelete(stat.id, 'statistic')}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Village Facilities */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{t({ en: 'Smart Village Facilities', mr: 'स्मार्ट गावातील सुविधा' })}</CardTitle>
                  <Button onClick={() => handleContentAdd('facility')} className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    {t({ en: 'Add Facility', mr: 'सुविधा जोडा' })}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {facilities.map((facility) => (
                    <Card key={facility.id} className="border-0 shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{t(facility.name)}</h3>
                            <p className="text-gray-600 mt-2">{t(facility.description)}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleContentEdit(facility, 'facility')}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleContentDelete(facility.id, 'facility')}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Latest Developments */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{t({ en: 'Latest Developments', mr: 'अलीकडील विकास' })}</CardTitle>
                  <Button onClick={() => handleContentAdd('development')} className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    {t({ en: 'Add Update', mr: 'बातमी जोडा' })}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {developments.map((dev) => (
                    <Card key={dev.id} className="border-0 shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{t(dev.title)}</h3>
                            <p className="text-gray-600 mt-2">{t(dev.category)} • {dev.date}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleContentEdit(dev, 'development')}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleContentDelete(dev.id, 'development')}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Village Achievements */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{t({ en: 'Village Achievements', mr: 'गावातील उपलब्धी' })}</CardTitle>
                  <Button onClick={() => handleContentAdd('achievement')} className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    {t({ en: 'Add Achievement', mr: 'उपलब्धी जोडा' })}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id} className="border-0 shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="text-3xl mb-2">{achievement.icon}</div>
                            <h3 className="font-bold text-lg">{t(achievement.title)}</h3>
                            <p className="text-gray-600 mt-2">{t(achievement.description)}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleContentEdit(achievement, 'achievement')}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleContentDelete(achievement.id, 'achievement')}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Footer Content */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardHeader>
                <CardTitle>{t({ en: 'Footer Content', mr: 'फूटर सामग्री' })}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>{t({ en: 'Address (English)', mr: 'पत्ता (इंग्रजी)' })}</Label>
                    <Textarea
                      value={footerContent.address.en}
                      onChange={(e) => setFooterContent({
                        ...footerContent,
                        address: { ...footerContent.address, en: e.target.value }
                      })}
                      placeholder="Enter English address"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>{t({ en: 'Address (Marathi)', mr: 'पत्ता (मराठी)' })}</Label>
                    <Textarea
                      value={footerContent.address.mr}
                      onChange={(e) => setFooterContent({
                        ...footerContent,
                        address: { ...footerContent.address, mr: e.target.value }
                      })}
                      placeholder="मराठी पत्ता टाका"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>{t({ en: 'Phone Number', mr: 'फोन नंबर' })}</Label>
                    <Input
                      value={footerContent.phone}
                      onChange={(e) => setFooterContent({ ...footerContent, phone: e.target.value })}
                      placeholder="Enter phone number"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>{t({ en: 'Email Address', mr: 'ईमेल पत्ता' })}</Label>
                    <Input
                      value={footerContent.email}
                      onChange={(e) => setFooterContent({ ...footerContent, email: e.target.value })}
                      placeholder="Enter email address"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label>{t({ en: 'Office Hours (English)', mr: 'कार्यालयीन वेळा (इंग्रजी)' })}</Label>
                    <Textarea
                      value={footerContent.officeHours.en}
                      onChange={(e) => setFooterContent({
                        ...footerContent,
                        officeHours: { ...footerContent.officeHours, en: e.target.value }
                      })}
                      placeholder="Enter English office hours"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label>{t({ en: 'Office Hours (Marathi)', mr: 'कार्यालयीन वेळा (मराठी)' })}</Label>
                    <Textarea
                      value={footerContent.officeHours.mr}
                      onChange={(e) => setFooterContent({
                        ...footerContent,
                        officeHours: { ...footerContent.officeHours, mr: e.target.value }
                      })}
                      placeholder="मराठी कार्यालयीन वेळा टाका"
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Save className="h-4 w-4 mr-2" />
                  {t({ en: 'Save Footer Changes', mr: 'फूटर बदल जतन करा' })}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tax Management Tab */}
          <TabsContent value="tax-management" className="space-y-6">
            {/* Tax Management Header */}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold">{t({ en: 'Tax Management', mr: 'कर व्यवस्थापन' })}</h2>
                <p className="text-gray-600">{t({ en: 'Central hub for managing all village tax records', mr: 'सर्व गावातील कर नोंदी व्यवस्थापित करण्यासाठी केंद्रीय केंद्र' })}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsUploadDialogOpen(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {t({ en: 'Upload Tax Records', mr: 'कर नोंदी अपलोड करा' })}
                </Button>
                <Button 
                  onClick={() => setIsAddRecordDialogOpen(true)}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t({ en: 'Add New Record', mr: 'नवीन नोंद जोडा' })}
                </Button>
              </div>
            </div>

            {/* Search and Filter Controls */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder={t({ en: 'Search by House Number or Owner Name...', mr: 'घर नंबर किंवा मालकाचे नाव शोधा...' })}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-40">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Status', mr: 'सर्व स्थिती' })}</SelectItem>
                        <SelectItem value="Pending">{t({ en: 'Pending', mr: 'प्रलंबित' })}</SelectItem>
                        <SelectItem value="Paid">{t({ en: 'Paid', mr: 'भरलेले' })}</SelectItem>
                        <SelectItem value="Overdue">{t({ en: 'Overdue', mr: 'मुदतीनंतर' })}</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={taxTypeFilter} onValueChange={setTaxTypeFilter}>
                      <SelectTrigger className="w-44">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Tax Types', mr: 'सर्व कर प्रकार' })}</SelectItem>
                        <SelectItem value="Property Tax">{t({ en: 'Property Tax', mr: 'मालमत्ता कर' })}</SelectItem>
                        <SelectItem value="Water Tax">{t({ en: 'Water Tax', mr: 'पाणी कर' })}</SelectItem>
                        <SelectItem value="Trade License">{t({ en: 'Trade License', mr: 'व्यापार परवाना' })}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Records Table */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">{t({ en: 'House Number', mr: 'घर नंबर' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Owner Name', mr: 'मालकाचे नाव' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Tax Type', mr: 'कर प्रकार' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Amount Due', mr: 'थकबाकी' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Status', mr: 'स्थिती' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Due Date', mr: 'देय दिनांक' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Actions', mr: 'कृती' })}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedRecords.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                            {t({ en: 'No tax records found', mr: 'कर नोंदी सापडल्या नाहीत' })}
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedRecords.map((record) => (
                          <TableRow key={record.id} className="hover:bg-gray-50">
                            <TableCell className="font-medium">{record.houseNumber}</TableCell>
                            <TableCell>{record.ownerName}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                                {record.taxType}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-medium">₹{record.amountDue.toLocaleString()}</TableCell>
                            <TableCell>{getStatusBadge(record.status)}</TableCell>
                            <TableCell>{record.dueDate}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedRecord(record);
                                    setIsEditDialogOpen(true);
                                  }}
                                  className="hover:bg-blue-50"
                                >
                                  <Edit className="h-3 w-3" />
                                </Button>
                                
                                {record.status === 'Pending' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleMarkAsPaid(record)}
                                    className="hover:bg-green-50 text-green-600 border-green-200"
                                  >
                                    <CheckCircle className="h-3 w-3" />
                                  </Button>
                                )}
                                
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleDeleteRecord(record)}
                                  className="hover:bg-red-50 text-red-600 border-red-200"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between px-6 py-4 border-t">
                    <div className="text-sm text-gray-600">
                      {t({ en: `Showing ${startIndex + 1}-${Math.min(startIndex + recordsPerPage, filteredRecords.length)} of ${filteredRecords.length} records`, mr: `${filteredRecords.length} पैकी ${startIndex + 1}-${Math.min(startIndex + recordsPerPage, filteredRecords.length)} नोंदी दाखवत आहे` })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-medium">
                        {currentPage} / {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Grievance Management Tab */}
          <TabsContent value="grievance-management" className="space-y-6">
            {/* Grievance Management Header */}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold">{t({ en: 'Grievance Management', mr: 'तक्रार व्यवस्थापन' })}</h2>
                <p className="text-gray-600">{t({ en: 'Manage all village grievances and worker assignments', mr: 'सर्व गावातील तक्रारी आणि कामगार नियुक्ती व्यवस्थापित करा' })}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsWorkerManagementOpen(true)}
                  className="bg-purple-500 hover:bg-purple-600 text-white"
                >
                  <UserCheck className="h-4 w-4 mr-2" />
                  {t({ en: 'Manage Workers', mr: 'कामगार व्यवस्थापन' })}
                </Button>
              </div>
            </div>

            {/* Grievance Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{grievances.filter(g => g.adminStatus === 'unapproved').length}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Pending Approval', mr: 'मंजुरीची प्रतीक्षा' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{grievances.filter(g => g.status === 'in-progress').length}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'In Progress', mr: 'सुरू आहे' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{grievances.filter(g => g.status === 'resolved').length}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Resolved', mr: 'निराकरण झाले' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{workers.filter(w => w.status === 'active').length}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Active Workers', mr: 'सक्रिय कामगार' })}</div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter Controls */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder={t({ en: 'Search by ID, title, or submitter name...', mr: 'आयडी, शीर्षक, किंवा सबमिटर नावाने शोधा...' })}
                        value={grievanceSearchTerm}
                        onChange={(e) => setGrievanceSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={grievanceAdminStatusFilter} onValueChange={setGrievanceAdminStatusFilter}>
                      <SelectTrigger className="w-40">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Status', mr: 'सर्व स्थिती' })}</SelectItem>
                        <SelectItem value="unapproved">{t({ en: 'Unapproved', mr: 'अनुज्ञापित नाही' })}</SelectItem>
                        <SelectItem value="approved">{t({ en: 'Approved', mr: 'मंजूर' })}</SelectItem>
                        <SelectItem value="rejected">{t({ en: 'Rejected', mr: 'नाकारले' })}</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={grievanceStatusFilter} onValueChange={setGrievanceStatusFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Progress', mr: 'सर्व प्रगती' })}</SelectItem>
                        <SelectItem value="pending">{t({ en: 'Pending', mr: 'प्रलंबित' })}</SelectItem>
                        <SelectItem value="in-progress">{t({ en: 'In Progress', mr: 'सुरू आहे' })}</SelectItem>
                        <SelectItem value="resolved">{t({ en: 'Resolved', mr: 'निराकरण झाले' })}</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={grievanceCategoryFilter} onValueChange={setGrievanceCategoryFilter}>
                      <SelectTrigger className="w-44">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Categories', mr: 'सर्व श्रेणी' })}</SelectItem>
                        <SelectItem value="Infrastructure">{t({ en: 'Infrastructure', mr: 'पायाभूत सुविधा' })}</SelectItem>
                        <SelectItem value="Water">{t({ en: 'Water', mr: 'पाणी' })}</SelectItem>
                        <SelectItem value="Roads">{t({ en: 'Roads', mr: 'रस्ते' })}</SelectItem>
                        <SelectItem value="Electricity">{t({ en: 'Electricity', mr: 'वीज' })}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grievances Table */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">{t({ en: 'ID', mr: 'आयडी' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Title', mr: 'शीर्षक' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Submitted By', mr: 'सबमिट केले' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Category', mr: 'श्रेणी' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Priority', mr: 'प्राधान्यता' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Admin Status', mr: 'प्रशासन स्थिती' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Progress', mr: 'प्रगती' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Worker', mr: 'कामगार' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Actions', mr: 'कृती' })}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedGrievances.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                            {t({ en: 'No grievances found', mr: 'तक्रारी सापडल्या नाहीत' })}
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedGrievances.map((grievance) => (
                          <TableRow key={grievance.id} className="hover:bg-gray-50">
                            <TableCell className="font-medium">{grievance.id}</TableCell>
                            <TableCell className="max-w-48">
                              <div className="truncate font-medium">{grievance.title}</div>
                              <div className="text-xs text-gray-500">{grievance.submissionDate}</div>
                            </TableCell>
                            <TableCell>
                              <div className="font-medium">{grievance.submittedBy}</div>
                              <div className="text-xs text-gray-500">{grievance.mobile}</div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                                {grievance.category}
                              </Badge>
                            </TableCell>
                            <TableCell>{getPriorityBadge(grievance.priority)}</TableCell>
                            <TableCell>{getAdminStatusBadge(grievance.adminStatus)}</TableCell>
                            <TableCell>{getGrievanceStatusBadge(grievance.status)}</TableCell>
                            <TableCell>
                              {grievance.assignedWorker ? (
                                <div className="text-sm">
                                  <div className="font-medium">{workers.find(w => w.id === grievance.assignedWorker)?.name}</div>
                                  <div className="text-xs text-gray-500">{workers.find(w => w.id === grievance.assignedWorker)?.department}</div>
                                </div>
                              ) : (
                                <span className="text-gray-400 text-sm">{t({ en: 'Unassigned', mr: 'नियुक्त नाही' })}</span>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedGrievance(grievance);
                                    setIsGrievanceDetailOpen(true);
                                  }}
                                  className="hover:bg-blue-50"
                                >
                                  <Eye className="h-3 w-3" />
                                </Button>
                                
                                {grievance.adminStatus === 'unapproved' && (
                                  <>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleApproveGrievance(grievance)}
                                      className="hover:bg-green-50 text-green-600 border-green-200"
                                    >
                                      <CheckCircle className="h-3 w-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleRejectGrievance(grievance)}
                                      className="hover:bg-red-50 text-red-600 border-red-200"
                                    >
                                      <XCircle className="h-3 w-3" />
                                    </Button>
                                  </>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalGrievancePages > 1 && (
                  <div className="flex items-center justify-between px-6 py-4 border-t">
                    <div className="text-sm text-gray-600">
                      {t({ en: `Showing ${grievanceStartIndex + 1}-${Math.min(grievanceStartIndex + grievancesPerPage, filteredGrievances.length)} of ${filteredGrievances.length} grievances`, mr: `${filteredGrievances.length} पैकी ${grievanceStartIndex + 1}-${Math.min(grievanceStartIndex + grievancesPerPage, filteredGrievances.length)} तक्रारी दाखवत आहे` })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setGrievanceCurrentPage(grievanceCurrentPage - 1)}
                        disabled={grievanceCurrentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-medium">
                        {grievanceCurrentPage} / {totalGrievancePages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setGrievanceCurrentPage(grievanceCurrentPage + 1)}
                        disabled={grievanceCurrentPage === totalGrievancePages}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Villager Management Tab */}
          <TabsContent value="villager-management" className="space-y-6">
            {/* Villager Management Header */}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold">{t({ en: 'Villager Management', mr: 'गावकरी व्यवस्थापन' })}</h2>
                <p className="text-gray-600">{t({ en: 'Manage all villager registrations and data', mr: 'सर्व गावकरी नोंदणी आणि डेटा व्यवस्थापित करा' })}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsAddVillagerOpen(true)}
                  className="bg-villager hover:bg-villager/90 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t({ en: 'Add Villager', mr: 'गावकरी जोडा' })}
                </Button>
                <Button 
                  onClick={exportVillagersToCSV}
                  variant="outline"
                  className="border-villager text-villager hover:bg-villager hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t({ en: 'Export CSV', mr: 'CSV एक्सपोर्ट' })}
                </Button>
              </div>
            </div>

            {/* Villager Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-villager">{villagerStats.total}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Total Approved', mr: 'एकूण मंजूर' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{villagerStats.pending}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Pending', mr: 'प्रलंबित' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{villagerStats.male}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Male', mr: 'पुरुष' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-pink-600">{villagerStats.female}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Female', mr: 'महिला' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{villagerStats.other}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Other', mr: 'इतर' })}</div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter Controls */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder={t({ en: 'Search by name, mobile, ID, or Aadhar...', mr: 'नाव, मोबाइल, आयडी, किंवा आधाराने शोधा...' })}
                        value={villagerSearchTerm}
                        onChange={(e) => setVillagerSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={villagerStatusFilter} onValueChange={setVillagerStatusFilter}>
                      <SelectTrigger className="w-40">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Status', mr: 'सर्व स्थिती' })}</SelectItem>
                        <SelectItem value="pending">{t({ en: 'Pending', mr: 'प्रलंबित' })}</SelectItem>
                        <SelectItem value="approved">{t({ en: 'Approved', mr: 'मंजूर' })}</SelectItem>
                        <SelectItem value="rejected">{t({ en: 'Rejected', mr: 'नाकारले' })}</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={villagerRequestTypeFilter} onValueChange={setVillagerRequestTypeFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Types', mr: 'सर्व प्रकार' })}</SelectItem>
                        <SelectItem value="registration">{t({ en: 'Registration', mr: 'नोंदणी' })}</SelectItem>
                        <SelectItem value="edit">{t({ en: 'Edit Request', mr: 'संपादन विनंती' })}</SelectItem>
                        <SelectItem value="manual">{t({ en: 'Manual Entry', mr: 'मॅन्युअल एंट्री' })}</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={villagerGenderFilter} onValueChange={setVillagerGenderFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Gender', mr: 'सर्व लिंग' })}</SelectItem>
                        <SelectItem value="male">{t({ en: 'Male', mr: 'पुरुष' })}</SelectItem>
                        <SelectItem value="female">{t({ en: 'Female', mr: 'महिला' })}</SelectItem>
                        <SelectItem value="other">{t({ en: 'Other', mr: 'इतर' })}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Villagers Table */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">{t({ en: 'ID', mr: 'आयडी' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Name', mr: 'नाव' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Mobile', mr: 'मोबाइल' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Gender', mr: 'लिंग' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Aadhar', mr: 'आधार' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Status', mr: 'स्थिती' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Request Type', mr: 'विनंती प्रकार' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Submission Date', mr: 'सबमिशन दिनांक' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Actions', mr: 'कृती' })}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedVillagers.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                            {t({ en: 'No villagers found', mr: 'गावकरी सापडले नाहीत' })}
                          </TableCell>
                        </TableRow>
                      ) : (
                        paginatedVillagers.map((villager) => (
                          <TableRow key={villager.id} className="hover:bg-gray-50">
                            <TableCell className="font-medium">{villager.id}</TableCell>
                            <TableCell>
                              <div className="font-medium">{villager.fullName}</div>
                              <div className="text-xs text-gray-500">{villager.address}</div>
                            </TableCell>
                            <TableCell>{villager.mobile}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={
                                villager.gender === 'male' ? 'bg-blue-50 text-blue-700' :
                                villager.gender === 'female' ? 'bg-pink-50 text-pink-700' :
                                'bg-purple-50 text-purple-700'
                              }>
                                {t({ 
                                  en: villager.gender, 
                                  mr: villager.gender === 'male' ? 'पुरुष' : villager.gender === 'female' ? 'महिला' : 'इतर' 
                                })}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-mono text-sm">{villager.aadharNumber}</TableCell>
                            <TableCell>{getVillagerStatusBadge(villager.status)}</TableCell>
                            <TableCell>{getRequestTypeBadge(villager.requestType)}</TableCell>
                            <TableCell>{villager.submissionDate}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedVillager(villager);
                                    setIsVillagerDetailOpen(true);
                                  }}
                                  className="hover:bg-blue-50"
                                >
                                  <Eye className="h-3 w-3" />
                                </Button>
                                
                                {villager.status === 'pending' && (
                                  <>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleApproveVillager(villager)}
                                      className="hover:bg-green-50 text-green-600 border-green-200"
                                    >
                                      <CheckCircle className="h-3 w-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleRejectVillager(villager)}
                                      className="hover:bg-red-50 text-red-600 border-red-200"
                                    >
                                      <XCircle className="h-3 w-3" />
                                    </Button>
                                  </>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalVillagerPages > 1 && (
                  <div className="flex items-center justify-between px-6 py-4 border-t">
                    <div className="text-sm text-gray-600">
                      {t({ en: `Showing ${villagerStartIndex + 1}-${Math.min(villagerStartIndex + villagersPerPage, filteredVillagers.length)} of ${filteredVillagers.length} villagers`, mr: `${filteredVillagers.length} पैकी ${villagerStartIndex + 1}-${Math.min(villagerStartIndex + villagersPerPage, filteredVillagers.length)} गावकरी दाखवत आहे` })}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setVillagerCurrentPage(villagerCurrentPage - 1)}
                        disabled={villagerCurrentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm font-medium">
                        {villagerCurrentPage} / {totalVillagerPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setVillagerCurrentPage(villagerCurrentPage + 1)}
                        disabled={villagerCurrentPage === totalVillagerPages}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Committee Management Tab */}
          <TabsContent value="committee-management" className="space-y-6">
            {/* Committee Management Header */}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold">{t({ en: 'Committee Management', mr: 'समिती व्यवस्थापन' })}</h2>
                <p className="text-gray-600">{t({ en: 'Manage committee members, departments, and office information', mr: 'समिती सदस्य, विभाग आणि कार्यालयीन माहिती व्यवस्थापित करा' })}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsAddCommitteeMemberOpen(true)}
                  className="bg-committee hover:bg-committee/90 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t({ en: 'Add Member', mr: 'सदस्य जोडा' })}
                </Button>
                <Button 
                  onClick={exportCommitteeToCSV}
                  variant="outline"
                  className="border-purple-500 text-purple-600 hover:bg-purple-50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t({ en: 'Export CSV', mr: 'CSV एक्सपोर्ट' })}
                </Button>
              </div>
            </div>

            {/* Committee Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{committeeMembers.filter(m => m.isActive).length}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Active Members', mr: 'सक्रिय सदस्य' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{departments.filter(d => d.isActive).length}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Departments', mr: 'विभाग' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{committeeMembers.filter(m => m.ward && m.ward.includes('Ward')).length}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Ward Members', mr: 'वार्ड सदस्य' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{committeeMembers.filter(m => m.position.en.includes('Sarpanch') || m.position.en.includes('Secretary')).length}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Key Positions', mr: 'मुख्य पदे' })}</div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-0 shadow-lg glass-effect cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setIsDepartmentManagementOpen(true)}>
                <CardContent className="p-6 text-center">
                  <Settings className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold mb-2">{t({ en: 'Manage Departments', mr: 'विभाग व्यवस्थापन' })}</h3>
                  <p className="text-sm text-gray-600">{t({ en: 'Add, edit, or remove departments', mr: 'विभाग जोडा, संपादित करा किंवा काढा' })}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg glass-effect cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setIsOfficeInfoEditOpen(true)}>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-3 text-green-600" />
                  <h3 className="font-bold mb-2">{t({ en: 'Office Information', mr: 'कार्यालयीन माहिती' })}</h3>
                  <p className="text-sm text-gray-600">{t({ en: 'Update contact details and hours', mr: 'संपर्क तपशील आणि वेळा अद्ययावत करा' })}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-3 text-purple-600" />
                  <h3 className="font-bold mb-2">{t({ en: 'Office Hours', mr: 'कार्यालयीन वेळा' })}</h3>
                  <p className="text-sm text-gray-600">{t({ en: 'Monday - Saturday: 9 AM - 5 PM', mr: 'सोमवार - शनिवार: ९ AM - ५ PM' })}</p>
                </CardContent>
              </Card>
            </div>

            {/* Committee Members Table */}
            <Card className="border-0 shadow-xl glass-effect">
              <CardHeader>
                <CardTitle>{t({ en: 'Committee Members', mr: 'समिती सदस्य' })}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">{t({ en: 'Name', mr: 'नाव' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Position', mr: 'पद' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Ward/Department', mr: 'वार्ड/विभाग' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Contact', mr: 'संपर्क' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Term', mr: 'मुदत' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Status', mr: 'स्थिती' })}</TableHead>
                        <TableHead className="font-semibold">{t({ en: 'Actions', mr: 'कृती' })}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {committeeMembers.map((member) => (
                        <TableRow key={member.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center text-white font-bold`}>
                                {member.name.en.charAt(0)}
                              </div>
                              <div>
                                <div className="font-medium">{member.name.en}</div>
                                <div className="text-xs text-gray-500">{member.name.mr}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{member.position.en}</div>
                            <div className="text-xs text-gray-500">{member.position.mr}</div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              {member.ward}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{member.phone}</div>
                              <div className="text-xs text-gray-500">{member.email}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {member.joinDate && (
                                <>
                                  <div>From: {member.joinDate}</div>
                                  <div className="text-xs text-gray-500">Until: {member.termEnd}</div>
                                </>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={member.isActive ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                              {member.isActive ? 'Active' : 'Inactive'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setSelectedCommitteeMember(member);
                                  setIsCommitteeMemberDetailOpen(true);
                                }}
                                className="hover:bg-blue-50"
                              >
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setSelectedCommitteeMember({ ...member });
                                  setIsEditCommitteeMemberOpen(true);
                                }}
                                className="hover:bg-green-50 text-green-600 border-green-200"
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteCommitteeMember(member)}
                                className="hover:bg-red-50 text-red-600 border-red-200"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Management Tab */}
          <TabsContent value="media-management" className="space-y-6">
            {/* Media Management Header */}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold">{t({ en: 'Media Management', mr: 'मीडिया व्यवस्थापन' })}</h2>
                <p className="text-gray-600">{t({ en: 'Manage photos, videos, and media categories', mr: 'फोटो, व्हिडिओ आणि मीडिया श्रेणी व्यवस्थापित करा' })}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsAddMediaOpen(true)}
                  className="bg-media hover:bg-media/90 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t({ en: 'Add Media', mr: 'मीडिया जोडा' })}
                </Button>
                <Button 
                  onClick={exportMediaToCSV}
                  variant="outline"
                  className="border-pink-500 text-pink-600 hover:bg-pink-50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t({ en: 'Export CSV', mr: 'CSV एक्सपोर्ट' })}
                </Button>
              </div>
            </div>

            {/* Media Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-pink-600">{mediaStats.total}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Total Items', mr: 'एकूण आयटम' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{mediaStats.photos}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Photos', mr: 'फोटो' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{mediaStats.videos}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Videos', mr: 'व्हिडिओ' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{mediaStats.featured}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Featured', mr: 'फीचर्ड' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{mediaStats.active}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Active', mr: 'सक्रिय' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600">{mediaStats.totalViews}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Total Views', mr: 'एकूण दृश्ये' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{mediaStats.totalLikes}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Total Likes', mr: 'एकूण लाईक' })}</div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg glass-effect cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setIsCategoryManagementOpen(true)}>
                <CardContent className="p-6 text-center">
                  <Tag className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold mb-2">{t({ en: 'Manage Categories', mr: 'श्रेणी व्यवस्थापन' })}</h3>
                  <p className="text-sm text-gray-600">{t({ en: 'Add, edit, or remove media categories', mr: 'मीडिया श्रेणी जोडा, संपादित करा किंवा काढा' })}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-6 text-center">
                  <Image className="h-12 w-12 mx-auto mb-3 text-green-600" />
                  <h3 className="font-bold mb-2">{t({ en: 'Storage Info', mr: 'स्टोरेज माहिती' })}</h3>
                  <p className="text-sm text-gray-600">{t({ en: 'Total: 2.5 GB / Used: 1.2 GB', mr: 'एकूण: २.५ GB / वापरलेले: १.२ GB' })}</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter Controls */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder={t({ en: 'Search by title, tags...', mr: 'शीर्षक, टॅगने शोधा...' })}
                        value={mediaSearchTerm}
                        onChange={(e) => setMediaSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={mediaTypeFilter} onValueChange={setMediaTypeFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Types', mr: 'सर्व प्रकार' })}</SelectItem>
                        <SelectItem value="photo">{t({ en: 'Photos', mr: 'फोटो' })}</SelectItem>
                        <SelectItem value="video">{t({ en: 'Videos', mr: 'व्हिडिओ' })}</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={mediaCategoryFilter} onValueChange={setMediaCategoryFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Categories', mr: 'सर्व श्रेणी' })}</SelectItem>
                        {mediaCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {t(category.label)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={mediaStatusFilter} onValueChange={setMediaStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Status', mr: 'सर्व स्थिती' })}</SelectItem>
                        <SelectItem value="Active">{t({ en: 'Active', mr: 'सक्रिय' })}</SelectItem>
                        <SelectItem value="Inactive">{t({ en: 'Inactive', mr: 'निष्क्रिय' })}</SelectItem>
                        <SelectItem value="Featured">{t({ en: 'Featured', mr: 'फीचर्ड' })}</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      variant={mediaViewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setMediaViewMode('grid')}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={mediaViewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setMediaViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Media Gallery */}
            {mediaViewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedMedia.map((media) => (
                  <Card key={media.id} className="border-0 shadow-lg glass-effect overflow-hidden group hover:shadow-xl transition-all">
                    <div className="relative">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={media.thumbnail} 
                          alt={media.title.en}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {media.type === 'video' && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        )}
                        <div className="absolute top-2 left-2 flex gap-1">
                          <Badge className={media.type === 'photo' ? 'bg-blue-500' : 'bg-purple-500'}>
                            {media.type === 'photo' ? (
                              <Camera className="h-3 w-3 mr-1" />
                            ) : (
                              <Video className="h-3 w-3 mr-1" />
                            )}
                            {media.type}
                          </Badge>
                          {media.isFeatured && (
                            <Badge className="bg-orange-500">
                              <Star className="h-3 w-3" />
                            </Badge>
                          )}
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0"
                            onClick={() => handleToggleFeatured(media)}
                          >
                            <Star className={`h-3 w-3 ${media.isFeatured ? 'fill-current text-yellow-500' : ''}`} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-1 line-clamp-1">{media.title.en}</h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{media.description.en}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{media.date}</span>
                        <Badge variant="outline" className={
                          mediaCategories.find(cat => cat.id === media.category)?.id === 'festivals' ? 'bg-purple-50 text-purple-700' :
                          mediaCategories.find(cat => cat.id === media.category)?.id === 'development' ? 'bg-green-50 text-green-700' :
                          'bg-gray-50 text-gray-700'
                        }>
                          {t(mediaCategories.find(cat => cat.id === media.category)?.label || { en: '', mr: '' })}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {media.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {media.likes}
                          </span>
                        </div>
                        <span>{media.fileSize}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedMedia(media);
                            setIsMediaDetailOpen(true);
                          }}
                          className="flex-1 hover:bg-blue-50"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          {t({ en: 'View', mr: 'पहा' })}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedMedia({ ...media });
                            setIsEditMediaOpen(true);
                          }}
                          className="hover:bg-green-50 text-green-600 border-green-200"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleToggleMediaStatus(media)}
                          className={`${media.isActive ? 'hover:bg-orange-50 text-orange-600 border-orange-200' : 'hover:bg-green-50 text-green-600 border-green-200'}`}
                        >
                          {media.isActive ? <XCircle className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteMedia(media)}
                          className="hover:bg-red-50 text-red-600 border-red-200"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-xl glass-effect">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-semibold">{t({ en: 'Media', mr: 'मीडिया' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Title', mr: 'शीर्षक' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Type', mr: 'प्रकार' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Category', mr: 'श्रेणी' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Date', mr: 'तारीख' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Stats', mr: 'आकडेवारी' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Status', mr: 'स्थिती' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Actions', mr: 'कृती' })}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedMedia.map((media) => (
                          <TableRow key={media.id} className="hover:bg-gray-50">
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-16 h-12 relative rounded overflow-hidden">
                                  <img 
                                    src={media.thumbnail} 
                                    alt={media.title.en}
                                    className="w-full h-full object-cover"
                                  />
                                  {media.type === 'video' && (
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                      <Play className="h-3 w-3 text-white" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{media.title.en}</div>
                                <div className="text-xs text-gray-500">{media.title.mr}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={media.type === 'photo' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}>
                                {media.type === 'photo' ? (
                                  <Camera className="h-3 w-3 mr-1" />
                                ) : (
                                  <Video className="h-3 w-3 mr-1" />
                                )}
                                {media.type}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {t(mediaCategories.find(cat => cat.id === media.category)?.label || { en: '', mr: '' })}
                              </Badge>
                            </TableCell>
                            <TableCell>{media.date}</TableCell>
                            <TableCell>
                              <div className="text-sm">
                                <div className="flex items-center gap-2">
                                  <Eye className="h-3 w-3" />
                                  {media.views}
                                  <Heart className="h-3 w-3 ml-2" />
                                  {media.likes}
                                </div>
                                <div className="text-xs text-gray-500">{media.fileSize}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Badge className={media.isActive ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                                  {media.isActive ? 'Active' : 'Inactive'}
                                </Badge>
                                {media.isFeatured && (
                                  <Badge className="bg-orange-500 text-white">
                                    Featured
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedMedia(media);
                                    setIsMediaDetailOpen(true);
                                  }}
                                  className="hover:bg-blue-50"
                                >
                                  <Eye className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedMedia({ ...media });
                                    setIsEditMediaOpen(true);
                                  }}
                                  className="hover:bg-green-50 text-green-600 border-green-200"
                                >
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleDeleteMedia(media)}
                                  className="hover:bg-red-50 text-red-600 border-red-200"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Pagination */}
                  {totalMediaPages > 1 && (
                    <div className="flex items-center justify-between px-6 py-4 border-t">
                      <div className="text-sm text-gray-600">
                        {t({ en: `Showing ${mediaStartIndex + 1}-${Math.min(mediaStartIndex + mediaPerPage, filteredMedia.length)} of ${filteredMedia.length} items`, mr: `${filteredMedia.length} पैकी ${mediaStartIndex + 1}-${Math.min(mediaStartIndex + mediaPerPage, filteredMedia.length)} आयटम दाखवत आहे` })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setMediaCurrentPage(mediaCurrentPage - 1)}
                          disabled={mediaCurrentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium">
                          {mediaCurrentPage} / {totalMediaPages}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setMediaCurrentPage(mediaCurrentPage + 1)}
                          disabled={mediaCurrentPage === totalMediaPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* News Management Tab */}
          <TabsContent value="news-management" className="space-y-6">
            {/* News Management Header */}
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-bold">{t({ en: 'News Management', mr: 'बातम्या व्यवस्थापन' })}</h2>
                <p className="text-gray-600">{t({ en: 'Manage village news, announcements, alerts and events', mr: 'गावातील बातम्या, घोषणा, सूचना आणि कार्यक्रम व्यवस्थापित करा' })}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsAddNewsOpen(true)}
                  className="bg-news hover:bg-news/90 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t({ en: 'Add News', mr: 'बातमी जोडा' })}
                </Button>
                <Button 
                  onClick={exportNewsToCSV}
                  variant="outline"
                  className="border-indigo-500 text-indigo-600 hover:bg-indigo-50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t({ en: 'Export CSV', mr: 'CSV एक्सपोर्ट' })}
                </Button>
              </div>
            </div>

            {/* News Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-600">{newsStats.total}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Total News', mr: 'एकूण बातम्या' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{newsStats.published}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Published', mr: 'प्रकाशित' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-gray-600">{newsStats.draft}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Draft', mr: 'मसुदा' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{newsStats.featured}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Featured', mr: 'फीचर्ड' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{newsStats.breaking}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Breaking', mr: 'तातडीची' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">{newsStats.highPriority}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'High Priority', mr: 'उच्च प्राधान्य' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">{newsStats.totalReads}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Total Reads', mr: 'एकूण वाचन' })}</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{newsStats.events}</div>
                  <div className="text-sm text-gray-600">{t({ en: 'Active Events', mr: 'सक्रिय कार्यक्रम' })}</div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-0 shadow-lg glass-effect cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setIsEventManagementOpen(true)}>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-bold mb-2">{t({ en: 'Manage Events', mr: 'कार्यक्रम व्यवस्थापन' })}</h3>
                  <p className="text-sm text-gray-600">{t({ en: 'Add, edit, or remove upcoming events', mr: 'आगामी कार्यक्रम जोडा, संपादित करा किंवा काढा' })}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg glass-effect cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setIsNewsCategoryManagementOpen(true)}>
                <CardContent className="p-6 text-center">
                  <Tag className="h-12 w-12 mx-auto mb-3 text-green-600" />
                  <h3 className="font-bold mb-2">{t({ en: 'News Categories', mr: 'बातम्या श्रेणी' })}</h3>
                  <p className="text-sm text-gray-600">{t({ en: 'Manage news categories and types', mr: 'बातम्या श्रेणी आणि प्रकार व्यवस्थापित करा' })}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg glass-effect">
                <CardContent className="p-6 text-center">
                  <Bell className="h-12 w-12 mx-auto mb-3 text-orange-600" />
                  <h3 className="font-bold mb-2">{t({ en: 'Notification Settings', mr: 'सूचना सेटिंग्ज' })}</h3>
                  <p className="text-sm text-gray-600">{t({ en: 'Configure notification preferences', mr: 'सूचना प्राथमिकता कॉन्फिगर करा' })}</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter Controls */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder={t({ en: 'Search by title, content, tags...', mr: 'शीर्षक, सामग्री, टॅगने शोधा...' })}
                        value={newsSearchTerm}
                        onChange={(e) => setNewsSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={newsCategoryFilter} onValueChange={setNewsCategoryFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Categories', mr: 'सर्व श्रेणी' })}</SelectItem>
                        {newsCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {t(category.label)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Select value={newsPriorityFilter} onValueChange={setNewsPriorityFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Priority', mr: 'सर्व प्राधान्य' })}</SelectItem>
                        <SelectItem value="high">{t({ en: 'High', mr: 'उच्च' })}</SelectItem>
                        <SelectItem value="medium">{t({ en: 'Medium', mr: 'मध्यम' })}</SelectItem>
                        <SelectItem value="low">{t({ en: 'Low', mr: 'कमी' })}</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={newsStatusFilter} onValueChange={setNewsStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">{t({ en: 'All Status', mr: 'सर्व स्थिती' })}</SelectItem>
                        <SelectItem value="Published">{t({ en: 'Published', mr: 'प्रकाशित' })}</SelectItem>
                        <SelectItem value="Draft">{t({ en: 'Draft', mr: 'मसुदा' })}</SelectItem>
                        <SelectItem value="Featured">{t({ en: 'Featured', mr: 'फीचर्ड' })}</SelectItem>
                        <SelectItem value="Breaking">{t({ en: 'Breaking', mr: 'तातडीची' })}</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      variant={newsViewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setNewsViewMode('grid')}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={newsViewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setNewsViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* News List */}
            {newsViewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedNews.map((news) => (
                  <Card key={news.id} className="border-0 shadow-lg glass-effect overflow-hidden group hover:shadow-xl transition-all">
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Badge className={`${news.priority === 'high' ? 'bg-red-500' : news.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'} text-white`}>
                            {news.priority}
                          </Badge>
                          <Badge variant="outline">
                            {t(newsCategories.find(cat => cat.id === news.category)?.label || { en: '', mr: '' })}
                          </Badge>
                        </div>
                        <div className="flex gap-1">
                          {news.isFeatured && (
                            <Badge className="bg-orange-500 text-white">
                              <Star className="h-3 w-3" />
                            </Badge>
                          )}
                          {news.isBreaking && (
                            <Badge className="bg-red-500 text-white animate-pulse">
                              <Bell className="h-3 w-3" />
                            </Badge>
                          )}
                        </div>
                      </div>

                      {news.image && (
                        <div className="mb-3">
                          <img 
                            src={news.image} 
                            alt={news.title.en}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      )}

                      <h3 className="font-bold mb-2 line-clamp-2">{news.title.en}</h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-1">{news.title.mr}</p>
                      <p className="text-sm text-gray-700 mb-3 line-clamp-3">{news.content.en}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{news.date} • {news.time}</span>
                        <div className="flex items-center gap-2">
                          <Eye className="h-3 w-3" />
                          {news.readCount}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedNews(news);
                            setIsNewsDetailOpen(true);
                          }}
                          className="flex-1 hover:bg-blue-50"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          {t({ en: 'View', mr: 'पहा' })}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedNews({ ...news });
                            setIsEditNewsOpen(true);
                          }}
                          className="hover:bg-green-50 text-green-600 border-green-200"
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleToggleNewsStatus(news)}
                          className={`${news.isPublished ? 'hover:bg-orange-50 text-orange-600 border-orange-200' : 'hover:bg-green-50 text-green-600 border-green-200'}`}
                        >
                          {news.isPublished ? <XCircle className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteNews(news)}
                          className="hover:bg-red-50 text-red-600 border-red-200"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-0 shadow-xl glass-effect">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="font-semibold">{t({ en: 'Title', mr: 'शीर्षक' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Category', mr: 'श्रेणी' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Priority', mr: 'प्राधान्य' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Date', mr: 'तारीख' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Status', mr: 'स्थिती' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Reads', mr: 'वाचन' })}</TableHead>
                          <TableHead className="font-semibold">{t({ en: 'Actions', mr: 'कृती' })}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedNews.map((news) => (
                          <TableRow key={news.id} className="hover:bg-gray-50">
                            <TableCell>
                              <div>
                                <div className="font-medium line-clamp-1">{news.title.en}</div>
                                <div className="text-xs text-gray-500 line-clamp-1">{news.title.mr}</div>
                                <div className="flex gap-1 mt-1">
                                  {news.isFeatured && (
                                    <Badge className="bg-orange-500 text-white text-xs">Featured</Badge>
                                  )}
                                  {news.isBreaking && (
                                    <Badge className="bg-red-500 text-white text-xs animate-pulse">Breaking</Badge>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">
                                {t(newsCategories.find(cat => cat.id === news.category)?.label || { en: '', mr: '' })}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={`${news.priority === 'high' ? 'bg-red-500 text-white' : news.priority === 'medium' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}>
                                {news.priority}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="text-sm">
                                <div>{news.date}</div>
                                <div className="text-xs text-gray-500">{news.time}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge className={news.isPublished ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                                {news.isPublished ? 'Published' : 'Draft'}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {news.readCount}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedNews(news);
                                    setIsNewsDetailOpen(true);
                                  }}
                                  className="hover:bg-blue-50"
                                >
                                  <Eye className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedNews({ ...news });
                                    setIsEditNewsOpen(true);
                                  }}
                                  className="hover:bg-green-50 text-green-600 border-green-200"
                                >
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleDeleteNews(news)}
                                  className="hover:bg-red-50 text-red-600 border-red-200"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Pagination */}
                  {totalNewsPages > 1 && (
                    <div className="flex items-center justify-between px-6 py-4 border-t">
                      <div className="text-sm text-gray-600">
                        {t({ en: `Showing ${newsStartIndex + 1}-${Math.min(newsStartIndex + newsPerPage, filteredNews.length)} of ${filteredNews.length} items`, mr: `${filteredNews.length} पैकी ${newsStartIndex + 1}-${Math.min(newsStartIndex + newsPerPage, filteredNews.length)} आयटम दाखवत आहे` })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setNewsCurrentPage(newsCurrentPage - 1)}
                          disabled={newsCurrentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium">
                          {newsCurrentPage} / {totalNewsPages}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setNewsCurrentPage(newsCurrentPage + 1)}
                          disabled={newsCurrentPage === totalNewsPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Upload Dialog */}
      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Upload Tax Records', mr: 'कर नोंदी अपलोड करा' })}</DialogTitle>
            <DialogDescription>
              {t({ en: 'Upload Excel (.xlsx) or CSV (.csv) file with tax records', mr: 'कर नोंदींसह Excel (.xlsx) किंवा CSV (.csv) फाइल अपलोड करा' })}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="text-center">
              <Button
                onClick={downloadTemplate}
                variant="outline"
                className="mb-4"
              >
                <Download className="h-4 w-4 mr-2" />
                {t({ en: 'Download Template', mr: 'टेम्प्लेट डाउनलोड करा' })}
              </Button>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".xlsx,.csv"
                className="hidden"
              />
              
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Upload className="h-4 w-4 mr-2" />
                {t({ en: 'Choose File to Upload', mr: 'अपलोड करण्यासाठी फाइल निवडा' })}
              </Button>
            </div>

            {uploadStatus && (
              <Alert className={uploadStatus.startsWith('Success') ? 'border-green-200 bg-green-50' : uploadStatus.startsWith('Error') ? 'border-red-200 bg-red-50' : 'border-blue-200 bg-blue-50'}>
                <AlertDescription className={uploadStatus.startsWith('Success') ? 'text-green-700' : uploadStatus.startsWith('Error') ? 'text-red-700' : 'text-blue-700'}>
                  {uploadStatus}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
              {t({ en: 'Close', mr: 'बंद करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add New Record Dialog */}
      <Dialog open={isAddRecordDialogOpen} onOpenChange={setIsAddRecordDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add New Tax Record', mr: 'नवीन कर नोंद जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'House Number', mr: 'घर नंबर' })}</Label>
                <Input
                  value={newRecord.houseNumber}
                  onChange={(e) => setNewRecord({ ...newRecord, houseNumber: e.target.value })}
                  placeholder="H-001"
                />
              </div>
              <div>
                <Label>{t({ en: 'Owner Name', mr: 'मालकाचे नाव' })}</Label>
                <Input
                  value={newRecord.ownerName}
                  onChange={(e) => setNewRecord({ ...newRecord, ownerName: e.target.value })}
                  placeholder="Enter owner name"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Tax Type', mr: 'कर प्रकार' })}</Label>
                <Select value={newRecord.taxType} onValueChange={(value) => setNewRecord({ ...newRecord, taxType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tax type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Property Tax">Property Tax</SelectItem>
                    <SelectItem value="Water Tax">Water Tax</SelectItem>
                    <SelectItem value="Trade License">Trade License</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>{t({ en: 'Amount Due (₹)', mr: 'थकबाकी (₹)' })}</Label>
                <Input
                  type="number"
                  value={newRecord.amountDue}
                  onChange={(e) => setNewRecord({ ...newRecord, amountDue: e.target.value })}
                  placeholder="5000"
                />
              </div>
            </div>
            
            <div>
              <Label>{t({ en: 'Due Date', mr: 'देय दिनांक' })}</Label>
              <Input
                type="date"
                value={newRecord.dueDate}
                onChange={(e) => setNewRecord({ ...newRecord, dueDate: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddRecordDialogOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddRecord} className="bg-green-500 hover:bg-green-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Add Record', mr: 'नोंद जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Record Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Edit Tax Record', mr: 'कर नोंद संपादित करा' })}</DialogTitle>
          </DialogHeader>

          {selectedRecord && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'House Number', mr: 'घर नंबर' })}</Label>
                  <Input
                    value={selectedRecord.houseNumber}
                    onChange={(e) => setSelectedRecord({ ...selectedRecord, houseNumber: e.target.value })}
                  />
                </div>
                <div>
                  <Label>{t({ en: 'Owner Name', mr: 'मालकाचे नाव' })}</Label>
                  <Input
                    value={selectedRecord.ownerName}
                    onChange={(e) => setSelectedRecord({ ...selectedRecord, ownerName: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'Tax Type', mr: 'कर प्रकार' })}</Label>
                  <Select 
                    value={selectedRecord.taxType} 
                    onValueChange={(value) => setSelectedRecord({ ...selectedRecord, taxType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Property Tax">Property Tax</SelectItem>
                      <SelectItem value="Water Tax">Water Tax</SelectItem>
                      <SelectItem value="Trade License">Trade License</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>{t({ en: 'Amount Due (₹)', mr: 'थकबाकी (₹)' })}</Label>
                  <Input
                    type="number"
                    value={selectedRecord.amountDue}
                    onChange={(e) => setSelectedRecord({ ...selectedRecord, amountDue: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              </div>
              
              <div>
                <Label>{t({ en: 'Due Date', mr: 'देय दिनांक' })}</Label>
                <Input
                  type="date"
                  value={selectedRecord.dueDate}
                  onChange={(e) => setSelectedRecord({ ...selectedRecord, dueDate: e.target.value })}
                />
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleEditRecord} className="bg-blue-500 hover:bg-blue-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Save Changes', mr: 'बदल जतन करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Content Management Dialog */}
      <Dialog open={isContentDialogOpen} onOpenChange={setIsContentDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {currentContentItem?.id && 
                (currentContentItem.type === 'statistic' && statistics.find(s => s.id === currentContentItem.id) ||
                 currentContentItem.type === 'facility' && facilities.find(f => f.id === currentContentItem.id) ||
                 currentContentItem.type === 'development' && developments.find(d => d.id === currentContentItem.id) ||
                 currentContentItem.type === 'achievement' && achievements.find(a => a.id === currentContentItem.id))
                ? t({ en: 'Edit Content Item', mr: 'सामग्री आयटम संपादित करा' })
                : t({ en: 'Add New Content Item', mr: 'नवीन सामग्री आयटम जोडा' })
              }
            </DialogTitle>
          </DialogHeader>
          
          <div className="max-h-96 overflow-y-auto">
            {renderContentFormFields()}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsContentDialogOpen(false)}>
              <X className="h-4 w-4 mr-2" />
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleContentSave} className="bg-green-500 hover:bg-green-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Save', mr: 'जतन करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Grievance Detail Dialog */}
      <Dialog open={isGrievanceDetailOpen} onOpenChange={setIsGrievanceDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Grievance Details', mr: 'तक्रारीचे तपशील' })}</DialogTitle>
          </DialogHeader>

          {selectedGrievance && (
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold">{t({ en: 'Grievance ID', mr: 'तक्रार आयडी' })}</Label>
                    <p className="text-lg font-mono">{selectedGrievance.id}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Title', mr: 'शीर्षक' })}</Label>
                    <p>{selectedGrievance.title}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Category', mr: 'श्रेणी' })}</Label>
                    <Badge className="mt-1">{selectedGrievance.category}</Badge>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Priority', mr: 'प्राधान्यता' })}</Label>
                    <div className="mt-1">{getPriorityBadge(selectedGrievance.priority)}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold">{t({ en: 'Submitted By', mr: 'सबमिट केले' })}</Label>
                    <div className="space-y-1">
                      <p>{selectedGrievance.submittedBy}</p>
                      <p className="text-sm text-gray-600">{selectedGrievance.mobile}</p>
                      <p className="text-sm text-gray-600">{selectedGrievance.address}</p>
                    </div>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Submission Date', mr: 'सबमिशन दिनांक' })}</Label>
                    <p>{selectedGrievance.submissionDate}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Admin Status', mr: 'प्रशासन स्थिती' })}</Label>
                    <div className="mt-1">{getAdminStatusBadge(selectedGrievance.adminStatus)}</div>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Progress Status', mr: 'प्रगती स्थिती' })}</Label>
                    <div className="mt-1">{getGrievanceStatusBadge(selectedGrievance.status)}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label className="font-semibold">{t({ en: 'Description', mr: 'वर्णन' })}</Label>
                <p className="mt-2 p-4 bg-gray-50 rounded-lg">{selectedGrievance.description}</p>
              </div>

              {/* Worker Assignment */}
              <div>
                <Label className="font-semibold">{t({ en: 'Assign Worker', mr: 'कामगार नियुक्त करा' })}</Label>
                <div className="mt-2 flex gap-2">
                  <Select 
                    value={selectedGrievance.assignedWorker || ''} 
                    onValueChange={(value) => handleAssignWorker(selectedGrievance.id, value)}
                  >
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder={t({ en: 'Select Worker', mr: 'कामगार निवडा' })} />
                    </SelectTrigger>
                    <SelectContent>
                      {workers.filter(w => w.status === 'active').map((worker) => (
                        <SelectItem key={worker.id} value={worker.id}>
                          {worker.name} - {worker.department}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {selectedGrievance.assignedWorker && (
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium">{workers.find(w => w.id === selectedGrievance.assignedWorker)?.name}</div>
                    <div className="text-sm text-gray-600">{workers.find(w => w.id === selectedGrievance.assignedWorker)?.department}</div>
                    <div className="text-sm text-gray-600">{workers.find(w => w.id === selectedGrievance.assignedWorker)?.phone}</div>
                  </div>
                )}
              </div>

              {/* Status Update */}
              <div>
                <Label className="font-semibold">{t({ en: 'Update Status', mr: 'स्थिती अपडेट करा' })}</Label>
                <div className="mt-2 flex gap-2">
                  <Select 
                    value={selectedGrievance.status} 
                    onValueChange={(value) => handleUpdateGrievanceStatus(selectedGrievance.id, value)}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Photos */}
              {selectedGrievance.photos && selectedGrievance.photos.length > 0 && (
                <div>
                  <Label className="font-semibold">{t({ en: 'Attached Photos', mr: 'जोडलेले फोटो' })}</Label>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedGrievance.photos.map((photo, index) => (
                      <img 
                        key={index} 
                        src={photo} 
                        alt={`Photo ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Response */}
              <div>
                <Label className="font-semibold">{t({ en: 'Response', mr: 'प्रतिसाद' })}</Label>
                <Textarea
                  value={selectedGrievance.response || ''}
                  onChange={(e) => setSelectedGrievance({ ...selectedGrievance, response: e.target.value })}
                  placeholder={t({ en: 'Enter response to grievance...', mr: 'तक्रारीला प्रतिसाद द्या...' })}
                  className="mt-2"
                  rows={3}
                />
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsGrievanceDetailOpen(false)}>
              {t({ en: 'Close', mr: 'बंद करा' })}
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Save Changes', mr: 'बदल जतन करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Worker Management Dialog */}
      <Dialog open={isWorkerManagementOpen} onOpenChange={setIsWorkerManagementOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>{t({ en: 'Worker Management', mr: 'कामगार व्यवस्थापन' })}</DialogTitle>
              <Button onClick={() => setIsAddWorkerOpen(true)} className="bg-green-500 hover:bg-green-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                {t({ en: 'Add Worker', mr: 'कामगार जोडा' })}
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {workers.map((worker) => (
              <Card key={worker.id} className="border-0 shadow-lg glass-effect">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-bold text-lg">{worker.name}</h3>
                        <p className="text-gray-600">{worker.department}</p>
                        <p className="text-sm text-gray-500">{worker.specialization}</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span>{worker.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{worker.email}</span>
                        </div>
                        <Badge className={worker.status === 'active' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                          {worker.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedWorker(worker);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Worker Dialog */}
      <Dialog open={isAddWorkerOpen} onOpenChange={setIsAddWorkerOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add New Worker', mr: 'नवीन कामगार जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Name', mr: 'नाव' })}</Label>
              <Input
                value={newWorker.name}
                onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
                placeholder="Enter worker name"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Department (English)', mr: 'विभाग (इंग्रजी)' })}</Label>
                <Input
                  value={newWorker.department}
                  onChange={(e) => setNewWorker({ ...newWorker, department: e.target.value })}
                  placeholder="Department name"
                />
              </div>
              <div>
                <Label>{t({ en: 'Department (Marathi)', mr: 'विभाग (मराठी)' })}</Label>
                <Input
                  value={newWorker.departmentMr}
                  onChange={(e) => setNewWorker({ ...newWorker, departmentMr: e.target.value })}
                  placeholder="विभागाचे नाव"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Phone', mr: 'फोन' })}</Label>
                <Input
                  value={newWorker.phone}
                  onChange={(e) => setNewWorker({ ...newWorker, phone: e.target.value })}
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <Label>{t({ en: 'Email', mr: 'ईमेल' })}</Label>
                <Input
                  value={newWorker.email}
                  onChange={(e) => setNewWorker({ ...newWorker, email: e.target.value })}
                  placeholder="email@domain.com"
                />
              </div>
            </div>
            
            <div>
              <Label>{t({ en: 'Specialization', mr: 'विशेषज्ञता' })}</Label>
              <Input
                value={newWorker.specialization}
                onChange={(e) => setNewWorker({ ...newWorker, specialization: e.target.value })}
                placeholder="Area of expertise"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsAddWorkerOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddWorker} className="bg-green-500 hover:bg-green-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Add Worker', mr: 'कामगार जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Villager Detail Dialog */}
      <Dialog open={isVillagerDetailOpen} onOpenChange={setIsVillagerDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Villager Details', mr: 'गावकऱ्याचे तपशील' })}</DialogTitle>
          </DialogHeader>

          {selectedVillager && (
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold">{t({ en: 'Villager ID', mr: 'गावकरी आयडी' })}</Label>
                    <p className="text-lg font-mono">{selectedVillager.id}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Full Name', mr: 'पूर्ण नाव' })}</Label>
                    <p>{selectedVillager.fullName}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Address', mr: 'पत्ता' })}</Label>
                    <p>{selectedVillager.address}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Mobile Number', mr: 'मोबाइल नंबर' })}</Label>
                    <p>{selectedVillager.mobile}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold">{t({ en: 'Gender', mr: 'लिंग' })}</Label>
                    <div className="mt-1">
                      <Badge className={
                        selectedVillager.gender === 'male' ? 'bg-blue-500 text-white' :
                        selectedVillager.gender === 'female' ? 'bg-pink-500 text-white' :
                        'bg-purple-500 text-white'
                      }>
                        {t({ 
                          en: selectedVillager.gender, 
                          mr: selectedVillager.gender === 'male' ? 'पुरुष' : selectedVillager.gender === 'female' ? 'महिला' : 'इतर' 
                        })}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Date of Birth', mr: 'जन्मतारीख' })}</Label>
                    <p>{selectedVillager.dateOfBirth}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Aadhar Number', mr: 'आधार नंबर' })}</Label>
                    <p className="font-mono">{selectedVillager.aadharNumber}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Status', mr: 'स्थिती' })}</Label>
                    <div className="mt-1">{getVillagerStatusBadge(selectedVillager.status)}</div>
                  </div>
                </div>
              </div>

              {/* Request Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="font-semibold">{t({ en: 'Request Type', mr: 'विनंती प्रकार' })}</Label>
                  <div className="mt-1">{getRequestTypeBadge(selectedVillager.requestType)}</div>
                </div>
                <div>
                  <Label className="font-semibold">{t({ en: 'Submitted By', mr: 'सबमिट केले' })}</Label>
                  <p>{selectedVillager.submittedBy}</p>
                </div>
                <div>
                  <Label className="font-semibold">{t({ en: 'Submission Date', mr: 'सबमिशन दिनांक' })}</Label>
                  <p>{selectedVillager.submissionDate}</p>
                </div>
                {selectedVillager.approvedDate && (
                  <div>
                    <Label className="font-semibold">{t({ en: 'Approved Date', mr: 'मंजूरी दिनांक' })}</Label>
                    <p>{selectedVillager.approvedDate}</p>
                  </div>
                )}
              </div>

              {/* Previous Data (for edit requests) */}
              {selectedVillager.requestType === 'edit' && selectedVillager.previousData && (
                <div>
                  <Label className="font-semibold">{t({ en: 'Previous Data', mr: 'मागील डेटा' })}</Label>
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">{t({ en: 'Previous Address', mr: 'मागील पत्ता' })}</Label>
                        <p className="text-sm">{selectedVillager.previousData.address}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">{t({ en: 'Previous Mobile', mr: 'मागील मोबाइल' })}</Label>
                        <p className="text-sm">{selectedVillager.previousData.mobile}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Rejection Reason */}
              {selectedVillager.status === 'rejected' && selectedVillager.rejectionReason && (
                <div>
                  <Label className="font-semibold">{t({ en: 'Rejection Reason', mr: 'नाकारण्याचे कारण' })}</Label>
                  <p className="mt-2 p-4 bg-red-50 rounded-lg text-red-700">{selectedVillager.rejectionReason}</p>
                </div>
              )}

              {/* ID Proof Photo */}
              {selectedVillager.idProofPhoto && (
                <div>
                  <Label className="font-semibold">{t({ en: 'ID Proof Photo', mr: 'ओळखपत्र फोटो' })}</Label>
                  <div className="mt-2">
                    <img 
                      src={selectedVillager.idProofPhoto} 
                      alt="ID Proof"
                      className="w-64 h-64 object-cover rounded-lg border"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsVillagerDetailOpen(false)}>
              {t({ en: 'Close', mr: 'बंद करा' })}
            </Button>
            {selectedVillager?.status === 'pending' && (
              <>
                <Button 
                  onClick={() => {
                    handleApproveVillager(selectedVillager);
                    setIsVillagerDetailOpen(false);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {t({ en: 'Approve', mr: 'मंजूर करा' })}
                </Button>
                <Button 
                  onClick={() => {
                    handleRejectVillager(selectedVillager);
                    setIsVillagerDetailOpen(false);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  {t({ en: 'Reject', mr: 'नाकारा' })}
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Villager Dialog */}
      <Dialog open={isAddVillagerOpen} onOpenChange={setIsAddVillagerOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add New Villager Manually', mr: 'मॅन्युअल गावकरी जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Full Name', mr: 'पूर्ण नाव' })} *</Label>
                <Input
                  value={newVillager.fullName}
                  onChange={(e) => setNewVillager({ ...newVillager, fullName: e.target.value })}
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <Label>{t({ en: 'Mobile Number', mr: 'मोबाइल नंबर' })} *</Label>
                <Input
                  value={newVillager.mobile}
                  onChange={(e) => setNewVillager({ ...newVillager, mobile: e.target.value })}
                  placeholder="+91 9876543210"
                />
              </div>
            </div>
            
            <div>
              <Label>{t({ en: 'Address', mr: 'पत्ता' })}</Label>
              <Textarea
                value={newVillager.address}
                onChange={(e) => setNewVillager({ ...newVillager, address: e.target.value })}
                placeholder="Enter complete address"
                rows={2}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Gender', mr: 'लिंग' })} *</Label>
                <Select value={newVillager.gender} onValueChange={(value) => setNewVillager({ ...newVillager, gender: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">{t({ en: 'Male', mr: 'पुरुष' })}</SelectItem>
                    <SelectItem value="female">{t({ en: 'Female', mr: 'महिला' })}</SelectItem>
                    <SelectItem value="other">{t({ en: 'Other', mr: 'इतर' })}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>{t({ en: 'Date of Birth', mr: 'जन्मतारीख' })}</Label>
                <Input
                  type="date"
                  value={newVillager.dateOfBirth}
                  onChange={(e) => setNewVillager({ ...newVillager, dateOfBirth: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <Label>{t({ en: 'Aadhar Number', mr: 'आधार नंबर' })} *</Label>
              <Input
                value={newVillager.aadharNumber}
                onChange={(e) => setNewVillager({ ...newVillager, aadharNumber: e.target.value })}
                placeholder="1234 5678 9012"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddVillagerOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddVillager} className="bg-villager hover:bg-villager/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              {t({ en: 'Add Villager', mr: 'गावकरी जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Committee Member Detail Dialog */}
      <Dialog open={isCommitteeMemberDetailOpen} onOpenChange={setIsCommitteeMemberDetailOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Committee Member Details', mr: 'समिती सदस्याचे तपशील' })}</DialogTitle>
          </DialogHeader>

          {selectedCommitteeMember && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-20 h-20 ${selectedCommitteeMember.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                  {selectedCommitteeMember.name.en.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedCommitteeMember.name.en}</h3>
                  <p className="text-gray-600">{selectedCommitteeMember.name.mr}</p>
                  <p className="text-purple-600 font-medium">{selectedCommitteeMember.position.en}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold">{t({ en: 'Ward/Department', mr: 'वार्ड/विभाग' })}</Label>
                    <p>{selectedCommitteeMember.ward}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Phone', mr: 'फोन' })}</Label>
                    <p>{selectedCommitteeMember.phone}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Email', mr: 'ईमेल' })}</Label>
                    <p>{selectedCommitteeMember.email}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold">{t({ en: 'Education', mr: 'शिक्षण' })}</Label>
                    <p>{selectedCommitteeMember.education.en}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Experience', mr: 'अनुभव' })}</Label>
                    <p>{selectedCommitteeMember.experience.en}</p>
                  </div>
                  <div>
                    <Label className="font-semibold">{t({ en: 'Term Period', mr: 'मुदत' })}</Label>
                    <p>{selectedCommitteeMember.joinDate} - {selectedCommitteeMember.termEnd}</p>
                  </div>
                </div>
              </div>

              {selectedCommitteeMember.achievements && selectedCommitteeMember.achievements.length > 0 && (
                <div>
                  <Label className="font-semibold">{t({ en: 'Achievements', mr: 'उपलब्धी' })}</Label>
                  <div className="mt-2 space-y-2">
                    {selectedCommitteeMember.achievements.map((achievement, index) => (
                      <div key={index} className="p-3 bg-purple-50 rounded-lg">
                        <p className="font-medium">{achievement.en}</p>
                        <p className="text-sm text-gray-600">{achievement.mr}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsCommitteeMemberDetailOpen(false)}>
              {t({ en: 'Close', mr: 'बंद करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Committee Member Dialog */}
      <Dialog open={isAddCommitteeMemberOpen} onOpenChange={setIsAddCommitteeMemberOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add Committee Member', mr: 'समिती सदस्य जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Name (English)', mr: 'नाव (इंग्रजी)' })} *</Label>
                <Input
                  value={newCommitteeMember.name.en}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, name: { ...newCommitteeMember.name, en: e.target.value } })}
                  placeholder="Enter name in English"
                />
              </div>
              <div>
                <Label>{t({ en: 'Name (Marathi)', mr: 'नाव (मराठी)' })}</Label>
                <Input
                  value={newCommitteeMember.name.mr}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, name: { ...newCommitteeMember.name, mr: e.target.value } })}
                  placeholder="मराठीत नाव टाका"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Position (English)', mr: 'पद (इंग्रजी)' })} *</Label>
                <Input
                  value={newCommitteeMember.position.en}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, position: { ...newCommitteeMember.position, en: e.target.value } })}
                  placeholder="e.g., Ward Member"
                />
              </div>
              <div>
                <Label>{t({ en: 'Position (Marathi)', mr: 'पद (मराठी)' })}</Label>
                <Input
                  value={newCommitteeMember.position.mr}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, position: { ...newCommitteeMember.position, mr: e.target.value } })}
                  placeholder="जसे, वार्ड सदस्य"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Ward/Department', mr: 'वार्ड/विभाग' })}</Label>
                <Input
                  value={newCommitteeMember.ward}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, ward: e.target.value })}
                  placeholder="e.g., Ward 1 or Administrative"
                />
              </div>
              <div>
                <Label>{t({ en: 'Phone', mr: 'फोन' })} *</Label>
                <Input
                  value={newCommitteeMember.phone}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, phone: e.target.value })}
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            <div>
              <Label>{t({ en: 'Email', mr: 'ईमेल' })}</Label>
              <Input
                value={newCommitteeMember.email}
                onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, email: e.target.value })}
                placeholder="email@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Join Date', mr: 'सामील होण्याची तारीख' })}</Label>
                <Input
                  type="date"
                  value={newCommitteeMember.joinDate}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, joinDate: e.target.value })}
                />
              </div>
              <div>
                <Label>{t({ en: 'Term End Date', mr: 'मुदत संपण्याची तारीख' })}</Label>
                <Input
                  type="date"
                  value={newCommitteeMember.termEnd}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, termEnd: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Education (English)', mr: 'शिक्षण (इंग्रजी)' })}</Label>
                <Textarea
                  value={newCommitteeMember.education.en}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, education: { ...newCommitteeMember.education, en: e.target.value } })}
                  placeholder="Educational qualifications"
                  rows={2}
                />
              </div>
              <div>
                <Label>{t({ en: 'Experience (English)', mr: 'अनुभव (इंग्रजी)' })}</Label>
                <Textarea
                  value={newCommitteeMember.experience.en}
                  onChange={(e) => setNewCommitteeMember({ ...newCommitteeMember, experience: { ...newCommitteeMember.experience, en: e.target.value } })}
                  placeholder="Professional experience"
                  rows={2}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddCommitteeMemberOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddCommitteeMember} className="bg-committee hover:bg-committee/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              {t({ en: 'Add Member', mr: 'सदस्य जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Committee Member Dialog */}
      <Dialog open={isEditCommitteeMemberOpen} onOpenChange={setIsEditCommitteeMemberOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Edit Committee Member', mr: 'समिती सदस्य संपादित करा' })}</DialogTitle>
          </DialogHeader>

          {selectedCommitteeMember && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'Name (English)', mr: 'नाव (इंग्रजी)' })} *</Label>
                  <Input
                    value={selectedCommitteeMember.name.en}
                    onChange={(e) => setSelectedCommitteeMember({ ...selectedCommitteeMember, name: { ...selectedCommitteeMember.name, en: e.target.value } })}
                  />
                </div>
                <div>
                  <Label>{t({ en: 'Name (Marathi)', mr: 'नाव (मराठी)' })}</Label>
                  <Input
                    value={selectedCommitteeMember.name.mr}
                    onChange={(e) => setSelectedCommitteeMember({ ...selectedCommitteeMember, name: { ...selectedCommitteeMember.name, mr: e.target.value } })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'Phone', mr: 'फोन' })} *</Label>
                  <Input
                    value={selectedCommitteeMember.phone}
                    onChange={(e) => setSelectedCommitteeMember({ ...selectedCommitteeMember, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label>{t({ en: 'Email', mr: 'ईमेल' })}</Label>
                  <Input
                    value={selectedCommitteeMember.email}
                    onChange={(e) => setSelectedCommitteeMember({ ...selectedCommitteeMember, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label>{t({ en: 'Status', mr: 'स्थिती' })}</Label>
                <Select 
                  value={selectedCommitteeMember.isActive ? 'active' : 'inactive'} 
                  onValueChange={(value) => setSelectedCommitteeMember({ ...selectedCommitteeMember, isActive: value === 'active' })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsEditCommitteeMemberOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleUpdateCommitteeMember} className="bg-green-500 hover:bg-green-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Save Changes', mr: 'बदल जतन करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Department Management Dialog */}
      <Dialog open={isDepartmentManagementOpen} onOpenChange={setIsDepartmentManagementOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>{t({ en: 'Department Management', mr: 'विभाग व्यवस्थापन' })}</DialogTitle>
              <Button onClick={() => setIsAddDepartmentOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                {t({ en: 'Add Department', mr: 'विभाग जोडा' })}
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {departments.map((department) => (
              <Card key={department.id} className="border-0 shadow-lg glass-effect">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{department.name.en}</h3>
                      <p className="text-gray-600 mb-3">{department.name.mr}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="font-semibold">{t({ en: 'Department Head', mr: 'विभाग प्रमुख' })}</Label>
                          <p>{department.head.en}</p>
                          <p className="text-sm text-gray-600">{department.head.mr}</p>
                        </div>
                        <div>
                          <Label className="font-semibold">{t({ en: 'Contact', mr: 'संपर्क' })}</Label>
                          <p>{department.phone}</p>
                          <p className="text-sm text-gray-600">{department.email}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Label className="font-semibold">{t({ en: 'Services', mr: 'सेवा' })}</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {department.services.map((service, index) => (
                            <Badge key={index} variant="secondary">{service.en}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedDepartment({ ...department })}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteDepartment(department)}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Department Dialog */}
      <Dialog open={isAddDepartmentOpen} onOpenChange={setIsAddDepartmentOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add New Department', mr: 'नवीन विभाग जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Department Name (English)', mr: 'विभागाचे नाव (इंग्रजी)' })} *</Label>
                <Input
                  value={newDepartment.name.en}
                  onChange={(e) => setNewDepartment({ ...newDepartment, name: { ...newDepartment.name, en: e.target.value } })}
                  placeholder="Department name"
                />
              </div>
              <div>
                <Label>{t({ en: 'Department Name (Marathi)', mr: 'विभागाचे नाव (मराठी)' })}</Label>
                <Input
                  value={newDepartment.name.mr}
                  onChange={(e) => setNewDepartment({ ...newDepartment, name: { ...newDepartment.name, mr: e.target.value } })}
                  placeholder="विभागाचे नाव"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Head Name (English)', mr: 'प्रमुखाचे नाव (इंग्रजी)' })} *</Label>
                <Input
                  value={newDepartment.head.en}
                  onChange={(e) => setNewDepartment({ ...newDepartment, head: { ...newDepartment.head, en: e.target.value } })}
                  placeholder="Head's name"
                />
              </div>
              <div>
                <Label>{t({ en: 'Head Name (Marathi)', mr: 'प्रमुखाचे नाव (मराठी)' })}</Label>
                <Input
                  value={newDepartment.head.mr}
                  onChange={(e) => setNewDepartment({ ...newDepartment, head: { ...newDepartment.head, mr: e.target.value } })}
                  placeholder="प्रमुखाचे नाव"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Phone', mr: 'फोन' })} *</Label>
                <Input
                  value={newDepartment.phone}
                  onChange={(e) => setNewDepartment({ ...newDepartment, phone: e.target.value })}
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <Label>{t({ en: 'Email', mr: 'ईमेल' })}</Label>
                <Input
                  value={newDepartment.email}
                  onChange={(e) => setNewDepartment({ ...newDepartment, email: e.target.value })}
                  placeholder="email@domain.com"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddDepartmentOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddDepartment} className="bg-blue-500 hover:bg-blue-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Add Department', mr: 'विभाग जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Office Information Edit Dialog */}
      <Dialog open={isOfficeInfoEditOpen} onOpenChange={setIsOfficeInfoEditOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Edit Office Information', mr: 'कार्यालयीन माहिती संपादित करा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Office Address (English)', mr: 'कार्यालयाचा पत्ता (इंग्रजी)' })}</Label>
              <Textarea
                value={officeInfo.address.en}
                onChange={(e) => setOfficeInfo({ ...officeInfo, address: { ...officeInfo.address, en: e.target.value } })}
                rows={4}
              />
            </div>
            
            <div>
              <Label>{t({ en: 'Office Address (Marathi)', mr: 'कार्यालयाचा पत्ता (मराठी)' })}</Label>
              <Textarea
                value={officeInfo.address.mr}
                onChange={(e) => setOfficeInfo({ ...officeInfo, address: { ...officeInfo.address, mr: e.target.value } })}
                rows={4}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Phone', mr: 'फोन' })}</Label>
                <Input
                  value={officeInfo.phone}
                  onChange={(e) => setOfficeInfo({ ...officeInfo, phone: e.target.value })}
                />
              </div>
              <div>
                <Label>{t({ en: 'Email', mr: 'ईमेल' })}</Label>
                <Input
                  value={officeInfo.email}
                  onChange={(e) => setOfficeInfo({ ...officeInfo, email: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <Label>{t({ en: 'Emergency Contact', mr: 'आपत्कालीन संपर्क' })}</Label>
              <Input
                value={officeInfo.emergencyContact}
                onChange={(e) => setOfficeInfo({ ...officeInfo, emergencyContact: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsOfficeInfoEditOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={() => setIsOfficeInfoEditOpen(false)} className="bg-green-500 hover:bg-green-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Save Changes', mr: 'बदल जतन करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Media Detail Dialog */}
      <Dialog open={isMediaDetailOpen} onOpenChange={setIsMediaDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Media Details', mr: 'मीडिया तपशील' })}</DialogTitle>
          </DialogHeader>

          {selectedMedia && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <img 
                      src={selectedMedia.url} 
                      alt={selectedMedia.title.en}
                      className="w-full h-full object-cover"
                    />
                    {selectedMedia.type === 'video' && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold">{t({ en: 'Title', mr: 'शीर्षक' })}</Label>
                    <p className="font-medium">{selectedMedia.title.en}</p>
                    <p className="text-sm text-gray-600">{selectedMedia.title.mr}</p>
                  </div>
                  
                  <div>
                    <Label className="font-semibold">{t({ en: 'Description', mr: 'वर्णन' })}</Label>
                    <p className="text-sm">{selectedMedia.description.en}</p>
                    <p className="text-sm text-gray-600">{selectedMedia.description.mr}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-semibold">{t({ en: 'Type', mr: 'प्रकार' })}</Label>
                      <Badge className={selectedMedia.type === 'photo' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'}>
                        {selectedMedia.type === 'photo' ? (
                          <Camera className="h-3 w-3 mr-1" />
                        ) : (
                          <Video className="h-3 w-3 mr-1" />
                        )}
                        {selectedMedia.type}
                      </Badge>
                    </div>
                    <div>
                      <Label className="font-semibold">{t({ en: 'Category', mr: 'श्रेणी' })}</Label>
                      <p>{t(mediaCategories.find(cat => cat.id === selectedMedia.category)?.label || { en: '', mr: '' })}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-semibold">{t({ en: 'Date', mr: 'तारीख' })}</Label>
                      <p>{selectedMedia.date}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">{t({ en: 'Upload Date', mr: 'अपलोड तारीख' })}</Label>
                      <p>{selectedMedia.uploadDate}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-semibold">{t({ en: 'Views', mr: 'दृश्ये' })}</Label>
                      <p>{selectedMedia.views}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">{t({ en: 'Likes', mr: 'लाईक' })}</Label>
                      <p>{selectedMedia.likes}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-semibold">{t({ en: 'File Size', mr: 'फाइल साइज' })}</Label>
                      <p>{selectedMedia.fileSize}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">{t({ en: 'Uploaded By', mr: 'अपलोड केले' })}</Label>
                      <p>{selectedMedia.uploadedBy}</p>
                    </div>
                  </div>

                  {selectedMedia.tags && selectedMedia.tags.length > 0 && (
                    <div>
                      <Label className="font-semibold">{t({ en: 'Tags', mr: 'टॅग' })}</Label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedMedia.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Label className="font-semibold">{t({ en: 'Status', mr: 'स्थिती' })}</Label>
                    <Badge className={selectedMedia.isActive ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                      {selectedMedia.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                    {selectedMedia.isFeatured && (
                      <Badge className="bg-orange-500 text-white">Featured</Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsMediaDetailOpen(false)}>
              {t({ en: 'Close', mr: 'बंद करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Media Dialog */}
      <Dialog open={isAddMediaOpen} onOpenChange={setIsAddMediaOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add New Media', mr: 'नवीन मीडिया जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Media Type', mr: 'मीडिया प्रकार' })} *</Label>
              <Select value={newMediaItem.type} onValueChange={(value) => setNewMediaItem({ ...newMediaItem, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select media type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="photo">{t({ en: 'Photo', mr: 'फोटो' })}</SelectItem>
                  <SelectItem value="video">{t({ en: 'Video', mr: 'व्हिडिओ' })}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Title (English)', mr: 'शीर्षक (इंग्रजी)' })} *</Label>
                <Input
                  value={newMediaItem.title.en}
                  onChange={(e) => setNewMediaItem({ ...newMediaItem, title: { ...newMediaItem.title, en: e.target.value } })}
                  placeholder="Enter title in English"
                />
              </div>
              <div>
                <Label>{t({ en: 'Title (Marathi)', mr: 'शीर्षक (मराठी)' })}</Label>
                <Input
                  value={newMediaItem.title.mr}
                  onChange={(e) => setNewMediaItem({ ...newMediaItem, title: { ...newMediaItem.title, mr: e.target.value } })}
                  placeholder="मराठीत शीर्षक टाका"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Description (English)', mr: 'वर्णन (इंग्रजी)' })}</Label>
                <Textarea
                  value={newMediaItem.description.en}
                  onChange={(e) => setNewMediaItem({ ...newMediaItem, description: { ...newMediaItem.description, en: e.target.value } })}
                  placeholder="Enter description"
                  rows={3}
                />
              </div>
              <div>
                <Label>{t({ en: 'Description (Marathi)', mr: 'वर्णन (मराठी)' })}</Label>
                <Textarea
                  value={newMediaItem.description.mr}
                  onChange={(e) => setNewMediaItem({ ...newMediaItem, description: { ...newMediaItem.description, mr: e.target.value } })}
                  placeholder="वर्णन टाका"
                  rows={3}
                />
              </div>
            </div>

            <div>
              <Label>{t({ en: 'Category', mr: 'श्रेणी' })} *</Label>
              <Select value={newMediaItem.category} onValueChange={(value) => setNewMediaItem({ ...newMediaItem, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {mediaCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {t(category.label)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t({ en: 'Tags', mr: 'टॅग' })}</Label>
              <Input
                placeholder="Enter tags separated by commas"
                onChange={(e) => setNewMediaItem({ ...newMediaItem, tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean) })}
              />
            </div>

            <div>
              <Label>{t({ en: 'Upload File', mr: 'फाइल अपलोड करा' })} *</Label>
              <Input
                type="file"
                accept={newMediaItem.type === 'photo' ? 'image/*' : 'video/*'}
                onChange={(e) => setNewMediaItem({ ...newMediaItem, file: e.target.files?.[0] || null })}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="featured"
                checked={newMediaItem.isFeatured}
                onChange={(e) => setNewMediaItem({ ...newMediaItem, isFeatured: e.target.checked })}
              />
              <Label htmlFor="featured">{t({ en: 'Mark as Featured', mr: 'फीचर्ड म्हणून चिन्हांकित करा' })}</Label>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddMediaOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddMedia} className="bg-media hover:bg-media/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              {t({ en: 'Add Media', mr: 'मीडिया जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Category Management Dialog */}
      <Dialog open={isCategoryManagementOpen} onOpenChange={setIsCategoryManagementOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>{t({ en: 'Category Management', mr: 'श्रेणी व्यवस्थापन' })}</DialogTitle>
              <Button onClick={() => setIsAddCategoryOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                {t({ en: 'Add Category', mr: 'श्रेणी जोडा' })}
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {mediaCategories.map((category) => (
              <Card key={category.id} className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{category.label.en}</h3>
                      <p className="text-gray-600">{category.label.mr}</p>
                      <p className="text-sm text-gray-500">{category.count} items</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteCategory(category.id)}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Category Dialog */}
      <Dialog open={isAddCategoryOpen} onOpenChange={setIsAddCategoryOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add New Category', mr: 'नवीन श्रेणी जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Category Name (English)', mr: 'श्रेणीचे नाव (इंग्रजी)' })} *</Label>
              <Input
                value={newMediaCategory.label.en}
                onChange={(e) => setNewMediaCategory({ label: { ...newMediaCategory.label, en: e.target.value } })}
                placeholder="Enter category name"
              />
            </div>
            
            <div>
              <Label>{t({ en: 'Category Name (Marathi)', mr: 'श्रेणीचे नाव (मराठी)' })}</Label>
              <Input
                value={newMediaCategory.label.mr}
                onChange={(e) => setNewMediaCategory({ label: { ...newMediaCategory.label, mr: e.target.value } })}
                placeholder="श्रेणीचे नाव टाका"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddCategoryOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddCategory} className="bg-blue-500 hover:bg-blue-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Add Category', mr: 'श्रेणी जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Media Dialog */}
      <Dialog open={isEditMediaOpen} onOpenChange={setIsEditMediaOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Edit Media', mr: 'मीडिया संपादित करा' })}</DialogTitle>
          </DialogHeader>

          {selectedMedia && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'Title (English)', mr: 'शीर्षक (इंग्रजी)' })} *</Label>
                  <Input
                    value={selectedMedia.title.en}
                    onChange={(e) => setSelectedMedia({ ...selectedMedia, title: { ...selectedMedia.title, en: e.target.value } })}
                  />
                </div>
                <div>
                  <Label>{t({ en: 'Title (Marathi)', mr: 'शीर्षक (मराठी)' })}</Label>
                  <Input
                    value={selectedMedia.title.mr}
                    onChange={(e) => setSelectedMedia({ ...selectedMedia, title: { ...selectedMedia.title, mr: e.target.value } })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'Description (English)', mr: 'वर्णन (इंग्रजी)' })}</Label>
                  <Textarea
                    value={selectedMedia.description.en}
                    onChange={(e) => setSelectedMedia({ ...selectedMedia, description: { ...selectedMedia.description, en: e.target.value } })}
                    rows={3}
                  />
                </div>
                <div>
                  <Label>{t({ en: 'Description (Marathi)', mr: 'वर्णन (मराठी)' })}</Label>
                  <Textarea
                    value={selectedMedia.description.mr}
                    onChange={(e) => setSelectedMedia({ ...selectedMedia, description: { ...selectedMedia.description, mr: e.target.value } })}
                    rows={3}
                  />
                </div>
              </div>

              <div>
                <Label>{t({ en: 'Category', mr: 'श्रेणी' })}</Label>
                <Select value={selectedMedia.category} onValueChange={(value) => setSelectedMedia({ ...selectedMedia, category: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mediaCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {t(category.label)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>{t({ en: 'Tags', mr: 'टॅग' })}</Label>
                <Input
                  value={selectedMedia.tags ? selectedMedia.tags.join(', ') : ''}
                  onChange={(e) => setSelectedMedia({ ...selectedMedia, tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean) })}
                  placeholder="Enter tags separated by commas"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="editActive"
                    checked={selectedMedia.isActive}
                    onChange={(e) => setSelectedMedia({ ...selectedMedia, isActive: e.target.checked })}
                  />
                  <Label htmlFor="editActive">{t({ en: 'Active', mr: 'सक्रिय' })}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="editFeatured"
                    checked={selectedMedia.isFeatured}
                    onChange={(e) => setSelectedMedia({ ...selectedMedia, isFeatured: e.target.checked })}
                  />
                  <Label htmlFor="editFeatured">{t({ en: 'Featured', mr: 'फीचर्ड' })}</Label>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsEditMediaOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleUpdateMedia} className="bg-green-500 hover:bg-green-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Save Changes', mr: 'बदल जतन करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* News Detail Dialog */}
      <Dialog open={isNewsDetailOpen} onOpenChange={setIsNewsDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'News Details', mr: 'बातमी तपशील' })}</DialogTitle>
          </DialogHeader>

          {selectedNews && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="font-semibold">{t({ en: 'Title', mr: 'शीर्षक' })}</Label>
                    <p className="font-medium">{selectedNews.title.en}</p>
                    <p className="text-sm text-gray-600">{selectedNews.title.mr}</p>
                  </div>
                  
                  <div>
                    <Label className="font-semibold">{t({ en: 'Content', mr: 'सामग्री' })}</Label>
                    <p className="text-sm">{selectedNews.content.en}</p>
                    <p className="text-sm text-gray-600 mt-2">{selectedNews.content.mr}</p>
                  </div>

                  {selectedNews.summary && (selectedNews.summary.en || selectedNews.summary.mr) && (
                    <div>
                      <Label className="font-semibold">{t({ en: 'Summary', mr: 'सारांश' })}</Label>
                      <p className="text-sm">{selectedNews.summary.en}</p>
                      <p className="text-sm text-gray-600">{selectedNews.summary.mr}</p>
                    </div>
                  )}

                  {selectedNews.image && (
                    <div>
                      <Label className="font-semibold">{t({ en: 'Image', mr: 'प्रतिमा' })}</Label>
                      <img 
                        src={selectedNews.image} 
                        alt={selectedNews.title.en}
                        className="w-full h-48 object-cover rounded-lg mt-2"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-semibold">{t({ en: 'Category', mr: 'श्रेणी' })}</Label>
                      <Badge variant="outline">
                        {t(newsCategories.find(cat => cat.id === selectedNews.category)?.label || { en: '', mr: '' })}
                      </Badge>
                    </div>
                    <div>
                      <Label className="font-semibold">{t({ en: 'Priority', mr: 'प्राधान्य' })}</Label>
                      <Badge className={`${selectedNews.priority === 'high' ? 'bg-red-500 text-white' : selectedNews.priority === 'medium' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}>
                        {selectedNews.priority}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-semibold">{t({ en: 'Date', mr: 'तारीख' })}</Label>
                      <p>{selectedNews.date}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">{t({ en: 'Time', mr: 'वेळ' })}</Label>
                      <p>{selectedNews.time}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-semibold">{t({ en: 'Author', mr: 'लेखक' })}</Label>
                      <p>{selectedNews.author}</p>
                    </div>
                    <div>
                      <Label className="font-semibold">{t({ en: 'Read Count', mr: 'वाचन संख्या' })}</Label>
                      <p>{selectedNews.readCount}</p>
                    </div>
                  </div>

                  {selectedNews.tags && selectedNews.tags.length > 0 && (
                    <div>
                      <Label className="font-semibold">{t({ en: 'Tags', mr: 'टॅग' })}</Label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedNews.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Label className="font-semibold">{t({ en: 'Status', mr: 'स्थिती' })}</Label>
                    <div className="flex flex-wrap gap-1">
                      <Badge className={selectedNews.isPublished ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                        {selectedNews.isPublished ? 'Published' : 'Draft'}
                      </Badge>
                      {selectedNews.isFeatured && (
                        <Badge className="bg-orange-500 text-white">Featured</Badge>
                      )}
                      {selectedNews.isBreaking && (
                        <Badge className="bg-red-500 text-white">Breaking</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsNewsDetailOpen(false)}>
              {t({ en: 'Close', mr: 'बंद करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add News Dialog */}
      <Dialog open={isAddNewsOpen} onOpenChange={setIsAddNewsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add News Article', mr: 'नवीन बातमी जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Category', mr: 'श्रेणी' })} *</Label>
                <Select value={newNewsItem.category} onValueChange={(value) => setNewNewsItem({ ...newNewsItem, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {newsCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {t(category.label)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>{t({ en: 'Priority', mr: 'प्राधान्य' })} *</Label>
                <Select value={newNewsItem.priority} onValueChange={(value) => setNewNewsItem({ ...newNewsItem, priority: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">{t({ en: 'High', mr: 'उच्च' })}</SelectItem>
                    <SelectItem value="medium">{t({ en: 'Medium', mr: 'मध्यम' })}</SelectItem>
                    <SelectItem value="low">{t({ en: 'Low', mr: 'कमी' })}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Title (English)', mr: 'शीर्षक (इंग्रजी)' })} *</Label>
                <Input
                  value={newNewsItem.title.en}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, title: { ...newNewsItem.title, en: e.target.value } })}
                  placeholder="Enter title in English"
                />
              </div>
              <div>
                <Label>{t({ en: 'Title (Marathi)', mr: 'शीर्षक (मराठी)' })}</Label>
                <Input
                  value={newNewsItem.title.mr}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, title: { ...newNewsItem.title, mr: e.target.value } })}
                  placeholder="मराठीत शीर्षक टाका"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Summary (English)', mr: 'सारांश (इंग्रजी)' })}</Label>
                <Textarea
                  value={newNewsItem.summary.en}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, summary: { ...newNewsItem.summary, en: e.target.value } })}
                  placeholder="Brief summary for preview"
                  rows={2}
                />
              </div>
              <div>
                <Label>{t({ en: 'Summary (Marathi)', mr: 'सारांश (मराठी)' })}</Label>
                <Textarea
                  value={newNewsItem.summary.mr}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, summary: { ...newNewsItem.summary, mr: e.target.value } })}
                  placeholder="पूर्वावलोकनासाठी संक्षिप्त सारांश"
                  rows={2}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Content (English)', mr: 'सामग्री (इंग्रजी)' })} *</Label>
                <Textarea
                  value={newNewsItem.content.en}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, content: { ...newNewsItem.content, en: e.target.value } })}
                  placeholder="Enter full news content"
                  rows={6}
                />
              </div>
              <div>
                <Label>{t({ en: 'Content (Marathi)', mr: 'सामग्री (मराठी)' })}</Label>
                <Textarea
                  value={newNewsItem.content.mr}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, content: { ...newNewsItem.content, mr: e.target.value } })}
                  placeholder="संपूर्ण बातमी सामग्री टाका"
                  rows={6}
                />
              </div>
            </div>

            <div>
              <Label>{t({ en: 'Tags', mr: 'टॅग' })}</Label>
              <Input
                placeholder="Enter tags separated by commas"
                onChange={(e) => setNewNewsItem({ ...newNewsItem, tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean) })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Publish Date', mr: 'प्रकाशन तारीख' })}</Label>
                <Input
                  type="datetime-local"
                  value={newNewsItem.publishDate}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, publishDate: e.target.value })}
                />
              </div>
              <div>
                <Label>{t({ en: 'Expiry Date', mr: 'कालबाह्यता तारीख' })}</Label>
                <Input
                  type="datetime-local"
                  value={newNewsItem.expiryDate}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, expiryDate: e.target.value })}
                />
              </div>
            </div>

            <div>
              <Label>{t({ en: 'Image URL', mr: 'प्रतिमा URL' })}</Label>
              <Input
                value={newNewsItem.image || ''}
                onChange={(e) => setNewNewsItem({ ...newNewsItem, image: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={newNewsItem.isFeatured}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, isFeatured: e.target.checked })}
                />
                <Label htmlFor="featured">{t({ en: 'Mark as Featured', mr: 'फीचर्ड म्हणून चिन्हांकित करा' })}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="breaking"
                  checked={newNewsItem.isBreaking}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, isBreaking: e.target.checked })}
                />
                <Label htmlFor="breaking">{t({ en: 'Mark as Breaking News', mr: 'तातडीची बातमी म्हणून चिन्हांकित करा' })}</Label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddNewsOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddNews} className="bg-news hover:bg-news/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              {t({ en: 'Add News', mr: 'बातमी जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit News Dialog */}
      <Dialog open={isEditNewsOpen} onOpenChange={setIsEditNewsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Edit News Article', mr: 'बातमी संपादित करा' })}</DialogTitle>
          </DialogHeader>

          {selectedNews && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'Category', mr: 'श्रेणी' })}</Label>
                  <Select value={selectedNews.category} onValueChange={(value) => setSelectedNews({ ...selectedNews, category: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {newsCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {t(category.label)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>{t({ en: 'Priority', mr: 'प्राधान्य' })}</Label>
                  <Select value={selectedNews.priority} onValueChange={(value) => setSelectedNews({ ...selectedNews, priority: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">{t({ en: 'High', mr: 'उच्च' })}</SelectItem>
                      <SelectItem value="medium">{t({ en: 'Medium', mr: 'मध्यम' })}</SelectItem>
                      <SelectItem value="low">{t({ en: 'Low', mr: 'कमी' })}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'Title (English)', mr: 'शीर्षक (इंग्रजी)' })}</Label>
                  <Input
                    value={selectedNews.title.en}
                    onChange={(e) => setSelectedNews({ ...selectedNews, title: { ...selectedNews.title, en: e.target.value } })}
                  />
                </div>
                <div>
                  <Label>{t({ en: 'Title (Marathi)', mr: 'शीर्षक (मराठी)' })}</Label>
                  <Input
                    value={selectedNews.title.mr}
                    onChange={(e) => setSelectedNews({ ...selectedNews, title: { ...selectedNews.title, mr: e.target.value } })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label>{t({ en: 'Content (English)', mr: 'सामग्री (इंग्रजी)' })}</Label>
                  <Textarea
                    value={selectedNews.content.en}
                    onChange={(e) => setSelectedNews({ ...selectedNews, content: { ...selectedNews.content, en: e.target.value } })}
                    rows={6}
                  />
                </div>
                <div>
                  <Label>{t({ en: 'Content (Marathi)', mr: 'सामग्री (मराठी)' })}</Label>
                  <Textarea
                    value={selectedNews.content.mr}
                    onChange={(e) => setSelectedNews({ ...selectedNews, content: { ...selectedNews.content, mr: e.target.value } })}
                    rows={6}
                  />
                </div>
              </div>

              <div>
                <Label>{t({ en: 'Tags', mr: 'टॅग' })}</Label>
                <Input
                  value={selectedNews.tags ? selectedNews.tags.join(', ') : ''}
                  onChange={(e) => setSelectedNews({ ...selectedNews, tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean) })}
                  placeholder="Enter tags separated by commas"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="editPublished"
                    checked={selectedNews.isPublished}
                    onChange={(e) => setSelectedNews({ ...selectedNews, isPublished: e.target.checked })}
                  />
                  <Label htmlFor="editPublished">{t({ en: 'Published', mr: 'प्रकाशित' })}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="editFeatured"
                    checked={selectedNews.isFeatured}
                    onChange={(e) => setSelectedNews({ ...selectedNews, isFeatured: e.target.checked })}
                  />
                  <Label htmlFor="editFeatured">{t({ en: 'Featured', mr: 'फीचर्ड' })}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="editBreaking"
                    checked={selectedNews.isBreaking}
                    onChange={(e) => setSelectedNews({ ...selectedNews, isBreaking: e.target.checked })}
                  />
                  <Label htmlFor="editBreaking">{t({ en: 'Breaking', mr: 'तातडीची' })}</Label>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsEditNewsOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleUpdateNews} className="bg-green-500 hover:bg-green-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Save Changes', mr: 'बदल जतन करा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Event Management Dialog */}
      <Dialog open={isEventManagementOpen} onOpenChange={setIsEventManagementOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>{t({ en: 'Event Management', mr: 'कार्यक्रम व्यवस्थापन' })}</DialogTitle>
              <Button onClick={() => setIsAddEventOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                {t({ en: 'Add Event', mr: 'कार्यक्रम जोडा' })}
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{event.date}</div>
                        <div className="text-xs text-gray-600">{event.month}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{event.title.en}</h3>
                        <p className="text-gray-600">{event.title.mr}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {event.time}
                          </span>
                          {event.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {event.location.en}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteEvent(event.id)}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Event Dialog */}
      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add New Event', mr: 'नवीन कार्यक्रम जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Event Title (English)', mr: 'कार्यक्रम शीर्षक (इंग्रजी)' })} *</Label>
                <Input
                  value={newEvent.title.en}
                  onChange={(e) => setNewEvent({ ...newEvent, title: { ...newEvent.title, en: e.target.value } })}
                  placeholder="Enter event title"
                />
              </div>
              <div>
                <Label>{t({ en: 'Event Title (Marathi)', mr: 'कार्यक्रम शीर्षक (मराठी)' })}</Label>
                <Input
                  value={newEvent.title.mr}
                  onChange={(e) => setNewEvent({ ...newEvent, title: { ...newEvent.title, mr: e.target.value } })}
                  placeholder="कार्यक्रम शीर्षक टाका"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Date', mr: 'तारीख' })} *</Label>
                <Input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
              </div>
              <div>
                <Label>{t({ en: 'Time', mr: 'वेळ' })} *</Label>
                <Input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Location (English)', mr: 'स्थान (इंग्रजी)' })}</Label>
                <Input
                  value={newEvent.location.en}
                  onChange={(e) => setNewEvent({ ...newEvent, location: { ...newEvent.location, en: e.target.value } })}
                  placeholder="Event location"
                />
              </div>
              <div>
                <Label>{t({ en: 'Location (Marathi)', mr: 'स्थान (मराठी)' })}</Label>
                <Input
                  value={newEvent.location.mr}
                  onChange={(e) => setNewEvent({ ...newEvent, location: { ...newEvent.location, mr: e.target.value } })}
                  placeholder="कार्यक्रम स्थान"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>{t({ en: 'Description (English)', mr: 'वर्णन (इंग्रजी)' })}</Label>
                <Textarea
                  value={newEvent.description.en}
                  onChange={(e) => setNewEvent({ ...newEvent, description: { ...newEvent.description, en: e.target.value } })}
                  placeholder="Event description"
                  rows={3}
                />
              </div>
              <div>
                <Label>{t({ en: 'Description (Marathi)', mr: 'वर्णन (मराठी)' })}</Label>
                <Textarea
                  value={newEvent.description.mr}
                  onChange={(e) => setNewEvent({ ...newEvent, description: { ...newEvent.description, mr: e.target.value } })}
                  placeholder="कार्यक्रम वर्णन"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddEvent} className="bg-blue-500 hover:bg-blue-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Add Event', mr: 'कार्यक्रम जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* News Category Management Dialog */}
      <Dialog open={isNewsCategoryManagementOpen} onOpenChange={setIsNewsCategoryManagementOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>{t({ en: 'News Category Management', mr: 'बातम्या श्रेणी व्यवस्थापन' })}</DialogTitle>
              <Button onClick={() => setIsAddNewsCategoryOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                {t({ en: 'Add Category', mr: 'श्रेणी जोडा' })}
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {newsCategories.map((category) => (
              <Card key={category.id} className="border-0 shadow-lg glass-effect">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{category.label.en}</h3>
                      <p className="text-gray-600">{category.label.mr}</p>
                      <p className="text-sm text-gray-500">{category.count} news items</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteNewsCategory(category.id)}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Add News Category Dialog */}
      <Dialog open={isAddNewsCategoryOpen} onOpenChange={setIsAddNewsCategoryOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t({ en: 'Add News Category', mr: 'नवीन बातमी श्रेणी जोडा' })}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>{t({ en: 'Category Name (English)', mr: 'श्रेणीचे नाव (इंग्रजी)' })} *</Label>
              <Input
                value={newNewsCategory.label.en}
                onChange={(e) => setNewNewsCategory({ ...newNewsCategory, label: { ...newNewsCategory.label, en: e.target.value } })}
                placeholder="Enter category name"
              />
            </div>
            
            <div>
              <Label>{t({ en: 'Category Name (Marathi)', mr: 'श्रेणीचे नाव (मराठी)' })}</Label>
              <Input
                value={newNewsCategory.label.mr}
                onChange={(e) => setNewNewsCategory({ ...newNewsCategory, label: { ...newNewsCategory.label, mr: e.target.value } })}
                placeholder="श्रेणीचे नाव टाका"
              />
            </div>

            <div>
              <Label>{t({ en: 'Icon Type', mr: 'आयकन प्रकार' })}</Label>
              <Select value={newNewsCategory.icon} onValueChange={(value) => setNewNewsCategory({ ...newNewsCategory, icon: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Newspaper">Newspaper</SelectItem>
                  <SelectItem value="Megaphone">Megaphone</SelectItem>
                  <SelectItem value="Calendar">Calendar</SelectItem>
                  <SelectItem value="AlertTriangle">Alert Triangle</SelectItem>
                  <SelectItem value="Zap">Zap</SelectItem>
                  <SelectItem value="Bell">Bell</SelectItem>
                  <SelectItem value="Info">Info</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setIsAddNewsCategoryOpen(false)}>
              {t({ en: 'Cancel', mr: 'रद्द करा' })}
            </Button>
            <Button onClick={handleAddNewsCategory} className="bg-blue-500 hover:bg-blue-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              {t({ en: 'Add Category', mr: 'श्रेणी जोडा' })}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}