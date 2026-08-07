import Image from "next/image";

export default function CourseSegmentation() {
  const segments = [
    {
      title: "Program Specific",
      description: "Certificate, Executive, Post Graduate Certificate",
      image: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      image: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      image: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
    },
    {
      title: "Level Specific",
      description: "Senior Leadership, Mid-Career Professionals, Freshers",
      image: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored Course Segmentation
          </h2>
          <p className="text-xl text-gray-600">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {segment.title}
                </h3>
                <p className="text-gray-600">{segment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
