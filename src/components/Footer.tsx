import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Footer() {
  return (
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
  );
}
