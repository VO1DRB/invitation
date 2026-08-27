import React from 'react';
import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function AnimatedText({ text, className = '', shimmer = false, stagger = true }) {
  if (!stagger) {
    return (
      <motion.span
        className={`${className} ${shimmer ? 'gold-shimmer-text' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <span className={`${className} inline-flex flex-wrap justify-center`} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={shimmer ? 'gold-shimmer-text' : ''}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
