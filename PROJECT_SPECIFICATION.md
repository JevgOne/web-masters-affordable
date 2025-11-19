# Kompletní Specifikace: Webová Agentura - Cloud.AI

## 1. Přehled Projektu

### 1.1 Popis Agentury
Moderní webová agentura zaměřená na tvorbu kvalitních webových stránek za konkurenceschopné ceny s využitím AI technologií pro zrychlení vývoje.

**Klíčové hodnoty:**
- **Rychlost**: Jednoduché weby za 5-7 dní
- **Cena**: Startovací cena 10 000 Kč
- **Kvalita**: Moderní technologie, SEO optimalizace, rychlé načítání
- **AI-powered workflow**: Využití AI pro efektivnější vývoj

### 1.2 Business Model
- Využití AI nástrojů pro zrychlení vývoje
- Detailní dotazník generuje specifikace pro AI analýzu
- Automatické generování cenových návrhů a projektových briefů
- Dodací lhůta 5-7 dní pro jednoduché weby
- Status: Nová agentura (bez referencí)

---

## 2. Technický Stack

### 2.1 Frontend
- **Framework**: React 18+ s TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3+ s custom design systemem
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Formuláře**: React Hook Form + Zod validace
- **Animace**: Tailwind CSS animate

### 2.2 Backend (Lovable Cloud / Supabase)
- **Database**: PostgreSQL
- **Auth**: Supabase Authentication (email/password)
- **Storage**: Supabase Storage pro obrázky
- **Edge Functions**: Deno-based serverless funkce
- **Real-time**: Supabase Realtime pro live updates

### 2.3 AI Integration
- **Lovable AI Gateway**: Pro AI-powered features
- **Model**: google/gemini-2.5-flash (default)
- **Use Cases**: 
  - Analýza dotazníků
  - Generování projektových specifikací
  - Cenové návrhy
  - Odpovědi na FAQ

---

## 3. Design System

### 3.1 Barevná Paleta (HSL)

```css
/* Light Theme */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 262 83% 58%;          /* Fialová #8b5cf6 */
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96.1%;
--secondary-foreground: 222.2 47.4% 11.2%;
--accent: 210 40% 96.1%;
--accent-foreground: 222.2 47.4% 11.2%;
--muted: 210 40% 96.1%;
--muted-foreground: 215.4 16.3% 46.9%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 210 40% 98%;
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 262 83% 58%;
--card: 0 0% 100%;
--card-foreground: 222.2 84% 4.9%;
--popover: 0 0% 100%;
--popover-foreground: 222.2 84% 4.9%;

/* Dark Theme */
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;
--primary: 263 70% 50%;
--primary-foreground: 210 40% 98%;
--secondary: 217.2 32.6% 17.5%;
--secondary-foreground: 210 40% 98%;
--accent: 217.2 32.6% 17.5%;
--accent-foreground: 210 40% 98%;
--muted: 217.2 32.6% 17.5%;
--muted-foreground: 215 20.2% 65.1%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 210 40% 98%;
--border: 217.2 32.6% 17.5%;
--input: 217.2 32.6% 17.5%;
--ring: 263 70% 50%;
--card: 222.2 84% 4.9%;
--card-foreground: 210 40% 98%;
--popover: 222.2 84% 4.9%;
--popover-foreground: 210 40% 98%;
```

### 3.2 Gradienty

```css
--gradient-primary: linear-gradient(135deg, hsl(262 83% 58%) 0%, hsl(262 83% 48%) 100%);
--gradient-secondary: linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%);
--gradient-hero: linear-gradient(135deg, hsl(262 83% 58% / 0.1) 0%, hsl(262 83% 48% / 0.05) 100%);
```

### 3.3 Shadows

```css
--shadow-elegant: 0 10px 30px -10px hsl(262 83% 58% / 0.3);
--shadow-glow: 0 0 40px hsl(262 83% 68% / 0.4);
--shadow-card: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
```

### 3.4 Typografie

- **Font Family**: System font stack (Inter doporučeno)
- **Headings**: 
  - H1: text-4xl md:text-5xl lg:text-6xl font-bold
  - H2: text-3xl md:text-4xl lg:text-5xl font-bold
  - H3: text-2xl md:text-3xl font-semibold
  - H4: text-xl md:text-2xl font-semibold
- **Body**: text-base md:text-lg
- **Small**: text-sm

### 3.5 Spacing
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Section padding: py-16 md:py-24 lg:py-32
- Gap: gap-4, gap-6, gap-8, gap-12

### 3.6 Border Radius
- Small: rounded-md (6px)
- Medium: rounded-lg (8px)
- Large: rounded-xl (12px)
- Full: rounded-full

### 3.7 Animations
```css
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
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
```

---

## 4. Struktura Stránek

### 4.1 Homepage (/)

**Sections:**

1. **Hero Section**
   - Hlavní nadpis: "Moderní weby za ceny, které vás překvapí"
   - Podnadpis: "Profesionální webové stránky od 10 000 Kč • Dodání za 5-7 dní • SEO optimalizace"
   - CTA: "Nezávazná poptávka" (scroll to contact)
   - Background: Gradient + grid pattern
   - Hero image/illustration vpravo

2. **Services Section**
   - Grid 3 sloupce (responsive)
   - Služby:
     - **Webové stránky**: Responzivní, moderní design
     - **SEO optimalizace**: Lepší pozice ve vyhledávačích
     - **E-shopy**: Kompletní řešení pro online prodej
     - **Redesign**: Modernizace starých webů
     - **Rychlost**: Optimalizace načítání
     - **Údržba**: Pravidelné aktualizace a podpora

3. **Stats Section**
   - 4 statistiky:
     - "5-7 dní" - Rychlé dodání
     - "100%" - Spokojenost
     - "< 2s" - Rychlost načtení
     - "10+" - Projektů dokončeno

4. **Process Section** 
   - Timeline/Steps:
     1. **Konzultace**: Nezávazná konzultace zdarma
     2. **Návrh**: Vytvoření návrhu designu
     3. **Vývoj**: Programování webu
     4. **Testování**: Kontrola funkčnosti
     5. **Spuštění**: Zveřejnění na internetu
     6. **Podpora**: Následná údržba

5. **Portfolio Section**
   - Grid 3 sloupce
   - Placeholder projekty (minimálně 6)
   - Každý projekt:
     - Screenshot
     - Název
     - Kategorie
     - Krátký popis
     - Technologie použité
   - CTA: "Zobrazit všechny projekty"

6. **Pricing Section**
   - 3 cenové balíčky:
     
     **Jednoduchý Web**
     - Od 10 000 Kč
     - 5-7 dní dodání
     - Až 5 podstránek
     - Responzivní design
     - Základní SEO
     - Kontaktní formulář
     - Google Analytics
     
     **Standardní Web**
     - Od 25 000 Kč
     - 10-14 dní dodání
     - Až 15 podstránek
     - Pokročilý design
     - Pokročilé SEO
     - Blog/aktuality
     - Animace
     - Galerie
     
     **E-shop / Premium**
     - Od 85 000 Kč
     - Individuální
     - Neomezený počet stránek
     - E-shop funkcionalita
     - Payment gateway
     - Administrace
     - Pokročilé funkce

