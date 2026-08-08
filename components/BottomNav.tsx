'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, GraduationCap, User } from 'lucide-react';
import styles from './BottomNav.module.css';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
    { name: 'Programs', href: '/programs', icon: GraduationCap },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <nav className={styles.bottomNav}>
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = item.icon;

        return (
          <Link 
            key={item.name} 
            href={item.href} 
            className={`${styles.navItem} ${isActive ? styles.activeNavItem : ''}`}
          >
            <div className={styles.iconWrapper}>
              <Icon size={24} />
            </div>
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
