export default function DeliveryProcess() {
  const steps = [
    {
      step: 1,
      title: "Skill Gap Analysis",
      description: "Assess team skill gaps and developmental needs.",
      icon: "🔍",
    },
    {
      step: 2,
      title: "Customized Training Plan",
      description: "Create a tailored roadmap addressing organizational goals.",
      icon: "📋",
    },
    {
      step: 3,
      title: "Flexible Program Delivery",
      description: "Deliver adaptable programs aligned with industry and organizational needs.",
      icon: "🎯",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight max-w-3xl">
            How We Deliver Results That Matter?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            A Structured Three-Step Approach to Skill Development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connecting line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
              )}
              
              {/* Card */}
              <div className="relative bg-white border border-gray-200 p-8 hover:border-accent transition-all h-full">
                {/* Large step number */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.step}</span>
                </div>
                
                <div className="text-5xl mb-6 mt-6">{step.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
