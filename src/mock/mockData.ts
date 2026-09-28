export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  isPopular?: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'All', icon: 'grid' },
  { id: '2', name: 'Trending', icon: 'flame' },
  { id: '3', name: 'New Arrivals', icon: 'sparkles' },
  { id: '4', name: 'Best Sellers', icon: 'star' },
];

export const MOCK_USER: UserProfile = {
  id: 'usr_101',
  name: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
  role: 'Premium Member',
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Modern Wireless Headphones',
    category: 'Trending',
    price: 199.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    isPopular: true,
  },
  {
    id: 'p2',
    title: 'Minimalist Smart Watch',
    category: 'New Arrivals',
    price: 249.50,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    isPopular: true,
  },
  {
    id: 'p3',
    title: 'Ergonomic Mechanical Keyboard',
    category: 'Best Sellers',
    price: 129.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
  },
];
