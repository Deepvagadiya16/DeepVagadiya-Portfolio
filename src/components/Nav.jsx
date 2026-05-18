import React from 'react';
import { Zap } from 'lucide-react';

export default function Nav({ isScrolled = false }) {
  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-[#0A0A0A]/80 py-4 backdrop-blur-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-blue-600 font-mono text-xl font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-transform group-hover:rotate-12">
            D
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight">Deep Vagadiya</span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-purple-400">CS @ BVM</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          {['Home', 'About', 'Photos', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="tracking-wide transition-colors hover:text-white">
              {item}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black shadow-[0_4px_12px_rgba(255,255,255,0.1)] transition-all hover:bg-purple-500 hover:text-white">
            Hire Founder
          </a>
        </div>
      </div>
    </nav>
  );
}