7. **Testimonials Section**
   - ODSTRANIT nebo MINIMALIZOVAT (nová agentura bez referencí)
   - Alternativa: "Co očekávat od spolupráce s námi"

8. **FAQ Section**
   - Accordion komponenta
   - Otázky:
     - Jak dlouho trvá vytvoření webu?
     - Kolik stojí webové stránky?
     - Poskytujete i doménu a hosting?
     - Mohu si web spravovat sám?
     - Děláte i e-shopy?
     - Nabízíte následnou podporu?
     - Jaké technologie používáte?
     - Jak probíhá platba?

9. **CTA Section**
   - Heading: "Připraveni na nový web?"
   - Text: "Stačí vyplnit formulář a my se vám ozveme do 24 hodin"
   - Benefits:
     - "24h Odpověď na poptávku"
     - "0 Kč Poplatek za konzultaci"
     - "100% Bez závazků"
   - Button: "Začít projekt"

10. **Contact Section**
    - Formulář:
      - Jméno a příjmení
      - Email
      - Telefon
      - Typ projektu (select)
      - Rozpočet (select)
      - Zpráva (textarea)
    - Kontaktní informace:
      - Email
      - Telefon
      - Sociální sítě
    - Google Maps embed (volitelně)

11. **Footer**
    - Logo + popis
    - Rychlé odkazy:
      - O nás
      - Služby
      - Portfolio
      - Blog
      - Kontakt
    - Služby:
      - Webové stránky
      - E-shopy
      - SEO
      - Redesign
    - Právní:
      - Ochrana osobních údajů
      - Obchodní podmínky
    - Copyright
    - Social media icons

### 4.2 O nás (/o-nas)

**Sections:**

1. **Hero Section**
   - Nadpis: "Jsme moderní webová agentura"
   - Perex o agentuře

2. **Story Section**
   - Příběh založení
   - Důvod vzniku agentury
   - Mise a vize
   - Hodnoty

3. **Team Section** (volitelně)
   - Profil zakladatele
   - Foto
   - Zkušenosti
   - LinkedIn

4. **Why Choose Us**
   - Konkurenční výhody
   - Diferenciátory
   - Přístup k projektům

5. **Values Section**
   - Grid values (transparentnost, kvalita, rychlost, inovace)

6. **CTA**
   - "Pojďme spolupracovat"

### 4.3 Služby (/sluzby)

**Sections:**

1. **Hero Section**
   - Nadpis: "Naše služby"
   - Přehled služeb

2. **Services Detailed**
   - Každá služba vlastní sekce:
   
   **Tvorba webových stránek**
   - Popis
   - Co zahrnuje
   - Pro koho je vhodná
   - Cena od
   - CTA
   
   **E-shopy**
   - Popis
   - Funkce
   - Integrace
   - Cena od
   - CTA
   
   **SEO Optimalizace**
   - Co je SEO
   - Proč je důležité
   - Co děláme
   - Výsledky
   - CTA
   
   **Redesign**
   - Kdy redesign
   - Proces
   - Benefity
   - CTA
   
   **Údržba a podpora**
   - Co zahrnuje
   - Pravidelné aktualizace
   - Cena

3. **Process Overview**
   - Jak probíhá spolupráce

4. **Technologies**
   - Jaké technologie používáme
   - Proč tyto technologie

5. **CTA Section**

### 4.4 Portfolio (/portfolio)

**Sections:**

1. **Hero Section**
   - Nadpis: "Naše projekty"
   - Filter (Vše / Weby / E-shopy / Redesign)

2. **Portfolio Grid**
   - Grid layout (3 sloupce)
   - Každý projekt:
     - Screenshot/mockup
     - Název projektu
     - Kategorie
     - Krátký popis
     - Použité technologie
     - Odkaz na detail projektu
   - Minimálně 9-12 projektů

3. **Project Detail Modal/Page** (/portfolio/:slug)
   - Velký screenshot
   - Název projektu
   - Kategorie
   - Detailní popis
   - Zadání klienta
   - Naše řešení
   - Výsledky
   - Použité technologie
   - Odkaz na živý web (pokud je)
   - Další screenshoty
   - CTA: "Chcete podobný projekt?"

4. **CTA Section**

### 4.5 Blog (/blog)

**Sections:**

1. **Hero Section**
   - Nadpis: "Blog"
   - Perex: "Tipy, trendy a novinky ze světa webu"

2. **Blog Posts Grid**
   - Grid (2-3 sloupce)
   - Každý článek:
     - Featured image
     - Kategorie/tagy
     - Nadpis
     - Excerpt (úryvek)
     - Datum
     - Autor
     - Čas čtení
     - CTA: "Číst více"
   - Pagination/Load more

3. **Sidebar** (volitelně)
   - Kategorie
   - Nejnovější články
   - Populární články
   - Newsletter signup

4. **Blog Categories**
   - SEO
   - Web Design
   - Web Development
   - E-commerce
   - Marketing
   - Tipy a triky

**Návrhy článků (minimálně 10):**
1. "Jak vybrat správnou webovou agenturu v roce 2024"
2. "10 důvodů, proč potřebujete responzivní web"
3. "SEO základy: Jak dostat web na první stránku Google"
4. "Kolik stojí tvorba webových stránek v Česku?"
5. "Webové trendy 2024: Co je in a co out"
6. "Jak rychle by se měl web načítat?"
7. "E-shop vs. marketplace: Co je lepší pro můj byznys?"
8. "GDPR a webové stránky: Co musíte vědět"
9. "Jak psát texty pro web, které prodávají"
10. "WordPress vs. custom web: Výhody a nevýhody"

### 4.6 Blog Post Detail (/blog/:slug)

**Sections:**

1. **Hero Section**
   - Featured image (wide)
   - Breadcrumbs
   - Kategorie/tagy
   - Nadpis článku
   - Meta (datum, autor, čas čtení)

2. **Content**
   - Obsah článku (rich text)
   - Headings structure (H2, H3)
   - Obrázky s captions
   - Code blocks (pokud relevantní)
   - Pull quotes
   - Lists
   - CTA boxes v článku

3. **Author Box**
   - Foto autora
   - Bio
   - Social links

4. **Related Posts**
   - 3 související články

5. **Comments** (volitelně)
   - Komentáře pod článkem

6. **CTA Section**
   - "Potřebujete pomoc s webem?"

### 4.7 Kontakt (/kontakt)

**Sections:**

1. **Hero Section**
   - Nadpis: "Spojte se s námi"
   - Perex

2. **Contact Form**
   - Větší, detailnější formulář než na homepage
   - Pole:
     - Jméno a příjmení*
     - Email*
     - Telefon*
     - Společnost
     - Typ projektu* (select)
     - URL současného webu
     - Rozpočet* (select)
     - Termín spuštění (select)
     - Detailní popis projektu* (textarea)
     - Soubory (upload)
   - GDPR souhlas*
   - Submit button

3. **Contact Info**
   - Email
   - Telefon
   - Adresa (pokud je)
   - Otevírací doba
   - Social media

4. **Map**
   - Google Maps embed (pokud je adresa)

