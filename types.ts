export enum HeatLevel {
  MILD = 1,
  MEDIUM = 2,
  HOT = 3,
  EXTREME = 4,
  INFERNAL = 5
}

export enum Category {
  SAUCE = 'Molhos',
  PEPPER = 'Pimentas',
  KIT = 'Kits',
  MERCH = 'Acessórios'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  heatLevel: HeatLevel;
  category: Category;
  isNew?: boolean;
  isPromo?: boolean;
  ingredients?: string[];
  volume?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  path: string;
}