import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Heart, Users, Globe, Award } from 'lucide-react';

export default function AboutPage() {
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
              <Link to="/packages" className="font-paragraph text-base hover:text-gray-600 transition-colors">
                Pacotes
              </Link>
              <Link to="/about" className="font-paragraph text-base text-primary font-medium">
                Sobre
              </Link>
              <Link to="/contact" className="font-paragraph text-base hover:text-gray-600 transition-colors">
                Contato
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="font-heading text-5xl md:text-6xl font-light">
                Nossa História
              </h1>
              <p className="font-paragraph text-xl leading-relaxed text-gray-700">
                Há mais de 15 anos, a Peregrina dedica-se a criar experiências espirituais 
                autênticas e transformadoras para peregrinos de todas as idades e credos.
              </p>
              <p className="font-paragraph text-lg leading-relaxed text-gray-600">
                Nascemos da paixão por conectar pessoas aos lugares mais sagrados do mundo, 
                oferecendo jornadas que vão além do turismo tradicional.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/e4152c_7b539d77a6df4225b19bc6f7fbe610ac~mv2.png?originWidth=576&originHeight=448"
                alt="Fundadores da Peregrina"
                className="w-full h-full object-cover"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Nossa Missão
            </h2>
            <p className="font-paragraph text-xl text-gray-600 max-w-4xl mx-auto">
              Facilitar encontros profundos com o sagrado através de jornadas cuidadosamente 
              planejadas que respeitam a tradição e promovem a reflexão espiritual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-light">Paixão</h3>
              <p className="font-paragraph text-gray-600">
                Amor genuíno pelo turismo religioso e pela experiência espiritual
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-light">Comunidade</h3>
              <p className="font-paragraph text-gray-600">
                Criamos laços duradouros entre peregrinos e comunidades locais
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-light">Autenticidade</h3>
              <p className="font-paragraph text-gray-600">
                Experiências genuínas nos destinos mais sagrados do mundo
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-light">Excelência</h3>
              <p className="font-paragraph text-gray-600">
                Compromisso com a qualidade em cada detalhe da jornada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/e4152c_f9841e423a7b4631adfb98c79e52d122~mv2.png?originWidth=576&originHeight=448"
                alt="Peregrinos em jornada"
                className="w-full h-full object-cover"
                width={600}
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-light">
                Como Começou
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-lg leading-relaxed text-gray-700">
                  A Peregrina nasceu do sonho de dois amigos que, após uma transformadora 
                  peregrinação a Santiago de Compostela, decidiram dedicar suas vidas a 
                  proporcionar experiências similares para outras pessoas.
                </p>
                <p className="font-paragraph text-lg leading-relaxed text-gray-700">
                  Começamos organizando pequenos grupos para destinos próximos, sempre 
                  com foco na qualidade da experiência espiritual. Hoje, atendemos 
                  centenas de peregrinos anualmente em mais de 25 destinos sagrados.
                </p>
                <p className="font-paragraph text-lg leading-relaxed text-gray-700">
                  Nossa equipe é formada por especialistas em turismo religioso, guias 
                  locais experientes e parceiros que compartilham nossa visão de 
                  turismo responsável e transformador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Nossa Jornada em Números
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-light text-primary mb-2">15+</div>
              <p className="font-paragraph text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-light text-primary mb-2">500+</div>
              <p className="font-paragraph text-gray-600">Peregrinos Atendidos</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-light text-primary mb-2">25+</div>
              <p className="font-paragraph text-gray-600">Destinos Sagrados</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-light text-primary mb-2">98%</div>
              <p className="font-paragraph text-gray-600">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Nossa Equipe
            </h2>
            <p className="font-paragraph text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais dedicados que compartilham a paixão por criar experiências 
              espirituais transformadoras
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/e4152c_35f745edf6e9485dae20681885c2f3c8~mv2.png?originWidth=256&originHeight=256"
                  alt="Maria Santos - Fundadora"
                  className="w-full h-full object-cover"
                  width={256}
                />
              </div>
              <h3 className="font-heading text-2xl font-light mb-2">Maria Santos</h3>
              <p className="font-paragraph text-gray-600 mb-4">Fundadora & Diretora</p>
              <p className="font-paragraph text-sm text-gray-500">
                Especialista em turismo religioso com mais de 20 anos de experiência
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/e4152c_4206f303cb6e499d8619dfd554015a22~mv2.png?originWidth=256&originHeight=256"
                  alt="João Silva - Cofundador"
                  className="w-full h-full object-cover"
                  width={256}
                />
              </div>
              <h3 className="font-heading text-2xl font-light mb-2">João Silva</h3>
              <p className="font-paragraph text-gray-600 mb-4">Cofundador & Operações</p>
              <p className="font-paragraph text-sm text-gray-500">
                Responsável pela logística e parcerias internacionais
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/e4152c_920b3222d78f47879f5111e2b24edf5c~mv2.png?originWidth=256&originHeight=256"
                  alt="Ana Costa - Coordenadora"
                  className="w-full h-full object-cover"
                  width={256}
                />
              </div>
              <h3 className="font-heading text-2xl font-light mb-2">Ana Costa</h3>
              <p className="font-paragraph text-gray-600 mb-4">Coordenadora de Grupos</p>
              <p className="font-paragraph text-sm text-gray-500">
                Especialista em acompanhamento de grupos e experiências personalizadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="max-w-[120rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            Pronto para Sua Jornada Espiritual?
          </h2>
          <p className="font-paragraph text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra nossos destinos sagrados e permita-se viver uma experiência transformadora
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gray-800 px-12 py-4">
              <Link to="/packages">Explorar Pacotes</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4">
              <Link to="/contact">Fale Conosco</Link>
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