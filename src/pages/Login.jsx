import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    if (email === 'customer@gmail.com' && password === '123456789') {
      localStorage.setItem('userRole', 'customer')
      navigate('/customer-dashboard')
    } else if (email === 'admin@gmail.com' && password === '123456789') {
      localStorage.setItem('userRole', 'admin')
      navigate('/admin-customers')
    } else if (email === 'provider@gmail.com' && password === '12345678') {
      localStorage.setItem('userRole', 'provider')
      navigate('/provider-dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-[440px] animate-in duration-300">
        <div className="flex flex-col items-center mb-8 gap-2">
          <div className="bg-primary p-3 rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-3xl text-[#111813]">handyman</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#111813] dark:text-white tracking-tight">Service Connect</h1>
        </div>
        <div className="bg-white dark:bg-[#1a2e20] rounded-xl shadow-xl shadow-primary/5 p-8 border border-[#dbe6df] dark:border-[#2a4434]">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#111813] dark:text-white mb-2">Welcome back!</h2>
            <p className="text-[#608a6e] dark:text-[#a0c4ac] text-sm">Please enter your details to sign in.</p>
          </div>
          {error && <div className="text-red-600 text-sm font-semibold">{error}</div>}
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#111813] dark:text-white" htmlFor="email">Email Address</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="w-full h-12 px-4 rounded-lg border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white placeholder:text-[#608a6e]/60 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-semibold text-[#111813] dark:text-white" htmlFor="password">Password</label>
              </div>
              <div className="relative flex items-center">
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-12 pl-4 pr-12 rounded-lg border border-[#dbe6df] dark:border-[#2a4434] bg-white dark:bg-[#102216] text-[#111813] dark:text-white placeholder:text-[#608a6e]/60 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input id="remember" type="checkbox" className="w-4 h-4 rounded border-[#dbe6df] text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-sm text-[#608a6e] dark:text-[#a0c4ac]">Remember me for 30 days</label>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-[#111813] font-bold h-12 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98]">
              Login
            </button>
          </form>
          <p className="text-center mt-8 text-[#608a6e] dark:text-[#a0c4ac] text-sm">
            Don't have an account? <Link className="text-primary font-bold hover:underline transition-all" to="/register">Sign up</Link>
          </p>
          <div className="mt-12 flex justify-center gap-6 text-xs text-[#608a6e]/60 dark:text-[#a0c4ac]/40">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">Help Center</a>
          </div>
        </div>
      </div>
    </div>
  )
}
