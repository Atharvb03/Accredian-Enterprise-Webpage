"use client";

import { useState } from "react";

export default function AccredianEdge() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const edges = [
    {
      title: "Tailored Solutions",
      description: "Programs customized to your organization's goals and challenges.",
      gradient: "from-orange-400 to-orange-600", // Medium orange
      border: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Expert Guidance",
      description: "Learn from industry leaders with real-world success.",
      gradient: "from-orange-600 to-orange-800", // Dark orange
      border: "border-orange-300",
      hoverBorder: "hover:border-orange-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Innovative Framework",
      description: "Proprietary methods for impactful, application-driven results.",
      gradient: "from-orange-300 to-orange-500", // Light orange
      border: "border-orange-100",
      hoverBorder: "hover:border-orange-300",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art LMS for seamless learning experiences.",
      gradient: "from-orange-500 to-orange-700", // Medium-dark orange
      border: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "Diverse Offerings",
      description: "Courses across industries, skill levels, and emerging fields.",
      gradient: "from-orange-400 to-orange-600", // Medium orange
      border: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Proven Impact",
      description: "Trusted by leading organizations for measurable ROI.",
      gradient: "from-orange-300 to-orange-500", // Light orange
      border: "border-orange-100",
      hoverBorder: "hover:border-orange-300",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Flexible Delivery",
      description: "Online and offline options tailored to your needs.",
      gradient: "from-orange-600 to-orange-800", // Dark orange
      border: "border-orange-300",
      hoverBorder: "hover:border-orange-500",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="accredian-edge" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            The <span className="text-accent">Accredian Edge</span>
          </h2>
          <p className="text-xl text-gray-600">
            Key Aspects of <span className="text-accent">Our Strategic Training</span>
          </p>
        </div>

        {/* Connected Circles Design - Matching edge.webp */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Top Row - Cards 1, 3, 5, 7 */}
            <div className="grid grid-cols-7 gap-2 mb-8">
              {[0, 2, 4, 6].map((index, i) => (
                <div key={index} className={`${i === 0 ? 'col-start-1' : i === 1 ? 'col-start-3' : i === 2 ? 'col-start-5' : 'col-start-7'} relative`}>
                  <div className={`bg-white border-2 rounded-lg p-4 text-center transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'border-accent shadow-2xl animate-pulse-slow' 
                      : 'border-gray-200 shadow-sm'
                  }`}>
                    {/* Glowing border effect */}
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 rounded-lg border-2 border-accent animate-ping opacity-75"></div>
                    )}
                    <h4 className="font-bold text-sm text-primary mb-2 relative z-10">{edges[index].title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed relative z-10">{edges[index].description}</p>
                  </div>
                  {/* Flowing Line from Card to Circle */}
                  {hoveredIndex === index && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-accent to-transparent overflow-hidden">
                      <div className="w-full h-full bg-accent animate-flow-down"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Middle Row - Circles with Connecting Line */}
            <div className="relative py-8">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-[7%] right-[7%] transform -translate-y-1/2">
                <svg className="w-full h-2" preserveAspectRatio="none" viewBox="0 0 1000 20">
                  <line x1="0" y1="10" x2="1000" y2="10" stroke="#fed7aa" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>

              {/* Circles */}
              <div className="relative z-10 flex justify-between items-center px-4">
                {edges.map((edge, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Outer Circle */}
                    <div className="relative">
                      <div className={`w-28 h-28 rounded-full bg-white border-4 ${edge.border} shadow-lg flex items-center justify-center transition-all duration-300 ${edge.hoverBorder} cursor-pointer`}>
                        {/* Inner Circle */}
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${edge.gradient} flex items-center justify-center text-white shadow-md`}>
                          {edge.icon}
                        </div>
                        {/* Pulsing ring on hover */}
                        {hoveredIndex === index && (
                          <div className="absolute inset-0 rounded-full border-4 border-accent animate-ping opacity-50"></div>
                        )}
                      </div>
                      {/* Connecting Dots */}
                      {index < edges.length - 1 && (
                        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row - Cards 2, 4, 6 */}
            <div className="grid grid-cols-7 gap-2 mt-8">
              {[1, 3, 5].map((index, i) => (
                <div key={index} className={`${i === 0 ? 'col-start-2' : i === 1 ? 'col-start-4' : 'col-start-6'} relative`}>
                  {/* Flowing Line from Circle to Card */}
                  {hoveredIndex === index && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-8 bg-gradient-to-t from-accent to-transparent overflow-hidden">
                      <div className="w-full h-full bg-accent animate-flow-up"></div>
                    </div>
                  )}
                  <div className={`bg-white border-2 rounded-lg p-4 text-center transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'border-accent shadow-2xl animate-pulse-slow' 
                      : 'border-gray-200 shadow-sm'
                  }`}>
                    {/* Glowing border effect */}
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 rounded-lg border-2 border-accent animate-ping opacity-75"></div>
                    )}
                    <h4 className="font-bold text-sm text-primary mb-2 relative z-10">{edges[index].title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed relative z-10">{edges[index].description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-8">
            {edges.map((edge, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-24 h-24 rounded-full bg-white border-4 ${edge.border} shadow-lg flex items-center justify-center mb-4`}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${edge.gradient} flex items-center justify-center text-white`}>
                    {edge.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-sm text-primary mb-2">{edge.title}</h4>
                  <p className="text-xs text-gray-600">{edge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
