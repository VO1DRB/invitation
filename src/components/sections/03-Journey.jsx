import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit } from 'lucide-react';
import { journeyMilestones } from '../../data/content';
import GoldDivider from '../ui/GoldDivider';

export default function Journey() {
  return (
    <section id="section-journey" className="section-base" style={{ background: '#0D1117' }}>
      <div className="relative z-10 max-w-3xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-text-muted text-xs tracking-wider mb-3">
            <span className="text-purple">$</span> git log --oneline --graph
          </p>
          <h2 className="font-heading glow-cyan text-section-title font-bold">
            Commit History 📂
          </h2>
          <p className="font-body text-text-secondary text-sm mt-2">4 tahun, ratusan commit, satu tujuan</p>
          <GoldDivider />
        </motion.div>

        {/* Git-style timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-default to-transparent" />

          <div className="space-y-6">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative flex gap-5 sm:gap-7"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Commit dot */}
                <div className="flex-shrink-0 relative z-10 mt-1">
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-bg-card border border-border-default flex items-center justify-center text-xl sm:text-2xl"
                    whileInView={{ scale: [0.5, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    whileHover={{ borderColor: '#00D4FF', boxShadow: '0 0 15px rgba(0,212,255,0.2)' }}
                  >
                    {milestone.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  className="tech-card p-4 sm:p-5 flex-1"
                  whileHover={{ y: -3, borderColor: '#00D4FF' }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <GitCommit size={14} className="text-cyan" />
                    <span className="font-mono text-cyan text-xs font-semibold">{milestone.year}</span>
                    <span className="text-text-muted text-xs">—</span>
                    <span className="font-mono text-green text-xs">{milestone.title}</span>
                  </div>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
