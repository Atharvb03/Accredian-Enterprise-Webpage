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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{audience.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
