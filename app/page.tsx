'use client';

import { useRef } from 'react';
import styles from "./page.module.css";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { ChevronLeft, ChevronRight, Mail, MessageSquare } from 'lucide-react';

export default function LandingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      {/* TopAppBar */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoArea}>
            <img 
              alt="ABTalks Logo" 
              className={styles.logoImage} 
              src="https://lh3.googleusercontent.com/aida/AP1WRLtgplRLDVJKB8YJ7xpZDAj92D9loPELd1JbmWmO7_mw44IysIAcN4wtvGEeunQAOEpOSARFpwweERNq4ZNEr8Re4hnkPQnA2y4fdNYs1hXFoLmGeLYcuZpSBPzWVc7ZjlKMTiItdl_VuZFWauUChEhhO3kMmKr67SewRGcg7hVFLkkOMlNvZsNlYUBcu4Z8H2gi2FuZ1l5Fk3IHbPenwa1qRnsPKGsts9AUir0BOrcSEBX4F_O3Fp-U2Og" 
            />
            <span className={`headline-md ${styles.logoText}`}>ABTalks</span>
          </div>
          <Link href="/login">
            <button className={`label-md ${styles.joinBtn}`}>
              Join
            </button>
          </Link>
        </div>
      </header>
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.sectionContent} style={{alignItems: 'center'}}>
            <div className={styles.eyebrowText}>
              Build in public. Grow together.
            </div>
            <h1 className={styles.heroTitle}>
              Code consistently.<br/>
              Post publicly.<br/>
              <span className={styles.heroHighlight}>Get noticed.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Join India's coding community for college students to learn, build, and accelerate their careers through visible proof of work.
            </p>
            <Link href="/login" style={{width: '100%', maxWidth: '24rem', display: 'block', marginTop: '2rem'}}>
              <button className={`headline-sm ${styles.ctaBtn}`} style={{maxWidth: '100%'}}>
                Start Your Challenge
              </button>
            </Link>
            
            <div className={`label-md ${styles.socialProof}`}>
              <div className={styles.avatarGroup}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa6zdSnQ62FzILmY31slQlXG6V_0ss3gAG352OGVnWpYS_ZTqXTMYL94O1CCXadQVAaSUmW7J0jKKfz6et982bW9wCY7hQymw52s2KqKrP0913IG3-swhgIC21k-A15Pzh4AZL0gFufF5NykVpGKigSUz0fFts7rap2AcrSQzbR3S3oitwSJMKoLLwBpAvb7pMX_fAtKEHc4r-DFEiTsG4BRhuhoItGI7KbUs4jQNla-KxiX48jAHS" alt="Student" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGMS09SAOOEQNr__NdyP5Cg_50hksF51hP7idJDKlzkTh9uF_39nHuc9uyALBNntVwfgGJLUMsLAf7kOdZfhedI7KoAVsW_Oj_yPir7Nwe0vRj1ZpVPkhYdp09HFFs7RJJKiC-VRJPSVfb-c0VdzkOs1gJBQ798Nacm5ppBHOZa95RQ2ixKBb-vTJOpRrqfD0cb_PEtF8uU84OkCqKGXkcS1o9ksMTs62M4JLNrMsOGZGpE6Ty0R2Z" alt="Student" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3vuMsQyIDKafvg2E8e638owRtKCrnAihYmi3x4jj_a1Hd70D8tFlQwHNvB7oFSdPn85tLq-HM8-7PZaFS1s_hB-d5w49OiFy7q12cBt6D6fxrw36Cdcwg_8xA95f3y1IxJn-jqK2MWEWkuwMrnRDLmnNci9JhKxx7HsKdP3mxd9CEGjnXmkEl7Mua6-9L_Wjwkql5SID-VCx3zJHt8b_Hw_6SxL9qnX9v1QcFLdsBNYgLhQ60Il5D" alt="Student" />
              </div>
              <span>12,847 students joined</span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.section} style={{backgroundColor: 'var(--surface-container-lowest)'}}>
          <div className={styles.sectionContent}>
            <h2 className={`headline-md ${styles.sectionTitle}`}>How It Works</h2>
            <div className={styles.stepList}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber1}><span className="headline-sm">1</span></div>
                <div>
                  <h3 className={`headline-sm ${styles.stepTitle}`}>Pick Your Track</h3>
                  <p className={`body-md ${styles.stepDesc}`}>Choose from AI, Software Engineering, or Data Science paths tailored for industry relevance.</p>
                </div>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber2}><span className="headline-sm">2</span></div>
                <div>
                  <h3 className={`headline-sm ${styles.stepTitle}`}>Build Daily</h3>
                  <p className={`body-md ${styles.stepDesc}`}>Receive one clear, actionable task every day to build momentum without burning out.</p>
                </div>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber3}><span className="headline-sm">3</span></div>
                <div>
                  <h3 className={`headline-sm ${styles.stepTitle}`}>Get Discovered</h3>
                  <p className={`body-md ${styles.stepDesc}`}>Showcase your streak and portfolio directly to hiring partners looking for consistency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why ABTalks */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={`headline-md ${styles.sectionTitle}`}>Why ABTalks</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyCardDark}>
                <div className={styles.whyBlur}></div>
                <span className={`material-symbols-outlined ${styles.whyIconDark}`} style={{fontSize: 32}}>fitness_center</span>
                <h3 className={`headline-sm ${styles.whyTitleDark}`}>Consistency &gt; Intensity</h3>
                <p className={`body-md ${styles.whyDescDark}`}>Small daily commits beat weekend cramming. Build a habit that lasts beyond the challenge.</p>
              </div>
              <div className={styles.whyCardLight}>
                <span className={`material-symbols-outlined ${styles.whyIconLight}`} style={{fontSize: 32}}>public</span>
                <h3 className={`headline-sm ${styles.whyTitleLight}`}>Build in Public</h3>
                <p className={`body-md ${styles.whyDescLight}`}>Seamlessly share your progress on LinkedIn and GitHub to build your personal brand.</p>
                <div className={styles.tagGroup}>
                  <span className={`label-md ${styles.tag1}`}>GitHub API</span>
                  <span className={`label-md ${styles.tag2}`}>LinkedIn Sharing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track Showcase */}
        <section className={styles.pathSection}>
          <div className={styles.sectionContent}>
            <div className={styles.pathHeader}>
              <h2 className={`headline-md ${styles.heroTitle}`}>Choose Your Path</h2>
            </div>
            <div className={styles.scrollContainer}>
              <div className={styles.trackCard1}>
                <div className={styles.trackTop}>
                  <span className={`material-symbols-outlined ${styles.trackIcon1}`} style={{fontSize: 32}}>smart_toy</span>
                  <span className={`label-md ${styles.taskBadge}`}>60 Tasks</span>
                </div>
                <h3 className={`headline-sm ${styles.trackTitle}`}>AI Engineering</h3>
                <p className={`body-md ${styles.trackDesc}`}>Build LLM wrappers, fine-tune models, and deploy AI agents.</p>
                <div className={styles.progressBg}>
                  <div className={styles.progressFill1}></div>
                </div>
                <button className={`label-md ${styles.trackBtn1}`}>View Track</button>
              </div>
              
              <div className={styles.trackCard2}>
                <div className={styles.trackTop}>
                  <span className={`material-symbols-outlined ${styles.trackIcon2}`} style={{fontSize: 32}}>code_blocks</span>
                  <span className={`label-md ${styles.taskBadge}`}>60 Tasks</span>
                </div>
                <h3 className={`headline-sm ${styles.trackTitle}`}>Software Engineering</h3>
                <p className={`body-md ${styles.trackDesc}`}>Master full-stack development, system design, and algorithms.</p>
                <div className={styles.progressBg}>
                  <div className={styles.progressFill2}></div>
                </div>
                <button className={`label-md ${styles.trackBtn2}`}>View Track</button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Benefits */}
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={`headline-md ${styles.sectionTitle}`}>What You Get</h2>
            <div className={styles.benefitGrid}>
              <div className={styles.benefitCard}>
                <span className="material-symbols-outlined" style={{color: 'var(--tertiary-container)', fontSize: 40}}>card_giftcard</span>
                <h4 className={styles.benefitTitle}>Goodies &amp; Rewards</h4>
                <p className={styles.benefitSubtitle}>Win exclusive merch and gear for consistent learning.</p>
              </div>
              <div className={styles.benefitCard}>
                <span className="material-symbols-outlined" style={{color: 'var(--secondary-container)', fontSize: 40}}>groups</span>
                <h4 className={styles.benefitTitle}>Mock Interviews</h4>
                <p className={styles.benefitSubtitle}>Practice with industry experts to ace your next round.</p>
              </div>
              <div className={`${styles.benefitCard} ${styles.benefitCardFull}`}>
                <span className="material-symbols-outlined" style={{color: 'var(--primary-container)', fontSize: 40}}>work</span>
                <h4 className={styles.benefitTitle}>Internship Opportunities</h4>
                <p className={styles.benefitSubtitle}>Top performers get referred to our hiring partners.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`${styles.section} ${styles.finalCta}`}>
          <div className={styles.sectionContent}>
            <div className={styles.finalCard}>
              <div className={styles.finalContent}>
                <MessageSquare size={32} style={{ color: '#ffffff' }} />
                <div className={styles.finalText}>
                  <h2 className="headline-md" style={{ color: '#ffffff', margin: 0 }}>Join our community for instant updates</h2>
                  <p className="body-md" style={{ color: '#f0fdfa', margin: 0 }}>Meet builders, get event alerts, and stay accountable.</p>
                </div>
              </div>
              <div className={styles.finalBtnWrapper}>
                <a href="https://chat.whatsapp.com/LSru1BgvifpEB4OMZsaZEi" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                  <button className={`headline-sm ${styles.finalBtn}`}>
                    Join now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialsHeader}>
            <h2 className={styles.testimonialsTitle}>What our builders say</h2>
            <p className={styles.testimonialsSubtitle}>Real stories from students and professionals who finished the 60-Day Claude Challenge.</p>
          </div>
          
          <div className={styles.carouselNav}>
            <button className={styles.carouselBtn} onClick={scrollLeft}><ChevronLeft size={20} /></button>
            <button className={styles.carouselBtn} onClick={scrollRight}><ChevronRight size={20} /></button>
          </div>
          
          <div className={styles.carouselContainer} ref={carouselRef}>
            <TestimonialCard 
              review="I joined with curiosity, but also with doubts about whether I could stay consistent for all 60 days. To my surprise, I did it. This wasn't just a 60-day challenge. It was a journey that taught me consistency can turn uncertainty into achievement."
              name="Rida Khan"
              role="AI Enthusiast"
              imageUrl="https://ui-avatars.com/api/?name=Rida+Khan&background=0D8ABC&color=fff"
            />
            <TestimonialCard 
              review="From exploring AI concepts to building production-ready projects, every challenge strengthened my technical skills and encouraged me to think like an engineer. Today AI isn't just something I learn. It's a tool I use to solve meaningful problems."
              name="Devpal Singh Anand"
              role="Participant"
              imageUrl="https://ui-avatars.com/api/?name=Devpal+Singh+Anand&background=F59E0B&color=fff"
            />
            <TestimonialCard 
              review="More than just creating projects, I learned the art of prompt engineering: how to give clear instructions and solve complex problems step by step. ABTalks didn't just teach me AI, it empowered me to build the future with it."
              name="Nandika Sharma"
              role="IMS Noida"
              imageUrl="https://ui-avatars.com/api/?name=Nandika+Sharma&background=10B981&color=fff"
            />
            <TestimonialCard 
              review="Joining the ABTalks 60-Day Claude AI Challenge transformed my AI journey. I mastered prompt engineering, learned to build smarter with AI, and gained the confidence to solve real-world problems."
              name="Komal Goswami"
              role="MPGI Kanpur"
              imageUrl="https://ui-avatars.com/api/?name=Komal+Goswami&background=8B5CF6&color=fff"
            />
          </div>
        </section>

        {/* New Footer */}
        <footer className={styles.newFooter}>
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
      </main>
    </div>
  );
}
