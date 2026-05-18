import React, { useEffect, useState } from 'react';
import {Github, Linkedin, Mail, Code2, Cpu, Globe, Layers, Server, Monitor, Zap, CheckCircle2, Instagram, Terminal, Slack, Twitter, User, MapPin, ArrowUpRight, BookOpen, Send, Sparkles, Award,} from 'lucide-react';
import Nav from './components/Nav';
import SmoothScroll from './components/SmoothScroll';
import SectionHeading from './components/SectionHeading';
import StaggeredGrid from './components/StaggeredGrid';
import GlassCard from './components/GlassCard';
import Footer from './components/Footer';
import { CardContainer, CardBody, CardItem } from './components/InteractiveCard';

const bentoItems = [
  {
    id: 1,
    title: 'Repository Hub',
    subtitle: 'Version Control',
    description: 'Secure, highly organized codebases demonstrating structured versioning, modularity, and readable structure.',
    icon: <Github className="h-4 w-4" />,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Active Connect',
    subtitle: 'Team Ecosystem',
    description: 'Asynchronous communication, real-time message architectures, and professional integration pathways.',
    icon: <Slack className="h-4 w-4" />,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Global Reach',
    subtitle: 'Audience Engagement',
    description: 'Deploying high-performance digital experiences accessible worldwide across all networking bounds.',
    icon: <Twitter className="h-4 w-4" />,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
  },
];

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code2 className="h-5 w-5 text-purple-400" />,
    skills: ['C', 'C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'CS Fundamentals',
    icon: <Cpu className="h-5 w-5 text-blue-400" />,
    skills: ['Data Structures & Algorithms', 'DBMS', 'Computer Networks', 'OOP Concepts', 'Problem Solving'],
  },
  {
    category: 'Web Development',
    icon: <Globe className="h-5 w-5 text-emerald-400" />,
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Layers className="h-5 w-5 text-amber-400" />,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render'],
  },
];

