'use client';

import { useState } from 'react';
import styles from './FaqAccordion.module.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "Is purchasing a Claude subscription mandatory for this challenge?", answer: "No, a subscription is not mandatory. You can participate with the free tier." },
  { question: "Do I need to create a Claude account?", answer: "Yes, you will need a Claude account to complete the daily tasks." },
  { question: "Where can I find the daily task?", answer: "Daily tasks are posted in this dashboard under the 'Today's Task' section." },
  { question: "Will I receive daily tasks or teaching sessions?", answer: "You will receive daily tasks. We will occasionally host teaching sessions to supplement your learning." },
  { question: "What if I miss a day's task?", answer: "You can always catch up! Missed days will show as 'Missed - catch up' in your journey heatmap once you complete them later." },
  { question: "Will I receive goodies after completing the challenge?", answer: "Participants who successfully complete all 60 days on time will be eligible for exclusive goodies." },
  { question: "Who should I contact if I have an issue with a task?", answer: "You can reach out to our community support on Discord or email our helpdesk." },
  { question: "Is there any YouTube channel for the Claude Challenge?", answer: "Yes, check out the ABTalks YouTube channel for video walkthroughs of some tasks." },
  { question: "Will we explore different AI tools during the challenge?", answer: "While the primary focus is Claude, we may occasionally integrate or compare with other AI tools." },
  { question: "Can I use tools other than Claude for the challenge?", answer: "We highly recommend using Claude to follow along perfectly, but the core concepts can often be applied elsewhere." },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <span className="material-symbols-outlined">help</span>
        </div>
        <div>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>Everything you need to know</p>
        </div>
      </div>
      
      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            <button 
              className={styles.questionBtn} 
              onClick={() => toggleOpen(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span className={`material-symbols-outlined ${styles.arrow} ${openIndex === index ? styles.arrowOpen : ''}`}>
                keyboard_arrow_down
              </span>
            </button>
            <div className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ''}`}>
              <div className={styles.answerInner}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.helpCallout}>
        Still have questions? Reach out via the{' '}
        <a 
          href="https://chat.whatsapp.com/LSru1BgvifpEB4OMZsaZEi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.helpLink}
        >
          WhatsApp community
        </a>{' '}
        or check the{' '}
        <a 
          href="https://www.youtube.com/@ABTalksOnAI" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.helpLink}
        >
          ABTalks on AI YouTube channel
        </a>.
      </div>
    </div>
  );
}
