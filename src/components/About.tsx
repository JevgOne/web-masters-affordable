import { Target, Zap, Heart, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: Zap,
    title: "Rychlost",
    description: "Dodáváme za 7-14 dní, zatímco konkurence 30-60 dní. Váš čas je pro nás priorita.",
  },
  {
    icon: Target,
    title: "Transparentnost",
    description: "Jasné ceny, žádné skryté poplatky. Co vidíte, to dostanete.",
  },
  {
    icon: Heart,
    title: "Kvalita",
    description: "Moderní technologie a design jako u top agentur, ale za férové ceny.",
  },
  {
    icon: Shield,
    title: "Záruka spokojenosti",
    description: "100% garancí vrácení peněz, pokud nebudete spokojeni.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Proč jsme jiní než ostatní?
            </h2>
            <p className="text-xl text-muted-foreground">
              Moderní přístup k tvorbě webů s důrazem na rychlost a férové ceny
            </p>
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-card p-8 rounded-lg border border-border space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Náš příběh</h3>
              <p className="text-muted-foreground leading-relaxed">
                Weblyx jsme založili z frustrace z toho, jak dlouho trvá a kolik stojí tvorba kvalitního webu. 
                Viděli jsme, jak velké agentury účtují astronomické částky a dodávají měsíce, zatímco levní 
                freelanceři šetří na kvalitě a moderních technologiích.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Rozhodli jsme se udělat věci jinak. Kombinujeme moderní AI nástroje s lidskou kreativitou 
                a zkušenostmi, což nám umožňuje dodávat <strong className="text-foreground">prémiové weby za zlomek času a ceny</strong> než 
                tradiční agentury. Nepracujeme se zastaralými technologiemi - používáme to nejnovější, 
                co web development nabízí.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Naším cílem není být největší agentura na trhu, ale <strong className="text-foreground">nejrychlejší a nejférovější</strong>. 
                Chceme, aby každý živnostník a malá firma měli přístup k profesionálnímu webu, který jim 
                skutečně pomůže růst - bez bankrotu a zbytečného čekání.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-foreground">
              Naše hodnoty
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Differentiation */}
          <div className="bg-gradient-primary p-8 rounded-lg text-primary-foreground">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Co nás odlišuje od konkurence?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">7-14 dní</div>
                  <div className="text-sm opacity-90">vs. 30-60 dní u agentur</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">30-50%</div>
                  <div className="text-sm opacity-90">levnější než velké agentury</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-90">záruka spokojenosti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;