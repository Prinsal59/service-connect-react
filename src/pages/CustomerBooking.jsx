import { Link } from 'react-router-dom'

export default function CustomerBooking() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-[#111813] dark:text-white">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white dark:bg-[#1a2e1f] border-r border-[#dbe6df] dark:border-[#2d4a35] flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-symbols-outlined text-background-dark">home_repair_service</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold leading-none tracking-tight">Service Connect</h1>
            <p className="text-xs text-[#608a6e] font-medium">Customer Portal</p>
          </div>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <Link to="/customer-dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35] transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link to="/customer-booking" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg bg-primary text-background-dark shadow-sm">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            My Bookings
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35] transition-colors">
            <span className="material-symbols-outlined">chat_bubble</span>
            Messages
          </Link>
          <Link to="/services" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35] transition-colors">
            <span className="material-symbols-outlined">group</span>
            Providers
          </Link>
          <div className="pt-4 mt-4 border-t border-[#dbe6df] dark:border-[#2d4a35]">
            <Link to="/settings" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35] transition-colors">
              <span className="material-symbols-outlined">settings</span>
              Settings
            </Link>
          </div>
        </nav>
        <div className="p-4 border-t border-[#dbe6df] dark:border-[#2d4a35]">
          <div className="flex items-center gap-3 p-2 bg-background-light dark:bg-[#243d2a] rounded-xl">
            <img alt="Profile" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhvMkpkh_ewiIXkOLvnCm6y5eIh8plMey-evP3QQMMZu4iL6InvjNHtNO7bgaObfCG-BX1GwgzwDk6gOo6vNMPQ0q1VHde-tjyrEk5RwZE6v17aB04RRlm12fbrLaEYNBMZOpGgYSY_ttpi0GTU19WWwmNhE2K41hySQ1ppdA0LOK2_fntjPvnhSyxIY5oadM1tW88hc7OEbeX19EY1Rw571HTrZIDNyM86ZQyNAms0cQNn_wDM-z0OTvukJYAC42GXZ-zw5MS6-K2" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">Alex Morgan</p>
              <p className="text-xs text-[#608a6e] truncate">Premium Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-[#1a2e1f] border-b border-[#dbe6df] dark:border-[#2d4a35] px-8 flex items-center justify-between shrink-0">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#608a6e] group-focus-within:text-primary transition-colors">search</span>
              <input className="w-full bg-[#f0f5f1] dark:bg-[#243d2a] border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-[#608a6e]" placeholder="Search bookings, providers or services..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-8">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f0f5f1] dark:bg-[#243d2a] hover:bg-primary/20 transition-colors relative">
              <span className="material-symbols-outlined text-[#608a6e]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-[#1a2e1f]"></span>
            </button>
            <Link to="/book-service" className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-sm">add</span>
              New Booking
            </Link>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">My Service Bookings</h2>
              <p className="text-[#608a6e] mt-1">Track and manage your requested home services.</p>
            </div>
            <div className="flex gap-2 p-1 bg-white dark:bg-[#1a2e1f] rounded-xl border border-[#dbe6df] dark:border-[#2d4a35] w-fit">
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-primary text-background-dark">Upcoming</button>
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-[#608a6e] hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35]">Completed</button>
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-[#608a6e] hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35]">Cancelled</button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { provider: 'QuickFix Plumbing', service: 'Kitchen Pipe Leak', date: 'Oct 24, 2023', time: '10:00 AM', status: 'In Progress', price: '$85.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO7GRiTFgko2wehhS3ehBUnh2Msc6Bgr-rCbC3l8-ohrU5v6YrWv2Rk7fp-EAm_FYHT4GMkxZP7LRjncQtzxaGqYmX-qlvMO7qdf5ZyoMtOcDN5IQKuwVcyto7REOWQPtK6TuyIa56Z2_DizZpZBqtX2wyn4vlSdSFlyKUhQcwc3oy_zO5WQMfv1ghwox2Y4w5pzq24GFjAq--Mr5sV8xstxdGlF3i-Mt93BuQsHmyAS_NJYWdoyeWbU5cb7P4d1sxZ15d7Gk5Afjw' },
              { provider: 'Sparkle Cleaners', service: 'Full House Deep Clean', date: 'Oct 28, 2023', time: '09:00 AM', status: 'Pending', price: '$150.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsvb8aRcA6tFU32US1ZuKzTfLLhKNF3hc22zuP1riLMCqjMQgSXJzrgvn2xCEs4W7my_NSHsulBwaValCSfzC3IplCCIusvqfnuWS2Rkt-jnf-L9bKulxOhB_Fon93DWAz5Y1iHOlVEpWKUF7nOq_5uYjxYECaDHDb4fOAmz1ebK7K_2uNJnj9HR2yfbXr7Ww7hCkTSW77BPoyevhluPnYn7gSmwJ9sYNbKMrXFpZ9krli9tlTGt69sguXlINZnT8bSdr_SuBhuSh7' }
            ].map((booking, i) => (
              <div key={i} className="bg-white dark:bg-[#1a2e1f] rounded-2xl border border-[#dbe6df] dark:border-[#2d4a35] p-6 hover:border-primary/50 transition-all group shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="size-20 rounded-xl overflow-hidden shrink-0 border border-[#dbe6df] dark:border-[#2d4a35]">
                    <img src={booking.img} alt={booking.provider} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-extrabold group-hover:text-primary transition-colors">{booking.provider}</h3>
                        <p className="text-sm font-bold text-[#608a6e]">{booking.service}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${booking.status === 'In Progress' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20'}`}>
                          {booking.status}
                        </span>
                        <p className="text-xl font-extrabold">{booking.price}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#dbe6df] dark:border-[#2d4a35]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#608a6e] text-lg">calendar_today</span>
                        <span className="text-xs font-bold">{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#608a6e] text-lg">schedule</span>
                        <span className="text-xs font-bold">{booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#608a6e] text-lg">location_on</span>
                        <span className="text-xs font-bold">123 Maple St, NY</span>
                      </div>
                      <div className="flex justify-end gap-2 col-span-2 md:col-span-1">
                        <button className="px-4 py-2 text-xs font-bold border border-[#dbe6df] dark:border-[#2d4a35] rounded-lg hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35] transition-colors">Reschedule</button>
                        <button className="px-4 py-2 text-xs font-bold bg-background-light dark:bg-[#243d2a] rounded-lg hover:bg-rose-50 hover:text-rose-500 transition-colors">Cancel</button>
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
