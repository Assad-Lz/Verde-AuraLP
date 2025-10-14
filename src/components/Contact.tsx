import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Av. Paulista, 1000", "São Paulo - SP, 01310-100"],
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(11) 3456-7890", "(11) 98765-4321"],
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@verdeliz.com.br", "agendamento@verdeliz.com.br"],
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Seg - Sex: 9h às 20h", "Sáb: 9h às 18h"],
    },
  ];

  return (
    <section id="contato" className="py-24 relative overflow-hidden section-clip-top">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 blob-shape animate-float"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Entre em Contato</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Agende sua Consulta
            <span className="block text-primary">Gratuita</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para iniciar sua jornada de transformação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Social Media */}
            <div className="flex gap-4 pt-6">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-medium animate-slide-in-right">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="(11) 98765-4321"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Conte-nos sobre o que você procura..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
