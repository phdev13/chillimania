import React, { useState, useMemo } from 'react';
import { Filter, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { PRODUCTS } from '../constants';
import { Category, HeatLevel } from '../types';

export const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [selectedHeat, setSelectedHeat] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const categoryMatch = selectedCategory === 'Todos' || product.category === selectedCategory;
      const heatMatch = selectedHeat === null || product.heatLevel === selectedHeat;
      return categoryMatch && heatMatch;
    });
  }, [selectedCategory, selectedHeat]);

  const categories = ['Todos', ...Object.values(Category)];
  const heatLevels = [
    { value: HeatLevel.MILD, label: 'Leve', color: 'bg-green-500' },
    { value: HeatLevel.MEDIUM, label: 'Médio', color: 'bg-brand-yellow' },
    { value: HeatLevel.HOT, label: 'Quente', color: 'bg-brand-orange' },
    { value: HeatLevel.EXTREME, label: 'Extremo', color: 'bg-brand-red' },
    { value: HeatLevel.INFERNAL, label: 'Infernal', color: 'bg-brand-darkRed' },
  ];

  return (
    <div className="min-h-screen bg-brand-black pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Nossa <span className="text-brand-red">Loja</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Escolha o seu veneno. De molhos suaves e frutados a extratos de pimenta que desafiam a sanidade.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="w-full flex justify-between">
              <span>Filtros</span>
              <Filter size={18} />
            </Button>
          </div>

          {/* Sidebar Filters */}
          <aside className={`lg:w-1/4 space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            {/* Category Filter */}
            <div className="bg-brand-gray/30 p-6 rounded-xl border border-white/5">
              <h3 className="font-display font-bold text-white mb-4 text-lg">Categorias</h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat as any)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                        selectedCategory === cat 
                          ? 'bg-brand-red text-white' 
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Heat Filter */}
            <div className="bg-brand-gray/30 p-6 rounded-xl border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-white text-lg">Intensidade</h3>
                {selectedHeat && (
                  <button 
                    onClick={() => setSelectedHeat(null)}
                    className="text-xs text-brand-red hover:underline flex items-center gap-1"
                  >
                    <X size={12} /> Limpar
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {heatLevels.map(heat => (
                  <button
                    key={heat.value}
                    onClick={() => setSelectedHeat(selectedHeat === heat.value ? null : heat.value)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg border transition-all ${
                      selectedHeat === heat.value
                        ? 'border-brand-red bg-brand-red/10 text-white'
                        : 'border-white/5 text-gray-400 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-sm font-medium">{heat.label}</span>
                    <div className={`w-3 h-3 rounded-full ${heat.color}`}></div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-brand-gray/20 rounded-xl border border-white/5 dashed">
                <p className="text-gray-400 text-lg">Nenhum produto encontrado com esses filtros.</p>
                <button 
                  onClick={() => {setSelectedCategory('Todos'); setSelectedHeat(null);}}
                  className="mt-4 text-brand-orange hover:underline"
                >
                  Limpar todos os filtros
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};