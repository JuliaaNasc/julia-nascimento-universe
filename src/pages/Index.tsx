
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Instagram, Mail, MapPin, Calendar, Heart, Code, Camera, Globe, Briefcase } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const techSkills = [
    "Redes de Computadores",
    "Windows & Linux",
    "Máquinas Virtuais",
    "DHCP & DNS",
    "Lógica de Programação",
    "Bancos de Dados",
    "UX/UI Design",
    "Segurança da Informação"
  ];

  const fashionExperience = [
    {
      year: "2022-2023",
      title: "Modelo - Agência Vogue",
      description: "Primeiro contrato profissional aos 16 anos"
    },
    {
      year: "2024",
      title: "Modelo de Cabelo",
      description: "Salão renomado em Fortaleza"
    }
  ];

  const photos = [
    "/lovable-uploads/7cee99a2-cd8f-4abb-a30a-65a15fa39a76.png",
    "/lovable-uploads/e4f03843-1c51-4a1d-9fb6-70947456afc4.png",
    "/lovable-uploads/b0ba8fd0-ecbb-49eb-8f4f-7b30e71f415a.png",
    "/lovable-uploads/268f701e-2a32-4de1-ac8d-22d31896c0d2.png",
    "/lovable-uploads/e5223ee7-72cc-45df-9c38-64c4142b5a4e.png",
    "/lovable-uploads/6ca08cfe-b51c-41ce-9edb-dd5c99e9442f.png",
    "/lovable-uploads/a7003bd0-c7a4-4eb9-9674-bf30e85a29de.png",
    "/lovable-uploads/4917ddc0-dff6-4a36-aa2e-fd81fdcf615d.png",
    "/lovable-uploads/75814492-3527-423c-9761-575497d80b6b.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Julia <span className="text-blue-400">Nascimento</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("tech")}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Tecnologia
              </button>
              <button 
                onClick={() => scrollToSection("fashion")}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Moda
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Olá, eu sou</span>
                <br />
                <span className="text-blue-400">Julia Nascimento</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Desenvolvedora em formação, modelo e apaixonada por tecnologia. 
                Unindo o mundo digital com a criatividade da moda.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Code className="w-4 h-4 mr-2" />
                  Desenvolvedora
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Camera className="w-4 h-4 mr-2" />
                  Modelo
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  <Globe className="w-4 h-4 mr-2" />
                  Criadora de Conteúdo
                </Badge>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection("about")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Conhecer mais
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection("contact")}
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  Entre em contato
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20">
                  <img 
                    src="/lovable-uploads/e5223ee7-72cc-45df-9c38-64c4142b5a4e.png" 
                    alt="Julia Nascimento"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim ✨</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Maracanaú, Ceará</span>
                    <Calendar className="w-6 h-6 text-blue-400 ml-4" />
                    <span className="text-gray-300">11 de dezembro, 2005</span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Sou uma pessoa apaixonada por tecnologia, comunicação e também pelo universo da moda. 
                    Ao longo da minha trajetória, venho construindo uma carreira que une minhas duas grandes 
                    paixões: o desenvolvimento de sistemas e o trabalho como modelo.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Acredito que é possível unir essas paixões para transformar vidas, incluindo a minha. 
                    Busco constantemente me aprimorar e crescer tanto no meio profissional da tecnologia 
                    quanto no universo da moda e da criação de conteúdo digital.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/6ca08cfe-b51c-41ce-9edb-dd5c99e9442f.png" 
                alt="Julia - Foto 1"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/75814492-3527-423c-9761-575497d80b6b.png" 
                alt="Julia - Foto 2"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Career Section */}
      <section id="tech" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">👩‍💻 Carreira na Tecnologia</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Formação Técnica</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Redes de Computadores (2021–2023)</strong>
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Gerenciamento de sistemas Windows e Linux</li>
                  <li>• Máquinas virtuais com VirtualBox</li>
                  <li>• Administração de servidores (DHCP, DNS)</li>
                  <li>• Lógica de programação</li>
                </ul>
                
                <h4 className="text-xl font-bold text-blue-400 mb-4">Experiência Profissional</h4>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Estagiária em CRM e Omnichannel</span>
                </div>
                <p className="text-gray-400 text-sm">Agosto 2023 - Presente</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Graduação Atual</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Análise e Desenvolvimento de Sistemas</strong><br />
                  Faculdade Descomplica (2024–2027)
                </p>
                
                <h4 className="text-xl font-bold text-blue-400 mb-4">Habilidades Técnicas</h4>
                <div className="grid grid-cols-2 gap-2">
                  {techSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 justify-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <h4 className="text-xl font-bold text-blue-400 mb-4 mt-6">Idiomas</h4>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Inglês - Centro Cearense de Idiomas (3 anos)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fashion Career Section */}
      <section id="fashion" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">👠 Minha Trajetória na Moda</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {fashionExperience.map((exp, index) => (
              <Card key={index} className="bg-white/5 border-blue-500/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{exp.year}</h3>
                  <h4 className="text-lg font-semibold text-white mb-2">{exp.title}</h4>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.slice(0, 6).map((photo, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={photo} 
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">Portfolio {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">🚀 Minha Missão e Meus Sonhos</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Sou movida por desafios e apaixonada por tudo o que envolve negócios, tecnologia, 
              comunicação e moda. Acredito que é possível unir essas paixões para transformar vidas, 
              incluindo a minha.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Meu objetivo é ser uma influenciadora digital autêntica e inspiradora, levando informação, 
              motivação e autenticidade para quem me acompanha, sempre conectando o mundo da tecnologia 
              com a criatividade e expressão da moda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Vamos Conversar?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Estou sempre aberta a novas oportunidades e conexões
          </p>
          
          <div className="flex justify-center gap-6">
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Julia Nascimento. Feito com 💙 e muito código.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
