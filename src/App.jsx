import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Slack, Twitter, Terminal, Zap, ArrowUpRight, Quote, User } from 'lucide-react';
import './App.css';

const galleryItems = [
  {
    id: 1,
    title: 'Visionary Development',
    description: 'Focus, clarity, and a polished result for any digital build.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Global Connectivity',
    description: 'Designing systems that feel fast, clean, and reliable.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Premium Interfaces',
    description: 'A simple, modern visual language for strong digital brands.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop',
  },
];

const bentoItems = [
  {
    id: 1,
    title: 'Repository',
    subtitle: 'Version Control',
    description: 'Secure, scalable code management.',
    icon: <Github size={18} />,
  },
  {
    id: 2,
    title: 'Connect',
    subtitle: 'Team Chat',
    description: 'Fast, real-time collaboration.',
    icon: <Slack size={18} />,
  },
  {
    id: 3,
    title: 'Reach',
    subtitle: 'Community',
    description: 'Build stronger audience experiences.',
    icon: <Twitter size={18} />,
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page">
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="brand">Deep.dev</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#visuals">Visuals</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        <section id="home" className="hero">
          <span className="tag">Available for new projects</span>
          <h1>Deep Vagadiya</h1>
          <p>Full stack development with clean interfaces and fast performance.</p>
          <a className="button" href="#projects">
            View Projects <ArrowUpRight size={18} />
          </a>
        </section>

        <section className="simple-grid">
          {bentoItems.map((item) => (
            <div key={item.id} className="card">
              <div className="card-icon">{item.icon}</div>
              <strong>{item.title}</strong>
              <small>{item.subtitle}</small>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section id="visuals" className="gallery">
          <div className="section-head">
            <span>02 // Photography</span>
            <h2>Visual Journey</h2>
          </div>
          <div className="photo-row">
            {galleryItems.map((item) => (
              <div key={item.id} className="photo-card">
                <img src={item.image} alt={item.title} />
                <div className="photo-copy">
                  <Quote size={18} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="photo-author">
                    <User size={16} /> <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="feature">
          <div>
            <span>03 // Case Study</span>
            <h2>Fixit Platform</h2>
            <p>Electronics repair marketplace built with React, Node.js, and MongoDB.</p>
          </div>
          <div className="project-card">
            <Terminal size={20} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Deep Vagadiya</strong>
          <p>Premium digital experiences through code.</p>
        </div>
        <div className="socials">
          <Github size={18} />
          <Linkedin size={18} />
          <Instagram size={18} />
        </div>
      </footer>
    </div>
  );
}
