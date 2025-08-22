import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Leaf, Heart, Lightbulb, Book, Clock } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Comment sauver un cyclamen qui semble mort ?",
      excerpt: "Découvrez les secrets d'Anne pour redonner vie aux cyclamens apparemment perdus. Technique de taille, soins particuliers et patience sont les clés du succès.",
      category: "Conseils",
      author: "Anne Viossat",
      date: "2024-01-10",
      readTime: "5 min",
      image: "/Assets/03_plantes/adoption-plantes-fleurs-succes.webp",
      featured: true
    },
    {
      id: 2,
      title: "Les bienfaits des plantes sur notre bien-être mental",
      excerpt: "La science confirme ce que nous savons intuitivement : les plantes ont un impact positif sur notre santé mentale. Explorons ensemble ces bienfaits.",
      category: "Bien-être",
      author: "Équipe Re-Plantes",
      date: "2024-01-08",
      readTime: "7 min",
      image: "/Assets/04_boutique-magasin/etageres-exposition-magasin.webp",
      featured: true
    },
    {
      id: 3,
      title: "Créer des bouquets de fleurs séchées durables",
      excerpt: "Apprenez à transformer vos fleurs récupérées en magnifiques compositions séchées qui dureront des mois. Techniques et astuces de nos bénévoles.",
      category: "DIY",
      author: "Marie, bénévole",
      date: "2024-01-05",
      readTime: "4 min",
      image: "/Assets/02_fleurs-bouquets/fleurs-sechees-assortiment.webp",
      featured: false
    },
    {
      id: 4,
      title: "L'histoire des primevères : des fleurs du printemps toute l'année",
      excerpt: "Plongez dans l'univers fascinant des primevères, ces petites fleurs colorées qui égayent nos jardins et nos maisons même en hiver.",
      category: "Histoire",
      author: "Jean, passionné",
      date: "2024-01-03",
      readTime: "6 min",
      image: "/Assets/02_fleurs-bouquets/farandoles-fleurs-colorees.webp",
      featured: false
    },
    {
      id: 5,
      title: "Reconnaître une plante en détresse et agir rapidement",
      excerpt: "Feuilles jaunes, tiges molles, terre sèche... Apprenez à décoder les signaux de détresse de vos plantes pour intervenir au bon moment.",
      category: "Conseils",
      author: "Anne Viossat",
      date: "2024-01-01",
      readTime: "8 min",
      image: "/Assets/03_plantes/plantes-exterieur-exposition.webp",
      featured: false
    },
    {
      id: 6,
      title: "Notre première année : bilan et perspectives",
      excerpt: "Retour sur une année riche en émotions, en sauvetages et en rencontres. Plus de 500 plantes sauvées et tant de sourires partagés !",
      category: "Actualités",
      author: "Anne Viossat",
      date: "2023-12-28",
      readTime: "10 min",
      image: "/Assets/04_boutique-magasin/vitrine-accueil-boutique-300x148.webp",
      featured: false
    }
  ];

  const categories = [
    { name: "Conseils", count: 12, icon: <Lightbulb className="w-4 h-4" />, color: "bg-green-100 text-green-800 border-green-200" },
    { name: "Bien-être", count: 8, icon: <Heart className="w-4 h-4" />, color: "bg-pink-100 text-pink-800 border-pink-200" },
    { name: "DIY", count: 6, icon: <Book className="w-4 h-4" />, color: "bg-purple-100 text-purple-800 border-purple-200" },
    { name: "Histoire", count: 4, icon: <Calendar className="w-4 h-4" />, color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Actualités", count: 5, icon: <Leaf className="w-4 h-4" />, color: "bg-orange-100 text-orange-800 border-orange-200" }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              Blog Re-Plantes
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Conseils et histoires végétales
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Découvrez nos conseils d'experts, nos techniques de sauvetage 
              et les belles histoires de nos plantes adoptées
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-green-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="border-green-600 text-green-600 bg-green-50">
              Tous les articles
            </Button>
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              À la une
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Articles en vedette
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow border-green-100 bg-white/80 backdrop-blur-sm">
                <div className="aspect-video relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(article.date).toLocaleDateString('fr-FR', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Lire l'article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Tous nos articles
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Explorez notre bibliothèque de conseils et d'histoires végétales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow border-green-100">
                <div className="aspect-video relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(article.date).toLocaleDateString('fr-FR', { 
                          day: 'numeric',
                          month: 'short'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                  
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Lire <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Restez informé de nos nouveaux articles
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Recevez nos derniers conseils et histoires directement dans votre boîte mail. 
            Pas de spam, que de la passion végétale !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              S'abonner
            </Button>
          </div>
          <p className="text-sm text-green-200 mt-4">
            Plus de 200 passionnés nous font déjà confiance !
          </p>
        </div>
      </section>
    </Layout>
  );
}