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
  return;
};
export default InternationalPatients;