import { Quote, User } from 'lucide-react';

const TestimonialsCard = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          </div>

          <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <Quote className="w-8 h-8 text-purple-500/50 mb-4" />
              <p className="text-slate-200 text-sm italic mb-4 leading-relaxed">"{item.description}"</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full border border-purple-500/30 overflow-hidden">
                  <div className="w-full h-full bg-purple-500/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">{item.title}</h4>
                  <p className="text-purple-400 text-[10px] uppercase tracking-widest font-mono">Contributor / Partner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-6 left-6 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[10px] font-mono text-white/60">CAPTURED // 2025</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsCard;
