import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface CountyCardProps {
  name: string;
  price: string;
  onGetList: () => void;
}

const CountyCard = ({ name, price, onGetList }: CountyCardProps) => {
  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MapPin className="h-5 w-5 text-primary" />
          {name} County
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-2xl font-bold text-primary">{price}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={onGetList} className="w-full">
          Get List
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CountyCard;
