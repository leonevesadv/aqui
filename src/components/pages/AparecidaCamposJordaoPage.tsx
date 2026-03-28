import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, Users, Heart, Mountain, Church, Leaf, Zap, Phone, Mail, ArrowLeft, Plane, DollarSign, FileText } from 'lucide-react';
import Footer from '@/components/Footer';

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
                src="https://static.wixstatic.com/media/e4152c_b8ca6606d19147f8baf773ad3045be08~mv2.jpg"
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
                  <Button className="text-primary-foreground hover:bg-primary/90 w-full bg-primary">
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
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-light mb-4">Informações do Destino</h2>
            <p className="font-paragraph text-gray-600 max-w-2xl mx-auto">
              Explore todos os detalhes sobre sua jornada espiritual e natural
            </p>
          </div>

          <Tabs defaultValue="roteiro" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-secondary">
              <TabsTrigger value="roteiro" className="font-paragraph font-bold">Roteiro</TabsTrigger>
              <TabsTrigger value="servicos" className="font-paragraph font-bold">Serviços</TabsTrigger>
              <TabsTrigger value="aereo" className="font-paragraph font-bold">Aéreo</TabsTrigger>
              <TabsTrigger value="valores" className="font-paragraph font-bold">Valores</TabsTrigger>
              <TabsTrigger value="documentos" className="font-paragraph font-bold">Documentos</TabsTrigger>
            </TabsList>

            {/* Roteiro Tab */}
            <TabsContent value="roteiro" className="space-y-8">
              {/* Day 1 */}
              <div className="border-l-4 border-primary pl-8 py-6 bg-blue-50 rounded-r-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-light text-primary mb-2">1º DIA - 27/03/2026</h3>
                    <p className="font-paragraph text-lg font-medium text-gray-800">Fortaleza | Guarulhos | Campos do Jordão</p>
                  </div>
                </div>
                <div className="font-paragraph text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    Encontro no aeroporto, conforme horário previamente indicado, para embarque com destino a Guarulhos. 
                    Chegada e continuação da viagem para Campos do Jordão.
                  </p>
                  <p>
                    City tour guiado pelos principais pontos turísticos. Check-in, jantar incluído e noite livre.
                  </p>
                </div>
              </div>

              {/* Day 2 */}
              <div className="border-l-4 border-primary pl-8 py-6 bg-blue-50 rounded-r-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-light text-primary mb-2">2º DIA - 28/03/2026</h3>
                    <p className="font-paragraph text-lg font-medium text-gray-800">Campos do Jordão | Aparecida</p>
                  </div>
                </div>
                <div className="font-paragraph text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    Café da manhã no hotel. Manhã livre, com opção de passeio de trenzinho.
                  </p>
                  <p>
                    Visita incluída a uma loja de vinhos e chocolates para degustação. Tempo livre para almoço (não incluso).
                  </p>
                  <p>
                    À tarde, viagem com destino a Aparecida. Check-in, hospedagem e jantar.
                  </p>
                </div>
              </div>

              {/* Day 3 */}
              <div className="border-l-4 border-primary pl-8 py-6 bg-blue-50 rounded-r-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-light text-primary mb-2">3º DIA - 29/03/2026</h3>
                    <p className="font-paragraph text-lg font-medium text-gray-800">Aparecida | Canção Nova (Domingo de Ramos)</p>
                  </div>
                </div>
                <div className="font-paragraph text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    Após o café da manhã, saída para Guaratinguetá, onde visitaremos a Casa e o Museu de Frei Galvão.
                  </p>
                  <p>
                    Em seguida, continuação até a Canção Nova, com participação na Santa Missa no Santuário do Pai das Misericórdias.
                  </p>
                  <p>
                    Tempo livre para possível participação na palestra do Frei Gilson (a confirmar). Retorno a Aparecida, hospedagem e jantar incluído.
                  </p>
                </div>
              </div>

              {/* Day 4 */}
              <div className="border-l-4 border-primary pl-8 py-6 bg-blue-50 rounded-r-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-light text-primary mb-2">4º DIA - 30/03/2026</h3>
                    <p className="font-paragraph text-lg font-medium text-gray-800">Aparecida (Visitas Devocionais)</p>
                  </div>
                </div>
                <div className="font-paragraph text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    Café da manhã. Visita guiada às Basílicas e a todo o complexo do Santuário Nacional.
                  </p>
                  <p>
                    Tempo livre para passeios opcionais, como a subida ao Mirante da Torre ou o passeio de bondinho até o Morro do Cruzeiro.
                  </p>
                  <p>
                    À tarde, faremos o Caminho do Rosário. Jantar e hospedagem.
                  </p>
                </div>
              </div>

              {/* Day 5 */}
              <div className="border-l-4 border-primary pl-8 py-6 bg-blue-50 rounded-r-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-light text-primary mb-2">5º DIA - 31/03/2026</h3>
                    <p className="font-paragraph text-lg font-medium text-gray-800">Aparecida | Fortaleza</p>
                  </div>
                </div>
                <div className="font-paragraph text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    Café da manhã. No horário a ser informado, check-out no hotel e traslado ao aeroporto de Guarulhos para embarque de retorno a Fortaleza.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Serviços Tab */}
            <TabsContent value="servicos" className="space-y-8">
              {/* Serviços Inclusos */}
              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
                <h3 className="font-heading text-2xl font-light text-primary mb-6">Serviços Inclusos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-paragraph text-gray-700">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Passagem aérea com mala de bordo até 10kg + mochila</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Transporte exclusivo para o grupo (ônibus ou Micro)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Hotel Rainha dos Apóstolos</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>5 cafés da manhã incluídos</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>4 jantares incluídos</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Guia de turismo para City Tour e visitas do programa</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Visitas: Aparecida, Canção Nova, Guará, Campos do Jordão</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Coordenador da Alliance Viajando com o Grupo</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span>Seguro viagem e assistência</span>
                  </div>
                </div>
              </div>

              {/* Serviços Não Inclusos */}
              <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-accent">
                <h3 className="font-heading text-2xl font-light mb-6 text-[#fdad06ff]">Serviços Não Inclusos</h3>
                <div className="space-y-4 font-paragraph text-gray-700">
                  <div className="flex gap-3">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    <div>
                      <p className="font-medium">Taxa de Embarque</p>
                      <p className="text-sm text-gray-600">Valor aproximado de R$ 79,00</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    <div>
                      <p className="font-medium">Gorjeta para Guia e Motorista</p>
                      <p className="text-sm text-gray-600">Valor mínimo por pessoa: R$ 30,00 (não está incluso). Será recolhido no dia da reunião do grupo.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detalhes Adicionais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="font-heading text-xl font-light text-primary mb-4">Hospedagem</h3>
                  <ul className="font-paragraph text-gray-700 space-y-2">
                    <li>• Hotel Rainha dos Apóstolos</li>
                    <li>• Quartos confortáveis e bem equipados</li>
                    <li>• Café da manhã incluído</li>
                    <li>• Acesso a piscina e academia</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="font-heading text-xl font-light text-primary mb-4">Refeições</h3>
                  <ul className="font-paragraph text-gray-700 space-y-2">
                    <li>• 5 cafés da manhã diários</li>
                    <li>• 4 jantares incluídos</li>
                    <li>• Almoços selecionados</li>
                    <li>• Degustação de vinhos e chocolates</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="font-heading text-xl font-light text-primary mb-4">Transporte</h3>
                  <ul className="font-paragraph text-gray-700 space-y-2">
                    <li>• Passagens aéreas ida e volta</li>
                    <li>• Traslados aeroporto-hotel</li>
                    <li>• Ônibus ou Micro climatizado</li>
                    <li>• Guia acompanhante em português</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="font-heading text-xl font-light text-primary mb-4">Atividades</h3>
                  <ul className="font-paragraph text-gray-700 space-y-2">
                    <li>• City tour em Campos do Jordão</li>
                    <li>• Visitas guiadas às Basílicas</li>
                    <li>• Passeios opcionais</li>
                    <li>• Experiências espirituais</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="font-heading text-xl font-light text-primary mb-4">Seguro</h3>
                  <ul className="font-paragraph text-gray-700 space-y-2">
                    <li>• Seguro viagem incluído</li>
                    <li>• Cobertura médica</li>
                    <li>• Assistência 24 horas</li>
                    <li>• Proteção bagagem</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg">
                  <h3 className="font-heading text-xl font-light text-primary mb-4">Acompanhamento</h3>
                  <ul className="font-paragraph text-gray-700 space-y-2">
                    <li>• Coordenador da Alliance com o grupo</li>
                    <li>• Guia especializado</li>
                    <li>• Suporte em português</li>
                    <li>• Atendimento personalizado</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Aéreo Tab */}
            <TabsContent value="aereo" className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <Plane className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-2xl font-light text-primary mb-2">Voos Confirmados</h3>
                    <p className="font-paragraph text-gray-700">Detalhes completos sobre seus voos de ida e volta</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="border-l-4 border-primary pl-6 bg-white p-6 rounded-r-lg">
                    <h4 className="font-heading text-lg font-light text-primary mb-4">Voo de Ida</h4>
                    <div className="space-y-3 font-paragraph text-gray-700">
                      <div>
                        <p className="text-sm text-gray-500">Data</p>
                        <p className="font-medium">27 de Março de 2026</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Companhia Aérea</p>
                        <p className="font-medium text-accent">LATAM</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Rota</p>
                        <p className="font-medium">Fortaleza (FOR) → Guarulhos (GRU)</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Saída</p>
                        <p className="font-medium text-lg">04:40</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Chegada</p>
                        <p className="font-medium text-lg">08:15</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-primary pl-6 bg-white p-6 rounded-r-lg">
                    <h4 className="font-heading text-lg font-light text-primary mb-4">Voo de Retorno</h4>
                    <div className="space-y-3 font-paragraph text-gray-700">
                      <div>
                        <p className="text-sm text-gray-500">Data</p>
                        <p className="font-medium">31 de Março de 2026</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Companhia Aérea</p>
                        <p className="font-medium text-accent">LATAM</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Rota</p>
                        <p className="font-medium">Guarulhos (GRU) → Fortaleza (FOR)</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Saída</p>
                        <p className="font-medium text-lg">15:25</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Chegada</p>
                        <p className="font-medium text-lg">18:50</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-heading text-lg font-light mb-4">Informações Importantes</h4>
                  <ul className="font-paragraph text-gray-700 space-y-2">
                    <li>• Chegue ao aeroporto com 3 horas de antecedência</li>
                    <li>• Leve documento de identidade válido (RG ou Passaporte)</li>
                    <li>• Bagagem: 1 mala de até 23kg + 1 bagagem de mão</li>
                    <li>• Refeições a bordo incluídas</li>
                    <li>• Assentos pré-selecionados</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Valores Tab */}
            <TabsContent value="valores" className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-2xl font-light text-primary mb-2">Tabela de Preços</h3>
                    <p className="font-paragraph text-gray-700">Valores por pessoa em reais (R$)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg border-2 border-primary">
                    <h4 className="font-heading text-lg font-light text-primary mb-4">Acomodação Dupla</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="font-paragraph text-gray-700">Valor por pessoa</span>
                        <span className="font-heading text-2xl font-light text-primary">R$ 3.890</span>
                      </div>
                      <div className="text-sm font-paragraph text-gray-600 space-y-1">
                        <p>✓ Passagens aéreas</p>
                        <p>✓ Hospedagem 4 noites</p>
                        <p>✓ Refeições incluídas</p>
                        <p>✓ Guia acompanhante</p>
                        <p>✓ Seguro viagem</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-2 border-accent">
                    <h4 className="font-heading text-lg font-light text-accent mb-4">Acomodação Tripla</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                        <span className="font-paragraph text-gray-700">Valor por pessoa</span>
                        <span className="font-heading text-2xl font-light text-accent">R$ 3.490</span>
                      </div>
                      <div className="text-sm font-paragraph text-gray-600 space-y-1">
                        <p>✓ Passagens aéreas</p>
                        <p>✓ Hospedagem 4 noites</p>
                        <p>✓ Refeições incluídas</p>
                        <p>✓ Guia acompanhante</p>
                        <p>✓ Seguro viagem</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-heading text-lg font-light mb-4">O que está incluído</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-paragraph text-gray-700">
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Passagens aéreas Fortaleza - São Paulo - Fortaleza</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Hospedagem em hotéis 3 e 4 estrelas</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Café da manhã diário</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Jantares incluídos</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Traslados aeroporto-hotel</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Ônibus climatizado</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Guia especializado em português</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Seguro viagem completo</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-orange-50 rounded-lg border border-accent">
                  <h4 className="font-heading text-lg font-light text-accent mb-3">Não incluído</h4>
                  <ul className="font-paragraph text-gray-700 space-y-2">
                    <li>• Almoços (exceto os mencionados no roteiro)</li>
                    <li>• Passeios opcionais e atividades extras</li>
                    <li>• Bebidas e despesas pessoais</li>
                    <li>• Gorjetas e taxas adicionais</li>
                  </ul>
                </div>

                <div className="mt-8 p-8 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary">
                  <h3 className="font-heading text-2xl font-light text-primary mb-6">INVESTIMENTOS</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-paragraph text-gray-600 mb-2">Preço por pessoa para compartilhar</p>
                          <h4 className="font-heading text-xl font-light text-primary">Apartamento Duplo</h4>
                        </div>
                        <div className="text-right">
                          <p className="font-heading text-3xl font-light text-primary">R$ 3.880</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-paragraph text-gray-600 mb-2">Suplemento para</p>
                          <h4 className="font-heading text-xl font-light text-secondary-foreground">Apartamento Individual</h4>
                        </div>
                        <div className="text-right">
                          <p className="font-heading text-3xl font-light text-accent">R$ 850</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Documentos Tab */}
            <TabsContent value="documentos" className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-2xl font-light text-primary mb-2">Documentação Necessária</h3>
                    <p className="font-paragraph text-gray-700">Verifique todos os documentos necessários para sua viagem</p>
                  </div>
                </div>

                {/* DOCUMENTOS NECESSÁRIOS - ALLIANCE VIAGENS */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-primary mb-8">
                  <h4 className="font-heading text-xl font-light text-primary mb-6">DOCUMENTOS NECESSÁRIOS</h4>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h5 className="font-heading text-lg font-light text-primary mb-3">Cópia do CPF e da Identidade</h5>
                      <p className="font-paragraph text-gray-700 leading-relaxed">
                        Cópia do CPF e da Identidade ou qualquer documento com foto e identificação legível e sem rasuras.
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <h5 className="font-heading text-lg font-light text-primary mb-3">Ficha de Inscrição</h5>
                      <p className="font-paragraph text-gray-700 leading-relaxed">
                        Ficha de Inscrição ALLIANCE VIAGENS tudo devidamente preenchido e assinado.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-heading text-lg font-light text-primary mb-3">Contrato ALLIANCE VIAGENS</h5>
                      <p className="font-paragraph text-gray-700 leading-relaxed">
                        Contrato ALLIANCE VIAGENS tudo devidamente preenchido e assinado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                    <h4 className="font-heading text-lg font-light text-primary mb-4">Documentos Obrigatórios</h4>
                    <ul className="font-paragraph text-gray-700 space-y-3">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>RG ou Passaporte</strong> - Válido e em bom estado</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>CPF</strong> - Documento original</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>Comprovante de Vacinação</strong> - Se exigido</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>Cartão de Vacinação</strong> - Atualizado</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
                    <h4 className="font-heading text-lg font-light text-accent mb-4">Documentos Recomendados</h4>
                    <ul className="font-paragraph text-gray-700 space-y-3">
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Cópia de Documentos</strong> - Deixe cópias com alguém</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Comprovante de Renda</strong> - Para seguro viagem</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Cartão de Crédito</strong> - Para emergências</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <span><strong>Contatos de Emergência</strong> - Anotados</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-heading text-lg font-light mb-4">Procedimentos Importantes</h4>
                  <div className="space-y-4 font-paragraph text-gray-700">
                    <div>
                      <p className="font-medium text-primary mb-2">Antes da Viagem:</p>
                      <ul className="space-y-1 ml-4">
                        <li>✓ Verifique a validade de seus documentos</li>
                        <li>✓ Faça cópias de documentos importantes</li>
                        <li>✓ Comunique seu banco sobre a viagem</li>
                        <li>✓ Confirme informações de voo 48h antes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-2">No Aeroporto:</p>
                      <ul className="space-y-1 ml-4">
                        <li>✓ Chegue com 3 horas de antecedência</li>
                        <li>✓ Leve documentos originais</li>
                        <li>✓ Tenha seu comprovante de reserva</li>
                        <li>✓ Passe pela segurança com antecedência</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-primary mb-2">Durante a Viagem:</p>
                      <ul className="space-y-1 ml-4">
                        <li>✓ Mantenha documentos em local seguro</li>
                        <li>✓ Guarde comprovantes de transações</li>
                        <li>✓ Tenha contato de emergência à mão</li>
                        <li>✓ Siga orientações do guia</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-orange-50 rounded-lg border border-accent">
                  <h4 className="font-heading text-lg font-light text-accent mb-3">Atenção</h4>
                  <p className="font-paragraph text-gray-700">
                    Todos os documentos devem estar em perfeito estado. Documentos danificados, rasgados ou ilegíveis podem resultar em impedimento de viagem. 
                    Recomendamos verificar com antecedência os requisitos específicos de cada destino.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
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
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-accent">
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
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-primary">
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
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-accent">
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
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-accent">
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
      {/* Tabs Section */}
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
              <Button className="hover:bg-gray-100 bg-accent text-primary-foreground">
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
      <Footer />
    </div>
  );
}