5. **FAQ Mini**
   - 3-4 nejčastější otázky

### 4.8 Ochrana osobních údajů (/ochrana-udaju)

**Content:**
- Úvod
- Správce osobních údajů
- Jaké údaje sbíráme
- Účel zpracování
- Právní základ
- Doba uchování
- Zabezpečení
- Vaše práva
- Cookies
- Kontakt na DPO
- Změny

### 4.9 Obchodní podmínky (/obchodni-podminky)

**Content:**
- Základní ustanovení
- Vymezení pojmů
- Objednávka a uzavření smlouvy
- Cena a platební podmínky
- Průběh realizace
- Práva a povinnosti stran
- Reklamace
- Odpovědnost za vady
- Autorská práva
- Ochrana osobních údajů
- Závěrečná ustanovení

### 4.10 404 Error Page

**Content:**
- Nadpis: "Stránka nenalezena"
- Text: "Omlouváme se, ale stránka, kterou hledáte, neexistuje."
- Search box (volitelně)
- Odkazy:
  - Domů
  - Služby
  - Portfolio
  - Kontakt

---

## 5. Komponenty

### 5.1 Navigace

**Header/Navbar:**
- Logo (vlevo)
- Menu (střed/vpravo):
  - Služby
  - Portfolio
  - Blog
  - O nás
  - Kontakt
- CTA button: "Nezávazná poptávka" (primary button)
- Mobile hamburger menu
- Sticky/fixed na scroll
- Transparentní s glassmorphism nebo plná

**Mobile Menu:**
- Slide-in z pravo/levé strany
- Overlay
- Stejné položky jako desktop
- Social icons v patičce menu

### 5.2 UI Komponenty (shadcn/ui)

**Používané komponenty:**
- Button (variants: default, outline, ghost, link, hero)
- Card
- Form (Input, Textarea, Select, Checkbox)
- Accordion
- Dialog/Modal
- Tabs
- Badge
- Avatar
- Separator
- Tooltip
- Dropdown Menu
- Toast/Sonner (notifications)
- Carousel
- Sheet (mobile menu)

### 5.3 Custom Komponenty

**NavLink:**
```tsx
// Komponenta pro aktivní stav v navigaci
<NavLink to="/sluzby" activeClassName="text-primary font-semibold">
  Služby
</NavLink>
```

**ServiceCard:**
- Icon
- Title
- Description
- CTA link

**PortfolioCard:**
- Image
- Category badge
- Title
- Description
- Technologies
- CTA link

**PricingCard:**
- Badge (popular)
- Title
- Price
- Features list (checked/unchecked)
- CTA button

**TestimonialCard:**
- Quote
- Author name
- Author position/company
- Avatar
- Rating (stars)

**BlogCard:**
- Featured image
- Category badge
- Title
- Excerpt
- Meta (date, author, reading time)
- CTA link

**ProcessStep:**
- Number/icon
- Title
- Description
- Connector line

**StatCard:**
- Icon
- Value (number)
- Label
- Description

**CTASection:**
- Reusable CTA component
- Props: title, description, buttonText, buttonLink

---

## 6. SEO Optimalizace

### 6.1 Meta Tags (každá stránka)

```html
<!-- Basic Meta -->
<title>Tvorba webů od 10 000 Kč | Dodání za 5-7 dní | [Název Agentury]</title>
<meta name="description" content="Profesionální webové stránky za skvělé ceny. Dodání za 5-7 dní. Moderní design, SEO optimalizace a rychlé načítání. Nezávazná konzultace zdarma.">
<meta name="keywords" content="tvorba webů, levné weby, webové stránky, e-shop, SEO, redesign, webová agentura">
<meta name="author" content="[Název Agentury]">
<meta name="robots" content="index, follow">
<link rel="canonical" href="[URL stránky]">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="[OG image URL]">
<meta property="og:url" content="[URL]">
<meta property="og:site_name" content="[Název]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="[Image URL]">
```

### 6.2 Structured Data (JSON-LD)

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[Název Agentury]",
  "description": "...",
  "url": "https://...",
  "telephone": "+420...",
  "email": "info@...",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CZ"
  },
  "priceRange": "10000 CZK - 100000 CZK",
  "areaServed": "CZ",
  "serviceType": ["Web Development", "SEO", "E-commerce"]
}
```

**Blog Post:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "...",
  "image": "...",
  "datePublished": "...",
  "dateModified": "...",
  "author": {
    "@type": "Person",
    "name": "..."
  },
  "publisher": {
    "@type": "Organization",
    "name": "[Název Agentury]",
    "logo": {
      "@type": "ImageObject",
      "url": "..."
    }
  },
  "description": "..."
}
```

