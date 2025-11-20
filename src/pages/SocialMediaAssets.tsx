import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import facebookCover from "@/assets/social-media/facebook-cover.jpg";
import profilePicture from "@/assets/social-media/profile-picture.jpg";
import instagramPost from "@/assets/social-media/instagram-post-template.jpg";
import instagramStory from "@/assets/social-media/instagram-story-template.jpg";
import telegramProfile from "@/assets/social-media/telegram-profile.jpg";
import whatsappProfile from "@/assets/social-media/whatsapp-profile.jpg";

const SocialMediaAssets = () => {
  const assets = [
    {
      title: "Facebook Cover",
      description: "1640 x 624px - Titulní obrázek pro Facebook",
      image: facebookCover,
      filename: "weblyx-facebook-cover.jpg",
    },
    {
      title: "Profilový obrázek",
      description: "1080 x 1080px - Pro Facebook, Instagram, LinkedIn",
      image: profilePicture,
      filename: "weblyx-profile-picture.jpg",
    },
    {
      title: "Instagram Post Template",
      description: "1080 x 1080px - Šablona pro Instagram posty",
      image: instagramPost,
      filename: "weblyx-instagram-post.jpg",
    },
    {
      title: "Instagram Story Template",
      description: "1080 x 1920px - Šablona pro Instagram stories",
      image: instagramStory,
      filename: "weblyx-instagram-story.jpg",
    },
    {
      title: "Telegram Profilový obrázek",
      description: "1024 x 1024px - Pro Telegram kanál",
      image: telegramProfile,
      filename: "weblyx-telegram-profile.jpg",
    },
    {
      title: "WhatsApp Business Profilový obrázek",
      description: "1024 x 1024px - Pro WhatsApp Business",
      image: whatsappProfile,
      filename: "weblyx-whatsapp-profile.jpg",
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
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
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
            <Card key={index} className="overflow-hidden">
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

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Návod k použití</h2>
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
        </div>
      </div>
    </div>
  );
};

export default SocialMediaAssets;
