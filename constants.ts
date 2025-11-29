import { Product, HeatLevel, Category, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Fúria do Dragão',
    description: 'Um molho de Habanero defumado com um toque de alho.',
    fullDescription: 'O Fúria do Dragão é nossa assinatura. Feito com Habaneros laranjas maturados ao sol e defumados em madeira de macieira, este molho traz um equilíbrio perfeito entre o calor intenso e um sabor profundo e defumado. Ideal para carnes grelhadas e hambúrgueres.',
    price: 35.90,
    image: 'https://picsum.photos/id/1080/600/600',
    heatLevel: HeatLevel.HOT,
    category: Category.SAUCE,
    isNew: true,
    ingredients: ['Pimenta Habanero', 'Vinagre de Maçã', 'Alho', 'Sal Marinho', 'Especiarias'],
    volume: '150ml'
  },
  {
    id: '2',
    name: 'Carolina Reaper Pure',
    description: 'Apenas para os corajosos. Pimenta pura em conserva.',
    fullDescription: 'Cuidado! Esta conserva utiliza a Carolina Reaper, uma das pimentas mais fortes do mundo. Sem diluição, sem piedade. Uma única gota é suficiente para incendiar qualquer prato. Recomendamos uso com extrema cautela.',
    price: 59.90,
    image: 'https://picsum.photos/id/1060/600/600',
    heatLevel: HeatLevel.INFERNAL,
    category: Category.PEPPER,
    ingredients: ['Carolina Reaper', 'Azeite Extra Virgem', 'Vinagre', 'Sal'],
    volume: '100g'
  },
  {
    id: '3',
    name: 'Kit Churrasco Bravo',
    description: 'Trio de molhos essenciais para o seu churrasco.',
    fullDescription: 'O presente perfeito para o mestre churrasqueiro. Contém: 1x Molho BBQ Apimentado, 1x Molho de Alho Picante e 1x Fúria do Dragão. Embalagem especial de madeira.',
    price: 99.90,
    image: 'https://picsum.photos/id/292/600/600',
    heatLevel: HeatLevel.MEDIUM,
    category: Category.KIT,
    isPromo: true
  },
  {
    id: '4',
    name: 'Mango Tango',
    description: 'Doce e picante. Manga com pimenta Dedo-de-Moça.',
    fullDescription: 'Uma explosão tropical. A doçura da manga madura encontra a picância moderada da pimenta Dedo-de-Moça. Perfeito para saladas, peixes e tacos de frango.',
    price: 29.90,
    image: 'https://picsum.photos/id/493/600/600',
    heatLevel: HeatLevel.MILD,
    category: Category.SAUCE,
    volume: '150ml'
  },
  {
    id: '5',
    name: 'Ghost Pepper Dust',
    description: 'Pó de pimenta Bhut Jolokia desidratada.',
    fullDescription: 'Polvilhe o caos. Nossa Bhut Jolokia é desidratada lentamente para preservar os óleos essenciais e depois moída finamente. Excelente para finalizar pratos, pipoca ou drinks exóticos.',
    price: 45.00,
    image: 'https://picsum.photos/id/431/600/600',
    heatLevel: HeatLevel.EXTREME,
    category: Category.PEPPER,
    volume: '50g'
  },
  {
    id: '6',
    name: 'Jalapeño Verde Fermentado',
    description: 'Sabor clássico com probióticos naturais.',
    fullDescription: 'Fermentado por 30 dias, este molho tem uma complexidade ácida única. Menos foco no calor extremo e mais no sabor vegetal e fresco da Jalapeño.',
    price: 32.00,
    image: 'https://picsum.photos/id/225/600/600',
    heatLevel: HeatLevel.MEDIUM,
    category: Category.SAUCE,
    volume: '150ml'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'Chef Executivo',
    content: 'O Fúria do Dragão mudou a forma como eu sirvo costelinha. O sabor defumado é inigualável.',
    avatar: 'https://picsum.photos/id/1005/100/100'
  },
  {
    id: '2',
    name: 'Fernanda Lima',
    role: 'Apaixonada por Pimenta',
    content: 'A entrega foi super rápida e o kit chegou numa caixa linda. A Carolina Reaper é insana!',
    avatar: 'https://picsum.photos/id/1027/100/100'
  },
  {
    id: '3',
    name: 'Roberto Justo',
    role: 'Mestre Churrasqueiro',
    content: 'Qualidade artesanal de verdade. Dá para sentir o frescor dos ingredientes em cada gota.',
    avatar: 'https://picsum.photos/id/1012/100/100'
  }
];