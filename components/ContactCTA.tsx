import LeadForm from "./LeadForm";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-dark" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Get Expert Guidance for Your Team&apos;s Success!
            </p>
            <p className="text-blue-100">
              Fill out the form and our team will get back to you within 24 hours to discuss how we can help transform your organization through strategic learning initiatives.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
