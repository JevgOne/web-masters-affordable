import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "5-7 dní",
    label: "Rychlé dodání",
    description: "Jednoduchý web hotový",
  },
  {
    icon: Award,
    value: "100%",
    label: "Spokojenost",
    description: "Guarantee satisfakce",
  },
  {
    icon: TrendingUp,
    value: "< 2s",
    label: "Rychlost načtení",
    description: "Optimalizované weby",
  },
  {
    icon: Users,
    value: "10+",
    label: "Projektů",
    description: "Úspěšně dokončeno",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Proč si vybrat nás
          </h2>
          <p className="text-xl text-muted-foreground">
            Rychlost, kvalita a moderní technologie za skvělou cenu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 shadow-glow">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg">
            Moderní technologie a AI nám umožňují vytvářet profesionální weby rychleji a za lepší ceny.
            Soustředíme se na kvalitu, rychlost dodání a spokojenost každého klienta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
