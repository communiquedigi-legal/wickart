import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Search, Download, DollarSign, Store } from 'lucide-react';

const MOCK_REPORTS = [
  { id: '1', store: 'City Square Mart', orders: 145, totalSales: '₹ 45,200', ourCommission: '₹ 4,520 (10%)', date: 'May 2026' },
  { id: '2', store: 'Fresh Organic Foods', orders: 89, totalSales: '₹ 12,400', ourCommission: '₹ 1,240 (10%)', date: 'May 2026' },
  { id: '3', store: 'Silicon Valley Store', orders: 234, totalSales: '₹ 89,000', ourCommission: '₹ 7,120 (8%)', date: 'May 2026' },
];

export function CommissionReportPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Seller Commission Report</h1>
          <p className="text-slate-500 mt-1">View revenue generated via seller commissions across stores.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
         <Card className="border-emerald-100 shadow-sm shadow-emerald-50 text-emerald-900">
            <CardContent className="p-6">
               <div className="flex justify-between items-start">
                  <div>
                     <p className="text-emerald-700 font-medium mb-1">Total Admin Commission</p>
                     <h3 className="text-3xl font-bold">₹12,880.00</h3>
                  </div>
                  <div className="p-3 bg-emerald-100 rounded-xl">
                     <DollarSign className="w-6 h-6 text-emerald-600" />
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
      
      <Card>
        <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
           <CardTitle>Monthly Breakdown</CardTitle>
           <div className="flex gap-2">
             <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm outline-none cursor-pointer">
               <option>Select Month</option>
               <option>May 2026</option>
               <option>April 2026</option>
             </select>
             <div className="relative">
               <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
               <input type="text" placeholder="Search store..." className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white outline-none" />
             </div>
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
             <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                   <tr>
                      <th className="px-6 py-4 font-medium">Store Name</th>
                      <th className="px-6 py-4 font-medium">Period</th>
                      <th className="px-6 py-4 font-medium text-right">Total Orders</th>
                      <th className="px-6 py-4 font-medium text-right">Total Sales</th>
                      <th className="px-6 py-4 font-medium text-right">Our Commission</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {MOCK_REPORTS.map((row) => (
                     <tr key={row.id} className="hover:bg-slate-50 cursor-pointer">
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-2">
                             <div className="p-1.5 bg-blue-50 text-blue-600 rounded">
                               <Store className="w-4 h-4" />
                             </div>
                             <span className="font-medium text-slate-900">{row.store}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4">{row.date}</td>
                        <td className="px-6 py-4 text-right font-medium">{row.orders}</td>
                        <td className="px-6 py-4 text-right font-medium text-slate-900">{row.totalSales}</td>
                        <td className="px-6 py-4 text-right font-bold text-emerald-600">{row.ourCommission}</td>
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
