import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Plus, Search, Edit2, Trash2, ArrowLeft, UploadCloud, Tv, Wheat, Gem, Cake, Coffee, Utensils, Scissors, Sparkles, Shirt, Watch, Footprints } from 'lucide-react';

const MOCK_CATEGORIES = [
  { id: '1', name: 'Home Appliance', count: 38, icon: Tv },
  { id: '2', name: 'Masala & Dry Fruits', count: 19, icon: Wheat },
  { id: '3', name: 'Jewellery', count: 17, icon: Gem },
  { id: '4', name: 'Desserts', count: 15, icon: Cake },
  { id: '5', name: 'Soup', count: 14, icon: Coffee },
  { id: '6', name: 'Daily Meals', count: 13, icon: Utensils },
  { id: '7', name: 'Haircare', count: 12, icon: Scissors },
  { id: '8', name: 'Makeup', count: 12, icon: Sparkles },
  { id: '9', name: 'Casual Wear', count: 12, icon: Shirt },
  { id: '10', name: 'Watches', count: 12, icon: Watch },
  { id: '11', name: 'Women\'s Footwear', count: 12, icon: Footprints },
];

export function CategoriesPage() {
  const [isAdding, setIsAdding] = useState(false);
  const [categories, setCategories] = useState(MOCK_CATEGORIES);
  const [search, setSearch] = useState('');

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
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Add New Category</h1>
            <p className="text-slate-500 text-sm">Create a new top-level category for your catalog.</p>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="max-w-2xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="e.g. Electronics, Clothing" 
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category Image</label>
                <div className="mt-1 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 hover:border-blue-400 transition-colors p-8 flex flex-col items-center justify-center text-center cursor-pointer group">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">Drop your category image here</p>
                  <p className="text-xs text-slate-500 mt-1">Recommended size: 200x200px</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
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
                  Save Category
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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Categories</h1>
          <p className="text-slate-500 mt-1">Manage main product categories and their visibility.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 w-64 bg-white border border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none shadow-sm"
            />
          </div>
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.id} className="bg-white border border-slate-200/60 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group relative flex flex-col items-center text-center">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                <button onClick={() => alert('Edit action triggered')} className="p-1.5 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-md transition-colors tooltip-trigger" title="Edit">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => alert('Delete action triggered')} className="p-1.5 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-md transition-colors tooltip-trigger" title="Delete">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                <Icon className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">{cat.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{cat.count} Products</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
