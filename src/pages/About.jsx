export default function About() {
  return (
    <main className="flex-1">
      <section className="relative px-6 py-12 lg:px-20 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase">Our Mission</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                Connecting You to Better <span className="text-primary">Home Services</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                We're on a mission to simplify home maintenance by providing a seamless, reliable platform that connects professional service providers with homeowners who value quality.
              </p>
              <div className="flex gap-4">
                <a href="/services" className="bg-primary text-background-dark px-8 py-3 rounded-lg font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-all">Explore Services</a>
                <a href="#our-story" className="border-2 border-slate-200 dark:border-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Our Story</a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-xl overflow-hidden aspect-video shadow-2xl">
                <img
                  alt="Professional home service technician working"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQdnnqxx1nttcMDrN5AZwG3pNJc1gvT7hSZuFBP-vZsNTk2wZlTap7__m46iB166JBGNtE6TwVkZp4jRWRDX3SfQUEs38vsjxZHXA-wAaXoRudl23zdunL6h0IWjyDf0YVhsWDyyIUblQH4IiPDk8LDejLS9g30vmj3GzCsFDNxsUXJ5ih7iB-xsrcHJ1Qgfme15ubWxrrFSt7FnDcwe05gjekIIA5Am0EBkhUDxJqfR0hgGAp-9JYIolLzO_7hcCePteBrOd42i5O"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <span className="material-symbols-outlined text-primary text-4xl mb-2">verified_user</span>
            <p className="text-3xl font-black text-slate-900 dark:text-white">1,000+</p>
            <p className="text-slate-500 font-medium">Verified Providers</p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <span className="material-symbols-outlined text-primary text-4xl mb-2">sentiment_satisfied</span>
            <p className="text-3xl font-black text-slate-900 dark:text-white">5,000+</p>
            <p className="text-slate-500 font-medium">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <span className="material-symbols-outlined text-primary text-4xl mb-2">location_city</span>
            <p className="text-3xl font-black text-slate-900 dark:text-white">50+</p>
            <p className="text-slate-500 font-medium">Cities Covered</p>
          </div>
        </div>
      </section>

      <section id="our-story" className="px-6 py-20 lg:px-20 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img alt="Service team" className="rounded-lg shadow-md mt-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCc4etklvLUIo5CPpKj3kbOv4fyff2fK6ERnD5RJUWtsRDTFEQ1NjBC36LiQDIkny7vFIhU8LRE2v-FFtq73pdx8hl6f9m70DJkzBe_ywVaZqFGRo6ws7TD_xUiGWpnfG3MjLP43_N-A2Dm-bZHWYcMgWL9Zt2lv6exuR7xEWZ45OCER8uJdAnakCi1qo4rAvQPw0WjSBNqYDAwhOgPCOyIgiOZ061LAlWf3kDhd967NoqOMTqZ8iNrWrkg5rwBNMVOYU_WSx99e3F" />
                <img alt="Tools" className="rounded-lg shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4mQjr_e6fIzLwU2xX7kyQEvv9tJHr7JqZRqABWNyOkkKvkxdi9lDnCOgRTbCh80Lrk5n66ycAeifXA17_bvqqGJNeMa3XGOZpXYeYqA_A9NSchQNEldbLozTkkXHRguwbE8qad_PO8Xte1sFH731EYPl_xkewIzWhQ8j0MxZkdNC61VpPTuugcGQL0ptMc1fvAsd-DN4W7cexByk3wxcqDYjLfs-9NTtsDxr0iqx9mjKCaIW6iIxteb4Ptz8HB2WlY3nDrh5wcH6H" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Story</h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Founded in 2021, Service Connect began with a simple observation: finding trustworthy home service professionals was unnecessarily difficult. The process was fragmented, unreliable, and lacked transparency.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                We built a platform that prioritizes three core pillars: transparency, quality, and convenience. What started as a small team in a single city has grown into a community of thousands of dedicated professionals helping homeowners reclaim their time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-20 mb-20">
        <div className="max-w-6xl mx-auto rounded-3xl bg-background-dark dark:bg-primary p-12 lg:p-20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white dark:text-background-dark text-3xl lg:text-5xl font-black mb-6 relative z-10">Ready to simplify your home maintenance?</h2>
          <p className="text-slate-300 dark:text-background-dark/80 text-lg mb-10 max-w-xl relative z-10">Join thousands of homeowners who trust Service Connect for their daily home needs.</p>
          <a href="/" className="bg-primary dark:bg-background-dark text-background-dark dark:text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform relative z-10">
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}

