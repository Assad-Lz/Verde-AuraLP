import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      role: "Empresária",
      text: "A Verdeliz transformou completamente minha rotina de cuidados. Os tratamentos são excepcionais e a equipe é extremamente profissional. Sinto minha pele mais jovem e saudável!",
      rating: 5,
    },
    {
      name: "Mariana Silva",
      role: "Arquiteta",
      text: "Finalmente encontrei um lugar onde me sinto verdadeiramente cuidada. O ambiente é acolhedor e os resultados dos tratamentos superam todas as expectativas.",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Médica",
      text: "Como profissional da saúde, valorizo muito a abordagem natural e científica da Verdeliz. Os produtos são de altíssima qualidade e os resultados são comprovados.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary/5 blob-shape-alt"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            O que Dizem Nossas
            <span className="block text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-scale-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
