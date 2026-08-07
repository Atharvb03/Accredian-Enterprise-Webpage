import Image from "next/image";

export default function CATFramework() {
  return (
    <section id="cat" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The CAT Framework
          </h2>
          <p className="text-xl text-gray-600">
            Our Proven Approach to Learning Excellence
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-[400px] md:h-[500px]">
            <Image
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
              alt="CAT Framework - Learning Excellence Approach"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