**FAQ:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jak dlouho trvá vytvoření webu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jednoduché webové stránky dodáme za 5-7 dní..."
      }
    }
  ]
}
```

### 6.3 SEO Best Practices

**On-Page SEO:**
- Jeden H1 per page (obsahuje main keyword)
- Hierarchie headings (H1 → H2 → H3)
- Meta description max 160 znaků
- Title max 60 znaků
- Alt text na všech obrázcích
- Internal linking
- External links (rel="noopener")
- Clean URL struktura (/sluzby, /blog/nazev-clanku)
- Breadcrumbs
- Sitemap.xml
- Robots.txt

**Technical SEO:**
- Mobile-first responsive design
- Page speed optimization (<2s load time)
- Core Web Vitals optimization
- HTTPS
- Lazy loading images
- Image optimization (WebP format)
- Minified CSS/JS
- Semantic HTML5
- Accessibility (ARIA labels, keyboard navigation)

**Content SEO:**
- Keyword research pro každou stránku
- Long-form content (1000+ slov pro blog)
- Unique content
- Regular updates (blog 2-4x měsíčně)

---

## 7. Detailní Dotazník (Questionnaire)

### 7.1 Účel
Inteligentní multi-step formulář pro sběr detailních informací o projektu klienta. Výstup z dotazníku se použije pro:
- AI analýzu a generování projektové specifikace
- Automatické vytvoření cenové nabídky
- Definici scope projektu

### 7.2 Struktura Dotazníku (Multi-Step Wizard)

**Step 1: Základní informace**
- Typ projektu* (radio)
  - [ ] Nový web
  - [ ] Redesign existujícího webu
  - [ ] E-shop
  - [ ] Landing page
  - [ ] Blog/magazín
  - [ ] Jiné
- O vaší firmě/projektu* (textarea)
  - Co děláte?
  - Jaké produkty/služby nabízíte?
- Cílová skupina* (textarea)
  - Pro koho je web určen?
  - B2B / B2C?

**Step 2: Rozsah projektu**
- Počet podstránek* (select)
  - [ ] 1-5 stránek
  - [ ] 6-10 stránek
  - [ ] 11-20 stránek
  - [ ] 20+ stránek
  - [ ] Nevím
- Jazyčné mutace (checkbox multiple)
  - [ ] Čeština
  - [ ] Angličtina
  - [ ] Němčina
  - [ ] Jiné: ______
- Máte připravený obsah? (radio)
  - [ ] Ano, vše připraveno
  - [ ] Částečně
  - [ ] Ne, potřebuji pomoc s copywritingem
  - [ ] Ne, vytvořím si obsah sám

**Step 3: Funkcionality** (checkbox multiple)
- [ ] Kontaktní formulář
- [ ] Newsletter
- [ ] Blog/aktuality
- [ ] Galerie obrázků
- [ ] Video galerie
- [ ] Mapa Google Maps
- [ ] Vyhledávání
- [ ] Filtrování obsahu
- [ ] Rezervační systém
- [ ] Kalkulačka
- [ ] Interaktivní prvky
- [ ] Chat/chatbot
- [ ] Propojení se sociálními sítěmi
- [ ] API integrace (jaké?) ______
- [ ] Jiné: ______

**Step 4: E-shop specifika** (pokud E-shop)
- Počet produktů (select)
  - [ ] 1-50
  - [ ] 51-200
  - [ ] 201-500
  - [ ] 500+
- Platební brána* (checkbox multiple)
  - [ ] GoPay
  - [ ] Stripe
  - [ ] PayPal
  - [ ] Dobírka
  - [ ] Bankovní převod
  - [ ] Jiné: ______
- Doprava (checkbox multiple)
  - [ ] Česká pošta
  - [ ] PPL
  - [ ] DPD
  - [ ] Zásilkovna
  - [ ] Osobní odběr
  - [ ] Jiné: ______
- Potřebujete sklad a sklady? (radio)
  - [ ] Ano
  - [ ] Ne
- Variace produktů? (checkbox)
  - [ ] Velikosti
  - [ ] Barvy
  - [ ] Jiné varianty

**Step 5: Design a branding**
- Máte logo? (radio)
  - [ ] Ano (upload)
  - [ ] Ne, potřebuji vytvořit
  - [ ] Ne, vytvořím si sám později
- Máte brand manuál/firemní identitu? (radio)
  - [ ] Ano (upload)
  - [ ] Ne
- Preferované barvy (color pickers)
  - Primární barva: [color picker]
  - Sekundární barva: [color picker]
- Design style preference (radio)
  - [ ] Moderní/minimalistický
  - [ ] Korporátní/profesionální
  - [ ] Kreativní/odvážný
  - [ ] Elegantní/luxusní
  - [ ] Playful/zábavný
  - [ ] Nevím, poraďte
- Inspirace (textarea)
  - Máte nějaké webové stránky, které se vám líbí?
  - URLs: ______

**Step 6: SEO a marketing**
- Potřebujete SEO optimalizaci? (radio)
  - [ ] Ano, základní SEO
  - [ ] Ano, pokročilé SEO
  - [ ] Ne
  - [ ] Nevím
- Klíčová slova (textarea)
  - Pro jaká slova chcete být nalezeni?
- Google Analytics / měření konverzí? (checkbox)
  - [ ] Google Analytics
  - [ ] Google Tag Manager
  - [ ] Facebook Pixel
  - [ ] Jiné: ______
- Potřebujete obsahový marketing? (radio)
  - [ ] Ano
  - [ ] Ne
  - [ ] Možná, více informací

**Step 7: Technické požadavky**
- Máte doménu? (radio)
  - [ ] Ano: ______
  - [ ] Ne, potřebuji koupit
  - [ ] Ne, koupím si sám
- Máte hosting? (radio)
  - [ ] Ano
  - [ ] Ne, potřebuji zařídit
  - [ ] Ne, zařídím si sám
- Administrace webu (radio)
  - [ ] Chci si web spravovat sám (CMS)
  - [ ] Nechci, spravujte vše vy
  - [ ] Nevím
- Integrace s existujícími systémy? (textarea)
  - CRM, ERP, účetní systém, etc.?

**Step 8: Časová osa a rozpočet**
- Kdy potřebujete web spustit?* (radio)
  - [ ] Co nejdříve
  - [ ] Do 1 měsíce
  - [ ] 1-3 měsíce
  - [ ] 3-6 měsíců
  - [ ] Není spěch
- Váš rozpočet* (select)
  - [ ] 10 000 - 20 000 Kč
  - [ ] 20 000 - 50 000 Kč
  - [ ] 50 000 - 100 000 Kč
  - [ ] 100 000 - 200 000 Kč
  - [ ] 200 000+ Kč
  - [ ] Nevím / flexibilní

**Step 9: Kontaktní údaje**
- Jméno a příjmení* (input)
- Email* (email input)
- Telefon* (tel input)
- Společnost (input)
- Zpráva / Poznámka (textarea)
- GDPR souhlas* (checkbox)
  - [ ] Souhlasím se zpracováním osobních údajů

**Step 10: Shrnutí**
- Přehled všech vyplněných informací
- Možnost vrátit se zpět a upravit
- Final CTA: "Odeslat poptávku"

### 7.3 UX Dotazníku
- Progress bar (10 kroků)
- Tlačítka: "Zpět" a "Pokračovat"
- Auto-save do local storage
- Conditional logic (e-shop step se zobrazí jen když vybrán e-shop)
- Validace na každém kroku
- Mobile-friendly
- Animace přechodů mezi kroky
- Možnost uložit a dokončit později (email link)

### 7.4 Po odeslání
- Potvrzovací stránka
- Email klientovi s potvrzením
- Email agentuře s kompletními daty
- Přesměrování na "Děkujeme" page
- CTA: "Co se stane dále?"

### 7.5 Databázová struktura

**Tabulka: inquiries**
```sql
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Step 1
  project_type TEXT,
  company_description TEXT,
  target_audience TEXT,
  
  -- Step 2
  page_count TEXT,
  languages TEXT[],
  content_ready TEXT,
  
  -- Step 3
  features TEXT[],
  
  -- Step 4 (E-shop)
  product_count TEXT,
  payment_gateways TEXT[],
  shipping_methods TEXT[],
  needs_inventory BOOLEAN,
  product_variations TEXT[],
  
  -- Step 5
  has_logo BOOLEAN,
  logo_url TEXT,
  has_brand_manual BOOLEAN,
  brand_manual_url TEXT,
  primary_color TEXT,
  secondary_color TEXT,
  design_style TEXT,
  inspiration_urls TEXT[],
  
  -- Step 6
  seo_level TEXT,
  keywords TEXT[],
  tracking_tools TEXT[],
  needs_content_marketing BOOLEAN,
  
  -- Step 7
  has_domain BOOLEAN,
  domain_name TEXT,
  has_hosting BOOLEAN,
  cms_required BOOLEAN,
  system_integrations TEXT,
  
  -- Step 8
  deadline TEXT,
  budget_range TEXT,
  
  -- Step 9
  contact_name TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  company_name TEXT,
  message TEXT,
  gdpr_consent BOOLEAN,
  
  -- Status
  status TEXT DEFAULT 'new', -- new, reviewed, quoted, won, lost
  assigned_to UUID REFERENCES auth.users(id),
  notes TEXT
);
```

---

## 8. Admin Panel

### 8.1 Přístup
- URL: `/admin` nebo `/dashboard`
- Autentizace: Email + heslo (Supabase Auth)
- Role-Based Access Control (pokud více uživatelů):
  - Admin (full access)
  - Manager (view + edit)
  - Viewer (read only)

### 8.2 Admin Dashboard (Overview)

**Sections:**

1. **Stats Cards** (top)
   - Nové poptávky (tento týden)
   - Aktivní projekty
   - Dokončené projekty (tento měsíc)
   - Celkový obrat (tento měsíc)

2. **Quick Actions**
   - Nová poptávka (ruční)
   - Nový projekt
   - Odeslat email

3. **Recent Inquiries** (tabulka)
   - Sloupce: Datum, Jméno, Email, Typ projektu, Rozpočet, Status, Akce
   - Actions: View detail, Send quote, Archive

4. **Calendar Widget**
   - Projekty s deadliny
   - Meeting/konzultace

5. **Charts**
   - Příchozí poptávky (time series)
   - Projekty podle statusu (pie chart)
   - Revenue (bar chart)

### 8.3 Správa Poptávek (Inquiries)

**List View:**
- Tabulka všech poptávek
- Filtry:
  - Status (new, in review, quoted, won, lost)
  - Typ projektu
  - Rozpočet
  - Datum (od-do)
- Search (jméno, email, společnost)
- Bulk actions (označit jako reviewed, delete)
- Export do CSV/Excel

**Detail View:**
- Všechny informace z dotazníku
- Timeline/historie změn
- Notes (internal)
- Assign to user
- Change status
- Send quote button
- Convert to project button
- Email komunikace

**Actions:**
- Send quote (generovat nabídku)
- Email klientovi
- Convert to project
- Archive
- Delete

### 8.4 Správa Projektů (Projects)

**Tabulka: projects**
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inquiry_id UUID REFERENCES inquiries(id),
  created_at TIMESTAMP DEFAULT NOW(),
  
  -- Basic info
  project_name TEXT,
  client_name TEXT,
  client_email TEXT,
  client_phone TEXT,
  company_name TEXT,
  
  -- Project details
  project_type TEXT,
  description TEXT,
  scope TEXT,
  
  -- Financial
  quoted_price DECIMAL(10,2),
  final_price DECIMAL(10,2),
  paid_amount DECIMAL(10,2),
  currency TEXT DEFAULT 'CZK',
  
  -- Timeline
  start_date DATE,
  deadline DATE,
  completed_date DATE,
  
  -- Status
  status TEXT DEFAULT 'unpaid', 
  -- unpaid, awaiting_invoice, in_progress, delivered, warranty, completed, cancelled
  
  -- Assignment
  assigned_to UUID REFERENCES auth.users(id),
  
  -- Files
  files JSONB[], -- [{name, url, type}]
  
  -- Communication rating
  communication_rating INTEGER, -- 1-5 stars
  communication_notes TEXT,
  
  -- Warranty period
  warranty_until DATE,
  
  -- Notes
  notes TEXT
);
```

