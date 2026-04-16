import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              Trusted by 10,000+ Homeowners
            </span>
            <h2 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 dark:text-white">
              Expert Home Services, <span className="text-primary">One Click Away.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
              Find verified professionals for plumbing, electrical work, carpentry, and more. Transparent pricing, guaranteed quality.
            </p>
            <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl shadow-primary/5 flex flex-col md:flex-row gap-2 border border-primary/10">
              <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-slate-400">search</span>
                <input className="w-full py-4 border-none focus:ring-0 bg-transparent text-sm" placeholder="What service do you need?" type="text" />
              </div>
              <div className="flex-1 flex items-center px-4 gap-3">
                <span className="material-symbols-outlined text-slate-400">location_on</span>
                <input className="w-full py-4 border-none focus:ring-0 bg-transparent text-sm" placeholder="Your City" type="text" />
              </div>
              <button className="bg-primary text-background-dark font-bold px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                Find Service
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <img
                alt="Professional home service provider working"
                className="w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzEAQMxxCh9ObrT9WncmwLnSyITLJL54WXdZZA7owJbtCts0jmxCXmY1CDEkW3V-O6eJomnHyT3uIGMImaqOkimxdhWvssrMF1VOv4I5MyIbND6KuCD3elu_v4WduiaI_8UkriZBtn743gXuCAbEwpLkTJLFKLy0HIY38jJxiI6JOOIWw8oFs-7yq8qIcaC5a0-DDNCJlPAzefJCF7n4Q2Ff-uNdvJvba3lKAdyg0wlQoF929V3xWPD3D2MjqfgyDA1OAnwKGL0AT0"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background-dark">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Verified Pro</p>
                <p className="text-lg font-extrabold dark:text-white">4.9/5 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-background-dark" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h3 className="text-3xl font-extrabold mb-4 dark:text-white">Our Top Rated Services</h3>
              <p className="text-slate-600 dark:text-slate-400">Choose from a wide range of professional home services tailored to your needs.</p>
            </div>
            <Link to="/services" className="group flex items-center gap-2 font-bold text-primary">
              View All Services
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-background-light dark:bg-slate-900 border border-transparent hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-3xl">plumbing</span>
              </div>
              <h4 className="text-xl font-extrabold mb-3 dark:text-white">Plumber</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Expert fixing for leaks, pipe replacements, and emergency plumbing issues.</p>
              <Link to="/services" className="block text-center w-full py-3 rounded-xl border-2 border-slate-200 dark:border-slate-800 font-bold group-hover:bg-primary group-hover:border-primary group-hover:text-background-dark transition-all">
                Book Service
              </Link>
            </div>
            <div className="group p-8 rounded-3xl bg-background-light dark:bg-slate-900 border border-transparent hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-3xl">electric_bolt</span>
              </div>
              <h4 className="text-xl font-extrabold mb-3 dark:text-white">Electrician</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Safe wiring, fixture installations, and complete circuit diagnostics.</p>
              <Link to="/services" className="block text-center w-full py-3 rounded-xl border-2 border-slate-200 dark:border-slate-800 font-bold group-hover:bg-primary group-hover:border-primary group-hover:text-background-dark transition-all">
                Book Service
              </Link>
            </div>
            <div className="group p-8 rounded-3xl bg-background-light dark:bg-slate-900 border border-transparent hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-3xl">carpenter</span>
              </div>
              <h4 className="text-xl font-extrabold mb-3 dark:text-white">Carpenter</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Custom furniture repairs, cabinet installations, and detailed woodwork.</p>
              <Link to="/services" className="block text-center w-full py-3 rounded-xl border-2 border-slate-200 dark:border-slate-800 font-bold group-hover:bg-primary group-hover:border-primary group-hover:text-background-dark transition-all">
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h3 className="text-4xl font-extrabold mb-6 dark:text-white">How it Works</h3>
            <p className="text-slate-600 dark:text-slate-400">Getting your home fixed has never been this simple. Follow these three easy steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary/20 text-primary font-extrabold text-3xl rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-background-light dark:ring-background-dark">
                01
              </div>
              <h5 className="text-xl font-extrabold mb-4 dark:text-white">Search Service</h5>
              <p className="text-slate-600 dark:text-slate-400">Tell us what you need and where. We'll show you top pros in your area.</p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary text-background-dark font-extrabold text-3xl rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-background-light dark:ring-background-dark">
                02
              </div>
              <h5 className="text-xl font-extrabold mb-4 dark:text-white">Choose &amp; Book</h5>
              <p className="text-slate-600 dark:text-slate-400">Compare ratings, reviews, and prices. Book a time that works for you.</p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-primary/20 text-primary font-extrabold text-3xl rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-background-light dark:ring-background-dark">
                03
              </div>
              <h5 className="text-xl font-extrabold mb-4 dark:text-white">Relax &amp; Smile</h5>
              <p className="text-slate-600 dark:text-slate-400">The pro gets the job done. You pay securely through the platform.</p>
            </div>
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[2px] bg-primary/20 -z-0"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-background-dark" id="reviews">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h3 className="text-4xl font-extrabold mb-4 dark:text-white">What our Customers Say</h3>
            <div className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="ml-2 font-bold text-slate-900 dark:text-white">4.9 Overall Rating</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-background-light dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <img
                  alt="Customer avatar"
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZtd_kvEsusJpqiY3_O3aQo-Un1iOf37bGxH5mrZfQPDaYqTRoyq8kMzxAZliz77E13DQG8SjXsUM8BOKBTlFlsXBpyVQ0M9PiaMoh1BA0ItFfqtEp0FeMYnQrFyIsqS_xgWyZzXfVuLEv3EWvDQMC4qzgOaIrAMl_lHhtNZLT4zDV7Uoknz8ursZvqs8BkdY6rr6nQRz6IYGyzG3CBBafshkpUl9gnzRhrHU7LXPtOm2buDAXmZBm08d-goaPGCW7V72tjRdvfvdj"
                />
                <div>
                  <h5 className="font-bold dark:text-white">Amina K.</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Verified Customer</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Great service and quick response! The plumber arrived on time and fixed the issue professionally.
              </p>
            </div>
            <div className="p-8 bg-background-light dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-[#111813]">JR</div>
                <div>
                  <h5 className="font-bold dark:text-white">John R.</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Verified Customer</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Booking was easy and the electrician was fantastic. Highly recommend!
              </p>
            </div>
            <div className="p-8 bg-background-light dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-[#111813]">LS</div>
                <div>
                  <h5 className="font-bold dark:text-white">Lena S.</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Verified Customer</p>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                The carpenter fixed my cabinet perfectly. Very happy with the service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

