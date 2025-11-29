import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, CheckCircle, Truck, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { SpicinessMeter } from '../components/SpicinessMeter';
import { useCart } from '../context/CartContext';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black text-white">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <Link to="/loja"><Button>Voltar para a Loja</Button></Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const incrementQty = () => setQuantity(q => q + 1);
  const decrementQty = () => setQuantity(q => q > 1 ? q - 1 : 1);

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/loja" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Voltar para Loja
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery Section */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-brand-gray border border-white/5 group">
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               {product.isNew && (
                  <span className="absolute top-6 left-6 bg-brand-yellow text-brand-black text-sm font-bold px-4 py-1 rounded-full uppercase shadow-lg">Novo</span>
               )}
            </div>
            {/* Thumbnails (Mock) */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`aspect-square rounded-lg bg-brand-gray border ${i === 0 ? 'border-brand-red' : 'border-white/5 hover:border-white/20'} overflow-hidden cursor-pointer`}>
                   <img src={product.image} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="thumbnail"/>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div>
            <div className="mb-2">
              <span className="text-brand-orange uppercase tracking-wider text-sm font-bold">{product.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-6 mb-8">
              <span className="text-3xl font-bold text-white">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              <div className="h-8 w-px bg-white/10"></div>
              <SpicinessMeter level={product.heatLevel} />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {product.fullDescription}
            </p>

            {product.ingredients && (
              <div className="mb-8 p-4 bg-brand-gray/30 rounded-xl border border-white/5">
                <h4 className="text-white font-bold mb-2 text-sm uppercase">Ingredientes:</h4>
                <p className="text-gray-400 text-sm">
                  {product.ingredients.join(', ')}.
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-white/10 rounded-full bg-brand-gray/20">
                <button onClick={decrementQty} className="px-4 py-3 text-white hover:text-brand-orange transition-colors">-</button>
                <span className="text-white font-bold px-4 w-12 text-center">{quantity}</span>
                <button onClick={incrementQty} className="px-4 py-3 text-white hover:text-brand-orange transition-colors">+</button>
              </div>
              <Button size="lg" className="flex-1 flex items-center justify-center gap-2" onClick={handleAddToCart}>
                <ShoppingBag size={20} /> Adicionar ao Carrinho
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="text-brand-red" />
                <span className="text-sm text-gray-400">Entrega rápida para todo Brasil</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="text-brand-red" />
                <span className="text-sm text-gray-400">Compra 100% Segura</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <CheckCircle className="text-brand-red" />
                <span className="text-sm text-gray-400">Qualidade Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};