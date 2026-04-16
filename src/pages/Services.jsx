export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <a className="hover:text-primary" href="/">Home</a>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-gray-900 dark:text-gray-100">Search Results</span>
          </nav>
          <h1 className="text-3xl font-black text-[#111813] dark:text-white">
            Service Providers in <span className="text-primary">Garden City</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">24 certified professionals available near you</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
          <span className="material-symbols-outlined text-lg">location_on</span>
          Change Location
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white dark:bg-background-dark/40 rounded-2xl p-6 border border-gray-100 dark:border-white/5 sticky top-24">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">sort</span>
                <h2 className="text-lg font-bold">Filters</h2>
              </div>
              <button className="text-xs font-bold text-primary hover:underline">Reset</button>
            </div>
            <div className="mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Categories</h3>
              <div className="space-y-3">
                {['Plumber','Carpenter','Electrician','HVAC Specialist'].map((label, i) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input defaultChecked={i===0} className="peer appearance-none w-5 h-5 border-2 border-gray-200 dark:border-white/10 rounded checked:bg-primary checked:border-primary transition-all cursor-pointer" type="checkbox" />
                      <span className="material-symbols-outlined absolute text-white text-base opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Location</h3>
              <div className="relative mb-4">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
                <input className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-white/5 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Search cities..." type="text" />
              </div>
              <div className="space-y-3">
                {['Garden City','North Hills','South River','West End'].map((label, i) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input defaultChecked={i===0} className="peer appearance-none w-5 h-5 border-2 border-gray-200 dark:border-white/10 rounded checked:bg-primary checked:border-primary transition-all cursor-pointer" type="checkbox" />
                      <span className="material-symbols-outlined absolute text-white text-base opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Minimum Rating</h3>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-500">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined text-gray-300 dark:text-gray-600">star</span>
                </div>
                <span className="text-xs font-bold text-gray-500">&amp; up</span>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Price Range</h3>
              <div className="flex gap-2 p-1 bg-gray-50 dark:bg-white/5 rounded-xl">
                <button className="flex-1 py-2 text-xs font-bold rounded-lg hover:bg-white dark:hover:bg-white/10 transition-all">$</button>
                <button className="flex-1 py-2 text-xs font-bold rounded-lg bg-primary text-white shadow-md shadow-primary/20">$$</button>
                <button className="flex-1 py-2 text-xs font-bold rounded-lg hover:bg-white dark:hover:bg-white/10 transition-all">$$$</button>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Availability</h3>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-semibold">Available Today</span>
                <div className="relative inline-block w-10 h-6 transition duration-200 ease-in-out">
                  <input className="opacity-0 w-0 h-0 peer" type="checkbox" />
                  <span className="absolute cursor-pointer inset-0 bg-gray-300 dark:bg-white/10 rounded-full transition duration-300 peer-checked:bg-primary"></span>
                  <span className="absolute left-1 bottom-1 bg-white w-4 h-4 rounded-full transition duration-300 transform peer-checked:translate-x-4"></span>
                </div>
              </label>
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'John Baker', role: 'Plumber', rating: '4.9', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9WriKgt0xzDFfqtvqYrb4JERAFjehmhBf6NqFDoLBTuENsk-Xa2Y8-NO0WiTAw2d-TYnEgPdnOBVWuSPGp-ZlAptKUrDQGzJzgo3qY5lHaJX0OTTL0bTjljIsPU_5TsV4Yh0azUuJxlENI017kZxpAjGzu92HA-0kPTnCpAEDT9Pg_ZeaXX5O6QgX-ogDvdqx-_ghiKSjcRnuOx8RFOON0k0EXZoHWi2anJsfnbZF2qJhCcpYagwTgeDnXZoOQg28Z3UBXDX6aAU', location: '0.8 miles away • Garden City', blurb: 'Master plumber with 15 years experience in residential repairs. Specialist in emergency leak detection and high-efficiency water heaters.' },
              { name: 'Mike Collins', role: 'Electrician', rating: '4.8', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhUyOJ20y-RpRxmjAQ1N3bY6SoOC9R28WUcXRfa6exbTktXE-u86kvzoE6LFL2DT8eXKClQKDr9lJarBWq-aMlgzcoOvTkBubmV3BU4xAbXh-O8dnUYL4LBr7Dj2-2UCddVVgOfvbYXyEP1n08fI5qyJFlctmEWF_SnlmUsMQyacfICirczkjtoWmHjXEujfkZW2mIsI9N6yWAcAz8gcKo5j0kTU1Y-gDBP7DqWMKgol2FaCK2HpVccON1W6LXYyHNpBA8m_-Jntiv', location: '1.2 miles away • West End', blurb: 'Licensed master electrician. Panel upgrades, smart home installations, and full residential rewiring. Guaranteed safety first approach.' },
              { name: 'Sarah Miller', role: 'Carpenter', rating: '5.0', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAUnGeYUC77sbQoU2Lix7idAGNZn9IEVGhUBuExmQ9Wye-7Yu8dbW2GwhF5QktafFySBhUrtlaBhHaVImJ5bZ7i2oDWLdtW6WR0JLig3_bzN3WgTeuVSvxjNSxPSGxGJSsYe6bIiRK_dMvaQKhuJBJCGQ161KVQkzqytfRNRqL1vW7xJRI4pcSCxTUniEEXFqwWmGMwKMNilK93trG3KJN0L46uVO55D44Mp6y_t8aCA4Aa2kycwHfYY6xicUHM5QNOG_suUX1G778', location: '2.5 miles away • Garden City', blurb: 'Expert custom cabinetry and furniture repair. Transforming old spaces into functional works of art. Precise craftsmanship in every detail.' },
              { name: 'David Chen', role: 'Plumber', rating: '4.7', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1rMe7VAftqKMitLLAlyYrt94xnaGJyfG0d-rul3rT_IfzL-1btjynIZ6-62wQP3r8Qfyh9kTY325dtQKbA6nqp_pq7ojLo3JCrhmAWzhv8OxYcXmfx64oa85KDdh89UjVvQfABPagPYL2YQUMUf7VggP-gtrXi1weRcRb1vz5PZpXLIS4_QYKw6MdoomIECbHNjllHZmrVH3v9_1cQT5N2q6qIMsi2A-dR2niujCXOrqSuq9NPvAvuTOa2zXhTAGatUnEIGDBN1pj', location: '3.1 miles away • Downtown', blurb: 'Specializing in green plumbing solutions and greywater systems. Fast response times for drain cleaning and fixture upgrades.' },
            ].map(p => (
              <div key={p.name} className="bg-white dark:bg-background-dark/40 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img className="w-16 h-16 rounded-2xl object-cover" src={p.img} alt={p.name} />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary border-2 border-white dark:border-background-dark rounded-full"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded">{p.role}</span>
                        <div className="flex items-center text-amber-500">
                          <span className="material-symbols-outlined text-sm">star</span>
                          <span className="text-xs font-bold ml-1">{p.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-[#111813] dark:text-white group-hover:text-primary transition-colors">{p.name}</h3>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">location_on</span>
                        {p.location}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-6">{p.blurb}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-white/5">
                  <a href="/request-success" className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all">Request Visit</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 font-bold hover:text-primary transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 font-bold hover:text-primary transition-colors">3</button>
            <span className="text-gray-400 px-2">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden">
        <button className="bg-background-dark text-white dark:bg-primary px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl font-bold">
          <span className="material-symbols-outlined">map</span>
          Show Map
        </button>
      </div>
    </div>
  )
}
