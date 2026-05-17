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
  Quote,
} from 'lucide-react';
import './App.css';
import GlassCard from './components/GlassCard';
import SectionHeading from './components/SectionHeading';
import SmoothScroll from './components/SmoothScroll';
import StaggeredGrid from './components/StaggeredGrid';
import TestimonialsCard from './components/TestimonialsCard';

const galleryItems = [
  {
    id: 1,
    title: 'Visionary Development',
    description: 'Working on complex systems requires focus. This captures the essence of deep work and problem-solving.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Global Connectivity',
    description: 'Bridging the gap between design and functionality. A moment of clarity in architecture design.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Premium Interfaces',
    description: 'My design philosophy is simple: clean, efficient, and user-first. Every pixel serves a purpose.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop',
  },
];

const bentoItems = [
  {
    id: 1,
    title: 'Repository',
    subtitle: 'Version Control',
    description: 'Secure, scalable code management.',
    icon: <Code2 className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Infrastructure',
    subtitle: 'Cloud Ops',
    description: 'Reliable deployment and service monitoring.',
    icon: <Server className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Product',
    subtitle: 'Mobile & Web',
    description: 'Responsive experiences across every screen.',
    icon: <Smartphone className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Data',
    subtitle: 'Database Design',
    description: 'High-performance storage patterns and analytics.',
    icon: <Database className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
  },
];

const featureCards = [
  {
    id: 1,
    icon: <Cpu className="w-5 h-5" />, 
    label: 'Performance',
    value: 'Optimized for speed',
  },
  {
    id: 2,
    icon: <Monitor className="w-5 h-5" />,
    label: 'Interface',
    value: 'Polished screen-first layouts',
  },
  {
    id: 3,
    icon: <Layers className="w-5 h-5" />,
    label: 'Architecture',
    value: 'Modular, scalable builds',
  },
  {
    id: 4,
    icon: <Star className="w-5 h-5" />,
    label: 'Quality',
    value: 'Production-tested workflows',
  },
];

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

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-purple-500/30">
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.18), transparent 80%)`,
          }}
        />

        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'backdrop-blur-md bg-black/70 border-b border-white/10 py-4' : 'bg-transparent py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-blue-500 grid place-items-center text-sm font-bold shadow-[0_0_20px_rgba(124,58,237,0.25)]">
                D
              </div>
              <span className="font-bold text-xl tracking-tight">Deep<span className="text-purple-500">.dev</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              {['Home', 'Projects', 'Visuals', 'Journey', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-semibold hover:bg-purple-500 hover:text-white transition-all"
              >
                Contact <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>

        <main className="relative z-10">
          <section id="home" className="pt-32 pb-16 px-6 min-h-[90vh] flex flex-col justify-center">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs uppercase tracking-[0.35em]">
                <Zap className="w-3.5 h-3.5" /> AVAILABLE FOR NEW PROJECTS
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
                Deep <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Vagadiya</span>
              </h1>
              <p className="mx-auto text-slate-300 text-base md:text-xl max-w-3xl leading-relaxed">
                Full stack developer building premium digital experiences for startups, products, and modern brands.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-white/10 transition-transform hover:-translate-y-1"
                >
                  View Projects <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#visuals"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore Visuals <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featureCards.map((card) => (
                  <div key={card.id} className="rounded-3xl border border-white/10 bg-zinc-900/50 p-5 backdrop-blur-xl">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 text-purple-300 mb-4">
                      {card.icon}
                    </div>
                    <p className="text-xs uppercase tracking-[0.32em] text-purple-400 mb-2">{card.label}</p>
                    <p className="text-slate-200 text-sm leading-6">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="ecosystem" className="py-24">
            <StaggeredGrid bentoItems={bentoItems} centerText="HALCYON" />
          </section>

          <section id="visuals" className="py-24 px-6 bg-black/40">
            <div className="max-w-7xl mx-auto mb-16 text-center">
              <div className="flex flex-col items-center gap-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                <Camera className="w-4 h-4 text-purple-300" />
                <span>Photography, motion, and premium visual storytelling</span>
              </div>
              <SectionHeading title="Visual Journey" subtitle="02 // PHOTOGRAPHY & MOMENTS" />
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A collection of captured moments, professional milestones, and the creative vision behind my development process.
            </p>
            </div>
            <TestimonialsCard items={galleryItems} />
          </section>

          <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <SectionHeading title="Featured Work" subtitle="03 // CASE STUDY" />
            <GlassCard className="group relative overflow-hidden">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-10 space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-3xl bg-purple-500/10 px-4 py-3 text-purple-300 w-max">
                    <Terminal className="w-5 h-5" />
                    Fixit Platform
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold">Fixit Marketplace</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      Electronics repair platform connecting customers with trusted service providers using React, Node.js, and MongoDB.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-950/40 to-blue-950/40 p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.2),_transparent_40%)] pointer-events-none" />
                  <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="w-full max-w-md aspect-video rounded-[1.5rem] border border-white/10 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                      <div className="h-8 bg-[#1C1C1C] flex items-center gap-2 px-3 border-b border-white/5">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <div className="p-4">
                        <div className="h-28 rounded-3xl bg-white/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          <footer id="contact" className="py-24 px-6 border-t border-white/10 bg-[#050505]">
            <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-3xl bg-white/5 grid place-items-center text-xl font-bold text-white">
                    D
                  </div>
                  <div>
                    <p className="text-slate-300 font-semibold">Deep Vagadiya</p>
                    <p className="text-slate-500">Crafting premium digital experiences through code.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                  <a href="mailto:hello@deep.dev" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> hello@deep.dev
                  </a>
                  <a href="https://deep.dev" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                    <Globe className="w-4 h-4" /> deep.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-400">
                {[Github, Linkedin, Instagram, Twitter, Slack].map((Icon, index) => (
                  <Icon key={index} className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
                ))}
              </div>
            </div>
            <div className="mt-12 text-center text-slate-600 text-sm">
              © 2026 Deep Vagadiya. Built with React & Tailwind.
            </div>
          </footer>
        </main>
      </div>
    </SmoothScroll>
  );
}
