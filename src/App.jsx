import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FranchiseGrid from './components/FranchiseGrid';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { FilePenLine } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FranchiseGrid />
        <ApplyNow />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}

function ApplyNow() {
  return (
    <section id="apply" className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Apply for your ATM franchise</h3>
              <p className="mt-2 text-slate-600">Share your details and preferred city. Our team will match you with the right WLA partner and guide the entire process.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Eligibility check and documentation list</li>
                <li>• Location scoring and ROI modelling</li>
                <li>• Deployment support and training</li>
              </ul>
            </div>
            <form className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input required type="tel" placeholder="Phone" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required type="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="City / State" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <select className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Preferred WLA Partner</option>
                <option>EPS</option>
                <option>Hitachi</option>
                <option>Findi</option>
                <option>India1</option>
              </select>
              <textarea rows={4} placeholder="Tell us about your preferred location and expectations" className="rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 shadow-lg hover:shadow-xl transition">
                <FilePenLine className="h-4 w-4" /> Submit Application
              </button>
              <p className="text-xs text-slate-500">By submitting, you agree to be contacted by our team.</p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const posts = [
    {
      title: 'How to choose the best ATM location',
      excerpt: 'Footfall, visibility and safety — 7-point checklist to shortlist profitable sites.',
      tag: 'Guide',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'WLA vs. bank ATM: What’s the difference?',
      excerpt: 'Understand RBI regulations and the business model behind white-label ATMs.',
      tag: 'Explainer',
      image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Cash management 101 for new operators',
      excerpt: 'Replenishment cycles, CIT partners and uptime — keep your ATM running smoothly.',
      tag: 'Operations',
      image: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-bold">Insights & resources</motion.h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-44 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2 py-1">{p.tag}</span>
                <h4 className="mt-3 font-semibold text-slate-900">{p.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
                <a href="#" className="mt-3 inline-block text-blue-700 font-medium">Read more →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
