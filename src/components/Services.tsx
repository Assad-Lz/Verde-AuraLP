import { Sparkles, Droplets, Flower2, Star } from "lucide-react";
import treatmentBg from "@/assets/treatment-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Rejuvenescimento Facial",
      description: "Tratamentos avançados que restauram a juventude e vitalidade da pele",
      features: ["Peeling Natural", "Microagulhamento", "Bioestimuladores"],
    },
    {
      icon: Droplets,
      title: "Hidratação Profunda",
      description: "Terapias intensivas para revitalizar e nutrir sua pele",
      features: ["Hydrafacial", "Máscaras Naturais", "Terapia com Ácido Hialurônico"],
    },
    {
      icon: Flower2,
      title: "Tratamentos Corporais",
      description: "Cuidados completos para modelar e tonificar o corpo",
      features: ["Drenagem Linfática", "Massagem Relaxante", "Tratamentos Anticelulite"],
    },
    {
      icon: Star,
      title: "Estética Holística",
      description: "Equilíbrio entre corpo, mente e beleza exterior",
      features: ["Aromaterapia", "Terapia com Pedras", "Rituais de Bem-Estar"],
    },
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden section-clip-diagonal">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/5 to-primary/10"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${treatmentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 blob-shape-alt"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 blob-shape"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Tratamentos que
            <span className="block text-primary">Transformam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa gama completa de serviços desenvolvidos para realçar sua beleza natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-3 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
