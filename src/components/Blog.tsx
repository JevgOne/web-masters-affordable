import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "Jak vybrat správnou platformu pro váš web v roce 2025",
    excerpt: "WordPress, custom řešení nebo page builder? Průvodce výběrem té nejlepší platformy pro váš byznys.",
    date: "15. března 2025",
    readTime: "5 min čtení",
    category: "Návody",
    image: "/placeholder.svg",
  },
  {
    title: "10 důvodů, proč váš web potřebuje SEO optimalizaci",
    excerpt: "Objevte, jak správná SEO optimalizace pomůže vašemu webu získat více návštěvníků a zákazníků.",
    date: "10. března 2025",
    readTime: "7 min čtení",
    category: "SEO",
    image: "/placeholder.svg",
  },
  {
    title: "Rychlost webu: Proč je důležitá a jak ji zlepšit",
    excerpt: "Pomalý web = ztracení zákazníci. Naučte se, jak optimalizovat rychlost načítání vašeho webu.",
    date: "5. března 2025",
    readTime: "6 min čtení",
    category: "Optimalizace",
    image: "/placeholder.svg",
  },
  {
    title: "Kolik skutečně stojí profesionální web v ČR?",
    excerpt: "Transparentní průvodce cenami webů v Česku. Od landing page po e-shop - co můžete očekávat.",
    date: "1. března 2025",
    readTime: "8 min čtení",
    category: "Byznys",
    image: "/placeholder.svg",
  },
  {
    title: "Mobilní design: Proč je responzivita nezbytná",
    excerpt: "Více než 60% návštěvníků přichází z mobilů. Jak zajistit, aby váš web vypadal perfektně všude.",
    date: "25. února 2025",
    readTime: "5 min čtení",
    category: "Design",
    image: "/placeholder.svg",
  },
  {
    title: "AI v tvorbě webů: Revoluce nebo hype?",
    excerpt: "Jak umělá inteligence mění web development a proč je to dobře pro vaše podnikání.",
    date: "20. února 2025",
    readTime: "6 min čtení",
    category: "Technologie",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Blog & Novinky
          </h2>
          <p className="text-xl text-muted-foreground">
            Tipy, trendy a best practices ze světa web developmentu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div 
                className="h-48 bg-muted rounded-t-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
                role="img"
                aria-label={post.title}
              />
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="text-base line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="group">
                  Číst
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Zobrazit všechny články
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;