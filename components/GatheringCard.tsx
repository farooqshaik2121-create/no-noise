import React from 'react';
import { Calendar, ChevronRight, MapPin, Music2 } from 'lucide-react';
import styles from './GatheringCard.module.css';

interface GatheringCardProps {
  title?: string;
  dateLabel?: string;
  spots?: string[];
  curators?: string[];
  attendees?: number;
}

export function GatheringCard({
  title = 'Live Jazz Night',
  dateLabel = 'Friday • Sep 4',
  spots = ['The Basement Bar', 'Rooftop 27', 'La Sirena'],
  curators = ['Maya', 'Jonah', 'Rosa'],
  attendees = 214,
}: GatheringCardProps) {
  return (
    <div className={styles.gatheringCard}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <span className={styles.eyebrow}>Gathering</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <span className={styles.datePill}>
          <Calendar size={12} strokeWidth={2.4} />
          {dateLabel}
        </span>
      </div>

      <div className={styles.split}>
        <div className={styles.column}>
          <span className={styles.columnLabel}>Spots</span>
          {spots.map((spot) => (
            <div key={spot} className={styles.rowItem}>
              <span className={styles.dot} />
              <span className={styles.rowText}>{spot}</span>
            </div>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.column}>
          <span className={styles.columnLabel}>Curators</span>
          {curators.map((name) => (
            <div key={name} className={styles.rowItem}>
              <span className={styles.avatar}>{name[0]}</span>
              <span className={styles.rowText}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.meta}>
          <MapPin size={13} strokeWidth={2.2} />
          <span>3 spots · {attendees} going</span>
        </div>
        <button className={styles.joinBtn}>
          <Music2 size={13} strokeWidth={2.4} />
          Join
          <ChevronRight size={13} strokeWidth={2.4} />
        </button>
      </div>
    </div>
  );
}
