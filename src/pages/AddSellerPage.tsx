import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Save, UploadCloud } from 'lucide-react';

export function AddSellerPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sticky top-16 z-10 bg-slate-50/90 backdrop-blur-md py-4 border-b border-slate-200/60 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
            <span>Home</span>
            <span>/</span>
            <span>Sellers</span>
            <span>/</span>
            <span className="text-slate-900 font-medium">Register Seller</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Register New Seller</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            Cancel
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Register Seller
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Seller Information */}
          <Card>
            <CardHeader>
              <CardTitle>Seller Information</CardTitle>
              <CardDescription>Basic personal and login details for the seller.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Seller Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Seller Name" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mobile <span className="text-red-500">*</span></label>
                  <input type="tel" placeholder="Enter Mobile" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="Seller Email" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password <span className="text-red-500">*</span></label>
                  <input type="password" placeholder="Seller Password" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password <span className="text-red-500">*</span></label>
                  <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Address <span className="text-red-500">*</span></label>
                  <textarea rows={3} placeholder="Full address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Authorized Signature</label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 hover:border-blue-400 p-4 transition-colors text-center cursor-pointer">
                      <UploadCloud className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                      <p className="text-sm font-medium text-slate-700">Choose file</p>
                    </div>
                    <p className="text-xs text-slate-500 flex-1">*Only Choose When Update is necessary.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Store Details */}
          <Card>
            <CardHeader>
              <CardTitle>Store Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Store Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Store Name" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Store URL</label>
                <input type="url" placeholder="https://example.com" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea rows={3} placeholder="Store Description" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Store Logo</label>
                <div className="flex items-center gap-4">
                  <div className="flex-1 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 p-4 text-center cursor-pointer">
                    <p className="text-sm font-medium text-slate-700">Choose file</p>
                  </div>
                  <p className="text-xs text-slate-500 flex-1">*Only Choose When Update is necessary.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commission & Delivery Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Commission & Delivery Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Global Commission (%)</label>
                <input type="number" placeholder="Enter Commission(%)" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                <p className="text-xs text-slate-500 mt-1">Commission(%) to be given to the Super Admin on order item globally.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <label className="block text-sm font-medium text-slate-700 mb-1">Choose Categories & Commission(%)</label>
                <p className="text-xs text-slate-500 mb-3">If you do not set the commission beside a category, it will get the global commission. Otherwise, the particular category commission will be considered.</p>
                
                <div className="space-y-2">
                  {/* Example Category Commission Row */}
                  <div className="flex items-center gap-3">
                    <label className="flex-1 flex items-center gap-2 text-sm text-slate-700">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      Electronics
                    </label>
                    <input type="number" placeholder="%" className="w-24 px-3 py-1 bg-white border border-slate-200 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="flex-1 flex items-center gap-2 text-sm text-slate-700">
                      <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                      Clothing
                    </label>
                    <input type="number" placeholder="%" className="w-24 px-3 py-1 bg-white border border-slate-200 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Deliverable Zipcode Type</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option value="all">All</option>
                  <option value="included">Included Zipcodes Only</option>
                  <option value="excluded">Excluded Zipcodes Only</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          
          {/* KYC & Subscription (Approve/Manage) */}
          <Card className="border-blue-100 shadow-sm shadow-blue-50">
            <CardHeader className="bg-blue-50/50 border-b border-blue-100 pb-4">
              <CardTitle className="text-blue-900">Verification & Plans</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">KYC Status</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Active Subscription Plan</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option value="none">None (Free/Basic)</option>
                  <option value="premium">Premium Seller</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Other Details */}
          <Card>
            <CardHeader>
              <CardTitle>Other Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tax Name</label>
                <input type="text" placeholder="Tax Name (e.g. GST)" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tax Number</label>
                <input type="text" placeholder="Tax Number" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Latitude</label>
                  <input type="text" placeholder="e.g. 28.7041" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Longitude</label>
                  <input type="text" placeholder="e.g. 77.1025" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Low Stock Limit</label>
                <input type="number" placeholder="Product low stock limit" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                <p className="text-xs text-slate-500 mt-1">Default limit if product-wise stock limit is not set.</p>
              </div>
            </CardContent>
          </Card>

          {/* Permissions */}
          <Card>
            <CardHeader>
              <CardTitle>Permissions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" defaultChecked />
                <span className="text-sm font-medium text-slate-700">Require Product's Approval?</span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
                <span className="text-sm font-medium text-slate-700">View Customer's Details?</span>
              </label>
            </CardContent>
          </Card>

          {/* SEO Configuration */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" placeholder="SEO page title" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">SEO Meta Keywords</label>
                <input type="text" placeholder="Enter keywords (comma-separated)" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">SEO Meta Description</label>
                <textarea rows={3} placeholder="Enter a short SEO meta description" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">SEO Open Graph Image</label>
                <div className="flex items-center gap-4">
                  <div className="flex-1 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 p-4 text-center cursor-pointer">
                    <p className="text-sm font-medium text-slate-700">Choose file</p>
                  </div>
                  <p className="text-[10px] text-slate-500 flex-1 leading-tight">*Only Choose When Update is necessary.</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
