import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Plane, Hotel, FileText, Phone, Clock, Download } from "lucide-react";

const InternationalPatients = () => {
  const packages = [
    {
      name: "Standard Package",
      price: "₹25,000 - ₹50,000",
      usd: "$300 - $600",
      features: [
        "Consultation & Diagnosis",
        "Basic dental procedures",
        "Airport pickup",
        "3-star hotel recommendations",
        "Basic translation support"
      ]
    },
    {
      name: "Premium Package",
      price: "₹50,000 - ₹1,00,000",
      usd: "$600 - $1,200",
      features: [
        "Advanced procedures",
        "Multiple speciality consultation",
        "Luxury transportation",
        "4-star hotel partnerships",
        "Dedicated patient coordinator",
        "Post-treatment follow-up"
      ],
      popular: true
    },
    {
      name: "VIP Package",
      price: "₹1,00,000+",
      usd: "$1,200+",
      features: [
        "Complex surgeries & implants",
        "Private suite accommodation",
        "5-star hotel partnerships",
        "24/7 concierge service",
        "Family accommodation",
        "Extended recovery support"
      ]
    }
  ];

  const timeline = [
    { step: 1, title: "Initial Consultation", desc: "Video call assessment & treatment planning", duration: "1-2 days" },
    { step: 2, title: "Visa & Travel", desc: "Medical visa assistance & travel arrangements", duration: "2-3 weeks" },
    { step: 3, title: "Arrival & Setup", desc: "Airport pickup, hotel check-in, clinic orientation", duration: "1 day" },
    { step: 4, title: "Treatment Phase", desc: "Comprehensive dental care & procedures", duration: "3-14 days" },
    { step: 5, title: "Recovery & Follow-up", desc: "Healing period with regular check-ups", duration: "1-7 days" }
  ];

  return (
    <section id="international" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary font-medium mb-4">
            International Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome Patients from
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Around the World
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dental care packages with complete travel and accommodation support. 
            Experience world-class treatment in the heart of India.
          </p>
        </div>

        {/* Treatment Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <Card key={index} className={`p-8 relative ${pkg.popular ? 'border-primary shadow-hero scale-105' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-lg text-muted-foreground">{pkg.usd}</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={pkg.popular ? "gradient" : "outline"} 
                className="w-full"
              >
                Request Package Details
              </Button>
            </Card>
          ))}
        </div>

        {/* Treatment Timeline */}
        <Card className="p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Your Treatment Journey</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                <Badge variant="secondary" className="text-xs">{item.duration}</Badge>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-primary" />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Services & Support */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <Plane className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Visa Assistance</h4>
            <p className="text-sm text-muted-foreground">Medical visa support & documentation</p>
          </Card>
          <Card className="p-6 text-center">
            <Hotel className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Hotel Partners</h4>
            <p className="text-sm text-muted-foreground">Comfortable stays near the clinic</p>
          </Card>
          <Card className="p-6 text-center">
            <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Language Support</h4>
            <p className="text-sm text-muted-foreground">Interpreters for major languages</p>
          </Card>
          <Card className="p-6 text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-sm text-muted-foreground">Round-the-clock patient care</p>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-card">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-6">
            Download our comprehensive international patient guide or speak with our coordination team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Patient Guide
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Speak with Coordinator
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InternationalPatients;