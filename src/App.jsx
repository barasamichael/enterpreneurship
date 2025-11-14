import React, { useState } from 'react';
import { Home, Settings, Search, Plus, MapPin, MessageCircle, Star, Clock, Phone, Camera, User, CheckCircle, Calendar, CreditCard, AlertCircle, Wrench, Zap, Home as HomeIcon, Bug, Bell, Menu, X, Filter, MoreVertical, Send, ChevronLeft } from 'lucide-react';

const HomairApp = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTechnician, setSelectedTechnician] = useState(null);
  const [selectedUrgency, setSelectedUrgency] = useState('medium');
  const [newRequest, setNewRequest] = useState({
    category: 'plumbing',
    description: 'Kitchen sink is leaking from the faucet base. Water dripping constantly even when turned off completely.',
    urgency: 'medium',
    photos: []
  });

  // Sample data
  const sampleRequests = [
    {
      id: 1,
      title: 'Kitchen Sink Leak',
      category: 'Plumbing',
      status: 'in-progress',
      technician: 'David Ochieng',
      estimatedCost: 'KSh 2,800',
      date: '2025-11-07',
      urgency: 'medium',
      progress: 75,
      avatar: 'DO'
    },
    {
      id: 2,
      title: 'Bathroom Light Fixture',
      category: 'Electrical',
      status: 'completed',
      technician: 'Sarah Mwangi',
      estimatedCost: 'KSh 3,200',
      date: '2025-11-05',
      urgency: 'low',
      progress: 100,
      avatar: 'SM'
    },
    {
      id: 3,
      title: 'Bedroom Door Lock',
      category: 'General',
      status: 'pending',
      technician: null,
      estimatedCost: 'KSh 1,500',
      date: '2025-11-08',
      urgency: 'high',
      progress: 0,
      avatar: null
    },
    {
      id: 4,
      title: 'AC Unit Maintenance',
      category: 'HVAC',
      status: 'scheduled',
      technician: 'Grace Wanjiku',
      estimatedCost: 'KSh 4,500',
      date: '2025-11-10',
      urgency: 'low',
      progress: 0,
      avatar: 'GW'
    }
  ];

  const sampleTechnicians = [
    {
      id: 1,
      name: 'John Kamau',
      specialty: 'Plumbing Specialist',
      experience: '5 years',
      rating: 4.9,
      reviews: 127,
      price: 2500,
      availability: 'Available today',
      eta: '30 minutes',
      avatar: 'JK',
      description: 'Expert in kitchen and bathroom repairs. Quick response time.',
      completedJobs: 245,
      responseTime: '15 min',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Mwangi',
      specialty: 'General Maintenance',
      experience: '7 years',
      rating: 4.8,
      reviews: 89,
      price: 2200,
      availability: 'Available tomorrow',
      eta: '45 minutes',
      avatar: 'SM',
      description: 'Comprehensive maintenance services with warranty.',
      completedJobs: 198,
      responseTime: '12 min',
      verified: true
    },
    {
      id: 3,
      name: 'David Ochieng',
      specialty: 'Master Plumber',
      experience: '10 years',
      rating: 4.9,
      reviews: 156,
      price: 2800,
      availability: 'Available in 2 hours',
      eta: 'Premium service',
      avatar: 'DO',
      description: 'Professional diagnosis and premium service guarantee.',
      completedJobs: 312,
      responseTime: '8 min',
      verified: true
    },
    {
      id: 4,
      name: 'Grace Wanjiku',
      specialty: 'Electrical Expert',
      experience: '6 years',
      rating: 4.7,
      reviews: 94,
      price: 3100,
      availability: 'Available now',
      eta: '20 minutes',
      avatar: 'GW',
      description: 'Certified electrician with emergency service.',
      completedJobs: 167,
      responseTime: '10 min',
      verified: true
    }
  ];

  const serviceCategories = [
    { 
      id: 'plumbing', 
      name: 'Plumbing', 
      icon: Wrench, 
      bgColor: '#3B82F6',
      lightBg: '#EBF4FF',
      textColor: '#1E40AF',
      description: 'Pipes, leaks, fixtures' 
    },
    { 
      id: 'electrical', 
      name: 'Electrical', 
      icon: Zap, 
      bgColor: '#F59E0B',
      lightBg: '#FEF3C7',
      textColor: '#D97706',
      description: 'Wiring, outlets, lighting' 
    },
    { 
      id: 'general', 
      name: 'General Maintenance', 
      icon: HomeIcon, 
      bgColor: '#10B981',
      lightBg: '#D1FAE5',
      textColor: '#047857',
      description: 'Doors, windows, locks' 
    },
    { 
      id: 'pest', 
      name: 'Pest Control', 
      icon: Bug, 
      bgColor: '#EF4444',
      lightBg: '#FEE2E2',
      textColor: '#DC2626',
      description: 'Insects, rodents' 
    }
  ];

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'create-request', name: 'New Request', icon: Plus },
    { id: 'quotes', name: 'Find Experts', icon: Search },
    { id: 'tracking', name: 'Track Jobs', icon: MapPin },
    { id: 'completion', name: 'Completed', icon: CheckCircle },
  ];

  const Sidebar = () => (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`} style={{boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
        
        {/* Header */}
        <div className="p-6" style={{borderBottom: '1px solid #E5E7EB'}}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Homair</h1>
                <p className="text-xs text-gray-500">Repair Services</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg"
              style={{backgroundColor: 'transparent'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6" style={{borderBottom: '1px solid #F3F4F6'}}>
          <div className="flex items-center gap-3">
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              A
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Amina Wanjiku</h3>
              <p className="text-sm text-gray-500">Kileleshwa Heights</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">
          {navigation.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 text-left transition-all"
                style={{
                  background: isActive ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' : 'transparent',
                  color: isActive ? 'white' : '#6B7280',
                  boxShadow: isActive ? '0 10px 25px -3px rgba(99, 102, 241, 0.4)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = '#F9FAFB';
                    e.target.style.color = '#111827';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#6B7280';
                  }
                }}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4" style={{borderTop: '1px solid #E5E7EB'}}>
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 rounded-xl transition-all"
            onMouseEnter={(e) => e.target.style.backgroundColor = '#F9FAFB'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </>
  );

  const MobileHeader = () => (
    <header className="lg:hidden bg-white px-4 py-4 flex items-center justify-between" style={{borderBottom: '1px solid #E5E7EB'}}>
      <button
        onClick={() => setSidebarOpen(true)}
        className="p-2 rounded-lg"
        onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="text-lg font-bold text-gray-900">Homair</h1>
      <button className="p-2 rounded-lg relative"
        onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F6'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        <Bell className="w-6 h-6" />
        <span style={{
          position: 'absolute',
          top: '-4px',
          right: '-4px',
          width: '20px',
          height: '20px',
          backgroundColor: '#EF4444',
          color: 'white',
          fontSize: '12px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>3</span>
      </button>
    </header>
  );

  const Dashboard = () => (
    <div className="w-full">
      {/* Welcome Section */}
      <div style={{
        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
        color: 'white',
        padding: '32px',
        margin: '0 24px 32px 24px',
        borderRadius: '24px'
      }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Good afternoon, Amina</h1>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className="text-sm md:text-base">How can we help you today?</p>
          </div>
          <div className="text-right">
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '16px'
            }}>
              <p style={{color: 'rgba(255, 255, 255, 0.8)'}} className="text-sm">Active Jobs</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {serviceCategories.map((service) => {
            const IconComponent = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => {
                  setNewRequest({ ...newRequest, category: service.id });
                  setCurrentView('create-request');
                }}
                className="group bg-white p-6 rounded-2xl transition-all duration-300"
                style={{
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  border: '1px solid #F3F4F6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: service.bgColor,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}
                  className="group-hover:scale-110 transition-transform"
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-1">{service.name}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Requests */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Your Requests</h2>
          <button
            onClick={() => setCurrentView('create-request')}
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 25px -3px rgba(99, 102, 241, 0.5)'}
            onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
          >
            <Plus className="w-4 h-4 inline mr-1" />
            New
          </button>
        </div>
        
        <div className="space-y-4">
          {sampleRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white p-5 rounded-2xl cursor-pointer transition-all"
              style={{
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                border: '1px solid #F3F4F6'
              }}
              onClick={() => setCurrentView('tracking')}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)'}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: request.status === 'completed' ? '#10B981' :
                        request.status === 'in-progress' ? '#3B82F6' :
                        request.status === 'scheduled' ? '#8B5CF6' : '#F59E0B'
                    }}></div>
                    <h3 className="font-semibold text-gray-900">{request.title}</h3>
                    <span style={{
                      padding: '4px 8px',
                      fontSize: '12px',
                      borderRadius: '9999px',
                      backgroundColor: serviceCategories.find(s => s.id === request.category.toLowerCase())?.lightBg || '#F3F4F6',
                      color: serviceCategories.find(s => s.id === request.category.toLowerCase())?.textColor || '#6B7280'
                    }}>
                      {request.category}
                    </span>
                  </div>
                  {request.technician && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {request.avatar}
                      </div>
                      <span>{request.technician}</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{request.estimatedCost}</p>
                  <p className="text-sm text-gray-500">{request.date}</p>
                </div>
              </div>
              
              {request.progress > 0 && (
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                        height: '8px',
                        borderRadius: '9999px',
                        width: `${request.progress}%`,
                        transition: 'all 0.3s ease'
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{request.progress}%</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <div className="flex items-center gap-4">
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <div className="flex items-center gap-4">
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <div className="flex items-center gap-4">
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">2h</p>
              <p className="text-sm text-gray-600">Response</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CreateRequest = () => (
    <div className="w-full px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="lg:hidden flex items-center gap-2 text-gray-600 mb-4 p-2 rounded-lg"
            onMouseEnter={(e) => e.target.style.color = '#111827'}
            onMouseLeave={(e) => e.target.style.color = '#6B7280'}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Request</h1>
          <p className="text-gray-600">Describe your repair issue to get accurate quotes</p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <div className="p-8 space-y-8">
            
            {/* Service Category */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">Service Category</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceCategories.map((service) => {
                  const IconComponent = service.icon;
                  const isSelected = newRequest.category === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setNewRequest({ ...newRequest, category: service.id })}
                      className="p-6 rounded-2xl transition-all"
                      style={{
                        backgroundColor: isSelected ? service.lightBg : 'white',
                        border: isSelected ? `2px solid ${service.bgColor}` : '2px solid #E5E7EB',
                        boxShadow: isSelected ? '0 10px 25px -3px rgba(0, 0, 0, 0.1)' : 'none',
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.target.style.borderColor = '#D1D5DB';
                          e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.target.style.borderColor = '#E5E7EB';
                          e.target.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: service.bgColor,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px auto'
                      }}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-base">{service.name}</h3>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Problem Description */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">Problem Description</label>
              <textarea
                className="w-full p-4 rounded-2xl resize-none transition-all"
                style={{
                  border: '2px solid #E5E7EB',
                  outline: 'none'
                }}
                rows="5"
                placeholder="Describe the issue in detail..."
                value={newRequest.description}
                onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366F1';
                  e.target.style.boxShadow = '0 0 0 4px rgba(99, 102, 241, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E5E7EB';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <p className="text-sm text-gray-500 mt-2">Be specific about symptoms, location, and when the problem started</p>
            </div>

            {/* Urgency Level */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">Urgency Level</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: 'low', label: 'Low', desc: 'Can wait', bgColor: '#10B981', lightBg: '#D1FAE5' },
                  { id: 'medium', label: 'Medium', desc: 'This week', bgColor: '#F59E0B', lightBg: '#FEF3C7' },
                  { id: 'high', label: 'High', desc: 'Urgent', bgColor: '#EF4444', lightBg: '#FEE2E2' }
                ].map((urgency) => {
                  const isSelected = selectedUrgency === urgency.id;
                  return (
                    <button
                      key={urgency.id}
                      onClick={() => {
                        setSelectedUrgency(urgency.id);
                        setNewRequest({ ...newRequest, urgency: urgency.id });
                      }}
                      className="p-4 rounded-2xl transition-all"
                      style={{
                        backgroundColor: isSelected ? urgency.lightBg : 'white',
                        border: isSelected ? `2px solid ${urgency.bgColor}` : '2px solid #E5E7EB',
                        transform: isSelected ? 'scale(1.05)' : 'scale(1)'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.target.style.borderColor = '#D1D5DB';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.target.style.borderColor = '#E5E7EB';
                        }
                      }}
                    >
                      <div style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: urgency.bgColor,
                        borderRadius: '50%',
                        margin: '0 auto 8px auto'
                      }}></div>
                      <h3 className="font-semibold text-gray-900">{urgency.label}</h3>
                      <p className="text-sm text-gray-600">{urgency.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">Photos/Videos</label>
              <div 
                className="rounded-2xl p-12 text-center cursor-pointer transition-all"
                style={{
                  border: '2px dashed #D1D5DB',
                  backgroundColor: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#6366F1';
                  e.target.style.backgroundColor = '#F8FAFC';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#D1D5DB';
                  e.target.style.backgroundColor = 'white';
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Media</h3>
                <p className="text-gray-600 mb-4">Photos and videos help experts provide accurate quotes</p>
                <button 
                  style={{
                    background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                    color: 'white',
                    padding: '12px 32px',
                    borderRadius: '12px',
                    fontWeight: '600'
                  }}
                  onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 25px -3px rgba(99, 102, 241, 0.5)'}
                  onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                >
                  Choose Files
                </button>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">Location</label>
              <div 
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Kileleshwa Heights, Apartment 4B</p>
                  <p className="text-sm text-gray-600">Nairobi, Kenya</p>
                </div>
                <button 
                  className="font-semibold transition-colors"
                  style={{color: '#6366F1'}}
                  onMouseEnter={(e) => e.target.style.color = '#4F46E5'}
                  onMouseLeave={(e) => e.target.style.color = '#6366F1'}
                >
                  Change
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={() => setCurrentView('quotes')}
                className="w-full py-4 px-8 rounded-2xl text-lg font-semibold transition-all"
                style={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                  e.target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get Quotes from Local Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const QuotesView = () => (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => setCurrentView('create-request')}
            className="lg:hidden flex items-center gap-2 text-gray-600 mb-4 p-2 rounded-lg"
            onMouseEnter={(e) => e.target.style.color = '#111827'}
            onMouseLeave={(e) => e.target.style.color = '#6B7280'}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Quotes</h1>
          <p className="text-gray-600">4 verified experts available for your repair</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sampleTechnicians.map((tech) => (
            <div
              key={tech.id}
              onClick={() => setSelectedTechnician(tech.id)}
              className="bg-white rounded-2xl p-6 cursor-pointer transition-all"
              style={{
                border: selectedTechnician === tech.id ? '2px solid #6366F1' : '2px solid #E5E7EB',
                boxShadow: selectedTechnician === tech.id ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 4px rgba(99, 102, 241, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                transform: selectedTechnician === tech.id ? 'scale(1.02)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (selectedTechnician !== tech.id) {
                  e.target.style.borderColor = '#D1D5DB';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTechnician !== tech.id) {
                  e.target.style.borderColor = '#E5E7EB';
                  e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {/* Mobile Layout */}
              <div className="block md:hidden">
                {/* Header - Mobile */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '16px'
                    }}>
                      {tech.avatar}
                    </div>
                    {tech.verified && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-4px',
                        right: '-4px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.specialty}</p>
                  </div>
                </div>

                {/* Price - Mobile */}
                <div className="text-center mb-4 p-3 rounded-xl" style={{backgroundColor: '#F0FDF4'}}>
                  <p style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    KSh {tech.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">Total estimate</p>
                </div>

                {/* Rating & Experience - Mobile */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-amber-400" style={{fill: '#FBBF24'}} />
                      <span className="font-semibold">{tech.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">({tech.reviews} reviews)</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{tech.experience}</p>
                    <p className="text-xs text-gray-500">experience</p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}>
                      {tech.avatar}
                    </div>
                    {tech.verified && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-4px',
                        right: '-4px',
                        width: '24px',
                        height: '24px',
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                        <p className="text-gray-600 mb-2">{tech.specialty}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-400" style={{fill: '#FBBF24'}} />
                            <span className="font-semibold">{tech.rating}</span>
                            <span className="text-gray-500 text-sm">({tech.reviews} reviews)</span>
                          </div>
                          <span className="text-gray-500 text-sm">{tech.experience} exp.</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p style={{
                          fontSize: '28px',
                          fontWeight: 'bold',
                          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                          KSh {tech.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500">Total estimate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Badge */}
              <div 
                className="rounded-2xl p-4 mb-4"
                style={{
                  backgroundColor: '#F0FDF4',
                  border: '1px solid #BBF7D0'
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10B981',
                      borderRadius: '50%'
                    }} className="animate-pulse"></div>
                    <span className="font-semibold" style={{color: '#047857'}}>{tech.availability}</span>
                  </div>
                  <span className="font-medium" style={{color: '#059669'}}>ETA: {tech.eta}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">{tech.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 rounded-xl" style={{backgroundColor: '#F8FAFC'}}>
                  <p className="text-xl font-bold text-gray-900">{tech.completedJobs}</p>
                  <p className="text-sm text-gray-600">Jobs Done</p>
                </div>
                <div className="text-center p-3 rounded-xl" style={{backgroundColor: '#F8FAFC'}}>
                  <p className="text-xl font-bold text-gray-900">{tech.responseTime}</p>
                  <p className="text-sm text-gray-600">Response</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => setCurrentView('tracking')}
                  className="flex-1 py-3 px-6 rounded-xl font-semibold transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 25px -3px rgba(99, 102, 241, 0.5)'}
                  onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                >
                  Book Now
                </button>
                <button 
                  className="p-3 rounded-xl transition-colors"
                  style={{
                    border: '2px solid #E5E7EB'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#D1D5DB';
                    e.target.style.backgroundColor = '#F9FAFB';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#E5E7EB';
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  className="p-3 rounded-xl transition-colors"
                  style={{
                    border: '2px solid #E5E7EB'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#D1D5DB';
                    e.target.style.backgroundColor = '#F9FAFB';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#E5E7EB';
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Book Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setCurrentView('tracking')}
            disabled={!selectedTechnician}
            className="px-12 py-4 rounded-2xl font-bold text-lg transition-all"
            style={{
              background: selectedTechnician ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' : '#E5E7EB',
              color: selectedTechnician ? 'white' : '#9CA3AF',
              cursor: selectedTechnician ? 'pointer' : 'not-allowed'
            }}
            onMouseEnter={(e) => {
              if (selectedTechnician) {
                e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                e.target.style.transform = 'translateY(-4px)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedTechnician) {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            Book Selected Expert
          </button>
        </div>
      </div>
    </div>
  );

  const TrackingView = () => (
    <div className="w-full px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => setCurrentView('quotes')}
            className="lg:hidden flex items-center gap-2 text-gray-600 mb-4 p-2 rounded-lg"
            onMouseEnter={(e) => e.target.style.color = '#111827'}
            onMouseLeave={(e) => e.target.style.color = '#6B7280'}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <div className="bg-white rounded-2xl p-8" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Repair in Progress</h1>
                <p className="text-gray-600">David Ochieng is working on your kitchen sink</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-sm text-gray-500">Job ID</p>
                <p className="font-mono text-lg font-bold text-gray-900">#REP-2024-1107</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-2xl p-8 mb-6" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-gray-900">Overall Progress</span>
              <span 
                className="text-lg font-bold"
                style={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                75% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 relative">
              <div 
                className="h-4 rounded-full transition-all duration-1000 relative" 
                style={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                  width: '75%'
                }}
              >
                <div style={{
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  width: '16px',
                  height: '16px',
                  backgroundColor: 'white',
                  border: '4px solid #6366F1',
                  borderRadius: '50%'
                }} className="animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="space-y-6">
            {[
              { status: 'Request Submitted', time: '9:15 AM', completed: true, icon: CheckCircle },
              { status: 'Expert Assigned', time: '9:22 AM', completed: true, icon: User },
              { status: 'En Route to Location', time: '9:45 AM', completed: true, icon: MapPin },
              { status: 'Work in Progress', time: '10:15 AM', completed: true, icon: Wrench, current: true },
              { status: 'Quality Inspection', time: 'Pending', completed: false, icon: CheckCircle },
              { status: 'Payment & Completion', time: 'Pending', completed: false, icon: CreditCard }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all"
                    style={{
                      background: step.completed 
                        ? step.current 
                          ? 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' 
                          : 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
                        : '#E5E7EB',
                      color: step.completed ? 'white' : '#9CA3AF'
                    }}
                    className={step.current ? 'animate-pulse' : ''}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.status}
                    </h3>
                    <p className="text-sm text-gray-500">{step.time}</p>
                  </div>
                  {step.current && (
                    <div 
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                        color: 'white'
                      }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Active
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Technician Card */}
        <div className="bg-white rounded-2xl p-8 mb-6" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Expert</h3>
          <div className="flex items-center gap-4">
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '20px'
            }}>
              DO
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900">David Ochieng</h4>
              <p className="text-gray-600">Master Plumber • 10 years experience</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 text-amber-400" style={{fill: '#FBBF24'}} />
                <span className="text-sm font-semibold">4.9</span>
                <span className="text-sm text-gray-500">(156 reviews)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                className="p-3 rounded-2xl transition-colors"
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#F1F5F9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F8FAFC'}
              >
                <MessageCircle className="w-6 h-6 text-gray-600" />
              </button>
              <button 
                className="p-3 rounded-2xl transition-colors"
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#F1F5F9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F8FAFC'}
              >
                <Phone className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Live Updates */}
        <div className="bg-white rounded-2xl p-8 mb-6" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Updates</h3>
          <div className="space-y-4">
            {[
              { time: '10:45 AM', message: 'Issue diagnosed - replacing faucet cartridge and O-ring. Work proceeding smoothly.', type: 'update' },
              { time: '10:30 AM', message: 'Started repair work on kitchen sink faucet mechanism.', type: 'update' },
              { time: '10:15 AM', message: 'Arrived at your location and beginning assessment.', type: 'arrival' },
              { time: '9:45 AM', message: 'En route to your location with necessary tools and replacement parts.', type: 'travel' }
            ].map((update, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-2xl" style={{backgroundColor: '#F8FAFC', border: '1px solid #F1F5F9'}}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  marginTop: '8px',
                  backgroundColor: update.type === 'arrival' ? '#10B981' :
                    update.type === 'travel' ? '#3B82F6' : '#9CA3AF'
                }}></div>
                <div className="flex-1">
                  <p className="text-gray-900 leading-relaxed">{update.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{update.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button 
            onClick={() => setCurrentView('completion')}
            className="flex-1 py-4 px-8 rounded-2xl font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Mark as Complete
          </button>
          <button 
            className="px-8 py-4 rounded-2xl font-semibold transition-colors"
            style={{
              border: '2px solid #E5E7EB'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#D1D5DB';
              e.target.style.backgroundColor = '#F9FAFB';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );

  const CompletionView = () => (
    <div className="w-full px-6">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div 
          className="text-white p-12 rounded-3xl mb-8 text-center"
          style={{
            background: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #0D9488 100%)'
          }}
        >
          <div style={{
            width: '96px',
            height: '96px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto'
          }}>
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Repair Completed Successfully!</h1>
          <p style={{color: 'rgba(255, 255, 255, 0.9)'}} className="text-lg">Your kitchen sink has been expertly repaired by David Ochieng</p>
        </div>

        {/* Before & After */}
        <div className="bg-white rounded-2xl p-8 mb-6" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Before & After Documentation</h3>
          <div className="grid grid-cols-2 gap-6">
            <div 
              className="rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
                border: '2px solid #FECACA'
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <AlertCircle className="w-10 h-10 text-white" />
              </div>
              <p className="font-semibold text-gray-900 mb-1">Before Repair</p>
              <p className="text-sm text-gray-600">Constant dripping leak</p>
            </div>
            <div 
              className="rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                border: '2px solid #BBF7D0'
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto'
              }}>
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <p className="font-semibold text-gray-900 mb-1">After Repair</p>
              <p className="text-sm text-gray-600">Perfect seal, tested & verified</p>
            </div>
          </div>
        </div>

        {/* Job Summary */}
        <div className="bg-white rounded-2xl p-8 mb-6" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Invoice Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Labor (2.5 hours)</span>
              <span className="font-semibold text-gray-900">KSh 2,000</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Parts (Premium faucet cartridge & seals)</span>
              <span className="font-semibold text-gray-900">KSh 800</span>
            </div>
            <div style={{borderTop: '1px solid #E5E7EB', paddingTop: '16px'}}>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Total Amount</span>
                <span 
                  className="text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  KSh 2,800
                </span>
              </div>
            </div>
            <div 
              className="rounded-2xl p-4 mt-6"
              style={{
                background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                border: '1px solid #BBF7D0'
              }}
            >
              <div className="flex items-center justify-center gap-2" style={{color: '#047857'}}>
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Payment processed securely via M-Pesa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Warranty */}
        <div 
          className="rounded-2xl p-8 mb-6"
          style={{
            background: 'linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)',
            border: '1px solid #93C5FD'
          }}
        >
          <h3 className="text-xl font-semibold mb-3" style={{color: '#1E3A8A'}}>Warranty Coverage</h3>
          <p className="leading-relaxed" style={{color: '#1E40AF'}}>
            This repair is covered by our comprehensive 1-year warranty. David Ochieng guarantees all workmanship and replacement parts. 
            Any issues with the repaired components will be addressed free of charge during the warranty period.
          </p>
        </div>

        {/* Rating Section */}
        <div className="bg-white rounded-2xl p-8 mb-6" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Rate Your Experience</h3>
          <div className="text-center mb-6">
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="w-10 h-10 cursor-pointer transition-transform hover:scale-125" 
                  style={{color: '#FBBF24', fill: '#FBBF24'}}
                />
              ))}
            </div>
            <p className="text-gray-600">How would you rate David's service?</p>
          </div>
          <textarea
            className="w-full p-4 rounded-2xl resize-none transition-all"
            style={{
              border: '2px solid #E5E7EB'
            }}
            rows="4"
            placeholder="Share your experience (optional)..."
            defaultValue="Outstanding service! David was incredibly professional, arrived exactly on time, and completed the repair efficiently. The sink works perfectly now and he even provided helpful maintenance tips. I'll definitely book him again for future repairs."
            onFocus={(e) => {
              e.target.style.borderColor = '#6366F1';
              e.target.style.boxShadow = '0 0 0 4px rgba(99, 102, 241, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="py-4 px-8 rounded-2xl font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Return to Dashboard
          </button>
          <button 
            className="py-4 px-8 rounded-2xl font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
              color: '#374151'
            }}
            onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
            onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
          >
            Book David Again
          </button>
        </div>

        {/* Next Actions */}
        <div className="bg-white rounded-2xl p-8" style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #F3F4F6'}}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              className="p-6 rounded-2xl text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)'
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
            >
              <Calendar className="w-12 h-12 mx-auto mb-3" style={{color: '#3B82F6'}} />
              <h4 className="font-semibold text-gray-900 mb-1">Schedule Maintenance</h4>
              <p className="text-sm text-gray-600">Set up regular check-ups</p>
            </button>
            <button 
              onClick={() => setCurrentView('create-request')}
              className="p-6 rounded-2xl text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)'
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
            >
              <Plus className="w-12 h-12 mx-auto mb-3" style={{color: '#10B981'}} />
              <h4 className="font-semibold text-gray-900 mb-1">New Request</h4>
              <p className="text-sm text-gray-600">Need another repair?</p>
            </button>
            <button 
              className="p-6 rounded-2xl text-center transition-all"
              style={{
                background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)'
              }}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
            >
              <User className="w-12 h-12 mx-auto mb-3" style={{color: '#8B5CF6'}} />
              <h4 className="font-semibold text-gray-900 mb-1">Save Expert</h4>
              <p className="text-sm text-gray-600">Add David to favorites</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <MobileHeader />
        <main className="min-h-screen py-8">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'create-request' && <CreateRequest />}
          {currentView === 'quotes' && <QuotesView />}
          {currentView === 'tracking' && <TrackingView />}
          {currentView === 'completion' && <CompletionView />}
        </main>
      </div>
      
      {/* Mobile FAB */}
      <button
        onClick={() => setCurrentView('create-request')}
        className="lg:hidden fixed bottom-6 right-6 w-16 h-16 text-white rounded-full transition-all flex items-center justify-center z-40"
        style={{
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        onMouseEnter={(e) => e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)'}
        onMouseLeave={(e) => e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
};

export default HomairApp;
