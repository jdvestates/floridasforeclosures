import { Building2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 md:py-32 px-4 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <Building2 className="h-14 w-14 md:h-16 md:w-16 mr-4" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Florida Foreclosures
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold opacity-95 animate-fade-in">
            Comprehensive Foreclosure Data for Every Florida County
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto animate-fade-in">
            We offer foreclosure property lists for all Florida counties. Our lists include <span className="font-semibold">owner names</span>, 
            <span className="font-semibold"> auction dates</span>, <span className="font-semibold">listing numbers</span> (if available), mailing addresses, property addresses, market 
            values, judgment values (amount owed), and phone numbers when available or by request (may 
            cost extra depending on the list).
          </p>
          
          <div className="pt-4 animate-fade-in">
            <p className="text-xl md:text-2xl font-semibold mb-6">
              County lists range from <span className="text-3xl font-bold">$100–$200</span>
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 animate-bounce">
          <ChevronDown className="h-8 w-8 opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
