'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, MapPin, Calendar, FileText, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function JavaDeveloperJobPage() {
  const [applyState, setApplyState] = useState<'idle' | 'form' | 'submitted'>('idle');

  return (
    <>
      <Header />
      
      {/* Main Container with Grid Pattern Background */}
      <div 
        className="min-h-screen pb-24 text-slate-900 bg-[#fdfbf7]"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')",
          backgroundSize: '40px 40px',
          paddingTop: '32px'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>
          
          {/* Back Link */}
          <div style={{ marginBottom: '24px' }}>
            <Link 
              href="/jobs" 
              className="inline-flex items-center transition-colors text-teal-800 hover:text-teal-900 font-medium"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0a4d44', fontWeight: '600', textDecoration: 'none' }}
            >
              <ArrowLeft size={20} /> All jobs
            </Link>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-7xl mx-auto" style={{ gap: '32px' }}>
            
            {/* Left Column: Job Details */}
            <div className="lg:col-span-2 flex flex-col" style={{ gap: '24px' }}>
              
              {/* Top Gradient Card */}
              <div 
                className="bg-white shadow-sm border border-gray-200 flex flex-col" 
                style={{ 
                  padding: '40px', 
                  gap: '16px', 
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%)'
                }}
              >
                <div className="flex items-start">
                  <span className="text-orange-600 font-bold uppercase tracking-wide border border-orange-200 bg-orange-50" style={{ padding: '6px 16px', borderRadius: '9999px', fontSize: '12px' }}>
                    FULL-TIME
                  </span>
                </div>
                
                <h1 className="text-5xl font-bold text-slate-900 mt-2">Java Developer</h1>
                
                {/* Metadata */}
                <div className="flex flex-wrap items-center text-sm text-gray-600 font-medium mt-4" style={{ gap: '24px' }}>
                  <div className="flex items-center gap-2">
                    <Building2 size={18} />
                    MNC
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    Remote
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    Posted 25 Jul 2026
                  </div>
                </div>
              </div>
              
              {/* Job Description Card */}
              <div className="bg-white shadow-sm border border-gray-200 flex flex-col" style={{ padding: '40px', gap: '24px', borderRadius: '24px' }}>
                <div className="flex items-center text-slate-800 font-semibold text-lg" style={{ marginBottom: '8px', gap: '12px' }}>
                  <FileText size={22} className="text-teal-800" />
                  Job Description
                </div>
                
                <div className="text-slate-700 leading-relaxed" style={{ fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p>
                    We are hiring passionate Java Developers for an MNC opportunity. Candidates should have a strong understanding of Core Java, Object-Oriented Programming (OOP), Data Structures, and SQL fundamentals.
                  </p>
                  <p>
                    Hands-on experience with Spring Boot for developing RESTful APIs and backend applications is required. Familiarity with Git, basic debugging, and database integration (MySQL/PostgreSQL) is preferred.
                  </p>
                  <p>
                    Knowledge of microservices, Hibernate/JPA, and basic cloud concepts will be an added advantage. Candidates should possess strong problem-solving, communication, and teamwork skills, with a willingness to learn and work in a fast-paced development environment.
                  </p>
                </div>
              </div>
              
            </div>
            
            {/* Right Column: Apply Widget */}
            <div className="lg:col-span-1 flex flex-col" style={{ gap: '16px' }}>
              <div className="bg-white shadow-sm border border-gray-200 flex flex-col items-center text-center" style={{ padding: '32px', gap: '24px', borderRadius: '24px', borderTop: applyState === 'idle' ? '4px solid #0a4d44' : '1px solid #e5e7eb' }}>
                
                {applyState === 'idle' && (
                  <>
                    <h3 className="text-lg font-bold text-slate-600 tracking-wider uppercase mt-2" style={{ fontSize: '14px' }}>Ready to Build?</h3>
                    
                    {/* Apply Button */}
                    <button onClick={() => setApplyState('form')} className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold flex justify-center items-center transition-colors" style={{ padding: '16px 0', borderRadius: '12px', gap: '8px', textDecoration: 'none', fontSize: '16px', color: '#ffffff' }}>
                      Apply Now <ArrowRight size={20} />
                    </button>
                    
                    {/* Footer Text */}
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      Takes less than 2 minutes
                    </p>
                  </>
                )}

                {applyState === 'form' && (
                  <div className="w-full flex flex-col items-start text-left" style={{ gap: '12px' }}>
                    <label className="font-bold text-slate-800 text-sm">Add a note to the recruiter (optional)</label>
                    <textarea 
                      className="w-full border border-gray-200 text-slate-700 outline-none focus:border-orange-500 transition-colors bg-white shadow-sm"
                      rows={6}
                      placeholder="Why you want to apply..."
                      style={{ resize: 'none', borderRadius: '8px', minHeight: '140px', padding: '24px' }}
                    />
                    <div className="flex items-center gap-4 mt-2">
                      <button 
                        onClick={() => setApplyState('submitted')}
                        className="text-white font-semibold transition-colors"
                        style={{ padding: '12px 24px', borderRadius: '8px', backgroundColor: '#f97316' }}
                      >
                        Submit application
                      </button>
                      <button 
                        onClick={() => setApplyState('idle')}
                        className="text-slate-700 font-medium hover:text-slate-900 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {applyState === 'submitted' && (
                  <div className="w-full flex flex-col items-start">
                    <button 
                      disabled
                      className="bg-stone-100 text-gray-500 font-semibold transition-colors"
                      style={{ padding: '12px 24px', borderRadius: '12px', cursor: 'not-allowed', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      Applied ✓
                    </button>
                  </div>
                )}
                
              </div>
              
              {applyState === 'submitted' && (
                <div className="bg-emerald-50/80 border border-emerald-200 text-emerald-900 flex items-center gap-3 w-full shadow-sm" style={{ padding: '16px 20px', borderRadius: '12px' }}>
                  <CheckCircle2 size={20} className="text-emerald-700 flex-shrink-0" />
                  <span className="font-semibold text-sm">Application submitted!</span>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
