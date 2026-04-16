import { Link } from 'react-router-dom'

export default function BookService() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] antialiased min-h-screen">
      <main className="max-w-[800px] mx-auto py-10 px-4 md:px-0">
        {/* Step Indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-[#608a6e]">Progress</span>
              <h2 className="text-2xl font-bold text-[#111813] dark:text-white">Book Your Service</h2>
            </div>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">Step 2 of 4</span>
          </div>
          <div className="w-full bg-[#dbe6df] dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-1/2 rounded-full transition-all duration-500"></div>
          </div>
          <div className="flex justify-between mt-3 text-xs font-medium text-[#608a6e]">
            <span>Service Type</span>
            <span className="text-[#111813] dark:text-white font-bold">Details</span>
            <span>Schedule</span>
            <span>Review</span>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white dark:bg-[#1a2e20] rounded-xl shadow-sm border border-[#dbe6df] dark:border-[#2a4434] overflow-hidden">
          {/* Step 1: Service Selection */}
          <div className="p-8 border-b border-[#dbe6df] dark:border-[#2a4434] bg-background-light/50 dark:bg-[#102216]/50">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 dark:text-white">
              <span className="bg-primary text-background-dark size-6 rounded-full flex items-center justify-center text-xs">1</span>
              What service do you need?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-primary bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-3xl text-primary font-bold">plumbing</span>
                <span className="font-bold text-[#111813] dark:text-white">Plumber</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] hover:border-primary/50 transition-all">
                <span className="material-symbols-outlined text-3xl text-[#608a6e]">handyman</span>
                <span className="font-bold text-[#111813] dark:text-white">Carpenter</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] hover:border-primary/50 transition-all">
                <span className="material-symbols-outlined text-3xl text-[#608a6e]">electric_bolt</span>
                <span className="font-bold text-[#111813] dark:text-white">Electrician</span>
              </button>
            </div>
          </div>

          {/* Step 2: Details */}
          <div className="p-8 space-y-8">
            <h3 className="text-lg font-bold flex items-center gap-2 dark:text-white">
              <span className="bg-primary text-background-dark size-6 rounded-full flex items-center justify-center text-xs">2</span>
              Problem Details
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#111813] dark:text-white">Describe the issue</label>
                <textarea 
                  className="w-full p-4 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all h-32"
                  placeholder="Tell us what needs fixing (e.g., kitchen tap leaking, bathroom pipe burst...)"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#111813] dark:text-white">Urgency Level</label>
                  <select className="w-full p-4 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all">
                    <option>Normal (Within 2-3 days)</option>
                    <option>Urgent (Today or Tomorrow)</option>
                    <option>Emergency (As soon as possible)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#111813] dark:text-white">Preferred Time</label>
                  <select className="w-full p-4 rounded-xl border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all">
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#111813] dark:text-white">Upload Photos (Optional)</label>
                <div className="border-2 border-dashed border-[#dbe6df] dark:border-[#2a4434] rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-[#608a6e]">add_a_photo</span>
                  <p className="text-sm font-medium text-[#608a6e]">Click to upload or drag and drop</p>
                  <p className="text-[10px] text-[#608a6e]/60">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-8 bg-background-light/30 dark:bg-[#102216]/30 border-t border-[#dbe6df] dark:border-[#2a4434] flex items-center justify-between">
            <button className="px-8 py-3.5 text-sm font-bold text-[#608a6e] hover:text-[#111813] transition-colors">Cancel</button>
            <Link to="/customer-booking" className="px-8 py-3.5 bg-primary text-background-dark rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Continue to Booking
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
