'use client';

import { useState } from 'react';
import { Search, Bell, SlidersHorizontal } from 'lucide-react';
import { PillBadge } from './PillBadge';
import { IconButton } from './IconButton';
import styles from './Header.module.css';

interface HeaderProps {
  greeting?: string;
  subGreeting?: string;
  pills?: React.ReactNode[];
}

export function Header({
  greeting = 'Good evening, Umar',
  subGreeting = "Here's what's happening around you tonight.",
  pills,
}: HeaderProps) {
  const [query, setQuery] = useState('');

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.titleBlock}>
          <h1 className={styles.greeting}>{greeting}</h1>
          <p className={styles.subGreeting}>{subGreeting}</p>
        </div>

        <div className={styles.actions}>
          {pills?.map((pill, i) => (
            <span key={i}>{pill}</span>
          ))}

          <div className={styles.searchWrap}>
            <Search size={15} strokeWidth={2.2} className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search spots, people…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SlidersHorizontal size={15} strokeWidth={2.2} className={styles.filterIcon} />
          </div>

          <IconButton icon={<Bell size={16} strokeWidth={2.2} />} ariaLabel="Notifications" variant="dark" size="md" />
          <IconButton icon={<Search size={16} strokeWidth={2.2} />} ariaLabel="Search" variant="dark" size="md" />
        </div>
      </div>
    </header>
  );
}
