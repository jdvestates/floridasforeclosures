import CountyCard from "./CountyCard";
import { toast } from "sonner";
import { floridaCountiesData, calculatePrice } from "@/utils/countyData";

const countyCheckoutUrls: Record<string, string> = {
  "Alachua": "https://buy.stripe.com/cNieVf8c769X2fG7sq43S00",
  "Baker": "https://buy.stripe.com/fZu8wRgID7e16vWh3043S02",
  "Bay": "https://buy.stripe.com/4gMeVf63Z7e1cUk5ki43S03",
  "Bradford": "https://buy.stripe.com/7sY28tdwr69X5rS14243S04",
  "Brevard": "https://buy.stripe.com/8x2eVf1NJdCpg6wfYW43S05",
  "Broward": "https://buy.stripe.com/8x2eVfcsn41P5rS9Ay43S06",
  "Calhoun": "https://buy.stripe.com/28E4gB8c7cyl9I814243S07",
  "Charlotte": "https://buy.stripe.com/aFadRb1NJ69X7A05ki43S08",
  "Citrus": "https://buy.stripe.com/00w9AV0JFbuhcUk7sq43S09",
  "Clay": "https://buy.stripe.com/14AaEZ4ZV55TbQg9Ay43S0a",
  "Collier": "https://buy.stripe.com/28EaEZakfcyl1bCbIG43S0b",
  "Columbia": "https://buy.stripe.com/6oUbJ34ZVgOB5rS5ki43S0c",
  "DeSoto": "https://buy.stripe.com/8x2cN77832XLdYobIG43S0d",
  "Dixie": "https://buy.stripe.com/dRm28tdwr41P7A0bIG43S0e",
  "Duval": "https://buy.stripe.com/00waEZ0JF41PbQgbIG43S0f",
  "Escambia": "https://buy.stripe.com/cNi9AVakf0PDaMcaEC43S0g",
  "Flagler": "https://buy.stripe.com/6oU00lcsn1THdYobIG43S0h",
  "Franklin": "https://buy.stripe.com/9B6cN7eAv2XLf2s4ge43S0i",
  "Gadsden": "https://buy.stripe.com/fZucN7eAv69X7A06om43S0j",
  "Gilchrist": "https://buy.stripe.com/28E14p63Z0PDf2s8wu43S0k",
  "Glades": "https://buy.stripe.com/9B6fZj1NJ9m96vW5ki43S0l",
  "Gulf": "https://buy.stripe.com/7sY6oJ783gOB7A04ge43S0m",
  "Hamilton": "https://buy.stripe.com/00w8wR0JF69X5rSfYW43S0n",
  "Hardee": "https://buy.stripe.com/bJe7sN8c7fKx4nO9Ay43S0o",
  "Hendry": "https://buy.stripe.com/7sYfZj9gb8i58E4dQO43S0p",
  "Hernando": "https://buy.stripe.com/14AeVf783aqd9I8h3043S0r",
  "Highlands": "https://buy.stripe.com/5kQ00lfEz7e1bQg3ca43S0s",
  "Hillsborough": "https://buy.stripe.com/eVq6oJ9gbaqd6vWaEC43S0t",
  "Holmes": "https://buy.stripe.com/6oUaEZ4ZV9m98E428643S0u",
  "Indian River": "https://buy.stripe.com/bJe8wR4ZV55T8E4fYW43S0v",
  "Jackson": "https://buy.stripe.com/3cI6oJ63ZbuhdYoaEC43S0w",
  "Jefferson": "https://buy.stripe.com/dRm14pgID8i58E428643S0x",
  "Lafayette": "https://buy.stripe.com/6oU9AV3VRbuh07yaEC43S0y",
  "Lake": "https://buy.stripe.com/eVqaEZakf1THcUkcMK43S0z",
  "Lee": "https://buy.stripe.com/00w28teAv2XL4nO8wu43S0A",
  "Leon": "https://buy.stripe.com/3cI7sN0JFgOBg6w5ki43S0B",
  "Levy": "https://buy.stripe.com/eVqeVf3VRaqd3jK8wu43S0C",
  "Liberty": "https://buy.stripe.com/00wdRbbojbuh3jKcMK43S0D",
  "Madison": "https://buy.stripe.com/14AbJ38c769X4nO8wu43S0E",
  "Manatee": "https://buy.stripe.com/8x24gBgIDdCp8E4h3043S0F",
  "Marion": "https://buy.stripe.com/14AeVf0JF9m9cUk4ge43S0G",
  "Martin": "https://buy.stripe.com/8x24gB8c72XLcUk4ge43S0H",
  "Miami-Dade": "https://buy.stripe.com/00w6oJakf0PD7A06om43S01",
  "Monroe": "https://buy.stripe.com/4gMdRb4ZV2XL4nOh3043S0I",
  "Nassau": "https://buy.stripe.com/dRm6oJeAvfKx6vW8wu43S0J",
  "Okaloosa": "https://buy.stripe.com/28EdRbdwreGt6vWbIG43S0K",
  "Okeechobee": "https://buy.stripe.com/3cI6oJ3VRcyldYo6om43S0L",
  "Orange": "https://buy.stripe.com/fZu5kFakfaqd3jK4ge43S0M",
  "Osceola": "https://buy.stripe.com/fZueVfbojdCpcUk7sq43S0N",
  "Palm Beach": "https://buy.stripe.com/fZufZj4ZV8i55rSfYW43S0O",
  "Pasco": "https://buy.stripe.com/eVq9AV0JF41PaMcdQO43S0P",
  "Pinellas": "https://buy.stripe.com/3cI8wR2RN41PcUk8wu43S0Q",
  "Polk": "https://buy.stripe.com/3cI28tfEz69X1bCcMK43S0R",
  "Putnam": "https://buy.stripe.com/eVq7sN2RNgOB2fGh3043S0S",
  "St. Johns": "https://buy.stripe.com/4gM7sN8c70PD6vW28643S0T",
  "St. Lucie": "https://buy.stripe.com/bJefZjakf0PDbQgeUS43S0U",
  "Santa Rosa": "https://buy.stripe.com/9B6eVfgIDaqd1bC8wu43S0V",
  "Sarasota": "https://buy.stripe.com/14AaEZ1NJdCpaMcdQO43S0W",
  "Seminole": "https://buy.stripe.com/00wfZjakf0PD7A0aEC43S0X",
  "Sumter": "https://buy.stripe.com/aFadRb3VRgOB9I84ge43S0Y",
  "Suwannee": "https://buy.stripe.com/9B628t0JF7e1g6wdQO43S0Z",
  "Taylor": "https://buy.stripe.com/8x214p3VR1THbQg28643S10",
  "Union": "https://buy.stripe.com/5kQ8wR8c7dCp5rSbIG43S11",
  "Volusia": "https://buy.stripe.com/dRm8wR2RNcylaMc8wu43S12",
  "Wakulla": "https://buy.stripe.com/fZuaEZ0JFbuhg6wfYW43S13",
  "Walton": "https://buy.stripe.com/aFa7sN9gbdCpbQg7sq43S14",
  "Washington": "https://buy.stripe.com/eVq14p63ZgOB8E428643S16",
};

const CountyGrid = () => {
  const handleGetList = (countyName: string) => {
    toast.info(`Request for ${countyName} County list`, {
      description: "Please contact us to complete your purchase."
    });
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
            const checkoutUrl = countyCheckoutUrls[county.name];
            return (
              <CountyCard
                key={county.name}
                name={county.name}
                population={county.population}
                price={price}
                onGetList={() => handleGetList(county.name)}
                checkoutUrl={checkoutUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountyGrid;
