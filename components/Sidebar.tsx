'use client';

import { useState } from 'react';
import {
  Home,
  Compass,
  Users,
  Bell,
  Bookmark,
  Settings,
  Zap,
  MapPin,
} from 'lucide-react';
import styles from './Sidebar.module.css';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={16} strokeWidth={2.2} /> },
  { id: 'explore', label: 'Explore', icon: <Compass size={16} strokeWidth={2.2} /> },
  { id: 'following', label: 'Following', icon: <Users size={16} strokeWidth={2.2} /> },
  { id: 'activity', label: 'Activity', icon: <Bell size={16} strokeWidth={2.2} /> },
  { id: 'saved', label: 'Saved', icon: <Bookmark size={16} strokeWidth={2.2} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={16} strokeWidth={2.2} /> },
];

interface SidebarProps {
  activeItem?: string;
  onSelectItem?: (id: string) => void;
}

export function Sidebar({ activeItem = 'home', onSelectItem }: SidebarProps) {
  const [active, setActive] = useState(activeItem);

  const handleSelect = (id: string) => {
    setActive(id);
    onSelectItem?.(id);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoRow}>
        <span className={styles.logoDot} />
        <span className={styles.logoText}>NO&nbsp;NOISE</span>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              onClick={() => handleSelect(item.id)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className={styles.upgradeCard}>
        <div className={styles.upgradeIcon}>
          <Zap size={16} fill="currentColor" />
        </div>
        <p className={styles.upgradeTitle}>Upgrade to Pro</p>
        <p className={styles.upgradeDesc}>
          Unlock private spots &amp; zero-noise mode
        </p>
        <button className={styles.upgradeButton}>
          <MapPin size={13} strokeWidth={2.4} />
          Upgrade
        </button>
      </div>
    </aside>
  );
}
