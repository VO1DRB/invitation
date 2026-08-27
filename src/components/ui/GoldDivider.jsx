import React from 'react';
import { motion } from 'framer-motion';

export default function GoldDivider({ className = '', delay = 0 }) {
  return (
    <motion.div
      className={`flex items-center gap-3 w-full max-w-sm mx-auto my-6 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      <span className="font-mono text-cyan text-xs opacity-40">{'{'}</span>
      <div className="tech-divider flex-1" />
      <span className="font-mono text-green text-xs opacity-50">•</span>
      <div className="tech-divider flex-1" />
      <span className="font-mono text-cyan text-xs opacity-40">{'}'}</span>
    </motion.div>
  );
}
