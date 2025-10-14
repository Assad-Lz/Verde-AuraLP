import { TrendingUp, Users, Award, Clock } from "lucide-react";
import resultado1 from "@/assets/resultado1.jpg";
import resultado2 from "@/assets/resultado2.jpg";
import resultado3 from "@/assets/resultado3.jpg";

const Results = () => {
  const stats = [
    { icon: Users, value: "5.000+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "15+", label: "Anos de Experiência" },
    { icon: TrendingUp, value: "98%", label: "Taxa de Satisfação" },
    { icon: Clock, value: "24h", label: "Suporte Disponível" },
  ];

  const images = [resultado1, resultado2, resultado3];

  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-accent/20 blob-shape animate-float"></div>
      <div
        className="absolute bottom-10 left-20 w-96 h-96 bg-primary-foreground/10 blob-shape-alt animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
            <span className="text-sm font-semibold text-accent-foreground">
              Nossos Resultados
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Números que Falam por Si
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            A confiança dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <div className="text-5xl font-display font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Before/After showcase */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(item + 1) * 0.15}s` }}
            >
              <div className="aspect-video bg-primary-foreground/20 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={images[item]}
                  alt={`Resultado ${item + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                Transformação Visível
              </h4>
              <p className="text-sm text-primary-foreground/80">
                Resultados reais de tratamentos personalizados
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
