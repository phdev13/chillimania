import React from 'react';
import { Flame, Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Flame size={28} className="text-brand-red fill-current" />
              <span className="font-display text-xl font-bold text-white">
                CHILLI<span className="text-brand-red">MANIA</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Molhos artesanais feitos para quem não tem medo de viver intensamente. 
              Sabor explosivo, qualidade premium e pimentas selecionadas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-white font-bold mb-6 tracking-wide uppercase text-sm">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link to="/loja" className="hover:text-brand-red transition-colors">Nossa Loja</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-red transition-colors">A Marca</Link></li>
              <li><Link to="/contato" className="hover:text-brand-red transition-colors">Contato</Link></li>
              <li><Link to="/faq" className="hover:text-brand-red transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-bold mb-6 tracking-wide uppercase text-sm">Fale Conosco</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red shrink-0 mt-1" />
                <span>Rua do Fogo, 666<br />Bairro Ardente<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <span>contato@chillimania.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-white font-bold mb-6 tracking-wide uppercase text-sm">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba novidades e promoções exclusivas.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-brand-gray border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-red text-sm"
              />
              <button 
                type="button" 
                className="bg-brand-red text-white font-display font-medium uppercase tracking-wide py-2 rounded-lg hover:bg-brand-darkRed transition-colors text-sm"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ChilliMania. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-white">Termos de Uso</a>
            <a href="#" className="hover:text-brand-white">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};