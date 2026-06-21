import React, { useState, useEffect } from 'react';
import { ShoppingCart, MapPin, Search, User, Menu } from 'lucide-react';

interface StoreHeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

export function StoreHeader({ activePage, onNavigate, cartCount }: StoreHeaderProps) {
  const [companyName, setCompanyName] = useState('CityMart');

  useEffect(() => {
    const handleSettingsUpdate = () => {
      const name = localStorage.getItem('companyName');
      if (name) {
        // Simple logic to extract part of name if desired, or just use full name.
        setCompanyName(name);
      }
    };

    handleSettingsUpdate();
    window.addEventListener('settingsUpdated', handleSettingsUpdate);
    return () => window.removeEventListener('settingsUpdated', handleSettingsUpdate);
  }, []);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="bg-slate-900 text-white px-4 py-2 text-xs font-medium flex justify-between items-center">
         <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
           <div className="flex items-center gap-2">
             <MapPin className="w-3.5 h-3.5 text-blue-400" />
             <span>Delivery Location: <strong className="text-white">Sultanpur, UP</strong></span>
           </div>
           <div className="flex items-center gap-4">
               <a href="/admin" className="text-amber-400 hover:text-amber-300 font-bold">Admin Portal</a>
               <a href="/vendor-registration" className="hover:text-blue-300">Become a Seller</a>
               <a href="/vendor-login" className="hover:text-blue-300">Vendor Login</a>
           </div>
         </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
          <div className="font-bold text-2xl tracking-tight text-slate-900 cursor-pointer flex items-center" onClick={() => onNavigate('Home')}>
            <span className="text-blue-600 mr-1">{companyName.substring(0, Math.ceil(companyName.length / 2))}</span>
            <span>{companyName.substring(Math.ceil(companyName.length / 2))}</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
           {['Home', 'Products', 'About', 'Contact'].map(item => (
             <button 
               key={item}
               onClick={() => onNavigate(item)}
               className={`text-sm font-semibold transition-colors ${activePage === item ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
             >
               {item}
             </button>
           ))}
        </div>

        <div className="flex-1 max-w-md hidden md:block px-6">
          <div className="relative">
             <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
             <input type="text" placeholder="Search for groceries, electronics..." className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-700" />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button onClick={() => window.location.href = '/customer-registration'} className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-full transition-colors">
            <User className="w-4 h-4" />
            Login / Register
          </button>
          
          <button onClick={() => onNavigate('Cart')} className="relative p-2 text-slate-700 hover:bg-slate-50 rounded-full transition-colors flex items-center gap-2">
            <div className="relative">
               <ShoppingCart className="w-5 h-5" />
               {cartCount > 0 && (
                 <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                   {cartCount}
                 </span>
               )}
            </div>
            <span className="text-sm font-bold hidden sm:block">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
