const PricingInfo = () => {
  return <section className="py-12 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-foreground">
          Affordable Pricing
        </h2>
        <p className="text-center text-primary font-semibold mb-6">
          Quality Data at Unbeatable Prices
        </p>
        <div className="bg-muted/30 rounded-lg p-6 md:p-8">
          <p className="text-lg text-foreground mb-6 text-center">
            Quality foreclosure data at prices that work for you. Our lists are priced based on county population:
          </p>
          
          {/* Premium Flexible Option */}
          
          
          <p className="text-center text-muted-foreground mb-4 text-sm">— OR —</p>
          
          <p className="text-center text-foreground mb-4 font-medium">Fixed County Subscriptions</p>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="flex justify-between items-center p-3 bg-background rounded">
              <span className="text-muted-foreground">Counties under 100,000 population</span>
              <span className="text-xl font-bold text-primary">$20/mo</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded">
              <span className="text-muted-foreground">Counties between 100,000 and 300,000</span>
              <span className="text-xl font-bold text-primary">$30/mo</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded">
              <span className="text-muted-foreground">Counties between 300,000 and 600,000</span>
              <span className="text-xl font-bold text-primary">$40/mo</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded">
              <span className="text-muted-foreground">Counties between 600,000 and 1,000,000</span>
              <span className="text-xl font-bold text-primary">$45/mo</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background rounded">
              <span className="text-muted-foreground">Counties over 1,000,000</span>
              <span className="text-xl font-bold text-primary">$50/mo</span>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground mt-4 text-sm italic">
            Once you select a county, that will be the county you receive monthly.
          </p>
          
          <p className="text-center text-muted-foreground mt-4">
            Great value, fair pricing — get the data you need without breaking the bank.
          </p>
        </div>
      </div>
    </section>;
};
export default PricingInfo;