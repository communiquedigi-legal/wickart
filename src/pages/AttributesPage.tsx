import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Plus, Search, Edit2, Trash2, Check, X } from 'lucide-react';

interface Attribute {
  id: string;
  name: string;
  values: string[];
}

export function AttributesPage() {
  const [attributes, setAttributes] = useState<Attribute[]>([
    { id: '1', name: 'Material', values: ['Cotton', 'Polyester', 'Leather', 'Wood'] },
    { id: '2', name: 'Display Type', values: ['OLED', 'LCD', 'AMOLED'] },
    { id: '3', name: 'Storage Capacity', values: ['64GB', '128GB', '256GB', '512GB'] },
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newAttrName, setNewAttrName] = useState('');
  const [newAttrValues, setNewAttrValues] = useState('');

  const handleAdd = () => {
    if (newAttrName.trim()) {
      setAttributes([
        ...attributes, 
        { 
          id: Date.now().toString(), 
          name: newAttrName.trim(), 
          values: newAttrValues.split(',').map(v => v.trim()).filter(Boolean) 
        }
      ]);
      setNewAttrName('');
      setNewAttrValues('');
      setIsAdding(false);
    }
  };

  const handleDelete = (id: string) => {
    setAttributes(attributes.filter(a => a.id !== id));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Product Attributes</h1>
          <p className="text-slate-500 mt-1">Manage custom specifications and properties for products.</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Attribute
        </button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
          <CardTitle>All Attributes</CardTitle>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search attributes..."
              className="pl-9 pr-4 py-1.5 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 hover:border-slate-300 transition-colors outline-none"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isAdding && (
            <div className="p-4 border-b border-slate-100 bg-blue-50/50 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Attribute Name</label>
                <input 
                  type="text" 
                  autoFocus
                  placeholder="e.g. Material" 
                  value={newAttrName}
                  onChange={(e) => setNewAttrName(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Values (Comma Separated)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Cotton, Silk, Wool" 
                  value={newAttrValues}
                  onChange={(e) => setNewAttrValues(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  className="w-full px-4 py-2 bg-white border border-blue-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex items-center gap-2 pb-0.5">
                <button onClick={handleAdd} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  <Check className="w-4 h-4" /> Save
                </button>
                <button onClick={() => setIsAdding(false)} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 font-medium">Attribute Name</th>
                  <th className="px-6 py-4 font-medium">Available Values</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attributes.length === 0 ? (
                   <tr>
                     <td colSpan={3} className="px-6 py-8 text-center text-slate-500">No attributes found.</td>
                   </tr>
                ) : attributes.map(attr => (
                  <tr key={attr.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900">{attr.name}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {attr.values.map((v, i) => (
                          <span key={i} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-xs rounded-full">
                            {v}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(attr.id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
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
