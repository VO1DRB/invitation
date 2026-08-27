import React from 'react';
import { motion } from 'framer-motion';
import { eventInfo } from '../../data/content';
import CountdownTimer from '../ui/CountdownTimer';
import GoldDivider from '../ui/GoldDivider';

export default function Countdown() {
  return (
    <section id="section-countdown" className="section-base relative overflow-hidden" style={{ background: '#0D1117' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)' }} />

      {/* Matrix-like falling characters */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-cyan text-xs select-none pointer-events-none"
          style={{ left: `${5 + (i * 8) % 90}%`, top: `${(i * 11) % 80}%`, opacity: 0.06 }}
          animate={{ y: [0, 40, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        >
          {['01', '10', '{ }', '()', '=>', '++', '!=', '&&', '||', '>>',  '<<', '##'][i]}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-text-muted text-xs mb-3">
            <span className="text-green">⏱</span> countdown.start()
          </p>
          <h2 className="font-heading glow-cyan text-section-title font-bold">
            Hitung Mundur 🚀
          </h2>
          <p className="font-body text-text-secondary text-sm mt-2">
            {eventInfo.date} · {eventInfo.time}
          </p>
          <GoldDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CountdownTimer targetDate={eventInfo.countdownTarget} />
        </motion.div>

        <motion.div
          className="mt-10 space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-text-muted text-xs">📍 {eventInfo.venue}</p>
          <p className="font-mono text-text-muted text-xs italic">// jangan telat, ini bukan setTimeout() wkwk</p>
        </motion.div>
      </div>
    </section>
  );
}
