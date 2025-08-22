import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Gift, Leaf, ArrowRight, CheckCircle, Search, Filter, MapPin, Star} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Adopt = () => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'En pleine forme': return 'bg-green-100 text-green-800 border-green-200';
      case 'Très bonne': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Bonne': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
    const specialCollections = [
    {
      name: "Collection Hiver",
      plants: "Cyclamens, Hellébores, Primevères",
      description: "Plantes résistantes au froid pour égayer votre hiver",
      image: "/src/Assets/05_collections-specialisees/winter-collection.png"
    },
    {
      name: "Collection Débutants",
      plants: "Plantes grasses, Pothos, Sansevieria",
      description: "Plantes faciles d'entretien pour commencer",
      image: "/src/Assets/05_collections-specialisees/beginner-collection.png"
    }
  ];
  const availablePlants = [
    {
      id : 1,
      name: "Cyclamen",
      price: "3€",
      description: "Remis en beauté après décoration événementielle",
      image: "/src/Assets/03_plantes/adoption-plantes-fleurs-succes.webp",
      status: "Disponible",
      care: "Facile",
      condition: "En pleine forme",
      category: "Plante d'intérieur",
      origin: "Décoration château",
    },
    {
      id : 2,
      name: "Primevères",
      price: "2€",
      description: "Variétés colorées en parfait état",
      image: "/src/Assets/02_fleurs-bouquets/farandoles-fleurs-colorees.webp",
      status: "Disponible",
      care: "Facile",
      condition: "Bonne",
      category: "Plante d'intérieur",
      origin: "Invendus pépiniériste",
    },
    {
      id : 3,
      name: "Plantes d'extérieur",
      price: "5€ - 15€",
      description: "Sélection variée pour jardins et terrasses",
      image: "/src/Assets/03_plantes/plantes-exterieur-exposition.webp",
      status: "Stock limité",
      care: "Modéré",
      condition: "En pleine forme",
      category: "Plante d'extérieur",
      origin: "Invendus pépiniériste"
    },
    {
      id : 4,
      name: "Collection Neighborhood",
      price: "8€ - 12€",
      description: "Variétés spécialisées et rares",
      image: "/src/Assets/05_collections-specialisees/collection-bouquet-neighborhood-300x300.webp",
      status: "Collection spéciale",
      care: "Expert",
      condition: "En pleine forme",
      category: "Plante d'intérieur",
      origin: "Don particulier"
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
      {/* <section className="py-20 bg-background">
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
      </section> */}

      {/* Tab de don  */}
       {/* Main Content */}
      <section className="py-20 bg-white">
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Donner une Plante
            </h2>
            <p className="text-xl text-muted-foreground">
              Vous avez des plantes dont vous souhaitez vous séparer ? Donnez-leur une seconde chance !
            </p>
          </div>
          <Tabs defaultValue="adopt" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="adopt" className="flex items-center space-x-2 text-lg py-3">
                <Heart className="w-5 h-5" />
                <span>Adopter une plante</span>
              </TabsTrigger>
              <TabsTrigger value="donate" className="flex items-center space-x-2 text-lg py-3">
                <Gift className="w-5 h-5" />
                <span>Donner une plante</span>
              </TabsTrigger>
            </TabsList>

            {/* Adopt Tab */}
            <TabsContent value="adopt" className="space-y-12">
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Rechercher une plante..."
                      className="pl-10 border-green-200 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Intérieur
                  </Button>
                  <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Extérieur
                  </Button>
                  <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Tous prix
                  </Button>
                </div>
              </div>

              {/* Available Plants */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Plantes disponibles à l'adoption</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {availablePlants.map((plant) => (
                    <Card key={plant.id} className="overflow-hidden hover:shadow-lg transition-shadow border-green-100">
                      <div className="aspect-square relative">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-green-600 text-white">
                            {plant.price}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className={getConditionColor(plant.condition)}>
                            {plant.condition}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">{plant.name}</CardTitle>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-green-200 text-green-700">
                            {plant.category}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <MapPin className="w-3 h-3" />
                            <span>{plant.origin}</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription className="text-gray-600 mb-4">
                          {plant.description}
                        </CardDescription>
                        
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          <Heart className="w-4 h-4 mr-2" />
                          Adopter pour {plant.price}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Special Collections */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Collections spéciales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {specialCollections.map((collection, index) => (
                    <Card key={index} className="overflow-hidden border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="aspect-video relative">
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold">{collection.name}</h3>
                          <p className="text-sm opacity-90">{collection.plants}</p>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <p className="text-gray-600 mb-4">{collection.description}</p>
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          Découvrir la collection
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Donate Tab */}
            <TabsContent value="donate" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Donation Form */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Proposer une plante</h2>
                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-green-800">
                        <Gift className="w-5 h-5" />
                        <span>Formulaire de don</span>
                      </CardTitle>
                      <CardDescription>
                        Aidez-nous à sauver vos plantes en leur trouvant une nouvelle famille
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Votre nom</Label>
                          <Input id="name" placeholder="Nom complet" className="border-green-200 focus:border-green-500" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="votre@email.com" className="border-green-200 focus:border-green-500" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" placeholder="06 XX XX XX XX" className="border-green-200 focus:border-green-500" />
                      </div>
                      
                      <div>
                        <Label htmlFor="plant-type">Type de plante(s)</Label>
                        <Input id="plant-type" placeholder="Ex: Cyclamen, Primevères, Fougère..." className="border-green-200 focus:border-green-500" />
                      </div>
                      
                      <div>
                        <Label htmlFor="quantity">Nombre de plantes</Label>
                        <Input id="quantity" type="number" placeholder="1" className="border-green-200 focus:border-green-500" />
                      </div>
                      
                      <div>
                        <Label htmlFor="condition">État des plantes</Label>
                        <Textarea 
                          id="condition" 
                          placeholder="Décrivez l'état de vos plantes (santé, taille, besoins particuliers...)"
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="location">Lieu de collecte</Label>
                        <Input id="location" placeholder="Adresse à Bordeaux ou environs" className="border-green-200 focus:border-green-500" />
                      </div>
                      
                      <div>
                        <Label htmlFor="availability">Disponibilités</Label>
                        <Textarea 
                          id="availability" 
                          placeholder="Quand pouvons-nous venir récupérer vos plantes ?"
                          className="border-green-200 focus:border-green-500"
                        />
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <Gift className="w-4 h-4 mr-2" />
                        Proposer mes plantes
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Donation Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi donner ?</h2>
                    
                    <div className="space-y-6">
                      <Card className="border-green-100 bg-green-50/50">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0">
                              <Leaf className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Éviter le gaspillage</h3>
                              <p className="text-gray-600">
                                Plutôt que de jeter, donnez une seconde chance à vos plantes. 
                                Chaque végétal mérite une nouvelle vie !
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-green-100 bg-green-50/50">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0">
                              <Heart className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Partager le bonheur</h3>
                              <p className="text-gray-600">
                                Vos plantes trouveront de nouvelles familles qui sauront les chérir 
                                et leur donner l'attention qu'elles méritent.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-green-100 bg-green-50/50">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white shrink-0">
                              <Star className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Soutenir la mission</h3>
                              <p className="text-gray-600">
                                En donnant, vous soutenez notre association et notre mission 
                                de démocratiser l'accès aux plantes.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Types de dons acceptés</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Plantes d'intérieur et d'extérieur</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Fleurs coupées (pour séchage)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Plantes d'événements</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Invendus de professionnels</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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