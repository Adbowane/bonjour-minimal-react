import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Leaf, Heart, Recycle, Star, ArrowRight } from "lucide-react";
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

  const stats = [
    { number: "500+", label: "Plantes sauvées", icon: <Recycle className="w-6 h-6" /> },
    { number: "15", label: "Bénévoles actifs", icon: <Users className="w-6 h-6" /> },
    { number: "2-15€", label: "Prix accessibles", icon: <Star className="w-6 h-6" /> },
    { number: "1", label: "An d'existence", icon: <Heart className="w-6 h-6" /> }
  ];

  const partners = [
    {
      name: "Bordeaux Métropole",
      description: "Soutien institutionnel",
      logo: "/src/Assets/08_medias-logos-partenaires/logo-partenaire-bordeaux-metropole.webp",
      type: "Partenaire institutionnel"
    },
    {
      name: "Région Nouvelle-Aquitaine", 
      description: "Financement régional",
      logo: "/src/Assets/08_medias-logos-partenaires/logo-region-nouvelle-aquitaine.webp",
      type: "Partenaire financier"
    },
    {
      name: "France 3 Aquitaine",
      description: "Couverture médiatique",
      logo: "/src/Assets/08_medias-logos-partenaires/logo-media-france3.png",
      type: "Partenaire média"
    }
  ];

  const donorPartners = [
    {
      name: "Fleuristes locaux",
      type: "Donateurs",
      description: "Nos partenaires fleuristes nous confient leurs invendus et plantes d'événements."
    },
    {
      name: "Pépiniéristes",
      type: "Donateurs", 
      description: "Les pépiniéristes de la région participent à notre mission de récupération."
    },
    {
      name: "Grossistes",
      type: "Donateurs",
      description: "Les grossistes nous aident à éviter le gaspillage des végétaux."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🌱 Notre Histoire
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              À Propos de <span className="text-green-200">Re-Plantes</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              La première recyclerie de plantes et fleurs sur Bordeaux, née d'une vision simple : 
              offrir une seconde vie aux végétaux pour le bien-être de tous.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                Notre Histoire
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Tout a commencé par une conviction
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong className="text-green-800">"C'est un trésor !"</strong> C'est avec cette exclamation 
                  qu'<strong className="text-foreground">Anne Viossat</strong> regarde chaque plante récupérée. 
                  Dans ses yeux, tout est trouvaille.
                </p>
                <p>
                  Depuis novembre dernier, elle récupère des caisses pleines de plantes chez les donateurs : 
                  pépiniéristes, fleuristes ou encore grossistes, souvent prêts à jeter leurs invendus. 
                  Plutôt que de les laisser partir à la poubelle, Anne et sa petite équipe de bénévoles 
                  leur redonnent une beauté.
                </p>
                <p>
                  Ces cyclamens qui ont servi à la décoration d'un château bordelais, ces plantes invendues 
                  chez les fleuristes... <strong className="text-green-800">"Ils ne sont juste pas très beaux, 
                  mais il y a des boutons, et dès qu'il y a du vert, il y a de l'espoir !"</strong>
                </p>
                <blockquote className="border-l-4 border-green-500 pl-6 italic text-green-700 text-xl">
                  "La plante n'est plus seulement un objet de décoration ou un produit de consommation, 
                  c'est un être vivant dont on a la responsabilité."
                </blockquote>
                <p className="text-sm text-gray-500">— Anne Viossat, Fondatrice de Re-Plantes</p>
              </div>
            </div>
            <div className="relative space-y-6">
              <img
                src="/src/Assets/04_boutique-magasin/vitrine-accueil-boutique.webp"
                alt="Vitrine d'accueil de la boutique Re-Plantes"
                className="rounded-2xl shadow-2xl w-full"
              />
              <img
                src="/src/Assets/03_plantes/plantes-adoptees-seconde-vie.webp"
                alt="Plantes récupérées"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-20 bg-white">
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
            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Récupération</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous récupérons les plantes invendues, abîmées ou exploitées auprès de professionnels
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Soins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Notre équipe redonne vie aux plantes avec amour et expertise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Les plantes trouvent de nouveaux foyers à prix accessibles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-green-600" />
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Notre Équipe
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Les visionnaires de Re-Plantes
            </h2>
            <p className="text-xl text-muted-foreground">
              Une équipe passionnée et des bénévoles engagés pour la cause végétale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-green-100 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                  <Badge className="bg-green-100 text-green-800 border-green-200 w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
            
            {/* Volunteers Card */}
            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Nos Bénévoles</CardTitle>
                <Badge className="bg-green-100 text-green-800 border-green-200 w-fit mx-auto">
                  15 membres actifs
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Une équipe de passionnés qui donnent de leur temps pour soigner et 
                  préparer les plantes avant leur adoption.
                </CardDescription>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Rejoindre l'équipe <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Join Us Card */}
            <Card className="text-center border-green-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Vous ?</CardTitle>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 w-fit mx-auto">
                  Nouveau membre
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Rejoignez notre mission ! Que vous soyez expert ou débutant, 
                  votre aide est précieuse pour sauver plus de plantes.
                </CardDescription>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Devenir bénévole <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos Donateurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Nos Donateurs
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Un réseau solidaire
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nos partenaires nous font confiance pour donner une seconde vie 
              à leurs végétaux invendus ou en fin de service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donorPartners.map((partner, index) => (
              <Card key={index} className="text-center border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <Recycle className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{partner.name}</CardTitle>
                  <Badge className="bg-green-100 text-green-800 border-green-200 w-fit mx-auto">
                    {partner.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {partner.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Vous êtes professionnel du végétal et souhaitez nous rejoindre ?
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Devenir partenaire <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Nos Partenaires Institutionnels */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Partenaires Institutionnels
            </h2>
            <p className="text-xl text-muted-foreground">
              Ils nous soutiennent dans notre mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center p-6 border-green-100 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="space-y-4">
                  <div className="h-24 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{partner.name}</h3>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    {partner.type}
                  </Badge>
                  <p className="text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lieux Partenaires */}
      <section className="py-20 bg-white">
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
            <Card className="overflow-hidden border-green-100 hover:shadow-lg transition-shadow">
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

            <Card className="overflow-hidden border-green-100 hover:shadow-lg transition-shadow">
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