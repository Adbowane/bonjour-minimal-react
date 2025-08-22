import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Gift, Leaf, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Adopt = () => {
  const availablePlants = [
    {
      name: "Cyclamen",
      price: "3€",
      description: "Remis en beauté après décoration événementielle",
      image: "/src/Assets/03_plantes/adoption-plantes-fleurs-succes.webp",
      status: "Disponible",
      care: "Facile"
    },
    {
      name: "Primevères",
      price: "2€",
      description: "Variétés colorées en parfait état",
      image: "/src/Assets/02_fleurs-bouquets/farandoles-fleurs-colorees.webp",
      status: "Disponible",
      care: "Facile"
    },
    {
      name: "Plantes d'extérieur",
      price: "5€ - 15€",
      description: "Sélection variée pour jardins et terrasses",
      image: "/src/Assets/03_plantes/plantes-exterieur-exposition.webp",
      status: "Stock limité",
      care: "Modéré"
    },
    {
      name: "Collection Neighborhood",
      price: "8€ - 12€",
      description: "Variétés spécialisées et rares",
      image: "/src/Assets/05_collections-specialisees/collection-bouquet-neighborhood-300x300.webp",
      status: "Collection spéciale",
      care: "Expert"
    }
  ];

  const adoptionSteps = [
    {
      step: 1,
      title: "Choisissez",
      description: "Sélectionnez votre plante parmi notre sélection",
      icon: Heart
    },
    {
      step: 2,
      title: "Adoptez",
      description: "Payez votre plante à prix doux (2€ - 15€)",
      icon: Gift
    },
    {
      step: 3,
      title: "Choyez",
      description: "Donnez-lui l'amour qu'elle mérite dans son nouveau foyer",
      icon: Leaf
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                💚 Adopter une plante
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Donnez une seconde{" "}
                <span className="text-primary">chance</span> à une plante
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nos plantes n'attendent qu'une chose : un nouveau foyer rempli d'amour. 
                À prix doux, entre 2€ et 15€, offrez-leur la vie qu'elles méritent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Voir les plantes disponibles
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Donner une plante
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/src/Assets/02_fleurs-bouquets/bouquets-adoptes-heureux.webp"
                alt="Bouquets adoptés dans leur nouveau foyer"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">200+ adoptions réussies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comment Adopter une Plante ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Un processus simple en 3 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adoptionSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < adoptionSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plantes disponibles */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Plantes Disponibles à l'Adoption
            </h2>
            <p className="text-xl text-muted-foreground">
              Notre sélection actuelle de plantes en quête d'un foyer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availablePlants.map((plant, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    variant={plant.status === "Disponible" ? "default" : "secondary"}
                    className="absolute top-2 right-2"
                  >
                    {plant.status}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{plant.name}</CardTitle>
                    <span className="text-xl font-bold text-primary">{plant.price}</span>
                  </div>
                  <CardDescription>
                    <div className="flex justify-between items-center">
                      <span>Entretien: {plant.care}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{plant.description}</p>
                  <Button className="w-full" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Adopter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Stock mis à jour quotidiennement selon les arrivages
            </p>
            <Button variant="outline" size="lg">
              Voir tout le stock disponible
            </Button>
          </div>
        </div>
      </section>

      {/* Formulaire de don */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Donner une Plante
              </h2>
              <p className="text-xl text-muted-foreground">
                Vous avez des plantes dont vous souhaitez vous séparer ? Donnez-leur une seconde chance !
              </p>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle>Formulaire de Don</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons pour organiser la récupération
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom *</Label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="06 XX XX XX XX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Input id="location" placeholder="Bordeaux, quartier..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plants">Description des plantes *</Label>
                  <Textarea 
                    id="plants" 
                    placeholder="Décrivez les plantes que vous souhaitez donner : types, états, quantités..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Raison du don (optionnel)</Label>
                  <Textarea 
                    id="reason" 
                    placeholder="Déménagement, manque de place, changement de décoration..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Gift className="h-5 w-5 mr-2" />
                  Proposer mon don
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos collections spécialisées */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/src/Assets/05_collections-specialisees/ambiance-neighborhood-concept.webp"
                alt="Ambiance de notre collection Neighborhood"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="space-y-6">
              <Badge variant="secondary">Collection Spéciale</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Collection <span className="text-primary">Neighborhood</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Découvrez notre collection de plantes rares et spécialisées, soigneusement 
                sélectionnées pour leur beauté et leur originalité. Des variétés uniques 
                qui trouvent rarement leur chemin vers les jardineries classiques.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Variétés rares et originales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Soins experts inclus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Conseils personnalisés</span>
                </div>
              </div>
              <Button size="lg">
                Découvrir la collection
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Adopt;