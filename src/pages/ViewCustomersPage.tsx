import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Search, Eye, Filter, Edit2, Trash2, XCircle, ShieldCheck } from 'lucide-react';

const MOCK_CUSTOMERS = [
  { id: 'CUST-004', name: 'Jitendra Verma', email: 'jitu@example.com', phone: '+91 8899889988', orders: 0, status: 'Pending Approval' },
  { id: 'CUST-001', name: 'Alok Nath', email: 'alok.nath@example.com', phone: '+91 9876543210', orders: 24, status: 'Active' },
  { id: 'CUST-002', name: 'Priya Desai', email: 'priya.desai@example.com', phone: '+91 9123456789', orders: 12, status: 'Active' },
  { id: 'CUST-003', name: 'Rohan Sharma', email: 'rohan.sharma@example.com', phone: '+91 9988776655', orders: 5, status: 'Inactive' },
];

export function ViewCustomersPage() {
  const [customers, setCustomers] = useState(MOCK_CUSTOMERS);
  const [search, setSearch] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const approveCustomer = (id: string) => {
    setCustomers(customers.map(c => 
      c.id === id ? { ...c, status: 'Active' } : c
    ));
    setNotification(`Approval complete. ID and Password sent to Customer ${id} via WhatsApp.`);
    setTimeout(() => setNotification(null), 5000);
  };
  
  const resetCustomerPassword = (id: string) => {
    const newPwd = Math.random().toString(36).slice(-8); // Random password
    setNotification(`Password reset for ${id}. New Password: ${newPwd}. Details sent via WhatsApp.`);
    setTimeout(() => setNotification(null), 8000);
  };
  
  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.id.toLowerCase().includes(search.toLowerCase())
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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">View Customers</h1>
          <p className="text-slate-500 mt-1">Manage platform customers and their details.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          Export Data
        </button>
      </div>

      <Card>
        <CardHeader className="border-b border-slate-100 p-0">
          <div className="flex items-center justify-between px-6 py-4">
            <CardTitle>All Customers</CardTitle>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search customers..."
                  className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 transition-colors outline-none"
                />
              </div>
              <button className="p-1.5 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto min-h-[400px]">
             <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50/80 text-slate-500 border-b border-slate-100">
                   <tr>
                      <th className="px-6 py-4 font-medium">Customer Info</th>
                      <th className="px-6 py-4 font-medium">Contact</th>
                      <th className="px-6 py-4 font-medium">Total Orders</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {filteredCustomers.map((cust) => (
                     <tr key={cust.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                           <div className="font-medium text-slate-900">{cust.name}</div>
                           <div className="text-xs text-slate-500">{cust.id}</div>
                        </td>
                        <td className="px-6 py-4">
                           <div>{cust.email}</div>
                           <div className="text-slate-500">{cust.phone}</div>
                        </td>
                        <td className="px-6 py-4 font-medium">{cust.orders}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium ${
                            cust.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                            cust.status === 'Pending Approval' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            'bg-slate-50 text-slate-600 border-slate-200'
                          }`}>
                             {cust.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                              {cust.status === 'Pending Approval' ? (
                                <button onClick={() => approveCustomer(cust.id)} className="px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                                  Approve
                                </button>
                              ) : (
                                <button onClick={() => resetCustomerPassword(cust.id)} className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors border border-slate-200">
                                  Reset Pwd
                                </button>
                              )}
                              <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View Profile">
                                 <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors" title="Edit">
                                 <Edit2 className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
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
