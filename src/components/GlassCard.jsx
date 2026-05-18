import React from 'react';

export default function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/30 ${className}`}
    >
      {children}
    </div>
  );
}

