'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/app/providers';
import { signOut } from 'next-auth/react';
import { BriefcaseIcon, MoonIcon, SunIcon, ChevronDownIcon, User, Compass, AlertCircle, LogOut, LayoutDashboard, Check } from 'lucide-react';
import styles from './Header.module.css';

import { useUser } from '@/app/contexts/UserContext';
import { reportIssue } from '@/actions/issueActions';

export default function Header() {
  const context = useUser();
  const user = context?.user || { name: 'Student', email: 'nilakshibajwa@gmail.com', image: '', streak: 0 };
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('Claude AI');
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  
  const profileRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Dynamic Day/Streak Calculation
  const startDate = new Date('2026-07-27T00:00:00Z');
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const currentDay = Math.min(Math.max(diffDays, 1), 60);

  // Issue Modal State
  const [isReportingIssue, setIsReportingIssue] = useState(false);
  const [issueType, setIssueType] = useState('Bug');
  const [issueDesc, setIssueDesc] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmittingIssue, setIsSubmittingIssue] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmitIssue = async () => {
    if (!issueDesc.trim()) return;
    setIsSubmittingIssue(true);
    
    try {
      await reportIssue({
        type: issueType,
        description: issueDesc,
        userEmail: user.email
      });
      
      const subject = encodeURIComponent(`Issue Report: ${issueType}`);
      const body = encodeURIComponent(`User Email: ${user.email || 'N/A'}\n\nDescription:\n${issueDesc}`);
      window.location.href = `mailto:team@abtalks.in?subject=${subject}&body=${body}`;

      setIsReportingIssue(false);
      setToastMessage('Thank you! Your report has been dispatched.');
      setTimeout(() => setToastMessage(null), 4000);
      setIssueDesc('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingIssue(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (trackRef.current && !trackRef.current.contains(event.target as Node)) {
        setIsTrackOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dummyTracks = ['Claude AI', 'React Mastery', 'Backend Pro', 'Full-Stack Vibe'];

  return (
    <header className={styles.header}>
      <Link href="/dashboard" className={styles.brandWrapper}>
        <img 
          alt="ABTalks Logo" 
          className={styles.brandIcon} 
          src="https://lh3.googleusercontent.com/aida/AP1WRLtgplRLDVJKB8YJ7xpZDAj92D9loPELd1JbmWmO7_mw44IysIAcN4wtvGEeunQAOEpOSARFpwweERNq4ZNEr8Re4hnkPQnA2y4fdNYs1hXFoLmGeLYcuZpSBPzWVc7ZjlKMTiItdl_VuZFWauUChEhhO3kMmKr67SewRGcg7hVFLkkOMlNvZsNlYUBcu4Z8H2gi2FuZ1l5Fk3IHbPenwa1qRnsPKGsts9AUir0BOrcSEBX4F_O3Fp-U2Og" 
        />
        <span className={styles.brandName}>ABTalks</span>
      </Link>
      
      <div className={styles.navRight}>
        {/* Track Selector */}
        <div className={styles.profileContainer} ref={trackRef}>
          <button 
            className={styles.navDropdown} 
            onClick={() => setIsTrackOpen(!isTrackOpen)}
          >
            <span className={styles.navDropdownBadge}>CLAUDE</span>
            {selectedTrack}
            <ChevronDownIcon size={16} />
          </button>
          
          {isTrackOpen && (
            <div className={styles.dropdownMenu} style={{ minWidth: '240px', padding: '12px' }}>
              <button 
                className={styles.dropdownItem}
                style={{ fontSize: '1rem', padding: '12px 16px', borderRadius: '8px', marginBottom: '8px', transition: 'background-color 0.2s ease, color 0.2s ease', textAlign: 'left', width: '100%' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                onClick={() => {
                  setSelectedTrack('Claude AI');
                  router.push(`/track/claude/day-${currentDay}`);
                  setIsTrackOpen(false);
                }}
              >
                Claude AI
              </button>
              
              <button 
                className={styles.dropdownItem}
                style={{ fontSize: '1rem', padding: '12px 16px', borderRadius: '8px', transition: 'background-color 0.2s ease, color 0.2s ease', textAlign: 'left', width: '100%' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                onClick={() => {
                  setSelectedTrack('Vicodathon');
                  setIsTrackOpen(false);
                  router.push('/vicodathon');
                }}
              >
                Vicodathon
              </button>
            </div>
          )}
        </div>
        
        {/* Jobs Link */}
        <Link href="/jobs" className={styles.navItem}>
          <BriefcaseIcon size={18} />
          Jobs
        </Link>
        
        {/* Streak Counter */}
        <Link href="/rewards" className={styles.navItemBadge}>
          <span className={styles.iconFire}>🔥</span>
          {currentDay}
        </Link>
        
        {/* Dark Mode Toggle */}
        <button 
          className={styles.navItem} 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <SunIcon size={18} className={styles.iconMoon} /> : <MoonIcon size={18} className={styles.iconMoon} />}
        </button>
        
        {/* User Profile */}
        <div className={styles.profileContainer} ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={styles.profileAvatar} 
            title={user?.name || 'Profile'}
            style={{ border: 'none', background: 'none' }}
          >
            {user?.image && isMounted ? (
              <img src={user.image} alt={user.name || 'User'} className={styles.avatarImg} />
            ) : (
              <div className={styles.avatarImg} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e7eb', color: '#4b5563', fontWeight: 'bold' }}>
                {user?.name ? user.name.substring(0, 2).toUpperCase() : 'ST'}
              </div>
            )}
          </button>
          
          {isProfileOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownHeader}>
                <div className={styles.avatarName}>{user?.name || 'Student'}</div>
                <div className={styles.avatarEmail}>{user?.email || ''}</div>
              </div>
              <div className={styles.dropdownDivider} />
              
              <Link href="/dashboard" className={styles.dropdownItem} onClick={() => setIsProfileOpen(false)}>
                <LayoutDashboard size={16} /> Dashboard
              </Link>
              <Link href="/profile" className={styles.dropdownItem} onClick={() => setIsProfileOpen(false)}>
                <User size={16} /> Profile
              </Link>
              <Link href="/mission" className={styles.dropdownItem} onClick={() => setIsProfileOpen(false)}>
                <Compass size={16} /> Our Mission
              </Link>
              <a 
                href="mailto:team@abtalks.in?subject=Issue%20Report%20-%20ABTalks&body=Hi%20ABTalks%20Team,%0AI%20would%20like%20to%20report%20an%20issue:" 
                className={styles.dropdownItem} 
                onClick={() => setIsProfileOpen(false)}
              >
                <AlertCircle size={16} /> Report an Issue
              </a>
              
              <div className={styles.dropdownDivider} />
              <button 
                className={`${styles.dropdownItem} ${styles.logoutText}`} 
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
