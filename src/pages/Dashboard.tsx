import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-background text-on-surface font-body-md">
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
            <Link className="flex items-center gap-3 px-6 py-3 text-primary font-bold border-l-4 border-secondary bg-surface-container-highest transition-all" to="/">
              <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 px-6 py-3 text-on-surface-variant pl-7 hover:bg-surface-container-highest transition-all" to="/my-claims">
              <span className="material-symbols-outlined" data-icon="list_alt">list_alt</span>
              <span className="font-label-md text-label-md">My Claims</span>
            </Link>
            <Link className="flex items-center gap-3 px-6 py-3 text-on-surface-variant pl-7 hover:bg-surface-container-highest transition-all" to="/new-claim">
              <span className="material-symbols-outlined" data-icon="add_box">add_box</span>
              <span className="font-label-md text-label-md">New Claim</span>
            </Link>
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
                <h1 className="font-headline-xl text-headline-xl text-on-background">Welcome back, Sarah</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
                  Here is a summary of your recent claims and account activity.
                </p>
              </div>
              <Link to="/new-claim">
                <button className="px-8 py-2 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center gap-2">
                  <span className="material-symbols-outlined" data-icon="add">add</span>
                  Submit a New Claim
                </button>
              </Link>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl flex flex-col justify-between hover:border-secondary transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-secondary-container rounded-lg text-on-secondary-container">
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
                  <div className="p-3 bg-surface-container-high rounded-lg text-primary">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="text-label-sm font-bold text-on-surface-variant">YTD Summary</span>
                </div>
                <div>
                  <p className="text-label-md text-on-surface-variant uppercase">Pending Payout</p>
                  <h3 className="text-headline-xl font-headline-xl text-on-surface">$1,880.00</h3>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl flex flex-col justify-between hover:border-secondary transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-tertiary-container rounded-lg text-on-tertiary-container">
                    <span className="material-symbols-outlined">percent</span>
                  </div>
                </div>
                <div>
                  <p className="text-label-md text-on-surface-variant uppercase">Reimbursement Rate</p>
                  <h3 className="text-headline-xl font-headline-xl text-on-surface">85%</h3>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="p-6 border-b border-outline-variant flex justify-between items-center">
                <h2 className="font-headline-md text-headline-md text-on-surface">Recent Activity</h2>
                <div className="flex gap-2">
                  <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined text-sm">filter_list</span>
                  </button>
                  <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined text-sm">download</span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-low">
                      <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Claim ID</th>
                      <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Date</th>
                      <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Amount</th>
                      <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Status</th>
                      <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 font-medium text-on-surface">#INV-99201-B</td>
                      <td className="px-6 py-4 text-on-surface-variant">Oct 14, 2023</td>
                      <td className="px-6 py-4 font-bold text-on-surface">$1,245.50</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-700">In Review</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary font-bold">View</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 font-medium text-on-surface">#INV-98347-A</td>
                      <td className="px-6 py-4 text-on-surface-variant">Oct 1, 2023</td>
                      <td className="px-6 py-4 font-bold text-on-surface">$450.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-700">Approved</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary font-bold">View</button>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4 font-medium text-on-surface">#INV-98112-C</td>
                      <td className="px-6 py-4 text-on-surface-variant">Sep 28, 2023</td>
                      <td className="px-6 py-4 font-bold text-on-surface">$8,250.00</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-700">Rejected</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary font-bold">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;