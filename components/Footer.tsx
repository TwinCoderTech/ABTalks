import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Left */}
        <div className={styles.footerBrandText}>ABTalks</div>
        
        {/* Center */}
        <div className={styles.footerSocials}>
          <a href="https://www.instagram.com/abtalksonai/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.linkedin.com/company/abtalks-on-ai/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.youtube.com/@ABTalksOnAI" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
          <a href="https://x.com/abtalksonai" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
          </a>
          <a href="https://discord.gg/j4Q8tvDj6" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Discord">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M7.5 4.27l9 5.15"></path><path d="M5.636 5.636a9 9 0 0 1 12.728 12.728A9 9 0 0 1 5.636 5.636z"></path></svg>
          </a>
        </div>
        
        {/* Right */}
        <div className={styles.footerContact}>
          <Mail size={18} />
          <span>For any issue or enquiry: </span>
          <a href="mailto:team@abtalks.in" className={styles.contactLink}>team@abtalks.in</a>
        </div>
      </div>
    </footer>
  );
}
