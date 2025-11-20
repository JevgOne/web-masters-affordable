import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import weblyxLogo from "@/assets/weblyx-logo.png";
import facebookCoverNew from "@/assets/social-media/facebook-cover-new.jpg";
import profileNew from "@/assets/social-media/profile-new.jpg";
import instagramPostNew from "@/assets/social-media/instagram-post-new.jpg";
import instagramStoryNew from "@/assets/social-media/instagram-story-new.jpg";

const SocialMediaAssets = () => {
  const assets = [
    {
      title: "Weblyx Logo",
      description: "1024 x 1024px - Hlavní logo Weblyx",
      image: weblyxLogo,
      filename: "weblyx-logo.png",
    },
    {
      title: "Facebook Cover",
      description: "1640 x 624px - Titulní obrázek pro Facebook",
      image: facebookCoverNew,
      filename: "weblyx-facebook-cover.jpg",
    },
    {
      title: "Profilový obrázek",
      description: "1024 x 1024px - Pro Facebook, Instagram, LinkedIn, Telegram, WhatsApp",
      image: profileNew,
      filename: "weblyx-profile-picture.jpg",
    },
    {
      title: "Instagram Post Šablona",
      description: "1080 x 1080px - Šablona pro Instagram posty",
      image: instagramPostNew,
      filename: "weblyx-instagram-post.jpg",
    },
    {
      title: "Instagram Story Šablona",
      description: "1080 x 1920px - Šablona pro Instagram stories",
      image: instagramStoryNew,
      filename: "weblyx-instagram-story.jpg",
    },
  ];

  const downloadImage = (imageUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    assets.forEach((asset, index) => {
      setTimeout(() => {
        downloadImage(asset.image, asset.filename);
      }, index * 300);
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 md:pt-44 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Social Media Vizuály
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Kompletní sada brandingových materiálů pro Weblyx
            </p>
            <Button size="lg" onClick={downloadAll} className="gap-2">
              <Download className="w-5 h-5" />
              Stáhnout vše
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((asset, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{asset.title}</CardTitle>
                  <CardDescription>{asset.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src={asset.image}
                      alt={asset.title}
                      className="w-full h-auto rounded-lg border border-border"
                    />
                  </div>
                  <Button
                    onClick={() => downloadImage(asset.image, asset.filename)}
                    className="w-full gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Stáhnout
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Brandingové pokyny</CardTitle>
                <CardDescription>
                  Důležité informace pro zachování konzistence značky
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Hlavní barva:</h3>
                  <p className="text-sm text-muted-foreground">Turquoise (#00B4D8)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Použití loga:</h3>
                  <p className="text-sm text-muted-foreground">
                    Logo používejte na čistém pozadí s dostatečným prostorem kolem.
                    Neměňte jeho proporce ani barvy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tón komunikace:</h3>
                  <p className="text-sm text-muted-foreground">
                    Moderní, přátelský, profesionální. Zaměřte se na rychlost,
                    kvalitu a dostupnost služeb.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Návod k použití</CardTitle>
                <CardDescription>
                  Jak nastavit vizuály na jednotlivých platformách
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h3 className="font-semibold mb-2">📘 Facebook</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Cover photo: Nastavení → Upravit stránku → Titulní fotka</li>
                      <li>Profile: Klikněte na profilový obrázek → Nahrát fotku</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">📷 Instagram</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Profile: Profil → Upravit profil → Změnit fotku</li>
                      <li>Post/Story: Použijte šablony jako pozadí</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">✈️ Telegram</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Kanál: Nastavení kanálu → Upravit → Fotka</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">💬 WhatsApp Business</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Nastavení → Profil → Klepnout na fotku → Změnit</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialMediaAssets;
