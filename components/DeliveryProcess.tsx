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
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Deliver Results That Matter?
          </h2>
          <p className="text-xl text-gray-600">
            A Structured Three-Step Approach to Skill Development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                {step.step}
              </div>
              <div className="text-5xl mb-4 mt-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
