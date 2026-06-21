import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Search, MapPin, Phone, User, Package, Eye } from 'lucide-react';

const MOCK_ORDERS = [
  { 
    id: 'ORD-9024', 
    date: '06 Jun 2026, 14:30',
    status: 'New', 
    amount: '₹ 1,250.00',
    items: '2x Organic Green Tea',
    customer: {
       name: 'Alok Nath',
       phone: '+91 9876543210',
       address: '123, Sunrise Apartments, Sector 4, MG Road, City, State - 400001'
    }
  },
  { 
    id: 'ORD-9021', 
    date: '05 Jun 2026, 09:15',
    status: 'Processing', 
    amount: '₹ 2,999.00',
    items: '1x Wireless Headphones',
    customer: {
       name: 'Priya Desai',
       phone: '+91 9123456789',
       address: 'Tech Park Tower B, 4th Floor, Silicon Valley, City, State - 400002'
    }
  }
];

export function SellerOrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<typeof MOCK_ORDERS[0] | null>(null);

  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Manage Orders</h1>
          <p className="text-slate-500 mt-1">Review your incoming orders and dispatch details.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Order List */}
         <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
                 <CardTitle>Recent Orders</CardTitle>
                 <div className="relative">
                   <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                   <input type="text" placeholder="Search orders..." className="pl-9 pr-4 py-1.5 w-48 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white outline-none" />
                 </div>
              </CardHeader>
              <CardContent className="p-0">
                 <div className="overflow-x-auto">
                   <table className="w-full text-left text-sm text-slate-600">
                      <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                         <tr>
                            <th className="px-6 py-4 font-medium">Order & Date</th>
                            <th className="px-6 py-4 font-medium">Items</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                         {MOCK_ORDERS.map((order) => (
                           <tr 
                             key={order.id} 
                             className={`hover:bg-slate-50 cursor-pointer ${selectedOrder?.id === order.id ? 'bg-blue-50/50' : ''}`}
                             onClick={() => setSelectedOrder(order)}
                           >
                              <td className="px-6 py-4">
                                 <div className="font-medium text-blue-600">{order.id}</div>
                                 <div className="text-xs text-slate-500">{order.date}</div>
                              </td>
                              <td className="px-6 py-4">
                                 <div className="font-medium text-slate-900">{order.amount}</div>
                                 <div className="text-xs text-slate-500">{order.items}</div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                                   order.status === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                                }`}>
                                   {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors">
                                   <Eye className="w-4 h-4" />
                                </button>
                              </td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                 </div>
              </CardContent>
            </Card>
         </div>

         {/* Order Details Panel */}
         <div className="lg:col-span-1">
            {selectedOrder ? (
              <Card className="h-full border-blue-100 shadow-sm shadow-blue-50">
                 <CardHeader className="bg-blue-50/50 border-b border-blue-100 pb-4">
                    <div className="flex justify-between items-start">
                       <div>
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Order Details</p>
                          <CardTitle className="text-lg">{selectedOrder.id}</CardTitle>
                       </div>
                       <span className="px-2 py-1 bg-white border border-blue-200 text-blue-700 rounded text-xs font-bold shadow-sm">
                          {selectedOrder.status}
                       </span>
                    </div>
                 </CardHeader>
                 <CardContent className="p-5 space-y-6">
                    {/* Customer Info (Visible to Vendor) */}
                    <div>
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <User className="w-3.5 h-3.5" /> Customer Info
                       </h4>
                       <div className="bg-slate-50 rounded-lg p-3 space-y-2 border border-slate-100 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Name</span>
                            <span className="font-medium text-slate-900">{selectedOrder.customer.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Contact</span>
                            <span className="font-medium text-slate-900 flex items-center gap-1">
                               <Phone className="w-3 h-3 text-slate-400" />
                               {selectedOrder.customer.phone}
                            </span>
                          </div>
                          <div className="pt-2 mt-2 border-t border-slate-200/60">
                             <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-xs leading-relaxed">{selectedOrder.customer.address}</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div>
                       <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Package className="w-3.5 h-3.5" /> Items
                       </h4>
                       <div className="p-3 border border-slate-100 rounded-lg text-sm bg-white shadow-sm">
                          <p className="font-medium text-slate-900">{selectedOrder.items}</p>
                          <p className="text-slate-500 font-bold mt-2 pt-2 border-t flex justify-between">
                            <span>Total</span>
                            <span className="text-slate-900">{selectedOrder.amount}</span>
                          </p>
                       </div>
                    </div>

                    <div className="pt-4 border-t flex flex-col gap-2">
                       <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors">
                          Accept Order & Dispatch
                       </button>
                       <button className="w-full py-2 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
                          Reject Order
                       </button>
                    </div>
                 </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center p-8 bg-slate-50/50 border-dashed">
                 <div className="text-center text-slate-400">
                    <Package className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <p className="font-medium">Select an order from the list<br/>to view details (Name, Address, Contact)</p>
                 </div>
              </Card>
            )}
         </div>
      </div>
    </div>
  );
}
