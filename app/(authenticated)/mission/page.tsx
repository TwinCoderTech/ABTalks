import styles from './mission.module.css';
import Header from '@/components/Header';
import { Target, AlertTriangle, Eye, Trophy, MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { TbBrandInstagram, TbBrandLinkedin, TbBrandYoutube, TbBrandX, TbBrandReddit } from 'react-icons/tb';
import Link from 'next/link';

export const metadata = {
  title: 'Our Mission - ABTalks',
  description: 'Talent isn\'t the problem. Proof is.',
};

export default function MissionPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>

        <div className={styles.badge}>
          <Target size={14} /> Our Mission
        </div>

        <h1 className={styles.headline}>
          Talent isn't the problem. <span className={styles.highlight}>Proof is.</span>
        </h1>

        <p className={styles.intro}>
          ABTalks is that bridge, a community run by students, for students, founded by Anil Bajpai after watching capable people get overlooked and undervalued.
        </p>

        <h2 className={styles.sectionTitle}>Why ABTalks exists</h2>
        <p className={styles.sectionSubtitle}>Two real problems, one missing bridge.</p>

        <div className={styles.cardList}>
          <div className={styles.card}>
            <div className={styles.blobOrange}></div>
            <div className={`${styles.cardIcon} ${styles.iconOrange}`}>
              <AlertTriangle size={20} />
            </div>
            <h3 className={styles.cardTitle}>Students pay the price</h3>
            <p className={styles.cardDesc}>
              Trapped in a cycle of unpaid internships and ghosted applications, building skills without a stage to show them off.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.blobBlue}></div>
            <div className={`${styles.cardIcon} ${styles.iconBlue}`}>
              <Eye size={20} />
            </div>
            <h3 className={styles.cardTitle}>Recruiters hire half-blind</h3>
            <p className={styles.cardDesc}>
              Relying on resumes that tell lies and filtering out genuine talent just because they don't fit the traditional mold.
            </p>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>How it works</h2>
        <p className={styles.sectionSubtitle}>
          Stop applying into the void. Start building a portfolio that speaks for itself through structured, real-world challenges.
        </p>

        <div className={styles.cardList}>
          <div className={styles.stepCard}>
            <div className={`${styles.stepNumber} ${styles.numGreen}`}>1</div>
            <h3 className={styles.stepTitle}>Enroll in a challenge</h3>
            <p className={styles.stepDesc}>
              Pick a specialized track. Receive real-world problem statements curated by industry professionals.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={`${styles.stepNumber} ${styles.numCyan}`}>2</div>
            <h3 className={styles.stepTitle}>Build in public</h3>
            <p className={styles.stepDesc}>
              Document your journey. Share your progress, code, and insights with a supportive peer network.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={`${styles.stepNumber} ${styles.numPurple}`}>3</div>
            <h3 className={styles.stepTitle}>Leave a track record</h3>
            <p className={styles.stepDesc}>
              Compile an undeniable proof of work. Stand out to recruiters with a tangible history of shipping.
            </p>
          </div>
        </div>

        <div className={styles.highlightCard}>
          <div className={styles.highlightIcon}>
            <Trophy size={20} />
          </div>
          <h3 className={styles.highlightTitle}>What you're working toward</h3>
          <p className={styles.highlightDesc}>
            Top performers unlock exclusive mock interviews with industry veterans and direct visibility to HR professionals looking for proven talent, not just perfect resumes.
          </p>
        </div>

        <div className={styles.discordCard}>
          <div className={styles.discordIcon}>
            <MessageSquare size={20} />
          </div>
          <h3 className={styles.cardTitle}>You're not doing it alone</h3>
          <p className={styles.cardDesc}>
            Join hundreds of ambitious students in our Discord. Share resources, debug together, and build relationships that outlast the challenges.
          </p>
          <a href="https://discord.gg/j4Q8tvDj6" target="_blank" rel="noopener noreferrer" className={styles.discordBtn}>
            Join our Discord <ArrowRight size={16} />
          </a>
        </div>

      </div>

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
