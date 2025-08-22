import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Vente de plantes d'intérieur",
      date: "15 Mars 2024",
      time: "10h00 - 17h00",
      location: "Atelier Re-Plantes, Bordeaux",
      description: "Grande vente de plantes d'intérieur remises en beauté. Cyclamens, primevères, et bien d'autres !",
      image: "/Assets/06_communication-evenements/ardoise-prix-information.webp",
      price: "2€ - 15€",
      status: "Inscription ouverte"
    },
    {
      title: "Atelier rempotage débutants",
      date: "22 Mars 2024", 
      time: "14h00 - 16h00",
      location: "Maison Écocitoyenne, Bordeaux",
      description: "Apprenez les bases du rempotage avec nos experts. Matériel fourni.",
      image: "/Assets/06_communication-evenements/moment-echange-client.webp",
      price: "15€",
      status: "Places limitées"
    },
    {
      title: "Collection Neighborhood - Présentation",
      date: "29 Mars 2024",
      time: "11h00 - 19h00", 
      location: "Boutique IKOS, Bordeaux",
      description: "Découverte de notre collection spécialisée avec des variétés uniques et rares.",
      image: "/Assets/05_collections-specialisees/collection-bouquet-neighborhood-300x300.webp",
      price: "Gratuit",
      status: "Événement public"
    },
    {
      title: "Atelier bouquets séchés",
      date: "5 Avril 2024",
      time: "15h00 - 17h00",
      location: "Atelier Re-Plantes",
      description: "Créez vos propres bouquets séchés à partir de nos fleurs récupérées.",
      image: "/Assets/02_fleurs-bouquets/fleurs-sechees-assortiment.webp",
      price: "20€",
      status: "Bientôt ouvert"
    }
  ];

  const pastEvents = [
    {
      title: "Événement de Mai - Association la Sirène",
      date: " 7 et 8 Mai 2025",
      description: "Plantes fleuries d'intérieur, Plantes aromatiques et Prix solidaire entre l€ et 25€",
      image: "/Assets/06_communication-evenements/affiche-evenement-mai.jpeg",
      attendees: "150+ visiteurs"
    },
    {
      title: "Présentation du projet",
      date: "10 Avril 2023", 
      description: "Lancement officiel de Re-Plantes avec présentation de notre mission.",
      image: "/Assets/06_communication-evenements/presentation-evenement-scaled.jpeg",
      attendees: "80+ participants"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              📅 Nos Rendez-vous
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Ventes & <span className="text-primary">Événements</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Participez à nos ventes de plantes, ateliers créatifs et moments de partage 
              autour de la passion des végétaux.
            </p>
          </div>
        </div>
      </section>

      {/* Événements à venir */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Événements à Venir
            </h2>
            <p className="text-xl text-muted-foreground">
              Réservez vos dates !
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    variant={event.status === "Inscription ouverte" ? "default" : "secondary"}
                    className="absolute top-4 right-4"
                  >
                    {event.status}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <span className="text-lg font-bold text-primary">{event.price}</span>
                  </div>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button className="w-full">
                    {event.status === "Bientôt ouvert" ? "Bientôt disponible" : "S'inscrire"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendrier interactif placeholder */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Calendrier des Événements
            </h2>
            <p className="text-xl text-muted-foreground">
              Vue d'ensemble de nos activités
            </p>
          </div>

          <Card className="p-8">
            <div className="text-center space-y-4">
              <Calendar className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold text-foreground">Calendrier Interactif</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un calendrier interactif sera bientôt disponible pour vous permettre de visualiser 
                tous nos événements et de vous inscrire directement.
              </p>
              <Button variant="outline">
                Voir le planning complet
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Événements passés */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Événements Passés
            </h2>
            <p className="text-xl text-muted-foreground">
              Revivez nos beaux moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden">
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
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ne Manquez Aucun Événement
            </h2>
            <p className="text-xl text-muted-foreground">
              Inscrivez-vous à notre newsletter pour être informé de tous nos événements et ventes privées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground"
              />
              <Button>S'inscrire</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;