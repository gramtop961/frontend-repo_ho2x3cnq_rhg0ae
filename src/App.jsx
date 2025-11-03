import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Home />
      <AboutUs />
      <Footer />
    </div>
  );
}