**Kanban Board View:**
- Columns:
  1. Unpaid (čeká na platbu)
  2. Awaiting Invoice (čeká na fakturu)
  3. In Progress (zaplaceno, vývoj)
  4. Delivered (hotovo, záruční doba)
  5. Completed (ukončeno)
  6. Cancelled
- Drag & drop mezi sloupci
- Card preview: název, klient, deadline, priorita

**List View:**
- Tabulka projektů
- Filtry: status, assigned to, deadline, typ projektu
- Search
- Sort

**Detail View:**
- Všechny informace o projektu
- Timeline událostí
- Todo list (checklist)
- Komunikace s klientem
- Soubory (upload/download)
- Notes
- Change status
- Edit project
- Invoice history

**Todo List pro projekt:**
```sql
CREATE TABLE project_todos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  task TEXT,
  completed BOOLEAN DEFAULT FALSE,
  due_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);
```

### 8.5 Email Management

**Integrace:**
- Gmail API nebo
- SendGrid / Mailgun
- Email templates

**Funkce:**
- Inbox (příchozí)
- Sent (odeslané)
- Drafts
- Compose new email
- Email templates:
  - Potvrzení poptávky
  - Cenová nabídka
  - Faktura
  - Připomenutí platby
  - Projekt dokončen
  - Follow-up
- Tag emails s projektem/poptávkou
- Search
- Mark as read/unread
- Archive

### 8.6 Kalendář

**Funkce:**
- Zobrazení všech deadlinů projektů
- Konzultace / meetingy
- Připomenutí
- Integrace s Google Calendar (volitelně)
- Views: Měsíc, Týden, Den
- Create event
- Edit event
- Color coding podle typu události

**Tabulka: calendar_events**
```sql
CREATE TABLE calendar_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT,
  description TEXT,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  all_day BOOLEAN DEFAULT FALSE,
  event_type TEXT, -- deadline, meeting, reminder
  related_project_id UUID REFERENCES projects(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 8.7 Analytics & Reports

**Metriky:**
- Počet poptávek (time series)
- Conversion rate (poptávky → projekty)
- Průměrná hodnota projektu
- Celkový obrat
- Projekty podle statusu
- Projekty podle typu
- Průměrná doba dokončení projektu
- Client communication rating
- Top zdroje poptávek (pokud tracking)

**Exporty:**
- CSV, PDF
- Date range filter
- Custom reports

### 8.8 Nastavení (Settings)

**Sections:**

1. **Company Settings**
   - Název agentury
   - Logo
   - Kontaktní údaje
   - IČO, DIČ
   - Bankovní údaje

2. **Email Settings**
   - SMTP / API credentials
   - Email templates
   - Signature

3. **User Management**
   - Seznam uživatelů
   - Add/remove users
   - Role assignment
   - Permissions

4. **Project Settings**
   - Default project statuses
   - Custom fields
   - Todo templates

5. **Notifications**
   - Email notifikace (nová poptávka, změna statusu)
   - In-app notifications

6. **Integrations**
   - Google Analytics
   - Google Calendar
   - CRM (Pipedrive, HubSpot)
   - Accounting software (Fakturoid)

### 8.9 Database RLS Policies

**Row Level Security:**
```sql
-- Inquiries: only authenticated users can access
CREATE POLICY "Authenticated users can view inquiries"
  ON inquiries FOR SELECT
  USING (auth.role() = 'authenticated');

-- Projects: only assigned user or admin can edit
CREATE POLICY "Users can edit assigned projects"
  ON projects FOR UPDATE
  USING (
    assigned_to = auth.uid() OR 
    auth.jwt() ->> 'role' = 'admin'
  );

