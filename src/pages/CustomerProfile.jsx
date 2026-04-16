import { Link } from 'react-router-dom'

export default function CustomerProfile() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-[#111813] dark:text-white">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white dark:bg-[#152a1c] border-r border-[#e5ece7] dark:border-[#1e3a28] flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 bg-primary flex items-center justify-center rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-[#111813] font-bold">bolt</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight">Service Connect</h1>
            <p className="text-xs text-[#608a6e] font-medium">Customer Portal</p>
          </div>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <Link to="/customer-dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35] transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link to="/customer-booking" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35] transition-colors">
            <span className="material-symbols-outlined">calendar_month</span>
            My Bookings
          </Link>
          <Link to="/customer-profile" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg bg-primary text-background-dark shadow-sm">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            Profile
          </Link>
          <Link to="/settings" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg hover:bg-[#f0f5f1] dark:hover:bg-[#2d4a35] transition-colors">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </Link>
        </nav>
        <div className="p-4 mt-auto border-t border-[#f0f5f1] dark:border-[#1e3a28]">
          <div className="bg-[#f0f5f1] dark:bg-[#1c3524] p-4 rounded-xl flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPIfRpgwmNA8Qk5HRQa9Bjh8GLIJr38xtBQqxX4-Lgnbe03_Uw4JadaUBxFWKE2rMawTtXdLN4gmA3_DWqZjcmT8mCoOVpxLs8N9hZgE9VwwL74tD1UknGBjYGO9ikPllOomiz54m77RJTn1P16COdZzoCvwEh3iNUu21h0Uwks3yTMFF8rnrsqq7GU9oejY2G_vP3djLihdiNut60Yl1igfLzExUbJl2hptKlDSMsbfYDbDaN7_lY2WcEXnYKW4lit1VukoitbkXW" alt="Profile" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Alex Thompson</p>
              <p className="text-xs text-[#608a6e] truncate">Premium Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-20 bg-white/80 dark:bg-[#152a1c]/80 backdrop-blur-md border-b border-[#e5ece7] dark:border-[#1e3a28] flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-xl font-bold">Customer Profile</h2>
          <div className="flex items-center gap-4">
            <button className="size-10 flex items-center justify-center rounded-xl bg-[#f0f5f1] dark:bg-[#1e3a28] hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-lg">notifications</span>
            </button>
            <Link to="/login" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-[#f0f5f1] dark:bg-[#1e3a28] hover:bg-red-50 text-red-600 transition-colors text-sm font-bold">
              <span className="material-symbols-outlined text-lg">logout</span>
              Logout
            </Link>
          </div>
        </header>

        <div className="p-8 max-w-4xl mx-auto w-full">
          <div className="bg-white dark:bg-[#152a1c] rounded-3xl border border-[#e5ece7] dark:border-[#1e3a28] shadow-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5"></div>
            <div className="px-8 pb-8 -mt-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex items-end gap-6">
                  <div className="size-32 rounded-3xl border-4 border-white dark:border-[#152a1c] overflow-hidden bg-white shadow-lg">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPIfRpgwmNA8Qk5HRQa9Bjh8GLIJr38xtBQqxX4-Lgnbe03_Uw4JadaUBxFWKE2rMawTtXdLN4gmA3_DWqZjcmT8mCoOVpxLs8N9hZgE9VwwL74tD1UknGBjYGO9ikPllOomiz54m77RJTn1P16COdZzoCvwEh3iNUu21h0Uwks3yTMFF8rnrsqq7GU9oejY2G_vP3djLihdiNut60Yl1igfLzExUbJl2hptKlDSMsbfYDbDaN7_lY2WcEXnYKW4lit1VukoitbkXW" alt="Profile" />
                  </div>
                  <div className="pb-2">
                    <h3 className="text-2xl font-extrabold">Alex Thompson</h3>
                    <p className="text-[#608a6e] font-medium">New York, USA</p>
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-primary text-background-dark rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">Edit Profile</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-6">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">person</span>
                    Personal Information
                  </h4>
                  <div className="grid gap-4">
                    <div className="p-4 bg-background-light/50 dark:bg-[#102216]/50 rounded-2xl border border-[#e5ece7] dark:border-[#1e3a28]">
                      <p className="text-[10px] font-bold text-[#608a6e] uppercase tracking-widest mb-1">Full Name</p>
                      <p className="font-bold">Alex Thompson</p>
                    </div>
                    <div className="p-4 bg-background-light/50 dark:bg-[#102216]/50 rounded-2xl border border-[#e5ece7] dark:border-[#1e3a28]">
                      <p className="text-[10px] font-bold text-[#608a6e] uppercase tracking-widest mb-1">Email Address</p>
                      <p className="font-bold">alex.thompson@example.com</p>
                    </div>
                    <div className="p-4 bg-background-light/50 dark:bg-[#102216]/50 rounded-2xl border border-[#e5ece7] dark:border-[#1e3a28]">
                      <p className="text-[10px] font-bold text-[#608a6e] uppercase tracking-widest mb-1">Phone Number</p>
                      <p className="font-bold">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    Service Address
                  </h4>
                  <div className="p-6 bg-background-light/50 dark:bg-[#102216]/50 rounded-2xl border border-[#e5ece7] dark:border-[#1e3a28]">
                    <p className="font-bold mb-2">Primary Residence</p>
                    <p className="text-sm text-[#608a6e] leading-relaxed">
                      123 Maple Street, Apartment 4B<br />
                      Manhattan, New York, NY 10001<br />
                      United States
                    </p>
                    <button className="mt-4 text-primary text-xs font-bold hover:underline">Change Address</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
