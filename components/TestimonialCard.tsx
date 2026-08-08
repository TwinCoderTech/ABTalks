import styles from './TestimonialCard.module.css';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  review: string;
  name: string;
  role: string;
  imageUrl: string;
}

export default function TestimonialCard({ review, name, role, imageUrl }: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <Quote size={28} className={styles.quoteIcon} fill="currentColor" stroke="none" />
      <p className={styles.reviewText}>{review}</p>
      
      <div className={styles.divider}></div>
      
      <div className={styles.profileRow}>
        <img src={imageUrl} alt={name} className={styles.avatar} />
        <div className={styles.profileInfo}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </div>
    </div>
  );
}
