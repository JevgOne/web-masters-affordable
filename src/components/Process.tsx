import { MessageSquare, Palette, Code, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Konzultace",
    description: "Svoláme si schůzku (osobní nebo online), kde si probereme vaše představy, cíle a požadavky na web.",
    duration: "30-60 minut",
  },
  {
    icon: Palette,
    title: "2. Design a návrh",
    description: "Vytvoříme návrh webu podle vašich požadavků a brand identity. Po schválení přejdeme k realizaci.",
    duration: "2-3 dny",
  },
  {
    icon: Code,
    title: "3. Vývoj",
    description: "Naprogramujeme web s důrazem na rychlost, SEO optimalizaci a responzivní design pro všechna zařízení.",
    duration: "3-5 dní",
  },
  {
    icon: CheckCircle2,
    title: "4. Testování",
    description: "Důkladně otestujeme všechny funkcionality, rychlost načítání a kompatibilitu na různých zařízeních.",
    duration: "1-2 dny",
  },
  {
    icon: Rocket,
    title: "5. Spuštění",
    description: "Spustíme web, nastavíme analytics a předáme vám přístupové údaje. Jsme tu pro vás i po spuštění!",
    duration: "1 den",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Jak to funguje
          </h2>
          <p className="text-xl text-muted-foreground">
            Jednoduchý proces od prvního kontaktu po spuštění webu
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent -translate-x-1/2" />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-16`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-elegant transition-shadow duration-300">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-3">{step.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-sm text-primary font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow z-10 relative">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-muted/30 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Průměrná doba realizace: 7-14 dní
          </h3>
          <p className="text-muted-foreground">
            Složitější projekty mohou trvat déle, ale vždy vás budeme informovat o aktuálním stavu.
            Po celou dobu máte přístup k náhledu a můžete průběžně poskytovat zpětnou vazbu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
