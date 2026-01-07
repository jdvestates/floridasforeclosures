import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";

interface CountyCardProps {
  name: string;
  population: number;
  price: number;
  onGetList: () => void;
  checkoutUrl?: string;
  featured?: boolean;
}

const CountyCard = ({ name, population, price, onGetList, checkoutUrl, featured = false }: CountyCardProps) => {
  const handleClick = () => {
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      onGetList();
    }
  };

  return (
    <Card className={`transition-all duration-200 hover:shadow-lg ${featured ? 'border-primary border-2 bg-primary/5' : ''}`}>
      <CardHeader className="pb-3">
        <CardTitle className={`flex items-center gap-2 ${featured ? 'text-xl' : 'text-lg'}`}>
          <MapPin className={`${featured ? 'h-6 w-6' : 'h-5 w-5'} text-primary`} />
          {name} County
          {featured && <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Featured</span>}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>Population: {population.toLocaleString()}</span>
        </div>
        <p className={`font-bold text-primary ${featured ? 'text-3xl' : 'text-2xl'}`}>${price}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleClick} className={`w-full ${featured ? 'h-12 text-lg' : ''}`}>
          Get List
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CountyCard;
