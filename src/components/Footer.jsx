import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-6 py-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">handyman</span>
            <span className="font-bold text-xl">Service Connect</span>
          </div>
          <p className="text-slate-500 text-sm">
            Providing top-tier home services with professional expertise and reliability since 2021.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
            <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Safety</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary transition-all" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary transition-all" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary transition-all" href="#">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-xs">
        © 2024 Service Connect. All rights reserved.
      </div>
    </footer>
  )
}

