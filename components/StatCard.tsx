import styles from './StatCard.module.css';

export default function StatCard() {
  // Dynamic Day/Streak Calculation
  const startDate = new Date('2026-07-27T00:00:00Z');
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const currentDay = Math.min(Math.max(diffDays, 1), 60);
  const percentage = Math.round((currentDay / 60) * 100);

  return (
    <div className={styles.grid}>
      
      {/* Progress Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.mainValue}>{currentDay}</div>
          <span className={`material-symbols-outlined ${styles.icon}`}>calendar_today</span>
        </div>
        <div className={styles.label}>DAY {currentDay} OF 60</div>
        
        <div className={styles.progressContainer}>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${percentage}%` }}></div>
          </div>
          <div className={styles.progressBarBgSub}>
            <div className={styles.progressBarFillSub} style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
        <div className={styles.footerText}>
          Calendar progress (IST) from your start date
        </div>
      </div>

      {/* Streak Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.mainValue}>{currentDay}</div>
          <span className={`material-symbols-outlined ${styles.iconFire}`}>local_fire_department</span>
        </div>
        <div className={styles.label}>CURRENT STREAK</div>
        <div className={styles.footerText}>
          Longest: {currentDay}
        </div>
      </div>

      {/* Days Completed Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.mainValue}>{currentDay}</div>
          <span className={`material-symbols-outlined ${styles.iconSuccess}`}>check_circle</span>
        </div>
        <div className={styles.label}>DAYS COMPLETED</div>
      </div>

      {/* Referrals Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.mainValue}>1</div>
          <span className={`material-symbols-outlined ${styles.iconPrimary}`}>group</span>
        </div>
        <div className={styles.label}>REFERRALS</div>
        <div className={styles.footerText}>
          Your code: <span className={styles.codeText}>KQU2UV</span>
        </div>
      </div>

    </div>
  );
}
