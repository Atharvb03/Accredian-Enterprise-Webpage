export default function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      value: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      value: "5K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="py-12 md:py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Asymmetric */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent">Our Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-300">
            The Numbers Behind Our Success
          </p>
        </div>

        {/* Stats Grid - Horizontal Layout */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent flex items-center justify-center text-white font-bold text-lg z-10">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <div className="relative bg-white/5 border-l-3 border-accent p-8 pl-12 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
