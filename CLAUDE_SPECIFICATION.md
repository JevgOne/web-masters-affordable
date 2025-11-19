# KOMPLETNÍ SPECIFIKACE PRO CLAUDE.AI - WEBLYX WEB

Tato specifikace obsahuje přesné instrukce pro vytvoření identického webu pro webovou agenturu Weblyx.

---

## 🎯 TECHNOLOGIE

- **Framework:** React 18.3+ s TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + CSS Variables
- **UI Components:** Shadcn/ui
- **Icons:** Lucide React
- **Router:** React Router DOM

---

## 🎨 DESIGN SYSTEM

### Color Palette (HSL - musí být přesně tyto hodnoty!)

**Light Mode:**
```css
--background: 0 0% 100%;
--foreground: 220 15% 15%;
--primary: 195 100% 45%;
--primary-foreground: 0 0% 100%;
--primary-light: 195 100% 55%;
--primary-dark: 195 100% 35%;
--secondary: 195 80% 96%;
--secondary-foreground: 195 100% 25%;
--muted: 220 15% 96%;
--muted-foreground: 220 10% 45%;
--accent: 175 80% 45%;
--accent-foreground: 0 0% 100%;
--border: 220 15% 90%;
--radius: 0.75rem;
```

**Gradienty a efekty:**
```css
--gradient-primary: linear-gradient(135deg, hsl(195 100% 45%), hsl(175 80% 45%));
--gradient-hero: linear-gradient(180deg, hsl(195 80% 98%), hsl(0 0% 100%));
--shadow-elegant: 0 10px 40px -10px hsl(195 100% 45% / 0.2);
--shadow-glow: 0 0 60px hsl(195 100% 45% / 0.15);
```

### Typography
- Font: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial)
- Velikosti: text-sm (14px), text-base (16px), text-lg (18px), text-xl (20px), text-2xl (24px), text-3xl (30px), text-4xl (36px), text-5xl (48px), text-7xl (72px)

### Button Variants
Použij Shadcn button component s těmito variantami:
- `default` - primární modrá barva s white text
- `outline` - průhledné s borderem
- `hero` - speciální varianta pro hero sekci

---

## 📐 STRUKTURA PROJEKTU

```
src/
├── components/
│   ├── Header.tsx          # Navigace s logem
│   ├── Hero.tsx            # Hero sekce
│   ├── Services.tsx        # Služby
│   ├── About.tsx           # O nás
│   ├── Stats.tsx           # Statistiky
│   ├── Process.tsx         # Proces spolupráce
│   ├── Portfolio.tsx       # Portfolio projektů
│   ├── Pricing.tsx         # Cenové balíčky
│   ├── Testimonials.tsx    # Reference
│   ├── Blog.tsx            # Blog preview
│   ├── FAQ.tsx             # Časté otázky
│   ├── CTASection.tsx      # Call to action
│   ├── Contact.tsx         # Kontaktní formulář
│   ├── Footer.tsx          # Patička
│   └── ui/                 # Shadcn UI komponenty
├── assets/
│   ├── weblyx-logo.png     # Logo 1024x1024px
│   ├── hero-bg.jpg         # Hero background
│   └── ...
├── pages/
│   └── Index.tsx           # Hlavní stránka
├── index.css               # Design system
└── main.tsx               # Entry point
```

---

## 🖼️ BRANDING ASSETS

