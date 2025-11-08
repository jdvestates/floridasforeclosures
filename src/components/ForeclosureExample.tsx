import { Card, CardContent } from "@/components/ui/card";
import { Home, DollarSign, FileText, User, MapPin, Calendar, Hash } from "lucide-react";

interface ForeclosureExampleProps {
  propertyAddress: string;
  ownerName: string;
  mailingAddress: string;
  finalJudgement: string;
  rvm: string;
  auctionDate: string;
  parcelId: string;
  listingNumber?: string;
}

const ForeclosureExample = ({ 
  propertyAddress,
  ownerName,
  mailingAddress,
  finalJudgement,
  rvm,
  auctionDate,
  parcelId,
  listingNumber
}: ForeclosureExampleProps) => {
  return (
    <Card className="transition-all duration-200 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Home className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-sm text-muted-foreground">Property Address</p>
              <p className="text-foreground">{propertyAddress}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <User className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-sm text-muted-foreground">Owner Name</p>
              <p className="text-foreground">{ownerName}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-sm text-muted-foreground">Mailing Address</p>
              <p className="text-foreground">{mailingAddress}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Market Value (RVM)</p>
                  <p className="text-foreground font-bold">{rvm}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Final Judgement</p>
                  <p className="text-foreground font-bold">{finalJudgement}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-sm text-muted-foreground">Auction Date</p>
              <p className="text-foreground">{auctionDate}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Hash className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Parcel ID</p>
                  <p className="text-foreground text-sm">{parcelId}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground">Listing Number</p>
                  <p className="text-foreground text-sm">{listingNumber || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForeclosureExample;
