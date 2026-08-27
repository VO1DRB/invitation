import React from 'react';
import { motion } from 'framer-motion';
import { graduateInfo, stats } from '../../data/content';
import GoldDivider from '../ui/GoldDivider';

const STAT_ITEMS = [
  { label: 'Lines of Code', value: stats.linesOfCode, icon: '💻' },
  { label: 'Cups of Coffee', value: stats.cupsOfCoffee, icon: '☕' },
  { label: 'Bugs Fixed', value: stats.bugsFixed, icon: '🐛' },
  { label: 'All-nighters', value: stats.allNighters, icon: '🌙' },
  { label: 'Git Commits', value: stats.commits, icon: '📝' },
  { label: 'GPA', value: stats.gpa, icon: '⭐' },
];

export default function GraduationAnnouncement() {
  return (
    <section id="section-announcement" className="section-base relative" style={{ background: '#0D1117' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,65,0.03) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-2xl mx-auto w-full text-center px-4">
        <motion.p
          className="font-mono text-text-muted text-xs mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-purple">$</span> node announce.js
        </motion.p>

        {/* Terminal announcement */}
        <motion.div
          className="terminal-window text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-red"></div>
            <div className="terminal-dot bg-orange"></div>
            <div className="terminal-dot bg-green"></div>
            <span className="ml-3 font-mono text-text-muted text-xs">announce.js — node</span>
          </div>
          <div className="terminal-body text-sm space-y-1">
            <p><span className="code-keyword">const</span> <span className="code-var">status</span> = <span className="code-string">"GRADUATED"</span>;</p>
            <p><span className="code-keyword">const</span> <span className="code-var">predikat</span> = <span className="code-string">"CUMLAUDE"</span>;</p>
            <p className="mt-2"><span className="code-function">console</span>.<span className="code-function">log</span>(<span className="code-string">`</span></p>
            <p className="pl-4 text-green text-sm sm:text-base font-bold">🎉 {graduateInfo.name} HAS GRADUATED!</p>
            <p className="pl-4 text-text-secondary">{graduateInfo.degree} — {graduateInfo.prodi}</p>
            <p className="pl-4 text-text-secondary">{graduateInfo.university}</p>
            <p className="pl-4 text-cyan">Predikat: Cumlaude | GPA: {graduateInfo.gpa}</p>
            <p><span className="code-string">`</span>);</p>
            <p className="mt-2 code-comment">// finally, no more revisions! 🚀</p>
          </div>
        </motion.div>

        <motion.h2
          className="font-heading font-bold glow-green mb-2"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          LULUS BRO! 🎓🔥
        </motion.h2>

        <motion.p
          className="font-body text-text-secondary text-base mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          3 tahun debug kehidupan, akhirnya return success;
        </motion.p>

        <GoldDivider delay={0.5} />

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {STAT_ITEMS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="tech-card p-4 text-center"
              whileHover={{ scale: 1.04, borderColor: '#00D4FF' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <p className="font-mono text-cyan text-lg font-bold">{stat.value}</p>
              <p className="font-mono text-text-muted text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <GoldDivider delay={0.7} />

        {/* Motto */}
        <motion.p
          className="font-mono text-text-secondary text-sm mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <span className="code-comment">{graduateInfo.motto}</span>
        </motion.p>
      </div>
    </section>
  );
}
