import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Save, UploadCloud, Building2, Scale, Image as ImageIcon } from 'lucide-react';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [companyName, setCompanyName] = useState('Hyperlocal Marketplace');
  
  useEffect(() => {
    const savedName = localStorage.getItem('companyName');
    if (savedName) setCompanyName(savedName);
  }, []);

  const handleSave = () => {
    localStorage.setItem('companyName', companyName);
    window.dispatchEvent(new Event('settingsUpdated'));
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Platform Settings</h1>
          <p className="text-slate-500 mt-1">Manage global app configurations, policies, and platform identity.</p>
        </div>
        <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings Navigation */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'general'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4" />
              General Details
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'media'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Media & Assets
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === 'policies'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Scale className="w-4 h-4" />
              Legal & Policies
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1 space-y-6 min-w-0">
          
          {activeTab === 'general' && (
            <>
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Primary contact details for support and users.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Support Email</label>
                      <input
                        type="email"
                        defaultValue="support@hyperlocal.app"
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                      <input
                        type="tel"
                        defaultValue="+91 9876543210"
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-1">Registered Header Address</label>
                      <textarea
                        rows={3}
                        defaultValue={"123, Silicon Valley Tech Park,\nSector 4, Bangalore, India - 560001"}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {activeTab === 'media' && (
            <div className="space-y-6">
              {/* Branding */}
              <Card>
                <CardHeader>
                  <CardTitle>Platform Branding</CardTitle>
                  <CardDescription>Upload your platform logo and site identity.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="w-32 h-32 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-100 hover:border-blue-400 transition-colors cursor-pointer group">
                      <UploadCloud className="w-8 h-8 mb-2 group-hover:text-blue-500 transition-colors" />
                      <span className="text-xs font-medium">Upload Logo</span>
                    </div>
                    <div className="space-y-3 flex-1">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <p className="text-xs text-slate-500">
                        This logo will be displayed on the app, website, and all transactional emails. Recommended size: 512x512px.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Website Sliders */}
              <Card>
                <CardHeader>
                  <CardTitle>Website Sliders</CardTitle>
                  <CardDescription>Upload 5 to 6 promotion banners for the storefront homepage.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                      <div key={idx} className="aspect-video rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-100 hover:border-blue-400 transition-colors cursor-pointer group p-2 text-center">
                        <UploadCloud className="w-6 h-6 mb-2 group-hover:text-blue-500 transition-colors" />
                        <span className="text-[10px] font-medium leading-tight">Upload Slider {idx}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Recommended resolution: 1920x1080px (16:9 ratio). These will cycle automatically on the customer homepage.
                  </p>
                </CardContent>
              </Card>

              {/* About Us Photo */}
              <Card>
                <CardHeader>
                  <CardTitle>About Us Page Photo</CardTitle>
                  <CardDescription>Featured image for the "About Us" section of your storefront.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="w-48 h-32 shrink-0 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-100 hover:border-blue-400 transition-colors cursor-pointer group">
                      <ImageIcon className="w-8 h-8 mb-2 group-hover:text-blue-500 transition-colors" />
                      <span className="text-xs font-medium">Upload Photo</span>
                    </div>
                    <div className="space-y-3 flex-1">
                      <p className="text-sm text-slate-700 font-medium">
                        Upload a high-quality team photo, store picture, or brand imagery.
                      </p>
                      <p className="text-xs text-slate-500">
                        This image will be highlighted prominently on the About Us page. Recommended size: 1200x800px.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'policies' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Terms & Conditions</CardTitle>
                  <CardDescription>Define the rules and guidelines users must agree to.</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    rows={6}
                    placeholder="Enter your Terms and Conditions here..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <div className="mt-2 text-xs text-slate-500 flex justify-end">Markdown format supported</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy Policy</CardTitle>
                  <CardDescription>Detail how you collect, use, and protect user data.</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    rows={6}
                    placeholder="Enter your Privacy Policy here..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cancellation & Refund Policy</CardTitle>
                  <CardDescription>Guidelines for order cancellations and user refunds.</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    rows={4}
                    placeholder="Enter your Cancellation and Refund Policy here..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Shipping Policy</CardTitle>
                  <CardDescription>Details regarding delivery timelines, constraints, and operational zones.</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    rows={4}
                    placeholder="Enter your Shipping and Delivery Policy here..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
