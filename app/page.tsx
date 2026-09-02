'use client';

import { useState } from 'react';
import { CloudSun, Users, MapPin, Clock, HeartHandshake } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { PillBadge } from '@/components/PillBadge';
import { FeatureCard } from '@/components/FeatureCard';
import { GatheringCard } from '@/components/GatheringCard';
import { RightFeatureCard } from '@/components/RightFeatureCard';
import { DiscoverySection } from '@/components/DiscoverySection';
import { StatCard } from '@/components/StatCard';
import styles from './page.module.css';

export default function Home() {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div className={styles.appShell}>
      <Sidebar activeItem={activeNav} onSelectItem={setActiveNav} />

      <main className={styles.main}>
        <Header
          pills={[
            <PillBadge
              key="weather"
              icon={<CloudSun size={13} strokeWidth={2.4} />}
              label="18° · Clear"
            />,
            <PillBadge
              key="friends"
              icon={<Users size={13} strokeWidth={2.4} />}
              label="3 friends nearby"
            />,
          ]}
        />

        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <FeatureCard />
            <GatheringCard />
          </div>
          <RightFeatureCard />
        </div>

        <DiscoverySection />

        <div className={styles.statsRow}>
          <StatCard
            icon={<MapPin size={18} strokeWidth={2.2} />}
            value="1,240"
            label="Spots discovered this week"
            accent="lime"
            trend="+12%"
          />
          <StatCard
            icon={<Clock size={18} strokeWidth={2.2} />}
            value="86h"
            label="Offline & quiet hours logged"
            accent="sand"
            trend="+8%"
          />
          <StatCard
            icon={<HeartHandshake size={18} strokeWidth={2.2} />}
            value="342"
            label="Local connections made"
            accent="navy"
            trend="+24"
          />
        </div>
      </main>
    </div>
  );
}
