import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Florida Foreclosures</h3>
          </div>
          
          <div className="space-y-2 opacity-95">
            <p>Phone: <a href="tel:786-574-0861" className="hover:underline font-semibold">786-574-0861</a></p>
            <p>Email: <a href="mailto:verasjoel22@yahoo.com" className="hover:underline font-semibold">verasjoel22@yahoo.com</a></p>
          </div>
          
          <div className="pt-6 border-t border-primary-foreground/20 max-w-3xl">
            <p className="text-sm opacity-80">
              <strong>Disclaimer:</strong> The data provided in our foreclosure lists is updated regularly 
              but is not guaranteed to be 100% accurate or current. We recommend verifying all information 
              independently before making any decisions.
            </p>
          </div>
          
          <p className="text-sm opacity-70 pt-4">
            © {new Date().getFullYear()} Florida Foreclosures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
