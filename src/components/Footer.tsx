import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 px-4 border-t border-primary-foreground/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-3 group">
            <div className="p-3 bg-primary-foreground/10 rounded-xl group-hover:bg-primary-foreground/20 transition-colors">
              <Building2 className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-bold">Florida Foreclosures</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 opacity-95">
            <a href="tel:786-574-0861" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
              <span className="text-lg">📞</span>
              <span className="font-semibold text-lg group-hover:underline">786-574-0861</span>
            </a>
            <a href="mailto:verasjoel8@yahoo.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
              <span className="text-lg">📧</span>
              <span className="font-semibold text-lg group-hover:underline">verasjoel8@yahoo.com</span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-primary-foreground/20 max-w-3xl w-full">
            <div className="bg-primary-foreground/10 rounded-2xl p-6">
              <p className="text-sm opacity-90 leading-relaxed">
                <strong className="text-base">Disclaimer:</strong> The data provided in our foreclosure lists is updated regularly 
                but is not guaranteed to be 100% accurate or current. We recommend verifying all information 
                independently before making any decisions.
              </p>
            </div>
          </div>
          
          <p className="text-sm opacity-70 pt-6">
            © {new Date().getFullYear()} Florida Foreclosures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
