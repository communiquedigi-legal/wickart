import React from 'react';
import { Card, CardContent } from '../components/ui/Card';

export function AddStorePage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Add New Store</h1>
        <p className="text-slate-500 mt-1">Register a new store into the network.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Store Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="e.g. Fresh Organic Foods" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Owner Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="Owner's full name" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="Complete property address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="City" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contact Phone</label>
                <input type="tel" className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="+91 00000 00000" />
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button type="button" className="px-5 py-2 text-slate-600 bg-slate-100 font-medium rounded-lg hover:bg-slate-200 transition">Cancel</button>
              <button type="button" className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">Save Store</button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
