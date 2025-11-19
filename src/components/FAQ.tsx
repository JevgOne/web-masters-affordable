import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Jaká je průměrná doba realizace webu?",
    answer: "Standardní prezentační web vytvoříme za 7-14 dní. U jednodušších projektů to může být i rychleji, u složitějších e-shopů nebo webů s vlastní funkčností to může trvat 3-4 týdny. Vždy vás však budeme informovat o reálném časovém harmonogramu po konzultaci.",
  },
  {
    question: "Co je zahrnuto v ceně?",
    answer: "V ceně je zahrnut kompletní návrh a vývoj webu, responzivní design pro všechna zařízení, SEO optimalizace, kontaktní formulář, připojení k Google Analytics, zabezpečení SSL certifikátem a podpora po uvedení do provozu. Hosting a doména jsou hrazeny zvlášť (běžně 200-500 Kč měsíčně).",
  },
  {
    question: "Potřebuji mít vlastní texty a fotky?",
    answer: "Ideálně ano, protože znáte své podnikání nejlépe. Pokud však texty nebo fotografie nemáte, pomůžeme vám s jejich vytvořením. Můžeme napsat základní texty a vybrat profesionální stock fotografie. Za doplňkové copywriting služby účtujeme příplatek podle rozsahu.",
  },
  {
    question: "Kdo bude mít web na starosti po spuštění?",
    answer: "Web bude zcela ve vašich rukou. Předáme vám přístupové údaje a základní školení, jak upravovat obsah. Pokud budete chtít naši pomoc s aktualizacemi nebo rozšířeními, jsme tu pro vás. Nabízíme také měsíční servisní balíčky od 500 Kč/měsíc.",
  },
  {
    question: "Mohu web později rozšiřovat?",
    answer: "Samozřejmě! Web vytváříme tak, aby byl snadno rozšiřitelný. Ať už budete chtít přidat blog, e-shop, rezervační systém nebo jakoukoliv jinou funkčnost, není problém to doplnit. Web roste s vaším podnikáním.",
  },
  {
    question: "Je web optimalizovaný pro vyhledávače (SEO)?",
    answer: "Ano, všechny naše weby jsou základně SEO optimalizované - správná struktura nadpisů, meta tagy, rychlost načítání, mobilní optimalizace, sitemap atd. Pro pokročilé SEO (linkbuilding, obsahová strategie) doporučujeme specializované SEO specialisty.",
  },
  {
    question: "Mohu si vybrat vlastní design nebo šablonu?",
    answer: "Web vytváříme na míru podle vašich požadavků a brand identity. Pokud máte inspiraci nebo konkrétní představu, sdělte nám ji při konzultaci. Můžete nám také poslat příklady webů, které se vám líbí, a my vytvoříme něco podobného, ale unikátního.",
  },
  {
    question: "Co když nebudu spokojený s výsledkem?",
    answer: "Průběžně vás zapojujeme do procesu tvorby - schvalujete návrh designu před začátkem programování a máte možnost během vývoje poskytovat zpětnou vazbu. Zahrnujeme i revize zdarma. Náš cíl je vaše spokojenost, proto děláme vše pro to, aby výsledek odpovídal vašim očekáváním.",
  },
  {
    question: "Poskytujete záruku na web?",
    answer: "Ano, na všechny naše weby poskytujeme záruku 6 měsíců na technické závady a chyby způsobené naší prací. Pokud se objeví problém, který jsme způsobili, opravíme ho zdarma. Po dobu záruky máte také nárok na omezenou technickou podporu.",
  },
  {
    question: "Mohu platit na splátky?",
    answer: "Standardně vyžadujeme 50% zálohu před začátkem prací a 50% po dokončení. U větších projektů nad 30 000 Kč jsme však otevřeni individuálnímu splátkového kalendáři. Kontaktujte nás a domluvíme se na podmínkách, které vám budou vyhovovat.",
  },
  {
    question: "Nabízíte hosting a správu domény?",
    answer: "Hosting a doménu si můžete zajistit sami nebo vám pomůžeme s výběrem kvalitního poskytovatele. Doporučujeme spolehlivé české hostingové služby s cenou od 100 Kč měsíčně. Na přání zajistíme vše za vás a zahrneme to do měsíční údržby.",
  },
  {
    question: "Vytvářet weby i pro zahraniční trhy?",
    answer: "Ano, vytváříme weby v jakémkoliv jazyce. Pokud potřebujete vícejazyčný web, není to problém. Web může být v češtině, angličtině, němčině nebo jakémkoliv jiném jazyce podle vašich potřeb. Překladatelské služby můžeme také zajistit.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Často kladené otázky
          </h2>
          <p className="text-xl text-muted-foreground">
            Odpovědi na nejčastější dotazy o tvorbě webů
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Nenашli jste odpověď na svou otázku?
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-primary hover:underline font-medium text-lg"
          >
            Kontaktujte nás →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
