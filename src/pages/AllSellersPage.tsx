import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Search, Edit2, ShieldCheck, ShieldAlert, Store, XCircle } from 'lucide-react';

const MOCK_SELLERS = [
  { id: 'VND-2005', name: 'Global Markets', owner: 'Suresh Kumar', categories: 'General', joined: '10 Jun 2026', status: 'Blocked' },
  { id: 'VND-2004', name: 'Super Tech Hub', owner: 'Vikram Singh', categories: 'Electronics', joined: '09 Jun 2026', status: 'Pending Approval' },
  { id: 'VND-2001', name: 'City Square Mart', owner: 'Ramesh Gupta', categories: 'Grocery, Dairy', joined: '01 Jun 2026', status: 'Active' },
  { id: 'VND-2002', name: 'Fresh Organic Foods', owner: 'Sita Ram', categories: 'Grocery', joined: '28 May 2026', status: 'Active' },
  { id: 'VND-2003', name: 'Silicon Valley Store', owner: 'Amit Patel', categories: 'Electronics', joined: '15 May 2026', status: 'Inactive' },
];

export function AllSellersPage() {
  const [sellers, setSellers] = useState(MOCK_SELLERS);
  const [search, setSearch] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const toggleStatus = (id: string, currentStatus: string) => {
    setSellers(sellers.map(s => 
      s.id === id ? { ...s, status: currentStatus === 'Active' ? 'Inactive' : 'Active' } : s
    ));
  };
  
  const approveVendor = (id: string) => {
    setSellers(sellers.map(s => 
      s.id === id ? { ...s, status: 'Active' } : s
    ));
    setNotification(`Approval complete. ID and Password sent to Vendor ${id} via WhatsApp.`);
    setTimeout(() => setNotification(null), 5000);
  };
  
  const unblockVendor = (id: string) => {
    setSellers(sellers.map(s => 
      s.id === id ? { ...s, status: 'Active' } : s
    ));
    setNotification(`Vendor ${id} has been unblocked. They can now login.`);
    setTimeout(() => setNotification(null), 5000);
  };

  const resetVendorPassword = (id: string) => {
    const newPwd = Math.random().toString(36).slice(-8); // Random password
    setNotification(`Password reset for ${id}. New Password: ${newPwd}. Details sent via WhatsApp.`);
    setTimeout(() => setNotification(null), 8000);
  };
  
  const filteredSellers = sellers.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
       {/* Toast Notification */}
       {notification && (
         <div className="fixed top-6 right-6 z-[100] bg-emerald-900 border border-emerald-800 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-5 duration-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-medium text-sm">{notification}</span>
            <button onClick={() => setNotification(null)} className="ml-4 text-emerald-400 hover:text-white">
               <XCircle className="w-4 h-4" />
            </button>
         </div>
       )}

       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">All Sellers Details Report</h1>
          <p className="text-slate-500 mt-1">Manage vendor accounts across the platform. Activate or deactivate vendors.</p>
        </div>
      </div>
      
      <Card>
        <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
           <CardTitle className="flex items-center gap-2"><Store className="w-5 h-5 text-blue-600"/> Vendor Roster</CardTitle>
           <div className="relative">
             <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
             <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or ID..." className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white outline-none" />
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto min-h-[400px]">
             <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                   <tr>
                      <th className="px-6 py-4 font-medium">Vendor Details</th>
                      <th className="px-6 py-4 font-medium">Owner</th>
                      <th className="px-6 py-4 font-medium">Categories</th>
                      <th className="px-6 py-4 font-medium">Status & Date</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {filteredSellers.map((seller) => (
                     <tr key={seller.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                           <div className="font-bold text-blue-600">{seller.name}</div>
                           <div className="text-xs text-slate-500">{seller.id}</div>
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-900">{seller.owner}</td>
                        <td className="px-6 py-4 text-slate-700">{seller.categories}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1 ${
                            seller.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                            seller.status === 'Pending Approval' ? 'bg-amber-100 text-amber-700' :
                            seller.status === 'Blocked' ? 'bg-red-200 text-red-900' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {seller.status === 'Active' ? <ShieldCheck className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                            {seller.status}
                          </span>
                          <div className="text-xs text-slate-500">Joined {seller.joined}</div>
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                             {seller.status === 'Pending Approval' ? (
                               <button 
                                 onClick={() => approveVendor(seller.id)}
                                 className="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                               >
                                 Approve & Send Status
                               </button>
                             ) : seller.status === 'Blocked' ? (
                               <button 
                                 onClick={() => unblockVendor(seller.id)}
                                 className="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                               >
                                 Unblock Account
                               </button>
                             ) : (
                               <>
                                 <button 
                                   onClick={() => toggleStatus(seller.id, seller.status)}
                                   className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                                      seller.status === 'Active' 
                                        ? 'bg-white border-red-200 text-red-600 hover:bg-red-50' 
                                        : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
                                   }`}
                                 >
                                   {seller.status === 'Active' ? 'Deactivate' : 'Activate'}
                                 </button>
                                 <button onClick={() => resetVendorPassword(seller.id)} className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200">
                                   Reset Pwd
                                 </button>
                               </>
                             )}
                             <button onClick={() => alert('Edit seller profile')} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent">
                               <Edit2 className="w-4 h-4" />
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
