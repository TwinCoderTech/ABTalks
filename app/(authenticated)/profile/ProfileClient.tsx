'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './profile.module.css';
import { FileText, Bell, AlertCircle, BookOpen, Layers, LayoutDashboard, User, X, CheckCircle2, Globe, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbBrandInstagram, TbBrandLinkedin, TbBrandYoutube, TbBrandX, TbBrandReddit } from 'react-icons/tb';
import LogoutButton from './LogoutButton';
import { reportIssue } from '@/actions/issueActions';
import Link from 'next/link';

import { useUser } from '@/app/contexts/UserContext';

export default function ProfileClient() {
  // --- Profile State ---
  const context = useUser();
  const user = context?.user || { name: 'Student', email: 'nilakshibajwa@gmail.com', image: '', streak: 0 };
  const setUser = context?.setUser || (() => {});

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const [editName, setEditName] = useState(user.name || '');

  // --- User Info State ---
  const [userInfo, setUserInfo] = useState({
    college: '',
    gradYear: '',
    skills: [] as string[],
    linkedin: '',
    phone: '',
    github: '',
    resumeLink: '',
    portfolio: ''
  });
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [tempSkill, setTempSkill] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (user?.email) {
        const savedInfo = localStorage.getItem(`user_info_${user.email}`);
        if (savedInfo) {
          setUserInfo(JSON.parse(savedInfo));
        }
      }
    } catch (e) {
      console.error('Failed to parse user_info', e);
    }
  }, [user.email]);

  const handleSaveInfo = () => {
    if (userInfo.linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(userInfo.linkedin)) {
      setValidationError('Please enter a valid LinkedIn URL.');
      return;
    }
    if (userInfo.github && !/^https?:\/\/(www\.)?github\.com\/.*$/.test(userInfo.github)) {
      setValidationError('Please enter a valid GitHub URL.');
      return;
    }

    setValidationError(null);
    if (user?.email) {
      localStorage.setItem(`user_info_${user.email}`, JSON.stringify(userInfo));
    }
    setIsEditingInfo(false);
  };

  const handleAddSkill = () => {
    const newSkills = tempSkill.split(',').map(s => s.trim()).filter(s => s.length > 0);
    if (newSkills.length > 0) {
      const updatedSkills = Array.from(new Set([...userInfo.skills, ...newSkills])).slice(0, 10);
      setUserInfo({ ...userInfo, skills: updatedSkills });
      setTempSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setUserInfo({ ...userInfo, skills: userInfo.skills.filter(s => s !== skillToRemove) });
  };
  
  // Dynamic Day/Streak Calculation
  const startDate = new Date('2026-07-27T00:00:00Z');
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const currentDay = Math.min(Math.max(diffDays, 1), 60);
  const percentage = Math.round((currentDay / 60) * 100);

  // --- Courses State ---
  // Default to 1 active course to show the progress UI. 
  // Change to [] to see the "Upcoming Resources" empty state.
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, title: 'Claude AI Mastery', progress: percentage, days: currentDay, totalDays: 60, timeSpent: '6h 30m', tag: '60-Day Challenge' }
  ]);

  // --- Settings State ---
  const [activeSetting, setActiveSetting] = useState<string | null>(null);

  const initial = user.name ? user.name.substring(0, 1).toUpperCase() : 'S';

  const handleSaveProfile = () => {
    setUser({ ...user, name: editName });
    setIsEditingProfile(false);
  };

  const imageInputRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setUser({ ...user, image: base64String });
        if (user.email) {
          // Explicitly save the avatar as requested by the user, though UserContext also persists it.
          localStorage.setItem(`user_avatar_${user.email}`, base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const [resumeFile, setResumeFile] = useState<{ name: string, date: string } | null>(null);
  const resumeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      if (user?.email) {
        const savedResume = localStorage.getItem(`user_resume_${user.email}`);
        if (savedResume) {
          setResumeFile(JSON.parse(savedResume));
        }
      }
    } catch (e) {
      console.error('Failed to parse user_resume', e);
    }
  }, [user.email]);

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && user?.email) {
      const newResume = { name: file.name, date: new Date().toLocaleString() };
      setResumeFile(newResume);
      localStorage.setItem(`user_resume_${user.email}`, JSON.stringify(newResume));
    }
  };

  const handleRemoveResume = () => {
    setResumeFile(null);
    if (user?.email) {
      localStorage.removeItem(`user_resume_${user.email}`);
    }
  };

  const [selectedYear, setSelectedYear] = useState(2026);

  const [isReportingIssue, setIsReportingIssue] = useState(false);
  const [issueType, setIssueType] = useState('Bug');
  const [issueDesc, setIssueDesc] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmittingIssue, setIsSubmittingIssue] = useState(false);
  
  const handleSubmitIssue = async () => {
    if (!issueDesc.trim()) return;
    setIsSubmittingIssue(true);
    
    try {
      // 1. Dispatch via Server Action (Mock Email Backend)
      await reportIssue({
        type: issueType,
        description: issueDesc,
        userEmail: user.email
      });
      
      // 2. Trigger Mailto fallback to pre-fill user's email client
      const subject = encodeURIComponent(`Issue Report: ${issueType}`);
      const body = encodeURIComponent(`User Email: ${user.email || 'N/A'}\n\nDescription:\n${issueDesc}`);
      window.location.href = `mailto:team@abtalks.in?subject=${subject}&body=${body}`;

      // 3. Update UI State
      setIsReportingIssue(false);
      setToastMessage('Thank you! Your report has been dispatched to team@abtalks.in');
      setTimeout(() => setToastMessage(null), 4000);
      setIssueDesc('');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmittingIssue(false);
    }
  };

  const toggleSetting = (settingId: string) => {
    setActiveSetting(activeSetting === settingId ? null : settingId);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My ABTalks Profile',
          url: url
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setToastMessage('Link copied!');
        setTimeout(() => setToastMessage(null), 3000);
      } catch (err) {
        console.error("Failed to copy link:", err);
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className={styles.content}>
        <div className={styles.leftColumn}>

      {/* Profile Card */}
      <div className={`${styles.card} ${styles.profileCard}`}>
        <div 
          className={styles.avatarWrapper} 
          onClick={() => imageInputRef.current?.click()}
          style={{ cursor: 'pointer', position: 'relative' }}
          title="Change profile picture"
        >
          {user.image ? (
            <img src={user.image} alt="Avatar" className={styles.avatarImg} />
          ) : (
            <div className={styles.avatarImg} style={{ backgroundColor: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 600, color: 'var(--on-surface-variant)' }}>
              {initial}
            </div>
          )}
          <input 
            type="file" 
            accept="image/*" 
            ref={imageInputRef} 
            onChange={handleImageUpload} 
            style={{ display: 'none' }} 
          />
        </div>
        <h2 className={styles.profileName}>{user.name || 'Student'}</h2>
        <p className={styles.profileEmail}>{user.email}</p>
        
        {/* Render filled-out User Info */}
        {userInfo.college && (
          <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--on-surface-variant)', textAlign: 'center', lineHeight: '1.4' }}>
            <div style={{ fontWeight: 500 }}>{userInfo.college}</div>
            {userInfo.gradYear && <div>Class of {userInfo.gradYear}</div>}
          </div>
        )}
        
        {userInfo.skills.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem', padding: '0 1rem' }}>
            {userInfo.skills.map(skill => (
              <span key={skill} style={{ backgroundColor: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', borderRadius: '12px', padding: '4px 10px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--on-surface)' }}>
                {skill}
              </span>
            ))}
          </div>
        )}

        {userInfo.portfolio && (
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
             <a href={userInfo.portfolio} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: 'var(--surface-container)', borderRadius: '20px' }}>
                <Globe size={14} /> Portfolio
             </a>
          </div>
        )}

        <button className={styles.editBtn} onClick={() => setIsEditingProfile(true)} style={{ marginTop: '1.25rem' }}>
          Edit Profile
        </button>
        <div className={styles.profileActionRow}>
          <button className={styles.secondaryBtn} onClick={handleShare} style={{ width: '100%' }}>Share</button>
        </div>
      </div>

      {/* Interactive Settings Card */}
      <div className={`${styles.card} ${styles.settingsCard}`} id="settings-section">
        <h3 className={styles.settingsTitle}>Settings</h3>
        <div className={styles.settingsList}>
          
          {/* Your Information Setting */}
          <button className={styles.settingsItem} onClick={() => { setIsEditingInfo(true); setValidationError(null); }}>
            <div className={`${styles.iconWrapper}`} style={{ backgroundColor: '#f97316', color: '#ffffff' }}>
              <User size={20} />
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>Your Information</div>
              <div className={styles.itemSub}>Manage your details and skills</div>
            </div>
            <div className={styles.chevron}>›</div>
          </button>

          {/* Resume Setting */}
          <button className={styles.settingsItem} onClick={() => toggleSetting('resume')}>
            <div className={`${styles.iconWrapper} ${styles.resume}`}>
              <FileText size={20} />
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>My Resume</div>
              <div className={styles.itemSub}>Manage your professional experience</div>
            </div>
            <div className={styles.chevron} style={{ transform: activeSetting === 'resume' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</div>
          </button>
          {activeSetting === 'resume' && (
            <div className={styles.settingsDrawer}>
              {resumeFile ? (
                <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: '8px', border: '1px solid var(--outline-variant)', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--on-surface)' }}>
                    <FileText size={16} style={{ color: 'var(--primary)' }} /> {resumeFile.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)', marginTop: '0.25rem' }}>
                    Uploaded on {resumeFile.date}
                  </div>
                </div>
              ) : (
                <p style={{ marginBottom: '0.5rem' }}>Your uploaded resume will appear here. Click below to update.</p>
              )}
              <input 
                type="file" 
                accept=".pdf,.doc,.docx" 
                ref={resumeInputRef} 
                onChange={handleResumeUpload} 
                style={{ display: 'none' }} 
              />
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <button 
                  className={styles.editBtn} 
                  style={{ width: 'auto' }}
                  onClick={() => resumeInputRef.current?.click()}
                >
                  {resumeFile ? 'Upload Different Resume' : 'Upload New Resume'}
                </button>
                {resumeFile && (
                  <button 
                    className={styles.btnCancel} 
                    style={{ width: 'auto', backgroundColor: 'var(--error-container)', color: 'var(--on-error-container)', borderRadius: 'var(--radius-lg)' }}
                    onClick={handleRemoveResume}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Notifications Setting */}
          <button className={styles.settingsItem} onClick={() => toggleSetting('notifications')}>
            <div className={`${styles.iconWrapper} ${styles.notification}`}>
              <Bell size={20} />
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>General</div>
              <div className={styles.itemSub}>Manage emails and push alerts</div>
            </div>
            <div className={styles.chevron} style={{ transform: activeSetting === 'notifications' ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</div>
          </button>
          {activeSetting === 'notifications' && (
            <div className={styles.settingsDrawer}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked /> Receive weekly progress emails
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginTop: '0.5rem' }}>
                <input type="checkbox" defaultChecked /> Receive new course alerts
              </label>
            </div>
          )}

          {/* Issue Setting */}
          <button className={styles.settingsItem} onClick={() => setIsReportingIssue(true)}>
            <div className={`${styles.iconWrapper} ${styles.issue}`}>
              <AlertCircle size={20} />
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>Integrations</div>
              <div className={styles.itemSub}>Help us improve the platform</div>
            </div>
            <div className={styles.chevron}>›</div>
          </button>
        </div>
      </div>

      {/* Log Out Button */}
      <LogoutButton />
      </div>

      <div className={styles.rightColumn}>
        {/* Dynamic Courses / Learning Journey Card */}
        <div className={styles.card}>
          <div className={styles.journeyHeaderRow}>
            <div className={styles.journeySub}>LEARNING JOURNEY</div>
            <div className={styles.topBadge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              Top 15%
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 className={styles.journeyTitle}>
              {currentDay} Day Streak <span style={{ fontSize: '1.25rem' }}>🔥</span>
            </h2>
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--outline-variant)', fontSize: '12px', fontWeight: 600, color: 'var(--on-surface)', backgroundColor: 'var(--surface)' }}
            >
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
              <option value={2027}>2027</option>
            </select>
          </div>
          <p className={styles.journeyDesc}>
            Keep it up! You're in the top 15% of learners this week.
          </p>
          
          <div className={styles.heatmapContainer} style={{ overflowX: 'auto', paddingBottom: '12px' }}>
            {/* Months Header */}
            <div style={{ display: 'flex', width: '828px', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', fontWeight: 600, marginBottom: '8px' }}>
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              {/* Activity Grid (Removed Mon/Wed/Fri labels) */}
              <div style={{ 
                display: 'grid', 
                gridTemplateRows: 'repeat(7, 1fr)', 
                gridAutoFlow: 'column', 
                gap: '4px',
              }}>
                {Array.from({ length: 364 }).map((_, i) => { // 52 weeks * 7 = 364
                  const yearStart = new Date(`${selectedYear}-01-01T00:00:00Z`);
                  const boxDate = new Date(yearStart);
                  boxDate.setDate(boxDate.getDate() + i);
                  
                  // Color only the active streak (from July 27 2026 up to current day)
                  const challengeStart = new Date('2026-07-27T00:00:00Z');
                  const streakEnd = new Date(challengeStart.getTime() + (currentDay * 24 * 60 * 60 * 1000));
                  const isActive = boxDate >= challengeStart && boxDate < streakEnd;
                  
                  const intensity = isActive ? (Math.random() * 0.8 + 0.2) : 0; 
                  
                  let bg = 'var(--surface-container-low)'; // empty
                  if (intensity > 0.8) bg = '#0f766e'; // very high (dark teal)
                  else if (intensity > 0.5) bg = '#14b8a6'; // high
                  else if (intensity > 0.2) bg = '#5eead4'; // medium
                  else if (intensity > 0) bg = '#ccfbf1'; // low
                  
                  return (
                    <div 
                      key={i} 
                      title={boxDate.toDateString()}
                      style={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '3px', 
                        backgroundColor: bg,
                        border: '1px solid var(--outline-variant)',
                        cursor: 'pointer'
                      }} 
                    />
                  );
                })}
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: '11px', color: '#64748b', fontWeight: 500, marginTop: '16px', gap: '6px', width: '828px' }}>
              <span>Less</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#ccfbf1', border: '1px solid var(--outline-variant)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#5eead4', border: '1px solid var(--outline-variant)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#14b8a6', border: '1px solid var(--outline-variant)' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#0f766e', border: '1px solid var(--outline-variant)' }} />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Current Track Card */}
        <div className={styles.card} style={{ borderLeft: '4px solid #f97316', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#64748b', textTransform: 'uppercase' }}>CURRENT TRACK</span>
          </div>

          {enrolledCourses.length > 0 ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{ background: '#fff7ed', color: '#f97316', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', border: '1px solid #fed7aa' }}>
                      🤖 {enrolledCourses[0].tag}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0 }}>{enrolledCourses[0].title}</h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#f97316' }}>{enrolledCourses[0].progress}%</div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Completed</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ background: '#f1f5f9', borderRadius: '999px', height: '10px', marginBottom: '20px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${enrolledCourses[0].progress}%`, background: 'linear-gradient(90deg, #f97316, #fb923c)', borderRadius: '999px', transition: 'width 0.5s ease' }} />
              </div>

              {/* Stats Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px 18px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>📅</span> Days Completed
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>{enrolledCourses[0].days} / {enrolledCourses[0].totalDays}</div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px 18px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>⏱️</span> Time Spent
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>{enrolledCourses[0].timeSpent}</div>
                </div>
              </div>

              {/* Continue Learning Button */}
              <a href={`/track/claude/day-${currentDay}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '14px', background: '#fff7ed', border: '1.5px solid #fed7aa', borderRadius: '14px', color: '#f97316', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'all 0.2s' }}>
                Continue Learning
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </>
          ) : (
            <p className={styles.journeyDesc}>You haven't started any courses yet.</p>
          )}
        </div>

        {/* Social Links Card */}
        <div className={styles.card} style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', color: '#64748b', textTransform: 'uppercase' }}>SOCIAL LINKS</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href={userInfo.github || '#'} target={userInfo.github ? "_blank" : undefined} rel="noopener noreferrer" onClick={(e) => { if (!userInfo.github) { e.preventDefault(); setIsEditingInfo(true); } }} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
              <FaGithub size={24} color="var(--primary)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>GitHub</span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  {userInfo.github ? userInfo.github.replace(/^https?:\/\/(www\.)?/, '') : 'Add in Settings'}
                </span>
              </div>
            </a>

            <a href={userInfo.linkedin || '#'} target={userInfo.linkedin ? "_blank" : undefined} rel="noopener noreferrer" onClick={(e) => { if (!userInfo.linkedin) { e.preventDefault(); setIsEditingInfo(true); } }} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
              <FaLinkedin size={24} color="var(--primary)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>LinkedIn</span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  {userInfo.linkedin ? userInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '') : 'Add in Settings'}
                </span>
              </div>
            </a>

            <a href={userInfo.portfolio || '#'} target={userInfo.portfolio ? "_blank" : undefined} rel="noopener noreferrer" onClick={(e) => { if (!userInfo.portfolio) { e.preventDefault(); setIsEditingInfo(true); } }} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
              <Globe size={24} color="var(--primary)" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>Portfolio</span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  {userInfo.portfolio ? userInfo.portfolio.replace(/^https?:\/\/(www\.)?/, '') : 'Add in Settings'}
                </span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className={styles.modalOverlay} onClick={() => setIsEditingProfile(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Edit Profile</h3>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Display Name</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={editName}
                onChange={e => setEditName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Email Address</label>
              <input 
                type="email" 
                className={styles.textInput} 
                value={user.email || ''}
                disabled
                style={{ backgroundColor: 'var(--surface-container)', color: 'var(--on-surface-variant)', cursor: 'not-allowed' }}
              />
            </div>
            <div className={styles.modalActions}>
              <button className={styles.btnCancel} onClick={() => setIsEditingProfile(false)}>Cancel</button>
              <button className={styles.btnSave} onClick={handleSaveProfile}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Report Issue Modal */}
      {isReportingIssue && (
        <div className={styles.modalOverlay} onClick={() => setIsReportingIssue(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Report an Issue</h3>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Issue Type</label>
              <select 
                className={styles.textInput}
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
              >
                <option value="Bug">Bug</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Account">Account</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Description</label>
              <textarea 
                className={styles.textInput} 
                style={{ minHeight: '100px', resize: 'vertical' }}
                placeholder="Please describe the issue in detail..."
                value={issueDesc}
                onChange={(e) => setIssueDesc(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.modalActions}>
              <button className={styles.btnCancel} onClick={() => setIsReportingIssue(false)}>Cancel</button>
              <button className={styles.btnSave} onClick={handleSubmitIssue} disabled={!issueDesc.trim()}>Submit Report</button>
            </div>
          </div>
        </div>
      )}

      {/* Your Information Modal */}
      {isEditingInfo && (
        <div className={styles.modalOverlay} onClick={() => setIsEditingInfo(false)} style={{ alignItems: 'flex-start', paddingTop: '5vh', paddingBottom: '5vh', overflowY: 'auto' }}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '600px', padding: '32px' }}>
            <h3 className={styles.modalTitle} style={{ marginBottom: '4px', fontSize: '1.5rem' }}>Your information</h3>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.9rem', marginBottom: '24px' }}>Domain and email cannot be changed here.</p>
            
            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>Account type</label>
              <div style={{ fontWeight: 600, fontSize: '1rem', marginTop: '4px', color: '#111827' }}>Student</div>
              <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '4px' }}>Set during registration and cannot be changed here.</p>
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>Full name</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={user.name || ''}
                readOnly
                style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', marginTop: '4px' }}
              />
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>College</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={userInfo.college}
                onChange={e => setUserInfo({ ...userInfo, college: e.target.value })}
                style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', marginTop: '4px' }}
              />
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>Graduation year</label>
              <input 
                type="text" 
                className={styles.textInput} 
                value={userInfo.gradYear}
                onChange={e => setUserInfo({ ...userInfo, gradYear: e.target.value })}
                style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', marginTop: '4px' }}
              />
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>Skills (max 10)</label>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px', marginTop: '4px' }}>
                {userInfo.skills.map(skill => (
                  <span key={skill} style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '4px 12px', fontSize: '0.9rem', fontWeight: 500, color: '#374151' }}>
                    {skill}
                    <button onClick={() => removeSkill(skill)} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: '0', display: 'flex' }}><X size={14} /></button>
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  placeholder="Type skills, comma-separated, then Add"
                  value={tempSkill}
                  onChange={e => setTempSkill(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
                  style={{ flex: 1, backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', outline: 'none' }}
                />
                <button 
                  onClick={handleAddSkill}
                  style={{ padding: '0 24px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', fontWeight: 600, color: '#111827', cursor: 'pointer' }}
                >
                  Add
                </button>
              </div>
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>LinkedIn URL (optional)</label>
              <input 
                type="url" 
                placeholder="https://www.linkedin.com/in/username"
                value={userInfo.linkedin}
                onChange={e => setUserInfo({ ...userInfo, linkedin: e.target.value })}
                style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', marginTop: '4px' }}
              />
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', color: '#111827' }}>
                Phone Number 
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#d1fae5', color: '#047857', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                  <CheckCircle2 size={12} /> Verified
                </span>
              </label>
              <input 
                type="text" 
                value={userInfo.phone}
                onChange={e => setUserInfo({ ...userInfo, phone: e.target.value })}
                style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', marginTop: '4px' }}
              />
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>GitHub URL (optional)</label>
              <input 
                type="url" 
                placeholder="https://github.com/username"
                value={userInfo.github}
                onChange={e => setUserInfo({ ...userInfo, github: e.target.value })}
                style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', marginTop: '4px' }}
              />
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>Portfolio URL (optional)</label>
              <input 
                type="url" 
                placeholder="https://yourportfolio.com"
                value={userInfo.portfolio || ''}
                onChange={e => setUserInfo({ ...userInfo, portfolio: e.target.value })}
                style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', marginTop: '4px' }}
              />
            </div>

            <div className={styles.inputGroup} style={{ marginBottom: '24px' }}>
              <label className={styles.inputLabel} style={{ fontSize: '1rem', color: '#111827' }}>Resume Link</label>
              <input 
                type="text" 
                placeholder="https://drive.google.com/... or LinkedIn resume URL"
                value={userInfo.resumeLink}
                onChange={e => setUserInfo({ ...userInfo, resumeLink: e.target.value })}
                style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 16px', fontSize: '1rem', marginTop: '4px' }}
              />
              <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '6px' }}>Visible to admins only. Paste a Google Drive, Dropbox, or LinkedIn-hosted resume link.</p>
            </div>

            {validationError && (
              <div style={{ color: '#ef4444', marginBottom: '16px', fontSize: '0.9rem', fontWeight: 500 }}>
                {validationError}
              </div>
            )}
            <button 
              onClick={handleSaveInfo}
              style={{ padding: '12px 32px', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div style={{ position: 'fixed', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#10b981', color: 'white', padding: '1rem 2rem', borderRadius: '9999px', fontWeight: 600, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 200 }}>
          {toastMessage}
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerBrand}>ABTalks</span>
        </div>
        <div className={styles.footerCenter}>
          <a href="https://www.instagram.com/abtalksonai/" target="_blank" rel="noopener noreferrer">
            <TbBrandInstagram size={24} className={styles.socialIcon} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/company/abtalks-on-ai/" target="_blank" rel="noopener noreferrer">
            <TbBrandLinkedin size={24} className={styles.socialIcon} strokeWidth={1.5} />
          </a>
          <a href="https://www.youtube.com/@ABTalksOnAI" target="_blank" rel="noopener noreferrer">
            <TbBrandYoutube size={24} className={styles.socialIcon} strokeWidth={1.5} />
          </a>
          <a href="https://x.com/abtalksonai" target="_blank" rel="noopener noreferrer">
            <TbBrandX size={24} className={styles.socialIcon} strokeWidth={1.5} />
          </a>
          <a href="https://discord.gg/j4Q8tvDj6" target="_blank" rel="noopener noreferrer">
            <TbBrandReddit size={24} className={styles.socialIcon} strokeWidth={1.5} />
          </a>
        </div>
        <div className={styles.footerRight}>
          <Mail size={16} /> For any issue or enquiry: <a href="mailto:team@abtalks.in" className={styles.footerLink}>team@abtalks.in</a>
        </div>
      </footer>
    </>
  );
}
