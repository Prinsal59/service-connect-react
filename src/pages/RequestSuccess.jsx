export default function RequestSuccess() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-[#0df259]/10 bg-white dark:bg-background-dark px-6 md:px-20 lg:px-40 py-3 shadow-sm">
        <div className="flex items-center gap-4 text-[#112216] dark:text-white">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined">hub</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Service Connect</h2>
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <a href="/settings" className="flex items-center justify-center rounded-xl h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20">
              <span className="material-symbols-outlined">settings</span>
            </a>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDD3fN2cpiivrxtDJVGH022ew9Spcvx2lzrMyjw_MEbUAW4sDowE8F6rk1BID0EcXbQQHqqf1siLjhS59j-bGaSZDY6j2-UHltTIi6UyYbPhWxtMbCoS54S3V0Pj3KHXelpIoQAoyOllDfoBL-RbNq2HkVTEMUDrwbJhzBYaYuFolwjK53-T-DN0kv4dukmtIi2BojYlzOxeV0w8z2J-I24R0UpXriVLG7x9JK6X6Iwm0BTAUuQllCmM7REkg-n94X-w2lU_17pnUp4")' }}></div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-black">
        <div className="max-w-[560px] w-full bg-white dark:bg-zinc-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] overflow-hidden border border-[#0df259]/10">
          <div className="h-48 w-full bg-primary/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0df259 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="bg-white dark:bg-background-dark rounded-full p-6 shadow-xl relative z-10 border-4 border-primary">
              <span className="material-symbols-outlined text-primary text-6xl font-bold">check_circle</span>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col items-center text-center">
            <h1 className="text-[#112216] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] mb-4">Request Sent!</h1>
            <p className="text-[#608a6e] dark:text-zinc-400 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-[400px]">
              Your request has been sent to the provider. They will review it and get back to you shortly.
            </p>
            <div className="w-full mb-10 bg-background-light dark:bg-zinc-800/50 p-6 rounded-lg">
              <p className="text-xs font-bold text-[#608a6e] uppercase tracking-wider mb-6">Current Status</p>
              <div className="grid grid-cols-[32px_1fr] gap-x-4 text-left">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                  <div className="w-[2px] bg-primary h-8 my-1"></div>
                </div>
                <div className="pb-6">
                  <p className="text-[#112216] dark:text-white text-sm font-bold">Request Submitted</p>
                  <p className="text-[#608a6e] dark:text-zinc-400 text-xs">Today</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#608a6e]/40 text-2xl">schedule</span>
                  <div className="w-[2px] bg-[#608a6e]/20 h-8 my-1"></div>
                </div>
                <div className="pb-6">
                  <p className="text-[#608a6e] dark:text-zinc-500 text-sm font-bold">Provider Review</p>
                  <p className="text-[#608a6e]/60 dark:text-zinc-500 text-xs">Usually takes 2-4 hours</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-[#608a6e]/40 text-2xl">calendar_today</span>
                </div>
                <div>
                  <p className="text-[#608a6e] dark:text-zinc-500 text-sm font-bold">Service Scheduled</p>
                  <p className="text-[#608a6e]/60 dark:text-zinc-500 text-xs">Awaiting confirmation</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full items-center">
              <a href="/customer-dashboard" className="flex items-center justify-center rounded-xl h-14 bg-primary text-[#112216] text-base font-bold hover:scale-[1.02] hover:shadow-lg active:scale-95 w-full sm:w-64 mx-auto">
                Go to Dashboard
              </a>
            </div>
            <button className="mt-8 text-[#608a6e] hover:text-primary transition-colors text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">print</span>
              Print Receipt
            </button>
          </div>
        </div>
      </main>
      <footer className="py-10 text-center">
        <p className="text-[#608a6e] dark:text-zinc-500 text-sm">
          Need help? <a className="text-primary font-bold underline underline-offset-4" href="#">Contact Support</a>
        </p>
      </footer>
    </div>
  )
}

