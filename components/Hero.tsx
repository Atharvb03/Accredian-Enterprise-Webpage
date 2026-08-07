import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-surface -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent/5 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content - Asymmetric layout */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-accent">Enterprise Training</span>
            </div>

            {/* Main Heading - Editorial Style */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-primary whitespace-nowrap">Next-Gen </span>
              <span className="text-accent">Expertise</span>
              <br />
              <span className="text-primary whitespace-nowrap">For Your </span>
              <span className="text-accent">Enterprise</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Feature List - Minimal Style */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:bg-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Tailored Solutions</h3>
                  <p className="text-gray-600 text-sm">Custom programs designed for your industry needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:bg-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Industry Insights</h3>
                  <p className="text-gray-600 text-sm">Real-world knowledge from leading practitioners</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:bg-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Expert Guidance</h3>
                  <p className="text-gray-600 text-sm">Mentorship from seasoned industry professionals</p>
                </div>
              </div>
            </div>

            {/* CTA - Bold Design */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 bg-accent text-white px-8 py-4 font-semibold text-lg overflow-hidden transition-all hover:gap-3"
              >
                <span className="relative z-10">Enquire Now</span>
                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-accent-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
              <span className="text-sm text-gray-500">Join 10,000+ professionals</span>
            </div>
          </div>

          {/* Right Image - Offset Design */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-accent/20 -z-10"></div>
              
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-white shadow-2xl">
                <Image
                  src="/hero-photo.webp"
                  alt="Corporate training illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
