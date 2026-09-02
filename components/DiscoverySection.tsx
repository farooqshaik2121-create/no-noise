'use client';

import { useState } from 'react';
import { Eye, Flame, Star } from 'lucide-react';
import { Tabs } from './Tabs';
import styles from './DiscoverySection.module.css';

interface DiscoveryCardProps {
  title: string;
  tag: string;
  atmosphere: number;
  imageUrl?: string;
  accent?: string;
}

export function DiscoveryCard({
  title,
  tag,
  atmosphere,
  imageUrl,
  accent = '#3d4a63',
}: DiscoveryCardProps) {
  return (
    <div className={styles.discoveryCard}>
      <div
        className={styles.discoveryImage}
        style={
          imageUrl
            ? { backgroundImage: `url(${imageUrl})` }
            : {
                background: `linear-gradient(135deg, ${accent} 0%, #161c29 100%)`,
              }
        }
      >
        <span className={styles.scorePill}>
          <Star size={11} fill="currentColor" strokeWidth={2.2} />
          {atmosphere.toFixed(1)}
        </span>
      </div>
      <div className={styles.discoveryBody}>
        <span className={styles.discoveryTag}>{tag}</span>
        <h4 className={styles.discoveryTitle}>{title}</h4>
      </div>
    </div>
  );
}

const DEFAULT_SPOTS = [
  { title: 'The Basement Bar', tag: 'Speakeasy', atmosphere: 4.9, accent: '#3d4a63' },
  { title: 'Rooftop 27', tag: 'Skyline view', atmosphere: 4.7, accent: '#475569' },
  { title: 'La Sirena', tag: 'Quiet café', atmosphere: 4.5, accent: '#334155' },
  { title: 'Alley Cat Records', tag: 'Vinyl & coffee', atmosphere: 4.6, accent: '#1e293b' },
];

interface DiscoverySectionProps {
  title?: string;
  spots?: typeof DEFAULT_SPOTS;
}

export function DiscoverySection({
  title = 'Fresh Finds This Week',
  spots = DEFAULT_SPOTS,
}: DiscoverySectionProps) {
  const [activeTab, setActiveTab] = useState('singles');

  const TABS = [
    { id: 'singles', label: 'Singles' },
    { id: 'all', label: 'All Spots' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.titleBlock}>
          <span className={styles.eyebrow}>
            <Eye size={11} strokeWidth={2.4} />
            Curated by locals
          </span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <Tabs tabs={TABS} activeTab={activeTab} onSelectTab={setActiveTab} />
      </div>

      <div className={styles.grid}>
        {spots.map((spot) => (
          <DiscoveryCard key={spot.title} {...spot} />
        ))}
      </div>

      <div className={styles.notice}>
        <Flame size={14} strokeWidth={2.2} />
        <span>
          1,240 people are out tonight — <strong>3 new quiet spots</strong> just went live.
        </span>
      </div>
    </section>
  );
}
