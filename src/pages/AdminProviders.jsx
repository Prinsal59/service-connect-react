import { Link } from 'react-router-dom'

export default function AdminProviders() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-[#111813] font-display">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-[#152a1c] border-r border-[#dbe6df] dark:border-[#2a4031] flex flex-col fixed h-full">
        <div className="p-6 flex flex-col h-full">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-10">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-background-dark">
              <span className="material-symbols-outlined font-bold">hub</span>
            </div>
            <div>
              <h1 className="text-[#111813] dark:text-white text-lg font-extrabold leading-none">Service Connect</h1>
              <p className="text-[#608a6e] dark:text-[#a0c4ac] text-xs font-medium uppercase tracking-wider mt-1">Admin Dashboard</p>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-2 grow">
            <Link to="/admin-customers" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">group</span>
              <span className="font-medium text-sm">Customers</span>
            </Link>
            <Link to="/admin-providers" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-background-dark shadow-sm">
              <span className="material-symbols-outlined">engineering</span>
              <span className="font-semibold text-sm">Service Providers</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/10 transition-all">
              <span className="material-symbols-outlined">calendar_month</span>
              <span className="font-medium text-sm">Bookings</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/10 transition-all">
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
              <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBs6mC5Aioyu9GW5RIbSiKj2sMV4_zmtxiBl_ivA7CIYSlDtQo1OYrXLnEdV5eE7CbmPuC0A1xB_V-Hc7AFt3Y3AwOuywWomJocNa94qEMmMR96584t2aNJhbIcwz8cSknSoA0NCS7-xo5AeWF2fSvT4OWyq91Xn8oTjk6u_UZDHippEY2WJIughl3vOBdA03JQrUS5fLabocK8ERuClk7O2pIOCPgO-pDeJ175pGcC3lzpu8xSvsmEi8McxR97O4gRN8hQku_kcWJn')" }}></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold dark:text-white leading-none">Admin User</span>
                <span className="text-xs text-[#608a6e] dark:text-[#a0c4ac]">Super Admin</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white/80 dark:bg-[#152a1c]/80 backdrop-blur-md sticky top-0 z-10 border-b border-[#dbe6df] dark:border-[#2a4031] px-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#111813] dark:text-white">Service Provider Management</h2>
          </div>
          <div className="flex items-center gap-4 flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#608a6e]">search</span>
              <input className="w-full pl-12 pr-4 py-2.5 bg-background-light dark:bg-background-dark border-none rounded-xl focus:ring-2 focus:ring-primary text-sm" placeholder="Search providers by name, skill or ID..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="size-10 flex items-center justify-center rounded-xl bg-background-light dark:bg-background-dark text-[#111813] dark:text-[#f0f5f1] hover:bg-primary/20">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:opacity-90">
              <span className="material-symbols-outlined text-sm">add</span>
              New Provider
            </button>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4031] shadow-sm flex items-center gap-5">
              <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">engineering</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#608a6e] dark:text-[#a0c4ac] uppercase tracking-wider">Total Providers</p>
                <h3 className="text-2xl font-extrabold dark:text-white">432</h3>
                <p className="text-xs font-bold text-emerald-500 mt-1">↑ 3.8% <span className="text-[#608a6e] font-medium">this month</span></p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4031] shadow-sm flex items-center gap-5">
              <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#608a6e] dark:text-[#a0c4ac] uppercase tracking-wider">Pending Verification</p>
                <h3 className="text-2xl font-extrabold dark:text-white">18</h3>
                <p className="text-xs font-bold text-amber-500 mt-1">Requires <span className="text-[#608a6e] font-medium">attention</span></p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#152a1c] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4031] shadow-sm flex items-center gap-5">
              <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">star</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#608a6e] dark:text-[#a0c4ac] uppercase tracking-wider">Avg Provider Rating</p>
                <h3 className="text-2xl font-extrabold dark:text-white">4.8</h3>
                <p className="text-xs font-bold text-emerald-500 mt-1">Excellent <span className="text-[#608a6e] font-medium">feedback</span></p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#152a1c] rounded-2xl border border-[#dbe6df] dark:border-[#2a4031] shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-[#dbe6df] dark:border-[#2a4031] flex items-center justify-between">
              <h3 className="font-extrabold text-[#111813] dark:text-white">All Service Providers</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-xs font-bold bg-background-light dark:bg-background-dark rounded-lg hover:bg-primary/20 transition-colors">Export CSV</button>
                <button className="px-4 py-2 text-xs font-bold bg-background-light dark:bg-background-dark rounded-lg hover:bg-primary/20 transition-colors">Filters</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-background-light/50 dark:bg-background-dark/50 text-[#608a6e] dark:text-[#a0c4ac] text-[11px] font-bold uppercase tracking-widest">
                    <th className="px-8 py-5">Provider Details</th>
                    <th className="px-8 py-5">Service Category</th>
                    <th className="px-8 py-5">Rating</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dbe6df] dark:divide-[#2a4031]">
                  {[
                    { name: 'John Doe', skill: 'Plumber', rating: '4.9', status: 'Active', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO7GRiTFgko2wehhS3ehBUnh2Msc6Bgr-rCbC3l8-ohrU5v6YrWv2Rk7fp-EAm_FYHT4GMkxZP7LRjncQtzxaGqYmX-qlvMO7qdf5ZyoMtOcDN5IQKuwVcyto7REOWQPtK6TuyIa56Z2_DizZpZBqtX2wyn4vlSdSFlyKUhQcwc3oy_zO5WQMfv1ghwox2Y4w5pzq24GFjAq--Mr5sV8xstxdGlF3i-Mt93BuQsHmyAS_NJYWdoyeWbU5cb7P4d1sxZ15d7Gk5Afjw' },
                    { name: 'Jane Smith', skill: 'Electrician', rating: '4.7', status: 'Active', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsvb8aRcA6tFU32US1ZuKzTfLLhKNF3hc22zuP1riLMCqjMQgSXJzrgvn2xCEs4W7my_NSHsulBwaValCSfzC3IplCCIusvqfnuWS2Rkt-jnf-L9bKulxOhB_Fon93DWAz5Y1iHOlVEpWKUF7nOq_5uYjxYECaDHDb4fOAmz1ebK7K_2uNJnj9HR2yfbXr7Ww7hCkTSW77BPoyevhluPnYn7gSmwJ9sYNbKMrXFpZ9krli9tlTGt69sguXlINZnT8bSdr_SuBhuSh7' }
                  ].map((p, i) => (
                    <tr key={i} className="hover:bg-background-light/30 dark:hover:bg-white/5 transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="size-10 rounded-xl bg-cover bg-center border border-[#dbe6df] dark:border-[#2a4031]" style={{ backgroundImage: `url('${p.img}')` }}></div>
                          <div>
                            <p className="text-sm font-bold dark:text-white">{p.name}</p>
                            <p className="text-xs text-[#608a6e] dark:text-[#a0c4ac]">{p.name.toLowerCase().replace(' ', '')}@example.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-sm font-medium dark:text-[#f0f5f1]">{p.skill}</span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-amber-500 text-sm fill-1">star</span>
                          <span className="text-sm font-bold dark:text-white">{p.rating}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                          <span className="size-1.5 rounded-full bg-emerald-500"></span>
                          {p.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="p-2 hover:bg-background-light dark:hover:bg-background-dark rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[#608a6e]">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
