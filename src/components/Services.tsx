import { Code2, Rocket, Palette, Zap, Smartphone, Lock, BarChart3, Headphones, ShoppingCart, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Moderní design na míru",
    description: "Vizuálně přitažlivé weby navržené přesně podle vašeho brandu. Žádné šablony, jen originální design, který vás odliší od konkurence.",
  },
  {
    icon: Code2,
    title: "Čistý a rychlý kód",
    description: "Profesionálně napsaný kód s nejnovějšími technologiemi (React, TypeScript). Váš web bude snadno rozšiřitelný a udržovatelný.",
  },
  {
    icon: Zap,
    title: "Bleskurychlé načítání",
    description: "Optimalizujeme každý pixel. Rychlost načítání pod 2 sekundy = lepší SEO + více konverzí. Google i vaši zákazníci to ocení.",
  },
  {
    icon: Rocket,
    title: "SEO optimalizace",
    description: "Web připravený pro vyhledávače od prvního dne. Správné meta tagy, strukturovaná data, rychlost - všechno nastavíme tak, aby vás našli.",
  },
  {
    icon: Smartphone,
    title: "100% responzivní",
    description: "Perfektní zobrazení na mobilu, tabletu i počítači. Více než 60% návštěvníků přichází z mobilů - váš web musí vypadat skvěle všude.",
  },
  {
    icon: Lock,
    title: "Bezpečnost a SSL",
    description: "HTTPS certifikát, šifrovaná komunikace, pravidelné aktualizace. Vaše data i data zákazníků jsou v bezpečí.",
  },
  {
    icon: BarChart3,
    title: "Google Analytics",
    description: "Sledujte, odkud přicházejí vaši návštěvníci, co na webu dělají a kde odcházejí. Data-driven rozhodování pro váš byznys.",
  },
  {
    icon: Headphones,
    title: "Neomezená podpora",
    description: "I po spuštění webu u vás zůstáváme. Technická podpora, opravy, aktualizace - vždy když potřebujete. Žádné skryté poplatky.",
  },
  {
    icon: ShoppingCart,
    title: "E-shop řešení",
    description: "Kompletní e-commerce systém s platební bránou, správou skladu a objednávek. Od produktového katalogu po doručení zákazníkovi.",
  },
  {
    icon: FileText,
    title: "Blog a aktuality",
    description: "Vlastní redakční systém pro snadnou správu článků a novinek. Publikujte obsah bez programátora - jednoduše jako ve Wordu.",
  },
];

const additionalServices = [
  {
    title: "Landing page",
    description: "Jednostránkový web zaměřený na jednu akci - prodej produktu, získání kontaktů nebo registraci.",
    deliveryTime: "5-7 dní",
    priceRange: "Od 14.990 Kč",
  },
  {
    title: "Firemní prezentace",
    description: "Kompletní web s několika stránkami - o nás, služby, reference, blog, kontakt. Ideální pro malé a střední firmy.",
    deliveryTime: "10-14 dní",
    priceRange: "Od 37.990 Kč",
  },
  {
    title: "E-shop",
    description: "Plnohodnotný obchod s košíkem, platební bránou, správou produktů a objednávek. Vše co potřebujete pro online prodej.",
    deliveryTime: "21-28 dní",
    priceRange: "Od 84.990 Kč",
  },
  {
    title: "Booking systém",
    description: "Rezervační systém pro salóny, restaurace, služby. Online kalendář, rezervace termínů, automatické notifikace.",
    deliveryTime: "21-28 dní",
    priceRange: "Od 84.990 Kč",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        {/* Main Features */}
        <header className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-foreground">
            Co všechno dostanete s naším webem?
          </h2>
          <p className="text-xl text-muted-foreground">
            Komplexní služby pro váš úspěch online - žádné doplňky, všechno v ceně
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto mb-24">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4" aria-hidden="true">
                  <service.icon className="w-6 h-6 text-primary-foreground" aria-label={service.title} />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Types */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Typy webů, které tvoříme
            </h3>
            <p className="text-lg text-muted-foreground">
              Od jednoduchých landing pages po kompletní e-shopy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-foreground">Dodací lhůta</div>
                      <div className="text-lg font-semibold text-primary">{service.deliveryTime}</div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-sm text-muted-foreground">Cena</div>
                      <div className="text-lg font-semibold text-foreground">{service.priceRange}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
