import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Plus, Search, Edit2, Trash2, ArrowLeft, UploadCloud } from 'lucide-react';

const MOCK_SUBCATEGORIES = [
  { id: '1', name: 'Mixers & Blenders', parent: 'Home Appliance', count: 12, status: 'Active' },
  { id: '2', name: 'Microwaves', parent: 'Home Appliance', count: 5, status: 'Active' },
  { id: '3', name: 'Dry Fruits', parent: 'Masala & Dry Fruits', count: 9, status: 'Active' },
  { id: '4', name: 'Whole Spices', parent: 'Masala & Dry Fruits', count: 10, status: 'Active' },
  { id: '5', name: 'Necklaces', parent: 'Jewellery', count: 8, status: 'Inactive' },
  { id: '6', name: 'Chocolates', parent: 'Desserts', count: 15, status: 'Active' },
  { id: '7', name: 'Shampoos', parent: 'Haircare', count: 6, status: 'Active' },
];

export function SubCategoriesPage() {
  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsAdding(false)}
            className="p-2 border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Add Sub Category</h1>
            <p className="text-slate-500 text-sm">Create a new sub-category mapped to a parent category.</p>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="max-w-2xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Sub Category Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. Smart TVs, Running Shoes" 
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Parent Category <span className="text-red-500">*</span></label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option value="">Select a Parent Category...</option>
                  <option value="appliance">Home Appliance</option>
                  <option value="jewelry">Jewellery</option>
                  <option value="food">Daily Meals</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Sub Category Image</label>
                <div className="mt-1 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-colors p-8 flex flex-col items-center justify-center text-center cursor-pointer group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">Drop image here</p>
                  <p className="text-xs text-slate-500 mt-1">Recommended size: 200x200px</p>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  onClick={() => setIsAdding(false)}
                  className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setIsAdding(false)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                >
                  Save Sub Category
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Sub Categories</h1>
          <p className="text-slate-500 mt-1">Manage sub categories mapping and hierarchy.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Sub Category
        </button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
          <CardTitle>All Sub Categories</CardTitle>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search..."
              className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 hover:border-slate-300 transition-colors outline-none"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50/80 text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-medium">Sub Category</th>
                  <th className="px-6 py-4 font-medium">Parent Category</th>
                  <th className="px-6 py-4 font-medium">Products</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_SUBCATEGORIES.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900">{cat.name}</td>
                    <td className="px-6 py-4 text-slate-500">{cat.parent}</td>
                    <td className="px-6 py-4">{cat.count} Products</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${cat.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                        {cat.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
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
