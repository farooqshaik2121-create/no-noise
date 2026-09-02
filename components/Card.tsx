import React from 'react';
import styles from './Card.module.css';

type CardVariant = 'default' | 'tinted' | 'image';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, variant = 'default', className = '', style }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`} style={style}>
      {children}
    </div>
  );
}
