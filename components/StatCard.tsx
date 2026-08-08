import styles from './StatCard.module.css';

export default function StatCard() {
  return (
    <div className={styles.grid}>
      
      {/* Progress Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.mainValue}>14</div>
          <span className={`material-symbols-outlined ${styles.icon}`}>calendar_today</span>
        </div>
        <div className={styles.label}>DAY 14 OF 60</div>
        
        <div className={styles.progressContainer}>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: '23%' }}></div>
          </div>
          <div className={styles.progressBarBgSub}>
            <div className={styles.progressBarFillSub} style={{ width: '23%' }}></div>
          </div>
        </div>
        <div className={styles.footerText}>
          Calendar progress (IST) from your start date
        </div>
      </div>

      {/* Streak Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.mainValue}>0</div>
          <span className={`material-symbols-outlined ${styles.iconFire}`}>local_fire_department</span>
        </div>
        <div className={styles.label}>CURRENT STREAK</div>
        <div className={styles.footerText}>
          Longest: 0
        </div>
      </div>

      {/* Days Completed Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.mainValue}>0</div>
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
