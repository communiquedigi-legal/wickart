import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { MapPin, Truck, Navigation, CheckCircle2, Clock, Search, Bike, User } from 'lucide-react';

export function DispatchManagementPage() {
  const [activeTab, setActiveTab] = useState('unassigned');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dispatch & Fleet Management</h1>
          <p className="text-slate-500 mt-1">Assign orders to delivery partners, optimize routes, and track live locations.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-sm px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200 mt-1 sm:mt-0 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            14 Active Delivery Boys
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Orders List */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b border-slate-100 pb-4">
              <div className="flex gap-4">
                <button className={`text-sm font-medium pb-2 border-b-2 ${activeTab === 'unassigned' ? 'text-blue-600 border-blue-600' : 'text-slate-500 border-transparent'}`} onClick={() => setActiveTab('unassigned')}>Unassigned (4)</button>
                <button className={`text-sm font-medium pb-2 border-b-2 ${activeTab === 'active' ? 'text-blue-600 border-blue-600' : 'text-slate-500 border-transparent'}`} onClick={() => setActiveTab('active')}>In Transit (12)</button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {activeTab === 'unassigned' && [1, 2, 3, 4].map(item => (
                <div key={item} className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm hover:border-blue-300 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">#ORD-982{item}</span>
                      <p className="text-sm font-semibold text-slate-900 mt-2">City Square Mart</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
                      <Clock className="w-3 h-3" /> 14m ago
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-4">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="line-clamp-2">123, Sunrise Apartments, Sector 4, MG Road, CA</p>
                  </div>
                  <button className="w-full py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors flex justify-center items-center gap-2 group-hover:bg-blue-600">
                    <Bike className="w-4 h-4" />
                    Assign Delivery Partner
                  </button>
                </div>
              ))}

              {activeTab === 'active' && (
                <div className="text-center p-8 text-slate-500 text-sm">
                  Switching tabs will show active orders currently in transit.
                </div>
              )}

            </CardContent>
          </Card>
        </div>

        {/* Right Column: Fleet View / Map Placeholder */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col overflow-hidden relative">
            <CardHeader className="bg-white/80 backdrop-blur-md border-b border-slate-100 pb-4 absolute top-0 left-0 right-0 z-10 w-full shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle>Live Fleet Tracking</CardTitle>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search delivery boys..."
                    className="pl-9 pr-4 py-1.5 w-48 sm:w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 h-full w-full bg-slate-100 flex items-center justify-center relative">
              {/* Map Placeholder Graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMCAwIDAgMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=)' }}></div>
              <div className="text-center z-10 space-y-4">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center border-4 border-blue-50">
                  <Navigation className="w-10 h-10 text-blue-600" />
                </div>
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-sm border border-slate-200 max-w-sm">
                  <h3 className="font-bold text-slate-900 mb-1">Live Map Integration</h3>
                  <p className="text-sm text-slate-500 mb-4">Integrate Google Maps or Mapbox API to view active agents and calculate optimal routes dynamically.</p>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                    Configure Maps API
                  </button>
                </div>
              </div>

              {/* Fake Map Markers */}
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-600 rounded-full shadow-lg flex items-center justify-center border-2 border-white animate-bounce">
                <Bike className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-2/3 right-1/3 w-8 h-8 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                <Bike className="w-4 h-4 text-white" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
