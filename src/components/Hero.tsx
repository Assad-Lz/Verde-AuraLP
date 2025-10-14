import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with organic shape */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <img
          src={heroImage}
          alt="Spa moderno com elementos naturais"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Organic floating shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 blob-shape animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 blob-shape-alt animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">
              Tratamentos Naturais & Inovadores
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Realce sua Beleza
            <span className="block text-accent">Naturalmente</span>
          </h1>

          <p
            className="text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Na Verdeliz, unimos o melhor da natureza com tecnologia de ponta
            para revelar sua beleza natural de forma saudável e sustentável.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollToSection("contato")}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Agende sua Consulta
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 rounded-full font-semibold hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
            >
              Conheça nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
