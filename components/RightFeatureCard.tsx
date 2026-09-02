import React from 'react';
import { Moon, Navigation } from 'lucide-react';
import { IconButton } from './IconButton';
import styles from './RightFeatureCard.module.css';

interface RightFeatureCardProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export function RightFeatureCard({
  title = 'Downtown After Dark',
  subtitle = 'The city is quietest after 11pm — and it’s beautiful.',
  imageUrl,
}: RightFeatureCardProps) {
  return (
    <div
      className={styles.card}
      style={
        imageUrl
          ? { backgroundImage: `url(${imageUrl})` }
          : {
              backgroundImage:
                'linear-gradient(160deg, #2c3447 0%, #171d2b 55%, #0f1420 100%)',
            }
      }
    >
      <div className={styles.shade} />

      <div className={styles.topRow}>
        <span className={styles.badge}>
          <Moon size={13} strokeWidth={2.4} />
          Night Mode
        </span>
        <IconButton
          icon={<Navigation size={15} strokeWidth={2.4} />}
          ariaLabel="Navigate"
          variant="glass"
          size="sm"
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.chipRow}>
          <span className={styles.chip}>24 spots open</span>
          <span className={styles.chip}>Low noise</span>
        </div>
      </div>
    </div>
  );
}
