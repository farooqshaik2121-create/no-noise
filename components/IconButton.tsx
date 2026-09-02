import React from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  variant?: 'dark' | 'light' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  variant = 'dark',
  size = 'md',
  active = false,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        active ? styles.active : ''
      }`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
