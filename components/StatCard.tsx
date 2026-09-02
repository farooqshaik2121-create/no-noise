import React from 'react';
import styles from './StatCard.module.css';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  accent?: 'lime' | 'navy' | 'sand' | 'neutral';
  trend?: string;
  trendDirection?: 'up' | 'down';
}

export function StatCard({
  icon,
  value,
  label,
  accent = 'neutral',
  trend,
  trendDirection = 'up',
}: StatCardProps) {
  return (
    <div className={styles.statCard}>
      <div className={`${styles.iconWrap} ${styles[accent]}`}>{icon}</div>
      <div className={styles.textBlock}>
        <span className={styles.value}>{value}</span>
        <span className={styles.label}>{label}</span>
      </div>
      {trend && (
        <span className={`${styles.trend} ${styles[trendDirection]}`}>{trend}</span>
      )}
    </div>
  );
}
