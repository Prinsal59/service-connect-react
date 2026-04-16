import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [role, setRole] = useState('customer')
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e0e7e1] dark:border-[#1e3a24] bg-white dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3 text-[#111813] dark:text-white">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[#111813] font-bold">handshake</span>
          </div>
          <h2 className="text-[#111813] dark:text-white text-xl font-extrabold leading-tight tracking-tight">Service Connect</h2>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="flex min-w-[84px] items-center justify-center rounded-xl h-10 px-5 bg-primary text-[#111813] text-sm font-bold tracking-wide active:scale-95">
            Login
          </Link>
        </div>
      </div>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[1000px] grid md:grid-cols-2 bg-white dark:bg-[#162a1c] rounded-2xl shadow-2xl overflow-hidden border border-[#e0e7e1] dark:border-[#1e3a24]">
          <div className="hidden md:flex flex-col justify-between p-12 bg-[#1e3a8a] relative overflow-hidden">
            <div className="z-10">
              <h1 className="text-4xl font-extrabold text-white mb-6 leading-tight">Find the perfect expert for your next project.</h1>
              <p className="text-blue-100 text-lg opacity-90">Join over 50,000 professionals and customers connecting every day to get things done.</p>
            </div>
            <div className="z-10 grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-primary mb-2">verified_user</span>
                <p className="text-white font-bold text-sm">Verified Experts</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-primary mb-2">payments</span>
                <p className="text-white font-bold text-sm">Secure Payments</p>
              </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            <img
              alt="Professional service provider at work"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMhbZlFwc2Jm0Ut9fpJpIStQq7GnBhknNhqWY5q-nr3fZz7DsNVl4QiBtq0UgVpuuIGy_Xqfm1ys1dlNisyIA6hk0eWXTnwsjLbA-oA2dZ2LOx1XUGTSOv5SuxQ80qdZ85mP81YGYamzSvIS4NDt2dHDYQSYLAFM1dEW3irJanReVtAoEqezOf7zMlUPqANxNvFlsixvJTh8RiaHmBlYoJkZYLTE3NlRGgdkaUPR7VtRVUIDiuQ5roH3_9NwYWHYbKNPf3xw4B8l0V"
            />
          </div>
          <div className="p-6 md:p-10 lg:p-12 overflow-y-auto max-h-[90vh]">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#111813] dark:text-white mb-2">Create an account</h2>
              <p className="text-[#608a6e] dark:text-gray-400">Step into the future of local services</p>
            </div>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-sm font-bold text-[#111813] dark:text-gray-300">I am a...</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`cursor-pointer flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all hover:border-primary/50 ${role==='customer' ? 'border-primary bg-primary/5' : 'border-[#f0f5f1] dark:border-[#2a3d2f]'}`}>
                    <input className="hidden" type="radio" name="role" value="customer" checked={role==='customer'} onChange={() => setRole('customer')} />
                    <div className={`size-10 rounded-full flex items-center justify-center mb-2 transition-colors ${role==='customer' ? 'bg-primary text-[#111813]' : 'bg-[#f0f5f1] dark:bg-[#2a3d2f]'}`}>
                      <span className="material-symbols-outlined text-xl">person</span>
                    </div>
                    <span className="font-bold text-sm text-[#111813] dark:text-white">Customer</span>
                  </label>
                  <label className={`cursor-pointer flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all hover:border-primary/50 ${role==='provider' ? 'border-primary bg-primary/5' : 'border-[#f0f5f1] dark:border-[#2a3d2f]'}`}>
                    <input className="hidden" type="radio" name="role" value="provider" checked={role==='provider'} onChange={() => setRole('provider')} />
                    <div className={`size-10 rounded-full flex items-center justify-center mb-2 transition-colors ${role==='provider' ? 'bg-primary text-[#111813]' : 'bg-[#f0f5f1] dark:bg-[#2a3d2f]'}`}>
                      <span className="material-symbols-outlined text-xl">engineering</span>
                    </div>
                    <span className="font-bold text-sm text-[#111813] dark:text-white">Provider</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="first_name" className="text-xs font-bold uppercase tracking-wider text-[#608a6e] dark:text-gray-400">First Name</label>
                    <input id="first_name" type="text" placeholder="John" className="w-full rounded-xl border-[#f0f5f1] dark:border-[#2a3d2f] dark:bg-[#1e3a24] dark:text-white focus:ring-primary focus:border-primary text-sm py-3" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="last_name" className="text-xs font-bold uppercase tracking-wider text-[#608a6e] dark:text-gray-400">Last Name</label>
                    <input id="last_name" type="text" placeholder="Doe" className="w-full rounded-xl border-[#f0f5f1] dark:border-[#2a3d2f] dark:bg-[#1e3a24] dark:text-white focus:ring-primary focus:border-primary text-sm py-3" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#608a6e] dark:text-gray-400">Email Address</label>
                  <input id="email" type="email" placeholder="john@example.com" className="w-full rounded-xl border-[#f0f5f1] dark:border-[#2a3d2f] dark:bg-[#1e3a24] dark:text-white focus:ring-primary focus:border-primary text-sm py-3" />
                </div>
              </div>
              <div className="space-y-4 border-t border-[#f0f5f1] dark:border-[#2a3d2f] pt-4">
                <label className="text-sm font-bold text-[#111813] dark:text-gray-300 block">Service Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: 'plumbing', label: 'Plumber' },
                    { icon: 'bolt', label: 'Electrician', active: true },
                    { icon: 'carpenter', label: 'Carpenter' },
                  ].map((c) => (
                    <button key={c.label} type="button" className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-colors ${c.active ? 'border-2 border-primary bg-primary/10' : 'border-[#f0f5f1] dark:border-[#2a3d2f] hover:bg-primary/10'}`}>
                      <span className="material-symbols-outlined text-[#608a6e] dark:text-gray-400">{c.icon}</span>
                      <span className="text-[10px] font-bold mt-1 dark:text-white">{c.label}</span>
                    </button>
                  ))}
                </div>
                <div className="space-y-1">
                  <label htmlFor="experience" className="text-xs font-bold uppercase tracking-wider text-[#608a6e] dark:text-gray-400">Years of Experience</label>
                  <select id="experience" className="w-full rounded-xl border-[#f0f5f1] dark:border-[#2a3d2f] dark:bg-[#1e3a24] dark:text-white focus:ring-primary focus:border-primary text-sm py-3">
                    <option>Less than 1 year</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-[#608a6e] dark:text-gray-400">Password</label>
                <input id="password" type="password" placeholder="••••••••" className="w-full rounded-xl border-[#f0f5f1] dark:border-[#2a3d2f] dark:bg-[#1e3a24] dark:text-white focus:ring-primary focus:border-primary text-sm py-3" />
                <p className="text-[10px] text-[#608a6e] dark:text-gray-400 italic">Must be at least 8 characters long.</p>
              </div>
              <div className="flex items-start gap-3">
                <input id="terms" type="checkbox" className="mt-1 rounded border-[#f0f5f1] text-primary focus:ring-primary" />
                <label htmlFor="terms" className="text-xs text-[#608a6e] dark:text-gray-400 leading-tight">
                  By creating an account, you agree to the <a className="text-[#1e3a8a] dark:text-primary font-bold hover:underline" href="#">Terms of Service</a> and <a className="text-[#1e3a8a] dark:text-primary font-bold hover:underline" href="#">Privacy Policy</a>.
                </label>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-[#111813] font-extrabold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                Create Free Account
              </button>
              <p className="text-center text-sm text-[#608a6e] dark:text-gray-400">
                Already have an account? <Link className="text-primary font-bold hover:underline" to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <footer className="py-6 px-10 text-center">
        <p className="text-xs text-[#608a6e] dark:text-gray-500">© 2024 Service Connect Inc. All rights reserved. Professional services at your fingertips.</p>
      </footer>
    </div>
  )
}

