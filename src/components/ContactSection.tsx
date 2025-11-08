import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Message sent successfully!", {
      description: "We'll get back to you shortly."
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Questions or Inquiries?
          </h2>
          <p className="text-xl text-muted-foreground">We're here to help. Reach out anytime.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-gradient-to-br from-card to-card/80">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription className="text-base">Get in touch with us directly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:786-574-0861" className="text-lg font-semibold text-primary hover:underline transition-colors">
                    786-574-0861
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:verasjoel8@yahoo.com" className="text-lg font-semibold text-primary hover:underline transition-colors break-all">
                    verasjoel8@yahoo.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-gradient-to-br from-card to-card/80">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription className="text-base">We'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full h-12 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
