import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { PagePlaceholder } from './pages/PagePlaceholder';
import { SettingsPage } from './pages/SettingsPage';
import { AddProductPage } from './pages/AddProductPage';
import { BrandsPage } from './pages/BrandsPage';
import { VariantsPage } from './pages/VariantsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { SubCategoriesPage } from './pages/SubCategoriesPage';
import { AttributesPage } from './pages/AttributesPage';
import { OrdersPage } from './pages/OrdersPage';
import { DispatchManagementPage } from './pages/DispatchManagementPage';

import { AddSellerPage } from './pages/AddSellerPage';

import { ViewCustomersPage } from './pages/ViewCustomersPage';
import { CustomerAddressesPage } from './pages/CustomerAddressesPage';
import { CustomerTransactionsPage } from './pages/CustomerTransactionsPage';
import { WalletTransactionsPage } from './pages/WalletTransactionsPage';

import { ManageReturnRequestsPage } from './pages/ManageReturnRequestsPage';
import { ReturnReasonsPage } from './pages/ReturnReasonsPage';
import { ReferralsPage } from './pages/ReferralsPage';
import { CommissionReportPage } from './pages/CommissionReportPage';
import { WithdrawalsPage } from './pages/WithdrawalsPage';

import { VendorRegistrationPage } from './pages/vendor/VendorRegistrationPage';
import { VendorLoginPage } from './pages/vendor/VendorLoginPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { SellerPanel } from './pages/vendor/SellerPanel';
import { CustomerRegistrationPage } from './pages/CustomerRegistrationPage';
import { AllSellersPage } from './pages/AllSellersPage';
import { VendorInventoryPage } from './pages/VendorInventoryPage';
import { TaxSettingsPage } from './pages/TaxSettingsPage';

import { AnalyticsPage } from './pages/AnalyticsPage';
import { SupportPage } from './pages/SupportPage';

import { CampaignsPage } from './pages/CampaignsPage';
import { CouponsPage } from './pages/CouponsPage';
import { AssignedOrdersPage } from './pages/AssignedOrdersPage';
import { LiveTrackingPage } from './pages/LiveTrackingPage';
import { EarningsPage } from './pages/EarningsPage';
import { ZonesPage } from './pages/ZonesPage';
import { AllStoresPage } from './pages/AllStoresPage';
import { AddStorePage } from './pages/AddStorePage';

