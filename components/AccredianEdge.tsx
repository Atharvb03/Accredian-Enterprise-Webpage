import Image from "next/image";

export default function AccredianEdge() {
  return (
    <section className="py-16 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Accredian Edge
          </h2>
          <p className="text-xl text-gray-600">
            Key Aspects of Our Strategic Training
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl h-[400px] md:h-[500px]">
            <Image
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
              alt="Accredian Edge - Strategic Training Framework"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
