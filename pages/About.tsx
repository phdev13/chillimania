import React from 'react';
import { Calendar, User, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black pt-28">
      {/* Intro */}
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Nossa <span className="text-brand-red">História</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Começou em uma pequena cozinha, com um punhado de Habaneros e uma ideia maluca: 
            criar molhos que não fossem apenas picantes, mas inesquecíveis.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <section className="py-16 bg-brand-gray/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-red transform translate-x-4 translate-y-4 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop" 
                alt="Founder" 
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold text-white mb-6">O Começo de Tudo</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                "Eu sempre achei que os molhos de supermercado tinham gosto de vinagre, não de pimenta. 
                Queria sentir a fruta, o sol, a terra. Comecei a plantar minhas próprias pimentas no quintal 
                e a fermentar em potes de vidro. Os amigos provaram, suaram, e pediram mais."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <User className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Ricardo "Chilli" Silva</h4>
                  <span className="text-sm text-brand-red">Fundador & Mestre Pimenteiro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="relative border-l border-brand-red/30 ml-4 md:ml-1/2 space-y-16">
            
            {/* Timeline Item 1 */}
            <div className="relative pl-12 md:pl-0 md:flex md:items-center md:justify-between group">
              <div className="absolute left-0 md:left-1/2 top-0 md:-ml-3 w-6 h-6 bg-brand-black border-2 border-brand-red rounded-full group-hover:bg-brand-red transition-colors z-10"></div>
              
              <div className="md:w-5/12 md:text-right md:pr-12">
                 <div className="inline-flex items-center gap-2 text-brand-orange font-bold mb-2">
                   <Calendar size={16} /> 2018
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">A Primeira Colheita</h3>
                 <p className="text-gray-400 text-sm">A primeira safra de Habaneros no quintal de casa. Nasce o protótipo do "Fúria do Dragão".</p>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </div>

            {/* Timeline Item 2 */}
             <div className="relative pl-12 md:pl-0 md:flex md:items-center md:justify-between group">
              <div className="absolute left-0 md:left-1/2 top-0 md:-ml-3 w-6 h-6 bg-brand-black border-2 border-brand-red rounded-full group-hover:bg-brand-red transition-colors z-10"></div>
              
              <div className="hidden md:block md:w-5/12"></div>
              <div className="md:w-5/12 md:pl-12">
                 <div className="inline-flex items-center gap-2 text-brand-orange font-bold mb-2">
                   <Calendar size={16} /> 2020
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Expansão e Reconhecimento</h3>
                 <p className="text-gray-400 text-sm">Mudança para um sítio maior. Lançamento da linha "Carolina Reaper" que viralizou nas redes sociais.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-12 md:pl-0 md:flex md:items-center md:justify-between group">
              <div className="absolute left-0 md:left-1/2 top-0 md:-ml-3 w-6 h-6 bg-brand-black border-2 border-brand-red rounded-full group-hover:bg-brand-red transition-colors z-10"></div>
              
              <div className="md:w-5/12 md:text-right md:pr-12">
                 <div className="inline-flex items-center gap-2 text-brand-orange font-bold mb-2">
                   <Calendar size={16} /> 2023
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Prêmio Internacional</h3>
                 <p className="text-gray-400 text-sm">Ganhamos medalha de ouro no "World Hot Sauce Awards" na categoria Defumados.</p>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-brand-red text-center">
        <div className="container mx-auto px-6">
          <Heart className="mx-auto text-brand-black mb-6 w-16 h-16 fill-current" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-black mb-6">Amor em cada Gota</h2>
          <p className="text-brand-black/70 text-lg max-w-2xl mx-auto font-medium">
            Nós não vendemos apenas molhos de pimenta. Vendemos experiências, adrenalina e momentos compartilhados ao redor da mesa.
          </p>
        </div>
      </section>
    </div>
  );
};