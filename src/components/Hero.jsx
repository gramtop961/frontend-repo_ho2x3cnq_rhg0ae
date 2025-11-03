import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[620px] w-full overflow-hidden rounded-b-[2rem] bg-gradient-to-br from-sky-50 via-white to-indigo-50">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
              >
                Start your ATM business with confidence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl"
              >
                Partner with trusted White Label ATM (WLA) operators in India. Simple, transparent and future‑ready — built for aspiring entrepreneurs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a href="#apply" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 shadow-lg hover:shadow-xl transition-shadow">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#about" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-800 px-5 py-3 border border-slate-200 shadow-sm hover:shadow transition-all">
                  Learn More
                </a>
              </motion.div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Feature icon={<ShieldCheck className="h-5 w-5 text-blue-600" />} title="Verified partners" desc="Work only with RBI‑compliant WLA operators" />
                <Feature icon={<TrendingUp className="h-5 w-5 text-indigo-600" />} title="Smart returns" desc="Proven model with steady monthly income" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden border border-slate-200/70 bg-white/70 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322f?q=80&w=1600&auto=format&fit=crop"
                  alt="Indian person using an ATM"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="h-9 w-9 rounded-xl bg-slate-50 grid place-content-center">
        {icon}
      </div>
      <div>
        <p className="font-medium text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}
