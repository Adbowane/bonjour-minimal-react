import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Leaf, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const team = [
    {
      name: "Anne Viossat",
      role: "Fondatrice",
      description: "Passionnée de plantes, Anne a créé Re-Plantes pour donner une seconde chance aux végétaux délaissés.",
      image: "/src/Assets/06_communication-evenements/moment-echange-client.webp"
    }
  ];

  const partners = [
    {
      name: "Bordeaux Métropole",
      description: "Soutien institutionnel",
      logo: "/src/Assets/08_medias-logos-partenaires/logo-partenaire-bordeaux-metropole.webp"
    },
    {
      name: "Région Nouvelle-Aquitaine", 
      description: "Financement régional",
      logo: "/src/Assets/08_medias-logos-partenaires/logo-region-nouvelle-aquitaine.webp"
    },
    {
      name: "France 3 Aquitaine",
      description: "Couverture médiatique",
      logo: "/src/Assets/08_medias-logos-partenaires/logo-media-france3.png"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              🌱 Notre Histoire
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              À Propos de <span className="text-primary">Re-Plantes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La première recyclerie de plantes et fleurs sur Bordeaux, née d'une vision simple : 
              offrir une seconde vie aux végétaux pour le bien-être de tous.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Depuis novembre dernier, <strong className="text-foreground">Anne Viossat</strong> 
                  récupère plantes invendues, abîmées ou déjà exploitées pour leur donner une seconde vie. 
                  Dans ses yeux, tout est trouvaille.
                </p>
                <p>
                  Parmi ses donateurs, des pépiniéristes, des fleuristes ou encore des grossistes, 
                  souvent prêts à jeter leurs invendus. Plutôt que de les laisser partir à la poubelle, 
                  Anne et sa petite équipe de bénévoles leur redonnent une beauté.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 italic">
                  "La plante n'est plus seulement un objet de décoration ou un produit de consommation, 
                  c'est un être vivant dont on a la responsabilité."
                  <cite className="block mt-2 text-sm font-semibold">- Anne Viossat, Fondatrice</cite>
                </blockquote>
              </div>
            </div>
            <div className="relative">
              <img
                src="/src/Assets/04_boutique-magasin/vitrine-accueil-boutique.webp"
                alt="Vitrine d'accueil de la boutique Re-Plantes"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un circuit vertueux avec des prix bradés, entre 2 et 15 euros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Récupération</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous récupérons les plantes invendues, abîmées ou exploitées auprès de professionnels
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Soins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Notre équipe redonne vie aux plantes avec amour et expertise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Les plantes trouvent de nouveaux foyers à prix accessibles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Réduction du gaspillage et promotion du bien-être végétal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-muted-foreground">
              Des passionnés au service des plantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Partenaires */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Partenaires
            </h2>
            <p className="text-xl text-muted-foreground">
              Ils nous soutiennent dans notre mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="h-24 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{partner.name}</h3>
                  <p className="text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lieux Partenaires */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Lieux Partenaires
            </h2>
            <p className="text-xl text-muted-foreground">
              Où nous retrouver à Bordeaux
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/src/Assets/07_lieux-partenaires/partenaire-boutique-ikos.webp"
                  alt="Boutique partenaire IKOS"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Boutique IKOS</CardTitle>
                <CardDescription>Partenaire privilégié</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un espace dédié à nos collections spécialisées et nos événements réguliers.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/src/Assets/07_lieux-partenaires/lieu-maison-ecocitoyenne.webp"
                  alt="Maison écocitoyenne"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Maison Écocitoyenne</CardTitle>
                <CardDescription>Ateliers et formations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nos ateliers créatifs et de rempotage se déroulent dans ce lieu engagé.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;