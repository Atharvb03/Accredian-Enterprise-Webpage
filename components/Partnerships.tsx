import Image from "next/image";

export default function Partnerships() {
  const partners = [
    {
      name: "Reliance",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    },
    {
      name: "HCL",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
    },
    {
      name: "IBM",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
    },
    {
      name: "CRIF",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
    },
    {
      name: "ADP",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    },
    {
      name: "Bayer",
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
    },
  ];

  return (
    <section id="clients" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent">Trusted By Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight max-w-3xl">
            Our Proven Partnerships
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Successful Collaborations With the Industry&apos;s Best
          </p>
        </div>

        {/* Partners Grid - Clean Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative aspect-square border border-gray-200 flex items-center justify-center p-6 hover:border-accent transition-all bg-surface hover:bg-white"
            >
              {/* Number indicator */}
              <div className="absolute top-2 left-2 text-xs font-bold text-gray-300 group-hover:text-accent transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="relative w-full h-20">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
