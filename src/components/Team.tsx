import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

const Team = () => {
  const doctors = [
    {
      name: "Prof. Dr. Kishore Babu Tallapati",
      role: "Managing Director & Chief Surgeon",
      image: doctor1,
      specialties: ["Maxillofacial Surgery", "Dental Implants", "Oral Pathology"],
      experience: "25+ Years",
      education: "MDS, FDSRCS (Edinburgh)"
    },
    {
      name: "Dr. Navya Kondabolu",
      role: "Chief Dental Officer",
      image: doctor2,
      specialties: ["Cosmetic Dentistry", "Orthodontics", "Pediatric Care"],
      experience: "15+ Years", 
      education: "MDS, Fellowship in Cosmetic Dentistry"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Senior Endodontist",
      image: doctor1,
      specialties: ["Root Canal Therapy", "Endodontics", "Pain Management"],
      experience: "12+ Years",
      education: "MDS Endodontics"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Periodontist",
      image: doctor2,
      specialties: ["Gum Surgery", "Periodontics", "Laser Therapy"],
      experience: "10+ Years",
      education: "MDS Periodontics"
    },
    {
      name: "Dr. Anil Reddy",
      role: "Oral Surgeon",
      image: doctor1,
      specialties: ["Oral Surgery", "Wisdom Teeth", "Trauma Care"],
      experience: "18+ Years",
      education: "MDS Oral Surgery"
    },
    {
      name: "Dr. Lakshmi Devi",
      role: "Pediatric Dentist",
      image: doctor2,
      specialties: ["Child Dentistry", "Preventive Care", "Behavior Management"],
      experience: "8+ Years",
      education: "MDS Pedodontics"
    }
  ];

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Dental Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our highly qualified specialists bring decades of combined experience 
            and cutting-edge expertise to provide you with the best dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {doctor.experience}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
                <p className="text-primary font-medium mb-4">{doctor.role}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{doctor.education}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="flex flex-wrap gap-1">
                      {doctor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={scrollToAppointment}
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our Team?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Surgeries Performed Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Patient Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;