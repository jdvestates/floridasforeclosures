import Hero from "@/components/Hero";
import CountyGrid from "@/components/CountyGrid";
import ForeclosureExamples from "@/components/ForeclosureExamples";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CountyGrid />
      <ForeclosureExamples />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
