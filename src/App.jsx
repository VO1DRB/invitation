import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import ScrollProgress from './components/layout/ScrollProgress';
import MusicToggle from './components/ui/MusicToggle';
import CustomCursor from './components/ui/CustomCursor';

import OpeningScreen from './components/sections/01-OpeningScreen';
import HeroIntro from './components/sections/02-HeroIntro';
import Journey from './components/sections/03-Journey';
import GraduationAnnouncement from './components/sections/04-GraduationAnnouncement';
import EventInfo from './components/sections/05-EventInfo';
import Countdown from './components/sections/06-Countdown';
import PhotoGallery from './components/sections/07-PhotoGallery';
import GuestCongrats from './components/sections/08-GuestCongrats';
import LocationMaps from './components/sections/09-LocationMaps';
import FinalCelebration from './components/sections/10-FinalCelebration';

// Tech-styled preloader
function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); onDone(); return 100; }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6"
      style={{ background: '#0D1117' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center space-y-4">
        {/* Terminal logo */}
        <motion.div
          className="font-mono text-3xl font-bold glow-cyan"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {'>'}_
        </motion.div>
        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-bg-card rounded-full overflow-hidden border border-border-default">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #00FF41, #00D4FF, #7C3AED)', width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <p className="font-mono text-text-muted text-xs">
          loading invitation... {Math.min(progress, 100)}%
        </p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <CustomCursor />
      {opened && <ScrollProgress />}
      {opened && <MusicToggle />}

      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onDone={() => setLoading(false)} />
        ) : !opened ? (
          <OpeningScreen key="opening" onOpen={() => setOpened(true)} />
        ) : (
          <motion.main key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <HeroIntro />
            <Journey />
            <GraduationAnnouncement />
            <EventInfo />
            <Countdown />
            <PhotoGallery />
            <GuestCongrats />
            <LocationMaps />
            <FinalCelebration />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
