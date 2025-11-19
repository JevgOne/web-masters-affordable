import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingTiers = [
  {
    name: "Starter",
    price: "Od 5 000 Kč",
    description: "Ideální pro malé firmy a začínající podnikatele",
    features: [
      "Responzivní design",
      "5 podstránek",
      "Kontaktní formulář",
      "SEO optimalizace",
      "30 dní podpory zdarma",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "Od 15 000 Kč",
    description: "Pro firmy, které chtějí růst online",
    features: [
      "Vše ze Starter",
      "15 podstránek",
      "Blog/aktuality",
      "Napojení na sociální sítě",
      "Google Analytics",
      "3 měsíce podpory zdarma",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Individuální",
    description: "Komplexní řešení na míru vašim potřebám",
    features: [
      "Vše z Business",
      "Neomezené podstránky",
      "E-shop integrace",
      "Vlastní funkcionality",
      "Prioritní podpora",
      "Roční podpora zdarma",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Transparentní ceník
          </h2>
          <p className="text-xl text-muted-foreground">
            Žádné skryté poplatky. To, co vidíte, je to, co dostanete.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative ${
                tier.popular 
                  ? "border-primary shadow-elegant scale-105" 
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Nejoblíbenější
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={tier.popular ? "hero" : "outline"}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Získat nabídku
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Máte speciální požadavky?{" "}
            <button 
              onClick={scrollToContact}
              className="text-primary hover:underline font-medium"
            >
              Kontaktujte nás
            </button>{" "}
            pro individuální nabídku.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
