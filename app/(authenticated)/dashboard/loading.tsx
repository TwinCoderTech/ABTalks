import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      {/* Header Skeleton */}
      <div className={styles.header}>
        <div className={styles.pulse} style={{ width: '120px', height: '30px', borderRadius: '4px' }}></div>
        <div className={styles.navRight}>
          <div className={styles.pulse} style={{ width: '80px', height: '30px', borderRadius: '4px' }}></div>
          <div className={styles.pulse} style={{ width: '60px', height: '30px', borderRadius: '4px' }}></div>
          <div className={styles.pulse} style={{ width: '40px', height: '30px', borderRadius: '4px' }}></div>
          <div className={styles.pulse} style={{ width: '36px', height: '36px', borderRadius: '50%' }}></div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className={styles.main}>
        {/* Heatmap Skeleton */}
        <div className={styles.pulse} style={{ width: '100%', height: '250px', borderRadius: '1rem', marginBottom: '2rem' }}></div>

        {/* Today's Task Skeleton */}
        <div className={styles.pulse} style={{ width: '100%', height: '180px', borderRadius: '1rem', marginBottom: '2rem' }}></div>

        {/* StatCards Skeleton */}
        <div className={styles.grid}>
          <div className={styles.pulse} style={{ width: '100%', height: '150px', borderRadius: '1rem' }}></div>
          <div className={styles.pulse} style={{ width: '100%', height: '150px', borderRadius: '1rem' }}></div>
          <div className={styles.pulse} style={{ width: '100%', height: '150px', borderRadius: '1rem' }}></div>
          <div className={styles.pulse} style={{ width: '100%', height: '150px', borderRadius: '1rem' }}></div>
        </div>
      </div>
    </div>
  );
}
