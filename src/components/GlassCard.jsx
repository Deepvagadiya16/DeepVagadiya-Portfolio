const GlassCard = ({ children, className = '' }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 ${className}`}>
    {children}
  </div>
);

export default GlassCard;
