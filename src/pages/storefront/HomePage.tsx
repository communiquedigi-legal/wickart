import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, ShieldCheck, Truck, HeadphonesIcon, Gift } from 'lucide-react';
import { ProductCard } from './ProductCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onAddToCart?: (product: any) => void;
  onWishlist?: (product: any) => void;
  onCompare?: (product: any) => void;
  onQuickView?: (product: any) => void;
}

const CATEGORIES = [
  { name: 'Groceries', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200&h=200', color: 'bg-emerald-50' },
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=200&h=200', color: 'bg-blue-50' },
  { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=200&h=200', color: 'bg-pink-50' },
  { name: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=200&h=200', color: 'bg-amber-50' },
  { name: 'Beauty', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54c28?auto=format&fit=crop&q=80&w=200&h=200', color: 'bg-purple-50' },
  { name: 'Sports', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=200&h=200', color: 'bg-red-50' },
];

const POPULAR_PRODUCTS = [
  { id: 1, name: 'Cold Brew Coffee', price: '₹400', mrp: '₹500', rating: 4.8, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400', tag: 'Bestseller' },
  { id: 2, name: 'Wireless Earbuds Pro', price: '₹2,499', mrp: '₹4,999', rating: 4.6, image: 'https://images.unsplash.com/photo-1590658268037-6f16144e5f8e?auto=format&fit=crop&q=80&w=400', tag: 'Sale -50%' },
  { id: 3, name: 'Organic Brown Sugar', price: '₹120', mrp: '₹150', rating: 4.5, image: 'https://images.unsplash.com/photo-1581428982868-e410dd447aa4?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Yoga Mat High Grip', price: '₹899', mrp: '₹1,200', rating: 4.9, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=400', tag: 'Trending' },
];

const NEW_PRODUCTS = [
  { id: 5, name: 'Almond Butter Crunch', price: '₹350', mrp: '₹400', rating: 4.2, image: 'https://images.unsplash.com/photo-1584305574647-0cc929a2ca58?auto=format&fit=crop&q=80&w=400', tag: 'New' },
  { id: 6, name: 'Smart Watch Series X', price: '₹3,499', mrp: '₹5,999', rating: 4.7, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=400', tag: 'New' },
  { id: 7, name: 'Premium Assam Tea', price: '₹450', mrp: '₹550', rating: 4.4, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=400', tag: 'New' },
  { id: 8, name: 'Ceramic Coffee Mug', price: '₹299', mrp: '₹499', rating: 4.1, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400', tag: 'New' },
];

const HOT_DEALS = [
  { id: 9, name: 'Solitaire Swarovski Crystals', price: '₹3,400', mrp: '₹4,100', rating: 0, image: 'https://images.unsplash.com/photo-1599643478514-4a1200ead3f0?auto=format&fit=crop&q=80&w=400', tag: '-18%' },
  { id: 10, name: 'Sed ut perspiciatis unde omnis iste', price: '₹6,000', mrp: '', rating: 5, image: 'https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?auto=format&fit=crop&q=80&w=400', tag: '' },
  { id: 11, name: 'Security Camera with Night Vision', price: '₹3,800', mrp: '₹4,200', rating: 3, image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=400', tag: '-8%' },
  { id: 12, name: 'Women\'s Summer Sportswear Set', price: '₹6,500', mrp: '', rating: 0, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400', tag: '' },
];

export function HomePage({ onNavigate, onAddToCart, onWishlist, onCompare, onQuickView }: HomePageProps) {
  
  const [timeLeft, setTimeLeft] = useState({ days: 3062, hours: 3, minutes: 54, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) { seconds--; }
        else {
          seconds = 59;
          if (minutes > 0) { minutes--; }
          else {
            minutes = 59;
            if (hours > 0) { hours--; }
            else { hours = 23; days--; }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white pb-20 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
               <div className="inline-block px-3 py-1.5 bg-blue-100 text-blue-700 font-bold text-xs rounded-full mb-6">
                  Delivery only in Sultanpur
               </div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                 Your Daily Needs, <br/>Delivered <span className="text-blue-600">Fast.</span>
               </h1>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                 Shop from local Sultanpur vendors. Get fresh groceries, electronics, fashion, and home essentials delivered right to your doorstep.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => onNavigate('Products')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                     Shop Now <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => onNavigate('About')} className="px-8 py-4 bg-white text-slate-700 rounded-xl font-bold text-lg border border-slate-200 hover:bg-slate-50 transition duration-300 flex items-center justify-center">
                     Learn More
                  </button>
               </div>
            </div>
            <div className="relative hidden lg:block h-[500px] rounded-3xl overflow-hidden bg-slate-200">
               <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Groceries Banner" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
            </div>
         </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-b border-slate-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-4 gap-4 divide-x divide-slate-100">
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Free Shipping</h4>
                <p className="text-xs text-slate-500">On order over ₹4,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Money Back</h4>
                <p className="text-xs text-slate-500">30 days money back</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4">
               <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600">
                 <HeadphonesIcon className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 text-sm">Online Support</h4>
                 <p className="text-xs text-slate-500">Support online 24h on day</p>
               </div>
            </div>
            <div className="flex items-center gap-4 px-4">
               <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-blue-600">
                 <Gift className="w-6 h-6" />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 text-sm">Gift Promotion</h4>
                 <p className="text-xs text-slate-500">On order over ₹8,000</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="flex items-end justify-between gap-4 mb-8">
            <div>
               <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Shop by Category</h2>
               <p className="text-slate-500 mt-1 sm:text-lg">Find what you need instantly.</p>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {CATEGORIES.map((cat, i) => (
               <div key={i} onClick={() => onNavigate('Products')} className={`group cursor-pointer rounded-2xl ${cat.color} p-4 text-center transition-transform hover:-translate-y-1`}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden bg-white mb-4 shadow-sm">
                     <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{cat.name}</h3>
               </div>
            ))}
         </div>
      </section>

      {/* Hot Deals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            <span className="text-rose-500">Hot Deals!</span> Get Our Best Price
          </h2>
          <button onClick={() => onNavigate('Products')} className="text-slate-600 font-medium text-sm hover:underline hover:text-slate-900 hidden sm:block">+ See All Products</button>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 border border-indigo-200 rounded-3xl overflow-hidden p-1 lg:p-0">
          
          {/* Timer Block */}
          <div className="bg-[#6B5FFF] text-white p-6 lg:p-8 flex flex-col items-center justify-center min-w-[200px] shrink-0 rounded-2xl lg:rounded-none">
            <Clock className="w-12 h-12 mb-6" />
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <div className="bg-white text-[#6B5FFF] font-black text-2xl px-4 py-1.5 rounded mb-1">{timeLeft.days}</div>
                <div className="text-[10px] tracking-widest uppercase font-bold uppercase">Days</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-[#6B5FFF] font-black text-2xl px-4 py-1.5 rounded mb-1">{timeLeft.hours}</div>
                <div className="text-[10px] tracking-widest uppercase font-bold uppercase">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-[#6B5FFF] font-black text-2xl px-4 py-1.5 rounded mb-1">{timeLeft.minutes}</div>
                <div className="text-[10px] tracking-widest uppercase font-bold uppercase">Minutes</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-[#6B5FFF] font-black text-2xl px-4 py-1.5 rounded mb-1">{timeLeft.seconds}</div>
                <div className="text-[10px] tracking-widest uppercase font-bold uppercase">Seconds</div>
              </div>
            </div>
          </div>

          {/* Hot Deals Products Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {HOT_DEALS.map(prod => (
              <ProductCard key={prod.id} product={prod} onNavigate={onNavigate} onAddToCart={onAddToCart} onWishlist={onWishlist} onCompare={onCompare} onQuickView={onQuickView} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="flex items-end justify-between gap-4 mb-8">
            <div>
               <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Popular Products</h2>
               <p className="text-slate-500 mt-1 sm:text-lg">Most loved by Sultanpur customers.</p>
            </div>
            <button onClick={() => onNavigate('Products')} className="text-blue-600 font-bold text-sm hover:underline hidden sm:block">View All</button>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_PRODUCTS.map(prod => <ProductCard key={prod.id} product={prod} onNavigate={onNavigate} onAddToCart={onAddToCart} onWishlist={onWishlist} onCompare={onCompare} onQuickView={onQuickView} />)}
         </div>
      </section>

      {/* Special Offers Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
               <div className="w-full h-full bg-blue-500 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            </div>
            <div className="relative z-10 max-w-xl">
               <span className="inline-block px-3 py-1 bg-amber-500 text-black font-bold text-xs uppercase tracking-wider rounded border border-amber-400 mb-4">Special Offer</span>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Get up to 50% Off<br/>On Weekly Essentials</h2>
               <p className="text-slate-400 mb-8 max-w-md">Stock up your pantry with fresh produce and daily needs at unbeatable prices from top vendors in Sultanpur.</p>
               <button onClick={() => onNavigate('Products')} className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                  Claim Offer Now
               </button>
            </div>
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white/10 shrink-0">
               <img src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=400" alt="Offers" className="w-full h-full object-cover" />
            </div>
         </div>
      </section>

      {/* Newly Added Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100">
         <div className="flex items-end justify-between gap-4 mb-8">
            <div>
               <h2 className="text-2xl font-bold text-slate-900 tracking-tight">New Arrivals</h2>
               <p className="text-slate-500 mt-1 sm:text-lg">Freshly added items from local stores.</p>
            </div>
            <button onClick={() => onNavigate('Products')} className="text-blue-600 font-bold text-sm hover:underline hidden sm:block">View All</button>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEW_PRODUCTS.map(prod => <ProductCard key={prod.id} product={prod} onNavigate={onNavigate} onAddToCart={onAddToCart} onWishlist={onWishlist} onCompare={onCompare} onQuickView={onQuickView} />)}
         </div>
      </section>

    </div>
  );
}
