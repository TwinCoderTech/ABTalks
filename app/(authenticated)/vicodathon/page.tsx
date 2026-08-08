'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function VicodathonPage() {
  const router = useRouter();

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
            <button 
              onClick={() => router.back()} 
              className="inline-flex items-center transition-colors text-teal-800 hover:text-teal-900 font-medium"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0a4d44', fontWeight: '600', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <ArrowLeft size={16} /> Back to hackathon
            </button>
          </div>
          
          {/* Header Section */}
          <div style={{ marginBottom: '40px' }}>
            <h1 className="text-4xl font-bold text-[#111827] mb-2" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Register</h1>
            <p className="text-slate-600" style={{ fontSize: '1.125rem' }}>ABTalks Vibe Code Hackathon, free entry, solo or teams of 3.</p>
          </div>
          
          {/* Main Content Grid / Card */}
          <div className="w-full mx-auto flex justify-center" style={{ marginTop: '24px' }}>
            
            <div className="bg-white shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md" style={{ padding: '64px 32px', borderRadius: '12px', border: '1px solid #e5e7eb', width: '100%', maxWidth: '800px', gap: '20px' }}>
              
              {/* Calendar Icon */}
              <div style={{ backgroundColor: '#f5f0e6', padding: '24px', borderRadius: '50%', color: '#0a4d44', marginBottom: '8px' }}>
                <Calendar size={36} strokeWidth={2} />
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900" style={{ fontSize: '2rem', marginBottom: '4px' }}>Registration is closed</h2>
              
              <p className="text-slate-600" style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto' }}>
                Thanks for your interest. Registration for this hackathon has closed. Follow ABTalks for the next event.
              </p>
              
              {/* Explore Button */}
              <Link href="/dashboard" className="transition-colors" style={{ backgroundColor: '#0a4d44', padding: '14px 32px', borderRadius: '8px', marginTop: '16px', textDecoration: 'none', fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                Explore ABTalks
              </Link>
              
            </div>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
