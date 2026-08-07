export default function TargetAudience() {
  const audiences = [
    {
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive innovation.",
      icon: "💻",
    },
    {
      title: "Non-Tech Professionals",
      description: "Adapt digitally, collaborate in tech environments.",
      icon: "📊",
    },
    {
      title: "Emerging Professionals",
      description: "Develop powerful skills for rapid career growth.",
      icon: "🌱",
    },
    {
      title: "Senior Professionals",
      description: "Strengthen leadership, enhance strategic decisions.",
      icon: "👨‍💼",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent">Target Audience</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Who Should Join?
          </h2>
          <p className="text-xl text-gray-600">
            Strategic Skill Enhancement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-surface border-l-3 border-accent pl-8 pr-6 py-8 h-full hover:bg-white transition-all">
                <div className="text-5xl mb-6">{audience.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {audience.title}
                </h3>
                <p className="text-gray-600">{audience.description}</p>
                
                {/* Number */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-accent flex items-center justify-center text-white font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
