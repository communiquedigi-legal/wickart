import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Search, Plus, Star, Edit2, Trash2 } from 'lucide-react';

const MOCK_PRODUCTS = [
  { id: '1', name: 'Wireless Noise Cancelling Headphones', category: 'Electronics', price: '₹ 2,999', stock: 45, status: 'Approved' },
  { id: '2', name: 'Organic Green Tea (250g)', category: 'Grocery', price: '₹ 450', stock: 120, status: 'Approved' },
  { id: '3', name: 'Smart Fitness Band Pro', category: 'Electronics', price: '₹ 1,499', stock: 0, status: 'Pending Approval' },
];

export function SellerProductsPage() {
  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">My Products</h1>
          <p className="text-slate-500 mt-1">Manage your catalog, pricing, and specific product details.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          Add New Product
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mb-6">
         <Card className="bg-blue-50/50 border-blue-100">
            <CardContent className="p-4 text-center">
               <h3 className="text-xl font-bold text-blue-900">128</h3>
               <p className="text-sm font-medium text-blue-600">Total Products</p>
            </CardContent>
         </Card>
         <Card className="bg-emerald-50/50 border-emerald-100">
            <CardContent className="p-4 text-center">
               <h3 className="text-xl font-bold text-emerald-900">112</h3>
               <p className="text-sm font-medium text-emerald-600">Live & Approved</p>
            </CardContent>
         </Card>
         <Card className="bg-amber-50/50 border-amber-100">
            <CardContent className="p-4 text-center">
               <h3 className="text-xl font-bold text-amber-900">16</h3>
               <p className="text-sm font-medium text-amber-600">Pending Approval</p>
            </CardContent>
         </Card>
      </div>

      <Card>
        <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
           <CardTitle>Catalog</CardTitle>
           <div className="relative">
             <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
             <input type="text" placeholder="Search your products..." className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white outline-none" />
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
             <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                   <tr>
                      <th className="px-6 py-4 font-medium">Product Name</th>
                      <th className="px-6 py-4 font-medium">Category</th>
                      <th className="px-6 py-4 font-medium">Price</th>
                      <th className="px-6 py-4 font-medium">Stock</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {MOCK_PRODUCTS.map((prod) => (
                     <tr key={prod.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-slate-100 rounded flex flex-col justify-center items-center">
                                 <Plus className="w-3 h-3 text-slate-400" />
                              </div>
                              <span className="font-medium text-slate-900">{prod.name}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4">{prod.category}</td>
                        <td className="px-6 py-4 font-bold text-slate-900">{prod.price}</td>
                        <td className="px-6 py-4">
                           <span className={prod.stock === 0 ? 'text-red-600 font-bold' : ''}>
                             {prod.stock === 0 ? 'Out of Stock' : prod.stock}
                           </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] font-bold uppercase ${
                            prod.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {prod.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                             <button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 transition-colors">
                               <Edit2 className="w-4 h-4" />
                             </button>
                             <button className="p-1.5 rounded-md hover:bg-red-50 text-red-500 transition-colors">
                               <Trash2 className="w-4 h-4" />
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
