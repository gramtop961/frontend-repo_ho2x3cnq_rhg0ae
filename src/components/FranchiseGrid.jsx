import { motion } from 'framer-motion';
import { Building2, MapPin, Wallet, ArrowRight } from 'lucide-react';

const partners = [
  {
    id: 'eps',
    name: 'EPS',
    tag: 'Established WLA',
    color: 'from-blue-600 to-indigo-600',
    points: ['Pan-India presence', 'Quick deployment', 'Robust support'],
  },
  {
    id: 'hitachi',
    name: 'Hitachi',
    tag: 'Global Expertise',
    color: 'from-sky-600 to-cyan-600',
    points: ['Trusted hardware', 'High uptime', 'Advanced security'],
  },
  {
    id: 'findi',
    name: 'Findi',
    tag: 'Digital-first',
    color: 'from-indigo-600 to-violet-600',
    points: ['Smart analytics', 'Cash optimization', 'Modern UX'],
  },
  {
    id: 'india1',
    name: 'India1',
    tag: 'Wide network',
    color: 'from-blue-500 to-sky-600',
    points: ['Rural reach', 'Reliable service', 'Growing base'],
  },
];

export default function FranchiseGrid() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-bold text-slate-900">
              Partner with leading WLA operators
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-3 text-slate-600">
              We help you evaluate, apply and launch with the right partner. Transparent terms, guidance at every step and long‑term success.
            </motion.p>

            <div className="mt-6 grid gap-4">
              <Benefit icon={<Building2 className="h-5 w-5 text-blue-600" />} title="WLA onboarding" desc="Navigation through eligibility and documentation" />
              <Benefit icon={<MapPin className="h-5 w-5 text-indigo-600" />} title="Site selection" desc="Location scoring and placement strategy" />
              <Benefit icon={<Wallet className="h-5 w-5 text-cyan-600" />} title="ROI planning" desc="Clear projections and payout schedules" />
            </div>
          </div>

          <div id="franchise" className="grid sm:grid-cols-2 gap-6">
            {partners.map((p, idx) => (
              <motion.a
                key={p.id}
                id={p.id}
                href={`#apply`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`h-1.5 bg-gradient-to-r ${p.color}`} />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                    <span className="text-xs rounded-full bg-slate-100 text-slate-700 px-2 py-1">{p.tag}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {p.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block" /> {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 inline-flex items-center gap-2 text-blue-700 font-medium">
                    Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="h-10 w-10 rounded-xl bg-white grid place-content-center shadow-sm">
        {icon}
      </div>
      <div>
        <p className="font-medium text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
