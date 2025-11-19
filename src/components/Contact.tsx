import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Základní kontakt
    name: "",
    email: "",
    phone: "",
    company: "",
    
    // Typ projektu
    projectType: "",
    
    // Business info
    businessDescription: "",
    targetAudience: "",
    mainGoal: "",
    
    // Funkcionality
    features: [] as string[],
    customFeatures: "",
    
    // Design
    designStyle: "",
    colorPreference: "",
    inspirationUrls: "",
    
    // Obsah
    hasContent: "",
    contentSource: "",
    needsCopywriting: "",
    
    // E-shop specifické
    productCount: "",
    needsPaymentGateway: "",
    needsInventory: "",
    
    // Timeline a rozpočet
    deadline: "",
    budget: "",
    
    // Konkurence & inspirace
    competitors: "",
    
    // Další informace
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission with detailed data
    console.log("Detailní poptávka:", formData);
    
    toast({
      title: "Poptávka odeslána!",
      description: "Během 24 hodin vám pošleme detailní návrh řešení a cenovou nabídku.",
    });
    
    // Reset form
    setStep(1);
    setFormData({
      name: "", email: "", phone: "", company: "",
      projectType: "", businessDescription: "", targetAudience: "", mainGoal: "",
      features: [], customFeatures: "", designStyle: "", colorPreference: "",
      inspirationUrls: "", hasContent: "", contentSource: "", needsCopywriting: "",
      productCount: "", needsPaymentGateway: "", needsInventory: "",
      deadline: "", budget: "", competitors: "", additionalInfo: "",
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const features = [
    "Kontaktní formulář", "Online chat", "Blog/Novinky", "Fotogalerie", 
    "Video integrace", "Google Maps", "Rezervační systém", "Členská zóna",
    "Platební brána", "E-shop funkce", "Newsletter", "Jazykové mutace",
    "Vyhledávání", "Filtry produktů", "Recenze a hodnocení"
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nezávazná poptávka webu
          </h2>
          <p className="text-xl text-muted-foreground">
            Vyplňte detailní poptávku a my vám do 24h pošleme kompletní návrh řešení s cenou
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle>Krok {step} z 5</CardTitle>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div
                      key={s}
                      className={`h-2 w-12 rounded-full transition-all ${
                        s <= step ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <CardDescription>
                {step === 1 && "Základní informace o vás a vašem projektu"}
                {step === 2 && "Jaký typ webu potřebujete a jaké funkcionality"}
                {step === 3 && "Design, barvy a inspirace"}
                {step === 4 && "Obsah, texty a média"}
                {step === 5 && "Timeline, rozpočet a závěrečné informace"}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Základní informace */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label htmlFor="name">Jméno a příjmení *</Label>
                      <Input
                        id="name"
                        placeholder="Jan Novák"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jan@example.cz"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+420 123 456 789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Název firmy / projektu *</Label>
                      <Input
                        id="company"
                        placeholder="Moje firma s.r.o."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="businessDescription">Popište svůj byznys / projekt *</Label>
                      <Textarea
                        id="businessDescription"
                        placeholder="Čím se zabýváte? Co nabízíte? Jakou máte historii?"
                        rows={4}
                        value={formData.businessDescription}
                        onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="targetAudience">Kdo je vaše cílová skupina? *</Label>
                      <Input
                        id="targetAudience"
                        placeholder="Např: Mladé rodiny, firmy v IT, zájemci o fitness..."
                        value={formData.targetAudience}
                        onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mainGoal">Hlavní cíl webu *</Label>
                      <Select value={formData.mainGoal} onValueChange={(value) => setFormData({ ...formData, mainGoal: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte hlavní cíl" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lead-generation">Získávání kontaktů (poptávek)</SelectItem>
                          <SelectItem value="online-sales">Online prodej produktů</SelectItem>
                          <SelectItem value="brand-awareness">Budování značky a povědomí</SelectItem>
                          <SelectItem value="information">Poskytování informací</SelectItem>
                          <SelectItem value="booking">Rezervace / Objednávky služeb</SelectItem>
                          <SelectItem value="portfolio">Portfolio / Prezentace prací</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Typ projektu a funkcionality */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label>Typ webu *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte typ webu" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="presentation">Prezentační web (one-page/multi-page)</SelectItem>
                          <SelectItem value="eshop">E-shop</SelectItem>
                          <SelectItem value="landing">Landing page</SelectItem>
                          <SelectItem value="portal">Webový portál</SelectItem>
                          <SelectItem value="blog">Blog / Magazín</SelectItem>
                          <SelectItem value="catalog">Katalog služeb/produktů</SelectItem>
                          <SelectItem value="booking">Rezervační systém</SelectItem>
                          <SelectItem value="membership">Web s členskou zónou</SelectItem>
                          <SelectItem value="custom">Vlastní řešení</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Jaké funkcionality potřebujete? *</Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature}
                              checked={formData.features.includes(feature)}
                              onCheckedChange={() => handleFeatureToggle(feature)}
                            />
                            <label
                              htmlFor={feature}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {feature}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="customFeatures">Další specifické funkce</Label>
                      <Textarea
                        id="customFeatures"
                        placeholder="Popište další funkce, které na webu potřebujete..."
                        rows={3}
                        value={formData.customFeatures}
                        onChange={(e) => setFormData({ ...formData, customFeatures: e.target.value })}
                      />
                    </div>
                    
                    {formData.projectType === "eshop" && (
                      <div className="space-y-4 p-4 border border-primary/20 rounded-lg bg-primary/5">
                        <h4 className="font-semibold text-primary">E-shop specifika</h4>
                        
                        <div className="space-y-2">
                          <Label htmlFor="productCount">Přibližný počet produktů</Label>
                          <Select value={formData.productCount} onValueChange={(value) => setFormData({ ...formData, productCount: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Kolik produktů budete prodávat?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-50">1-50 produktů</SelectItem>
                              <SelectItem value="51-200">51-200 produktů</SelectItem>
                              <SelectItem value="201-1000">201-1000 produktů</SelectItem>
                              <SelectItem value="1000+">Více než 1000 produktů</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Potřebujete platební bránu?</Label>
                          <Select value={formData.needsPaymentGateway} onValueChange={(value) => setFormData({ ...formData, needsPaymentGateway: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Vyberte možnost" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes-card">Ano - platba kartou</SelectItem>
                              <SelectItem value="yes-all">Ano - karty, převod, dobírka</SelectItem>
                              <SelectItem value="no">Ne, zatím nepotřebuji</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Správa skladu a dostupnosti?</Label>
                          <Select value={formData.needsInventory} onValueChange={(value) => setFormData({ ...formData, needsInventory: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Vyberte možnost" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Ano, potřebuji sledovat skladové zásoby</SelectItem>
                              <SelectItem value="no">Ne, nepotřebuji</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Step 3: Design */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label>Preferovaný styl designu *</Label>
                      <Select value={formData.designStyle} onValueChange={(value) => setFormData({ ...formData, designStyle: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Jaký styl se vám líbí?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern-minimal">Moderní a minimalistický</SelectItem>
                          <SelectItem value="corporate">Korporátní a profesionální</SelectItem>
                          <SelectItem value="creative">Kreativní a odvážný</SelectItem>
                          <SelectItem value="elegant">Elegantní a luxusní</SelectItem>
                          <SelectItem value="playful">Hravý a barevný</SelectItem>
                          <SelectItem value="traditional">Tradiční a konzervativní</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="colorPreference">Barevné preference</Label>
                      <Input
                        id="colorPreference"
                        placeholder="Např: Modrá a bílá, teplé zemité tóny, firemní barvy..."
                        value={formData.colorPreference}
                        onChange={(e) => setFormData({ ...formData, colorPreference: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inspirationUrls">Weby, které se vám líbí (inspirace)</Label>
                      <Textarea
                        id="inspirationUrls"
                        placeholder="Vložte odkazy na weby, jejichž design se vám líbí (každý na nový řádek)"
                        rows={4}
                        value={formData.inspirationUrls}
                        onChange={(e) => setFormData({ ...formData, inspirationUrls: e.target.value })}
                      />
                      <p className="text-xs text-muted-foreground">
                        Toto nám velmi pomůže pochopit vaše preference
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="competitors">Weby vaší konkurence</Label>
                      <Textarea
                        id="competitors"
                        placeholder="Odkazy na weby konkurence (pomůže nám vytvořit lepší řešení)"
                        rows={3}
                        value={formData.competitors}
                        onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
                      />
                    </div>
                  </div>
                )}
                
                {/* Step 4: Obsah */}
                {step === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label>Máte připravený obsah? *</Label>
                      <Select value={formData.hasContent} onValueChange={(value) => setFormData({ ...formData, hasContent: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte možnost" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes-all">Ano, mám vše (texty, fotky, loga)</SelectItem>
                          <SelectItem value="yes-partial">Ano, částečně</SelectItem>
                          <SelectItem value="no">Ne, nemám nic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contentSource">Odkud vezmete obsah?</Label>
                      <Textarea
                        id="contentSource"
                        placeholder="Máte profesionální fotografie? Potřebujete naše fotoslužby? Máte copywritera?"
                        rows={3}
                        value={formData.contentSource}
                        onChange={(e) => setFormData({ ...formData, contentSource: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Potřebujete psaní textů (copywriting)?</Label>
                      <Select value={formData.needsCopywriting} onValueChange={(value) => setFormData({ ...formData, needsCopywriting: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte možnost" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes-all">Ano, potřebuji napsat všechny texty</SelectItem>
                          <SelectItem value="yes-seo">Ano, chci SEO optimalizované texty</SelectItem>
                          <SelectItem value="no">Ne, texty napíšu sám</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
                
                {/* Step 5: Timeline a rozpočet */}
                {step === 5 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="space-y-2">
                      <Label>Kdy potřebujete web hotový? *</Label>
                      <Select value={formData.deadline} onValueChange={(value) => setFormData({ ...formData, deadline: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte termín" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">Co nejdříve (7-14 dní)</SelectItem>
                          <SelectItem value="1-month">Do 1 měsíce</SelectItem>
                          <SelectItem value="2-3-months">2-3 měsíce</SelectItem>
                          <SelectItem value="flexible">Flexibilní termín</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Váš plánovaný rozpočet *</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Vyberte rozpočet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Do 20 000 Kč</SelectItem>
                          <SelectItem value="standard">20 000 - 50 000 Kč</SelectItem>
                          <SelectItem value="premium">50 000 - 100 000 Kč</SelectItem>
                          <SelectItem value="enterprise">Nad 100 000 Kč</SelectItem>
                          <SelectItem value="unsure">Nejsem si jistý</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Další informace</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Cokoli dalšího, co bychom měli vědět o vašem projektu..."
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      />
                    </div>
                    
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg space-y-2">
                      <h4 className="font-semibold text-primary">Co dostanete po odeslání?</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>✓ Detailní analýzu vašich požadavků</li>
                        <li>✓ Návrh technického řešení</li>
                        <li>✓ Přesnou cenovou kalkulaci</li>
                        <li>✓ Timeline projektu</li>
                        <li>✓ Doporučení pro optimální řešení</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* Navigation buttons */}
                <div className="flex justify-between pt-6 border-t">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Zpět
                    </Button>
                  )}
                  
                  {step < 5 ? (
                    <Button type="button" onClick={nextStep} className="ml-auto">
                      Další krok
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit" variant="hero" className="ml-auto">
                      Odeslat poptávku
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact info cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@vaseweby.cz" 
                  className="text-primary hover:underline text-lg"
                >
                  info@vaseweby.cz
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+420123456789" 
                  className="text-primary hover:underline text-lg"
                >
                  +420 123 456 789
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
