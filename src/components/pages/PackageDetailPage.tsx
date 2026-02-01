import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { PacotesdeViagem } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, Users, Check, ArrowLeft, Phone, Mail, Calendar, CalendarDays } from 'lucide-react';

export default function PackageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [packageData, setPackageData] = useState<PacotesdeViagem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackage = async () => {
      if (!id) {
        setError('ID do pacote não encontrado');
        setIsLoading(false);
        return;
      }

      try {
        const pkg = await BaseCrudService.getById<PacotesdeViagem>('pacotesdeviagem', id);
        setPackageData(pkg);
      } catch (error) {
        console.error('Error fetching package:', error);
        setError('Pacote não encontrado');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-lg">Carregando detalhes do pacote...</p>
        </div>
      </div>
    );
  }

  if (error || !packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-light mb-4">Pacote não encontrado</h2>
          <p className="font-paragraph text-gray-600 mb-8">{error}</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/packages">Voltar aos Pacotes</Link>
          </Button>
        </div>
      </div>
    );
  }

  const inclusions = packageData.inclusions?.split('\n').filter(item => item.trim()) || [];
  const itineraryItems = packageData.itinerary?.split('\n').filter(item => item.trim()) || [];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header Navigation */}
      <header className="w-full bg-secondary border-b border-gray-100">
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
            <div className="hidden md:flex space-x-8">
              <Link to="/#pacotes" className="font-paragraph text-base hover:text-gray-600 transition-colors">
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
      {/* Back Button */}
      <section className="w-full py-6 bg-gray-50">
        <div className="max-w-[120rem] mx-auto px-6">
          <Button variant="ghost" asChild className="text-primary hover:bg-gray-100">
            <Link to="/packages">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Pacotes
            </Link>
          </Button>
        </div>
      </section>
      {/* Package Hero */}
      <section className="w-full">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[600px]">
              <Image
                src={packageData.mainImage || "https://static.wixstatic.com/media/e4152c_9c68328103f94c49860bfb8181feaa59~mv2.png?originWidth=768&originHeight=576"}
                alt={packageData.packageName || "Pacote de viagem"}
                className="w-full h-full object-cover"
                width={800}
              />
            </div>
            
            {/* Package Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h1 className="font-heading text-4xl lg:text-5xl font-light mb-4">
                    {packageData.packageName}
                  </h1>
                  <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                    {packageData.shortDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start text-gray-600 pb-4 border-b border-gray-200">
                    <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-paragraph text-sm text-gray-500">Destino</p>
                      <p className="font-paragraph font-medium text-base">{packageData.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-600 pb-4 border-b border-gray-200">
                    <Clock className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-paragraph text-sm text-gray-500">Duração</p>
                      <p className="font-paragraph font-medium text-base">{packageData.duration}</p>
                    </div>
                  </div>
                  {(packageData.dataDeInicio || packageData.dataDeFim) && (
                    <div className="space-y-3 py-4 px-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                      {packageData.dataDeInicio && (
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full flex-shrink-0">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-paragraph text-xs text-gray-500 uppercase tracking-wide">Início</p>
                            <p className="font-paragraph font-medium text-base text-primary">
                              {new Date(packageData.dataDeInicio).toLocaleDateString('pt-BR', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                        </div>
                      )}
                      {packageData.dataDeFim && (
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full flex-shrink-0">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-paragraph text-xs text-gray-500 uppercase tracking-wide">Término</p>
                            <p className="font-paragraph font-medium text-base text-primary">
                              {new Date(packageData.dataDeFim).toLocaleDateString('pt-BR', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-paragraph text-sm text-gray-500 mb-1">Preço por pessoa</p>
                      <p className="font-heading text-4xl font-light text-primary">
                        R$ {packageData.price?.toLocaleString('pt-BR')}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Solicitar Orçamento
                      </Button>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Mais Informações
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Package Details with Tabs */}
      <section className="w-full py-16">
        <div className="max-w-[120rem] mx-auto px-6">
          <Tabs defaultValue="itinerary" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-12">
              <TabsTrigger value="itinerary" className="font-paragraph text-base">
                Roteiro
              </TabsTrigger>
              <TabsTrigger value="inclusions" className="font-paragraph text-base">
                Inclusões
              </TabsTrigger>
              <TabsTrigger value="contact" className="font-paragraph text-base">
                Contato
              </TabsTrigger>
            </TabsList>

            {/* Itinerary Tab */}
            <TabsContent value="itinerary" className="space-y-8">
              <div className="space-y-8">
                <h2 className="font-heading font-light text-xl">Roteiro Detalhado</h2>
                {itineraryItems.length > 0 ? (
                  <div className="space-y-6">
                    {itineraryItems.map((item, index) => {
                      const isDayHeader = item.trim().match(/^\d+º\s+DIA/i);
                      return (
                        <div key={index}>
                          {isDayHeader ? (
                            <div className="flex items-center gap-4 py-4 px-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-primary shadow-sm">
                              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full flex-shrink-0">
                                <Calendar className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="font-heading text-lg font-light text-primary">
                                {item.trim()}
                              </h3>
                            </div>
                          ) : (
                            <p className="font-paragraph text-gray-700 leading-relaxed text-base pl-14">
                              {item.trim()}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="font-paragraph text-gray-600">
                    {packageData.itinerary || 'Roteiro detalhado será fornecido mediante solicitação.'}
                  </p>
                )}
              </div>
            </TabsContent>

            {/* Inclusions Tab */}
            <TabsContent value="inclusions" className="space-y-8">
              <div className="space-y-8">
                <h2 className="font-heading text-3xl font-light">O que está incluído</h2>
                {inclusions.length > 0 ? (
                  <div className="space-y-3">
                    {inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="font-paragraph text-gray-700">
                          {inclusion.trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-paragraph text-gray-600">
                    {packageData.inclusions || 'Lista de inclusões será fornecida mediante solicitação.'}
                  </p>
                )}
              </div>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-8">
              <div className="space-y-8">
                <h2 className="font-heading text-3xl font-light">Interessado neste pacote?</h2>
                <div className="bg-gray-50 p-8 rounded-lg max-w-2xl">
                  <p className="font-paragraph text-gray-600 mb-6">
                    Entre em contato conosco para mais informações, personalizações e disponibilidade de datas.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-5 h-5 mr-3 text-primary" />
                      <div>
                        <p className="font-paragraph text-sm text-gray-500">Telefone</p>
                        <p className="font-paragraph font-medium">+55 (11) 3456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-5 h-5 mr-3 text-primary" />
                      <div>
                        <p className="font-paragraph text-sm text-gray-500">E-mail</p>
                        <p className="font-paragraph font-medium">contato@peregrina.com.br</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Solicitar Orçamento
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Related Packages */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-light mb-4">
              Outros Destinos Sagrados
            </h2>
            <p className="font-paragraph text-gray-600">
              Explore mais opções de jornadas espirituais
            </p>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/packages">Ver Todos os Pacotes</Link>
            </Button>
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
