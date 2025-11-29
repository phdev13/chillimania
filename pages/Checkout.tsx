import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Truck, ShieldCheck, MapPin, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';

const STEPS = [
  { id: 1, label: 'Identificação & Entrega' },
  { id: 2, label: 'Pagamento' },
  { id: 3, label: 'Confirmação' },
];

export const Checkout: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', cep: '', address: '', city: '', state: '',
    cardNumber: '', cardName: '', cardExpiry: '', cardCvc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate validation/processing
    setTimeout(() => {
      setLoading(false);
      if (currentStep < 3) {
        setCurrentStep(prev => prev + 1);
        if (currentStep === 2) {
          clearCart(); // Clear cart when reaching success/confirmation conceptually
        }
      }
    }, 1000);
  };

  if (cartItems.length === 0 && currentStep !== 3) {
    return (
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Seu carrinho está vazio</h2>
        <Button onClick={() => navigate('/loja')}>Voltar para a Loja</Button>
      </div>
    );
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between max-w-2xl mx-auto mb-12 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 -z-10"></div>
      {STEPS.map((step) => (
        <div key={step.id} className="flex flex-col items-center gap-2 bg-brand-black px-2">
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 border-2 ${
              currentStep >= step.id 
                ? 'bg-brand-red border-brand-red text-white' 
                : 'bg-brand-black border-white/20 text-gray-500'
            }`}
          >
            {currentStep > step.id ? <Check size={20} /> : step.id}
          </div>
          <span className={`text-xs uppercase font-bold tracking-wider ${currentStep >= step.id ? 'text-white' : 'text-gray-600'}`}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-black pt-28 pb-20">
      <div className="container mx-auto px-6">
        {renderStepIndicator()}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            
            {/* STEP 1: SHIPPING */}
            {currentStep === 1 && (
              <form onSubmit={handleNextStep} className="animate-fade-in-up">
                <div className="bg-brand-gray/20 p-8 rounded-2xl border border-white/5 mb-8">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <MapPin className="text-brand-orange" /> Dados de Entrega
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                       <label className="block text-sm text-gray-400 mb-2">Nome Completo</label>
                       <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="João da Silva" />
                    </div>
                    <div className="md:col-span-2">
                       <label className="block text-sm text-gray-400 mb-2">Email</label>
                       <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="joao@email.com" />
                    </div>
                    <div>
                       <label className="block text-sm text-gray-400 mb-2">CEP</label>
                       <input required name="cep" value={formData.cep} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="00000-000" />
                    </div>
                    <div>
                       <label className="block text-sm text-gray-400 mb-2">Cidade/UF</label>
                       <input required name="city" value={formData.city} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="São Paulo/SP" />
                    </div>
                    <div className="md:col-span-2">
                       <label className="block text-sm text-gray-400 mb-2">Endereço Completo</label>
                       <input required name="address" value={formData.address} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="Rua, Número, Complemento" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={loading} size="lg">
                    {loading ? 'Processando...' : 'Ir para Pagamento'}
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 2: PAYMENT */}
            {currentStep === 2 && (
              <form onSubmit={handleNextStep} className="animate-fade-in-up">
                <div className="bg-brand-gray/20 p-8 rounded-2xl border border-white/5 mb-8">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <CreditCard className="text-brand-orange" /> Pagamento Seguro
                  </h2>
                  <div className="mb-6 p-4 bg-brand-red/10 border border-brand-red/20 rounded-lg flex items-center gap-3">
                    <ShieldCheck className="text-brand-red" size={24} />
                    <p className="text-sm text-gray-300">Ambiente criptografado e 100% seguro. Seus dados não são armazenados.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                       <label className="block text-sm text-gray-400 mb-2">Número do Cartão</label>
                       <div className="relative">
                         <input required name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="0000 0000 0000 0000" />
                         <CreditCard className="absolute left-4 top-3.5 text-gray-500" size={20} />
                       </div>
                    </div>
                    <div>
                       <label className="block text-sm text-gray-400 mb-2">Nome no Cartão</label>
                       <input required name="cardName" value={formData.cardName} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="COMO ESTÁ NO CARTÃO" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                         <label className="block text-sm text-gray-400 mb-2">Validade</label>
                         <input required name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="MM/AA" />
                      </div>
                      <div>
                         <label className="block text-sm text-gray-400 mb-2">CVV</label>
                         <input required name="cardCvc" value={formData.cardCvc} onChange={handleChange} className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button type="button" variant="ghost" onClick={() => setCurrentStep(1)}>
                    Voltar
                  </Button>
                  <Button type="submit" disabled={loading} size="lg" className="w-full sm:w-auto">
                    {loading ? 'Processando Pagamento...' : `Pagar R$ ${cartTotal.toFixed(2).replace('.', ',')}`}
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 3: SUCCESS */}
            {currentStep === 3 && (
              <div className="text-center py-12 animate-fade-in-up">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/20">
                  <Check size={48} className="text-white" />
                </div>
                <h1 className="text-4xl font-display font-bold text-white mb-4">Pagamento Confirmado!</h1>
                <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
                  Sua dose de ardência está a caminho. Enviamos um email com os detalhes do seu pedido <span className="text-brand-orange font-mono">#CHILLI-{Math.floor(Math.random() * 10000)}</span>.
                </p>
                
                <div className="bg-brand-gray/20 p-6 rounded-xl border border-white/5 max-w-md mx-auto mb-10 text-left">
                  <h3 className="font-bold text-white mb-4 border-b border-white/10 pb-2">Resumo da Entrega</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><span className="text-gray-500">Destinatário:</span> {formData.name}</p>
                    <p><span className="text-gray-500">Endereço:</span> {formData.address}, {formData.city}</p>
                    <p><span className="text-gray-500">Estimativa:</span> 3 a 5 dias úteis</p>
                  </div>
                </div>

                <Button size="lg" onClick={() => navigate('/')}>
                  Voltar para Home
                </Button>
              </div>
            )}

          </div>

          {/* Order Summary Sidebar */}
          {currentStep < 3 && (
            <div className="lg:col-span-1">
              <div className="bg-brand-gray/20 p-6 rounded-2xl border border-white/5 sticky top-32">
                <h3 className="text-lg font-bold text-white mb-6">Resumo do Pedido</h3>
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto custom-scrollbar">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded bg-brand-gray object-cover" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{item.name}</p>
                        <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-bold text-gray-300">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Subtotal</span>
                    <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>Frete</span>
                    <span className="text-green-500 font-medium">Grátis</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-white/10 mt-2">
                    <span>Total</span>
                    <span className="text-brand-yellow">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <Truck size={14} /> Entrega garantida para todo Brasil
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};