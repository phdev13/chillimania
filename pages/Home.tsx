import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Award, Leaf } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590757783937-252f9547d77b?q=80&w=2070&auto=format&fit=crop" 
            alt="Red Hot Peppers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent" />
          <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay" />
        </div>

        {/* Floating Particles (Simulated with simple divs) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
           {[...Array(5)].map((_, i) => (
             <div 
               key={i}
               className="absolute rounded-full bg-brand-orange/30 blur-xl animate-float"
               style={{
                 width: Math.random() * 100 + 50 + 'px',
                 height: Math.random() * 100 + 50 + 'px',
                 left: Math.random() * 100 + '%',
                 top: Math.random() * 100 + '%',
                 animationDelay: Math.random() * 5 + 's',
                 animationDuration: Math.random() * 10 + 10 + 's'
               }}
             />
           ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-black/50 backdrop-blur-sm mb-6">
              <Flame size={16} className="text-brand-orange animate-pulse" />
              <span className="text-brand-orange text-sm font-medium uppercase tracking-wider">Artesanal & Explosivo</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              SABOR QUE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-red">INCENDIA</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Descubra os molhos mais ardentes e saborosos do mercado. 
              Feitos à mão, sem conservantes e com pimentas selecionadas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/loja">
                <Button size="lg" className="w-full sm:w-auto">
                  Confira nossos Produtos
                </Button>
              </Link>
              <Link to="/sobre">
                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                  Nossa História <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-brand-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Destaques da <span className="text-brand-red">Semana</span>
              </h2>
              <p className="text-gray-400">Os favoritos dos nossos clientes mais corajosos.</p>
            </div>
            <Link to="/loja" className="text-brand-orange hover:text-white transition-colors flex items-center gap-2 font-medium">
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-black/30 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Não é só ardor.<br/>É <span className="text-brand-yellow">Arte.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Na ChilliMania, acreditamos que a pimenta não deve apenas queimar, mas elevar o prato. 
                  Nossos processos de fermentação e defumação trazem camadas de sabor que você não encontra em molhos industriais.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <Leaf size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">100% Natural</h3>
                  <p className="text-sm text-gray-400">Ingredientes frescos, sem conservantes químicos ou corantes.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Qualidade Premium</h3>
                  <p className="text-sm text-gray-400">Pimentas selecionadas uma a uma para garantir o padrão.</p>
                </div>
              </div>
              
              <Link to="/sobre">
                <Button variant="outline">Conheça o Processo</Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1620216447820-22c672da8922?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef preparing sauce" 
                className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-black border border-white/10 p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-brand-yellow">
                    {[...Array(5)].map((_, i) => <Flame key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-white font-display font-bold italic">"Nunca provei nada igual. É viciante!"</p>
                <p className="text-gray-500 text-xs mt-2">- Marcos, Cliente VIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee/Fun Facts */}
      <section className="py-12 bg-brand-red overflow-hidden">
        <div className="flex whitespace-nowrap animate-[float_20s_linear_infinite] w-max">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="flex items-center mx-8">
               <span className="text-4xl md:text-6xl font-display font-black text-brand-black/20 uppercase">
                 Ardência Extrema • Sabor Puro • ChilliMania •
               </span>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};