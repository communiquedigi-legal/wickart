import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { ShoppingCart, DollarSign, Package, TrendingUp } from 'lucide-react';

export function SellerDashboardPage() {
  const stats = [
    { title: 'Total Sales', value: '₹ 45,200', change: '+12.5%', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'New Orders', value: '14', change: '+2', icon: ShoppingCart, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { title: 'Active Products', value: '128', change: '+5', icon: Package, color: 'text-amber-600', bg: 'bg-amber-100' },
    { title: 'Conversion Rate', value: '3.2%', change: '+0.4%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-0 shadow-sm transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded">{stat.change}</span>
                <span className="text-slate-400 ml-2">vs last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card className="min-h-[300px]">
           <CardContent className="p-6 flex flex-col items-center justify-center h-full text-slate-400">
             Sales Chart Placeholder
           </CardContent>
         </Card>
         <Card className="min-h-[300px]">
           <CardContent className="p-6">
             <h3 className="font-bold text-slate-900 mb-4">Recent Orders</h3>
             <div className="space-y-4">
                {[1,2,3,4].map(i => (
                   <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                         <p className="font-medium text-blue-600">#ORD-902{i}</p>
                         <p className="text-xs text-slate-500">2 items • ₹{(i * 450).toFixed(2)}</p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-amber-100 text-amber-700 rounded-full font-medium">Pending</span>
                   </div>
                ))}
             </div>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
