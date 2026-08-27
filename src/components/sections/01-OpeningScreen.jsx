import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graduateInfo } from '../../data/content';

const BOOT_LINES = [
  { text: '> booting invitation.sys ...', delay: 0 },
  { text: '> loading assets ████████ 100%', delay: 0.4 },
  { text: `> user: ${graduateInfo.name}`, delay: 0.8 },
  { text: `> status: GRADUATED ✓`, delay: 1.2 },
  { text: '> invitation.render() ready!', delay: 1.6 },
];

export default function OpeningScreen({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), (line.delay + 0.3) * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onOpen, 800);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          className="opening-overlay grid-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute left-0 right-0 h-px bg-cyan opacity-10"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="relative max-w-lg w-full mx-auto px-6">
            {/* Terminal window */}
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot bg-red"></div>
                <div className="terminal-dot bg-orange"></div>
                <div className="terminal-dot bg-green"></div>
                <span className="ml-3 font-mono text-text-muted text-xs">invitation.sh — bash</span>
              </div>
              <div className="terminal-body">
                {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-1"
                  >
                    <span className={
                      line.text.includes('GRADUATED') ? 'text-green font-bold' :
                      line.text.includes('user:') ? 'text-cyan' :
                      line.text.includes('ready') ? 'glow-cyan' :
                      'text-text-secondary'
                    }>
                      {line.text}
                    </span>
                  </motion.div>
                ))}
                {visibleLines < BOOT_LINES.length && (
                  <span className="cursor-blink text-text-muted text-sm"> </span>
                )}
              </div>
            </div>

            {/* Open button */}
            <motion.div
              className="text-center mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visibleLines >= BOOT_LINES.length ? 1 : 0, y: visibleLines >= BOOT_LINES.length ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="font-heading text-text-secondary text-sm">
                Lo diundang ke wisuda <span className="text-cyan font-semibold">{graduateInfo.name}</span>!
              </p>
              <button
                id="btn-open-invitation"
                className="btn-tech"
                onClick={handleOpen}
              >
                {'>'} ./open-invitation.sh
              </button>
              <p className="font-mono text-text-muted text-xs mt-3">
                // klik buat buka, jangan di-inspect dulu wkwk
              </p>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="opening-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </AnimatePresence>
  );
}
