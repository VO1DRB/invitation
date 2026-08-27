import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Map } from 'lucide-react';
import { eventInfo } from '../../data/content';
import GoldDivider from '../ui/GoldDivider';

export default function LocationMaps() {
  return (
    <section id="section-location" className="section-base" style={{ background: '#0D1117' }}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-text-muted text-xs mb-3">
            <span className="text-purple">$</span> curl location.api/venue
          </p>
          <h2 className="font-heading glow-cyan text-section-title font-bold">
            <MapPin size={22} className="inline mr-2 mb-1" />
            Lokasi 📍
          </h2>
          <p className="font-body text-text-secondary text-sm mt-2">
            route.navigate(RektoratUNS) — jangan sampe 404 Not Found ya bro
          </p>
          <GoldDivider />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Map embed */}
          <div className="lg:col-span-3 relative">
            <div className="border border-border-default rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <iframe
                title="Lokasi Wisuda"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(eventInfo.venue + ', ' + eventInfo.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.8) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan rounded-tl" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan rounded-tr" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan rounded-bl" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan rounded-br" />
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot bg-red"></div>
                <div className="terminal-dot bg-orange"></div>
                <div className="terminal-dot bg-green"></div>
                <span className="ml-3 font-mono text-text-muted text-xs">venue.json</span>
              </div>
              <div className="terminal-body text-xs space-y-3">
                <div>
                  <p className="text-text-muted">// gedung</p>
                  <p className="text-cyan">{eventInfo.venue}</p>
                </div>
                <div className="tech-divider" />
                <div>
                  <p className="text-text-muted">// alamat</p>
                  <p className="text-text-secondary text-xs leading-relaxed">{eventInfo.address}</p>
                </div>
                <div className="tech-divider" />
                <div>
                  <p className="text-text-muted">// patokan</p>
                  <p className="text-text-secondary">{eventInfo.landmark}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <a href={eventInfo.mapsUrl} target="_blank" rel="noopener noreferrer" id="btn-open-maps"
                className="btn-tech w-full flex items-center justify-center gap-2 no-underline text-center">
                <Map size={14} /> Google Maps
              </a>
              <a href={eventInfo.wazeUrl} target="_blank" rel="noopener noreferrer" id="btn-open-waze"
                className="btn-tech w-full flex items-center justify-center gap-2 no-underline text-center">
                <Navigation size={14} /> Waze
              </a>
            </div>

            <p className="font-mono text-text-muted text-xs text-center">{eventInfo.parking}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
