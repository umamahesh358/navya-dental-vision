import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import InternationalPatients from "@/components/InternationalPatients";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <Team />
      <Gallery />
      <InternationalPatients />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