### Logo
- **Generuj:** Moderní, minimalistický logo "Weblyx" s geometrickým znakem
- Barva: turquoise (#00B4D8 / hsl(195 100% 42%))
- Rozměry: 1024x1024px
- Uložit jako: `src/assets/weblyx-logo.png`
- Použití: V headeru velikost `h-20 md:h-28`

### Favicon
- **Generuj:** Stylizované písmeno "W" v turquoise barvě
- Rozměry: 512x512px
- Uložit jako: `public/favicon.png`

### Hero Background
- **Generuj:** Abstract tech/digital pattern v jemných modrých tónech
- Rozměry: 1920x1080px
- Použití: Background s opacity 10%
- Uložit jako: `src/assets/hero-bg.jpg`

---

## 📄 KOMPONENTY - PŘESNÝ OBSAH

### 1. Header (`src/components/Header.tsx`)

**Fixní navigace s:**
- Logo (velikost `h-20 md:h-28`)
- Desktop navigace s položkami: Služby, O nás, Portfolio, Ceník, Blog, Kontakt
- Mobilní hamburger menu
- CTA tlačítko "Nezávazná poptávka"
- Scroll do sekcí pomocí `scrollIntoView`

```tsx
// Navigační položky
const navItems = [
  { id: "services", label: "Služby" },
  { id: "about", label: "O nás" },
  { id: "portfolio", label: "Portfolio" },
  { id: "pricing", label: "Ceník" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Kontakt" },
];
```

**Styling:**
- `className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"`
- Výška: `h-28 md:h-32`
- Logo kliknutí scrolluje na začátek stránky

---

### 2. Hero (`src/components/Hero.tsx`)

**Obsah:**
```
Badge: "⚡ Dodání za 5-7 dní • 30-50% levnější než agentury"

H1: "Profesionální weby, které prodávají"
- "které prodávají" má gradient text

Perex: "Vytvoříme vám moderní, rychlý a efektivní web za cenu, kterou nikdo nepřekoná. 
Férové ceny, žádné kompromisy v kvalitě, žádné skryté poplatky."

Tlačítka:
- Primární (variant="hero"): "Nezávazná poptávka" → scroll na #contact
- Sekundární (variant="outline"): "Zjistit více" → scroll na #services

Statistiky (3 sloupce):
- 100% | Spokojenost
- 5-7 dní | Dodání  
- ∞ | Podpora
```

**Styling:**
- Min-height: `min-h-[90vh]`
- Padding top: `pt-28 md:pt-32` (kvůli fixnímu headeru)
- Background: hero-bg.jpg s opacity 10% + gradient overlay
- Text centrovaný: `text-center`
- Animace: `animate-fade-in`

---

### 3. Services (`src/components/Services.tsx`)

**ID:** `id="services"`

**Nadpis:** "Naše služby"
**Perex:** "Komplexní řešení pro váš online úspěch"

**4 služby v grid layoutu (grid-cols-1 md:grid-cols-2 lg:grid-cols-4):**

1. **Webové stránky**
   - Ikona: Globe
   - Text: "Moderní, responzivní weby optimalizované pro konverze a SEO"

2. **E-shopy**
   - Ikona: ShoppingCart
   - Text: "Komplexní e-commerce řešení s platební bránou a správou skladu"

3. **SEO optimalizace**
   - Ikona: TrendingUp
   - Text: "Technické i obsahové SEO pro lepší viditelnost ve vyhledávačích"

4. **Údržba & podpora**
   - Ikona: Shield
   - Text: "Pravidelné aktualizace, monitoring a technická podpora 24/7"

**Styling každé karty:**
- `bg-card border border-border rounded-lg p-6`
- Ikona: `w-12 h-12 text-primary mb-4`
- Hover efekt: `hover:shadow-elegant transition-all`

---

### 4. About (`src/components/About.tsx`)

**ID:** `id="about"`

**Nadpis:** "Proč Weblyx?"

**Layout:** 2 sloupce (text + features)

**Text vlevo:**
"Jsme webová agentura, která kombinuje vysokou kvalitu práce s férovou cenou. Díky moderním technologiím a efektivním procesům dokážeme dodat profesionální weby rychleji a levněji než konkurence, bez kompromisů v kvalitě."

**4 výhody vpravo (grid 2x2):**
1. **Rychlost dodání** (Zap ikona)
   "Váš web bude hotový za 5-7 dní"

2. **Férové ceny** (DollarSign ikona)
   "30-50% levnější než velké agentury"

3. **Moderní technologie** (Code ikona)
   "React, TypeScript, Tailwind - nejnovější stack"

4. **100% spokojenost** (Heart ikona)
   "Garance vrácení peněz při nespokojenosti"

**Background:** `bg-muted`

---

### 5. Stats (`src/components/Stats.tsx`)

**4 statistiky v řadě:**
- **150+** Spokojených klientů
- **98%** Úspěšnost projektů  
- **5-7 dní** Průměrná doba dodání
- **24/7** Technická podpora

**Styling:**
- Čísla: `text-4xl md:text-5xl font-bold text-primary`
- Popisky: `text-muted-foreground`
- Grid: `grid-cols-2 md:grid-cols-4 gap-8`

---

### 6. Process (`src/components/Process.tsx`)

**ID:** `id="process"` (není přímý scroll item, ale dobré mít)

**Nadpis:** "Jak to funguje?"
**Perex:** "Jednoduchý a transparentní proces od prvního kontaktu po spuštění"

**5 kroků (vertikální timeline na mobilu, horizontální na desktopu):**

1. **Konzultace**
   - Ikona: MessageSquare
   - "Společně probereme vaše požadavky a cíle projektu. 100% zdarma a nezávazně."

2. **Návrh & kalkulace**
   - Ikona: FileText
   - "Připravíme detailní návrh řešení a transparentní cenovou nabídku bez skrytých poplatků."

3. **Vývoj**
   - Ikona: Code
   - "Vytvoříme váš web podle nejnovějších standardů. Průběžně vás budeme informovat."

4. **Testování**
   - Ikona: CheckCircle
   - "Důkladně otestujeme web na všech zařízeních a provedeme SEO optimalizaci."

5. **Spuštění**
   - Ikona: Rocket
   - "Spustíme web na produkci a předáme vám kompletní dokumentaci a přístupy."

**Styling:**
- Každý krok: Card s číslem v kruhu
- Propojovací čáry mezi kroky
- Ikony: `text-primary`

---

### 7. Portfolio (`src/components/Portfolio.tsx`)

**ID:** `id="portfolio"`

**Nadpis:** "Portfolio"
**Perex:** "Prohlédněte si naše nejnovější projekty"

**6 projektů (grid 1/2/3 cols):**

1. **E-shop Outdoor Vybavení**
   - Kategorie: E-commerce
   - Popis: "Komplexní e-shop s pokročilými filtry a platební bránou"
   - Tech: React, Node.js, PostgreSQL

2. **Fitness Studio Praha**
   - Kategorie: Web & Rezervace
   - Popis: "Prezentační web s online rezervačním systémem"
   - Tech: React, Supabase

3. **Legal Counsel**
   - Kategorie: Právní služby
   - Popis: "Profesionální web advokátní kanceláře"
   - Tech: React, Tailwind

4. **Stavební firma CONSTRUCT**
   - Kategorie: Firemní web
   - Popis: "Prezentace s galerií realizací a kalkulačkou"
   - Tech: React, TypeScript

5. **Kavárna COFFEE HOUSE**
   - Kategorie: Lokální business
   - Popis: "Web s online objednávkami a rezervací míst"
   - Tech: React, Supabase

6. **Fotograf Martin Novák**
   - Kategorie: Portfolio
   - Popis: "Minimalistické portfolio s galerií prací"
   - Tech: React, Lightbox

**Každá karta:**
- Placeholder obrázek (vygeneruj abstraktní reprezentaci projektu)
- Kategorie badge
- Název projektu
- Krátký popis
- Tech stack tagy
- "Zobrazit projekt" button

---

### 8. Pricing (`src/components/Pricing.tsx`)

**ID:** `id="pricing"`

**Nadpis:** "Ceník"
**Perex:** "Férové ceny bez skrytých poplatků. Platíte pouze za to, co skutečně potřebujete."

**3 balíčky:**

#### STARTER
- **14 990 Kč** (původně 16 990 Kč) - launch promo badge
- Ideální pro: "Malé firmy a živnostníky"
- ✓ 5 podstránek
- ✓ Responzivní design
- ✓ Základní SEO
- ✓ Kontaktní formulář
- ✓ Hosting na 1 rok zdarma
- ✓ 30 dní záruka

#### BUSINESS (Popular badge)
- **37 990 Kč** (původně 39 990 Kč)
- Ideální pro: "Rostoucí firmy"
- ✓ Neomezené podstránky
- ✓ Pokročilý design
- ✓ Pokročilé SEO
- ✓ Blog systém
- ✓ Analytics integrace
- ✓ 🎁 Logo design zdarma
- ✓ 60 dní záruka

#### ENTERPRISE
- **84 990 Kč** (původně 89 990 Kč)
- Ideální pro: "Velké projekty"
- ✓ Kompletní e-commerce
- ✓ Vlastní funkcionality
- ✓ API integrace
- ✓ Multi-jazyčnost
- ✓ Prioritní podpora
- ✓ 🎁 Brand identita zdarma
- ✓ 90 dní záruka

**CTA tlačítko:** "Nezávazná poptávka" (scroll na #contact)

**Styling:**
- Karty: `border-2` pro popular, `border` pro ostatní
- Popular karta: zvětšená, výraznější shadow
- Ceny: `text-5xl font-bold`
- Check ikony: `text-primary`

---

### 9. Testimonials (`src/components/Testimonials.tsx`)

**Nadpis:** "Co říkají naši klienti"

**3 reference (carousel nebo grid):**

1. **Jan Novák**
   - Pozice: "Majitel, Fitness Studio Praha"
   - Text: "Weblyx nám vytvořil web za neuvěřitelných 6 dní! Kvalita práce je vynikající a cena velmi férová. Rozhodně doporučuji."
   - Hodnocení: 5 hvězdiček

2. **Marie Svobodová**
   - Pozice: "Majitelka, Kavárna Coffee House"
   - Text: "Profesionální přístup, rychlá komunikace a výborný výsledek. Web je přesně takový, jaký jsem chtěla. Děkuji!"
   - Hodnocení: 5 hvězdiček

3. **Petr Dvořák**
   - Pozice: "CEO, CONSTRUCT s.r.o."
   - Text: "Nejlepší rozhodnutí pro náš byznys. Web nám přináší nové zakázky každý týden. Skvělá práce!"
   - Hodnocení: 5 hvězdiček

**Styling:**
- Každá karta: `bg-card border p-6`
- Avatar: placeholder kruh s iniciály
- Quote ikona: `text-primary/20` velká v pozadí
- Stars: žluté hvězdičky (Star ikona z Lucide, filled)

---

### 10. Blog (`src/components/Blog.tsx`)

**ID:** `id="blog"`

**Nadpis:** "Blog & novinky"
**Perex:** "Užitečné články o tvorbě webů a digitálním marketingu"

**3 články (preview):**

1. **Jak vybrat správnou webovou agenturu v roce 2024**
   - Datum: 15. 3. 2024
   - Kategorie: Návody
   - Excerpt: "Přemýšlíte nad vytvořením nového webu? Zjistěte, na co se zaměřit při výběru správné agentury..."

2. **10 důvodů, proč je rychlost webu klíčová pro váš byznys**
   - Datum: 8. 3. 2024
   - Kategorie: SEO
   - Excerpt: "Rychlost webu přímo ovlivňuje konverze i pozici ve vyhledávačích. Podívejte se na důkazy..."

3. **Moderní web design trendy 2024**
   - Datum: 1. 3. 2024
   - Kategorie: Design
   - Excerpt: "Jaké design trendy dominují v roce 2024? Od minimalismu po tmavý režim - přinášíme přehled..."

**Každý článek:**
- Featured obrázek (placeholder)
- Kategorie badge
- Nadpis
- Datum
- Excerpt
- "Číst více" link

---

### 11. FAQ (`src/components/FAQ.tsx`)

**ID:** `id="faq"` (není v nav, ale má ID)

**Nadpis:** "Často kladené otázky"

**Použij Shadcn Accordion component s těmito otázkami:**

**Q:** Jak dlouho trvá vytvoření webu?
**A:** Jednoduché weby vytvoříme za 5-7 dní, složitější projekty do 2-3 týdnů. Přesný termín potvrdíme po konzultaci.

**Q:** Jaké technologie používáte?
**A:** Pracujeme s moderním stackem: React, TypeScript, Tailwind CSS, Node.js. Všechny naše weby jsou rychlé, bezpečné a snadno rozšiřitelné.

**Q:** Zahrnuje cena i hosting a doménu?
**A:** Hosting na první rok je zdarma ve všech balíčcích. Doménu můžeme zajistit nebo použít vaši stávající.

**Q:** Poskytujete i údržbu webu?
**A:** Ano, nabízíme údržbu od 990 Kč/měsíc. Zahrnuje aktualizace, monitoring, zálohy a technickou podporu.

**Q:** Co když nebudu spokojený s výsledkem?
**A:** Nabízíme 30-90 dní záruku vrácení peněz (podle balíčku) a neomezené revize během vývoje.

**Q:** Můžete pomoci s SEO?
**A:** Ano, základní SEO je součástí všech balíčků. Nabízíme i pokročilé SEO služby jako samostatný balíček.

---

### 12. CTASection (`src/components/CTASection.tsx`)

**Background:** `bg-gradient-primary` nebo `bg-primary`

**Obsah (centrovaný):**
```
Nadpis (velký, bold, white):
"Připraveni začít s vaším projektem?"

Text (white/primary-foreground):
"Kontaktujte nás ještě dnes a získejte nezávaznou cenovou nabídku do 24 hodin."

Tlačítko (bílé, variant který má tmavý text):
"Nezávazná poptávka" → scroll na #contact
```

**Styling:**
- Padding: `py-20`
- Text: `text-primary-foreground` nebo `text-white`
- Button: white bg s primary textem

---

### 13. Contact (`src/components/Contact.tsx`)

**ID:** `id="contact"`

**Nadpis:** "Kontaktujte nás"
**Perex:** "Máte dotaz nebo chcete nezávaznou poptávku? Napište nám!"

**Layout:** 2 sloupce (kontaktní info + formulář)

**Levá strana - Kontaktní údaje:**
- 📧 Email: info@weblyx.cz
- 📞 Telefon: +420 XXX XXX XXX
- 📍 Adresa: Praha, Česká republika
- 🕐 Pracovní doba: Po-Pá 9:00-18:00

**Pravá strana - Formulář:**
```
Pole:
- Jméno a příjmení (required)
- Email (required, type="email")
- Telefon (optional)
- Typ projektu (select):
  * Nový web
  * E-shop
  * Redesign stávajícího webu
  * SEO optimalizace
  * Jiné
- Zpráva (textarea, required)

Button: "Odeslat poptávku"
```

**Po odeslání:**
- Zobrazit toast notifikaci: "Děkujeme za zprávu! Ozveme se vám do 24 hodin."
- Formulář resetovat

**Použij Shadcn komponenty:**
- Form
- Input
- Select
- Textarea
- Button

---

### 14. Footer (`src/components/Footer.tsx`)

**Layout:** 4 sloupce na desktopu, 1 sloupec na mobilu

**Sloupec 1 - O firmě:**
- Logo (menší verze)
- Text: "Rychlé, moderní weby za férové ceny"
- Social media ikony (placeholder):
  * Facebook
  * Instagram
  * LinkedIn

**Sloupec 2 - Rychlé odkazy:**
- Služby → #services
- O nás → #about
- Portfolio → #portfolio
- Ceník → #pricing
- Blog → #blog
- Kontakt → #contact

**Sloupec 3 - Služby:**
- Webové stránky
- E-shopy
- SEO optimalizace
- Údržba & podpora

**Sloupec 4 - Kontakt:**
- info@weblyx.cz
- +420 XXX XXX XXX
- Praha, ČR

**Bottom bar:**
- Copyright: "© 2024 Weblyx. Všechna práva vyhrazena."
- Links: "Ochrana osobních údajů | Obchodní podmínky"

**Background:** `bg-card border-t border-border`

---

## 🎨 VARIANT HERO BUTTON

V `src/components/ui/button.tsx` přidej variantu `hero`:

```typescript
hero: "bg-background/10 text-foreground border border-border/20 hover:bg-background/20 backdrop-blur-sm",
```

---

## ⚡ ANIMACE

V `src/index.css` přidej fadeIn animaci:

```css
@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

Použij `animate-fade-in` na Hero sekci.

---

## 📦 DEPENDENCIES

Nainstaluj:
```bash
npm install lucide-react react-router-dom
```

Shadcn komponenty k instalaci:
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea select accordion badge
```

---

## 🖼️ OBRÁZKY - GENEROVÁNÍ

Vygeneruj tyto obrázky pomocí AI:

1. **weblyx-logo.png** (1024x1024px)
   - Prompt: "Modern minimalist logo for web agency called 'Weblyx', geometric W shape, turquoise color #00B4D8, clean professional design, vector style, white background"

2. **favicon.png** (512x512px)
   - Prompt: "Favicon icon, stylized letter W, turquoise color #00B4D8, simple geometric design, suitable for browser tab icon"

3. **hero-bg.jpg** (1920x1080px)
   - Prompt: "Abstract technology background with subtle geometric patterns, light blue and turquoise gradient, modern digital aesthetic, soft and professional, not too busy"

4. **Portfolio obrázky** (6x, každý 800x600px)
   - Generuj placeholder obrázky pro každý projekt s relevantní tématikou (eshop, fitness web, legal, construction, cafe, photography portfolio)

---

## 📱 RESPONSIVITA

Všechny sekce musí být plně responzivní:
- **Mobile:** 1 sloupec, padding px-4
- **Tablet:** 2 sloupce kde má smysl
- **Desktop:** 3-4 sloupce u grids

Breakpointy:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

---

## ✅ CHECKLIST PRO DOKONČENÍ

- [ ] Všechny komponenty vytvořeny a importovány v Index.tsx
- [ ] Design system (index.css) s přesnými HSL hodnotami
- [ ] Tailwind config s custom colors a gradienty
- [ ] Logo a favicon vygenerovány a umístěny
- [ ] Hero background vygenerován
- [ ] Všechny texty přesně podle specifikace
- [ ] Smooth scroll mezi sekcemi funguje
- [ ] Responzivní na všech zařízeních
- [ ] Všechny ikony z Lucide React
- [ ] CTA tlačítka scrollují na #contact
- [ ] Formulář s validací a toast notifikací
- [ ] Footer s funkčními linky

---

## 🎯 FINÁLNÍ VÝSLEDEK

Web musí být:
- ✅ Moderní a profesionální vzhled
- ✅ Plně responzivní (mobile-first)
- ✅ Rychlé načítání
- ✅ SEO friendly struktura (semantic HTML, heading hierarchy)
- ✅ Přístupnost (aria labels, alt texty)
- ✅ Smooth scroll animace
- ✅ Konzistentní design system
- ✅ Funkční navigace a formulář

---

**DŮLEŽITÉ:** Pokud některá část není jasná, zeptej se PŘED začátkem implementace. Cílem je vytvořit přesnou kopii webu s identickým designem, barvami a obsahem.
