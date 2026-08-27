import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Shirt } from 'lucide-react';
import { eventInfo } from '../../data/content';
import GoldDivider from '../ui/GoldDivider';

const cards = (event) => [
  { icon: <Calendar size={20} className="text-cyan" />, label: 'date', value: event.date, id: 'event-date' },
  { icon: <Clock size={20} className="text-cyan" />, label: 'time', value: event.time, id: 'event-time' },
  { icon: <MapPin size={20} className="text-cyan" />, label: 'venue', value: event.venue, sub: event.address, id: 'event-venue' },
  { icon: <Shirt size={20} className="text-cyan" />, label: 'dresscode', value: event.dresscode, id: 'event-dresscode' },
];

export default function EventInfo() {
  return (
    <section id="section-event" className="section-base grid-bg" style={{ background: '#0D1117' }}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-text-muted text-xs mb-3">
            <span className="text-purple">$</span> cat event-info.json
          </p>
          <h2 className="font-heading glow-cyan text-section-title font-bold">
            Detail Acara 📌
          </h2>
          <p className="font-body text-text-secondary text-sm mt-2">jangan sampe salah venue, bukan deploy ke server yang salah wkwk</p>
          <GoldDivider />
        </motion.div>

        {/* JSON-style event info */}
        <div className="terminal-window max-w-2xl mx-auto mb-8">
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-red"></div>
            <div className="terminal-dot bg-orange"></div>
            <div className="terminal-dot bg-green"></div>
            <span className="ml-3 font-mono text-text-muted text-xs">event-info.json</span>
          </div>
          <div className="terminal-body text-sm">
            <p className="text-text-muted">{'{'}</p>
            {cards(eventInfo).map((card, i) => (
              <motion.p
                key={card.id}
                className="pl-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="code-string">"{card.label}"</span>
                <span className="text-text-muted">: </span>
                <span className="text-cyan">"{card.value}"</span>
                {card.sub && (
                  <><br /><span className="pl-4 text-text-muted text-xs">// {card.sub}</span></>
                )}
                <span className="text-text-muted">,</span>
              </motion.p>
            ))}
            <p className="text-text-muted">{'}'}</p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards(eventInfo).map((card, i) => (
            <motion.div
              key={card.id}
              id={card.id}
              className="tech-card p-5 flex gap-4 items-start group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-bg-elevated border border-border-default flex items-center justify-center
                group-hover:border-cyan transition-colors">
                {card.icon}
              </div>
              <div>
                <p className="font-mono text-text-muted text-xs uppercase">{card.label}</p>
                <p className="font-heading text-text-primary text-base font-semibold mt-0.5">{card.value}</p>
                {card.sub && <p className="font-body text-text-muted text-xs mt-1">{card.sub}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 text-center space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-text-secondary text-xs">📍 {eventInfo.landmark}</p>
          <p className="font-mono text-text-muted text-xs">{eventInfo.parking}</p>
        </motion.div>
      </div>
    </section>
  );
}
