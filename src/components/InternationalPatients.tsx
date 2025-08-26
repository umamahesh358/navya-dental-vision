import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Plane, Hotel, FileText, Phone, Clock, Download } from "lucide-react";
const InternationalPatients = () => {
  const packages = [{
    name: "Standard Package",
    price: "₹25,000 - ₹50,000",
    usd: "$300 - $600",
    features: ["Consultation & Diagnosis", "Basic dental procedures", "Airport pickup", "3-star hotel recommendations", "Basic translation support"]
  }, {
    name: "Premium Package",
    price: "₹50,000 - ₹1,00,000",
    usd: "$600 - $1,200",
    features: ["Advanced procedures", "Multiple speciality consultation", "Luxury transportation", "4-star hotel partnerships", "Dedicated patient coordinator", "Post-treatment follow-up"],
    popular: true
  }, {
    name: "VIP Package",
    price: "₹1,00,000+",
    usd: "$1,200+",
    features: ["Complex surgeries & implants", "Private suite accommodation", "5-star hotel partnerships", "24/7 concierge service", "Family accommodation", "Extended recovery support"]
  }];
  const timeline = [{
    step: 1,
    title: "Initial Consultation",
    desc: "Video call assessment & treatment planning",
    duration: "1-2 days"
  }, {
    step: 2,
    title: "Visa & Travel",
    desc: "Medical visa assistance & travel arrangements",
    duration: "2-3 weeks"
  }, {
    step: 3,
    title: "Arrival & Setup",
    desc: "Airport pickup, hotel check-in, clinic orientation",
    duration: "1 day"
  }, {
    step: 4,
    title: "Treatment Phase",
    desc: "Comprehensive dental care & procedures",
    duration: "3-14 days"
  }, {
    step: 5,
    title: "Recovery & Follow-up",
    desc: "Healing period with regular check-ups",
    duration: "1-7 days"
  }];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            International Patient Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive dental treatment packages for international patients with visa assistance, accommodation, and dedicated care coordination.
          </p>
        </div>

        {/* Treatment Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <Card key={index} className={`p-6 ${pkg.popular ? 'ring-2 ring-primary border-primary' : ''}`}>
              {pkg.popular && (
                <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                <div className="text-lg text-muted-foreground">{pkg.usd}</div>
              </div>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Contact for Details
              </Button>
            </Card>
          ))}
        </div>

        {/* Treatment Timeline */}
        <div className="bg-card rounded-lg p-8">
          <h3 className="text-3xl font-bold text-center mb-12">Your Treatment Journey</h3>
          <div className="grid md:grid-cols-5 gap-8">
            {timeline.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{step.desc}</p>
                <Badge variant="outline">{step.duration}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <Card className="p-6 text-center">
            <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Visa Assistance</h4>
            <p className="text-sm text-muted-foreground">Complete medical visa support and documentation</p>
          </Card>
          <Card className="p-6 text-center">
            <Hotel className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Hotel Partnerships</h4>
            <p className="text-sm text-muted-foreground">Comfortable accommodation near the hospital</p>
          </Card>
          <Card className="p-6 text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Treatment Reports</h4>
            <p className="text-sm text-muted-foreground">Detailed medical reports and follow-up care</p>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-sm text-muted-foreground">Round-the-clock patient care coordination</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InternationalPatients;