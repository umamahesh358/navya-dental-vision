import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-dental-hospital.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary/30 to-background pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary font-medium">Kondaiah Chowdary Memorial</Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                World-class dental &
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  facial care
                </span>
                — gentle, modern, human.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                From routine dentistry to complex facial surgery—expert care in Guntur, 
                welcoming patients from India and abroad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('appointment')} size="lg" variant="gradient" className="shadow-hero text-lg px-8 py-6">
                Book a caring consultation
              </Button>
              
            </div>

            {/* Trust Microcopy */}
            <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Advanced sterilization
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                In-house X-ray
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Oxygen facility
              </span>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10000+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Card */}
          <div className="relative">
            <Card className="overflow-hidden shadow-hero bg-gradient-card backdrop-blur-sm border-0 animate-float">
              <div className="aspect-video relative">
                <img src={heroImage} alt="Modern Dental Hospital Interior" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-hero" />
              </div>
              
              <div className="p-8 space-y-6">
                {/* Hospital Exterior Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/06504c0d-28dc-4e9a-8471-4e56de6b1624.png" 
                    alt="NAVYA'S International Dental Hospital Exterior" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  State-of-the-Art Facility
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">100% Sterile</div>
                      <div className="text-xs text-muted-foreground">Environment</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Advanced</div>
                      <div className="text-xs text-muted-foreground">Technology</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Single Sitting</div>
                      <div className="text-xs text-muted-foreground">Root Canal</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Expert</div>
                      <div className="text-xs text-muted-foreground">Specialists</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;