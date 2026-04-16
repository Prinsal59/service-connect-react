import { Link } from 'react-router-dom'

export default function ProviderProfile() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111813] min-h-screen">
      <main className="mx-auto w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Details */}
          <div className="flex-1 w-full space-y-8">
            {/* Provider Header Card */}
            <div className="bg-white dark:bg-[#1a2e20] rounded-xl p-6 shadow-sm border border-[#dbe6df] dark:border-[#2a4434]">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="relative">
                  <div className="size-32 md:size-40 rounded-xl bg-cover bg-center border-4 border-white dark:border-[#102216] shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq97urzFzpIGq5vC7rgS2Sdby3GGQ18enJElMDTXSx4VfTc5DNH-q2UzBkpL3dwVMh8rDl_e0M9GcgaG7T8n6CUKNY5mChkyf7iiDP_FwvofeS8JG8Quokh5zSMYVGyriiHsgc3UJdHJomrC_ntxpBDr1SGLyKdHLr9VmAurpI1rfYIkFTDB5NI4llHu9vy3S-Z4oSBcYtFI0CxUQ2GmFNsCMSNdfoJ39EYSp_df_Hpvq9ba35aALKxsK-zdXUPMAcQR0SRLiHPvnI')" }}></div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-[#111813] p-1.5 rounded-lg shadow-md flex items-center justify-center">
                    <span className="material-symbols-outlined font-bold text-xl">verified</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-extrabold tracking-tight dark:text-white">Alex Rivera</h1>
                    <span className="bg-primary/20 text-[#078829] dark:text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Master Plumber</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-orange-400">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star_half</span>
                    </div>
                    <span className="text-sm font-bold dark:text-white">4.9</span>
                    <span className="text-[#608a6e] text-sm">(482 reviews)</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#608a6e] font-medium pt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">location_on</span>
                      <span>Brooklyn, NY</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">work_history</span>
                      <span>12+ Years Exp.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About & Skills */}
            <div className="bg-white dark:bg-[#1a2e20] rounded-xl p-8 shadow-sm border border-[#dbe6df] dark:border-[#2a4434] space-y-6">
              <h3 className="text-xl font-extrabold dark:text-white">About Me</h3>
              <p className="text-[#608a6e] leading-relaxed">
                Licensed master plumber with over a decade of experience in residential and commercial plumbing systems. Specializing in emergency repairs, leak detection, and full system installations. Committed to providing transparent pricing and high-quality workmanship for every client.
              </p>
              <div className="space-y-4 pt-4">
                <h4 className="font-bold dark:text-white">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {['Emergency Repairs', 'Leak Detection', 'Pipe Installation', 'Water Heater Service', 'Drain Cleaning', 'Gas Line Repair'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-background-light dark:bg-[#102216] text-sm font-semibold rounded-lg border border-[#dbe6df] dark:border-[#2a4434] dark:text-[#f0f5f1]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold dark:text-white">Client Reviews</h3>
              <div className="grid gap-4">
                {[
                  { user: 'Jessica M.', rating: 5, comment: 'Alex arrived within 30 minutes for our emergency pipe burst. Very professional and fixed the issue quickly!', date: '2 days ago' },
                  { user: 'Robert K.', rating: 5, comment: 'Excellent work installing our new water heater. Pricing was exactly as quoted. Highly recommend!', date: '1 week ago' }
                ].map((review, i) => (
                  <div key={i} className="bg-white dark:bg-[#1a2e20] rounded-xl p-6 shadow-sm border border-[#dbe6df] dark:border-[#2a4434]">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-bold dark:text-white">{review.user}</p>
                        <div className="flex text-orange-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-sm">star</span>
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-[#608a6e]">{review.date}</span>
                    </div>
                    <p className="text-sm text-[#608a6e] leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="w-full lg:w-96 sticky top-28">
            <div className="bg-white dark:bg-[#1a2e20] rounded-2xl p-6 shadow-xl border border-primary/20 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#608a6e] uppercase tracking-widest">Starting from</p>
                  <p className="text-3xl font-black text-primary">$85<span className="text-sm font-bold text-[#608a6e]">/visit</span></p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-lg text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1">
                  <span className="size-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Available Now
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full py-4 bg-primary text-background-dark font-black rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Book Service Now
                </button>
                <button className="w-full py-4 border-2 border-[#dbe6df] dark:border-[#2a4434] font-bold rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors dark:text-white">
                  Message Provider
                </button>
              </div>

              <div className="pt-6 border-t border-[#dbe6df] dark:border-[#2a4434] space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-[#608a6e]">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-[#608a6e]">
                  <span className="material-symbols-outlined text-primary">payments</span>
                  <span>No upfront payment required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
