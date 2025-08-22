import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              🌿 Conseils & Astuces
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Blog & <span className="text-primary">Conseils</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos conseils pour prendre soin de vos plantes adoptées
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;