import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";

interface CountyCardProps {
  name: string;
  population: number;
  price: number;
  onGetList: () => void;
}

const CountyCard = ({ name, population, price, onGetList }: CountyCardProps) => {
  return (
    <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl bg-gradient-to-br from-card to-card/80 overflow-hidden">
      <CardHeader className="pb-4 bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/15 transition-colors">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold">{name} County</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4 pt-6 space-y-4">
        <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
          <Users className="h-5 w-5 text-primary/70" />
          <div>
            <p className="text-xs text-muted-foreground font-medium">Population</p>
            <span className="text-sm font-semibold text-foreground">{population.toLocaleString()}</span>
          </div>
        </div>
        <div className="text-center py-2">
          <p className="text-sm text-muted-foreground mb-1">Price</p>
          <p className="text-4xl font-bold text-primary">${price}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-6">
        <Button 
          onClick={onGetList} 
          className="w-full h-11 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-base"
        >
          Get List
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CountyCard;
