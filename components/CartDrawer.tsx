import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from './Button';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    toggleCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-black border-l border-white/10 z-[70] transform transition-transform duration-300 shadow-2xl flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-brand-gray/20">
          <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
            <ShoppingBag size={20} className="text-brand-red" />
            Seu Carrinho
          </h2>
          <button 
            onClick={toggleCart}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-gray/30 flex items-center justify-center text-gray-500">
                <ShoppingBag size={32} />
              </div>
              <div>
                <p className="text-white font-medium text-lg">Seu carrinho está vazio</p>
                <p className="text-gray-400 text-sm mt-1">Que tal adicionar um pouco de calor à sua vida?</p>
              </div>
              <Button onClick={toggleCart} variant="outline" size="sm" className="mt-4">
                Ver Produtos
              </Button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-20 h-20 bg-brand-gray/30 rounded-lg overflow-hidden border border-white/5 shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-white text-sm line-clamp-2">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-brand-red transition-colors ml-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{item.volume}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-white/10 rounded-lg h-8">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 h-full text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm text-white font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 h-full text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold text-brand-yellow">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-brand-gray/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-2xl font-bold text-white">
                R$ {cartTotal.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">
              Frete calculado no checkout
            </p>
            <Link to="/checkout" onClick={toggleCart}>
              <Button className="w-full flex items-center justify-center gap-2" size="lg">
                Finalizar Compra <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};