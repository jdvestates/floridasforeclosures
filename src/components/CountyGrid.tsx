import CountyCard from "./CountyCard";
import { toast } from "sonner";
import { floridaCountiesData, calculatePrice } from "@/utils/countyData";

const CountyGrid = () => {
  const handleGetList = (countyName: string) => {
    toast.info(`Request for ${countyName} County list`, {
      description: "Please contact us to complete your purchase."
    });
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Available Foreclosure Lists by County
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your county to get comprehensive foreclosure data
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {floridaCountiesData.map((county) => {
            const price = calculatePrice(county.population);
            return (
              <CountyCard
                key={county.name}
                name={county.name}
                population={county.population}
                price={price}
                onGetList={() => handleGetList(county.name)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountyGrid;
