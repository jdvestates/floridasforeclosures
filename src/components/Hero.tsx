import { Building2 } from "lucide-react";
const Hero = () => {
  return <section className="bg-primary text-primary-foreground py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center mb-6">
          <Building2 className="h-12 w-12 mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold">Florida Foreclosures</h1>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            What We Do
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-95">
            We offer foreclosure property lists for all Florida counties. Our lists include owner names, 
            auction dates, listing numbers (if available), mailing addresses, property addresses, market 
            values, judgment values (amount owed), and phone numbers when available or by request (may 
            cost extra depending on the list). Each county list ranges from <span className="font-semibold">$20-$50</span> depending on population and data size.
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;