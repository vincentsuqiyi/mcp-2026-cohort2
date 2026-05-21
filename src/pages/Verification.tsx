import React from 'react';
import { Link } from 'react-router-dom';

const Verification = () => {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-hidden">
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-margin-desktop h-16 bg-surface border-b border-outline-variant z-40 fixed top-0 left-0">
        <div className="flex items-center gap-unit">
          <span className="text-headline-lg font-headline-lg font-bold text-primary">ClaimsPortal</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:bg-surface-container-high transition-colors p-2 rounded-full">
              <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
            </button>
          </div>
        </div>
      </header>
      <div className="flex h-screen pt-16">
        {/* SideNavBar */}
        <aside className="flex flex-col py-8 gap-4 bg-surface-container-low border-r border-outline-variant h-full w-64 hidden md:flex flex-shrink-0">
          <div className="px-6 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-headline-md text-headline-md font-extrabold text-on-surface">TrustAssure</span>
            </div>
            <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Policyholder Portal</p>
          </div>
          <nav className="flex-grow">
            <Link className="flex items-center gap-3 px-6 py-3 text-on-surface-variant pl-1 hover:bg-surface-container-highest transition-all" to="/new-claim">
              <span className="material-symbols-outlined" data-icon="add_box">add_box</span>
              <span className="font-label-md text-label-md">New Claim</span>
            </Link>
            <Link className="flex items-center gap-3 px-6 py-3 text-primary font-bold border-l-4 border-secondary bg-surface-container-highest transition-all" to="/claims">
              <span className="material-symbols-outlined" data-icon="list_alt">list_alt</span>
              <span className="font-label-md text-label-md">My Claims</span>
            </Link>
            <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant pl-1 hover:bg-surface-container-highest transition-all" href="#">
              <span className="material-symbols-outlined" data-icon="description">description</span>
              <span className="font-label-md text-label-md">Documents</span>
            </a>
            <a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant pl-1 hover:bg-surface-container-highest transition-all" href="#">
              <span className="material-symbols-outlined" data-icon="settings">settings</span>
              <span className="font-label-md text-label-md">Settings</span>
            </a>
          </nav>
          <div className="mt-auto px-6 space-y-4">
            <button className="w-full bg-secondary text-on-secondary font-label-md py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[20px]" data-icon="emergency_share">emergency_share</span>
              Emergency Support
            </button>
            <a className="flex items-center gap-3 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined" data-icon="help">help</span>
              <span className="font-label-md text-label-md">Help Center</span>
            </a>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-grow overflow-y-auto custom-scrollbar bg-background">
          <div className="max-w-[1200px] mx-auto p-margin-desktop space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <span className="material-symbols-outlined text-[20px]" data-icon="auto_awesome">auto_awesome</span>
                  <span className="font-label-md text-label-md uppercase tracking-wider">AI Extraction Complete</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-background">Verify Claim Details</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
                  Our AI has extracted the following information from your uploaded receipt. Please review and correct any anomalies before final submission.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-6 py-2 border border-outline text-on-surface font-label-md rounded-lg hover:bg-surface-container transition-colors">Save Draft</button>
                <button className="px-8 py-2 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-md">Submit Claim</button>
              </div>
            </div>
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              {/* Left: Receipt Preview */}
              <div className="lg:col-span-5 bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col shadow-sm">
                <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                  <span className="font-label-md text-label-md text-on-surface">Source Document</span>
                  <div className="flex gap-2">
                    <button className="p-1.5 hover:bg-surface-container rounded"><span className="material-symbols-outlined text-[18px]" data-icon="zoom_in">zoom_in</span></button>
                    <button className="p-1.5 hover:bg-surface-container rounded"><span className="material-symbols-outlined text-[18px]" data-icon="download">download</span></button>
                  </div>
                </div>
                <div className="flex-grow p-6 bg-slate-50 flex items-center justify-center min-h-[500px]">
                  <div className="w-full max-w-sm aspect-[3/4] bg-white shadow-xl rounded-sm p-8 border border-slate-200 relative overflow-hidden">
                    {/* Mock Receipt Content */}
                    <div className="text-center mb-8">
                      <div className="h-8 w-8 bg-slate-800 rounded-full mx-auto mb-2"></div>
                      <p className="font-bold text-slate-900">GLOBAL LOGISTICS INC.</p>
                      <p className="text-[10px] text-slate-500">123 Industrial Way, Port Haven</p>
                    </div>
                    <div className="space-y-4 text-xs text-slate-700">
                      <div className="flex justify-between border-b pb-1">
                        <span>Invoice No:</span>
                        <span className="font-mono">#INV-99201-B</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Date:</span>
                        <span>Oct 14, 2023</span>
                      </div>
                      <div className="pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Freight Services (Express)</span>
                          <span>$1,120.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Surcharge</span>
                          <span>$125.50</span>
                        </div>
                      </div>
                      <div className="pt-8 border-t-2 border-dashed border-slate-300">
                        <div className="flex justify-between font-bold text-base text-slate-900">
                          <span>TOTAL</span>
                          <span>$1,245.50</span>
                        </div>
                      </div>
                    </div>
                    {/* UI Overlays for Extraction visualization */}
                    <div className="absolute top-[162px] left-[70px] w-32 h-6 border-2 border-secondary/40 bg-secondary/10 rounded-sm" title="Extracted Date"></div>
                    <div className="absolute bottom-[48px] right-[28px] w-24 h-8 border-2 border-secondary/40 bg-secondary/10 rounded-sm" title="Extracted Total"></div>
                  </div>
                </div>
              </div>
              {/* Right: Verification Form & Anomalies */}
              <div className="lg:col-span-7 space-y-gutter">
                {/* Extraction Status Card */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-secondary-container rounded-full">
                      <span className="material-symbols-outlined text-on-secondary-container" data-icon="fact_check">fact_check</span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md">Verification Checklist</h3>
                      <p className="text-on-surface-variant text-body-sm">We've identified 2 items requiring your attention.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-label-md text-label-md text-on-surface-variant">Vendor Name</label>
                        <div className="relative">
                          <input className="w-full bg-white border border-outline p-3 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" type="text" value="Global Logistics Inc."/>
                          <span className="absolute right-3 top-3 text-secondary material-symbols-outlined text-[20px]" data-icon="verified" data-weight="fill">verified</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-md text-label-md text-on-surface-variant">Claim Date</label>
                        <div className="relative">
                          <input className="w-full bg-white border border-outline p-3 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" type="text" value="10/14/2023"/>
                          <span className="absolute right-3 top-3 text-secondary material-symbols-outlined text-[20px]" data-icon="verified" data-weight="fill">verified</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-md text-label-md text-on-surface-variant">Amount (USD)</label>
                        <div className="relative">
                          <input className="w-full bg-white border border-error p-3 rounded-lg focus:ring-1 focus:ring-error transition-all outline-none" type="text" value="1,245.50"/>
                          <span className="absolute right-3 top-3 text-error material-symbols-outlined text-[20px]" data-icon="warning" data-weight="fill">warning</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-md text-label-md text-on-surface-variant">Category</label>
                        <select className="w-full bg-white border border-outline p-3 rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none appearance-none">
                          <option>Shipping &amp; Logistics</option>
                          <option>Travel</option>
                          <option>Office Supplies</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Anomalies & Guidance */}
                <div className="space-y-4">
                  {/* Flagged: Duplicate */}
                  <div className="bg-[#ba1a1a]/10 border border-error rounded-xl p-5 flex gap-4 animate-pulse-subtle">
                    <span className="material-symbols-outlined text-error font-bold" data-icon="content_copy">content_copy</span>
                    <div>
                      <p className="font-label-md text-label-md text-error mb-1">POTENTIAL DUPLICATE FOUND</p>
                      <p className="text-body-sm text-on-surface-variant">A claim for <strong>$1,245.50</strong> with <strong>Global Logistics Inc.</strong> was submitted on 10/15/2023. Please verify if this is a unique transaction.</p>
                      <div className="flex gap-4 mt-3">
                        <button className="text-label-sm font-label-sm text-error underline">View Similar Claim</button>
                        <button className="text-label-sm font-label-sm text-on-surface-variant">This is a separate charge</button>
                      </div>
                    </div>
                  </div>
                  {/* Flagged: Missing Receipt Detail */}
                  <div className="bg-slate-700/5 border border-slate-300 rounded-xl p-5 flex gap-4">
                    <span className="material-symbols-outlined text-slate-700" data-icon="receipt_long">receipt_long</span>
                    <div>
                      <p className="font-label-md text-label-md text-slate-700 mb-1">MISSING LINE-ITEM DETAIL</p>
                      <p className="text-body-sm text-on-surface-variant">The AI couldn't resolve the tax breakdown. You can manually enter it or proceed with the total amount.</p>
                      <button className="mt-2 flex items-center gap-1 text-label-sm font-label-sm text-secondary hover:underline">
                        <span className="material-symbols-outlined text-[16px]" data-icon="add_circle">add_circle</span>
                        Add Tax Manually
                      </button>
                    </div>
                  </div>
                </div>
                {/* Guidance Card */}
                <div className="bg-surface-container-high rounded-xl p-6 border border-outline-variant flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-secondary" data-icon="lightbulb">lightbulb</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Pro-Tip for Quick Approval</p>
                      <p className="text-body-sm text-on-surface-variant">Attaching a clear photo of the shipping manifest speeds up processing by 40%.</p>
                    </div>
                  </div>
                  <button className="text-secondary font-label-md hover:bg-white/50 px-4 py-2 rounded-lg transition-colors">Learn More</button>
                </div>
              </div>
            </div>
            {/* Footer Summary Actions */}
            <div className="bg-white border-t border-outline-variant -mx-margin-desktop px-margin-desktop py-6 sticky bottom-0 glass-header flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-label-sm font-label-sm text-on-surface-variant uppercase">Total Amount</span>
                  <span className="text-headline-lg font-headline-lg text-primary">$1,245.50</span>
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="text-label-sm font-label-sm text-on-surface-variant uppercase">Status</span>
                  <span className="flex items-center gap-1 text-on-tertiary-container font-bold">
                    <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                    Ready for Review
                  </span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 font-label-md border border-outline rounded-lg hover:bg-surface-container transition-all">Cancel</button>
                <button className="px-12 py-3 font-label-md bg-primary text-on-primary rounded-lg hover:shadow-lg active:scale-[0.98] transition-all flex items-center gap-2">
                  Submit Claim
                  <span className="material-symbols-outlined text-[20px]" data-icon="send">send</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* BottomNavBar (Mobile only) */}
      <nav className="fixed bottom-0 left-0 w-full bg-surface-container-highest flex justify-around items-center px-4 py-3 pb-safe md:hidden z-50 rounded-t-xl shadow-[0px_-4px_12px_rgba(15,23,42,0.08)]">
        <a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-label-sm text-[10px] mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1" href="#">
          <span className="material-symbols-outlined" data-icon="assignment">assignment</span>
          <span className="font-label-sm text-[10px] mt-1">Claims</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
          <span className="material-symbols-outlined" data-icon="folder_.open">folder_open</span>
          <span className="font-label-sm text-[10px] mt-1">Vault</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-label-sm text-[10px] mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
};

export default Verification;
