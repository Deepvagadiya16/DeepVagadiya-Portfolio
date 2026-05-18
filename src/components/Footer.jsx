import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/5 bg-[#050505] px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-purple-600 font-mono text-sm font-bold">D</div>
            <span className="text-xl font-bold tracking-tight">Deep Vagadiya</span>
          </div>
          <p className="max-w-sm text-xs text-slate-500">Combining structured programming languages with elegant modern frontend system designs.</p>
        </div>

        <div className="flex gap-4">
          {[{ icon: <Github className="h-5 w-5" />, href: 'https://github.com' }, { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' }, { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com' }].map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-slate-400 transition-all hover:border-purple-500 hover:bg-purple-500/10 hover:text-white">
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 font-mono text-xs text-slate-600 sm:flex-row">
        <span>© 2026 Deep Vagadiya. Undergrad CS Project Repository.</span>
        <span>Birla Vishvakarma Mahavidyalaya (BVM)</span>
      </div>
    </footer>
  );
}
