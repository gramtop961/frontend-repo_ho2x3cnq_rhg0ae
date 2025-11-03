import { motion } from 'framer-motion';
import { ShieldCheck, Users, Target } from 'lucide-react';

export default function AboutUs() {
  const cards = [
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: 'Our Mission',
      desc: 'To empower entrepreneurs across India to build reliable, profitable ATM businesses with transparent guidance and trusted partners.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: 'Our Vision',
      desc: 'To be India\'s most trusted facilitation platform for White Label ATM operations, improving access to cash in every community.'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Our Promise',
      desc: 'Honest advice, partner due‑diligence, and end‑to‑end support — from site selection to go‑live and beyond.'
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-extrabold tracking-tight text-slate-900">About Us</motion.h2>
        <p className="mt-2 text-slate-600 max-w-2xl">We simplify the ATM franchise journey with clarity, compliance, and care.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-blue-50 grid place-content-center mb-4">{c.icon}</div>
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
