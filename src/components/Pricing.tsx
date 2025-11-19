import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingTiers = [
  {
    name: "Starter",
    price: "14 990 Kč",
    originalPrice: "16 990 Kč",
    badge: "Launch promo",
    description: "Landing page pro mikro-firmy a živnostníky",
    features: [
      "Responzivní design na míru",
      "1-3 podstránky",
      "Kontaktní formulář",
      "Základní SEO optimalizace",
      "SSL certifikát",
      "Hosting 6 měsíců zdarma",
      "Dodání za 5-7 dní",
      "100% záruka spokojenosti",
    ],
    popular: false,
    deliveryTime: "5-7 dní",
  },
  {
    name: "Business",
    price: "37 990 Kč",
    originalPrice: "39 990 Kč",
    badge: "Nejoblíbenější",
    description: "Kompletní web pro malé a střední firmy",
    features: [
      "Vše ze Starter balíčku",
      "8 podstránek",
      "Vlastní design na míru",
      "Blog/aktuality s CMS",
      "Pokročilé SEO",
      "Google Analytics",
      "Napojení na sociální sítě",
      "BONUS: Logo design zdarma (hodnota 5.000 Kč)",
      "Hosting 12 měsíců zdarma",
      "Dodání za 10-14 dní",
      "Neomezená podpora",
    ],
    popular: true,
    deliveryTime: "10-14 dní",
  },
  {
    name: "Enterprise",
    price: "84 990 Kč",
    originalPrice: "89 990 Kč",
    badge: "Launch promo",
    description: "E-shop nebo booking systém na míru",
    features: [
      "Vše z Business balíčku",
      "Neomezené podstránky",
      "E-shop s platební bránou",
      "Správa produktů a skladu",
      "Online platby (Stripe/GoPay)",
      "Booking/rezervační systém",
      "Vlastní funkcionality na míru",
      "BONUS: Brand identity zdarma (hodnota 15.000 Kč)",
      "Hosting 12 měsíců zdarma",
      "Dodání za 21-28 dní",
      "Prioritní podpora 24/7",
    ],
    popular: false,
    deliveryTime: "21-28 dní",
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Férové ceny bez skrytých poplatků
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparentní ceník s launch promo cenami. Žádná překvapení, všechno v ceně.
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
              {tier.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold rounded-full ${
                  tier.popular 
                    ? "bg-gradient-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  {tier.badge}
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="space-y-2">
                  {tier.originalPrice && (
                    <div className="text-2xl text-muted-foreground line-through">
                      {tier.originalPrice}
                    </div>
                  )}
                  <div className="text-4xl font-bold text-primary">{tier.price}</div>
                </div>
                <CardDescription className="text-base pt-2">{tier.description}</CardDescription>
                <div className="pt-3 text-sm font-medium text-primary">
                  ⚡ Dodání: {tier.deliveryTime}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className={`text-sm ${feature.includes("BONUS") ? "font-semibold text-accent" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter className="pt-6">
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
        
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Máte speciální požadavky nebo potřebujete individuální řešení?{" "}
            <button 
              onClick={scrollToContact}
              className="text-primary hover:underline font-medium"
            >
              Kontaktujte nás
            </button>
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>100% záruka vrácení peněz</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Bez skrytých poplatků</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Rychlé dodání</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
