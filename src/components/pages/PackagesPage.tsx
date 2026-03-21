import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { PacotesdeViagem } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Clock, Search, Filter, Send, MessageCircle, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Footer from '@/components/Footer';

export default function PackagesPage() {
  const [packages, setPackages] = useState<PacotesdeViagem[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<PacotesdeViagem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [destinationFilter, setDestinationFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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
        setPackages(updatedItems);
        setFilteredPackages(updatedItems);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndUpdatePackages();
  }, []);

  useEffect(() => {
    let filtered = packages;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(pkg =>
        pkg.packageName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.destination?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.shortDescription?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Destination filter
    if (destinationFilter !== 'all') {
      filtered = filtered.filter(pkg => pkg.destination === destinationFilter);
    }

    // Price filter
    if (priceFilter !== 'all') {
      filtered = filtered.filter(pkg => {
        if (!pkg.price) return false;
        switch (priceFilter) {
          case 'low':
            return pkg.price < 3000;
          case 'medium':
            return pkg.price >= 3000 && pkg.price < 6000;
          case 'high':
            return pkg.price >= 6000;
          default:
            return true;
        }
      });
    }

    setFilteredPackages(filtered);
  }, [packages, searchTerm, destinationFilter, priceFilter]);

  const uniqueDestinations = Array.from(new Set(packages.map(pkg => pkg.destination).filter(Boolean)));

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', contactForm);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-lg">Carregando pacotes...</p>
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
            <Link to="/" className="flex items-center">
              <Image
                src="https://static.wixstatic.com/media/e4152c_67816ded5533438aae26972a1ce2a94a~mv2.png"
                alt="Alliance Viagens & Turismo"
                className="h-12 w-auto object-contain"
                width={200}
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/#pacotes" className="font-paragraph text-base text-primary font-medium">
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

      {/* Page Header */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-light mb-6">
            Nossos Pacotes
          </h1>
          <p className="font-paragraph text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa seleção completa de jornadas espirituais aos destinos mais sagrados do mundo
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="w-full py-8 bg-secondary border-b border-gray-100">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar pacotes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-paragraph"
              />
            </div>
            <Select value={destinationFilter} onValueChange={setDestinationFilter}>
              <SelectTrigger className="font-paragraph">
                <SelectValue placeholder="Destino" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Destinos</SelectItem>
                {uniqueDestinations.map((destination) => (
                  <SelectItem key={destination} value={destination}>
                    {destination}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="font-paragraph">
                <SelectValue placeholder="Faixa de Preço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Preços</SelectItem>
                <SelectItem value="low">Até R$ 3.000</SelectItem>
                <SelectItem value="medium">R$ 3.000 - R$ 6.000</SelectItem>
                <SelectItem value="high">Acima de R$ 6.000</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setDestinationFilter('all');
                setPriceFilter('all');
              }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Filter className="w-4 h-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="w-full py-16">
        <div className="max-w-[120rem] mx-auto px-6">
          {filteredPackages.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="font-heading text-2xl font-light mb-4">Nenhum pacote encontrado</h3>
              <p className="font-paragraph text-gray-600 mb-8">
                Tente ajustar seus filtros ou termos de busca
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setDestinationFilter('all');
                  setPriceFilter('all');
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Ver Todos os Pacotes
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="font-paragraph text-gray-600">
                  Mostrando {filteredPackages.length} de {packages.length} pacotes
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((pkg) => (
                  <div key={pkg._id} className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src={pkg.mainImage || "https://static.wixstatic.com/media/e4152c_cf15d7c17a5b4573ab48c449f7cac42b~mv2.png?originWidth=384&originHeight=256"}
                        alt={pkg.packageName || "Pacote de viagem"}
                        className="w-full h-full object-cover"
                        width={400}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-light mb-3">
                        {pkg.packageName}
                      </h3>
                      <p className="font-paragraph text-gray-600 mb-4 line-clamp-3">
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
                        {pkg.dataDeInicio && pkg.dataDeFim && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
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
            </>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-4xl font-light">
                  Tem Dúvidas?
                </h2>
              </div>
              <div className="space-y-6">
                <p className="font-paragraph text-xl text-gray-700 leading-relaxed">
                  Nossa equipe está pronta para ajudar você a escolher a jornada espiritual perfeita. 
                  Entre em contato conosco para esclarecimentos ou informações personalizadas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-paragraph text-gray-600">Resposta em até 2 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-paragraph text-gray-600">Atendimento personalizado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 rounded-lg shadow-sm">
              <h3 className="font-heading text-2xl font-light mb-6">
                Envie sua Mensagem
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <Input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactInputChange}
                      required
                      className="font-paragraph"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactInputChange}
                      required
                      className="font-paragraph"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactInputChange}
                    className="font-paragraph"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactInputChange}
                    required
                    rows={4}
                    className="font-paragraph"
                    placeholder="Conte-nos sobre suas dúvidas, interesse em algum destino específico, datas preferidas..."
                  />
                </div>
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}