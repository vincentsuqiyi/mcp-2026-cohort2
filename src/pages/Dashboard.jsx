import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-background text-on-surface">
      <header className="bg-surface dark:bg-on-background text-on-surface dark:text-inverse-on-surface font-headline-lg text-headline-lg font-bold docked full-width top-0 border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center w-full px-margin-desktop h-16 z-40 fixed">
        <div className="flex items-center gap-4">
          <span className="text-headline-lg font-headline-lg font-bold text-primary dark:text-inverse-primary">ClaimsPortal</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8 mr-8">
            <Link className="text-primary dark:text-inverse-primary font-bold transition-colors" to="/">Dashboard</Link>
            <a className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-colors px-2 py-1 rounded" href="/profile">My Profile</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined p-2 hover:bg-surface-container-high dark:hover:bg-inverse-surface rounded-full transition-colors">notifications</button>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
              <img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd03zqrdukpQiJ2twGC_reJI0kZ3k1U5SelOOFMJmlqdAaixWxN_kNrHUlXqQYQX_KKYRX4ZwKwy_I5-K_ZCiGxbNBALRpP0OAbaZsoB5cy4U-viMty4cRN8XbCO7Z_wltR9I-rquxLjFZif4MP4Bes6Oxcaoa6qzhzc4-Ul3PdtLYKz5TN5gK4ssCRtDFjbfwfAzufWyJDZW0PneHUOo-P6VqEG7OsUtlsh0QuU-U8FAh-Jb2CHSBX683DHckrSYUehRKXkM1qHoc"/>
            </div>
          </div>
        </div>
      </header>
      <div className="flex pt-16 min-h-screen">
        <aside className="bg-surface-container-low dark:bg-inverse-surface text-primary dark:text-inverse-primary font-label-md text-label-md docked left-0 h-screen w-64 hidden md:flex flex-col border-r border-outline-variant dark:border-outline flat no shadows py-8 gap-4 fixed">
          <div className="px-6 mb-8">
            <h2 className="font-headline-md text-headline-md font-extrabold text-on-surface dark:text-surface-bright">TrustAssure</h2>
            <p className="text-label-sm text-on-surface-variant opacity-70">Policyholder Portal</p>
          </div>
          <nav className="flex-grow">
            <Link className="flex items-center gap-3 py-3 px-6 text-primary dark:text-secondary-fixed font-bold border-l-4 border-secondary transition-all" to="/new-claim">
              <span className="material-symbols-outlined">add_box</span>
              <span>New Claim</span>
            </Link>
            <Link className="flex items-center gap-3 py-3 px-6 text-on-surface-variant dark:text-surface-variant pl-7 hover:bg-surface-container-highest dark:hover:bg-surface-variant transition-all" to="/claims">
              <span className="material-symbols-outlined">list_alt</span>
              <span>My Claims</span>
            </Link>
            <a className="flex items-center gap-3 py-3 px-6 text-on-surface-variant dark:text-surface-variant pl-7 hover:bg-surface-container-highest dark:hover:bg-surface-variant transition-all" href="/documents">
              <span className="material-symbols-outlined">description</span>
              <span>Documents</span>
            </a>
            <a className="flex items-center gap-3 py-3 px-6 text-on-surface-variant dark:text-surface-variant pl-7 hover:bg-surface-container-highest dark:hover:bg-surface-variant transition-all" href="/settings">
              <span className="material-symbols-outlined">settings</span>
              <span>Settings</span>
            </a>
          </nav>
          <div className="mt-auto px-6 space-y-4">
            <button className="w-full py-3 px-4 bg-primary-container text-on-primary-fixed rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">support_agent</span>
              Emergency Support
            </button>
            <a className="flex items-center gap-3 py-2 text-on-surface-variant pl-1 hover:text-primary transition-colors" href="/help">
              <span className="material-symbols-outlined">help</span>
              <span>Help Center</span>
            </a>
          </div>
        </aside>
        <main className="flex-grow md:ml-64 p-margin-mobile md:p-margin-desktop pb-24 md:pb-8">
          <div className="mb-gutter flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-2">Welcome back, Sarah</h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Your claim status is being monitored in real-time. We've updated your dashboard with the latest reimbursement data.</p>
            </div>
            <Link to="/new-claim">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">add</span>
                Start New Claim
              </button>
            </Link>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-secondary-container p-3 rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined">assignment</span>
                </div>
                <span className="text-label-sm font-bold text-secondary">+2 this month</span>
              </div>
              <div>
                <p className="text-label-md text-on-surface-variant uppercase">Active Claims</p>
                <h3 className="text-headline-xl font-headline-xl text-on-surface">04</h3>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl flex flex-col justify-between hover:border-secondary transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-surface-container-high p-3 rounded-lg text-primary">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-label-sm font-bold text-on-surface-variant">YTD Summary</span>
              </div>
              <div>
                <p className="text-label-md text-on-surface-variant uppercase">Total Reimbursed</p>
                <h3 className="text-headline-xl font-headline-xl text-on-surface">$12,450.00</h3>
              </div>
            </div>
            <div className="bg-on-background text-surface-bright p-6 rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-error-container p-3 rounded-lg text-on-error-container">
                    <span className="material-symbols-outlined">warning</span>
                  </div>
                  <span className="bg-error text-on-error text-[10px] px-2 py-0.5 rounded-full animate-pulse">ACTION</span>
                </div>
                <p className="text-label-md text-surface-variant uppercase">Attention Needed</p>
                <h3 className="text-headline-md font-headline-md text-white mt-1">Claim #9928-1 requires verification docs.</h3>
                <a className="mt-4 inline-block text-secondary-fixed font-bold border-b-2 border-secondary-fixed pb-1 hover:text-white transition-colors" href="#">Review Docs</a>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-[120px]">notifications</span>
              </div>
            </div>
          </section>
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-10">
              <h2 className="font-headline-md text-headline-md text-on-surface">Recent Claims Activity</h2>
              <div className="flex gap-2">
                <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                </button>
                <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto table-container">
              <table className="w-full text-left border-collapse">
                <thead className="bg-on-background text-surface-bright">
                  <tr>
                    <th className="px-6 py-4 font-label-md text-label-md">CLAIM ID</th>
                    <th className="px-6 py-4 font-label-md text-label-md">INCIDENT DATE</th>
                    <th className="px-6 py-4 font-label-md text-label-md">CATEGORY</th>
                    <th className="px-6 py-4 font-label-md text-label-md">AMOUNT</th>
                    <th className="px-6 py-4 font-label-md text-label-md">STATUS</th>
                    <th className="px-6 py-4 font-label-md text-label-md text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="zebra-row hover:border-l-[4px] hover:border-secondary transition-all cursor-pointer group">
                    <td className="px-6 py-4 font-medium text-on-surface">CLM-8271-92</td>
                    <td className="px-6 py-4 text-on-surface-variant font-body-sm">Oct 12, 2023</td>
                    <td className="px-6 py-4 text-on-surface-variant font-body-sm">Medical Care</td>
                    <td className="px-6 py-4 font-bold text-on-surface">$2,450.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/10 text-[#064e3b]">Verified</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">more_vert</button>
                    </td>
                  </tr>
                  <tr className="zebra-row hover:border-l-[4px] hover:border-secondary transition-all cursor-pointer group">
                    <td className="px-6 py-4 font-medium text-on-surface">CLM-9928-11</td>
                    <td className="px-6 py-4 text-on-surface-variant font-body-sm">Nov 04, 2023</td>
                    <td className="px-6 py-4 text-on-surface-variant font-body-sm">Property Damage</td>
                    <td className="px-6 py-4 font-bold text-on-surface">$8,120.50</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#ff7043]/10 text-[#bf360c]">Flagged</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">more_vert</button>
                    </td>
                  </tr>
                  <tr className="zebra-row hover:border-l-[4px] hover:border-secondary transition-all cursor-pointer group">
                    <td className="px-6 py-4 font-medium text-on-surface">CLM-1022-45</td>
                    <td className="px-6 py-4 text-on-surface-variant font-body-sm">Nov 15, 2023</td>
                    <td className="px-6 py-4 text-on-surface-variant font-body-sm">Vehicle Incident</td>
                    <td className="px-6 py-4 font-bold text-on-surface">$1,200.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#64748b]/10 text-[#334155]">In Review</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">more_vert</button>
                    </td>
                  </tr>
                  <tr className="zebra-row hover:border-l-[4px] hover:border-secondary transition-all cursor-pointer group">
                    <td className="px-6 py-4 font-medium text-on-surface">CLM-1150-08</td>
                    <td className="px-6 py-4 text-on-surface-variant font-body-sm">Dec 02, 2023</td>
                    <td className="px-6 py-4 text-on-surface-variant font-body-sm">Travel Delay</td>
                    <td className="px-6 py-4 font-bold text-on-surface">$680.00</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#10b981]/10 text-[#064e3b]">Verified</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">more_vert</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-surface-container-low text-center">
              <button className="text-secondary font-bold text-label-md hover:underline">View All Historical Claims</button>
            </div>
          </section>
        </main>
      </div>
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-surface-container-highest dark:bg-on-background shadow-[0px_-4px_12px_rgba(15,23,42,0.08)] z-50 md:hidden rounded-t-xl">
        <Link className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 active:scale-95 duration-100" to="/">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm-mobile text-label-sm-mobile">Home</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant active:scale-95 duration-100" to="/claims">
          <span className="material-symbols-outlined">assignment</span>
          <span className="font-label-sm-mobile text-label-sm-mobile">Claims</span>
        </Link>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant active:scale-95 duration-100" href="/vault">
          <span className="material-symbols-outlined">folder_open</span>
          <span className="font-label-sm-mobile text-label-sm-mobile">Vault</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant active:scale-95 duration-100" href="/profile">
          <span className-="material-symbols-outlined">person</span>
          <span className="font-label-sm-mobile text-label-sm-mobile">Profile</span>
        </a>
      </nav>
    </div>
  );
};

export default Dashboard;
