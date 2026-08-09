import styles from './profile.module.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getCurrentUser } from '@/actions/userActions';
import { redirect } from 'next/navigation';
import ProfileClient from './ProfileClient';

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.backBtn}>
          <ArrowLeft size={24} />
        </Link>
        <h1 className={styles.headerTitle}>My Profile</h1>
      </header>

      <main>
        <ProfileClient />
      </main>
    </div>
  );
}
