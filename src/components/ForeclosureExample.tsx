import { Card, CardContent } from "@/components/ui/card";
import { Home, DollarSign, FileText } from "lucide-react";

interface ForeclosureExampleProps {
  propertyAddress: string;
  marketValue: string;
  judgmentValue: string;
  notes?: string;
}

const ForeclosureExample = ({ 
  propertyAddress, 
  marketValue, 
  judgmentValue, 
  notes 
}: ForeclosureExampleProps) => {
  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Home className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm text-muted-foreground">Property Address</p>
              <p className="text-foreground">{propertyAddress}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Market Value</p>
                  <p className="text-foreground font-bold">{marketValue}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Judgment Value</p>
                  <p className="text-foreground font-bold">{judgmentValue}</p>
                </div>
              </div>
            </div>
          </div>
          
          {notes && (
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm text-muted-foreground">Notes</p>
                <p className="text-foreground text-sm">{notes}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ForeclosureExample;
