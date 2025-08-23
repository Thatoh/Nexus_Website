'use client';
import { useEffect } from 'react';

export default function BlurFollowText({
  text = 'Flow',
  radius = 120,
  blur = 10,
}: { text?: string; radius?: number; blur?: number }) {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e: PointerEvent) => {
      root.style.setProperty('--x', e.clientX + 'px');
      root.style.setProperty('--y', e.clientY + 'px');
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="blur-flow">
      <span className="flow-base">{text}</span>
      <span
        className="flow-blur"
        aria-hidden="true"
        style={{ ['--radius' as any]: `${radius}px`, ['--blur' as any]: `${blur}px` }}
      >
        {text}
      </span>
    </div>
  );
}

