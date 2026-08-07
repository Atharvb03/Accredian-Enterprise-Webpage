"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "About the Course",
      question: "What types of corporate training programs does Accredian offer?",
      answer: "Accredian offers comprehensive corporate training programs across multiple domains including Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation. Programs are customized based on organizational needs and can be tailored by program type, industry, topic, or professional level.",
    },
    {
      category: "About the Course",
      question: "What domain specializations are available?",
      answer: "We provide specialized training in seven key domains: Product & Innovation Hub, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab. Each domain is designed with industry-specific insights and practical applications.",
    },
    {
      category: "About the Delivery",
      question: "How are the training programs delivered?",
      answer: "Our programs feature flexible delivery methods including virtual instructor-led sessions, self-paced learning modules, hybrid formats, and on-site training. We adapt the delivery model to suit your organization's schedule and learning preferences.",
    },
    {
      category: "About the Delivery",
      question: "What is the typical duration of a training program?",
      answer: "Program duration varies based on the course type and organizational requirements. We offer short-term workshops (2-5 days), certificate programs (4-12 weeks), and comprehensive executive programs (3-6 months). Custom durations can be arranged.",
    },
    {
      category: "Miscellaneous",
      question: "How do you measure training effectiveness?",
      answer: "We use the CAT Framework (Assess, Train, Transform) to ensure measurable outcomes. This includes pre-training skill assessments, post-training evaluations, practical project work, and ongoing performance tracking aligned with organizational KPIs.",
    },
    {
      category: "Miscellaneous",
      question: "Can programs be customized for specific industries?",
      answer: "Absolutely. We specialize in creating industry-specific training solutions for IT, Healthcare, Retail, Finance, Education, and Manufacturing sectors. Our team works closely with your organization to understand unique challenges and tailor content accordingly.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-l-3 border-gray-200 hover:border-accent transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left bg-surface hover:bg-white transition-colors flex justify-between items-start gap-4"
                aria-expanded={openIndex === index}
              >
                <div className="flex-1">
                  <span className="inline-block text-xs font-bold tracking-wider uppercase text-accent mb-2">
                    {faq.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-primary">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-8 h-8 bg-accent flex items-center justify-center text-white">
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 py-6 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
