import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function StaggeredGrid({ bentoItems, centerText }) {
  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden">
        <h2 className="whitespace-nowrap text-[15vw] font-black uppercase leading-none tracking-tighter text-white/[0.015] md:text-[18vw]">
          {centerText}
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
            >
              <div className="absolute inset-0 z-0 h-80">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col justify-end p-8 pt-44">
                <div className="mb-3 flex items-center gap-2">
                  <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">{item.icon}</div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-purple-400">{item.subtitle}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-purple-400/80 transition-colors group-hover:text-purple-400">
                  <span>Explore Repository</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

