import styles from "./page.module.css";
import Link from "next/link";
import { getCurrentUser } from "@/actions/userActions";
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
            CLAUDE challenge · IST day 14
          </div>
          <div className={styles.taskContentRow}>
            <div className={styles.taskDayLabel}>
              <span className={styles.taskDayNumber}>14</span>
              <span className={styles.taskDayText}>Day</span>
            </div>
            
            <div className={styles.taskDetails}>
              <div className={styles.taskTags}>
                <span className={styles.tagBeginner}>Beginner</span>
                <span className={styles.tagTime}>
                  <span className="material-symbols-outlined" style={{fontSize: 16}}>schedule</span>
                  ~30 min
                </span>
              </div>
              <h3 className={styles.taskTitle}>Day 14: Detect Job Red Flags Before You Apply with Claude</h3>
              <Link href="/track/claude/day-12">
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
