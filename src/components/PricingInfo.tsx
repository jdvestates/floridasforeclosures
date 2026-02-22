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
          
          <p className="text-center text-muted-foreground mt-4">
            Great value, fair pricing — get the data you need without breaking the bank.
          </p>
        </div>
      </div>
    </section>;
};
export default PricingInfo;