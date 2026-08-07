import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Next-Gen Expertise For Your{" "}
              <span className="text-primary">Enterprise</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">Tailored Solutions</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">Industry Insights</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800">Expert Guidance</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="#contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Enquire Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
                alt="Corporate training illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
