import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check, MessageCircle, Github } from 'lucide-react';
import { graduateInfo, eventInfo } from '../../data/content';
import GoldDivider from '../ui/GoldDivider';
import { fireGoldConfetti } from '../ui/ConfettiEffect';

export default function FinalCelebration() {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `🎓 ${graduateInfo.name} udah LULUS bro!\n${graduateInfo.degree} ${graduateInfo.prodi} — ${graduateInfo.university}\n📅 ${eventInfo.date}\n📍 ${eventInfo.venue}\nYuk hadir! 🚀`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="section-final" className="section-base relative overflow-hidden grid-bg" style={{ background: '#0D1117' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-8 px-4">

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.span className="text-6xl inline-block" animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}>🎓</motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-mono text-text-muted text-xs mb-3">
            // akhirnya sampe sini juga, makasih udah scroll!
          </p>
          <h2 className="font-heading glow-cyan font-bold mb-2"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
            See You There, Bro! 🤙
          </h2>
          <GoldDivider />
        </motion.div>

        <motion.p
          className="font-body text-text-secondary text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Kehadiran lo di hari wisuda gue udah jadi hadiah terbesar.
          Makasih buat semua yang udah support selama 3 tahun ini. Let's celebrate! 🔥
        </motion.p>

        <GoldDivider delay={0.4} />

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-text-muted text-xs mb-2">
            <span className="text-green">~</span> signed by
          </p>
          <p className="font-mono glow-cyan text-2xl sm:text-3xl font-bold">
            {graduateInfo.signature}
          </p>
          {graduateInfo.github && (
            <p className="font-mono text-text-muted text-xs mt-2">
              <Github size={12} className="inline mr-1" /> {graduateInfo.github}
            </p>
          )}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            id="btn-celebrate"
            className="btn-tech flex items-center gap-2"
            onClick={fireGoldConfetti}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎉 deploy confetti!
          </motion.button>

          <motion.button
            id="btn-share"
            className="btn-tech flex items-center gap-2"
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {copied ? <><Check size={14} /> copied! ✓</> : <><Share2 size={14} /> copy link</>}
          </motion.button>

          <motion.a
            id="btn-whatsapp"
            href={`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tech flex items-center gap-2 no-underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={14} /> share via WA
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="pt-6 border-t border-border-default"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <p className="font-mono text-text-muted text-xs">
            © {new Date().getFullYear()} · {graduateInfo.name} · built with ☕ + {'<code />'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
