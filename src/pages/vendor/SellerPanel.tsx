import React, { useState } from 'react';
import { Sidebar } from '../../components/layout/Sidebar';
import { Header } from '../../components/layout/Header';
import { PagePlaceholder } from '../PagePlaceholder';
import { Users, Store, Bike, ShoppingCart, Box, DollarSign, LifeBuoy, AlertCircle } from 'lucide-react';

import { SellerDashboardPage } from './SellerDashboardPage';
import { SellerProductsPage } from './SellerProductsPage';
import { SellerOrdersPage } from './SellerOrdersPage';
import { SellerInventoryPage } from './SellerInventoryPage';

// Specialized Sidebar items for Seller Panel
const sellerNavGroups = [
  {
    title: 'STORE MANAGEMENT',
    items: [
      { name: 'Dashboard', icon: Store },
      { name: 'My Products', icon: Box, hasSubmenu: true, subItems: ['Add Product', 'Approved Products', 'Pending Approvals'] },
      { name: 'Inventory & Stock', icon: Box },
    ]
  },
  {
    title: 'ORDERS',
    items: [
      { name: 'New Orders', icon: ShoppingCart },
      { name: 'Processing & Dispatch', icon: Bike },
      { name: 'Returns & Refunds', icon: AlertCircle },
    ]
  },
  {
    title: 'FINANCE',
    items: [
      { name: 'Earnings & Commission', icon: DollarSign },
      { name: 'Withdrawals', icon: DollarSign },
    ]
  },
  {
    title: 'SUPPORT',
    items: [
      { name: 'Raise Ticket', icon: LifeBuoy },
    ]
  }
];

export function SellerPanel() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Custom sidebar rendering for Seller context */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center px-6 border-b border-white/10 bg-slate-900/50">
          <Store className="w-6 h-6 text-emerald-500" />
          <span className="ml-3 font-bold text-white tracking-tight">Seller Portal</span>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)] custom-scrollbar">
          {sellerNavGroups.map((group, i) => (
            <div key={i} className="mb-6">
              <h3 className="px-3 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{group.title}</h3>
              <div className="space-y-1">
                {group.items.map(item => (
                  <button
                    key={item.name}
                    onClick={() => setActivePage(item.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activePage === item.name || (item.subItems && item.subItems.includes(activePage))
                        ? 'bg-blue-600/10 text-blue-500 font-medium'
                        : 'hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${activePage === item.name ? 'text-blue-500' : 'text-slate-400'}`} />
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header isSeller />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <Store className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                   <h3 className="font-semibold text-emerald-900">Welcome to your Seller Dashboard</h3>
                   <p className="text-sm text-emerald-700">Your store "City Square Mart" is currently Active. You have 14 new orders today.</p>
                </div>
             </div>
             
             {activePage === 'Dashboard' ? (
                <SellerDashboardPage />
             ) : (activePage === 'My Products' || activePage === 'Approved Products' || activePage === 'Pending Approvals' || activePage === 'Add Product') ? (
                <SellerProductsPage />
             ) : (activePage === 'New Orders' || activePage === 'Processing & Dispatch') ? (
                <SellerOrdersPage />
             ) : activePage === 'Inventory & Stock' ? (
                <SellerInventoryPage />
             ) : (
                <PagePlaceholder pageName={activePage} />
             )}
          </div>
        </main>
      </div>
    </div>
  );
}
