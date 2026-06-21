import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Plus, Search, Edit2, Trash2, X, Check } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  status: 'active' | 'inactive';
}

export function BrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([
    { id: '1', name: 'Nike', status: 'active' },
    { id: '2', name: 'Samsung', status: 'active' },
    { id: '3', name: 'Sony', status: 'inactive' },
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      setBrands([...brands, { id: Date.now().toString(), name: inputValue.trim(), status: 'active' }]);
      setInputValue('');
      setIsAdding(false);
    }
  };

  const handleUpdate = (id: string) => {
    if (inputValue.trim()) {
      setBrands(brands.map(b => b.id === id ? { ...b, name: inputValue.trim() } : b));
      setEditingId(null);
      setInputValue('');
    }
  };

  const startEdit = (brand: Brand) => {
    setEditingId(brand.id);
    setInputValue(brand.name);
    setIsAdding(false);
  };

  const handleDelete = (id: string) => {
    setBrands(brands.filter(b => b.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Brands</h1>
          <p className="text-slate-500 mt-1">Manage product brands and manufacturers.</p>
        </div>
        <button 
          onClick={() => { setIsAdding(true); setEditingId(null); setInputValue(''); }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Brand
        </button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
          <CardTitle>All Brands</CardTitle>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search brands..."
              className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 hover:border-slate-300 transition-colors outline-none"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isAdding && (
            <div className="p-4 border-b border-slate-100 bg-blue-50/50 flex items-center gap-4">
              <input 
                type="text" 
                autoFocus
                placeholder="Enter brand name..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                className="flex-1 px-4 py-2 bg-white border border-blue-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <div className="flex items-center gap-2">
                <button onClick={handleAdd} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Check className="w-4 h-4" />
                </button>
                <button onClick={() => setIsAdding(false)} className="p-2 bg-white border border-slate-200 text-slate-500 rounded-lg hover:bg-slate-50 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-medium">Brand Name</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {brands.length === 0 ? (
                   <tr>
                     <td colSpan={3} className="px-6 py-8 text-center text-slate-500">No brands found. Click "Add Brand" to create one.</td>
                   </tr>
                ) : brands.map(brand => (
                  <tr key={brand.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      {editingId === brand.id ? (
                        <input 
                          type="text" 
                          autoFocus
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleUpdate(brand.id)}
                          className="w-full max-w-sm px-3 py-1.5 bg-white border border-blue-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      ) : (
                        <span className="font-medium text-slate-900">{brand.name}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${brand.status === 'active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                        {brand.status.charAt(0).toUpperCase() + brand.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {editingId === brand.id ? (
                        <div className="flex items-center justify-end gap-2">
                           <button onClick={() => handleUpdate(brand.id)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                              <Check className="w-4 h-4" />
                           </button>
                           <button onClick={() => setEditingId(null)} className="p-1.5 text-slate-500 hover:bg-slate-100 rounded-md transition-colors">
                              <X className="w-4 h-4" />
                           </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => startEdit(brand)} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors tooltip-trigger" title="Edit">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(brand.id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors tooltip-trigger" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
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
