import React from 'react';
import { Tag, Plus, Search } from 'lucide-react';
import { Card, CardContent, CardTitle } from '../components/ui/Card';

interface Props {
  onNavigate?: (page: string) => void;
}

export function CouponsPage({ onNavigate }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Coupons</h1>
          <p className="text-slate-500 mt-1">Manage discount coupons and promotional codes.</p>
        </div>
        <button onClick={() => onNavigate?.('Add Coupon')} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Coupon
        </button>
      </div>

      <Card>
        <div className="border-b border-slate-100 p-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search coupons..." className="pl-10 pr-4 py-2 w-full md:w-80 border rounded-lg text-sm outline-none focus:border-blue-500" />
          </div>
        </div>
        <CardContent className="p-0">
          <div className="p-12 text-center text-slate-500 flex flex-col items-center">
            <Tag className="w-12 h-12 text-slate-200 mb-4" />
            <p>No coupons found.</p>
            <p className="text-sm mt-1">Create a new coupon to offer discounts to your customers.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
