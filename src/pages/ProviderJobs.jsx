import { Link } from 'react-router-dom'

export default function ProviderJobs() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-[#111813] font-display">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white dark:bg-[#152a1c] border-r border-[#e1e9e3] dark:border-[#1f3a28] flex flex-col justify-between p-6">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-2">
            <div className="bg-primary p-2 rounded-lg">
              <span className="material-symbols-outlined text-background-dark">home_repair_service</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight dark:text-white">Service Connect</h2>
          </div>
          <nav className="flex flex-col gap-2">
            <Link to="/provider-dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors group">
              <span className="material-symbols-outlined text-[#608a6e] group-hover:text-primary">dashboard</span>
              <span className="font-semibold text-sm dark:text-[#f0f5f1]">Dashboard</span>
            </Link>
            <Link to="/provider-jobs" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-background-dark shadow-sm">
              <span className="material-symbols-outlined">work</span>
              <span className="font-semibold text-sm">My Jobs</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors group">
              <span className="material-symbols-outlined text-[#608a6e] group-hover:text-primary">calendar_today</span>
              <span className="font-semibold text-sm dark:text-[#f0f5f1]">Schedule</span>
            </Link>
            <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors group">
              <span className="material-symbols-outlined text-[#608a6e] group-hover:text-primary">payments</span>
              <span className="font-semibold text-sm dark:text-[#f0f5f1]">Payments</span>
            </Link>
            <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-colors group">
              <span className="material-symbols-outlined text-[#608a6e] group-hover:text-primary">settings</span>
              <span className="font-semibold text-sm dark:text-[#f0f5f1]">Settings</span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-background-light dark:bg-[#1a3523] rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBg6H5-tSKaAfrCOd3bSv-hyDxtisQYVyzkpEhgyreC0N1Z-VZGJstEw6BumsonnPONhQ6mEfW9Px2m3r8zB_WQ4qoj4rG0Gu6wiyQVs1OCK9xtcNGWxJfPw7lY3iTPMBkPqyHH6l13aG3W6NG8O7Sg9g11w4Avls-QgzVgMl-U0_z5YgR-0iFIxfH30cr4HpPcfFc_-JFC2OOg02DnNvK4MD1p771t5jUnZE0_jjU2AZ8iaCmdwUI7dXwtxcCYoIfpIVqCL74QFX4B')" }}></div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold dark:text-white">John Doe</h3>
                <p className="text-[10px] text-[#608a6e] uppercase tracking-wider font-bold">Master Plumber</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                <span className="text-xs font-bold dark:text-white">4.9</span>
              </div>
              <button className="bg-primary text-background-dark text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Go Online</button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white/80 dark:bg-[#152a1c]/80 backdrop-blur-md border-b border-[#e1e9e3] dark:border-[#1f3a28] px-8 flex items-center justify-between shrink-0">
          <h2 className="text-xl font-extrabold tracking-tight dark:text-white">Manage Your Jobs</h2>
          <div className="flex items-center gap-4">
            <div className="flex p-1 bg-background-light dark:bg-[#102216] rounded-xl border border-[#e1e9e3] dark:border-[#1f3a28]">
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-white dark:bg-[#1a3523] shadow-sm">All Jobs</button>
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-[#608a6e] hover:bg-white/50 transition-colors">Active</button>
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-[#608a6e] hover:bg-white/50 transition-colors">Completed</button>
            </div>
            <button className="size-10 flex items-center justify-center rounded-xl bg-background-light dark:bg-[#102216] hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-lg">notifications</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 gap-6">
            {[
              { customer: 'Sarah Jenkins', service: 'Emergency Pipe Repair', date: 'Today, 2:00 PM', address: '452 Oak Avenue, NY', status: 'Urgent', price: '$120.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPIfRpgwmNA8Qk5HRQa9Bjh8GLIJr38xtBQqxX4-Lgnbe03_Uw4JadaUBxFWKE2rMawTtXdLN4gmA3_DWqZjcmT8mCoOVpxLs8N9hZgE9VwwL74tD1UknGBjYGO9ikPllOomiz54m77RJTn1P16COdZzoCvwEh3iNUu21h0Uwks3yTMFF8rnrsqq7GU9oejY2G_vP3djLihdiNut60Yl1igfLzExUbJl2hptKlDSMsbfYDbDaN7_lY2WcEXnYKW4lit1VukoitbkXW' },
              { customer: 'David Miller', service: 'Bathroom Fitting', date: 'Oct 26, 10:00 AM', address: '123 Pine St, NY', status: 'Scheduled', price: '$250.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhvMkpkh_ewiIXkOLvnCm6y5eIh8plMey-evP3QQMMZu4iL6InvjNHtNO7bgaObfCG-BX1GwgzwDk6gOo6vNMPQ0q1VHde-tjyrEk5RwZE6v17aB04RRlm12fbrLaEYNBMZOpGgYSY_ttpi0GTU19WWwmNhE2K41hySQ1ppdA0LOK2_fntjPvnhSyxIY5oadM1tW88hc7OEbeX19EY1Rw571HTrZIDNyM86ZQyNAms0cQNn_wDM-z0OTvukJYAC42GXZ-zw5MS6-K2' }
            ].map((job, i) => (
              <div key={i} className="bg-white dark:bg-[#1a2e20] rounded-2xl border border-[#e1e9e3] dark:border-[#1f3a28] p-6 hover:border-primary/50 transition-all shadow-sm group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="size-20 rounded-2xl overflow-hidden border border-[#e1e9e3] dark:border-[#1f3a28]">
                    <img src={job.img} alt={job.customer} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-extrabold group-hover:text-primary transition-colors">{job.customer}</h3>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter ${job.status === 'Urgent' ? 'bg-rose-100 text-rose-600' : 'bg-blue-100 text-blue-600'}`}>
                            {job.status}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-[#608a6e]">{job.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-black text-primary">{job.price}</p>
                        <p className="text-[11px] text-[#608a6e] font-bold">Estimated Earnings</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#e1e9e3] dark:border-[#1f3a28]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#608a6e] text-lg">calendar_month</span>
                        <span className="text-xs font-bold dark:text-[#f0f5f1]">{job.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#608a6e] text-lg">location_on</span>
                        <span className="text-xs font-bold dark:text-[#f0f5f1]">{job.address}</span>
                      </div>
                      <div className="flex justify-end gap-2">
                        <button className="px-6 py-2 bg-primary text-background-dark text-xs font-bold rounded-lg hover:scale-[1.02] transition-transform">Complete Job</button>
                        <button className="p-2 border border-[#e1e9e3] dark:border-[#1f3a28] rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                          <span className="material-symbols-outlined text-sm">more_horiz</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
