import { Link } from 'react-router-dom'

export default function AdminCustomers() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-[#111813]">
      <aside className="w-72 bg-white dark:bg-[#152a1c] border-r border-[#dbe6df] dark:border-[#2a4031] flex flex-col fixed h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-background-dark">
              <span className="material-symbols-outlined font-bold">hub</span>
            </div>
            <div>
              <h1 className="text-[#111813] dark:text-white text-lg font-extrabold leading-none">Service Connect</h1>
              <p className="text-[#608a6e] dark:text-[#a0c4ac] text-xs font-medium uppercase tracking-wider mt-1">Admin Dashboard</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 grow">
            <Link to="/admin-customers" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-background-dark shadow-sm">
              <span className="material-symbols-outlined">group</span>
              <span className="font-semibold text-sm">Customers</span>
            </Link>
            <Link to="/admin-providers" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">engineering</span>
              <span className="font-medium text-sm">Service Providers</span>
            </Link>
            <Link to="/admin-bookings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">calendar_month</span>
              <span className="font-medium text-sm">Bookings</span>
            </Link>
            <Link to="/admin-revenue" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">payments</span>
              <span className="font-medium text-sm">Revenue</span>
            </Link>
          </nav>
          <div className="mt-auto pt-6 border-t border-[#dbe6df] dark:border-[#2a4031] flex flex-col gap-2">
            <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-medium text-sm">Settings</span>
            </Link>
            <div className="flex items-center gap-3 px-4 py-4 mt-2">
              <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAV53VV1JcUHekrOQ_UifZ-7n4FzvuXGIijLuDeZBiz1Ny1FQjBG_gWc9H-MxfGPoz8sTh5H0svkiNSek5oqYNpeg3plP7oJyHutlA6zGhdI7pLFHKTZAJj3rC3e1UDB72WZlPExC1AoOi6Yacn-eE1RzEBgek0la8MWIXwFdOh8AG63V4y9JaeRVkLExL-iyusDbuIi-Gkc0fF40uIZVLR3FSDXSBUr5E40trwKFj98VjIqDAbnwarPjFYCiVV-6_dw6TIU-A4npRK')" }}></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold dark:text-white leading-none">Admin User</span>
                <span className="text-xs text-[#608a6e] dark:text-[#a0c4ac]">Super Admin</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="ml-72 flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white/80 dark:bg-[#152a1c]/80 backdrop-blur-md sticky top-0 z-10 border-b border-[#dbe6df] dark:border-[#2a4031] px-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#111813] dark:text-white">Customer Management</h2>
          </div>
          <div className="flex items-center gap-4 flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#608a6e]">search</span>
              <input className="w-full pl-12 pr-4 py-2.5 bg-background-light dark:bg-background-dark border-none rounded-xl focus:ring-2 focus:ring-primary text-sm" placeholder="Search customers by name, email or ID..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="size-10 flex items-center justify-center rounded-xl bg-background-light dark:bg-background-dark text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/20">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:opacity-90">
              <span className="material-symbols-outlined text-sm">add</span>
              New Customer
            </button>
          </div>
        </header>
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4031] shadow-sm flex items-center gap-5">
              <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#608a6e] dark:text-[#a0c4ac] uppercase tracking-wider">Total Customers</p>
                <h3 className="text-2xl font-extrabold dark:text-white">1,284</h3>
                <p className="text-xs font-bold text-emerald-500 mt-1">↑ 5.2% <span className="text-[#608a6e] font-medium">this month</span></p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4031] shadow-sm flex items-center gap-5">
              <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#608a6e] dark:text-[#a0c4ac] uppercase tracking-wider">New This Month</p>
                <h3 className="text-2xl font-extrabold dark:text-white">156</h3>
                <p className="text-xs font-bold text-emerald-500 mt-1">↑ 12% <span className="text-[#608a6e] font-medium">vs last month</span></p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4031] shadow-sm flex items-center gap-5">
              <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#608a6e] dark:text-[#a0c4ac] uppercase tracking-wider">Active Rate</p>
                <h3 className="text-2xl font-extrabold dark:text-white">94.2%</h3>
                <p className="text-xs font-bold text-emerald-500 mt-1">Stable <span className="text-[#608a6e] font-medium">performance</span></p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#152a1c] rounded-xl border border-[#dbe6df] dark:border-[#2a4031] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#dbe6df] dark:border-[#2a4031] flex justify-between items-center">
              <h3 className="font-bold text-lg dark:text-white">Recent Customers</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-[#dbe6df] dark:border-[#2a4031] rounded-lg text-sm font-semibold hover:bg-background-light dark:hover:bg-background-dark">Filter</button>
                <button className="px-4 py-2 border border-[#dbe6df] dark:border-[#2a4031] rounded-lg text-sm font-semibold hover:bg-background-light dark:hover:bg-background-dark">Export CSV</button>
              </div>
            </div>
            <div className="p-6 text-sm text-[#608a6e]">Table content placeholder</div>
          </div>
        </div>
      </main>
    </div>
  )
}
