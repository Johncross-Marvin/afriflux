import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { IdeaSection } from "@/components/IdeaSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { CompaniesSection } from "@/components/CompaniesSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <IdeaSection />
        <ExpertiseSection />
        <CompaniesSection />
        <ApproachSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
