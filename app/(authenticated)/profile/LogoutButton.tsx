'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';
import styles from './profile.module.css';

export default function LogoutButton() {
  return (
    <button className={styles.logoutBtn} onClick={() => signOut({ callbackUrl: '/' })}>
      <LogOut size={20} /> Log Out
    </button>
  );
}
