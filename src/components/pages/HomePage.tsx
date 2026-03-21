import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { PacotesdeViagem } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Phone, Mail, Star, Award, Shield, Calendar, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function HomePage() {
  const [featuredPackages, setFeaturedPackages] = useState<PacotesdeViagem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndUpdatePackages = async () => {
      try {
        const { items } = await BaseCrudService.getAll<PacotesdeViagem>('pacotesdeviagem');
        
        // Update all packages with the new dates
        const updatePromises = items.map(async (pkg) => {
          try {
            await BaseCrudService.update<PacotesdeViagem>('pacotesdeviagem', {
              ...pkg,
              dataDeInicio: new Date('2025-10-15'),
              dataDeFim: new Date('2025-12-20')
            });
          } catch (error) {
            console.error(`Error updating package ${pkg._id}:`, error);
          }
        });
        
        await Promise.all(updatePromises);
        
        // Fetch updated packages
        const { items: updatedItems } = await BaseCrudService.getAll<PacotesdeViagem>('pacotesdeviagem');
        setFeaturedPackages(updatedItems.slice(0, 3));
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndUpdatePackages();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-lg">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-[120rem] mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <Image
                src="https://static.wixstatic.com/media/e4152c_67816ded5533438aae26972a1ce2a94a~mv2.png"
                alt="Alliance Viagens & Turismo"
                className="h-12 w-auto object-contain"
                width={200}
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#pacotes" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                Pacotes
              </a>
              <Link to="/about" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link to="/contact" className="font-paragraph text-base text-foreground hover:text-primary transition-colors">
                Contato
              </Link>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>(11) 3456-7890</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>contato@alliance.com.br</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/e4152c_02c111d5537e47eba9057926ee6ed743~mv2.jpg"
            alt="Muro das Lamentações e Cúpula da Rocha em Jerusalém - Destino sagrado para turismo religioso"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/50"></div>
        </div>
        
        <div className="relative z-10 max-w-[120rem] mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-accent">
                <Star className="w-5 h-5 stroke-[#ffac00] fill-[#ffac00ff]" />
                <span className="font-paragraph text-lg font-medium text-[#ffac00ff]">Mais de 20 anos de experiência</span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
                Realize seus
                <br />
                <span className="text-[#ffac00ff]">sonhos de viagem</span>
              </h1>
              <p className="font-paragraph text-xl leading-relaxed opacity-90 max-w-2xl">
                Na Alliance Viagens, transformamos seus sonhos em realidade. Especializados em turismo religioso 
                e experiências espirituais únicas, oferecemos jornadas inesquecíveis aos destinos mais sagrados do mundo.
              </p>
              
              {/* Destacar diferenciais */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Users className="w-5 h-5 text-[#ffac00]" />
                  <span className="font-paragraph text-base font-medium">Viagens em grupos fechados</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 text-[#ffac00]" />
                  <span className="font-paragraph text-base font-medium">Viagens com diretor espiritual</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-[#ffac00] text-white hover:bg-[#ffac00] px-8 py-4 text-lg">
                  <a href="#pacotes">Explorar Destinos</a>
                </Button>
                <Button variant="outline" asChild size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                  <Link to="/contact">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="w-full bg-secondary p-0 py-20 px-0">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Por que escolher a Alliance?
            </h2>
            <p className="font-paragraph text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em criar experiências de viagem únicas e memoráveis, com grupos fechados e acompanhamento espiritual
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Experiência Comprovada
              </h3>
              <p className="font-paragraph text-gray-600">
                Mais de 20 anos no mercado, com milhares de clientes satisfeitos e destinos únicos.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-[#ffac00ff]">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Grupos Fechados
              </h3>
              <p className="font-paragraph text-gray-600">
                Viagens exclusivas em grupos fechados para uma experiência mais íntima e personalizada.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="5" y1="9" x2="19" y2="9" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Diretor Espiritual
              </h3>
              <p className="font-paragraph text-gray-600">
                Acompanhamento de diretor espiritual especializado para enriquecer sua jornada de fé.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Packages Section */}
      <section id="pacotes" className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Destinos em Destaque
            </h2>
            <p className="font-paragraph text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra nossos pacotes mais procurados e embarque na viagem dos seus sonhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64">
                  <Image
                    src={pkg.mainImage || "https://static.wixstatic.com/media/e4152c_6ffe89ea471545df882ace93c2483b8b~mv2.png?originWidth=384&originHeight=384"}
                    alt={pkg.packageName || "Pacote de viagem"}
                    className="w-full h-full object-cover"
                    width={400}
                  />
                  <div className="absolute top-4 right-4 bg-[#ffac00] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Oferta Especial
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {pkg.packageName}
                  </h3>
                  <p className="font-paragraph text-gray-600 mb-4 line-clamp-2">
                    {pkg.shortDescription}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-paragraph">{pkg.destination}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-paragraph">{pkg.duration}</span>
                    </div>
                    {pkg.dataDeInicio && pkg.dataDeFim && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-paragraph">
                          {format(new Date(pkg.dataDeInicio), 'dd/MM/yyyy', { locale: ptBR })} - {format(new Date(pkg.dataDeFim), 'dd/MM/yyyy', { locale: ptBR })}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link to={`/packages/${pkg._id}`}>Ver Detalhes</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#ffac00] text-white hover:bg-[#ffac00]/90 px-12 py-4 text-lg">
              <a href="#pacotes">Ver Todos os Pacotes</a>
            </Button>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Sua próxima aventura começa aqui
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-lg leading-relaxed text-gray-700">
                  A Alliance Viagens é uma empresa consolidada no mercado de turismo, com mais de 20 anos 
                  de experiência em proporcionar viagens inesquecíveis para nossos clientes.
                </p>
                <p className="font-paragraph text-lg leading-relaxed text-gray-700">
                  Oferecemos roteiros personalizados, atendimento especializado e os melhores preços 
                  do mercado. Nossa missão é transformar seus sonhos de viagem em realidade.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-2">5000+</div>
                  <p className="font-paragraph text-gray-600">Clientes Satisfeitos</p>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="font-paragraph text-gray-600">Destinos Únicos</p>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-2">20+</div>
                  <p className="font-paragraph text-gray-600">Anos de Experiência</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/about">Conheça Nossa História</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://static.wixstatic.com/media/e4152c_5dfa2b9b9371443dac9063dc8e8c7750~mv2.png?originWidth=576&originHeight=448"
                alt="Equipe Alliance Viagens"
                className="w-full h-full object-cover"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              DEPOIMENTOS DOS CLIENTES
            </h2>
            <div className="w-24 h-1 bg-[#ffac00] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl p-8 md:p-12 shadow-lg relative">
              <div className="absolute top-6 left-8 text-6xl opacity-20 font-serif text-[#ffac00ff]">\"</div>
              <div className="relative z-10">
                <p className="font-paragraph text-lg md:text-xl leading-relaxed text-gray-700 mb-8 italic">
                  "Viajei para a Terra Santa com a Alliance Viagens em 2016, realizando um sonho muito antigo de conhecer os locais em que Jesus realizou os milagres, transformando a vida das pessoas e trazendo a Boa Notícia de um mundo melhor. Uma viagem magnífica!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#ffac00ff] stroke-[#ffac00]" style={{ strokeWidth: '2px' }} />
                      ))}
                    </div>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      Maria de Lourdes
                    </p>
                    <p className="font-paragraph text-sm text-gray-500">
                      Cliente desde 2016
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 right-8 text-6xl opacity-20 font-serif rotate-180 bg-[transparent] text-[#ffac00ff]">\"</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-20 bg-primary">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Pronto para sua próxima aventura?
            </h2>
            <p className="font-paragraph text-xl text-white/90 leading-relaxed">
              Entre em contato conosco e descubra como podemos tornar sua viagem dos sonhos uma realidade. 
              Nossa equipe especializada está pronta para criar o roteiro perfeito para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#ffac00] text-white hover:bg-[#ffac00]/90 px-8 py-4 text-lg">
                <Link to="/contact">Solicitar Orçamento</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <Link to="/packages">Ver Pacotes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-footerbackground text-white py-16">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="https://static.wixstatic.com/media/e4152c_67816ded5533438aae26972a1ce2a94a~mv2.png"
                  alt="Alliance Viagens & Turismo"
                  className="h-8 w-auto object-contain brightness-0 invert"
                  width={150}
                />
              </div>
              <p className="font-paragraph text-sm leading-relaxed opacity-90">
                Há mais de 20 anos realizando sonhos e criando memórias inesquecíveis. 
                Sua próxima aventura começa aqui.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Destinos Populares</h4>
              <ul className="space-y-2 font-paragraph text-sm">
                <li><Link to="/packages" className="hover:text-accent transition-colors">Europa</Link></li>
                <li><Link to="/packages" className="hover:text-accent transition-colors">Estados Unidos</Link></li>
                <li><Link to="/packages" className="hover:text-accent transition-colors">Ásia</Link></li>
                <li><Link to="/packages" className="hover:text-accent transition-colors">América do Sul</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Empresa</h4>
              <ul className="space-y-2 font-paragraph text-sm">
                <li><Link to="/about" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contato</Link></li>
                <li><Link to="/packages" className="hover:text-accent transition-colors">Todos os Pacotes</Link></li>
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Contato</h4>
              <div className="space-y-3 font-paragraph text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>(11) 3456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>contato@alliance.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="font-paragraph text-sm opacity-75">
              © 2024 Alliance Viagens & Turismo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
