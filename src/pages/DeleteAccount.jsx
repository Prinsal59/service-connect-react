import { Link } from 'react-router-dom'

export default function DeleteAccount() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] antialiased min-h-screen">
      <main className="flex flex-1 justify-center py-10 px-4">
        <div className="layout-content-container flex w-full max-w-[720px] flex-col gap-8">
          {/* Hero Warning Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-red-600">
              <span className="material-symbols-outlined text-sm font-bold">warning</span>
              <span className="text-xs font-bold uppercase tracking-wider">Security & Privacy</span>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#111813] dark:text-white">Delete Your Account?</h1>
            <p className="text-lg text-[#608a6e] dark:text-[#a0c4ac]">This action is permanent. Once your account is deleted, your data cannot be recovered. Please take a moment to review what will be lost.</p>
          </div>

          {/* Impact Card */}
          <div className="overflow-hidden rounded-xl border border-red-200 dark:border-red-900/30 bg-white dark:bg-[#1a2e20] shadow-sm">
            <div className="bg-red-50 dark:bg-red-900/10 px-6 py-4 border-b border-red-100 dark:border-red-900/20">
              <h3 className="flex items-center gap-2 text-lg font-bold text-red-600">
                <span className="material-symbols-outlined">report</span>
                Warning: Irreversible Action
              </h3>
            </div>
            <div className="p-6">
              <p className="mb-6 text-sm font-medium uppercase tracking-widest text-[#608a6e] dark:text-[#a0c4ac]">What you will lose forever:</p>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="flex items-start gap-4 rounded-lg bg-background-light dark:bg-[#102216] p-4 border border-primary/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-[#1a2e20] text-red-600 shadow-sm">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-[#111813] dark:text-white">Active Bookings</p>
                    <p className="text-sm text-[#608a6e] dark:text-[#a0c4ac]">All upcoming appointments will be cancelled immediately.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg bg-background-light dark:bg-[#102216] p-4 border border-primary/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-[#1a2e20] text-red-600 shadow-sm">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-[#111813] dark:text-white">Transaction History</p>
                    <p className="text-sm text-[#608a6e] dark:text-[#a0c4ac]">Access to past invoices and payment receipts will be revoked.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Form */}
          <div className="bg-white dark:bg-[#1a2e20] p-8 rounded-2xl border border-[#dbe6df] dark:border-[#2a4434] shadow-sm space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#111813] dark:text-white">To confirm, type "DELETE" below:</label>
              <input 
                type="text" 
                placeholder="Type DELETE"
                className="w-full h-12 px-4 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white focus:ring-2 focus:ring-red-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-[#111813] dark:text-white">Enter your password to verify:</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white focus:ring-2 focus:ring-red-500 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 h-12 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-500/20 active:scale-[0.98]">
                Delete Permanently
              </button>
              <Link to="/settings" className="flex-1 h-12 flex items-center justify-center bg-background-light dark:bg-[#102216] text-[#111813] dark:text-white font-bold rounded-xl hover:bg-[#dbe6df] dark:hover:bg-[#2a4434] transition-all">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
