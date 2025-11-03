import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const partners = [
  { id: 'eps', name: 'EPS', tag: 'Established WLA', color: 'from-blue-600 to-indigo-600' },
  { id: 'hitachi', name: 'Hitachi', tag: 'Global Expertise', color: 'from-sky-600 to-cyan-600' },
  { id: 'findi', name: 'Findi', tag: 'Digital-first', color: 'from-indigo-600 to-violet-600' },
  { id: 'india1', name: 'India1', tag: 'Wide Network', color: 'from-blue-500 to-sky-600' }
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-extrabold tracking-tight text-slate-900">Our WLA Partners</motion.h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Work with trusted leaders for onboarding, deployment, and long‑term support.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p, idx) => (
            <motion.a key={p.id} href="#apply" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-1.5 bg-gradient-to-r ${p.color}`} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2 py-1">{p.tag}</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-blue-700 font-medium">
                  Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
