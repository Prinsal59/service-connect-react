import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [role, setRole] = useState(localStorage.getItem('userRole'))
  const navigate = useNavigate()

  useEffect(() => {
    // Check for role changes
    const interval = setInterval(() => {
      const currentRole = localStorage.getItem('userRole')
      if (currentRole !== role) {
        setRole(currentRole)
      }
    }, 500)
    return () => clearInterval(interval)
  }, [role])

  const handleLogout = () => {
    localStorage.removeItem('userRole')
    setRole(null)
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg text-background-dark">
            <span className="material-symbols-outlined block text-2xl">home_repair_service</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-background-dark dark:text-white">
            Service<span className="text-primary">Connect</span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {!role && (
            <>
              <NavLink to="/" className="text-sm font-semibold hover:text-primary transition-colors">Home</NavLink>
              <NavLink to="/services" className="text-sm font-semibold hover:text-primary transition-colors">Services</NavLink>
              <NavLink to="/reviews" className="text-sm font-semibold hover:text-primary transition-colors">Reviews</NavLink>
              <NavLink to="/about" className="text-sm font-semibold hover:text-primary transition-colors">About</NavLink>
            </>
          )}

          {role === 'admin' && (
            <>
              <NavLink to="/admin-customers" className="text-sm font-semibold hover:text-primary transition-colors">Customers</NavLink>
              <NavLink to="/admin-providers" className="text-sm font-semibold hover:text-primary transition-colors">Providers</NavLink>
              <NavLink to="/settings" className="text-sm font-semibold hover:text-primary transition-colors">Settings</NavLink>
            </>
          )}

          {role === 'customer' && (
            <>
              <NavLink to="/customer-dashboard" className="text-sm font-semibold hover:text-primary transition-colors">Dashboard</NavLink>
              <NavLink to="/customer-booking" className="text-sm font-semibold hover:text-primary transition-colors">My Bookings</NavLink>
              <NavLink to="/services" className="text-sm font-semibold hover:text-primary transition-colors">Find Services</NavLink>
              <NavLink to="/customer-profile" className="text-sm font-semibold hover:text-primary transition-colors">Profile</NavLink>
            </>
          )}

          {role === 'provider' && (
            <>
              <NavLink to="/provider-dashboard" className="text-sm font-semibold hover:text-primary transition-colors">Dashboard</NavLink>
              <NavLink to="/provider-jobs" className="text-sm font-semibold hover:text-primary transition-colors">My Jobs</NavLink>
              <NavLink to="/provider-profile" className="text-sm font-semibold hover:text-primary transition-colors">Profile</NavLink>
              <NavLink to="/settings" className="text-sm font-semibold hover:text-primary transition-colors">Settings</NavLink>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {!role ? (
            <>
              <Link to="/login" className="hidden sm:flex text-sm font-bold px-4 py-2 rounded-lg border-2 border-primary/20 hover:border-primary transition-all">
                Login
              </Link>
              <Link to="/register" className="bg-primary text-background-dark text-sm font-bold px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
                Become Provider
              </Link>
            </>
          ) : (
            <button 
              onClick={handleLogout}
              className="text-sm font-bold px-4 py-2 rounded-lg border-2 border-rose-500/20 text-rose-500 hover:bg-rose-50 transition-all"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
