import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { CheckCircle2, User } from 'lucide-react';

export function CustomerRegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-center animate-in fade-in duration-500 p-8">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Registration Submitted</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          Your customer account registration has been received and is pending admin approval. You will receive an approval message with your ID and password through WhatsApp once approved.
        </p>
        <div className="flex gap-4 justify-center">
            <button onClick={() => window.location.href = '/'} className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium">
            Go to Admin Dashboard
            </button>
            <button onClick={() => setIsSubmitted(false)} className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium">
            Register Another User
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 py-8 px-4 sm:px-0">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Customer Registration Form</h1>
        <p className="text-slate-500 mt-1">Create a new customer account to start shopping.</p>
      </div>

      <Card className="shadow-lg border-slate-200/60 font-sans">
        <CardContent className="p-0">
           <form className="divide-y divide-slate-100 uppercase-labels" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
              {/* Personal Information */}
              <div className="p-6 md:p-8 space-y-6">
                 <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Information
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                       <input required type="text" placeholder="John Doe" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mobile Number <span className="text-red-500">*</span></label>
                       <input required type="tel" placeholder="+91 9000000000" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password <span className="text-red-500">*</span></label>
                       <input required type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Confirm Password <span className="text-red-500">*</span></label>
                       <input required type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                 </div>
              </div>

              {/* Delivery Address */}
              <div className="p-6 md:p-8 space-y-6">
                 <h3 className="text-lg font-bold text-slate-900">Delivery Address</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">House / Flat Number <span className="text-red-500">*</span></label>
                       <input required type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Street / Area <span className="text-red-500">*</span></label>
                       <input required type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Landmark</label>
                       <input type="text" placeholder="Near XYZ Hospital" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">City <span className="text-red-500">*</span></label>
                       <input required type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">State <span className="text-red-500">*</span></label>
                       <input required type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">PIN Code <span className="text-red-500">*</span></label>
                       <input required type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                    </div>
                 </div>
              </div>

              {/* Optional Information */}
              <div className="p-6 md:p-8 space-y-6">
                 <h3 className="text-lg font-bold text-slate-900">Optional Information</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Date of Birth</label>
                       <input type="date" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-600" />
                    </div>
                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-1.5">Gender</label>
                       <div className="flex items-center gap-6 mt-3">
                          <label className="flex items-center gap-2 cursor-pointer">
                             <input type="radio" name="gender" className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500" />
                             <span className="text-sm font-medium text-slate-600">Male</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                             <input type="radio" name="gender" className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500" />
                             <span className="text-sm font-medium text-slate-600">Female</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                             <input type="radio" name="gender" className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500" />
                             <span className="text-sm font-medium text-slate-600">Other</span>
                          </label>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Preferences */}
              <div className="p-6 md:p-8 space-y-4">
                 <h3 className="text-lg font-bold text-slate-900 mb-4">Preferences</h3>
                 {[
                    'Receive Offers & Promotions',
                    'Receive Email Notifications',
                    'Receive SMS Updates'
                 ].map((pref, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer">
                       <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                       <span className="text-sm font-medium text-slate-700">{pref}</span>
                    </label>
                 ))}
              </div>

              {/* Terms */}
              <div className="p-6 md:p-8 space-y-4 bg-slate-50/50">
                 {[
                    'I agree to the Terms & Conditions',
                    'I agree to the Privacy Policy'
                 ].map((term, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer">
                       <input required type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                       <span className="text-sm font-medium text-slate-700">{term} <span className="text-red-500">*</span></span>
                    </label>
                 ))}
                 
                 <div className="pt-6 mt-4">
                    <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm mb-4 transition-colors">
                       Register
                    </button>
                    <p className="text-center text-sm font-medium text-slate-500">
                       Already have an account? <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Login</a>
                    </p>
                 </div>
              </div>
           </form>
        </CardContent>
      </Card>
    </div>
  );
}
