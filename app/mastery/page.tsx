import styles from "./page.module.css";
import Link from "next/link";
import { submitDailyTask } from "@/actions/programActions";

export default function MasteryPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Link href="/dashboard" style={{textDecoration: 'none'}}>
            <button className={styles.backBtn}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </Link>
          <h1 className={`headline-md ${styles.brandName}`}>60-Day Claude AI Mastery</h1>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.badges}>
              <span className={`label-sm ${styles.badgeNormal}`}>Day 13</span>
              <span className={`label-sm ${styles.badgeNormal}`}>
                <span className="material-symbols-outlined" style={{fontSize: 14}}>schedule</span> 45 min
              </span>
              <span className={`label-sm ${styles.badgeHighlight}`}>
                <span className="material-symbols-outlined" style={{fontSize: 14}}>bar_chart</span> Intermediate
              </span>
            </div>
            <h2 className={`headline-lg ${styles.heroTitle}`}>Connect Indeed with Claude</h2>
            <p className={`body-lg ${styles.heroDesc}`}>Learn how to leverage Claude to analyze job descriptions from Indeed and tailor your resume and cover letter for specific roles.</p>
          </div>
        </section>

        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.card}>
              <h3 className={`headline-md ${styles.cardTitle}`}>Learning Objectives</h3>
              <ul className={`body-md ${styles.list}`} style={{listStyleType: 'disc'}}>
                <li>Understand how to extract key requirements from Indeed job postings.</li>
                <li>Prompt Claude effectively to compare your current resume against job requirements.</li>
                <li>Generate a customized cover letter draft tailored to the specific role and company culture.</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={`headline-md ${styles.cardTitle}`}>Instructions</h3>
              <div className={`body-md ${styles.instructionSteps}`}>
                <p>1. Find a job posting on Indeed that you are interested in applying for.</p>
                <p>2. Copy the entire job description text.</p>
                <p>3. Open a new chat with Claude and use the provided prompt template below, pasting the job description where indicated.</p>
                <div className={`body-sm ${styles.codeBlock}`}>
                  <p className={styles.codeP}>I am applying for the [Job Title] position at [Company Name]. Here is the job description:</p>
                  <p className={styles.codeP}>[Paste Job Description Here]</p>
                  <p className={styles.codeP}>Here is my current resume:</p>
                  <p className={styles.codeP}>[Paste Resume Here]</p>
                  <p className={styles.codeP}>Please analyze the job description and suggest 3-5 specific changes I should make to my resume to better align with the role. Then, draft a compelling cover letter based on this information.</p>
                </div>
                <p>4. Review Claude's suggestions and update your resume accordingly.</p>
                <p>5. Refine the generated cover letter to ensure it sounds authentic to your voice.</p>
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.card}>
              <h3 className={`headline-md ${styles.cardTitle}`}>Resources</h3>
              <div className={styles.resourceList}>
                <a className={styles.resourceItem} href="#">
                  <div className={styles.resourceIcon}>
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <div>
                    <h4 className={`label-md ${styles.resourceTitle}`}>Prompt Template</h4>
                    <p className={`body-sm ${styles.resourceType}`}>Download PDF</p>
                  </div>
                </a>
                <a className={styles.resourceItem} href="#">
                  <div className={styles.resourceIcon}>
                    <span className="material-symbols-outlined">link</span>
                  </div>
                  <div>
                    <h4 className={`label-md ${styles.resourceTitle}`}>Indeed Best Practices</h4>
                    <p className={`body-sm ${styles.resourceType}`}>External Article</p>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={`headline-md ${styles.cardTitle}`}>Submit Your Work</h3>
              <p className="body-sm" style={{color: 'var(--on-surface-variant)'}}>
                To complete today's task, submit the links to your updated profiles or documents.
              </p>
              <form action={submitDailyTask} className={styles.form}>
                <input type="hidden" name="programId" value="p1" />
                <div className={styles.formGroup}>
                  <label className={`label-md ${styles.formLabel}`} htmlFor="github-url">GitHub URL (Optional)</label>
                  <input className={`body-md ${styles.formInput}`} id="github-url" name="githubUrl" placeholder="https://github.com/yourusername" type="url" />
                </div>
                <div className={styles.formGroup}>
                  <label className={`label-md ${styles.formLabel}`} htmlFor="linkedin-url">LinkedIn URL</label>
                  <input className={`body-md ${styles.formInput}`} id="linkedin-url" name="linkedinUrl" placeholder="https://linkedin.com/in/yourprofile" required type="url" />
                </div>
                <button className={`label-md ${styles.submitBtn}`} type="submit">
                  <span className="material-symbols-outlined">check_circle</span>
                  Submit &amp; Complete Day
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
