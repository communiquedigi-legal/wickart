import React from 'react';
import { Filter } from 'lucide-react';
import { ProductCard } from './ProductCard';

export function ProductsPage({ 
  onNavigate, 
  onAddToCart,
  onWishlist,
  onCompare,
  onQuickView
}: { 
  onNavigate?: (p: string) => void, 
  onAddToCart?: (p: any) => void,
  onWishlist?: (p: any) => void,
  onCompare?: (p: any) => void,
  onQuickView?: (p: any) => void
}) {
  const products = [
    { id: 1, name: 'Cold Brew Coffee', price: '₹400', mrp: '₹500', rating: 4.8, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400', vendor: 'City Square Mart' },
    { id: 2, name: 'Organic Brown Sugar', price: '₹120', mrp: '₹150', rating: 4.5, image: 'https://images.unsplash.com/photo-1581428982868-e410dd447aa4?auto=format&fit=crop&q=80&w=400', vendor: 'Fresh Organic Foods' },
    { id: 5, name: 'Almond Butter Crunch', price: '₹350', mrp: '₹400', rating: 4.2, image: 'https://images.unsplash.com/photo-1584305574647-0cc929a2ca58?auto=format&fit=crop&q=80&w=400', vendor: 'Fresh Organic Foods' },
    { id: 6, name: 'Smart Watch Series X', price: '₹3,499', mrp: '₹5,999', rating: 4.7, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400', vendor: 'Silicon Valley Store' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-8">
         <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">All Products</h1>
            <p className="text-slate-500 mt-2">Showing products available in Sultanpur</p>
         </div>
         <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-200 transition-colors">
            <Filter className="w-4 h-4" /> Filters
         </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onNavigate={onNavigate} onAddToCart={onAddToCart} onWishlist={onWishlist} onCompare={onCompare} onQuickView={onQuickView} />
        ))}
      </div>
    </div>
  );
}
