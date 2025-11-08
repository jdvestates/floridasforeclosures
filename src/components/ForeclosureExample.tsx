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
    <Card className="group border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl bg-gradient-to-br from-card to-card/80">
      <CardContent className="pt-8 pb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl group-hover:bg-muted/50 transition-colors">
            <div className="p-2 rounded-lg bg-primary/10">
              <Home className="h-5 w-5 text-primary flex-shrink-0" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xs text-muted-foreground mb-1">Property Address</p>
              <p className="text-foreground font-medium">{propertyAddress}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl group-hover:bg-muted/50 transition-colors">
            <div className="p-2 rounded-lg bg-primary/10">
              <User className="h-5 w-5 text-primary flex-shrink-0" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xs text-muted-foreground mb-1">Owner Name</p>
              <p className="text-foreground font-medium">{ownerName}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl group-hover:bg-muted/50 transition-colors">
            <div className="p-2 rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xs text-muted-foreground mb-1">Mailing Address</p>
              <p className="text-foreground font-medium">{mailingAddress}</p>
            </div>
          </div>
          
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="font-semibold text-sm text-foreground">Financial Details</p>
            </div>
            <div className="grid grid-cols-2 gap-4 ml-8">
              <div>
                <p className="font-semibold text-xs text-muted-foreground mb-1">Market Value (RVM)</p>
                <p className="text-foreground font-bold text-lg">{rvm}</p>
              </div>
              <div>
                <p className="font-semibold text-xs text-muted-foreground mb-1">Final Judgement</p>
                <p className="text-foreground font-bold text-lg">{finalJudgement}</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl group-hover:bg-muted/50 transition-colors">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xs text-muted-foreground mb-1">Auction Date</p>
              <p className="text-foreground font-medium">{auctionDate}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-muted/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Hash className="h-4 w-4 text-primary" />
                <p className="font-semibold text-xs text-muted-foreground">Parcel ID</p>
              </div>
              <p className="text-foreground text-sm font-medium">{parcelId}</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-primary" />
                <p className="font-semibold text-xs text-muted-foreground">Listing Number</p>
              </div>
              <p className="text-foreground text-sm font-medium">{listingNumber || 'N/A'}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForeclosureExample;
