import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiEffect({ trigger = false }) {
  const fired = useRef(false);
  useEffect(() => {
    if (trigger && !fired.current) { fired.current = true; fireGoldConfetti(); }
  }, [trigger]);
  return null;
}

export function fireGoldConfetti() {
  const techColors = ['#00D4FF', '#00FF41', '#7C3AED', '#F0883E', '#FFFFFF', '#E6EDF3'];

  const fire = (particleRatio, opts) => {
    confetti({
      origin: { y: 0.7 },
      colors: techColors,
      ...opts,
      particleCount: Math.floor(200 * particleRatio),
    });
  };

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}
