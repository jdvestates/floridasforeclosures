import ForeclosureExample from "./ForeclosureExample";

const previewProperties = [
  {
    propertyAddress: "1350 NW 171st St, Miami Gardens, FL 33169",
    ownerName: "Lewis Hinch, (786-000-0000)",
    mailingAddress: "1350 Nw 171St St Miami FL 33169-5215",
    finalJudgement: "$197,127.02",
    rvm: "$576,030.00",
    auctionDate: "10/1/25",
    parcelId: "34-2111-011-1220",
    listingNumber: "N/A",
    phoneNumber: "(305) 555-1234"
  },
  {
    propertyAddress: "355 NE 31st Ave, Homestead, FL 33033",
    ownerName: "Cecil A. De la Haye and Adina Dolores Stephens",
    mailingAddress: "355 Ne 31St Ave Homestead FL 33033-7266",
    finalJudgement: "$201,552.34",
    rvm: "$501,190.00",
    auctionDate: "10/6/25",
    parcelId: "10-7916-006-0660",
    listingNumber: "N/A"
  }
];

const ForeclosureExamplesPreview = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Sample Foreclosure List Data
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Here's an example of the detailed information included in our foreclosure lists. 
          Each property listing contains comprehensive data to help you make informed decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewProperties.map((property, index) => (
            <ForeclosureExample key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForeclosureExamplesPreview;
