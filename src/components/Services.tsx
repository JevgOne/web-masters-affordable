import { Code2, Rocket, Palette, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Moderní design",
    description: "Vizuálně přitažlivé weby, které zaujmou na první pohled a zvýší konverze.",
  },
  {
    icon: Code2,
    title: "Čistý kód",
    description: "Profesionálně napsaný kód podle nejnovějších standardů a best practices.",
  },
  {
    icon: Zap,
    title: "Bleskurychlé",
    description: "Optimalizované weby s rychlým načítáním pro perfektní uživatelský zážitek.",
  },
  {
    icon: Rocket,
    title: "SEO ready",
    description: "Web připravený pro vyhledávače, aby vás zákazníci snadno našli.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Proč si vybrat nás?
          </h2>
          <p className="text-xl text-muted-foreground">
            Kombinujeme špičkovou kvalitu s bezkonkurenčními cenami
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
