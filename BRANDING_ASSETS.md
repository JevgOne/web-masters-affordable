# 🎨 WEBLYX BRANDING ASSETS

Kompletní balíček brandingových materiálů pro Weblyx

---

## 📁 OBSAH BALÍČKU

### 1. LOGO
**Umístění:** `src/assets/weblyx-logo.png`
- Formát: PNG, 1024x1024px
- Použití: Hlavní logo pro web, prezentace, dokumenty
- Design: Moderní geometrický znak s turquoise barvou (#00B4D8)
- Varianta: Logo s textem "Weblyx"

### 2. FAVICON
**Umístění:** `public/favicon.png`
- Formát: PNG, 512x512px
- Použití: Ikona v prohlížeči, záložky, mobile shortcuts
- Design: Stylizované písmeno "W" v brand barvě
- Již implementováno v `index.html`

### 3. VIZITKY

#### Přední strana
**Umístění:** `src/assets/business-card-front.png`
- Rozměr: 85mm x 55mm (standard EU)
- Formát: Print-ready, 1700x1100px
- Obsah:
  - Logo Weblyx
  - Jméno a pozice
  - Email: info@weblyx.cz
  - Telefon: +420 XXX XXX XXX
  - Web: weblyx.cz

#### Zadní strana
**Umístění:** `src/assets/business-card-back.png`
- Rozměr: 85mm x 55mm (standard EU)
- Formát: Print-ready, 1700x1100px
- Obsah:
  - Tagline: "Rychlé, moderní weby za férové ceny"
  - Geometrický pattern v brand barvách
  - QR kód na weblyx.cz

### 4. EMAIL PODPIS
**Umístění:** `src/assets/email-signature.html`
- Formát: HTML email signature
- Responzivní design
- Obsahuje:
  - Logo (60x60px)
  - Jméno, pozice, firma
  - Kontaktní informace
  - Social media odkazy
  - Brand tagline
  - Disclaimer

---

## 🎨 BRAND BARVY

### Primární barva
- **Turquoise:** `#00B4D8` / `hsl(191, 100%, 42%)`
- Použití: Logo, akcenty, CTA tlačítka, odkazy

### Sekundární barvy
- **Tmavá:** `#1a1a1a` - text, nadpisy
- **Šedá:** `#666666` - vedlejší text
- **Světlá:** `#f8f9fa` - pozadí sekcí
- **Bílá:** `#ffffff` - pozadí

---

## 📐 TYPOGRAFIE

### Primární font
- **Sans-serif:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial
- Použití: Všechny texty

### Velikosti
- **Logo/Headline:** 48-64px, bold
- **H1:** 36-48px, bold
- **H2:** 28-32px, semibold
- **Body:** 16px, regular
- **Small:** 13-14px, regular

---

## 📋 POUŽITÍ ASSETS

### Logo - Best Practices
✅ Používejte na bílém nebo světlém pozadí
✅ Ponechejte minimálně 20px padding okolo loga
✅ Pro web: import jako ES6 modul
```jsx
import weblyxLogo from '@/assets/weblyx-logo.png';
<img src={weblyxLogo} alt="Weblyx" />
```

❌ Neměňte proporce loga
❌ Nepoužívejte jiné barvy než brand barvy
❌ Nerotujte nebo nepřeklápějte logo

### Vizitky - Tisk
**Doporučené nastavení:**
- Materiál: 350g křída, matná/lesklá laminace
- Tisk: Digitální tisk nebo offset
- Balení: 100-500 ks
- Dodavatel: Print24, Vista Print, nebo lokální tiskárna

**Před tiskem:**
1. Zkontrolujte rozměry (85x55mm)
2. Ověřte správnost kontaktních údajů
3. Přidejte ořezové značky (bleed 3mm)
4. Exportujte do PDF/X-1a formátu

### Email podpis - Instalace

**Gmail:**
1. Settings → See all settings → Signature
2. Zkopírujte HTML kód z `email-signature.html`
3. Vložte do editoru (použijte "Insert Image" pro logo)
4. Nahraďte placeholder texty vašimi údaji

**Outlook:**
1. File → Options → Mail → Signatures
2. New → Paste HTML kód
3. Upravte kontaktní údaje
4. Set as default signature

**Apple Mail:**
1. Mail → Preferences → Signatures
2. Create signature → Paste HTML
3. Upravte údaje

**DŮLEŽITÉ:** Nahraďte všechny placeholder hodnoty:
- `Vaše Jméno` → Skutečné jméno
- `+420 XXX XXX XXX` → Váš telefon
- `https://yourdomain.com/weblyx-logo-small.png` → URL vašeho hostovaného loga

---

## 🔄 VARIACE A ROZŠÍŘENÍ

### Chybějící assets (pro budoucí vývoj):
- [ ] Logo verze - černobílá
- [ ] Logo verze - na tmavém pozadí
- [ ] Social media covers (Facebook, LinkedIn)
- [ ] Prezentační šablona (PowerPoint/Keynote)
- [ ] Hlavičkový papír (letterhead)
- [ ] Obálky
- [ ] Email template pro nabídky/faktury
- [ ] Instagram/Facebook post templates
- [ ] Google Ads banner formáty

---

## 📞 KONTAKTNÍ ÚDAJE (Aktualizujte!)

```
Firma: Weblyx
Email: info@weblyx.cz
Telefon: +420 XXX XXX XXX
Web: weblyx.cz
Adresa: [Vaše adresa]
IČO: [Vaše IČO]
DIČ: [Vaše DIČ]
```

---

## 📦 EXPORT A SDÍLENÍ

### Pro tiskárny / dodavatele:
- Exportujte do PDF/X-1a nebo PDF/X-4
- Přidejte ořezové značky (bleed 3mm)
- Používejte CMYK barevný profil
- Minimální rozlišení: 300 DPI

### Pro web / digitální použití:
- Používejte PNG pro transparentnost
- Optimalizujte velikost souboru (TinyPNG, ImageOptim)
- Používejte WebP pro lepší kompresi
- Implementujte lazy loading

---

**Vytvořeno:** 2024
**Verze:** 1.0
**Status:** ✅ Hotovo - Připraveno k použití
