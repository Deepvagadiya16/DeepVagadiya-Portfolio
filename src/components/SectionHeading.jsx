const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12 space-y-2">
    <h3 className="text-purple-500 font-mono tracking-widest text-sm uppercase">{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
