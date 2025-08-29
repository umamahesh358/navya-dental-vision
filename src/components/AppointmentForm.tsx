import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Phone, MapPin } from "lucide-react";
const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const getISTTimestamp = () => {
    try {
      const locale = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata'
      });
      return new Date(locale).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' IST';
    } catch (e) {
      return new Date().toISOString();
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string || '';

    // Set hidden fields
    const replytoField = form.querySelector('input[name="_replyto"]') as HTMLInputElement;
    const timestampField = form.querySelector('input[name="submission_time"]') as HTMLInputElement;
    if (replytoField) replytoField.value = email;
    if (timestampField) timestampField.value = getISTTimestamp();
    setIsSubmitting(true);
    setStatusMessage("Sending your appointment request...");

    // Allow native form submission to Formspree
  };
  return <section id="appointment" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            ✨ Premium Dental Care
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Schedule Your
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Dream Smile
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-normal mt-4">
              Consultation
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience world-class dental care with our expert team. Book your personalized 
            consultation and take the first step towards your perfect smile.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-elevated hover:shadow-hero bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    A.C. College Main Road<br />
                    Between Canara Bank & Srichakra Show Room<br />
                    <span className="text-primary font-semibold">Guntur - 522002</span>
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:08632235113" className="text-primary hover:text-accent font-medium transition-colors">0863-2235113</a>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:9100831618" className="text-primary hover:text-accent font-medium transition-colors">9100831618</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elevated hover:shadow-hero bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Visit Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    <span className="text-primary font-semibold">Monday - Saturday</span><br />
                    10:00 AM - 2:00 PM<br />
                    <span className="text-red-500 font-semibold">🔴 Sunday Holiday</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Premium Feature Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-primary mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">We'll confirm your appointment within 24 hours</p>
            </div>
          </div>

          {/* Premium Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-hero hover:shadow-elevated bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border border-white/20 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
              
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Book Your Appointment
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">Start your journey to a perfect smile</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20" />
              </CardHeader>
              <CardContent className="relative z-10">
                <form ref={formRef} action="https://formspree.io/f/xwpqgbja" method="POST" onSubmit={handleSubmit} className="space-y-6" autoComplete="on" noValidate>
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{
                  display: 'none'
                }} />
                  
                  {/* Hidden fields */}
                  <input type="hidden" name="_subject" value="New Appointment Request — NAVYA'S DENTAL HOSPITAL" />
                  <input type="hidden" name="_language" value="en" />
                  <input type="hidden" name="_next" value="/thank-you" />
                  <input type="hidden" name="_replyto" value="" />
                  <input type="hidden" name="submission_time" value="" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Full Name *
                      </Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        className="bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 h-12 text-base hover:border-primary/30 transition-all duration-300" 
                        placeholder="Enter your full name" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Phone Number *
                      </Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        required 
                        className="bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 h-12 text-base hover:border-primary/30 transition-all duration-300" 
                        placeholder="Enter your phone number" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 h-12 text-base hover:border-primary/30 transition-all duration-300" 
                      placeholder="Enter your email address" 
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="preferred_date" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Preferred Date
                      </Label>
                      <Input 
                        id="preferred_date" 
                        name="preferred_date" 
                        type="date" 
                        className="bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 h-12 text-base hover:border-primary/30 transition-all duration-300" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        Service Required
                      </Label>
                      <select 
                        id="service" 
                        name="service" 
                        className="w-full px-4 py-3 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus:border-primary/50 hover:border-primary/30 transition-all duration-300 h-12"
                      >
                        <option value="">Select Service</option>
                        <option value="General Dentistry">General Dentistry</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                        <option value="Root Canal Treatment">Root Canal Treatment</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Orthodontics">Orthodontics</option>
                        <option value="Maxillofacial Surgery">Maxillofacial Surgery</option>
                        <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                        <option value="Periodontics">Periodontics</option>
                        <option value="General Consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      Additional Message
                    </Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Please describe your concerns or any specific requirements..." 
                      className="bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-primary/20 min-h-[120px] text-base hover:border-primary/30 transition-all duration-300 resize-none" 
                      rows={5} 
                    />
                  </div>

                  <div className="mt-8">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white font-bold text-lg py-6 px-8 rounded-xl shadow-hero hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Button Background Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3 relative z-10">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          <span>Sending Your Request...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3 relative z-10">
                          <Calendar className="h-6 w-6" />
                          <span>Book My Dream Smile Consultation</span>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                          </div>
                        </div>
                      )}
                    </Button>
                    
                    {statusMessage && (
                      <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-center font-medium" role="status" aria-live="polite">
                        ✅ {statusMessage}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 p-4 rounded-lg bg-secondary/20 border border-primary/10">
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      🔒 <strong>Your privacy is protected.</strong> By submitting this form, you agree to our privacy policy. 
                      <br />
                      ⚡ <strong>Quick Response:</strong> We'll contact you within 24 hours to confirm your appointment.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AppointmentForm;