-- Similar policies for todos, calendar_events, etc.
```

---

## 9. AI Features (Lovable AI)

### 9.1 Use Cases

**1. Generování projektové specifikace z dotazníku**
- Input: Data z dotazníku (JSON)
- Output: Strukturovaná projektová specifikace
- Model: google/gemini-2.5-flash

**Edge Function: `generate-project-spec`**
```typescript
// Pseudo-code
const spec = await callLovableAI({
  model: "google/gemini-2.5-flash",
  messages: [
    {
      role: "system",
      content: "You are a project manager. Generate detailed project specification based on client inquiry."
    },
    {
      role: "user",
      content: `Client inquiry data: ${JSON.stringify(inquiryData)}`
    }
  ],
  tools: [
    {
      type: "function",
      function: {
        name: "generate_spec",
        parameters: {
          type: "object",
          properties: {
            project_name: { type: "string" },
            scope: { type: "string" },
            features: { type: "array", items: { type: "string" } },
            timeline_estimate: { type: "string" },
            recommendations: { type: "string" }
          }
        }
      }
    }
  ]
});
```

**2. Cenová analýza a nabídka**
- Input: Projektová specifikace
- Output: Strukturovaná cenová nabídka
- Model: google/gemini-2.5-flash

**3. Odpovědi na FAQ (chatbot na webu)**
- Streaming chat
- Model: google/gemini-2.5-flash
- System prompt: Znalost služeb agentury, cen, procesů

**4. Email draft assistance**
- Input: Kontext projektu + typ emailu
- Output: Návrh textu emailu
- Model: google/gemini-2.5-flash

**5. Blog content ideas**
- Input: Téma, keywords
- Output: Návrhy článků, outliny
- Model: google/gemini-2.5-flash

### 9.2 Implementation

**Supabase Edge Functions:**
- `generate-project-spec`
- `generate-quote`
- `chat` (FAQ chatbot)
- `email-assistant`
- `blog-ideas`

**Frontend:**
- Streaming chat komponenta pro FAQ
- Admin dashboard integrace pro AI features
- Error handling (429, 402)

---

## 10. Technická Implementace

### 10.1 Project Structure

```
/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   ├── og-image.jpg
│   │   └── ...
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Contact.tsx
│   │   ├── questionnaire/
│   │   │   ├── QuestionnaireWizard.tsx
│   │   │   ├── Step1.tsx
│   │   │   ├── Step2.tsx
│   │   │   └── ...
│   │   ├── admin/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── InquiriesList.tsx
│   │   │   ├── InquiryDetail.tsx
│   │   │   ├── ProjectsKanban.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   ├── Calendar.tsx
│   │   │   ├── EmailInbox.tsx
│   │   │   ├── Analytics.tsx
│   │   │   └── Settings.tsx
│   │   ├── blog/
│   │   │   ├── BlogGrid.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   └── BlogSidebar.tsx
│   │   ├── ui/ (shadcn components)
│   │   └── ...
│   ├── pages/
│   │   ├── Index.tsx (homepage)
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── PortfolioDetail.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Contact.tsx
│   │   ├── Questionnaire.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── Terms.tsx
│   │   ├── NotFound.tsx
│   │   └── admin/
│   │       ├── Dashboard.tsx
│   │       ├── Login.tsx
│   │       ├── Inquiries.tsx
│   │       ├── Projects.tsx
│   │       └── ...
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useInquiries.ts
│   │   ├── useProjects.ts
│   │   └── ...
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── types/
│   │   ├── inquiry.ts
│   │   ├── project.ts
│   │   └── ...
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── supabase/
│   ├── functions/
│   │   ├── generate-project-spec/
│   │   ├── generate-quote/
│   │   ├── chat/
│   │   └── ...
│   ├── migrations/
│   │   ├── 001_create_inquiries.sql
│   │   ├── 002_create_projects.sql
│   │   └── ...
│   └── config.toml
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### 10.2 Routing (React Router)

```tsx
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Index />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/sluzby" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/poptavka" element={<Questionnaire />} />
        <Route path="/ochrana-udaju" element={<PrivacyPolicy />} />
        <Route path="/obchodni-podminky" element={<Terms />} />
        
        {/* Admin routes (protected) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="inquiries" element={<AdminInquiries />} />
          <Route path="inquiries/:id" element={<AdminInquiryDetail />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/:id" element={<AdminProjectDetail />} />
          <Route path="calendar" element={<AdminCalendar />} />
          <Route path="emails" element={<AdminEmails />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 10.3 Supabase Schema (SQL)

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Inquiries table
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Step 1
  project_type TEXT,
  company_description TEXT,
  target_audience TEXT,
  
  -- Step 2
  page_count TEXT,
  languages TEXT[],
  content_ready TEXT,
  
  -- Step 3
  features TEXT[],
  
  -- Step 4 (E-shop)
  product_count TEXT,
  payment_gateways TEXT[],
  shipping_methods TEXT[],
  needs_inventory BOOLEAN,
  product_variations TEXT[],
  
  -- Step 5 (Design)
  has_logo BOOLEAN,
  logo_url TEXT,
  has_brand_manual BOOLEAN,
  brand_manual_url TEXT,
  primary_color TEXT,
  secondary_color TEXT,
  design_style TEXT,
  inspiration_urls TEXT[],
  
  -- Step 6 (SEO)
  seo_level TEXT,
  keywords TEXT[],
  tracking_tools TEXT[],
  needs_content_marketing BOOLEAN,
  
  -- Step 7 (Technical)
  has_domain BOOLEAN,
  domain_name TEXT,
  has_hosting BOOLEAN,
  cms_required BOOLEAN,
  system_integrations TEXT,
  
  -- Step 8 (Timeline & Budget)
  deadline TEXT,
  budget_range TEXT,
  
  -- Step 9 (Contact)
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  company_name TEXT,
  message TEXT,
  gdpr_consent BOOLEAN NOT NULL DEFAULT FALSE,
  
  -- Status tracking
  status TEXT DEFAULT 'new', -- new, reviewed, quoted, won, lost, archived
  assigned_to UUID REFERENCES auth.users(id),
  internal_notes TEXT,
  
  -- AI Generated
  ai_project_spec JSONB,
  ai_quote JSONB
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  inquiry_id UUID REFERENCES inquiries(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Basic info
  project_name TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT,
  company_name TEXT,
  
  -- Project details
  project_type TEXT,
  description TEXT,
  scope TEXT,
  
  -- Financial
  quoted_price DECIMAL(10,2),
  final_price DECIMAL(10,2),
  paid_amount DECIMAL(10,2) DEFAULT 0,
  currency TEXT DEFAULT 'CZK',
  
  -- Timeline
  start_date DATE,
  deadline DATE,
  completed_date DATE,
  
  -- Status
  status TEXT DEFAULT 'unpaid',
  -- unpaid, awaiting_invoice, in_progress, delivered, warranty, completed, cancelled
  
  -- Assignment
  assigned_to UUID REFERENCES auth.users(id),
  
  -- Files
  files JSONB DEFAULT '[]',
  
  -- Communication
  communication_rating INTEGER CHECK (communication_rating >= 1 AND communication_rating <= 5),
  communication_notes TEXT,
  
  -- Warranty
  warranty_until DATE,
  
  -- Notes
  internal_notes TEXT,
  client_notes TEXT
);

-- Project todos
CREATE TABLE project_todos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  task TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  due_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_by UUID REFERENCES auth.users(id)
);

-- Calendar events
CREATE TABLE calendar_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  all_day BOOLEAN DEFAULT FALSE,
  event_type TEXT NOT NULL, -- deadline, meeting, reminder, other
  related_project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- Blog posts
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users(id),
  category TEXT,
  tags TEXT[],
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  views INTEGER DEFAULT 0,
  reading_time INTEGER -- in minutes
);

-- Portfolio projects
CREATE TABLE portfolio_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  detailed_description TEXT,
  client_brief TEXT,
  our_solution TEXT,
  results TEXT,
  featured_image TEXT,
  images TEXT[],
  technologies TEXT[],
  live_url TEXT,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_todos ENABLE ROW LEVEL SECURITY;
ALTER TABLE calendar_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;

-- Inquiries: authenticated users only
CREATE POLICY "Authenticated users can view inquiries"
  ON inquiries FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert inquiries"
  ON inquiries FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update inquiries"
  ON inquiries FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Projects: authenticated users only
CREATE POLICY "Authenticated users can view projects"
  ON projects FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Todos: authenticated users only
CREATE POLICY "Authenticated users can manage todos"
  ON project_todos FOR ALL
  USING (auth.role() = 'authenticated');

-- Calendar: authenticated users only
CREATE POLICY "Authenticated users can manage calendar"
  ON calendar_events FOR ALL
  USING (auth.role() = 'authenticated');

-- Blog: public read, authenticated write
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = TRUE OR auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts FOR ALL
  USING (auth.role() = 'authenticated');

-- Portfolio: public read, authenticated write
CREATE POLICY "Anyone can view published portfolio"
  ON portfolio_projects FOR SELECT
  USING (published = TRUE OR auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage portfolio"
  ON portfolio_projects FOR ALL
  USING (auth.role() = 'authenticated');

-- Indexes for performance
CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_deadline ON projects(deadline);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_portfolio_published ON portfolio_projects(published);

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_inquiries_updated_at BEFORE UPDATE ON inquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_portfolio_updated_at BEFORE UPDATE ON portfolio_projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### 10.4 Environment Variables

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key

# Lovable AI (auto-provisioned in Supabase)
LOVABLE_API_KEY=auto-generated-key

# Optional
VITE_SITE_URL=https://yourdomain.com
VITE_GTM_ID=GTM-XXXXXXX
```

