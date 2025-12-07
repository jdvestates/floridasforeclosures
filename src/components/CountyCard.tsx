import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";

interface CountyCardProps {
  name: string;
  population: number;
  price: number;
  onGetList: () => void;
  checkoutUrl?: string;
}

const CountyCard = ({ name, population, price, onGetList, checkoutUrl }: CountyCardProps) => {
  const handleClick = () => {
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      onGetList();
    }
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MapPin className="h-5 w-5 text-primary" />
          {name} County
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>Population: {population.toLocaleString()}</span>
        </div>
        <p className="text-2xl font-bold text-primary">${price}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleClick} className="w-full">
          Get List
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CountyCard;
