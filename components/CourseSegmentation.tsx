import Image from "next/image";

export default function CourseSegmentation() {
  const segments = [
    {
      title: "Program Specific",
      description: "Certificate, Executive, Post Graduate Certificate",
      image: "/program-specific.webp",
    },
    {
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "/industry-specific.webp",
    },
    {
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "/topic-specific.webp",
    },
    {
      title: "Level Specific",
      description: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "/level-specific.webp",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent">Course Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight max-w-3xl">
            Tailored Course Segmentation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 overflow-hidden hover:border-accent transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                
                {/* Number badge */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-accent flex items-center justify-center text-white font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {segment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{segment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