### 10.5 Deployment Checklist

**Pre-launch:**
- [ ] All pages created and tested
- [ ] SEO meta tags on all pages
- [ ] Structured data implemented
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] 404 page functional
- [ ] Mobile responsive tested
- [ ] Forms working and saving to DB
- [ ] Email notifications working
- [ ] Admin panel functional
- [ ] Authentication working
- [ ] Database RLS policies tested
- [ ] Images optimized
- [ ] Performance: Lighthouse score > 90
- [ ] Accessibility: WCAG AA compliant
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] SSL certificate
- [ ] Google Analytics connected
- [ ] Google Search Console verified

**Post-launch:**
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor error logs
- [ ] Setup uptime monitoring
- [ ] Backup database regularly
- [ ] Monitor performance
- [ ] Start blogging (2-4x/měsíc)

---

## 11. Content Guidelines

### 11.1 Tone of Voice
- **Professional** ale ne korporátní
- **Přátelský** a přístupný
- **Jasný** a srozumitelný (i pro netechnické klienty)
- **Důvěryhodný** (podpořený daty, ne prázdnými sliby)
- **Motivující** (call-to-action bez agresivity)

### 11.2 Copywriting Principy
- **Benefit-driven**: Zaměření na hodnotu pro klienta, ne jen features
- **Konkrétní**: "5-7 dní" místo "rychle"
- **Čitelnost**: Krátké věty, odstavce, bullet points
- **SEO-friendly**: Přirozené začlenění keywords
- **Social proof**: Kde možné (omezené kvůli chybějícím referencím)

### 11.3 Required Content

**Homepage:**
- Hero: ~30 slov
- Services: 6 služeb × ~50 slov
- Process: 6 kroků × ~40 slov
- Pricing: 3 balíčky s detaily
- FAQ: 8-10 otázek × ~100 slov odpovědi

**O nás:**
- Příběh: ~300 slov
- Hodnoty: 4 hodnoty × ~80 slov
- Profil zakladatele: ~200 slov

**Služby:**
- Každá služba: ~400 slov
- Celkem: ~2000 slov

**Blog:**
- Minimálně 10 článků
- Každý článek: 1000-2000 slov
- Publikovat 2-4× měsíčně

**Portfolio:**
- Minimálně 9 projektů
- Každý projekt: ~300 slov (detail)

### 11.4 Keyword Strategy

**Primary keywords:**
- tvorba webů
- webové stránky
- levné weby
- tvorba e-shopu
- webová agentura

**Secondary keywords:**
- profesionální webové stránky
- tvorba webových stránek Praha
- moderní web
- responzivní web
- SEO optimalizace
- redesign webu

**Long-tail keywords:**
- kolik stojí tvorba webu
- jak dlouho trvá vytvoření webu
- nejlepší webová agentura
- levné weby pro malé firmy
- tvorba e-shopu cena

---

## 12. Priority Implementace

### Phase 1: MVP (Core Website)
**Týden 1-2:**
1. ✅ Design system setup
2. ✅ Homepage (všechny sekce)
3. ✅ Základní navigace
4. ✅ Footer
5. ✅ Kontaktní formulář (bez DB)
6. ✅ 404 stránka
7. ✅ Responzivita

### Phase 2: Expanded Website
**Týden 3:**
1. ✅ O nás stránka
2. ✅ Služby stránka (detailní)
3. ✅ Portfolio stránka + detail
4. ✅ Blog layout + grid
5. ✅ Blog post template
6. ✅ Privacy policy & Terms

### Phase 3: Backend + Questionnaire
**Týden 4:**
1. 🔲 Lovable Cloud aktivace
2. 🔲 Database schema
3. 🔲 Multi-step Questionnaire
4. 🔲 Form submission → DB
5. 🔲 Email notifications

### Phase 4: Admin Panel
**Týden 5-6:**
1. 🔲 Admin autentizace
2. 🔲 Dashboard overview
3. 🔲 Inquiries management
4. 🔲 Projects management (Kanban)
5. 🔲 Project detail + todos
6. 🔲 Calendar
7. 🔲 Basic analytics

### Phase 5: AI Integration
**Týden 7:**
1. 🔲 Lovable AI setup
2. 🔲 Edge function: generate-project-spec
3. 🔲 Edge function: generate-quote
4. 🔲 FAQ chatbot (frontend)
5. 🔲 Admin AI features

### Phase 6: Advanced Features
**Týden 8+:**
1. 🔲 Email management
2. 🔲 Advanced analytics
3. 🔲 Blog CMS (admin)
4. 🔲 Portfolio CMS (admin)
5. 🔲 Settings panel
6. 🔲 User management

### Phase 7: SEO & Content
**Ongoing:**
1. 🔲 Content writing (všechny stránky)
2. 🔲 Blog articles (10+)
3. 🔲 Portfolio projekty (mockups)
4. 🔲 SEO optimization
5. 🔲 Performance optimization

### Phase 8: Testing & Launch
**Týden 9:**
1. 🔲 Testing všech funkcí
2. 🔲 Cross-browser testing
3. 🔲 Mobile testing
4. 🔲 Performance audit
5. 🔲 Security audit
6. 🔲 Launch! 🚀

---

## 13. Notes & Considerations

