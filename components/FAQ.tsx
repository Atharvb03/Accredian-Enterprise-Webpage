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
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                aria-expanded={openIndex === index}
              >
                <div>
                  <span className="text-sm text-primary font-semibold">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1">
                    {faq.question}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4 ${
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
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
