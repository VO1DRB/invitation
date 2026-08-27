import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let animId;
    let ringX = -200, ringY = -200;
    let mouseX = -200, mouseY = -200;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
      const dot = dotRef.current;
      if (dot) { dot.style.left = `${mouseX}px`; dot.style.top = `${mouseY}px`; }
    };

    const onMouseOver = (e) => {
      const el = e.target;
      const clickable = el.tagName === 'A' || el.tagName === 'BUTTON'
        || el.closest('a') || el.closest('button')
        || getComputedStyle(el).cursor === 'pointer';
      setIsPointer(!!clickable);
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      const ring = ringRef.current;
      if (ring) { ring.style.left = `${ringX}px`; ring.style.top = `${ringY}px`; }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: isPointer ? '12px' : '6px',
          height: isPointer ? '12px' : '6px',
          background: '#00D4FF',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
          opacity: visible ? 1 : 0,
          boxShadow: '0 0 8px rgba(0,212,255,0.8)',
          left: '-200px', top: '-200px',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: isPointer ? '40px' : '28px',
          height: isPointer ? '40px' : '28px',
          border: '1px solid rgba(0, 212, 255, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s',
          opacity: visible ? 1 : 0,
          left: '-200px', top: '-200px',
        }}
      />
    </>
  );
}
