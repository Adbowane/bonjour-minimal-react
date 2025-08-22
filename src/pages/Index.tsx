import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Recycle, Calendar, MapPin, Users, } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Section Héros avec parallax */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
        {/* Particules flottantes d'arrière-plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-float"
            style={{ 
              left: '10%', 
              top: '20%',
              animationDelay: '0s',
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          ></div>
          <div 
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full animate-float"
            style={{ 
              left: '80%', 
              top: '30%',
              animationDelay: '2s',
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          ></div>
          <div 
            className="absolute w-3 h-3 bg-green-300/20 rounded-full animate-float"
            style={{ 
              left: '70%', 
              top: '60%',
              animationDelay: '4s',
              transform: `translateY(${scrollY * 0.08}px)`
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <Badge variant="secondary" className="w-fit animate-bounce-soft">
                🌱 Première recyclerie végétale de Bordeaux
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up animation-delay-200">
                La seconde vie de vos{" "}
                <span className="text-primary animate-text-shimmer bg-gradient-to-r from-primary via-green-500 to-primary bg-clip-text text-transparent bg-300% animate-shimmer">
                  plantes
                </span> à Bordeaux
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-400">
                Proposer des plantes et fleurs en seconde main à prix doux et apporter 
                le bien-être des végétaux à tous. Parce que chaque plante mérite une chance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <Button size="lg" className="text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  Adopter une plante
                </Button>
                <Button variant="outline" size="lg" className="text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  Nos événements
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div 
                className="relative transform"
                style={{ 
                  transform: `translateY(${scrollY * 0.05}px) rotateY(${scrollY * 0.02}deg)`
                }}
              >
                <img
                  src="/Assets/02_fleurs-bouquets/bouquets-adoptes-heureux.webp"
                  alt="Bouquets adoptés et heureux dans leur nouveau foyer"
                  className="rounded-2xl shadow-2xl w-full hover:shadow-3xl transition-shadow duration-500 animate-gentle-sway"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div 
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border animate-slide-in-left animation-delay-800 hover:shadow-xl transition-shadow duration-300"
                style={{ 
                  transform: `translateY(${scrollY * -0.03}px)`
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">200+ plantes sauvées</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Mission avec parallax */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Éléments décoratifs en arrière-plan */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-100/50 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-100/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Re-Plantes récupère plantes invendues, abîmées ou déjà exploitées pour leur donner une seconde vie. 
              Un circuit vertueux avec des prix bradés, entre 2 et 15 euros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="prose prose-lg">
                <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6 animate-slide-in-right animation-delay-200">
                  "C'est un trésor ! Il y a de tout, de l'ellébore, des primevères... 
                  Ce n'est pas en très bon état, mais je sais que tu te feras un plaisir 
                  de leur redonner vie."
                </blockquote>
                <p className="text-foreground animate-fade-in-up animation-delay-400">
                  Dans les yeux d'Anne Viossat, fondatrice de Re-Plantes, tout est trouvaille. 
                  Depuis novembre dernier, elle récupère des plantes chaque semaine auprès de 
                  pépiniéristes, fleuristes et grossistes pour leur offrir une nouvelle chance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              <div 
                className="transform transition-transform duration-300 hover:scale-105"
                style={{ 
                  transform: `translateY(${scrollY * 0.02}px)`
                }}
              >
                <img
                  src="/Assets/03_plantes/adoption-plantes-fleurs-succes.webp"
                  alt="Succès d'adoption de plantes et fleurs"
                  className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 animate-gentle-float"
                />
              </div>
              <div 
                className="transform transition-transform duration-300 hover:scale-105"
                style={{ 
                  transform: `translateY(${scrollY * -0.02}px) translateX(10px)`,
                  marginTop: '2rem'
                }}
              >
                <img
                  src="/Assets/04_boutique-magasin/etageres-exposition-magasin.webp"
                  alt="Étagères d'exposition dans notre magasin"
                  className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 animate-gentle-float animation-delay-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Événements avec animations en cascade */}
      <section className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Événements
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez nos prochaines ventes et ateliers créatifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transform: `translateY(${scrollY * 0.01}px)`
                }}
              >
                <div className="aspect-video relative overflow-hidden group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 animate-ken-burns"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="transform transition-transform duration-300 hover:translate-y-[-2px]">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center space-x-2 animate-slide-in-left animation-delay-300">
                      <Calendar className="h-4 w-4 animate-bounce-soft" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 animate-slide-in-left animation-delay-400">
                      <MapPin className="h-4 w-4 animate-bounce-soft animation-delay-200" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
            <Button size="lg" className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-pulse-subtle">
              Voir tous les événements
            </Button>
          </div>
        </div>
      </section>

      {/* Section Nos Valeurs avec animations */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground">
              Ce qui nous guide dans notre mission quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`text-center p-6 hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group cursor-pointer`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: `translateY(${scrollY * 0.005}px)`
                }}
              >
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 animate-pulse-soft">
                    <value.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action avec parallax */}
      <section 
        className="py-20 bg-primary/5 relative overflow-hidden"
        style={{ 
          backgroundPosition: `center ${scrollY * 0.5}px`
        }}
      >
        {/* Éléments décoratifs animés */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div 
            className="absolute w-64 h-64 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-float-slow"
            style={{ 
              left: '10%', 
              top: '20%',
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          ></div>
          <div 
            className="absolute w-48 h-48 bg-gradient-to-r from-primary/10 to-green-400/10 rounded-full blur-2xl animate-float-slow animation-delay-2000"
            style={{ 
              right: '15%', 
              bottom: '30%',
              transform: `translateY(${scrollY * -0.1}px)`
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground animate-fade-in-up">
              Rejoignez le mouvement Re-Plantes
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
              Que vous souhaitiez adopter une plante, faire un don ou simplement en savoir plus, 
              nous sommes là pour vous accompagner dans cette démarche écoresponsable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Button size="lg" className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-glow">
                Adopter maintenant
              </Button>
              <Button variant="outline" size="lg" className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Styles CSS pour les animations */}
      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes gentleSway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounceSoft {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-10px); }
        }

        @keyframes kenBurns {
          0% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1.1) rotate(2deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes pulseSubtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.6); }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        .animate-gentle-sway {
          animation: gentleSway 8s ease-in-out infinite;
        }

        .animate-gentle-float {
          animation: gentleFloat 4s ease-in-out infinite;
        }

        .animate-bounce-soft {
          animation: bounceSoft 2s ease-in-out infinite;
        }

        .animate-ken-burns {
          animation: kenBurns 20s ease-in-out infinite alternate;
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulseSoft 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </Layout>
  );
};

export default Index;