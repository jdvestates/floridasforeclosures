import Hero from "@/components/Hero";
import CountyGrid from "@/components/CountyGrid";
import ForeclosureExamplesPreview from "@/components/ForeclosureExamplesPreview";
import ContactSection from "@/components/ContactSection";
import PricingInfo from "@/components/PricingInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PricingInfo />
      <CountyGrid />
      <ForeclosureExamplesPreview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
