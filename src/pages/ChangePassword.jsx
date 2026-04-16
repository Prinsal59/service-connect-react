export default function ChangePassword() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-xl border border-[#dbe6df] dark:border-slate-800 shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-background-dark">lock</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">Change Password</h1>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#608a6e]">Current Password</label>
            <input className="w-full px-4 py-3 rounded-lg border border-[#dbe6df] dark:border-slate-700 bg-white dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#608a6e]">New Password</label>
            <input className="w-full px-4 py-3 rounded-lg border border-[#dbe6df] dark:border-slate-700 bg-white dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#608a6e]">Confirm New Password</label>
            <input className="w-full px-4 py-3 rounded-lg border border-[#dbe6df] dark:border-slate-700 bg-white dark:bg-background-dark focus:ring-2 focus:ring-primary focus:border-primary outline-none" type="password" placeholder="••••••••" />
          </div>
          <div className="flex justify-end gap-3">
            <a href="/settings" className="px-6 py-2.5 rounded-xl border border-[#dbe6df] text-[#111813] text-sm font-bold hover:bg-white">Cancel</a>
            <button type="button" className="px-6 py-2.5 rounded-xl bg-primary text-background-dark text-sm font-bold hover:shadow-lg hover:shadow-primary/20">Save Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

