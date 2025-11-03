import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-slate-900 font-semibold">ATM Franchise India</h4>
            <p className="mt-2 text-slate-600 text-sm">Empowering entrepreneurs to launch and grow profitable ATM businesses with trusted WLA partners.</p>
          </div>
          <div>
            <h5 className="text-slate-900 font-medium">Quick links</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="text-slate-600 hover:text-slate-900">About Us</a></li>
              <li><a href="#franchise" className="text-slate-600 hover:text-slate-900">ATM Franchise</a></li>
              <li><a href="#blog" className="text-slate-600 hover:text-slate-900">Blog</a></li>
              <li><a href="#apply" className="text-slate-600 hover:text-slate-900">Apply Now</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-medium">Get in touch</h5>
            <p className="mt-2 text-sm text-slate-600">Have questions? We're here to help you get started.</p>
            <a href="mailto:hello@atmfranchise.in" className="mt-3 inline-flex items-center gap-2 text-blue-700 font-medium">
              <Mail className="h-4 w-4" /> hello@atmfranchise.in
            </a>
            <div className="mt-4 flex items-center gap-3 text-slate-500">
              <a href="#" aria-label="Facebook" className="hover:text-slate-900"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ATM Franchise India. All rights reserved.</p>
          <p>RBI compliant WLA partner facilitation platform.</p>
        </div>
      </div>
    </footer>
  );
}
