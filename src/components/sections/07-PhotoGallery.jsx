import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryPhotos, graduateInfo } from '../../data/content';
import GoldDivider from '../ui/GoldDivider';

const PLACEHOLDER_ACCENTS = ['#00D4FF', '#00FF41', '#7C3AED', '#F0883E', '#00D4FF', '#7C3AED'];

function PhotoCard({ photo, index, onClick }) {
  const accent = PLACEHOLDER_ACCENTS[index % PLACEHOLDER_ACCENTS.length];
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group rounded-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      onClick={() => onClick(index)}
      style={{ aspectRatio: index % 3 === 0 ? '4/3' : '3/4' }}
      role="button"
      aria-label={`Lihat foto: ${photo.caption}`}
      id={`gallery-photo-${photo.id}`}
    >
      <div className="absolute inset-0 border border-border-default rounded-lg group-hover:border-cyan transition-colors z-10" />

      {photo.src ? (
        <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover rounded-lg" />
      ) : (
        <div className="photo-placeholder w-full h-full rounded-lg flex flex-col items-center justify-center gap-2 p-4"
          style={{ background: `linear-gradient(135deg, #161B22, ${accent}10, #161B22)` }}>
          <span className="font-mono text-2xl font-bold" style={{ color: accent }}>{graduateInfo.initials}</span>
          <span className="font-mono text-xs text-center leading-relaxed" style={{ color: accent, opacity: 0.6 }}>
            {photo.caption}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center z-10">
        <ZoomIn size={22} className="text-cyan" />
      </div>
    </motion.div>
  );
}

function Lightbox({ photo, index, onClose }) {
  const accent = PLACEHOLDER_ACCENTS[index % PLACEHOLDER_ACCENTS.length];
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose} style={{ background: 'rgba(0,0,0,0.92)' }}
    >
      <motion.div
        className="relative max-w-2xl w-full"
        initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute -top-10 right-0 text-text-muted hover:text-cyan transition-colors z-10" onClick={onClose}>
          <X size={22} />
        </button>
        <div className="border border-border-default rounded-lg overflow-hidden">
          {photo.src ? (
            <img src={photo.src} alt={photo.caption} className="w-full object-contain max-h-[70vh]" />
          ) : (
            <div className="w-full h-72 photo-placeholder flex flex-col items-center justify-center gap-3"
              style={{ background: `linear-gradient(135deg, #161B22, ${accent}10, #161B22)` }}>
              <span className="font-mono text-4xl font-bold" style={{ color: accent }}>{graduateInfo.initials}</span>
              <p className="font-mono text-sm" style={{ color: accent, opacity: 0.7 }}>{photo.caption}</p>
            </div>
          )}
        </div>
        <p className="mt-3 text-center font-mono text-text-muted text-sm">// {photo.caption}</p>
      </motion.div>
    </motion.div>
  );
}

export default function PhotoGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="section-gallery" className="section-base" style={{ background: '#0D1117' }}>
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-text-muted text-xs mb-3">
            <span className="text-purple">$</span> ls ~/memories/
          </p>
          <h2 className="font-heading glow-cyan text-section-title font-bold">Gallery 📸</h2>
          <p className="font-body text-text-secondary text-sm mt-2">moments yang gak bisa di-git revert</p>
          <GoldDivider />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {galleryPhotos.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <Lightbox photo={galleryPhotos[selected]} index={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
