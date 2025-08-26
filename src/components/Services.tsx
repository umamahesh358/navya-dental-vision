import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Heart, Zap, Baby, Shield, Scissors, Crown, Sparkles } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Heart,
    title: "Root Canal Treatment",
    description: "Pain-free single sitting and multi-sitting root canal therapy using advanced endodontic techniques.",
    features: ["Single Sitting RCT", "Multi Sitting RCT", "Pain-free Treatment", "Advanced Technology"]
  }, {
    icon: Crown,
    title: "Dental Implantology",
    description: "World-class implants in association with Indian Dental Education Academy, Chennai.",
    features: ["Wide Range of Implants", "Expert Consultation", "Permanent Solution", "Natural Looking"]
  }, {
    icon: Scissors,
    title: "Maxillofacial Surgeries",
    description: "Advanced facial surgeries including TMJ, orthognathic surgeries, and trauma management.",
    features: ["T.M.J Ankylosis", "Orthognathic Surgery", "Lefort Fractures", "Pan-facial Fractures"]
  }, {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Complete smile designing and aesthetic treatments for a perfect smile transformation.",
    features: ["Smile Designing", "Lip Contouring", "Dimple Creation", "Dental Jewellery"]
  }, {
    icon: Zap,
    title: "Orthodontics",
    description: "Orthodontic and dento-facial correction of malocclusions for proper teeth alignment.",
    features: ["Braces Treatment", "Dento-facial Correction", "Malocclusion Treatment", "Smile Alignment"]
  }, {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children with gentle approach and child-friendly environment.",
    features: ["Child-friendly Care", "Preventive Treatments", "Behavior Management", "Early Intervention"]
  }, {
    icon: Smile,
    title: "Complete Oral Care",
    description: "Comprehensive dental services including prophylaxis, dentures, and bleaching treatments.",
    features: ["Oral Prophylaxis", "Complete Dentures", "Teeth Bleaching", "Fixed & Removable Teeth"]
  }, {
    icon: Shield,
    title: "Laser Dentistry",
    description: "Advanced laser treatments for precise and minimally invasive dental procedures.",
    features: ["Laser Surgery", "Flap Surgeries", "Minimally Invasive", "Faster Healing"]
  }, {
    icon: Heart,
    title: "Sedation Dentistry",
    description: "Comfortable dental treatments with sedation options for anxious patients.",
    features: ["Anxiety Management", "Comfortable Treatment", "Safe Sedation", "Relaxed Experience"]
  }];
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Dental Specialties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Through our comprehensive dental specialties, we provide in-depth expertise in the spectrum of advanced dental and surgical interventions. Our specialties are integrated to provide a seamless experience.
            </p>
          </div>
          <Button variant="ghost" className="text-primary font-semibold hidden md:flex items-center gap-2">
            VIEW ALL
            <span className="text-lg">→</span>
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
          {/* Featured Service Card */}
          <Card className="lg:col-span-2 md:col-span-2 bg-gradient-to-br from-primary to-accent text-white group hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Dental Implantology</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  World-class implants in association with Indian Dental Education Academy, Chennai. Expert consultation with permanent solutions that look and feel natural.
                </p>
              </div>
              <Button 
                variant="ghost" 
                onClick={scrollToAppointment}
                className="bg-white/20 text-white hover:bg-white/30 font-semibold self-start"
              >
                KNOW MORE →
              </Button>
            </CardContent>
          </Card>

          {/* Regular Service Cards */}
          {services.slice(0, 6).map((service, index) => {
            if (index === 1) return null; // Skip implantology as it's featured
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description.length > 100 
                      ? service.description.substring(0, 100) + "..." 
                      : service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button onClick={scrollToAppointment} size="lg" variant="gradient" className="shadow-hero">
            Schedule Your Consultation Today
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;