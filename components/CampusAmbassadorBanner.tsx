"use client";

import { useState, useEffect } from "react";
import { Star, Network, Users, Trophy, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CampusAmbassadorBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const dismissed = localStorage.getItem('ambassador_banner_dismissed');
    if (!dismissed) {
      setShowBanner(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('ambassador_banner_dismissed', 'true');
    setShowBanner(false);
    setShowModal(false);
  };

  const handleInterested = () => {
    handleDismiss();
    router.push('/dashboard');
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-orange-400/80 via-orange-500/80 to-orange-600/90 backdrop-blur-md border-b border-white/20 shadow-[0_4px_30px_rgba(249,115,22,0.15)] text-white py-3 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 font-medium text-sm">
          <span className="material-symbols-outlined" style={{fontSize: 20}}>group_add</span>
          Want to be a campus ambassador for your college?
        </div>
        <button 
          onClick={() => setShowModal(true)} 
          className="bg-white text-orange-600 border-none rounded-md py-1.5 px-4 text-sm font-semibold cursor-pointer transition hover:bg-slate-50 hover:-translate-y-[1px] shadow-sm"
        >
          Learn More
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[1000] p-4 backdrop-blur-sm">
          <div className="bg-white rounded-[1.5rem] p-10 max-w-[420px] w-full relative shadow-2xl">
            <button 
              className="absolute top-5 right-5 text-teal-700 hover:bg-slate-100 rounded-full p-2 flex items-center justify-center transition-colors" 
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>
            
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-900 py-1.5 px-3.5 rounded-full text-xs font-bold mb-5 tracking-wide">
              <Star size={14} /> CAMPUS AMBASSADOR PROGRAM
            </div>
            
            <h2 className="text-xl font-bold text-emerald-900 mb-3">Become your campus ambassador</h2>
            <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-8">
              Represent your college in the ABTalks community. Help bring AI learning to your peers.
            </p>
            
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-emerald-600">
                  <Network size={20} />
                </div>
                <div className="font-semibold text-slate-900 text-[0.95rem]">Build your network</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-emerald-600">
                  <Users size={20} />
                </div>
                <div className="font-semibold text-slate-900 text-[0.95rem]">Lead your campus AI community</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-emerald-600">
                  <Trophy size={20} />
                </div>
                <div className="font-semibold text-slate-900 text-[0.95rem]">Exclusive opportunities</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 border-t border-slate-100 pt-6">
              <button 
                className="w-full p-3.5 rounded-xl border border-emerald-600 bg-white text-emerald-600 font-semibold text-base transition-colors hover:bg-green-50" 
                onClick={handleDismiss}
              >
                Not interested
              </button>
              <button 
                className="w-full p-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-base transition-colors hover:bg-emerald-700" 
                onClick={handleInterested}
              >
                Yes, I'm interested
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
