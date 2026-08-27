import React from 'react';
import { motion } from 'framer-motion';
import { graduateInfo, techStack, stats } from '../../data/content';
import GoldDivider from '../ui/GoldDivider';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function HeroIntro() {
  return (
    <section id="section-hero" className="section-base relative overflow-hidden grid-bg">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 30%, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-6">

        {/* Avatar / Photo */}
        <motion.div className="relative" {...fadeUp(0.1)}>
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto rounded-lg overflow-hidden">
            <div className="absolute inset-0 border border-border-default rounded-lg" />
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-cyan rounded-tl" />
            <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-cyan rounded-tr" />
            <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-cyan rounded-bl" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-cyan rounded-br" />

            {/* Status indicator */}
            <div className="absolute top-2 right-2 z-10 flex items-center gap-1.5 bg-bg-card/80 backdrop-blur px-2 py-0.5 rounded text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-green">online</span>
            </div>

            {graduateInfo.photo ? (
              <img src={graduateInfo.photo} alt={graduateInfo.name} className="w-full h-full object-cover" />
            ) : (
              <div className="photo-placeholder w-full h-full rounded-lg">
                <span className="font-mono text-4xl text-cyan font-bold">{graduateInfo.initials}</span>
                <span className="mt-2 text-xs text-text-muted font-mono">📸 foto_toga.jpg</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Name */}
        <motion.div className="space-y-2" {...fadeUp(0.3)}>
          <p className="font-mono text-text-muted text-xs tracking-wider">
            <span className="text-cyan">const</span> <span className="text-orange">graduate</span> = {'{'}
          </p>
          <h1 className="font-heading glow-cyan font-bold leading-tight text-hero-name">
            {graduateInfo.name}
          </h1>
          <p className="font-mono text-text-muted text-xs tracking-wider">
            {'}'}<span className="text-text-muted">;</span>
          </p>
        </motion.div>

        <GoldDivider delay={0.4} />

        {/* Info line */}
        <motion.div className="space-y-1" {...fadeUp(0.5)}>
          <p className="font-heading text-cyan text-sm font-semibold tracking-wide">
            {graduateInfo.degree} — {graduateInfo.prodi}
          </p>
          <p className="font-body text-text-secondary text-sm">
            {graduateInfo.university} · Angkatan {graduateInfo.graduationYear}
          </p>
          <p className="font-mono text-green text-xs mt-1">
            GPA: {graduateInfo.gpa} ⭐ // Cumlaude!
          </p>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div className="flex flex-wrap gap-2 justify-center mt-2" {...fadeUp(0.6)}>
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-bg-card border border-border-default rounded-md text-text-secondary
                hover:border-cyan hover:text-cyan transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.06 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Motto */}
        <motion.div className="terminal-window max-w-xl w-full mt-4" {...fadeUp(0.8)}>
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-red"></div>
            <div className="terminal-dot bg-orange"></div>
            <div className="terminal-dot bg-green"></div>
            <span className="ml-3 font-mono text-text-muted text-xs">motto.js</span>
          </div>
          <div className="terminal-body">
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              <span className="code-comment">// life philosophy</span><br />
              <span className="text-cyan">{graduateInfo.motto.replace(/"/g, '')}</span>
            </p>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="font-mono text-text-muted text-xs">scroll.addEventListener('down')</p>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-cyan/40 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
