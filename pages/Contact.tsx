import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-black pt-28 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Fale <span className="text-brand-red">Conosco</span>
          </h1>
          <p className="text-gray-400">Dúvidas? Parcerias? Ou apenas quer contar como sobreviveu à nossa pimenta?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Form */}
          <div className="bg-brand-gray/20 p-8 md:p-12 rounded-2xl border border-white/5">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-400 mb-6">Obrigado pelo contato. Responderemos em breve.</p>
                <Button onClick={() => setIsSent(false)} variant="outline">Enviar nova mensagem</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full flex justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>Enviar Mensagem <Send size={18} /></>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-12 flex flex-col justify-center">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Nossa Sede</h3>
                <p className="text-gray-400">Rua do Fogo, 666<br />Bairro Ardente<br />São Paulo - SP, 01234-567</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-400">contato@chillimania.com.br<br />sac@chillimania.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                <p className="text-gray-400">+55 (11) 99999-8888<br />Segunda a Sexta, 9h às 18h</p>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="w-full h-48 bg-brand-gray/50 rounded-xl overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500" 
                alt="Map location"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded shadow-lg">Aqui</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};