import { StorefrontApp } from './pages/storefront/StorefrontApp';

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => sessionStorage.getItem('adminAuth') === 'true');
  const [companyName, setCompanyName] = useState('Wickart');

  useEffect(() => {
    const handleSettingsUpdate = () => {
      const name = localStorage.getItem('companyName');
      if (name) setCompanyName(name);
    };
    handleSettingsUpdate();
    window.addEventListener('settingsUpdated', handleSettingsUpdate);
    return () => window.removeEventListener('settingsUpdated', handleSettingsUpdate);
  }, []);

  const LogoText = () => (
    <div className="font-bold text-xl tracking-tight text-slate-900 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
      <span className="text-blue-600 mr-1">{companyName.substring(0, Math.ceil(companyName.length / 2))}</span>
      <span>{companyName.substring(Math.ceil(companyName.length / 2))}</span>
    </div>
  );

  const path = window.location.pathname;
  if (path === '/seller') {
     return <SellerPanel />;
  }
  if (path === '/vendor-registration') {
     return (
       <div className="min-h-screen bg-slate-50">
         <div className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
           <LogoText />
           <button onClick={() => window.location.href = '/'} className="text-sm font-medium text-slate-500 hover:text-slate-900">Back to Store</button>
         </div>
         <VendorRegistrationPage />
       </div>
     );
  }

  if (path === '/vendor-login') {
     return (
       <div className="min-h-screen bg-slate-50">
         <div className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
           <LogoText />
           <button onClick={() => window.location.href = '/'} className="text-sm font-medium text-slate-500 hover:text-slate-900">Back to Store</button>
         </div>
         <VendorLoginPage />
       </div>
     );
  }

  if (path === '/customer-registration') {
     return (
       <div className="min-h-screen bg-slate-50">
         <div className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
           <LogoText />
           <button onClick={() => window.location.href = '/'} className="text-sm font-medium text-slate-500 hover:text-slate-900">Back to Store</button>
         </div>
         <CustomerRegistrationPage />
       </div>
     );
  }

  if (path !== '/admin') {
     return <StorefrontApp />;
  }

  if (!isAdminAuthenticated) {
    return <AdminLoginPage onLogin={() => {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAdminAuthenticated(true);
    }} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto">
          {activePage === 'Dashboard' ? (
            <Dashboard />
          ) : activePage === 'Add Product' ? (
            <AddProductPage />
          ) : activePage === 'Brands' ? (
            <BrandsPage />
          ) : activePage === 'Variants' ? (
            <VariantsPage />
          ) : activePage === 'All Categories' ? (
            <CategoriesPage />
          ) : activePage === 'Sub Categories' ? (
            <SubCategoriesPage />
          ) : activePage === 'Attributes' ? (
            <AttributesPage />
          ) : activePage === 'Orders' ? (
            <OrdersPage />
          ) : activePage === 'Dispatch Management' ? (
            <DispatchManagementPage />
          ) : activePage === 'Add Seller' ? (
            <AddSellerPage />
          ) : activePage === 'Add Customer' ? (
            <CustomerRegistrationPage />
          ) : activePage === 'All Sellers' ? (
            <AllSellersPage />
          ) : activePage === 'Vendor Inventory' ? (
            <VendorInventoryPage />
          ) : activePage === 'View Customers' ? (
            <ViewCustomersPage />
          ) : activePage === 'Addresses' ? (
            <CustomerAddressesPage />
          ) : activePage === 'Transactions' ? (
            <CustomerTransactionsPage />
          ) : activePage === 'Wallet Transactions' ? (
            <WalletTransactionsPage />
          ) : activePage === 'Manage Return Requests' ? (
            <ManageReturnRequestsPage />
          ) : activePage === 'Reasons For return' ? (
            <ReturnReasonsPage />
          ) : activePage === 'Referral System' ? (
            <ReferralsPage />
          ) : activePage === 'Campaigns' ? (
            <CampaignsPage onNavigate={setActivePage} />
          ) : activePage === 'Coupons' ? (
            <CouponsPage onNavigate={setActivePage} />
          ) : activePage === 'Assigned Orders' ? (
            <AssignedOrdersPage />
          ) : activePage === 'Live Tracking' ? (
            <LiveTrackingPage />
          ) : activePage === 'Earnings' ? (
            <EarningsPage />
          ) : activePage === 'Zones' ? (
            <ZonesPage />
          ) : activePage === 'Analytics' ? (
            <AnalyticsPage />
          ) : activePage === 'Support' ? (
            <SupportPage />
          ) : activePage === 'Add New Campaign' ? (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200">
               <h2 className="text-xl font-bold text-slate-900 mb-2">Create New Campaign</h2>
               <p className="text-slate-500 mb-6">Set up your marketing parameters and launch new campaigns.</p>
               <button onClick={() => setActivePage('Campaigns')} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">Back to Campaigns</button>
            </div>
          ) : activePage === 'Add Coupon' ? (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200">
               <h2 className="text-xl font-bold text-slate-900 mb-2">Create New Coupon</h2>
               <p className="text-slate-500 mb-6">Configure discount codes and apply them to products.</p>
               <button onClick={() => setActivePage('Coupons')} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">Back to Coupons</button>
            </div>
          ) : activePage === 'All Stores' ? (
            <AllStoresPage />
          ) : activePage === 'Add Store' ? (
            <AddStorePage />
          ) : activePage === 'Commission Report' ? (
            <CommissionReportPage />
          ) : activePage === 'Withdrawals' ? (
            <WithdrawalsPage />
          ) : activePage === 'Tax Configurations' ? (
            <TaxSettingsPage />
          ) : activePage === 'General Settings' ? (
            <SettingsPage />
          ) : activePage === 'Vendor Registration Form' ? (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200">
               <h2 className="text-xl font-bold text-slate-900 mb-2">Public Vendor Registration Preview</h2>
               <p className="text-slate-500 mb-6">This form is usually accessed externally by vendors signing up.</p>
               <button onClick={() => window.open('/vendor-registration', '_blank')} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">Open Vendor Portal</button>
               
               <div className="mt-12 pt-12 border-t border-slate-100">
                 <h2 className="text-xl font-bold text-slate-900 mb-2">Public Customer Registration Preview</h2>
                 <p className="text-slate-500 mb-6">This form is usually accessed externally by customers signing up.</p>
                 <button onClick={() => window.open('/customer-registration', '_blank')} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium">Open Customer Portal</button>
               </div>
            </div>
          ) : (
            <PagePlaceholder pageName={activePage} />
          )}
        </main>
      </div>
    </div>
  );
}


