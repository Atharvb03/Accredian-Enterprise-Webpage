import Image from "next/image";

export default function CATFramework() {
  return (
    <section id="cat" className="py-12 md:py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-accent/5"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-white/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Framework Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Border accent */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-3 border-accent/30"></div>
              
              <div className="relative bg-white p-8">
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <Image
                    src="/cat.webp"
                    alt="CAT Framework - Learning Excellence Approach"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-accent">Our Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The CAT Framework
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Our Proven Approach to Learning Excellence
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Customized</h3>
                  <p className="text-gray-300">Tailored programs aligned with organizational objectives</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Applicable</h3>
                  <p className="text-gray-300">Practical knowledge for immediate implementation</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Transformative</h3>
                  <p className="text-gray-300">Measurable impact on team performance and outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
