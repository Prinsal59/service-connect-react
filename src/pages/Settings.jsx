import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-[#111813]">
      <aside className="w-72 bg-white dark:bg-[#1a2e20] border-r border-[#dbe6df] dark:border-[#2a4434] flex flex-col fixed h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-primary rounded-lg size-10 flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-background-dark font-bold">hub</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#111813] dark:text-white text-lg font-bold leading-tight">Service Connect</h1>
              <p className="text-[#608a6e] dark:text-[#a0c4ac] text-xs font-medium uppercase tracking-wider">Startup Plan</p>
            </div>
          </div>
          <nav className="flex-1 flex flex-col gap-2">
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#608a6e] dark:text-[#a0c4ac] hover:bg-[#f0f5f1] dark:hover:bg-[#2a4434]" to="/">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </Link>
            <div className="my-4 border-t border-[#dbe6df] dark:border-[#2a4434]"></div>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#111813] dark:text-white bg-primary/10 border-l-4 border-primary" to="/settings">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-bold">Settings</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#608a6e] dark:text-[#a0c4ac] hover:bg-[#f0f5f1] dark:hover:bg-[#2a4434]" to="/change-password">
              <span className="material-symbols-outlined">password</span>
              <span className="text-sm font-semibold">Change Password</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20" to="/delete-account">
              <span className="material-symbols-outlined">delete_forever</span>
              <span className="text-sm font-semibold">Delete Account</span>
            </Link>
          </nav>
        </div>
      </aside>
      <main className="ml-72 flex-1 p-8 pb-20">
        <header className="flex justify-between items-end mb-8">
          <div>
            <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-widest">Preference Center</p>
            <h1 className="text-4xl font-extrabold text-[#111813] dark:text-white tracking-tight">Settings</h1>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] text-[#111813] dark:text-white text-sm font-bold hover:bg-white dark:hover:bg-[#102216] transition-all shadow-sm">Cancel</button>
            <button className="px-6 py-2.5 rounded-xl bg-primary text-background-dark text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">Save Changes</button>
          </div>
        </header>
        <div className="flex border-b border-[#dbe6df] dark:border-[#2a4434] mb-8 gap-10">
          <button className="pb-4 text-sm font-bold border-b-2 border-primary text-[#111813] dark:text-white">Account Settings</button>
          <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-[#608a6e] dark:text-[#a0c4ac] hover:text-[#111813] dark:hover:text-white">Notifications</button>
          <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-[#608a6e] dark:text-[#a0c4ac] hover:text-[#111813] dark:hover:text-white">Privacy & Security</button>
          <button className="pb-4 text-sm font-bold border-b-2 border-transparent text-[#608a6e] dark:text-[#a0c4ac] hover:text-[#111813] dark:hover:text-white">Payment Methods</button>
        </div>
        <section className="bg-white dark:bg-[#1a2e20] rounded-xl border border-[#dbe6df] dark:border-[#2a4434] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#f0f5f1] dark:border-[#2a4434] flex justify-between items-center bg-[#fcfdfc] dark:bg-[#102216]/50">
            <h2 className="text-lg font-bold text-[#111813] dark:text-white">Account Details</h2>
            <span className="bg-primary/20 text-[#0a8c34] dark:text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase">Verified Account</span>
          </div>
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#608a6e] dark:text-[#a0c4ac] uppercase tracking-wider">Full Name</label>
                <input className="w-full px-4 py-3 rounded-lg border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] focus:ring-2 focus:ring-primary focus:border-primary outline-none text-[#111813] dark:text-white font-medium transition-all" type="text" defaultValue="Alex Rivera" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#608a6e] dark:text-[#a0c4ac] uppercase tracking-wider">Email Address</label>
                <input className="w-full px-4 py-3 rounded-lg border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] focus:ring-2 focus:ring-primary focus:border-primary outline-none text-[#111813] dark:text-white font-medium transition-all" type="email" defaultValue="alex.rivera@serviceconnect.io" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
