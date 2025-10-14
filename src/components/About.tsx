import { Leaf, Heart, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Produtos orgânicos e sustentáveis em todos os tratamentos",
    },
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada cliente recebe um plano único adaptado às suas necessidades",
    },
    {
      icon: Award,
      title: "Excelência Comprovada",
      description: "Mais de 15 anos de experiência e resultados excepcionais",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados e constantemente atualizados",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background organic shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blob-shape"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Sobre Nós</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Beleza que Nasce da
              <span className="block text-primary">Natureza</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A Verdeliz nasceu do sonho de criar um espaço onde beleza e bem-estar se encontram em harmonia com a natureza. Acreditamos que cada pessoa possui uma beleza única que merece ser celebrada e realçada de forma saudável.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossos tratamentos combinam ingredientes naturais com tecnologias inovadoras, sempre respeitando o equilíbrio do seu corpo e do meio ambiente.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
