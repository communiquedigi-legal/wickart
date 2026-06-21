import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Plus, X, Type, Palette, Ruler, Weight, Package } from 'lucide-react';

type VariantType = 'text' | 'color' | 'size' | 'weight' | 'volume';

interface VariantGroup {
  id: string;
  name: string;
  type: VariantType;
  icon: React.ElementType;
  values: { id: string; label: string; value?: string }[];
}

export function VariantsPage() {
  const [variantGroups, setVariantGroups] = useState<VariantGroup[]>([
    {
      id: '1', name: 'Cloth Sizes', type: 'size', icon: Ruler,
      values: [
        { id: 'v1', label: 'XS' }, { id: 'v2', label: 'S' }, 
        { id: 'v3', label: 'M' }, { id: 'v4', label: 'L' }, 
        { id: 'v5', label: 'XL' }, { id: 'v6', label: 'XXL' }
      ]
    },
    {
      id: '2', name: 'Colors', type: 'color', icon: Palette,
      values: [
        { id: 'c1', label: 'Red', value: '#ef4444' }, 
        { id: 'c2', label: 'Blue', value: '#3b82f6' }, 
        { id: 'c3', label: 'Green', value: '#10b981' },
        { id: 'c4', label: 'Black', value: '#0f172a' }
      ]
    },
    {
      id: '3', name: 'Shoe Sizes (UK)', type: 'size', icon: Ruler,
      values: [
        { id: 's1', label: '6' }, { id: 's2', label: '7' }, 
        { id: 's3', label: '8' }, { id: 's4', label: '9' }, 
        { id: 's5', label: '10' }, { id: 's6', label: '11' }
      ]
    },
    {
      id: '4', name: 'Weight', type: 'weight', icon: Weight,
      values: [
        { id: 'w1', label: '50g' }, { id: 'w2', label: '100g' }, 
        { id: 'w3', label: '250g' }, { id: 'w4', label: '500g' }, 
        { id: 'w5', label: '1kg' }, { id: 'w6', label: '5kg' }
      ]
    },
    {
      id: '5', name: 'Volume / Liquid', type: 'volume', icon: Package,
      values: [
        { id: 'l1', label: '100ml' }, { id: 'l2', label: '250ml' }, 
        { id: 'l3', label: '500ml' }, { id: 'l4', label: '1 Liter' }
      ]
    },
    {
      id: '6', name: 'Packaging', type: 'text', icon: Package,
      values: [
        { id: 'p1', label: 'Single' }, { id: 'p2', label: 'Pack of 2' }, 
        { id: 'p3', label: 'Pack of 5' }, { id: 'p4', label: 'Box' }
      ]
    }
  ]);

  const [activeGroupId, setActiveGroupId] = useState<string>('1');
  const [newValueLabel, setNewValueLabel] = useState('');
  const [newValueColor, setNewValueColor] = useState('#000000');

  const activeGroup = variantGroups.find(g => g.id === activeGroupId);

  const handleAddValue = () => {
    if (!activeGroup || !newValueLabel.trim()) return;
    
    const updatedGroups = variantGroups.map(group => {
      if (group.id === activeGroupId) {
        return {
          ...group,
          values: [
            ...group.values, 
            { 
              id: Date.now().toString(), 
              label: newValueLabel.trim(), 
              ...(group.type === 'color' ? { value: newValueColor } : {}) 
            }
          ]
        };
      }
      return group;
    });

    setVariantGroups(updatedGroups);
    setNewValueLabel('');
    setNewValueColor('#000000');
  };

  const removeValue = (groupId: string, valueId: string) => {
    const updatedGroups = variantGroups.map(group => {
      if (group.id === groupId) {
        return { ...group, values: group.values.filter(v => v.id !== valueId) };
      }
      return group;
    });
    setVariantGroups(updatedGroups);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Product Variants</h1>
          <p className="text-slate-500 mt-1">Manage attributes like sizes, colors, capacities, and weights globally.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          New Variant Type
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left sidebar for variant groups */}
        <div className="lg:col-span-1 space-y-2">
          {variantGroups.map((group) => {
            const Icon = group.icon;
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroupId(group.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm transition-all ${
                  activeGroupId === group.id 
                    ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm' 
                    : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-md ${activeGroupId === group.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{group.name}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${activeGroupId === group.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                  {group.values.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Right side content for selected variant */}
        <div className="lg:col-span-3">
          {activeGroup ? (
            <Card className="h-full">
              <CardHeader className="border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <activeGroup.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{activeGroup.name}</CardTitle>
                    <p className="text-sm text-slate-500 mt-1">Configure options for this variant type.</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                
                {/* Add new value form */}
                <div className="flex flex-wrap sm:flex-nowrap items-end gap-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Value Label</label>
                    <input 
                      type="text" 
                      placeholder={activeGroup.type === 'color' ? "e.g. Navy Blue" : "e.g. XXL, 100g, Pack of 3"}
                      value={newValueLabel}
                      onChange={(e) => setNewValueLabel(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddValue()}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  
                  {activeGroup.type === 'color' && (
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Color Code</label>
                      <div className="flex items-center gap-2 bg-white border border-slate-200 p-1 rounded-lg">
                        <input 
                          type="color" 
                          value={newValueColor}
                          onChange={(e) => setNewValueColor(e.target.value)}
                          className="w-8 h-8 rounded cursor-pointer border-0 p-0"
                        />
                        <input 
                          type="text" 
                          value={newValueColor.toUpperCase()}
                          onChange={(e) => setNewValueColor(e.target.value)}
                          className="w-20 text-sm border-none outline-none font-mono"
                        />
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={handleAddValue}
                    disabled={!newValueLabel.trim()}
                    className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    Add Value
                  </button>
                </div>

                {/* Values List */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-4">Existing Values ({activeGroup.values.length})</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeGroup.values.map(val => (
                      <div key={val.id} className="flex items-center gap-2 pl-3 pr-1 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm group">
                        {activeGroup.type === 'color' && val.value && (
                          <div className="w-4 h-4 rounded-full border border-slate-200 shrink-0" style={{ backgroundColor: val.value }}></div>
                        )}
                        <span className="text-sm font-medium text-slate-700">{val.label}</span>
                        <button 
                          onClick={() => removeValue(activeGroup.id, val.id)}
                          className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                    {activeGroup.values.length === 0 && (
                      <p className="text-sm text-slate-400 italic">No values added yet.</p>
                    )}
                  </div>
                </div>

              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 text-slate-400 p-8">
              Select a variant type to configure
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
