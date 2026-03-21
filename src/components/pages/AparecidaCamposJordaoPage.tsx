import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Heart, Mountain, Church, Leaf, Zap, Phone, Mail, ArrowLeft } from 'lucide-react';

export default function AparecidaCamposJordaoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="w-full bg-white border-b border-gray-100">
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

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-[400px] lg:h-[600px]">
              <Image
                src="https://static.wixstatic.com/media/e4152c_b6b8327fa06b4a6b98113b9571da7b38~mv2.png?originWidth=768&originHeight=576"
                alt="Aparecida e Campos do Jordão"
                className="w-full h-full object-cover"
                width={800}
              />
            </div>
            
            {/* Destination Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-secondary">
              <div className="space-y-6">
                <div>
                  <h1 className="font-heading text-4xl lg:text-5xl font-light mb-4">
                    Aparecida e Campos do Jordão
                  </h1>
                  <p className="font-paragraph text-lg text-gray-600 leading-relaxed">
                    Uma jornada espiritual e natural pelos destinos mais sagrados e pitorescos de São Paulo
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start text-gray-600 pb-4 border-b border-gray-200">
                    <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-paragraph text-sm text-gray-500">Localização</p>
                      <p className="font-paragraph font-medium text-base">São Paulo, Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-600 pb-4 border-b border-gray-200">
                    <Clock className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-paragraph text-sm text-gray-500">Melhor Época</p>
                      <p className="font-paragraph font-medium text-base">Abril a Outubro</p>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <Users className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-paragraph text-sm text-gray-500">Ideal Para</p>
                      <p className="font-paragraph font-medium text-base">Famílias, Casais, Grupos de Fé</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar Informações
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-light">Sobre o Destino</h2>
              <div className="space-y-4 font-paragraph text-gray-700 leading-relaxed">
                <p>
                  Aparecida e Campos do Jordão formam um destino único que combina espiritualidade, natureza e cultura. 
                  Aparecida é o coração religioso do Brasil, enquanto Campos do Jordão oferece paisagens montanhosas de tirar o fôlego.
                </p>
                <p>
                  Este destino é perfeito para quem busca uma experiência transformadora, conectando-se com a fé, a natureza 
                  e a cultura brasileira em um único lugar.
                </p>
                <p>
                  A região oferece uma combinação perfeita de momentos de reflexão espiritual com atividades ao ar livre, 
                  gastronomia local e hospitalidade calorosa.
                </p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://static.wixstatic.com/media/e4152c_048c724778ef45929462c9c9052802e5~mv2.png?originWidth=576&originHeight=384"
                alt="Paisagem de Campos do Jordão"
                className="w-full h-full object-cover rounded-lg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="w-full py-16 bg-secondary">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-light mb-4">Destaques do Destino</h2>
            <p className="font-paragraph text-gray-600 max-w-2xl mx-auto">
              Descubra os principais pontos de interesse e experiências que tornam este destino especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                <Church className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-light mb-3">Basílica de Aparecida</h3>
              <p className="font-paragraph text-gray-600 leading-relaxed">
                Um dos maiores templos católicos do mundo, local de peregrinação e devoção. 
                Experiência espiritual profunda e arquitetura impressionante.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-light mb-3">Campos do Jordão</h3>
              <p className="font-paragraph text-gray-600 leading-relaxed">
                Estância climática com paisagens montanhosas deslumbrantes. Perfeita para caminhadas, 
                piqueniques e contemplação da natureza.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-light mb-3">Natureza Preservada</h3>
              <p className="font-paragraph text-gray-600 leading-relaxed">
                Florestas exuberantes, trilhas ecológicas e paisagens selvagens. 
                Ideal para reconexão com a natureza e bem-estar.
              </p>
            </div>

            {/* Highlight 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-light mb-3">Experiência Espiritual</h3>
              <p className="font-paragraph text-gray-600 leading-relaxed">
                Momentos de reflexão, meditação e conexão espiritual. 
                Ambiente propício para renovação da fé e paz interior.
              </p>
            </div>

            {/* Highlight 5 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-light mb-3">Atividades Variadas</h3>
              <p className="font-paragraph text-gray-600 leading-relaxed">
                Caminhadas, passeios de teleférico, visitas culturais e gastronomia local. 
                Experiências para todos os gostos.
              </p>
            </div>

            {/* Highlight 6 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-light mb-3">Comunidade Acolhedora</h3>
              <p className="font-paragraph text-gray-600 leading-relaxed">
                Povo caloroso e hospitaleiro. Oportunidades para conhecer a cultura local 
                e fazer amizades significativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[120rem] mx-auto px-6">
          <h2 className="font-heading text-4xl font-light mb-12">Principais Atrações</h2>
          
          <div className="space-y-12">
            {/* Aparecida Attractions */}
            <div>
              <h3 className="font-heading text-2xl font-light mb-6 text-primary">Em Aparecida</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-heading text-lg font-light mb-2">Basílica de Aparecida</h4>
                    <p className="font-paragraph text-gray-600">
                      Templo majestoso dedicado à Nossa Senhora Aparecida, padroeira do Brasil. 
                      Oferece experiências espirituais profundas e vistas panorâmicas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-heading text-lg font-light mb-2">Museu de Arte Sacra</h4>
                    <p className="font-paragraph text-gray-600">
                      Acervo impressionante de arte religiosa e histórica. 
                      Compreenda melhor a devoção e a cultura brasileira.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-heading text-lg font-light mb-2">Santuário Nacional</h4>
                    <p className="font-paragraph text-gray-600">
                      Espaço de oração e contemplação. Participe de celebrações e momentos 
                      de comunhão espiritual.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-heading text-lg font-light mb-2">Monumento à Nossa Senhora</h4>
                    <p className="font-paragraph text-gray-600">
                      Estrutura icônica com vista panorâmica da região. 
                      Local perfeito para reflexão e fotografia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campos do Jordão Attractions */}
            <div>
              <h3 className="font-heading text-2xl font-light mb-6 text-primary">Em Campos do Jordão</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-heading text-lg font-light mb-2">Trilhas Ecológicas</h4>
                    <p className="font-paragraph text-gray-600">
                      Caminhos através de florestas exuberantes. Experiência imersiva na natureza 
                      com vistas espetaculares.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-heading text-lg font-light mb-2">Teleférico</h4>
                    <p className="font-paragraph text-gray-600">
                      Passeio aéreo com vistas panorâmicas da região. 
                      Experiência inesquecível de contemplação.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-heading text-lg font-light mb-2">Pico do Itapeva</h4>
                    <p className="font-paragraph text-gray-600">
                      Ponto mais alto da região com vistas de 360 graus. 
                      Ideal para caminhadas e contemplação.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="font-heading text-lg font-light mb-2">Gastronomia Local</h4>
                    <p className="font-paragraph text-gray-600">
                      Restaurantes com culinária regional e internacional. 
                      Experiências gastronômicas memoráveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="w-full py-16 bg-secondary">
        <div className="max-w-[120rem] mx-auto px-6">
          <h2 className="font-heading text-4xl font-light mb-12">Informações Práticas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading text-xl font-light mb-4">Como Chegar</h3>
              <ul className="font-paragraph text-gray-600 space-y-2">
                <li>• Distância de São Paulo: ~150 km</li>
                <li>• Tempo de viagem: ~2-3 horas</li>
                <li>• Acesso por rodovia BR-116</li>
                <li>• Aeroporto mais próximo: Guarulhos</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading text-xl font-light mb-4">Melhor Época</h3>
              <ul className="font-paragraph text-gray-600 space-y-2">
                <li>• Primavera: Setembro a Novembro</li>
                <li>• Outono: Março a Maio</li>
                <li>• Clima ameno e agradável</li>
                <li>• Evitar períodos de chuva intensa</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading text-xl font-light mb-4">O que Levar</h3>
              <ul className="font-paragraph text-gray-600 space-y-2">
                <li>• Roupas confortáveis e adequadas</li>
                <li>• Calçados para caminhada</li>
                <li>• Protetor solar e chapéu</li>
                <li>• Câmera fotográfica</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading text-xl font-light mb-4">Hospedagem</h3>
              <ul className="font-paragraph text-gray-600 space-y-2">
                <li>• Opções variadas de hotéis</li>
                <li>• Pousadas aconchegantes</li>
                <li>• Resorts com infraestrutura completa</li>
                <li>• Reserva antecipada recomendada</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading text-xl font-light mb-4">Alimentação</h3>
              <ul className="font-paragraph text-gray-600 space-y-2">
                <li>• Culinária regional autêntica</li>
                <li>• Restaurantes de diversos estilos</li>
                <li>• Pratos típicos da região</li>
                <li>• Opções vegetarianas disponíveis</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading text-xl font-light mb-4">Dicas Importantes</h3>
              <ul className="font-paragraph text-gray-600 space-y-2">
                <li>• Respeite os locais sagrados</li>
                <li>• Leve água e lanches</li>
                <li>• Contrate guias locais</li>
                <li>• Documente sua experiência</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-lg p-12 text-center">
            <h2 className="font-heading text-4xl font-light text-white mb-4">
              Pronto para sua jornada?
            </h2>
            <p className="font-paragraph text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para conhecer nossos pacotes especiais para Aparecida e Campos do Jordão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Mail className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Packages */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-light mb-4">
              Pacotes Disponíveis
            </h2>
            <p className="font-paragraph text-gray-600">
              Explore nossos pacotes especiais para este destino
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
              <h3 className="font-heading text-2xl font-light">ALLIANCE</h3>
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
                <p>contato@alliance.com.br</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
            <p className="font-paragraph text-sm opacity-75">
              © 2024 Alliance Viagens & Turismo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
