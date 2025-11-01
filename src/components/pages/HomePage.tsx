import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { PacotesdeViagem } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users } from 'lucide-react';

export default function HomePage() {
  const [featuredPackages, setFeaturedPackages] = useState<PacotesdeViagem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedPackages = async () => {
      try {
        const { items } = await BaseCrudService.getAll<PacotesdeViagem>('pacotesdeviagem');
        // Get first 3 packages as featured
        setFeaturedPackages(items.slice(0, 3));
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedPackages();
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
    <div className="min-h-screen bg-secondary">
      {/* Header Navigation */}
      <header className="w-full bg-secondary border-b border-gray-100">
        <div className="max-w-[120rem] mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="font-heading text-xl font-light tracking-wide">
              PEREGRINA
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/packages" className="font-paragraph text-base hover:text-gray-600 transition-colors">
                Pacotes
              </Link>
              <Link to="/about" className="font-paragraph text-base hover:text-gray-600 transition-colors">
                Sobre
              </Link>
              <Link to="/contact" className="font-paragraph text-base hover:text-gray-600 transition-colors">
                Contato
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Inspired by the layout structure */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Typography (inspired by SPAZIO layout) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="font-paragraph text-lg text-gray-600 tracking-wide uppercase">
                Turismo Religioso Especializado
              </p>
              <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
                JORNADAS
                <br />
                SAGRADAS
              </h1>
            </div>
            <div className="space-y-6 max-w-2xl">
              <p className="font-paragraph text-xl leading-relaxed text-gray-700">
                Conecte-se com o divino através de experiências autênticas de peregrinação. 
                Oferecemos jornadas cuidadosamente planejadas aos destinos mais sagrados do mundo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-gray-800 px-8 py-3">
                  <Link to="/packages">Explorar Destinos</Link>
                </Button>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                  <Link to="/contact">Fale Conosco</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="lg:col-span-5">
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/e4152c_f6ddb97c4a0a47169f7dee5c56a5fe9f~mv2.png?originWidth=576&originHeight=576"
                alt="Peregrinos em jornada espiritual"
                className="w-full h-full object-cover"
                width={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Destinos em Destaque
            </h2>
            <p className="font-paragraph text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra nossos pacotes mais procurados para experiências espirituais transformadoras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div key={pkg._id} className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={pkg.mainImage || "https://static.wixstatic.com/media/e4152c_a161e35ff4104725ae4180c76e17a116~mv2.png?originWidth=384&originHeight=256"}
                    alt={pkg.packageName || "Pacote de viagem"}
                    className="w-full h-full object-cover"
                    width={400}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-light mb-3">
                    {pkg.packageName}
                  </h3>
                  <p className="font-paragraph text-gray-600 mb-4 line-clamp-2">
                    {pkg.shortDescription}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-paragraph">{pkg.destination}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-paragraph">{pkg.duration}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-right">
                      <p className="font-paragraph text-2xl font-semibold text-primary">
                        R$ {pkg.price?.toLocaleString('pt-BR')}
                      </p>
                      <p className="font-paragraph text-sm text-gray-500">por pessoa</p>
                    </div>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to={`/packages/${pkg._id}`}>Ver Detalhes</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gray-800 px-12 py-4">
              <Link to="/packages">Ver Todos os Pacotes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-light">
                Sua Jornada Espiritual Começa Aqui
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-lg leading-relaxed text-gray-700">
                  Com mais de 15 anos de experiência em turismo religioso, a Peregrina é especializada 
                  em criar experiências autênticas e transformadoras para peregrinos de todas as idades.
                </p>
                <p className="font-paragraph text-lg leading-relaxed text-gray-700">
                  Nossos roteiros são cuidadosamente planejados para proporcionar momentos de reflexão, 
                  oração e conexão espiritual nos destinos mais sagrados do mundo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="font-heading text-3xl font-light text-primary mb-2">500+</div>
                  <p className="font-paragraph text-gray-600">Peregrinos Atendidos</p>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-light text-primary mb-2">25+</div>
                  <p className="font-paragraph text-gray-600">Destinos Sagrados</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/e4152c_a9864fa639d947e38114cc9393256a8a~mv2.png?originWidth=576&originHeight=448"
                alt="Grupo de peregrinos em oração"
                className="w-full h-full object-cover"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-footerbackground text-primary-foreground py-16">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-light">PEREGRINA</h3>
              <p className="font-paragraph text-sm leading-relaxed opacity-90">
                Especializados em turismo religioso, oferecemos jornadas espirituais 
                autênticas aos destinos mais sagrados do mundo.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-light">Destinos</h4>
              <ul className="space-y-2 font-paragraph text-sm">
                <li><Link to="/packages" className="hover:opacity-75 transition-opacity">Terra Santa</Link></li>
                <li><Link to="/packages" className="hover:opacity-75 transition-opacity">Roma e Vaticano</Link></li>
                <li><Link to="/packages" className="hover:opacity-75 transition-opacity">Santiago de Compostela</Link></li>
                <li><Link to="/packages" className="hover:opacity-75 transition-opacity">Fátima</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-light">Empresa</h4>
              <ul className="space-y-2 font-paragraph text-sm">
                <li><Link to="/about" className="hover:opacity-75 transition-opacity">Sobre Nós</Link></li>
                <li><Link to="/contact" className="hover:opacity-75 transition-opacity">Contato</Link></li>
                <li><Link to="/packages" className="hover:opacity-75 transition-opacity">Todos os Pacotes</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-light">Contato</h4>
              <div className="space-y-2 font-paragraph text-sm">
                <p>+55 (11) 3456-7890</p>
                <p>contato@peregrina.com.br</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="font-paragraph text-sm opacity-75">
              © 2024 Peregrina Turismo Religioso. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}