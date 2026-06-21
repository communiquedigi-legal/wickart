import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Search, Edit2, AlertCircle, TrendingDown } from 'lucide-react';

const MOCK_INVENTORY = [
  { id: 'PRD-101', name: 'Wireless Headphones', sku: 'WH-01-BK', stock: 45, threshold: 10, status: 'In Stock' },
  { id: 'PRD-102', name: 'Smart Fitness Band Pro', sku: 'SFB-02-BL', stock: 0, threshold: 5, status: 'Out of Stock' },
  { id: 'PRD-103', name: 'Organic Green Tea (250g)', sku: 'OGT-250', stock: 8, threshold: 15, status: 'Low Stock' },
];

export function SellerInventoryPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Inventory & Stock</h1>
          <p className="text-slate-500 mt-1">Manage product stock quantities and low stock alerts.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="bg-red-50/50 border-red-100">
            <CardContent className="p-4 flex items-center gap-4">
               <div className="p-3 bg-red-100 text-red-600 rounded-lg"><AlertCircle className="w-6 h-6" /></div>
               <div>
                  <h3 className="text-2xl font-bold text-red-900">1</h3>
                  <p className="text-sm font-medium text-red-600">Out of Stock Items</p>
               </div>
            </CardContent>
         </Card>
         <Card className="bg-amber-50/50 border-amber-100">
            <CardContent className="p-4 flex items-center gap-4">
               <div className="p-3 bg-amber-100 text-amber-600 rounded-lg"><TrendingDown className="w-6 h-6" /></div>
               <div>
                  <h3 className="text-2xl font-bold text-amber-900">1</h3>
                  <p className="text-sm font-medium text-amber-600">Low Stock Alerts</p>
               </div>
            </CardContent>
         </Card>
      </div>

      <Card>
        <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
           <CardTitle>Stock Management</CardTitle>
           <div className="relative">
             <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
             <input type="text" placeholder="Search by SKU or Name..." className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white outline-none" />
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
             <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                   <tr>
                      <th className="px-6 py-4 font-medium">Product Name & SKU</th>
                      <th className="px-6 py-4 font-medium">Current Stock</th>
                      <th className="px-6 py-4 font-medium">Alert Threshold</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right">Update Stock</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {MOCK_INVENTORY.map((item) => (
                     <tr key={item.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4">
                           <div className="font-medium text-slate-900">{item.name}</div>
                           <div className="text-xs text-slate-500">{item.sku}</div>
                        </td>
                        <td className="px-6 py-4 font-bold text-slate-900">{item.stock}</td>
                        <td className="px-6 py-4">{item.threshold}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                            item.status === 'In Stock' ? 'bg-emerald-100 text-emerald-700' : 
                            item.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                             <input type="number" defaultValue={item.stock} className="w-20 px-2 py-1 border rounded text-right outline-none focus:border-blue-500" />
                             <button className="px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded font-medium transition-colors">
                               Save
                             </button>
                           </div>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
}
