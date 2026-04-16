import { Link, useNavigate } from 'react-router-dom'

export default function ProviderDashboard() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('userRole')
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-[#111813]">
      <aside className="w-64 border-r border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#1a2e20] flex flex-col fixed h-full z-10">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-symbols-outlined text-background-dark">home_repair_service</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight dark:text-white">Service Connect</h2>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-1">
          <Link to="/provider-dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-background-dark font-semibold shadow-sm">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#608a6e] dark:text-[#a0c4ac] hover:bg-[#f0f5f1] dark:hover:bg-[#2a4434] transition-colors">
            <span className="material-symbols-outlined">calendar_today</span>
            Schedule
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#608a6e] dark:text-[#a0c4ac] hover:bg-[#f0f5f1] dark:hover:bg-[#2a4434] transition-colors">
            <span className="material-symbols-outlined">payments</span>
            Earnings
          </Link>
          <Link to="/provider-jobs" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#608a6e] dark:text-[#a0c4ac] hover:bg-[#f0f5f1] dark:hover:bg-[#2a4434] transition-colors">
            <span className="material-symbols-outlined">work</span>
            My Jobs
            <span className="ml-auto bg-primary text-[10px] px-2 py-0.5 rounded-full font-bold text-background-dark">4</span>
          </Link>
          <Link to="/provider-profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#608a6e] dark:text-[#a0c4ac] hover:bg-[#f0f5f1] dark:hover:bg-[#2a4434] transition-colors">
            <span className="material-symbols-outlined">person</span>
            Profile
          </Link>
          <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#608a6e] dark:text-[#a0c4ac] hover:bg-[#f0f5f1] dark:hover:bg-[#2a4434] transition-colors">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-[#dbe6df] dark:border-[#2a4434]">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-semibold text-sm">Logout</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 ml-64 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold dark:text-white">Good morning, Marcus!</h1>
            <p className="text-[#608a6e] dark:text-[#a0c4ac]">You have 3 jobs scheduled for today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 bg-white dark:bg-[#1a2e20] border border-[#dbe6df] dark:border-[#2a4434] rounded-xl hover:bg-background-light dark:hover:bg-[#2a4434] transition-colors">
              <span className="material-symbols-outlined dark:text-[#a0c4ac]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2e20]"></span>
            </button>
            <Link to="/provider-profile" className="flex items-center gap-3 bg-white dark:bg-[#1a2e20] p-2 border border-[#dbe6df] dark:border-[#2a4434] rounded-xl">
              <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7svH350Z3HRpDhMgFm5-ZDrzmJkedahxBD-8sU17sDHoAKVEccTZn6hqFhmA5XIfmMxvfgNK6DDUzHTLe2X6tysmajvEWfjA1eqMsnsBliua4Gpu4_UBl0T5LBTzSmY7PqRF5ZB64OkTsbUUWbgnLzf8CbI_bc5_TmQAJwbM2zrNX7FuZLefYDvwbzF-p8napo5C_Kri79dzCYSwxvXc-ZmqGy-CkIRE1uvPFt77xEpK5JUhMfmpDhWLKXxUuohpxj2u3xO-sPYs")' }}></div>
              <div className="hidden md:block">
                <p className="text-sm font-bold leading-none dark:text-white">Marcus Miller</p>
                <p className="text-xs text-[#608a6e] dark:text-[#a0c4ac]">Master Electrician</p>
              </div>
            </Link>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-[#1a2e20] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] shadow-sm">
            <div className="flex items-center gap-4 mb-2 text-[#608a6e] dark:text-[#a0c4ac]">
              <span className="material-symbols-outlined">account_balance_wallet</span>
              <span className="text-sm font-medium uppercase tracking-tight">Total Earnings</span>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-extrabold leading-none dark:text-white">$12,840.00</p>
              <span className="text-xs font-bold text-primary flex items-center mb-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +12%
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-[#1a2e20] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] shadow-sm">
            <div className="flex items-center gap-4 mb-2 text-[#608a6e] dark:text-[#a0c4ac]">
              <span className="material-symbols-outlined">task_alt</span>
              <span className="text-sm font-medium uppercase tracking-tight">Jobs Completed</span>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-extrabold leading-none dark:text-white">156</p>
              <span className="text-xs font-bold text-primary flex items-center mb-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +5%
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-[#1a2e20] p-6 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] shadow-sm">
            <div className="flex items-center gap-4 mb-2 text-[#608a6e] dark:text-[#a0c4ac]">
              <span className="material-symbols-outlined">star</span>
              <span className="text-sm font-medium uppercase tracking-tight">Avg. Rating</span>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-extrabold leading-none dark:text-white">4.9</p>
              <span className="text-xs font-bold text-primary flex items-center mb-1">
                <span className="material-symbols-outlined text-sm">star</span>
                Top Pro
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
