export default function DomainExpertise() {
  const domains = [
    { title: "Product & Innovation Hub", icon: "🚀" },
    { title: "Gen-AI Mastery", icon: "🤖" },
    { title: "Leadership Elevation", icon: "👔" },
    { title: "Tech & Data Insights", icon: "💻" },
    { title: "Operations Excellence", icon: "⚙️" },
    { title: "Digital Enterprise", icon: "🌐" },
    { title: "Fintech Innovation Lab", icon: "💳" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Domain Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-primary transition-all text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {domain.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {domain.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
