import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';

function FlipDigit({ value, label }) {
  const display = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="countdown-digit relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            className="font-mono text-cyan font-bold absolute"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
        {/* Corner brackets */}
        <span className="absolute top-1 left-1 font-mono text-border-active text-xs opacity-30">[</span>
        <span className="absolute bottom-1 right-1 font-mono text-border-active text-xs opacity-30">]</span>
      </div>
      <span className="text-text-muted text-xs font-mono tracking-wider uppercase">{label}</span>
    </div>
  );
}

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const diff = dayjs(targetDate).diff(dayjs(), 'second');
      if (diff <= 0) { setExpired(true); setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400),
        hours: Math.floor((diff % 86400) / 3600),
        minutes: Math.floor((diff % 3600) / 60),
        seconds: diff % 60,
      });
    };
    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (expired) {
    return (
      <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p className="font-heading text-section-title glow-green font-bold">🎓 DEPLOYMENT DAY! 🚀</p>
        <p className="font-mono text-text-secondary text-sm mt-2">// status: GRADUATED</p>
      </motion.div>
    );
  }

  return (
    <div className="flex gap-4 sm:gap-8 items-start justify-center flex-wrap">
      <FlipDigit value={timeLeft.days} label="days" />
      <span className="text-cyan text-3xl font-mono mt-5 opacity-40">:</span>
      <FlipDigit value={timeLeft.hours} label="hrs" />
      <span className="text-cyan text-3xl font-mono mt-5 opacity-40">:</span>
      <FlipDigit value={timeLeft.minutes} label="min" />
      <span className="text-cyan text-3xl font-mono mt-5 opacity-40">:</span>
      <FlipDigit value={timeLeft.seconds} label="sec" />
    </div>
  );
}
