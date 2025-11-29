import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { SpicinessMeter } from './SpicinessMeter';
import { Button } from './Button';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if wrapped in Link (though button is absolute/z-index)
    addToCart(product);
  };

  return (
    <div className="group relative bg-brand-gray/30 border border-white/5 rounded-xl overflow-hidden hover:border-brand-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-red/10 flex flex-col h-full">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-brand-yellow text-brand-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Novo</span>
        )}
        {product.isPromo && (
          <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Promo</span>
        )}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-brand-black">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <Link to={`/produtos/${product.id}`}>
            <Button variant="outline" size="sm" className="rounded-full !p-3">
              <Eye size={20} />
            </Button>
          </Link>
          <Button 
            variant="primary" 
            size="sm" 
            className="rounded-full !p-3"
            onClick={handleQuickAdd}
          >
            <ShoppingBag size={20} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
           <SpicinessMeter level={product.heatLevel} />
        </div>
        <Link to={`/produtos/${product.id}`}>
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <span className="text-2xl font-bold text-brand-yellow">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {product.volume || 'Unidade'}
          </span>
        </div>
      </div>
    </div>
  );
};