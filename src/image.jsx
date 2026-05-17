import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Mail, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Smartphone, 
  Database, 
  Server, 
  Monitor, 
  Zap, 
  Star,
  CheckCircle2,
  Instagram,
  Terminal,
  Slack,
  Twitter,
  ArrowUpRight,
  Camera,
  User,
  Quote
} from 'lucide-react';

/**
 * TestimonialsCard Component
 * Modified to showcase photos with a premium interactive hover effect.
 */
const TestimonialsCard = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="group relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
        >
          {/* Image Container */}
          <div className="absolute inset-0 z-0">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <Quote className="w-8 h-8 text-purple-500/50 mb-4" />
              <p className="text-slate-200 text-sm italic mb-4 leading-relaxed">
                "{item.description}"
              </p>
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
          
          {/* Decorative Corner Tag */}
          <div className="absolute top-6 left-6 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[10px] font-mono text-white/60">CAPTURED // 2025</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const StaggeredGrid = ({ images, bentoItems, centerText }) => {
  return (
    <div className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[15vw] md:text-[20vw] font-black tracking-tighter text-white/[0.02] leading-none whitespace-nowrap uppercase">
          {centerText}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {bentoItems.map((item, idx) => {
            const isLarge = item.id === 1;
            return (
              <div 
                key={item.id} 
                className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2 md:row-span-1'}`}
              >
                <div className="absolute inset-0 z-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
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

const SmoothScroll = ({ children }) => (
  <div className="smooth-scroll-wrapper overflow-x-hidden">{children}</div>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 space-y-2">
    <h3 className="text-purple-500 font-mono tracking-widest text-sm uppercase">{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
      {title}
    </h2>
  </div>
);

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Visionary Development",
      description: "Working on complex systems requires focus. This captures the essence of deep work and problem-solving.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Global Connectivity",
      description: "Bridging the gap between design and functionality. A moment of clarity in architecture design.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Premium Interfaces",
      description: "My design philosophy is simple: clean, efficient, and user-first. Every pixel serves a purpose.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const bentoItems = [
    {
      id: 1,
      title: "Repository",
      subtitle: "Version Control",
      description: "Secure, scalable code management.",
      icon: <Github className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Connect",
      subtitle: "Team Communication",
      description: "Real-time messaging and collaboration.",
      icon: <Slack className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Reach",
      subtitle: "Audience Engagement",
      description: "Connect with your community globally.",
      icon: <Twitter className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-purple-500/30">
        {/* Interactive Mouse Gradient */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.15), transparent 80%)`
          }}
        />

        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-black/60 border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(124,58,237,0.3)]">D</div>
              <span className="font-bold text-xl tracking-tight">Deep<span className="text-purple-500">.dev</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              {['Home', 'Projects', 'Visuals', 'Journey', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors cursor-pointer">{item}</a>
              ))}
              <button className="px-5 py-2 bg-white text-black rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all">Resume</button>
            </div>
          </div>
        </nav>

        <main className="relative z-10">
          {/* Hero Section */}
          <section id="home" className="pt-32 pb-12 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-mono mb-8 animate-pulse">
              <Zap className="w-3 h-3" /> AVAILABLE FOR NEW PROJECTS
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
              DEEP <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">VAGADIYA</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Full Stack Developer focused on building <span className="text-white">scalable systems</span> and 
              <span className="text-white"> premium digital experiences</span>.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-white/10">
                View Projects <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Staggered Grid Ecosystem */}
          <section id="ecosystem" className="py-24">
            <StaggeredGrid images={[]} bentoItems={bentoItems} centerText="HALCYON" />
          </section>

          {}
          {/* Visual Gallery (TestimonialsCard Adaptation) */}
          <section id="visuals" className="py-24 px-6 bg-black/40">
            <div className="max-w-7xl mx-auto mb-16 text-center">
              <SectionHeading title="Visual Journey" subtitle="02 // PHOTOGRAPHY & MOMENTS" />
              <p className="text-slate-400 max-w-2xl mx-auto">
                A collection of captured moments, professional milestones, and the creative vision behind my development process.
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <TestimonialsCard items={galleryItems} />
            </div>
          </section>

          {/* Featured Project Section */}
          <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <SectionHeading title="Featured Work" subtitle="03 // CASE STUDY" />
            <GlassCard className="group relative">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-500"><Terminal className="w-6 h-6" /></div>
                    <h3 className="text-3xl font-bold">Fixit Platform</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-lg">A comprehensive electronics repair ecosystem connecting verified centers with customers.</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB', 'Cloudinary'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="w-full aspect-video bg-[#1A1A1A] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                    <div className="h-6 bg-[#2A2A2A] w-full flex items-center px-3 gap-1.5 border-b border-white/5">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="p-4"><div className="w-full h-32 bg-white/5 rounded"></div></div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Footer */}
          <footer className="py-24 px-6 border-t border-white/5 bg-[#050505]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-bold">D</div>
                  <span className="font-bold text-2xl tracking-tighter">Deep Vagadiya</span>
                </div>
                <p className="text-slate-500 max-w-sm">Crafting premium digital experiences through code and creative problem-solving.</p>
              </div>
              <div className="flex gap-8">
                <Github className="w-6 h-6 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
              © 2026 Deep Vagadiya. All rights reserved. Built with React & Tailwind.
            </div>
          </footer>
        </main>

        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
          :root { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
          body { background-color: #0A0A0A; overflow-x: hidden; }
          .smooth-scroll-wrapper { scroll-behavior: smooth; }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #0A0A0A; }
          ::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: #7C3AED; }
          .font-mono { font-family: 'JetBrains Mono', monospace; }
        `}} />
      </div>
    </SmoothScroll>
  );
}