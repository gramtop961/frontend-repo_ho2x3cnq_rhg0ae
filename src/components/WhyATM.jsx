import { ShieldCheck, TrendingUp, MapPin, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyATM() {
  const cards = [
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: 'Steady Monthly Income',
      desc: 'Earn predictable commissions from cash withdrawals and services.'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'High Location Demand',
      desc: 'Banks and merchants need ATMs in growing neighborhoods and transit hubs.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: 'Regulatory Backing',
      desc: 'Operate with RBI‑compliant White Label ATM partners for peace of mind.'
    },
    {
      icon: <Wallet className="h-6 w-6 text-blue-600" />,
      title: 'Low Operational Overhead',
      desc: 'Partners manage cash, uptime, and security so you can focus on growth.'
    }
  ];

  return (
    <section id="why-atm" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Why start an ATM business?</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">A resilient, cash‑flowing asset class with strong demand in Tier 1–3 cities and towns across India.</p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-blue-50 grid place-content-center mb-4">
                {c.icon}
              </div>
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
