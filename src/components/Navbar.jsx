import { useState } from 'react';
import { Menu, X, ChevronDown, CreditCard, BookOpen, CircleUserRound } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
];

const franchiseItems = [
  { label: 'EPS', href: '#eps' },
  { label: 'Hitachi', href: '#hitachi' },
  { label: 'Findi', href: '#findi' },
  { label: 'India1', href: '#india1' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openFranchise, setOpenFranchise] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 grid place-content-center text-white">
              <CreditCard className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900">ATM Franchise India</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="relative" onMouseEnter={() => setOpenFranchise(true)} onMouseLeave={() => setOpenFranchise(false)}>
              <button className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900">
                ATM Franchise <ChevronDown className="h-4 w-4" />
              </button>
              {openFranchise && (
                <div className="absolute left-0 mt-3 w-56 rounded-xl border border-slate-200/60 bg-white shadow-xl p-1">
                  {franchiseItems.map((item) => (
                    <a key={item.label} href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" /> {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <BookOpen className="h-4 w-4" /> Blog
            </a>
            <a href="#apply" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
              <CircleUserRound className="h-4 w-4" /> Apply Now
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <details className="px-3 py-2 rounded-lg bg-slate-50">
                <summary className="list-none flex items-center justify-between cursor-pointer text-slate-700">
                  <span>ATM Franchise</span>
                  <ChevronDown className="h-4 w-4" />
                </summary>
                <div className="mt-2 grid">
                  {franchiseItems.map((item) => (
                    <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700" onClick={() => setOpen(false)}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </details>
              <a href="#blog" className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700" onClick={() => setOpen(false)}>
                Blog
              </a>
              <a href="#apply" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 shadow-sm">
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
