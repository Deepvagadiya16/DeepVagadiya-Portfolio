import React from 'react';

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-px w-8 bg-purple-500" />
        <h3 className="font-mono text-xs uppercase tracking-widest text-purple-500">{subtitle}</h3>
      </div>
      <h2 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

