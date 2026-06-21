import React from 'react';
import { Search, Bell, Menu, User, Settings, Store } from 'lucide-react';

interface HeaderProps {
  isSeller?: boolean;
}

export function Header({ isSeller = false }: HeaderProps) {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Search */}
        <div className="hidden sm:flex items-center relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3" />
          <input 
            type="text" 
            placeholder={isSeller ? "Search products..." : "Search stores, orders, products..."} 
            className="pl-9 pr-4 py-2 w-72 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-slate-700"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button 
           onClick={() => window.location.href = '/'}
           className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors border border-blue-200"
        >
           View Storefront
        </button>

        {/* Action icons */}
        <div className="flex items-center gap-1 sm:gap-2 border-r border-slate-200 pr-2 sm:pr-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full relative transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>
          <button className="hidden sm:block p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer p-1 pr-2 rounded-full hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
            {isSeller ? <Store className="w-4 h-4" /> : 'A'}
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-slate-700 leading-none">{isSeller ? 'City Square Mart' : 'Admin User'}</p>
            <p className="text-xs text-slate-500 mt-1">{isSeller ? 'Seller Account' : 'Super Admin'}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
