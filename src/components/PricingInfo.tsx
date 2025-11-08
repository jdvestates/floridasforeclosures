import { Users, TrendingUp, Building, Building2, MapPin } from "lucide-react";

const PricingInfo = () => {
  const pricingTiers = [
    { icon: MapPin, range: "Under 100,000", price: "$100", color: "text-blue-500" },
    { icon: Building, range: "100,000 - 300,000", price: "$125", color: "text-blue-600" },
    { icon: Building2, range: "300,000 - 600,000", price: "$150", color: "text-primary" },
    { icon: Users, range: "600,000 - 1,000,000", price: "$175", color: "text-blue-700" },
    { icon: TrendingUp, range: "Over 1,000,000", price: "$200", color: "text-blue-800" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Transparent Pricing Structure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fair pricing based on county population and data complexity
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl shadow-xl p-8 md:p-12 border border-border/50">
          <div className="grid gap-4 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center justify-between p-6 bg-muted/30 hover:bg-muted/50 rounded-2xl transition-all duration-300 hover:shadow-md group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors ${tier.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Population</p>
                      <p className="text-lg font-semibold text-foreground">{tier.range}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Price</p>
                    <p className="text-3xl font-bold text-primary">{tier.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <p className="text-center text-muted-foreground text-lg">
              💡 <span className="font-semibold text-foreground">Fair & Transparent:</span> Pricing reflects the size and complexity of each county's foreclosure data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingInfo;
