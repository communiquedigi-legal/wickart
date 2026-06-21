import React, { useState } from 'react';
import { HomePage } from './HomePage';
import { ProductsPage } from './ProductsPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';
import { AboutUsPage } from './AboutUsPage';
import { ContactUsPage } from './ContactUsPage';
import { PolicyPage } from './PolicyPage';
import { StoreHeader } from './StoreHeader';
import { StoreFooter } from './StoreFooter';
import { CheckCircle2, X } from 'lucide-react';

export function StorefrontApp() {
  const [activePage, setActivePage] = useState('Home');
  const [cartCount, setCartCount] = useState(2);
  const [showCartModal, setShowCartModal] = useState(false);
  const [notification, setNotification] = useState<{message: string} | null>(null);

  const handleAddToCart = (product?: any) => {
    setCartCount(prev => prev + 1);
    setShowCartModal(true);
    // Auto hide after 5 seconds
    setTimeout(() => {
      setShowCartModal(false);
    }, 5000);
  };

  const showToast = (message: string) => {
    setNotification({ message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleWishlist = (product: any) => showToast(`${product.name} has been added to your Wishlist!`);
  const handleCompare = (product: any) => showToast(`${product.name} added to Compare list!`);
  const handleQuickView = (product: any) => showToast(`Quick view opened for ${product.name} (Preview Modal)`);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative">
      <StoreHeader activePage={activePage} onNavigate={setActivePage} cartCount={cartCount} />
      
      <main className="flex-1">
        {activePage === 'Home' && <HomePage onNavigate={setActivePage} onAddToCart={handleAddToCart} onWishlist={handleWishlist} onCompare={handleCompare} onQuickView={handleQuickView} />}
        {activePage === 'Products' && <ProductsPage onNavigate={setActivePage} onAddToCart={handleAddToCart} onWishlist={handleWishlist} onCompare={handleCompare} onQuickView={handleQuickView} />}
        {activePage === 'Cart' && <CartPage onNavigate={setActivePage} />}
        {activePage === 'Checkout' && <CheckoutPage onNavigate={setActivePage} />}
        {activePage === 'About' && <AboutUsPage />}
        {activePage === 'Contact' && <ContactUsPage />}
        {activePage === 'Privacy Policy' && <PolicyPage title="Privacy Policy" />}
        {activePage === 'Terms & Conditions' && <PolicyPage title="Terms & Conditions" />}
        {activePage === 'Shipping Policy' && <PolicyPage title="Shipping Policy" />}
        {activePage === 'Cancellation & Refund' && <PolicyPage title="Cancellation & Refund" />}
      </main>

      <StoreFooter onNavigate={setActivePage} />

      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-[100] bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
           <CheckCircle2 className="w-5 h-5 text-emerald-400" />
           <span className="font-medium text-sm">{notification.message}</span>
           <button onClick={() => setNotification(null)} className="ml-4 text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
           </button>
        </div>
      )}

      {/* Add to Cart Modal Pop */}
      {showCartModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full animate-in zoom-in duration-300 relative">
            <button onClick={() => setShowCartModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                 <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Added to Cart!</h3>
              <p className="text-slate-500 text-sm mb-6">The item has been successfully added to your shopping cart.</p>
              
              <div className="grid grid-cols-2 gap-3 w-full">
                 <button 
                   onClick={() => setShowCartModal(false)} 
                   className="py-2.5 px-4 bg-slate-100 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-200 transition-colors"
                 >
                   Continue Shopping
                 </button>
                 <button 
                   onClick={() => { setShowCartModal(false); setActivePage('Checkout'); }} 
                   className="py-2.5 px-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors"
                 >
                   Proceed to Checkout
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
