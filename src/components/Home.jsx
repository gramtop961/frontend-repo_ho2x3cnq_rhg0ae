import Navbar from './Navbar';
import Hero from './Hero';
import WhyATM from './WhyATM';
import Partners from './Partners';

export default function Home() {
  return (
    <div id="home" className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <WhyATM />
        <Partners />
      </main>
    </div>
  );
}
