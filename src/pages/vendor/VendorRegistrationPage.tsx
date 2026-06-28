import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Check, ChevronRight, ChevronLeft, UploadCloud, FileText, CheckCircle2 } from 'lucide-react';

const STEPS = [
  'Account Creation', 'Business Info', 'Store Info', 'Address', 'KYC',
  'Bank Details', 'Tax Settings', 'Delivery', 'Commission Plan', 'Operations',
  'Payments', 'Social Links', 'Documents', 'Terms & Submit'
];

export function VendorRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-center animate-in fade-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Registration Submitted</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          Your vendor application has been received. Our team will review your KYC and documents. You will receive an approval message with your ID and password through WhatsApp once approved.
        </p>
        <button onClick={() => window.location.href = '/'} className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium">
          Return to Storefront
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 py-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Become a Seller</h1>
        <p className="text-slate-500 mt-1">Complete the 14-step registration process to start selling.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {STEPS.map((step, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
              idx === currentStep ? 'bg-blue-600 text-white' : 
              idx < currentStep ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
            }`}>
              {idx < currentStep ? <Check className="w-3 h-3" /> : idx + 1}
            </div>
            {/* <span className="text-xs ml-1.5 hidden sm:inline-block truncate max-w-[80px]">{step}</span> */}
            {idx < STEPS.length - 1 && <div className={`w-4 h-0.5 mx-1 ${idx < currentStep ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
          </div>
        ))}
      </div>

      <Card className="min-h-[500px] flex flex-col shadow-lg border-slate-200/60">
        <CardHeader className="bg-slate-50/50 border-b border-slate-100">
          <CardTitle className="text-lg text-blue-900">
            Step {currentStep + 1}: {STEPS[currentStep]}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          {currentStep === 0 && (
             <div className="space-y-4 max-w-2xl">
               <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex items-start gap-3 mb-4">
                 <div className="p-2 bg-emerald-100 rounded-full text-emerald-600 mt-0.5">
                   <CheckCircle2 className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-emerald-800">Have a Referral Code?</h4>
                   <p className="text-sm font-medium text-emerald-700 mt-1">Sign up using an existing vendor's referral code to instantly get ₹200 credited to your vendor wallet upon approval!</p>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div><label className="text-sm font-medium mb-1 block">Full Name *</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                 <div><label className="text-sm font-medium mb-1 block">Business Owner Name *</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                 <div><label className="text-sm font-medium mb-1 block">Mobile Number *</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                 <div><label className="text-sm font-medium mb-1 block">Email Address *</label><input type="email" className="w-full px-3 py-2 border rounded-lg" /></div>
                 <div><label className="text-sm font-medium mb-1 block">Password *</label><input type="password" className="w-full px-3 py-2 border rounded-lg" /></div>
                 <div><label className="text-sm font-medium mb-1 block">Confirm Password *</label><input type="password" className="w-full px-3 py-2 border rounded-lg" /></div>
                 <div className="col-span-2"><label className="text-sm font-medium mb-1 block">Referral Code (Optional)</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
               </div>
             </div>
          )}

          {currentStep === 1 && (
             <div className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                   <div className="col-span-2"><label className="text-sm font-medium mb-1 block">Legal Business Name</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                   <div><label className="text-sm font-medium mb-1 block">Business Type</label>
                      <select className="w-full px-3 py-2 border rounded-lg bg-white">
                        <option>Individual Seller</option>
                        <option>Proprietorship</option>
                        <option>Partnership</option>
                        <option>Private Limited</option>
                      </select>
                   </div>
                   <div><label className="text-sm font-medium mb-1 block">Business Category</label><select className="w-full px-3 py-2 border rounded-lg bg-white"><option>Electronics</option><option>Grocery</option></select></div>
                   <div className="col-span-2"><label className="text-sm font-medium mb-1 block">Business Description</label><textarea rows={3} className="w-full px-3 py-2 border rounded-lg"></textarea></div>
                   <div><label className="text-sm font-medium mb-1 block">Years in Business</label><input type="number" className="w-full px-3 py-2 border rounded-lg" /></div>
                   <div><label className="text-sm font-medium mb-1 block">No. of Employees</label><input type="number" className="w-full px-3 py-2 border rounded-lg" /></div>
                </div>
             </div>
          )}

          {currentStep === 2 && (
             <div className="space-y-4 max-w-2xl">
                <div><label className="text-sm font-medium mb-1 block">Store Name</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="border border-dashed p-4 rounded-lg flex flex-col items-center"><UploadCloud className="w-6 h-6 text-slate-400 mb-2"/><span className="text-xs font-medium">Store Logo</span></div>
                    <div className="border border-dashed p-4 rounded-lg flex flex-col items-center"><UploadCloud className="w-6 h-6 text-slate-400 mb-2"/><span className="text-xs font-medium">Store Banner</span></div>
                </div>
                <div><label className="text-sm font-medium mb-1 block">Store Timings</label>
                   <select className="w-full px-3 py-2 border rounded-lg bg-white mb-2">
                      <option>Fixed Timings (e.g. 9 AM - 6 PM)</option>
                      <option>Open 24 Hours</option>
                   </select>
                </div>
             </div>
          )}

          {currentStep === 3 && (
             <div className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2"><label className="text-sm font-medium mb-1 block">Address Line 1</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div className="col-span-2"><label className="text-sm font-medium mb-1 block">Address Line 2 (Optional)</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div><label className="text-sm font-medium mb-1 block">City</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Postal Code</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div className="col-span-2 bg-slate-100 h-32 rounded-lg flex items-center justify-center border text-slate-500">Google Maps Integration (Pick Location)</div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Delivery Radius</label>
                    <select className="w-full px-3 py-2 border rounded-lg bg-white"><option>1 KM</option><option>5 KM</option><option>10 KM</option><option>Custom</option></select>
                  </div>
                </div>
             </div>
          )}

          {currentStep === 4 && (
             <div className="space-y-6 max-w-2xl">
                <div>
                   <h3 className="font-semibold text-slate-800 border-b pb-2 mb-3">Personal KYC</h3>
                   <div className="grid grid-cols-2 gap-4">
                      <div><label className="text-sm font-medium mb-1 block">Aadhaar Number</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                      <div><label className="text-sm font-medium mb-1 block">PAN Number</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                   </div>
                </div>
                <div>
                   <h3 className="font-semibold text-slate-800 border-b pb-2 mb-3">Business KYC</h3>
                   <div className="grid grid-cols-2 gap-4">
                      <div><label className="text-sm font-medium mb-1 block">GST Number</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                      <div><label className="text-sm font-medium mb-1 block">FSSAI Registration</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                   </div>
                </div>
             </div>
          )}

          {currentStep === 5 && (
             <div className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2"><label className="text-sm font-medium mb-1 block">Account Holder Name</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Bank Name</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Branch Name</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div><label className="text-sm font-medium mb-1 block">Account Number</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div><label className="text-sm font-medium mb-1 block">IFSC Code</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div className="col-span-2"><label className="text-sm font-medium mb-1 block">UPI ID (Optional)</label><input type="text" className="w-full px-3 py-2 border rounded-lg" /></div>
                </div>
             </div>
          )}

          {currentStep === 8 && (
             <div className="grid grid-cols-2 gap-4 max-w-3xl">
                {[
                  { name: 'Basic Plan', val: '5% Comm | 10 Products' },
                  { name: 'Standard Plan', val: '3% Comm | 100 Products' },
                  { name: 'Premium Plan', val: '1% Comm | Unlimited' },
                  { name: 'Enterprise', val: 'Custom Commission' }
                ].map(plan => (
                  <div key={plan.name} className="border-2 border-slate-200 rounded-xl p-4 cursor-pointer hover:border-blue-500 transition-colors group">
                     <div className="w-4 h-4 rounded-full border-2 group-hover:border-blue-500 mb-2"></div>
                     <h3 className="font-bold text-slate-900">{plan.name}</h3>
                     <p className="text-sm text-slate-500">{plan.val}</p>
                  </div>
                ))}
             </div>
          )}

          {currentStep === 12 && (
             <div className="space-y-4 max-w-2xl">
               <p className="text-sm text-slate-500 mb-4">Please upload scanned copies (PNG, JPG, PDF - Max 10MB)</p>
               <div className="grid grid-cols-2 gap-4">
                  {['Aadhaar Front', 'Aadhaar Back', 'PAN Card', 'GST Certificate', 'Cancelled Cheque'].map(doc => (
                    <div key={doc} className="border rounded-lg p-3 flex justify-between items-center bg-slate-50">
                       <div className="flex items-center gap-2 font-medium text-sm text-slate-700">
                          <FileText className="w-4 h-4 text-blue-500" /> {doc}
                       </div>
                       <button className="text-xs bg-white border px-2 py-1 rounded">Upload</button>
                    </div>
                  ))}
               </div>
             </div>
          )}

          {currentStep === 13 && (
             <div className="space-y-4 max-w-2xl">
                <h3 className="font-bold text-slate-900">Terms & Declaration</h3>
                <div className="space-y-3 mt-4">
                   {['I confirm all information is accurate.', 'I agree to platform commission rules.', 'I agree to marketplace terms & conditions.', 'I authorize KYC verification.'].map((term, i) => (
                     <label key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded border">
                        <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                        <span className="text-sm text-slate-700 font-medium">{term}</span>
                     </label>
                   ))}
                </div>
                <div className="mt-8 border-t pt-6">
                   <label className="text-sm font-medium mb-1 block">Digital Signature (Type your full name)</label>
                   <input type="text" className="w-full px-3 py-2 border rounded-lg bg-slate-50" />
                </div>
             </div>
          )}

          {/* Placeholders for steps I didn't fully expand to save lines but keep flow */}
          {[6,7,9,10,11].includes(currentStep) && (
             <div className="flex items-center justify-center h-full text-slate-400">
                Configure {STEPS[currentStep]} forms here...
             </div>
          )}

        </CardContent>
        <div className="border-t border-slate-100 p-4 bg-slate-50/50 flex justify-between items-center rounded-b-xl">
           <button 
             onClick={prevStep}
             disabled={currentStep === 0}
             className="px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 font-medium disabled:opacity-50 flex items-center gap-1"
           >
             <ChevronLeft className="w-4 h-4" /> Back
           </button>
           {currentStep === STEPS.length - 1 ? (
             <button 
               onClick={() => setIsSubmitted(true)}
               className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow flex items-center gap-1"
             >
               Submit Registration <Check className="w-4 h-4" />
             </button>
           ) : (
             <button 
               onClick={nextStep}
               className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow flex items-center gap-1"
             >
               Continue <ChevronRight className="w-4 h-4" />
             </button>
           )}
        </div>
      </Card>
    </div>
  );
}
