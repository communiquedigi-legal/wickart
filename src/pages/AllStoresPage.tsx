import React from 'react';
import { Store, Plus, Search } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export function AllStoresPage() {
  const stores = [
    { id: 'STR-001', name: 'City Square Mart', location: 'Downtown', status: 'Active' },
    { id: 'STR-002', name: 'Fresh Organic Foods', location: 'West End', status: 'Active' },
    { id: 'STR-003', name: 'Silicon Valley Store', location: 'Tech Park', status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">All Stores</h1>
          <p className="text-slate-500 mt-1">View and manage all registered stores in the network.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Store
        </button>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search stores..." className="pl-10 pr-4 py-2 w-full md:w-80 border rounded-lg text-sm outline-none focus:border-blue-500" />
          </div>
        </div>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-100">
                  <th className="px-6 py-4 font-medium">Store ID</th>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Location</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {stores.map((store, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-500">{store.id}</td>
                    <td className="px-6 py-4 font-medium text-blue-600">{store.name}</td>
                    <td className="px-6 py-4 text-slate-600">{store.location}</td>
                    <td className="px-6 py-4">
                       <span className={`px-2 py-1 rounded-md font-medium text-xs ${store.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                         {store.status}
                       </span>
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
