import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[620px] w-full overflow-hidden rounded-b-[2rem] bg-gradient-to-br from-sky-50 via-white to-indigo-50">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
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
                Build a future‑ready ATM business
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl"
              >
                Partner with trusted White Label ATM operators in India. Transparent onboarding, smart site selection, and steady returns.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a href="#apply" className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 text-slate-900 px-5 py-3 shadow-lg hover:bg-yellow-500 transition-colors">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#about-us" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-800 px-5 py-3 border border-slate-200 shadow-sm hover:shadow transition-all">
                  Learn More
                </a>
              </motion.div>
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
