'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
}

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  date: string;
  updates: {
    time: string;
    message: string;
  }[];
}

export default function StatusPage() {
  const [services] = useState<ServiceStatus[]>([
    {
      name: 'Pills API Core',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms'
    },
    {
      name: 'Weather API',
      status: 'operational', 
      uptime: '99.97%',
      responseTime: '52ms'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '38ms'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '12ms'
    },
    {
      name: 'CDN',
      status: 'degraded',
      uptime: '99.89%',
      responseTime: '125ms'
    },
    {
      name: 'Monitoring',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '28ms'
    }
  ]);

  const [incidents] = useState<Incident[]>([
    {
      id: '1',
      title: 'CDN Performance Degradation',
      status: 'monitoring',
      severity: 'minor',
      date: '2025-08-10T14:30:00Z',
      updates: [
        {
          time: '15:45',
          message: 'We are monitoring the situation. Response times have improved from initial reports.'
        },
        {
          time: '14:30',
          message: 'We are investigating reports of slower than normal CDN response times in some regions.'
        }
      ]
    },
    {
      id: '2',
      title: 'Scheduled Maintenance - Database Optimization',
      status: 'resolved',
      severity: 'minor',
      date: '2025-08-09T02:00:00Z',
      updates: [
        {
          time: '04:00',
          message: 'Maintenance completed successfully. All services are now fully operational.'
        },
        {
          time: '02:00',
          message: 'Starting scheduled database optimization. Brief service interruptions expected.'
        }
      ]
    }
  ]);

  const [overallStatus, setOverallStatus] = useState<'operational' | 'degraded' | 'outage'>('operational');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date().toLocaleTimeString('id-ID'));
    
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('id-ID'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Calculate overall status based on services
    const hasOutage = services.some(service => service.status === 'outage');
    const hasDegradation = services.some(service => service.status === 'degraded');
    
    if (hasOutage) {
      setOverallStatus('outage');
    } else if (hasDegradation) {
      setOverallStatus('degraded');
    } else {
      setOverallStatus('operational');
    }
  }, [services]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-success';
      case 'degraded':
        return 'text-warning';
      case 'outage':
        return 'text-error';
      default:
        return 'text-base-content';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return 'badge-success';
      case 'degraded':
        return 'badge-warning';
      case 'outage':
        return 'badge-error';
      default:
        return 'badge-neutral';
    }
  };

  const getIncidentBadge = (severity: string) => {
    switch (severity) {
      case 'minor':
        return 'badge-info';
      case 'major':
        return 'badge-warning';
      case 'critical':
        return 'badge-error';
      default:
        return 'badge-neutral';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <Navbar />
      
      {/* Pills Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full animate-float-0"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float-1"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full animate-float-2"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-primary/5 rounded-full animate-float-0"></div>
        <div className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-secondary/5 rounded-full animate-float-1"></div>
        <div className="absolute top-1/4 right-1/2 w-14 h-14 bg-accent/5 rounded-full animate-float-2"></div>
      </div>

      <div className="relative z-10 min-h-screen bg-base-100 pt-24">
        <div className="container mx-auto px-4 py-20">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pills Status
            </h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Real-time status dan monitoring untuk semua layanan Pills API
            </p>
          </div>

          {/* Overall Status Card */}
          <div className="card bg-base-100 shadow-xl mb-8 border border-base-300">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="card-title text-2xl mb-2">Overall Status</h2>
                  <p className="text-base-content/70">Status keseluruhan sistem Pills API</p>
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-bold ${getStatusColor(overallStatus)}`}>
                    {overallStatus === 'operational' && '🟢 Operational'}
                    {overallStatus === 'degraded' && '🟡 Degraded Performance'}
                    {overallStatus === 'outage' && '🔴 Service Outage'}
                  </div>
                  <p className="text-sm text-base-content/50 mt-1">
                    Last updated: {mounted ? currentTime : '--:--:--'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Status */}
          <div className="card bg-base-100 shadow-xl mb-8 border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Services Status</h2>
              
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-base-200 rounded-lg hover:bg-base-300 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        service.status === 'operational' ? 'bg-success' :
                        service.status === 'degraded' ? 'bg-warning' : 'bg-error'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <span className={`badge ${getStatusBadge(service.status)} badge-sm`}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex space-x-6 text-sm">
                        <div>
                          <span className="text-base-content/50">Uptime: </span>
                          <span className="font-semibold">{service.uptime}</span>
                        </div>
                        <div>
                          <span className="text-base-content/50">Response: </span>
                          <span className="font-semibold">{service.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Incidents Timeline */}
          <div className="card bg-base-100 shadow-xl mb-8 border border-base-300">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Recent Incidents</h2>
              
              {incidents.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-xl font-semibold mb-2">No Recent Incidents</h3>
                  <p className="text-base-content/70">Semua sistem berjalan normal dalam 30 hari terakhir</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {incidents.map((incident) => (
                    <div key={incident.id} className="border-l-4 border-primary pl-6 pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{incident.title}</h3>
                          <div className="flex items-center space-x-3 mt-2">
                            <span className={`badge ${getIncidentBadge(incident.severity)}`}>
                              {incident.severity}
                            </span>
                            <span className={`badge ${getStatusBadge(incident.status)}`}>
                              {incident.status}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm text-base-content/50">
                          {formatDate(incident.date)}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        {incident.updates.map((update, updateIndex) => (
                          <div key={updateIndex} className="bg-base-200 p-3 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-sm font-semibold text-primary">{update.time}</span>
                            </div>
                            <p className="text-sm">{update.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="stat bg-base-100 shadow-xl border border-base-300 rounded-xl">
              <div className="stat-figure text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="stat-title">Average Response Time</div>
              <div className="stat-value text-primary">47ms</div>
              <div className="stat-desc">↗︎ 5ms (12%) improvement from last week</div>
            </div>

            <div className="stat bg-base-100 shadow-xl border border-base-300 rounded-xl">
              <div className="stat-figure text-secondary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="stat-title">Uptime (30 days)</div>
              <div className="stat-value text-secondary">99.97%</div>
              <div className="stat-desc">↗︎ 0.03% improvement from last month</div>
            </div>

            <div className="stat bg-base-100 shadow-xl border border-base-300 rounded-xl">
              <div className="stat-figure text-accent">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="stat-title">API Requests</div>
              <div className="stat-value text-accent">2.1M</div>
              <div className="stat-desc">↗︎ 15.3K (0.7%) from yesterday</div>
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body text-center">
              <h2 className="card-title justify-center text-2xl mb-4">Stay Updated</h2>
              <p className="mb-6">Dapatkan notifikasi real-time tentang status layanan Pills API</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-bordered flex-1 text-base-content" 
                />
                <button className="btn btn-secondary">Subscribe</button>
              </div>
              <p className="text-sm opacity-80 mt-3">
                Kami akan mengirim update penting tentang maintenance dan incident
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
