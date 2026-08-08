'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, MapPin, Calendar, Info, ArrowRight, DollarSign, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function JobsPage() {
  return (
    <>
      <Header />
      
      {/* Main Container with Grid Pattern Background */}
      <div 
        className="min-h-screen pt-12 pb-24 text-slate-900 bg-[#fdfbf7]"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')",
          backgroundSize: '40px 40px',
          paddingTop: '32px'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>
          
          <div style={{ marginBottom: '24px' }}>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center transition-colors" 
              style={{ color: '#475569' }} 
              onMouseEnter={(e) => e.currentTarget.style.color = '#f97316'} 
              onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
            >
              <ArrowLeft size={28} strokeWidth={3} />
            </Link>
          </div>
          
          {/* Header Section */}
          <div className="mb-10" style={{ marginBottom: '40px' }}>
            <h1 className="text-4xl font-bold text-[#0a4d44] mb-2" style={{ marginBottom: '8px' }}>Jobs</h1>
            <p className="text-slate-600 text-lg">Open roles from the ABTalks community and partners.</p>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl mx-auto" style={{ gap: '32px', marginTop: '40px' }}>
            
            {/* Left Card: Job Details */}
            <div className="lg:col-span-2 bg-white shadow-sm border border-gray-200 border-t-4 border-t-teal-800 flex flex-col" style={{ padding: '32px', gap: '24px', borderRadius: '16px' }}>
              
              {/* Header */}
              <div className="flex justify-between items-start w-full">
                <Link href="/jobs/java-developer" className="hover:underline hover:text-teal-800 transition-colors" style={{ textDecoration: 'none' }}>
                  <h2 className="text-3xl font-bold text-slate-900">Java Developer</h2>
                </Link>
                <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-wide" style={{ padding: '4px 16px', borderRadius: '9999px' }}>
                  FULL-TIME
                </span>
              </div>
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center text-sm text-gray-600 font-medium" style={{ gap: '24px' }}>
                <div className="flex items-center gap-2">
                  <Building2 size={16} />
                  MNC
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  Remote
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  Posted 25 Jul 2026
                </div>
              </div>
              
              <hr className="border-gray-100" />
              
              {/* Role Overview */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Role Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are seeking a highly skilled Java Developer to join our core engineering team. You will be responsible for designing, developing, and maintaining high-performance, scalable, and secure backend systems. This role offers the opportunity to work on complex distributed systems and contribute to open-source initiatives.
                </p>
              </div>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap mt-2" style={{ gap: '12px' }}>
                {['Java 17', 'Spring Boot', 'Microservices', 'PostgreSQL'].map(tag => (
                  <span key={tag} className="bg-stone-100 text-gray-700 text-sm font-medium" style={{ padding: '6px 16px', borderRadius: '9999px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Right Card: Unlock Opportunity */}
            <div className="lg:col-span-1 bg-white shadow-sm border border-gray-200 flex flex-col items-center text-center" style={{ padding: '32px', gap: '20px', borderRadius: '16px' }}>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center mb-2">
                <DollarSign size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900">Unlock Opportunity</h3>
              <p className="text-gray-600">Points required to redeem this role:</p>
              
              <div className="text-3xl font-bold text-orange-500 my-2">
                3,000 Synergy Points
              </div>
              
              {/* Alert Box */}
              <div className="bg-stone-100/80 flex items-start text-left text-sm text-gray-700 w-full" style={{ padding: '16px', borderRadius: '12px', gap: '12px' }}>
                <Info size={20} className="text-teal-800 flex-shrink-0 mt-0.5" />
                <p>
                  Applying with Synergy Points puts your application at the top of the recruiter's queue.
                </p>
              </div>
              
              {/* Apply Button */}
              <Link href="/rewards" className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-lg flex justify-center items-center transition-colors" style={{ padding: '16px 0', borderRadius: '12px', gap: '8px', textDecoration: 'none', color: '#ffffff' }}>
                Apply with Synergy Points <ArrowRight size={20} />
              </Link>
              
              {/* Footer Text */}
              <p className="text-xs font-bold text-gray-400 tracking-wider mt-2 uppercase">
                CURRENT BALANCE: 4,250 PTS
              </p>
              
            </div>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
