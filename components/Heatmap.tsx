import styles from './Heatmap.module.css';

export default function Heatmap() {
  const squares = Array.from({ length: 60 }, (_, i) => i + 1);

  // Dynamic Day/Streak Calculation
  const startDate = new Date('2026-07-27T00:00:00Z');
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const currentDay = Math.min(Math.max(diffDays, 1), 60);
  const percentage = Math.round((currentDay / 60) * 100);

  // SVG Line Chart Points (mocking activity based on current day)
  const smoothPath = "M0 130 C 100 110, 200 120, 300 80 C 400 40, 500 60, 600 90 C 700 120, 800 70, 1000 50";
  const fillPath = `${smoothPath} L 1000 150 L 0 150 Z`;

  return (
    <div className={styles.panel}>
      
      {/* Column 1: Heatmap */}
      <div className={`${styles.column} ${styles.colBorder}`}>
        <h2 className={styles.title}>Your 60-Day Journey</h2>
        <p className={styles.subtitle}>{currentDay} days complete · Day {currentDay} of 60</p>
        
        <div className={styles.heatmapGrid}>
          {squares.map(day => {
            let stateClass = styles.future;
            if (day <= currentDay) stateClass = styles.onTime; // Updated conditionally
            
            return (
              <div key={day} className={`${styles.square} ${stateClass}`} />
            );
          })}
        </div>
        
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendSquare} ${styles.onTime}`} /> On time
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendSquare} ${styles.rejected}`} /> Rejected
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendSquare} ${styles.missed}`} /> Missed
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendSquare} ${styles.catchUp}`} /> Missed - catch up
          </div>
        </div>
      </div>

      {/* Column 2: Gamified Streak Block */}
      <div className={`${styles.column} ${styles.colBorder} ${styles.colPadLeft}`}>
        <div className={styles.streakContent}>
          <div className={styles.streakIconRow}>
            <span className={styles.fireEmoji}>🔥</span>
            <span className={styles.streakNumber}>{currentDay}</span>
          </div>
          <div className={styles.streakLabel}>Day Streak</div>
          
          <div className={styles.streakDivider}></div>
          
          <div className={styles.streakSubStats}>
            <div className={styles.subStat}>
              <span className={styles.subStatLabel}>Longest Streak</span>
              <span className={styles.subStatValue}>{currentDay}</span>
            </div>
            <div className={styles.subStat}>
              <span className={styles.subStatLabel}>Total Completed</span>
              <span className={styles.subStatValue}>{percentage}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Column 3: Analytical Graph */}
      <div className={`${styles.column} ${styles.colPadLeft}`}>
        <h3 className={styles.title}>Activity Overview</h3>
        <p className={styles.subtitle}>Last {currentDay} days</p>
        
        <div className={styles.graphWrapper}>
          <div className={styles.gridLines}>
            <div className={styles.gridLine}></div>
            <div className={styles.gridLine}></div>
            <div className={styles.gridLine}></div>
            <div className={styles.gridLine}></div>
          </div>
          
          <svg viewBox="0 0 1000 150" preserveAspectRatio="none" className={styles.svgGraph}>
            <defs>
              <linearGradient id="tealGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d={fillPath} fill="url(#tealGradient)" />
            <path d={smoothPath} fill="none" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            
            <g className={styles.tooltipGroup}>
              <line x1="800" y1="0" x2="800" y2="150" className={styles.tooltipLine} />
              <circle cx="800" cy="70" r="6" className={styles.tooltipDot} />
            </g>
          </svg>
        </div>
      </div>

    </div>
  );
}
