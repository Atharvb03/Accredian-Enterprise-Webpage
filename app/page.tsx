import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partnerships from "@/components/Partnerships";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import TargetAudience from "@/components/TargetAudience";
import CATFramework from "@/components/CATFramework";
import DeliveryProcess from "@/components/DeliveryProcess";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Partnerships />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <TargetAudience />
      <CATFramework />
      <DeliveryProcess />
      <FAQ />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
