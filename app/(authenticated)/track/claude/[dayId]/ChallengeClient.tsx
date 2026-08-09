'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ChevronDown, ChevronUp, Copy, Clock, Bookmark, TerminalSquare, FileUp, Send } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

type ChallengeProps = {
  dayId: number;
  title: string;
  description: string;
  promptText: string;
};

export default function ChallengeClient({ dayId, title, description, promptText }: ChallengeProps) {
  const [isPromptOpen, setIsPromptOpen] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (githubUrl && !/^https?:\/\/(www\.)?github\.com\/.*$/.test(githubUrl)) {
      setValidationError('Please enter a valid GitHub URL.');
      return;
    }
    if (linkedinUrl && !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(linkedinUrl)) {
      setValidationError('Please enter a valid LinkedIn URL.');
      return;
    }
    setValidationError(null);
    setIsSubmitted(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText);
    alert('Prompt copied to clipboard!');
  };

  return (
    <>
      <Header />

      <div style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', paddingTop: '80px', paddingBottom: '96px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 32px' }}>

          <div style={{ marginBottom: '32px' }}>
            <Link href="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1e293b', fontWeight: 600, textDecoration: 'none' }}>
              <ArrowLeft size={18} /> Dashboard
            </Link>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <span style={{ color: '#64748b', fontSize: '14px', fontWeight: 500, display: 'block', marginBottom: '4px' }}>Claude Connectors</span>
            <span style={{ color: '#f97316', fontSize: '13px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>DAY {dayId}</span>
            <h1 style={{ fontSize: '42px', fontWeight: 900, color: '#0f172a', lineHeight: 1.2, marginBottom: '12px' }}>{title}</h1>
            <p style={{ color: '#64748b', fontSize: '20px', fontStyle: 'italic', marginBottom: '16px' }}>{description}</p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fff7ed', color: '#f97316', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, border: '1px solid #fed7aa' }}>
                <Bookmark size={14} /> Beginner
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fff', color: '#475569', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: '1px solid #e2e8f0' }}>
                <Clock size={14} /> 45 min
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fff', color: '#475569', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: '1px solid #e2e8f0' }}>
                <FaGithub size={14} /> Deliverable: GitHub commit URL
              </div>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', marginBottom: '32px' }}>
            <div
              onClick={() => setIsPromptOpen(!isPromptOpen)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: '#fff7ed', padding: '10px', borderRadius: '12px', color: '#f97316', display: 'flex' }}>
                  <TerminalSquare size={24} />
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Prompt Template</h2>
              </div>
              <div style={{ color: '#94a3b8' }}>
                {isPromptOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
            </div>

            {isPromptOpen && (
              <div style={{ borderTop: '1px solid #f1f5f9', padding: '28px' }}>
                <button
                  onClick={copyToClipboard}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', padding: '10px 20px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '10px', color: '#475569', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                >
                  <Copy size={16} /> Copy
                </button>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '28px', fontFamily: 'monospace', fontSize: '13.5px', lineHeight: '1.85', color: '#334155', whiteSpace: 'pre-wrap', overflowX: 'auto' }}>
                  {promptText}
                </div>
              </div>
            )}
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 28px', borderBottom: '1px solid #f1f5f9', background: '#fafafa' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ background: '#f0fdf4', padding: '10px', borderRadius: '12px', color: '#16a34a', display: 'flex' }}>
                  <FileUp size={22} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Your Deliverable</h3>
              </div>
              <ChevronUp size={20} style={{ color: '#94a3b8' }} />
            </div>

            <div style={{ padding: '40px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', textAlign: 'center' }}>
              <div style={{ maxWidth: '600px' }}>
                <p style={{ color: '#475569', fontSize: '17px', lineHeight: 1.75, marginBottom: '16px' }}>
                  Upload a markdown file containing screenshots, discovered opportunities, skill-gap analysis, market insights, and key learnings.
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', color: '#64748b' }}>
                  Format: <code style={{ fontFamily: 'monospace', color: '#0f766e', background: '#f0fdfa', padding: '2px 8px', borderRadius: '6px' }}>GitHub commit URL</code>
                </div>
              </div>

              <div style={{ width: '100%', height: '1px', background: '#f1f5f9' }}></div>

              <div style={{ width: '100%', maxWidth: '560px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '20px 24px', borderRadius: '16px', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '22px', height: '22px', cursor: 'pointer', accentColor: '#16a34a' }} />
                  <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '16px' }}>I confirm I have completed today&apos;s task.</span>
                </label>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                  <p style={{ color: '#64748b', fontWeight: 500, textAlign: 'center', margin: 0 }}>Add proof (optional, earns more synergy)</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a' }}>GitHub URL</label>
                    <input 
                      type="url" 
                      placeholder="GitHub commit or repo URL" 
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 18px', fontSize: '14px', outline: 'none', background: '#f8fafc', boxSizing: 'border-box' }} 
                    />
                    <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Optional · +5 synergy</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a' }}>LinkedIn URL</label>
                    <input 
                      type="url" 
                      placeholder="LinkedIn post URL" 
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px 18px', fontSize: '14px', outline: 'none', background: '#f8fafc', boxSizing: 'border-box' }} 
                    />
                    <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Optional · +8 synergy</p>
                  </div>
                </div>

                {validationError && (
                  <div style={{ color: '#ef4444', textAlign: 'center', fontSize: '14px', fontWeight: 600 }}>
                    {validationError}
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {isSubmitted ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '24px 48px', background: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '16px', animation: 'fadeIn 0.3s ease' }}>
                      <div style={{ width: '52px', height: '52px', background: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p style={{ fontWeight: 800, fontSize: '18px', color: '#15803d', margin: 0 }}>Successfully Submitted!</p>
                      <p style={{ fontSize: '13px', color: '#4ade80', margin: 0, fontWeight: 500 }}>Day {dayId} task has been recorded ✓</p>
                    </div>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: '#f97316', color: '#fff', fontWeight: 700, fontSize: '16px', padding: '16px 48px', borderRadius: '14px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(249,115,22,0.3)' }}
                    >
                      <Send size={20} /> Submit Day {dayId}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
