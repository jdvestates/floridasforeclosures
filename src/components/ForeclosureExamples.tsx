import ForeclosureExample from "./ForeclosureExample";

const exampleProperties = [
  {
    propertyAddress: "123 Palm Avenue, Miami, FL 33101",
    marketValue: "$325,000",
    judgmentValue: "$185,000",
    notes: "3 bed, 2 bath, single family home"
  },
  {
    propertyAddress: "456 Ocean Drive, Tampa, FL 33602",
    marketValue: "$450,000",
    judgmentValue: "$275,000",
    notes: "4 bed, 3 bath, waterfront property"
  },
  {
    propertyAddress: "789 Sunset Boulevard, Orlando, FL 32801",
    marketValue: "$280,000",
    judgmentValue: "$165,000",
    notes: "3 bed, 2 bath, recently renovated"
  }
];

const ForeclosureExamples = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Expired Foreclosure Examples
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exampleProperties.map((property, index) => (
            <ForeclosureExample key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForeclosureExamples;
