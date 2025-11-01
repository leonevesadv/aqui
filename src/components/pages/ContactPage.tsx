import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
              <Link to="/contact" className="font-paragraph text-base text-primary font-medium">
                Contato
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-light mb-6">
            Entre em Contato
          </h1>
          <p className="font-paragraph text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a planejar sua jornada espiritual. 
            Entre em contato conosco para mais informações ou orçamentos personalizados.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-light mb-4">
                  Envie sua Mensagem
                </h2>
                <p className="font-paragraph text-gray-600">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="font-paragraph"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="font-paragraph"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="font-paragraph"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="font-paragraph"
                      placeholder="Assunto da sua mensagem"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-paragraph text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="font-paragraph"
                    placeholder="Conte-nos sobre sua jornada espiritual desejada, datas preferidas, número de pessoas, ou qualquer dúvida que tenha..."
                  />
                </div>

                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto px-8 py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-light mb-4">
                  Informações de Contato
                </h2>
                <p className="font-paragraph text-gray-600">
                  Nossa equipe está pronta para atendê-lo e criar a jornada espiritual perfeita para você.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-light mb-2">Telefone</h3>
                    <p className="font-paragraph text-gray-700">+55 (11) 3456-7890</p>
                    <p className="font-paragraph text-sm text-gray-500">Segunda a Sexta, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-light mb-2">E-mail</h3>
                    <p className="font-paragraph text-gray-700">contato@peregrina.com.br</p>
                    <p className="font-paragraph text-sm text-gray-500">Resposta em até 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-light mb-2">Endereço</h3>
                    <p className="font-paragraph text-gray-700">
                      Rua das Peregrinações, 123<br />
                      Vila Madalena - São Paulo, SP<br />
                      CEP: 05435-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-light mb-2">Horário de Funcionamento</h3>
                    <div className="font-paragraph text-gray-700 space-y-1">
                      <p>Segunda a Sexta: 9h às 18h</p>
                      <p>Sábado: 9h às 14h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/e4152c_94d713ca141248208e58ce03f440fd24~mv2.png?originWidth=448&originHeight=256"
                  alt="Escritório da Peregrina"
                  className="w-full h-full object-cover"
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Perguntas Frequentes
            </h2>
            <p className="font-paragraph text-xl text-gray-600">
              Respostas para as dúvidas mais comuns sobre nossas jornadas espirituais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading text-lg font-light mb-3">
                  Como funciona o processo de reserva?
                </h3>
                <p className="font-paragraph text-gray-600">
                  Entre em contato conosco para discutir suas preferências. Elaboramos um roteiro 
                  personalizado e enviamos um orçamento detalhado. Após aprovação, você faz o 
                  pagamento e recebe toda a documentação necessária.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading text-lg font-light mb-3">
                  Vocês organizam grupos pequenos?
                </h3>
                <p className="font-paragraph text-gray-600">
                  Sim! Trabalhamos com grupos de todos os tamanhos, desde viagens individuais 
                  até grupos de 50+ pessoas. Nossos grupos menores permitem experiências mais 
                  íntimas e personalizadas.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading text-lg font-light mb-3">
                  Que documentos são necessários?
                </h3>
                <p className="font-paragraph text-gray-600">
                  Dependendo do destino, você precisará de passaporte válido, visto (quando 
                  necessário), certificado de vacinação e seguro viagem. Fornecemos uma lista 
                  completa após a confirmação da viagem.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading text-lg font-light mb-3">
                  As viagens incluem acompanhamento espiritual?
                </h3>
                <p className="font-paragraph text-gray-600">
                  Muitas de nossas viagens incluem acompanhamento de líderes espirituais 
                  experientes, momentos de oração e reflexão, além de visitas a locais 
                  sagrados com contexto histórico e religioso.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading text-lg font-light mb-3">
                  Posso personalizar meu roteiro?
                </h3>
                <p className="font-paragraph text-gray-600">
                  Absolutamente! Todos os nossos roteiros podem ser personalizados de acordo 
                  com suas preferências, necessidades especiais, orçamento e tempo disponível. 
                  Cada jornada é única.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading text-lg font-light mb-3">
                  Qual é a política de cancelamento?
                </h3>
                <p className="font-paragraph text-gray-600">
                  Nossa política varia conforme o destino e proximidade da data de viagem. 
                  Oferecemos condições flexíveis e sempre trabalhamos para minimizar custos 
                  em caso de cancelamento necessário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="font-paragraph text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nossa equipe está esperando para criar a experiência espiritual perfeita para você
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4">
            <Link to="/packages">Ver Nossos Destinos</Link>
          </Button>
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