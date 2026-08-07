"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      company: "ADP",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      company: "Bayer",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      company: "Reliance",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent">Client Voices</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight max-w-3xl">
            Testimonials from Our Partners
          </h2>
          <p className="text-xl text-gray-600">
            What Our Clients Are Saying
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Content */}
          <div className="bg-white border-l-3 border-accent pl-12 pr-8 py-12 md:py-16">
            {/* Logo */}
            <div className="flex justify-start mb-8">
              <div className="relative w-32 h-16">
                <Image
                  src={testimonials[activeIndex].logo}
                  alt={`${testimonials[activeIndex].company} logo`}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="relative">
              <div className="absolute -top-6 -left-4 text-6xl text-accent/20 font-serif">"</div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 relative z-10">
                {testimonials[activeIndex].text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-accent"></div>
                <cite className="text-lg font-bold text-primary not-italic">
                  {testimonials[activeIndex].company}
                </cite>
              </div>
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 transition-all ${
                    index === activeIndex ? "w-12 bg-accent" : "w-8 bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
