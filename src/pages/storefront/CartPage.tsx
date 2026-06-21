import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';

interface CartPageProps {
  onNavigate: (page: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const [quantity, setQuantity] = useState(1);
  const basePrice = 400;
  const deliveryFee = 20;
  
  const subTotal = (quantity * basePrice) + 450; // Accounting for other items too
  const total = subTotal + deliveryFee;

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-80px)] py-12 animate-in fade-in duration-500">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
         
         <div className="bg-[#e9eee6] rounded-[2rem] p-6 sm:p-8 shadow-sm text-[#4b5563] relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start mb-8 relative z-10 text-[#374151]">
               <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1 opacity-70">CART MANIFEST</p>
                  <h1 className="text-3xl font-black tracking-tight">Order Summary</h1>
               </div>
               <button onClick={() => onNavigate('Home')} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                  <X className="w-6 h-6" />
               </button>
            </div>

            {/* Item 1 */}
            <div className="bg-[#dde4df] rounded-3xl p-4 flex gap-4 mb-4 items-center">
               <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white shrink-0">
                  <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=200" alt="Coffee" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1">
                  <h3 className="font-bold text-[#1f2937] text-lg mb-0.5">Cold Brew Coffee</h3>
                  <p className="text-[#3b82f6] font-extrabold text-sm mb-3">₹{basePrice.toFixed(2)} <span className="font-medium text-[#6b7280]">/ 250ML</span></p>
                  <div className="flex justify-between items-center w-full">
                     <div className="inline-flex bg-[#cfd6d1] rounded-full items-center">
                        <button 
                           onClick={() => setQuantity(Math.max(1, quantity - 1))}
                           className="px-3 py-1 text-slate-600 hover:text-black font-bold">
                           <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-sm">{quantity}</span>
                        <button 
                           onClick={() => setQuantity(quantity + 1)}
                           className="px-3 py-1 text-slate-600 hover:text-black font-bold">
                           <Plus className="w-3.5 h-3.5" />
                        </button>
                     </div>
                     <button className="p-1 px-3 text-slate-400 hover:text-red-500 transition-colors opacity-50 hover:opacity-100">
                        <X className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>

            {/* Item 2 Mini */}
            <div className="py-4 border-b border-[#cfd6d1] flex items-center justify-between px-2 mb-6 cursor-pointer hover:bg-[#dde4df] rounded-xl transition-colors">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shrink-0">
                     <img src="https://images.unsplash.com/photo-1581428982868-e410dd447aa4?auto=format&fit=crop&q=80&w=100" alt="Sugar" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-[#374151]">Organic Brown Sugar</h3>
               </div>
               <div className="rotate-180 opacity-50">
                   <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
               </div>
            </div>

            {/* Voucher */}
            <div className="mb-8">
               <div className="flex justify-between items-end mb-2">
                  <p className="text-[10px] font-bold tracking-widest text-[#3b82f6] uppercase">VOUCHER / CODE</p>
                  <button className="text-[11px] font-bold text-[#ec4899] hover:underline">Offers list</button>
               </div>
               <div className="flex gap-2">
                  <input type="text" placeholder="e.g. FAST15" className="flex-1 bg-transparent border-b-2 border-[#cfd6d1] focus:border-[#3b82f6] outline-none px-2 py-2 font-medium text-[#1f2937] placeholder:text-[#9ca3af] transition-colors" />
                  <button className="bg-[#1f2937] hover:bg-black text-white px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-black/10 transition-all">
                     APPLY
                  </button>
               </div>
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-8">
               <div className="flex justify-between items-center text-sm font-bold text-[#3b82f6]">
                  <span className="uppercase tracking-widest text-xs opacity-80">SUBTOTAL</span>
                  <span className="text-[#1f2937]">₹{subTotal.toFixed(2)}</span>
               </div>
               <div className="flex justify-between items-center text-sm font-bold text-[#3b82f6]">
                  <span className="uppercase tracking-widest text-xs opacity-80">DELIVERY FEE</span>
                  <span className="text-[#1f2937]">₹{deliveryFee.toFixed(2)}</span>
               </div>
            </div>

            {/* Settlement Protocol (Payment Methods) */}
            <div className="mb-10">
               <p className="text-[10px] font-bold tracking-widest text-[#3b82f6] uppercase mb-3 opacity-80">FULFILLMENT SETTLEMENT PROTOCOL</p>
               <div className="grid grid-cols-3 gap-2">
                  <button className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-transparent hover:border-[#3b82f6]/20 transition-all text-center">
                     <span className="font-bold text-[#3b82f6] text-xs">DIGITAL<br/>WALLET</span>
                     <span className="text-[9px] font-bold text-[#9ca3af] mt-1">₹1450.00</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-2xl border-2 border-transparent hover:border-[#3b82f6]/20 transition-all text-center">
                     <span className="font-bold text-[#3b82f6] text-xs">CARDS / UPI</span>
                     <span className="text-[9px] font-bold text-[#9ca3af] mt-1">Secure Gateway</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#cfd6d1]/50 border-2 border-[#10b981]/20 text-center">
                     <span className="font-bold text-[#ec4899] text-xs">POD / CASH</span>
                     <span className="text-[9px] font-bold text-[#9ca3af] mt-1">Standard COD</span>
                  </button>
               </div>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-end mb-8 pt-4 border-t border-[#cfd6d1]">
               <span className="text-[10px] font-bold tracking-widest text-[#3b82f6] opacity-80 uppercase">GRAND TOTAL</span>
               <span className="text-4xl font-black text-[#1f2937] tracking-tighter">₹{total.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button onClick={() => onNavigate('Checkout')} className="w-full bg-[#10b981] hover:bg-[#059669] active:bg-[#047857] text-[#064e3b] py-5 rounded-[1.5rem] font-black tracking-widest text-sm flex items-center justify-center gap-3 transition-colors shadow-xl shadow-[#10b981]/20 group">
               INITIATE SECURE CHECKOUT 
               <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>

         </div>
      </div>
    </div>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