const portraitFallback = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => setMousePos({ x: event.clientX, y: event.clientY });
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitted(true);
    window.setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleImageError = (event) => {
    event.currentTarget.src = portraitFallback;
  };

  return (
    <SmoothScroll>
      <div className="app-root">
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.12), transparent 85%)`,
          }}
        />
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.05] [mask-image:radial-gradient(ellipse_600px_600px_at_50%_50%,#000_40%,transparent_100%)]" />

        <Nav isScrolled={isScrolled} />

        <main className="main">
          <section id="home" className="section section-hero">
            <div className="kicker">
              <Zap className="h-3.5 w-3.5 animate-pulse text-yellow-400" />
              EXPLORING CORE COMPUTER SCIENCE & DEVELOPMENT
            </div>

            <h1 className="hero-title">
              DEEP{' '}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                VAGADIYA
              </span>
            </h1>

            <p className="hero-sub">
              Computer Science Student at <span className="font-medium text-white">Birla Vishvakarma Mahavidyalaya</span>.
              Combining clean coding languages, data structures, and the MERN stack to craft elegant responsive platforms.
            </p>

            <div className="cta-group">
              <a href="#projects" className="btn btn-primary flex items-center justify-center gap-2">
                Explore Case Studies <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-ghost flex items-center justify-center gap-2">
                Let&apos;s Talk <Mail className="h-4 w-4 text-purple-400" />
              </a>
            </div>

            <div className="stats-grid">
              {[
                { label: 'ACADEMIC BASE', value: 'BVM Engineering' },
                { label: 'CURRENT POSITION', value: '4th Semester CS' },
                { label: 'DOMAINS', value: 'Python, DSA & MERN' },
                { label: 'LOCATION', value: 'Gujarat, India' },
              ].map((chip) => (
                <div key={chip.label} className="chip">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-purple-400/80">{chip.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{chip.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="ecosystem" className="section">
            <div className="mx-auto mb-8 max-w-3xl px-6 text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-400">01 // PLATFORM PILLARS</span>
              <h2 className="mt-2 text-3xl font-bold">Scalable Architecture Principles</h2>
            </div>
            <StaggeredGrid bentoItems={bentoItems} centerText="HALCYON" />
          </section>

          <section id="about" className="section">
            <div className="grid items-start gap-12 md:grid-cols-12">
              <div className="space-y-6 md:col-span-5">
                <SectionHeading title="About My Code Journey" subtitle="02 // THE FOUNDATION" />
                <p className="text-base leading-relaxed text-slate-400">
                  Hi, I&apos;m Deep Vagadiya, a Computer Science student at BVM Engineering College passionate about programming,
                  software development, problem solving, and modern tech.
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  My programming journey started in the first year with structured C development and computer science fundamentals.
                  By second year, I actively explored DBMS architectures, networking nodes, and C++ OOP logic.
                </p>

                <div className="highlight">
                  <BookOpen className="mt-1 h-6 w-6 shrink-0 text-purple-400" />
                  <div>
                    <h4 className="mb-1 text-sm font-bold text-white">Birla Vishvakarma Mahavidyalaya</h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      Currently deep-diving into Python game mechanics, advanced data structures, and building robust full-stack
                      platforms with React, Node, and MongoDB.
                    </p>
                  </div>
                </div>

                <div className="meta">
                  <MapPin className="h-4 w-4 text-red-400" />
                  <span>Vallabh Vidyanagar, Gujarat, India</span>
                </div>
              </div>

              <div className="space-y-6 md:col-span-7">
                <div className="relative rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <div className="absolute right-0 top-0 p-4 font-mono text-xs text-purple-500">BVM // CSE</div>
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                    <Award className="h-5 w-5 text-purple-400" /> Academic Milestones
                  </h3>

                  <div className="timeline">
                    {[
                      {
                        label: 'FIRST YEAR',
                        dotClass: 'bg-purple-500 shadow-[0_0_10px_rgba(124,58,237,0.5)]',
                        textClass: 'text-purple-400',
                        status: 'Completed',
                        title: 'C Programming & Math Fundamentals',
                        text: 'Built basic console apps, resolved algorithmic hurdles, and established foundational paradigms.',
                      },
                      {
                        label: 'SECOND YEAR',
                        dotClass: 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]',
                        textClass: 'text-blue-400',
                        status: 'Completed',
                        title: 'DBMS, Computer Networks & C++ OOP',
                        text: 'Transitioned to structured object modeling, network topology protocols, and relational query languages.',
                      },
                      {
                        label: 'FOURTH SEMESTER',
                        dotClass: 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]',
                        textClass: 'text-emerald-400',
                        status: 'In Progress',
                        title: 'Python, DSA, and Full-Stack MERN',
                        text: 'Mastering complex data storage layouts, Python graphical modules, and real-world system designs.',
                      },
                    ].map((step) => (
                      <div key={step.label} className="timeline-item">
                        <div
                          className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-[#0A0A0A] ${step.dotClass}`}
                        />
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`font-mono text-xs ${step.textClass}`}>{step.label}</span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px]">
                            {step.status}
                          </span>
                        </div>
                        <h4 className="mt-1 font-bold text-white">{step.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="photos" className="gallery">
            <div className="mx-auto mb-12 max-w-7xl text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-400">03 // VISUAL PORTRAIT GALLERY</span>
              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Hover to Unleash 3D Perspective</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400">
                Interact directly with my photo grid. Built using full CSS 3D perspective tilt calculations that react in real time
                to your cursor movements.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-0 md:grid-cols-2 md:px-6">
              <CardContainer className="inter-var w-full">
                <CardBody className="group/card card card-inner relative h-auto w-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/[0.1]">
                  <CardItem translateZ={50} className="flex items-center gap-2 text-2xl font-bold text-white">
                    Deep Vagadiya <Sparkles className="h-5 w-5 text-purple-400" />
                  </CardItem>
                  <CardItem as="p" translateZ={60} className="mt-2 font-mono text-xs text-slate-400">
                    COMPUTER SCIENCE STUDENT @ BVM ENGINEERING COLLEGE
                  </CardItem>
                  <CardItem translateZ={100} className="mt-6 w-full">
                    <img src="/777A1840.jpg" onError={handleImageError} className="img-lg" alt="Deep Vagadiya Portrait" />
                  </CardItem>
                  <div className="mt-10 flex items-center justify-between">
                    <CardItem translateZ={30} as="span" className="font-mono text-xs text-purple-400/80">
                      CAPTURED // 2026
                    </CardItem>
                    <CardItem
                      translateZ={35}
                      as="a"
                      href="#about"
                      className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-black transition-colors hover:bg-purple-500 hover:text-white"
                    >
                      About Me
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              <CardContainer className="inter-var w-full">
                <CardBody className="group/card card card-inner relative h-auto w-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/[0.1]">
                  <CardItem translateZ={50} className="flex items-center gap-2 text-2xl font-bold text-white">
                    Creative Perspective <User className="h-5 w-5 text-blue-400" />
                  </CardItem>
                  <CardItem as="p" translateZ={60} className="mt-2 font-mono text-xs text-slate-400">
                    COMBINING RIGOROUS LOGIC WITH HIGH-END UI DESIGN
                  </CardItem>
                  <CardItem translateZ={100} className="mt-6 w-full">
                    <img src="/IMG-20260510-WA0102(1).jpg" onError={handleImageError} className="img-lg" alt="Deep Vagadiya Sunglasses" />
                  </CardItem>
                  <div className="mt-10 flex items-center justify-between">
                    <CardItem translateZ={30} as="span" className="font-mono text-xs text-blue-400">
                      OUTDOOR FOCUS // V.V. NAGAR
                    </CardItem>
                    <CardItem
                      translateZ={35}
                      as="a"
                      href="#projects"
                      className="rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-purple-500"
                    >
                      View Projects
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          <section id="skills" className="section">
            <SectionHeading title="Dynamic Core Competencies" subtitle="04 // TECHNICAL SPECIFICATIONS" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skillsData.map((block) => (
                <GlassCard key={block.category} className="relative space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2">{block.icon}</div>
                    <h3 className="text-base font-bold text-slate-100">{block.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {block.skills.map((skill) => (
                      <span key={skill} className="badge-small">
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <SectionHeading title="Realized Formats & Platforms" subtitle="05 // HANDS-ON PROJECTS" />
            <div className="space-y-12">
              <GlassCard className="group relative">
                <div className="grid gap-0 md:grid-cols-12">
                  <div className="space-y-6 p-8 md:col-span-7 md:p-12">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-purple-500/20 p-3 text-purple-400">
                        <Terminal className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] tracking-wider text-purple-400">MAIN SYSTEM INITIATIVE</span>
                        <h3 className="text-3xl font-bold tracking-tight text-white">Fixit Repair Platform</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                      A full-stack repair service platform connecting electronics customers with repair shops through a request-based
                      tracking system. Incorporates dashboard tracking, image uploads, and live progress state.
                    </p>
                    <div className="grid grid-cols-2 gap-4 font-mono text-xs text-slate-400">
                      {['MERN Stack Integration', 'Tracking Dashboard', 'Secure Node Server', 'Database Architecture'].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'].map((tag) => (
                        <span key={tag} className="badge-small">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center overflow-hidden border-t border-white/10 bg-gradient-to-br from-purple-950/30 to-[#0A0A0A] p-8 md:col-span-5 md:border-l md:border-t-0">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#13131F] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                      <div className="flex h-6 w-full items-center gap-1.5 border-b border-white/15 bg-zinc-900 px-3">
                        <div className="h-2 w-2 rounded-full bg-red-500/60" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
                        <div className="h-2 w-2 rounded-full bg-green-500/60" />
                      </div>
                      <div className="space-y-3 p-4 font-mono text-[10px] text-purple-400">
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span>$ fixit-server --status</span>
                          <span className="text-emerald-400">ONLINE</span>
                        </div>
                        <p className="text-slate-400">Connected to mongodb cluster...</p>
                        <p className="text-slate-400">Ready on port 5000</p>
                        <div className="flex h-12 w-full items-center justify-center rounded border border-purple-500/20 bg-purple-500/10 text-xs text-white">
                          CUSTOMER DASHBOARD ACTIVE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: 'NetPulse WiFi',
                    icon: <Server className="h-5 w-5" />,
                    iconClass: 'bg-blue-500/10 text-blue-400',
                    labelClass: 'text-blue-400',
                    description:
                      'A web-based network client interface developed to manage internet usage, monitoring data pathways and secure gateway links dynamically with modern React templates.',
                    tags: ['React.js', 'Node.js', 'MongoDB', 'APIs'],
                    label: 'Network Management Ecosystem',
                  },
                  {
                    title: 'Python Simulation Game',
                    icon: <Monitor className="h-5 w-5" />,
                    iconClass: 'bg-emerald-500/10 text-emerald-400',
                    labelClass: 'text-emerald-400',
                    description:
                      'Designed to consolidate structured programming functions, iterative loops, dynamic coordinates, and mathematical logic modules inside an interactive graphical screen.',
                    tags: ['Python', 'OOP', 'Logic Trees', 'Graphics'],
                    label: 'Visual Game Logic',
                  },
                ].map((project) => (
                  <GlassCard key={project.title} className="flex flex-col justify-between space-y-6 p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`rounded-lg p-2.5 ${project.iconClass}`}>{project.icon}</div>
                        <h4 className="text-xl font-bold">{project.title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="badge-small">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className={`block pt-4 font-mono text-[10px] uppercase tracking-wider ${project.labelClass}`}>
                      {project.label}
                    </span>
                  </GlassCard>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />
            <div className="relative z-10 grid items-center gap-12 md:grid-cols-12">
              <div className="md:col-span-7">
                <SectionHeading title="Initiate Contact" subtitle="06 // SECURE CHANNEL" />
                <p className="mb-8 max-w-lg text-sm text-slate-400">
                  Let&apos;s collaborate on software solutions, architecture designs, or system development opportunities. Shoot a
                  message below directly.
                </p>

                <form onSubmit={handleFormSubmit} className="max-w-xl space-y-4">
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase text-slate-400">Identification / Full Name</label>
                    <input type="text" required value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} placeholder="e.g. John Doe" className="form-input" />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase text-slate-400">Electronic Mail Address</label>
                    <input type="email" required value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} placeholder="your.email@gmail.com" className="form-input" />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase text-slate-400">Project Brief / Message</label>
                    <textarea rows={4} required value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} placeholder="Describe requirements, timelines, or just say hi..." className="form-input resize-none" />
                  </div>

                  <button type="submit" className="btn-primary group flex w-full items-center justify-center gap-2">
                    Send Verification{' '}
                    <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                  </button>

                  {isSubmitted && (
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center font-mono text-xs text-emerald-400">
                      Message registered successfully! Deep will reach back to you shortly.
                    </div>
                  )}
                </form>
              </div>

              <div className="space-y-6 md:col-span-5">
                <div className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-purple-400">DIRECT COMMUNICATIONS</h4>
                  <div className="space-y-4">
                    <a href="mailto:deepvagadiya@gmail.com" className="info-box">
                      <Mail className="h-5 w-5 text-purple-400" />
                      <div>
                        <span className="block font-mono text-[10px] text-slate-400">EMAIL INBOX</span>
                        <span className="text-xs font-semibold text-white">deepvagadiya@gmail.com</span>
                      </div>
                    </a>
                    <div className="info-box">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <div>
                        <span className="block font-mono text-[10px] text-slate-400">OFFICE / CAMPUS</span>
                        <span className="text-xs font-semibold text-white">V.V. Nagar, Gujarat, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-purple-500/10 bg-gradient-to-br from-purple-950/20 to-blue-950/20 p-6">
                  <div className="absolute right-0 top-0 p-4 opacity-5">
                    <Terminal className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="mb-2 font-bold text-white">CS Student Advocate</h4>
                  <p className="text-xs leading-relaxed text-slate-400">
                    &quot;Continuously exploring core system engineering protocols, database nodes, and front-end performance loops.
                    Let&apos;s make digital platforms more responsive.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}
