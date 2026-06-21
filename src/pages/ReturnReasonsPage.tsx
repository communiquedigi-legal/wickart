import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Plus, Trash2, Edit2, Search } from 'lucide-react';

export function ReturnReasonsPage() {
  const [reasons, setReasons] = useState([
    { id: 1, text: 'Product is damaged/defective', status: 'Active' },
    { id: 2, text: 'Wrong item was delivered', status: 'Active' },
    { id: 3, text: 'Quality is not as expected', status: 'Active' },
    { id: 4, text: 'Missing parts or accessories', status: 'Active' },
  ]);

  const [newReason, setNewReason] = useState('');

  const handleAdd = () => {
    if (newReason.trim()) {
      setReasons([...reasons, { id: Date.now(), text: newReason.trim(), status: 'Active' }]);
      setNewReason('');
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Reasons For Return</h1>
          <p className="text-slate-500 mt-1">Configure options shown to customers when initiating a return.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="md:col-span-1">
            <Card>
               <CardHeader className="border-b border-slate-100 pb-4">
                  <CardTitle>Add New Reason</CardTitle>
               </CardHeader>
               <CardContent className="pt-4 space-y-4">
                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Reason Text <span className="text-red-500">*</span></label>
                     <textarea 
                       value={newReason}
                       onChange={(e) => setNewReason(e.target.value)}
                       placeholder="e.g. Item doesn't match description" 
                       rows={3} 
                       className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 outline-none resize-none"
                     ></textarea>
                  </div>
                  <button 
                     onClick={handleAdd}
                     className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                     <Plus className="w-4 h-4" /> Add Reason
                  </button>
               </CardContent>
            </Card>
         </div>
         
         <div className="md:col-span-2">
            <Card>
               <CardHeader className="border-b border-slate-100 pb-4 flex flex-row items-center justify-between">
                  <CardTitle>Active Reasons</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600">
                       <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                          <tr>
                             <th className="px-6 py-4 font-medium w-16">ID</th>
                             <th className="px-6 py-4 font-medium">Reason</th>
                             <th className="px-6 py-4 font-medium">Status</th>
                             <th className="px-6 py-4 font-medium text-right">Actions</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                          {reasons.map((r, i) => (
                            <tr key={r.id} className="hover:bg-slate-50">
                               <td className="px-6 py-4 font-medium text-slate-400">{i + 1}</td>
                               <td className="px-6 py-4 text-slate-900 font-medium">{r.text}</td>
                               <td className="px-6 py-4">
                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                                    {r.status}
                                 </span>
                               </td>
                               <td className="px-6 py-4 text-right">
                                  <div className="flex items-center justify-end gap-2">
                                    <button className="p-1.5 rounded-md hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors">
                                      <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => setReasons(reasons.filter(x => x.id !== r.id))} className="p-1.5 rounded-md hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors">
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
      </div>
      
    </div>
  );
}
