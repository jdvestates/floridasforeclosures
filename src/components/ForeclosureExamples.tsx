import ForeclosureExample from "./ForeclosureExample";

const exampleProperties = [
  {
    propertyAddress: "1350 NW 171st St, Miami Gardens, FL 33169",
    ownerName: "Lewis Hinch",
    mailingAddress: "1350 Nw 171St St Miami FL 33169-5215",
    finalJudgement: "$197,127.02",
    rvm: "$576,030.00",
    auctionDate: "10/1/25",
    parcelId: "34-2111-011-1220",
    listingNumber: "N/A"
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
  },
  {
    propertyAddress: "1118 Ferdinand St, Coral Gables, FL 33134",
    ownerName: "Victoria Brieant",
    mailingAddress: "1118 Ferdinand St Coral Gables FL 33134-2137",
    finalJudgement: "$815,618.05",
    rvm: "$1,749,000.00",
    auctionDate: "10/6/25",
    parcelId: "03-4107-018-8070",
    listingNumber: "F10494621"
  },
  {
    propertyAddress: "10035 SW 141st Ct, Miami, FL 33186",
    ownerName: "Ana Maria Lopez",
    mailingAddress: "10035 Sw 141St Ct Miami FL 33186-6803",
    finalJudgement: "$212,263.73",
    rvm: "$593,480.00",
    auctionDate: "10/6/25",
    parcelId: "30-5903-010-0870",
    listingNumber: "N/A"
  }
];

const ForeclosureExamples = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Sample Foreclosure List Data
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's an example of the detailed information included in our foreclosure lists. 
            Each property listing contains comprehensive data to help you make informed decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exampleProperties.map((property, index) => (
            <ForeclosureExample key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForeclosureExamples;
