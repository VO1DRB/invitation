import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, Terminal } from 'lucide-react';
import GoldDivider from '../ui/GoldDivider';

const STORAGE_KEY = 'wisuda-guest-messages';

const INITIAL_MESSAGES = [
  {
    id: 1,
    name: 'Bapak & Ibu 👨‍👩‍👦',
    message: 'Bangga banget sama kamu nak! Dari kecil udah suka utak-atik komputer, sekarang resmi jadi sarjana! Semoga ilmunya berkah. Love you! ❤️',
    time: new Date().toLocaleDateString('id-ID'),
  },
  {
    id: 2,
    name: 'Squad Lab Komputer 🖥️',
    message: 'Dari bareng-bareng ngerjain tugas sampe jam 3 pagi, akhirnya kita lulus juga bro! Next: jadi tech lead ya! 🚀',
    time: new Date().toLocaleDateString('id-ID'),
  },
  {
    id: 3,
    name: 'Pak Dosen Pembimbing',
    message: 'Selamat Rizky! Risetmu sangat bagus. Semoga bisa kontribusi nyata di dunia tech Indonesia 👏',
    time: new Date().toLocaleDateString('id-ID'),
  },
];

const PLACEHOLDER_IDEAS = [
  'Congrats bro! Kapan nih bikin startup bareng? 🚀',
  'Akhirnya lulus juga setelah puluhan all-nighter! ☕',
  'Selamat wisuda! Jangan lupa push ke production ya wkwk',
  'GG bro cumlaude! while(true) { succeed(); } 💻',
];

export default function GuestCongrats() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [form, setForm] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [placeholder] = useState(() => PLACEHOLDER_IDEAS[Math.floor(Math.random() * PLACEHOLDER_IDEAS.length)]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setMessages([...INITIAL_MESSAGES, ...JSON.parse(saved)]); } catch {}
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    const newMsg = { id: Date.now(), name: form.name.trim(), message: form.message.trim(), time: new Date().toLocaleDateString('id-ID') };
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    stored.push(newMsg);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    setMessages((prev) => [...prev, newMsg]);
    setForm({ name: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="section-congrats" className="section-base" style={{ background: '#0D1117' }}>
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-text-muted text-xs mb-3">
            <span className="text-purple">$</span> ./send-ucapan.sh
          </p>
          <h2 className="font-heading glow-cyan text-section-title font-bold">
            <Terminal size={24} className="inline mr-2 mb-1" />
            Dinding Ucapan 💬
          </h2>
          <p className="font-body text-text-secondary text-sm mt-2">
            tulis ucapan, doa, atau jokes receh juga boleh wkwk
          </p>
          <GoldDivider />
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="terminal-window mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="terminal-titlebar">
            <div className="terminal-dot bg-red"></div>
            <div className="terminal-dot bg-orange"></div>
            <div className="terminal-dot bg-green"></div>
            <span className="ml-3 font-mono text-text-muted text-xs">compose-message.sh</span>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <label htmlFor="guest-name" className="font-mono text-text-muted text-xs block mb-1.5">
                <span className="text-cyan">$NAME</span> = ?
              </label>
              <input
                id="guest-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="nama lo siapa bro?"
                maxLength={50}
                className="w-full bg-bg-primary border border-border-default rounded-md text-text-primary font-mono text-sm p-3
                  focus:outline-none focus:border-cyan placeholder-text-muted transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="guest-message" className="font-mono text-text-muted text-xs block mb-1.5">
                <span className="text-cyan">$MESSAGE</span> = ?
              </label>
              <textarea
                id="guest-message"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder={placeholder}
                maxLength={300}
                rows={3}
                className="w-full bg-bg-primary border border-border-default rounded-md text-text-primary font-mono text-sm p-3
                  focus:outline-none focus:border-cyan placeholder-text-muted transition-colors resize-none"
                required
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <AnimatePresence>
                {submitted && (
                  <motion.p className="font-mono text-green text-sm flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
                    <Heart size={14} /> // message sent! makasih bro ✓
                  </motion.p>
                )}
              </AnimatePresence>
              <button type="submit" id="btn-submit-message" className="btn-tech ml-auto flex items-center gap-2">
                <Send size={14} /> push --message
              </button>
            </div>
          </div>
        </motion.form>

        {/* Messages */}
        <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
          <AnimatePresence mode="popLayout">
            {[...messages].reverse().map((msg) => (
              <motion.div
                key={msg.id}
                className="tech-card p-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-bg-elevated border border-border-default flex items-center justify-center">
                      <span className="text-cyan text-xs font-mono font-bold">{msg.name[0]?.toUpperCase()}</span>
                    </div>
                    <span className="font-heading text-text-primary text-sm font-semibold">{msg.name}</span>
                  </div>
                  <span className="font-mono text-text-muted text-xs">{msg.time}</span>
                </div>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {msg.message}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
