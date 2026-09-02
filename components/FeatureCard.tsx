import React from 'react';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { PillBadge } from './PillBadge';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function FeatureCard({
  kicker = 'Hidden Gem • Speakeasy',
  title = 'The Basement Bar',
  subtitle = 'Live jazz, candlelight & 40 seats. No signage, no scene.',
  ctaLabel = 'View Spot',
  onCtaClick,
}: FeatureCardProps) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.overlay} />
      <div className={styles.topRow}>
        <PillBadge
          icon={<Sparkles size={13} strokeWidth={2.4} />}
          label="Tonight's Pick"
          variant="glass"
        />
        <span className={styles.fav}>
          <ArrowUpRight size={15} strokeWidth={2.4} />
        </span>
      </div>

      <div className={styles.body}>
        <span className={styles.kicker}>{kicker}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <button className={styles.cta} onClick={onCtaClick}>
          <MapPin size={14} strokeWidth={2.4} />
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
