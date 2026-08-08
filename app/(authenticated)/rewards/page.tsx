'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2, Code, MessageSquare, Share2, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RewardsPage() {
  const handleBlockClick = async (blockName: string) => {
    if (blockName === 'Share Milestone') {
      try {
        if (navigator.share) {
          await navigator.share({
            title: 'My ABTalks Streak',
            text: 'Check out my daily streak progress on ABTalks!',
            url: window.location.href,
          });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      } catch (error) {
        console.error('Error sharing:', error);
      }
      return;
    }
    
    // Functional mock for other click actions
    console.log(`${blockName} action triggered!`);
  };
  return (
    <>
      <Header />
      
      {/* 1. Master Container (Full Width, Light Mode) */}
      <div className="min-h-screen bg-[#fdfbf7] flex justify-center py-12 px-6 lg:px-12 text-slate-900">
        <div className="w-full max-w-7xl flex flex-col gap-12 mt-12">
          
          <div className="-mb-4 w-full">
            <Link href="/dashboard" className="inline-flex items-center justify-center p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-orange-500 hover:text-white transition-all shadow-sm group">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform"/>
            </Link>
          </div>
          
          {/* 2. Hero Section (Wide Layout) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-start text-left gap-6 flex-1">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900">
                Redeem your <br/><span className="text-orange-500">Streak points</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Your consistency deserves recognition. Use your Synergy Points (SP) to claim exclusive ABTalks merchandise. These items aren't for sale—they're earned by builders who show up every day.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
                <button 
                  onClick={() => document.getElementById('rewards-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg font-bold flex items-center justify-center gap-3 shadow-sm transition-all active:scale-95 active:ring-4 active:ring-orange-300 focus:outline-none"
                  style={{ padding: '16px 40px', minWidth: '240px' }}
                >
                  Browse Rewards <ArrowRight size={20} />
                </button>
                <div 
                  className="flex items-center justify-center gap-2 bg-white rounded-full border border-slate-200 shadow-sm text-lg"
                  style={{ padding: '16px 40px' }}
                >
                  <Star size={20} className="text-orange-500" fill="currentColor" />
                  <span className="font-bold text-slate-900">1,250 SP Balance</span>
                </div>
              </div>
            </div>
            
            {/* Hero Banner Image */}
            <div className="w-full md:w-1/2 h-[300px] lg:h-[400px] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl relative flex-shrink-0">
              <img className="absolute inset-0 w-full h-full object-cover" alt="Merch Image" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkbvQEZ-NrMBCzi3YgZupHV2oFeGSGZaZwMcG0oIile4XPH3a5iJ2141MGX3AbLWGP60sGNXkpyxQbz_tWjAc9hUF7JoyOgSOvKozi6R9eROrt2ROGb13EPTHT3tn9gcpRe0iMQ-jaAce1foc3qLXVRgPW2bOTB2n4mzqrz0NaoPSL00GuzNKsm-XhF-89fdLPLKeba3NXYz7C6PscMIf8ViDh1IiYLX52Djy4InlgeBCKSuN2WHoH"/>
            </div>
          </div>

          {/* 3. 'Ways to earn more' (Grid) */}
          <div className="w-full mt-24">
            <h2 className="font-bold text-3xl text-slate-900" style={{ marginBottom: '40px' }}>Ways to earn more</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              <button 
                onClick={() => handleBlockClick('Daily Check-in')}
                className="bg-white rounded-2xl py-10 px-6 border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-orange-500 focus:border-orange-500 active:bg-orange-50 active:ring-4 active:ring-orange-200 active:scale-95 transition-all outline-none min-h-[180px]"
              >
                <CheckCircle2 className="text-orange-500 mb-4" size={36} />
                <span className="text-slate-600 mb-2 font-medium text-lg">Daily Check-in</span>
                <span className="font-bold text-orange-600 text-xl">+10 SP</span>
              </button>
              <button 
                onClick={() => handleBlockClick('Complete Challenge')}
                className="bg-white rounded-2xl py-10 px-6 border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-orange-500 focus:border-orange-500 active:bg-orange-50 active:ring-4 active:ring-orange-200 active:scale-95 transition-all outline-none min-h-[180px]"
              >
                <Code className="text-orange-500 mb-4" size={36} />
                <span className="text-slate-600 mb-2 font-medium text-lg">Complete Challenge</span>
                <span className="font-bold text-orange-600 text-xl">+50 SP</span>
              </button>
              <button 
                onClick={() => handleBlockClick('Helpful Answer')}
                className="bg-white rounded-2xl py-10 px-6 border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-orange-500 focus:border-orange-500 active:bg-orange-50 active:ring-4 active:ring-orange-200 active:scale-95 transition-all outline-none min-h-[180px]"
              >
                <MessageSquare className="text-orange-500 mb-4" size={36} />
                <span className="text-slate-600 mb-2 font-medium text-lg">Helpful Answer</span>
                <span className="font-bold text-orange-600 text-xl">+25 SP</span>
              </button>
              <button 
                onClick={() => handleBlockClick('Share Milestone')}
                className="bg-white rounded-2xl py-10 px-6 border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-orange-500 focus:border-orange-500 active:bg-orange-50 active:ring-4 active:ring-orange-200 active:scale-95 transition-all outline-none min-h-[180px]"
              >
                <Share2 className="text-orange-500 mb-4" size={36} />
                <span className="text-slate-600 mb-2 font-medium text-lg">Share Milestone</span>
                <span className="font-bold text-orange-600 text-xl">+30 SP</span>
              </button>
            </div>
          </div>          {/* 4. 'Available Rewards' (Full Grid) */}
          <div className="w-full mt-24" id="rewards-grid" style={{ paddingBottom: '120px' }}>
            <div className="flex justify-between items-end w-full border-b border-slate-200 pb-4" style={{ marginBottom: '40px' }}>
              <h2 className="font-bold text-3xl text-slate-900">Available Rewards</h2>
              <span className="text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full text-sm">4 items</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              
              {/* Product Card 1 */}
              <button onClick={() => handleBlockClick('Cap')} className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-orange-500 focus:border-orange-500 hover:-translate-y-1 active:scale-95 active:bg-orange-50 active:ring-4 active:ring-orange-200 transition-all duration-300 outline-none text-left">
                <div className="relative w-full h-64 bg-slate-100">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIamEbMjjVOlbGkVZJPnVA1XxrpjigIncQpjG_4vj8VeOjlalSMPHI4eV21eVu2CwVULkJqBg5A36x-JAnGNUQZ39C7IvREx6Et0z4cHZlPqPFjLGcMO46kv0ZrcwrGEfrD6XrlbdELSLJ2guCnkqRPTRbeJW5fv7yCq7NSvy_6CcB4WTn7SHAkn04y0PRdAON2pOvU3Acwr-mtfFWj74o12tKaWYIZ99INIGEFdOEmQ0gJR8MLMnP" alt="Cap" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-100">
                    <Star size={16} className="text-orange-500" fill="currentColor" />
                    <span className="font-bold text-slate-900">1,500 SP</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 w-full">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">ABTalks Signature Cap</h3>
                  <p className="text-slate-600 mb-8 flex-1 leading-relaxed">Classic fit, 100% cotton canvas with embroidered logo.</p>
                  <div className="w-full bg-orange-50 border border-orange-200 text-orange-600 rounded-xl py-3 font-bold text-center">
                    Need 250 more SP
                  </div>
                </div>
              </button>

              {/* Product Card 2 */}
              <button onClick={() => handleBlockClick('Lunch Box')} className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-orange-500 focus:border-orange-500 hover:-translate-y-1 active:scale-95 active:bg-orange-50 active:ring-4 active:ring-orange-200 transition-all duration-300 outline-none text-left">
                <div className="relative w-full h-64 bg-slate-100">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbNdyJbm1v1yYmeVna0fozjmX4uYRsd3kZFOs2N9DCltCSblcIEZBLLQhHTaIYUH0_Kj451Z1qn3DEBWoN-4ZtwuYfm5VYe-3ZZTyqW7QuAL6mq-F9kL-Fv6kgw9s1uI1iIN5cOKY_sY0flCwW491Kle9IxvzzHlF7IbY8qjELqvUU8cFfSxvhN1h5-fExGLNLdQszZVqglbPymTTt3tdqDk4F5dDjqbyrgB6uslX00JymAm2SjLvP" alt="Lunch Box" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-100">
                    <Star size={16} className="text-orange-500" fill="currentColor" />
                    <span className="font-bold text-slate-900">2,000 SP</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 w-full">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Bento Lunch Box</h3>
                  <p className="text-slate-600 mb-8 flex-1 leading-relaxed">Dual-compartment, leak-proof matte black container.</p>
                  <div className="w-full bg-orange-50 border border-orange-200 text-orange-600 rounded-xl py-3 font-bold text-center">
                    Need 750 more SP
                  </div>
                </div>
              </button>

              {/* Product Card 3 */}
              <button onClick={() => handleBlockClick('Tote')} className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-orange-500 focus:border-orange-500 hover:-translate-y-1 active:scale-95 active:bg-orange-50 active:ring-4 active:ring-orange-200 transition-all duration-300 outline-none text-left">
                <div className="relative w-full h-64 bg-slate-100">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF4JrZVpsd4gf52wpWfkIdKlv_jqFQtK7KBUE903BAB0AXXhUGRbyb4YPlzv75v-UQsiIGU8kezUz0-tNlGqv1_TLwZrXjHEVZqDRM-QqgU8vdLTrwKytAHQYKA-WEurWQ74-ZmWgIqkZ60DcWIhkIYv0Bz8prMWsaOI-CTuv6Af31NhlLY99MSbqb8PTasmCEFXUuuz6xquc__yiFFsQHhDpRq5fd0Gy7rn62qp4B6nzPYJUKom0u" alt="Tote" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-100">
                    <Star size={16} className="text-orange-500" fill="currentColor" />
                    <span className="font-bold text-slate-900">3,000 SP</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 w-full">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Everyday Tote</h3>
                  <p className="text-slate-600 mb-8 flex-1 leading-relaxed">Heavy-duty canvas with reinforced handles. Fits a 15" laptop.</p>
                  <div className="w-full bg-orange-50 border border-orange-200 text-orange-600 rounded-xl py-3 font-bold text-center">
                    Need 1,750 more SP
                  </div>
                </div>
              </button>

              {/* Product Card 4 */}
              <button onClick={() => handleBlockClick('Crewneck')} className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-orange-500 focus:border-orange-500 hover:-translate-y-1 active:scale-95 active:bg-orange-50 active:ring-4 active:ring-orange-200 transition-all duration-300 outline-none text-left">
                <div className="relative w-full h-64 bg-slate-100">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB84wXqG9zyYgMmD6PoD2w_6yOmsrAkGhOaP09QnV6z-xtIiwomsXjFZiwzd4_O_XvKa8Hvnh0bRuJR1iR-FiabN2jU-22BKNkg0qBDaB5Tq9XM5oazXPJpY5lXVYBmySvXrDwGRQvXjnWXHkt6H1yl_amN6URVTf4lKeQFVG5MWuU9CSbX2MIpTggFXRtW8tN4-Hmkscqip3uREnqPtFqBXW-AfNqRlMoVCoDOe8BlG7myJ9_EOqEv" alt="Crewneck" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-slate-100">
                    <Star size={16} className="text-orange-500" fill="currentColor" />
                    <span className="font-bold text-slate-900">5,000 SP</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 w-full">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">Builder Crewneck</h3>
                  <p className="text-slate-600 mb-8 flex-1 leading-relaxed">Ultra-soft premium cotton blend. Minimalist embroidered logo.</p>
                  <div className="w-full bg-orange-50 border border-orange-200 text-orange-600 rounded-xl py-3 font-bold text-center">
                    Need 3,750 more SP
                  </div>
                </div>
              </button>

            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
}
