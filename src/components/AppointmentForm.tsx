import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    branch: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual Formspree endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setIsSubmitted(true);
      toast.success("Appointment request submitted successfully! We'll contact you within 24 hours.");
    } catch (error) {
      toast.error("Failed to submit appointment request. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center shadow-hero bg-gradient-card backdrop-blur-sm border-0">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Appointment Request Received!</h3>
              <p className="text-muted-foreground mb-8">
                Thank you for choosing NAVYA'S International Dental Hospital. 
                Our team will contact you within 24 hours to confirm your appointment.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Book Another Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule your appointment with our expert dental team. We're here to help you 
            achieve optimal oral health with personalized care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Branch 1
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  A.C. College Main Road<br />
                  Between Canara Bank & Srichakra Show Room<br />
                  Guntur - 522002
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:08632337777" className="text-primary hover:text-accent">0863-2337777</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:9100078787" className="text-primary hover:text-accent">9100078787</a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Branch 2
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:08632222019" className="text-primary hover:text-accent">0863-2222019</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:9989812919" className="text-primary hover:text-accent">9989812919</a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-card/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Monday - Saturday<br />
                  10:00 AM - 2:00 PM<br />
                  <span className="text-red-500">Sunday Holiday</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-hero bg-gradient-card backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Your Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleChange('preferredDate', e.target.value)}
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="branch">Preferred Branch</Label>
                      <Select onValueChange={(value) => handleChange('branch', value)}>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="branch1">Branch 1 - A.C. College Main Road</SelectItem>
                          <SelectItem value="branch2">Branch 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Select onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Dentistry</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                        <SelectItem value="rootcanal">Root Canal Treatment</SelectItem>
                        <SelectItem value="implants">Dental Implants</SelectItem>
                        <SelectItem value="orthodontics">Orthodontics</SelectItem>
                        <SelectItem value="surgery">Maxillofacial Surgery</SelectItem>
                        <SelectItem value="pediatric">Pediatric Dentistry</SelectItem>
                        <SelectItem value="periodontics">Periodontics</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Please describe your concerns or any specific requirements..."
                      className="bg-background/50 min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.phone}
                    className="w-full bg-gradient-primary hover:scale-105 transition-transform shadow-hero text-lg py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 mr-2" />
                        Book Appointment
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;