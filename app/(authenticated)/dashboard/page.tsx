import styles from "./page.module.css";
import Link from "next/link";
import { getCurrentUser } from "@/actions/userActions";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import Heatmap from "@/components/Heatmap";
import StatCard from "@/components/StatCard";
import FaqAccordion from "@/components/FaqAccordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampusAmbassadorBanner from "@/components/CampusAmbassadorBanner";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  // Dynamic Day Calculation (Assuming cohort started on July 27, 2026 for demonstration)
  // In a real app, this might be based on user.createdAt or a global Program start date.
  const startDate = new Date('2026-07-27T00:00:00Z');
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  const currentDay = Math.min(Math.max(diffDays, 1), 60); // Ensure it's between 1 and 60

  // Fetch the challenge title for today from the DB (if it exists)
  const todayChallenge = await db.claudeChallenge.findUnique({
    where: { dayId: currentDay }
  });
  const challengeTitle = todayChallenge?.title || `Unlock Day ${currentDay} Challenge`;

  return (
    <div className={styles.container}>
      {/* Top Navbar */}
      <Header />

      {/* Banner */}
      <CampusAmbassadorBanner />

      {/* Main Content */}
      <main className={styles.main}>
        {/* Phase 2: Heatmap */}
        <Heatmap />

        {/* Phase 3: Today's Task Card */}
        <div className={styles.todaysTaskCard}>
          <div className={styles.taskContext}>
            CLAUDE challenge · IST day {currentDay}
          </div>
          <div className={styles.taskContentRow}>
            <div className={styles.taskDayLabel}>
              <span className={styles.taskDayNumber}>{currentDay}</span>
              <span className={styles.taskDayText}>Day</span>
            </div>
            
            <div className={styles.taskDetails}>
              <div className={styles.taskTags}>
                <span className={styles.tagBeginner}>Beginner</span>
                <span className={styles.tagTime}>
                  <span className="material-symbols-outlined" style={{fontSize: 16}}>schedule</span>
                  ~45 min
                </span>
              </div>
              <h3 className={styles.taskTitle}>Day {currentDay}: {challengeTitle}</h3>
              <Link href={`/track/claude/day-${currentDay}`}>
                <button className={styles.startBtn}>
                  Start Today's Challenge
                  <span className="material-symbols-outlined" style={{fontSize: 20}}>arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Phase 3: Stat Cards */}
        <StatCard />

        {/* Phase 4: Recent Activity */}
        <div className={styles.recentActivity}>
          <h3 className={styles.recentTitle}>Recent activity</h3>
          <p className={styles.recentSubtitle}>Last 7 submissions</p>
          <p className={styles.recentEmpty}>No submissions yet. Complete Day 1 to get started.</p>
        </div>

        {/* Phase 4: FAQ Accordion */}
        <FaqAccordion />

      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