### 13.1 Design Considerations
- **Důraz na rychlost**: Lightweight, optimalizované obrázky
- **Dark mode**: Volitelně implementovat
- **Animations**: Decentní, ne rušivé (fade-in, slide-in)
- **Iconography**: Konzistentní (Lucide React)
- **Photography**: Stock photos nebo AI-generated (pro portfolio mockups)

### 13.2 Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: > 90 (všechny metriky)

### 13.3 Accessibility
- **WCAG 2.1 AA compliance**
- **Keyboard navigation**
- **Screen reader support**
- **Color contrast ratio**: > 4.5:1
- **Alt text** na všech obrázcích
- **Focus states** viditelné
- **ARIA labels** kde potřeba

### 13.4 Security
- **HTTPS only**
- **RLS policies** na všech tabulkách
- **Input validation** (client + server)
- **CSRF protection**
- **Rate limiting** na formulářích
- **Sanitize user input**
- **Secure session management**

### 13.5 Monitoring & Analytics
- **Google Analytics 4**
- **Google Search Console**
- **Uptime monitoring** (UptimeRobot)
- **Error tracking** (Sentry volitelně)
- **Performance monitoring** (Lighthouse CI)

### 13.6 Maintenance
- **Weekly backups** (Supabase auto-backup)
- **Monthly security updates**
- **Quarterly content review**
- **Continuous blog posting** (2-4x měsíčně)
- **SEO monitoring** (ranking checks)

---

## 14. Deliverables Summary

### Co bude dodáno:

**Public Website:**
- ✅ Homepage (všechny sekce)
- ✅ O nás
- ✅ Služby (detailní)
- ✅ Portfolio (grid + detail)
- ✅ Blog (grid + post template)
- ✅ Kontakt
- ✅ Privacy Policy & Terms
- ✅ 404 page

**Questionnaire:**
- 🔲 Multi-step wizard (10 kroků)
- 🔲 Auto-save
- 🔲 Conditional logic
- 🔲 Mobile-optimized
- 🔲 Submission → Database

**Admin Panel:**
- 🔲 Dashboard overview
- 🔲 Inquiries management
- 🔲 Projects management (Kanban + List)
- 🔲 Project detail + Todos
- 🔲 Calendar
- 🔲 Email management (basic)
- 🔲 Analytics
- 🔲 Settings

**Backend:**
- 🔲 Supabase database
- 🔲 Authentication
- 🔲 RLS policies
- 🔲 Edge functions (AI integration)
- 🔲 Email notifications

**AI Features:**
- 🔲 Project spec generation
- 🔲 Quote generation
- 🔲 FAQ chatbot

**SEO:**
- ✅ Meta tags (všechny stránky)
- ✅ Structured data
- ✅ Sitemap
- ✅ Robots.txt
- 🔲 Content (kompletní copy)

**Content:**
- 🔲 Všechny texty (homepage, o nás, služby, etc.)
- 🔲 10+ blog článků
- 🔲 9+ portfolio projektů (mockups)
- 🔲 FAQ odpovědi

---

## 15. Pro cloude.ai: Instrukce k Realizaci

### Jak postupovat:

1. **Start s Frontend MVP** (Phase 1)
   - Implementuj design system (colors, typography, shadows)
   - Vytvoř Homepage (všechny sekce)
   - Responzivní design
   - Základní navigace

2. **Rozšíření Website** (Phase 2)
   - Přidej další stránky (O nás, Služby, Portfolio, Blog)
   - Implementuj routing
   - SEO meta tags

3. **Backend Setup** (Phase 3)
   - Aktivuj Lovable Cloud
   - Vytvoř database schema (SQL výše)
   - Implementuj Questionnaire
   - Formuláře → Database

4. **Admin Panel** (Phase 4)
   - Autentizace
   - Dashboard
   - CRUD operace (inquiries, projects)
   - Kanban board

5. **AI Integration** (Phase 5)
   - Implementuj Edge Functions
   - Propoj s Lovable AI
   - Frontend chat komponenta

6. **Content & SEO** (Phase 7)
   - Doplň veškerý content
   - Blog články
   - Portfolio mockups
   - SEO optimalizace

7. **Testing & Launch** (Phase 8)
   - Důkladné testování
   - Performance audit
   - Deploy

### Prioritní úkoly na start:
1. Design system
2. Homepage
3. Navigace + Footer
4. Responzivita
5. O nás + Služby stránky

### Co si user dodá později:
- Logo a brand assets
- Finální texty (copy)
- Reálné fotky/obrázky (pokud má)

---

## 16. FAQ pro AI Assistant

**Q: Jaký je celkový rozsah projektu?**
A: Kompletní webová agentura s public website (10+ stránek) + detailní dotazník + admin panel + AI integration. Rozsáhlý projekt na 8-9 týdnů vývoje.

**Q: Jaké technologie použít?**
A: React + TypeScript + Tailwind CSS + shadcn/ui + React Router + Lovable Cloud (Supabase) + Lovable AI.

**Q: Jak řešit chybějící reference/testimonials?**
A: Minimalizovat nebo odstranit testimonial sekci. Zaměřit se na jiné trust signály: transparentní pricing, detailní proces, profesionální design, SEO kvalita, profil zakladatele.

**Q: Kolik stránek blog potřebuje?**
A: Minimálně 10 článků na start (1000-2000 slov každý). Ongoing: 2-4 články měsíčně.

**Q: Jak implementovat multi-step questionnaire?**
A: React Hook Form + Zod validace + conditional logic (kroky se zobrazují podle odpovědí) + auto-save do local storage + final submit do Supabase.

**Q: Jaký AI model použít?**
A: google/gemini-2.5-flash (default pro většinu use cases). Pro image generation: google/gemini-2.5-flash-image.

**Q: Jak vytvořit portfolio projekty bez reálných klientů?**
A: Mockup projekty s AI-generated screenshots nebo stock images. Popisky jako "Ukázkový projekt" nebo "Demo". Alternativně: vlastní side projekty, práce pro rodinu/přátele.

**Q: Co dělat s komunikačními ratingy?**
A: Sledovat kvalitu komunikace s klienty (1-5 stars + notes) pro interní měření spokojenosti a identifikaci problémových projektů.

---

## 17. Závěr

Toto je kompletní specifikace pro moderní webovou agenturu s využitím AI. Dokument obsahuje vše potřebné pro implementaci v cloude.ai nebo jiném nástroji:

✅ **Kompletní design system** (barvy, typografie, komponenty)  
✅ **Detailní struktura stránek** (10+ stránek včetně blogu)  
✅ **Databázové schema** (SQL pro všechny tabulky)  
✅ **Multi-step dotazník** (10 kroků, všechna pole)  
✅ **Admin panel specifikace** (dashboard, projects, calendar, etc.)  
✅ **AI integrace** (Lovable AI use cases)  
✅ **SEO strategie** (meta tags, structured data)  
✅ **Implementation roadmap** (8 fází, prioritizováno)

**Další kroky:**
1. Začni s Phase 1 (MVP Frontend)
2. Postupuj podle priority
3. Průběžně doplňuj content
4. Testuj a optimalizuj

---

**Vytvořeno:** 2025-11-19  
**Verze:** 1.0  
**Pro:** cloude.ai implementace