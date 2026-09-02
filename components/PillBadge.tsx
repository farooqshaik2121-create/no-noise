import React from 'react';
import styles from './PillBadge.module.css';

interface PillBadgeProps {
  icon?: React.ReactNode;
  label: string;
  variant?: 'light' | 'dark' | 'accent' | 'glass';
  className?: string;
  onClick?: () => void;
}

export const PillBadge: React.FC<PillBadgeProps> = ({
  icon,
  label,
  variant = 'light',
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`${styles.pill} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </div>
  );
};
