import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Začněte ještě dnes
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Připraveni na{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              nový web?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Stačí vyplnit nezávaznou poptávku a do 24 hodin se vám ozveme s nabídkou 
            přesně na míru vašim potřebám a rozpočtu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Začít projekt
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Odpověď na poptávku</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">0 Kč</div>
              <div className="text-sm text-muted-foreground">Poplatek za konzultaci</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Bez závazků</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
