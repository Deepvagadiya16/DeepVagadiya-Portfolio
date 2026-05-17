import { ArrowUpRight } from 'lucide-react';

const StaggeredGrid = ({ bentoItems, centerText }) => {
  return (
    <div className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[15vw] md:text-[20vw] font-black tracking-tighter text-white/[0.02] leading-none whitespace-nowrap uppercase">
          {centerText}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {bentoItems.map((item) => {
            const isLarge = item.id === 1;
            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2 md:row-span-1'
                }`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/10 rounded-lg text-white">{item.icon}</div>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">{item.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm max-w-xs line-clamp-2">{item.description}</p>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StaggeredGrid;
