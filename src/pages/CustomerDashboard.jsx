import { Link, useNavigate } from 'react-router-dom'

export default function CustomerDashboard() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('userRole')
    navigate('/login')
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <aside className="w-72 bg-white dark:bg-background-dark/50 border-r border-slate-200 dark:border-slate-800 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-background-dark font-bold">hub</span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">Service Connect</h1>
            <p className="text-xs text-slate-500 font-medium">Customer Portal</p>
          </div>
        </div>
        <nav className="flex-1 px-4 mt-4 space-y-2">
          <Link to="/customer-dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-background-dark shadow-sm group">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-semibold text-sm">Dashboard</span>
          </Link>
          <Link to="/customer-booking" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-medium text-sm">My Bookings</span>
          </Link>
          <Link to="/customer-profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group">
            <span className="material-symbols-outlined">person</span>
            <span className="font-medium text-sm">Profile</span>
          </Link>
          <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium text-sm">Settings</span>
          </Link>
        </nav>
        <div className="p-4 mt-auto">
          <div className="bg-slate-100 dark:bg-slate-800/50 p-4 rounded-xl mb-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Help Center</p>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">Need help with your bookings? Reach out to our support.</p>
            <button className="w-full py-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-600 hover:shadow-sm">Contact Support</button>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-semibold text-sm">Logout</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-8 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="relative w-96">
            <input className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-background-dark border-none rounded-xl focus:ring-2 focus:ring-primary text-sm" placeholder="Search services, bookings, or providers..." type="text" />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="size-10 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-700 flex items-center justify-center">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <Link to="/customer-profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40">
              <img className="w-full h-full object-cover" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-hPTfs2Q_bg4f_hrfPGTsBLAgWaR4dX7NjcusffQA_YH_pQn2BW4Rj4dKm3j8ChMljcLBvziDUauI7-k-1LHQD89vqEEJc12WelUhGsRpyeW3itcQNFct8jkefbou8onSL4P92CKJx7RZ3SpVB" />
            </Link>
          </div>
        </header>
        <div className="p-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Hello, Alex!</h2>
              <p className="text-slate-500 mt-1 font-medium">You have <span className="text-primary font-bold">2 active requests</span> that need your attention.</p>
            </div>
            <Link to="/services" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-background-dark font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
              <span className="material-symbols-outlined font-bold">add_circle</span>
              Book New Service
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 bg-amber-50 dark:bg-amber-900/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-500">pending_actions</span>
                </div>
                <span className="text-[10px] font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded uppercase tracking-wider">Pending</span>
              </div>
              <h3 className="text-3xl font-extrabold">02</h3>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-500">task_alt</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded uppercase tracking-wider">Completed</span>
              </div>
              <h3 className="text-3xl font-extrabold">12</h3>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-500">calendar_month</span>
                </div>
                <span className="text-[10px] font-bold text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded uppercase tracking-wider">Upcoming</span>
              </div>
              <h3 className="text-3xl font-extrabold">03</h3>
            </div>
          </div>
          <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 p-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-medium gap-4">
            <p>© 2023 Service Connect Inc. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
