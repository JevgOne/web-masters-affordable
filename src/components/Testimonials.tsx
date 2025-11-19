import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Petra Nováková",
    role: "Majitelka e-shopu",
    company: "Nábytek Plus",
    content: "Tým Vaše Weby nám vytvořil naprosto profesionální e-shop za zlomek ceny, kterou jsme dostali od jiných agentur. Web je rychlý, moderní a naši zákazníci ho milují. Prodeje vzrostly o 40% během prvních tří měsíců!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Martin Svoboda",
    role: "Majitel restaurace",
    company: "La Bella",
    content: "Potřeboval jsem web s online rezervacemi a interaktivním menu. Dostal jsem přesně to, co jsem chtěl, za úžasnou cenu. Rezervací máme teď dvojnásobek a komunikace s týmem byla skvělá.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    name: "Jana Dvořáková",
    role: "Majitelka fitness studia",
    company: "ProFit Studio",
    content: "Webové stránky jsou naše digitální vizitka a díky Vaše Weby vypadáme jako velká firma, přestože jsme malé studio. Online booking systém nám ušetřil spoustu času a klienti ho milují. Nejlepší investice letošního roku!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    name: "Tomáš Novák",
    role: "Advokát",
    company: "Advokátní kancelář Novák",
    content: "Jako advokát potřebuji prezentaci, která budí důvěru. Web od Vaše Weby je přesně takový - profesionální, přehledný a s užitečným blogem. Nových klientů z webu máme o 60% více.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Lucie Procházková",
    role: "Majitelka cestovní agentury",
    company: "WorldTrip",
    content: "Potřebovala jsem katalog zájezdů s vyhledáváním a filtrováním. Výsledek předčil všechna očekávání! Web je krásný, rychlý a funkční. Klienti si online rezervují sami a nám to ušetří spoustu práce.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
  },
  {
    name: "David Horák",
    role: "Realitní makléř",
    company: "HomeMax Reality",
    content: "Díky novému webu od Vaše Weby vypadáme jako velká realitní kancelář. Mapa s nemovitostmi, virtuální prohlídky a moderní design nám přinesly trojnásobek poptávek. Cena byla neuvěřitelně příznivá!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Co říkají naši klienti
          </h2>
          <p className="text-xl text-muted-foreground">
            Přečtěte si zkušenosti firem, které nám už důvěřují
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
