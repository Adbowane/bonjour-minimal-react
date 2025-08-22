import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Recycle, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Index = () => {
  const events = [
    {
      title: "Vente de plantes d'intérieur",
      date: "15 Mars 2024",
      location: "Atelier Re-Plantes",
      image: "/Assets/06_communication-evenements/ardoise-prix-information.webp"
    },
    {
      title: "Atelier rempotage",
      date: "22 Mars 2024", 
      location: "Maison Écocitoyenne",
      image: "/Assets/06_communication-evenements/moment-echange-client.webp"
    },
    {
      title: "Collection Neighborhood",
      date: "29 Mars 2024",
      location: "Boutique IKOS",
      image: "/Assets/05_collections-specialisees/collection-bouquet-neighborhood-300x300.webp"
    }
  ];

  const values = [
    {
      icon: Recycle,
      title: "Seconde Vie",
      description: "Nous donnons une nouvelle chance aux plantes invendues ou abîmées"
    },
    {
      icon: Heart,
      title: "Bien-être",
      description: "Apporter le bonheur des végétaux à tous, à prix accessibles"
    },
    {
      icon: Leaf,
      title: "Écologie",
      description: "Réduire le gaspillage végétal et promouvoir la consommation responsable"
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Créer du lien social autour de la passion des plantes"
    }
  ];

  return (
    <Layout>
      {/* Section Héros */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                🌱 Première recyclerie végétale de Bordeaux
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                La seconde vie de vos{" "}
                <span className="text-primary">plantes</span> à Bordeaux
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Proposer des plantes et fleurs en seconde main à prix doux et apporter 
                le bien-être des végétaux à tous. Parce que chaque plante mérite une chance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/adopt">Adopter une plante</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/events">Nos événements</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Assets/02_fleurs-bouquets/bouquets-adoptes-heureux.webp"
                alt="Bouquets adoptés et heureux dans leur nouveau foyer"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">200+ plantes sauvées</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Re-Plantes récupère plantes invendues, abîmées ou déjà exploitées pour leur donner une seconde vie. 
              Un circuit vertueux avec des prix bradés, entre 2 et 15 euros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg">
                <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
                  "C'est un trésor ! Il y a de tout, de l'ellébore, des primevères... 
                  Ce n'est pas en très bon état, mais je sais que tu te feras un plaisir 
                  de leur redonner vie."
                </blockquote>
                <p className="text-foreground">
                  Dans les yeux d'Anne Viossat, fondatrice de Re-Plantes, tout est trouvaille. 
                  Depuis novembre dernier, elle récupère des plantes chaque semaine auprès de 
                  pépiniéristes, fleuristes et grossistes pour leur offrir une nouvelle chance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/Assets/03_plantes/adoption-plantes-fleurs-succes.webp"
                alt="Succès d'adoption de plantes et fleurs"
                className="rounded-xl shadow-lg"
              />
              <img
                src="/Assets/04_boutique-magasin/etageres-exposition-magasin.webp"
                alt="Étagères d'exposition dans notre magasin"
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Événements */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Événements
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez nos prochaines ventes et ateliers créatifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/events">Voir tous les événements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground">
              Ce qui nous guide dans notre mission quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Rejoignez le mouvement Re-Plantes
            </h2>
            <p className="text-xl text-muted-foreground">
              Que vous souhaitiez adopter une plante, faire un don ou simplement en savoir plus, 
              nous sommes là pour vous accompagner dans cette démarche écoresponsable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/adopt">Adopter maintenant</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
