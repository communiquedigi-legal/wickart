import React from 'react';
import { PieChart, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
        <p className="text-slate-500 mt-1">Platform performance and statistics overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Revenue</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">₹ 2,45,000</h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Orders</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">1,245</h3>
              </div>
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Customers</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">8,432</h3>
              </div>
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">Traffic</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">45.2K</h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <PieChart className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Over Time</CardTitle>
        </CardHeader>
        <CardContent className="h-64 flex items-center justify-center bg-slate-50 rounded-b-xl border-t border-slate-100 text-slate-500">
          Chart placeholder (Use a charting library for actual charts)
        </CardContent>
      </Card>
    </div>
  );
}
