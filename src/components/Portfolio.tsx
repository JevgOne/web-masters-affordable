import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "E-shop s nábytkem",
    category: "E-commerce",
    description: "Moderní e-shop s integrací platební brány a správou skladu. Responzivní design optimalizovaný pro mobilní zařízení.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
    tags: ["E-shop", "Platební brána", "SEO"],
  },
  {
    title: "Restaurace La Bella",
    category: "Prezentační web",
    description: "Elegantní prezentační web s online rezervačním systémem a interaktivním menu. Integrace se sociálními sítěmi.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["Rezervace", "Menu", "Google Maps"],
  },
  {
    title: "Fitness studio ProFit",
    category: "Web s členskou zónou",
    description: "Kompletní řešení pro fitness centrum včetně online objednávání lekcí, členské zóny a platebního systému.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    tags: ["Členská zóna", "Booking systém", "Platby"],
  },
  {
    title: "Advokátní kancelář Novák",
    category: "Firemní web",
    description: "Profesionální prezentace právních služeb s blogem, kontaktním formulářem a databází článků.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    tags: ["Blog", "SEO články", "Kontaktní formulář"],
  },
  {
    title: "Cestovní agentura WorldTrip",
    category: "Katalogový web",
    description: "Interaktivní katalog zájezdů s vyhledáváním, filtry a online rezervačním systémem.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    tags: ["Vyhledávání", "Filtry", "Rezervace"],
  },
  {
    title: "Realitní kancelář HomeMax",
    category: "Katalog nemovitostí",
    description: "Profesionální prezentace nemovitostí s pokročilým vyhledáváním, mapami a virtuálními prohlídkami.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Mapa", "Vyhledávání", "Virtuální prohlídky"],
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-background" aria-labelledby="portfolio-heading">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 id="portfolio-heading" className="text-4xl md:text-5xl font-bold text-foreground">
            Reference - Naše realizované projekty
          </h2>
          <p className="text-xl text-muted-foreground">
            Podívejte se na úspěšné webové projekty, které jsme vytvořili - e-shopy, firemní weby, landing pages a další
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <article 
              key={index}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <Card>
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={item.image}
                    alt={`${item.title} - ${item.category} - příklad naší práce v oblasti tvorby ${item.category.toLowerCase()}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <ExternalLink className="w-6 h-6 text-primary" />
                </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="text-sm text-primary font-medium">{item.category}</div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
