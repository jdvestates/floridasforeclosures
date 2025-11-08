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
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Available Foreclosure Lists by County
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
