import React from 'react';
import { ShoppingCart, Star, Heart, Repeat, Search } from 'lucide-react';

export function ProductCard({ 
  product, 
  onNavigate, 
  onAddToCart,
  onWishlist,
  onCompare,
  onQuickView
}: { 
  product: any, 
  onNavigate?: (p: string) => void, 
  onAddToCart?: (p: any) => void,
  onWishlist?: (p: any) => void,
  onCompare?: (p: any) => void,
  onQuickView?: (p: any) => void
}) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" 
          onClick={() => onNavigate?.('Products')}
        />
        
        {/* Discount/Tag Badge */}
        {product.tag && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
            {product.tag}
          </div>
        )}

        {/* Hover Actions (Right side) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-sm hover:bg-slate-900 hover:text-white transition-colors"
            title="Add to Cart"
            onClick={(e) => { e.stopPropagation(); onAddToCart?.(product); }}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
          <button 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-sm hover:bg-blue-500 hover:text-white transition-colors"
            title="Wishlist"
            onClick={(e) => { e.stopPropagation(); onWishlist?.(product); }}
          >
            <Heart className="w-4 h-4" />
          </button>
          <button 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-sm hover:bg-amber-500 hover:text-white transition-colors"
            title="Compare"
            onClick={(e) => { e.stopPropagation(); onCompare?.(product); }}
          >
            <Repeat className="w-4 h-4" />
          </button>
          <button 
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-sm hover:bg-purple-500 hover:text-white transition-colors"
            title="Quick View"
            onClick={(e) => { e.stopPropagation(); onQuickView?.(product); }}
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-2">
           {product.vendor && <div className="text-xs font-bold text-blue-600 truncate mr-2">{product.vendor}</div>}
           <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-xs font-bold text-slate-700">{product.rating}</span>
           </div>
        </div>
        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 cursor-pointer hover:text-blue-600 line-clamp-1" onClick={() => onNavigate?.('Products')}>{product.name}</h3>
        <p className="text-[10px] text-slate-400 mb-2 font-medium">Incl. of all taxes (5%)</p>
        <div className="flex items-end justify-between mt-4">
           <div>
              <span className="text-lg sm:text-xl font-bold text-red-500">{product.price}</span>
              <span className="text-xs text-slate-400 line-through ml-2">{product.mrp}</span>
           </div>
        </div>
      </div>
    </div>
  );
}
