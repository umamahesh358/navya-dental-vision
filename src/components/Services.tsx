import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smile, 
  Heart, 
  Zap, 
  Baby, 
  Shield, 
  Scissors,
  Crown,
  Sparkles 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "General Dentistry",
      description: "Comprehensive oral health checkups, cleanings, fillings, and preventive care for the whole family.",
      features: ["Regular Checkups", "Dental Cleanings", "Cavity Fillings", "Preventive Care"]
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with advanced cosmetic treatments including whitening, veneers, and smile makeovers.",
      features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Aesthetic Bonding"]
    },
    {
      icon: Heart,
      title: "Root Canal Treatment",
      description: "Pain-free single sitting root canal therapy using advanced endodontic techniques and equipment.",
      features: ["Single Sitting RCT", "Pain-free Treatment", "Advanced Technology", "High Success Rate"]
    },
    {
      icon: Crown,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions with titanium implants for natural-looking, long-lasting results.",
      features: ["Titanium Implants", "Crown Placement", "Bone Grafting", "All-on-4 Treatment"]
    },
    {
      icon: Zap,
      title: "Orthodontics",
      description: "Straighten teeth and correct bite issues with traditional braces and modern clear aligner systems.",
      features: ["Metal Braces", "Ceramic Braces", "Clear Aligners", "Bite Correction"]
    },
    {
      icon: Scissors,
      title: "Maxillofacial Surgery",
      description: "Advanced surgical procedures for jaw, face, and mouth conditions performed by expert surgeons.",
      features: ["Wisdom Tooth Extraction", "Jaw Surgery", "Facial Trauma", "Oral Pathology"]
    },
    {
      icon: Baby,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children with a gentle approach and child-friendly environment.",
      features: ["Child-friendly Care", "Preventive Treatments", "Behavior Management", "Early Intervention"]
    },
    {
      icon: Shield,
      title: "Periodontics",
      description: "Treatment of gum diseases and conditions affecting the supporting structures of teeth.",
      features: ["Gum Disease Treatment", "Scaling & Polishing", "Gum Surgery", "Maintenance Therapy"]
    }
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Comprehensive
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Dental Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine care to complex procedures, we offer a full range of dental services 
            with the latest technology and expert specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={scrollToAppointment}
                    className="text-primary hover:bg-primary/10 font-medium"
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={scrollToAppointment}
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-transform shadow-hero"
          >
            Schedule Your Consultation Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;