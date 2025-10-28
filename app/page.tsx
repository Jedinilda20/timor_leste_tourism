import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Destinations from '@/components/Destinations';
import TourismMap from '@/components/TourismMap';
import Culture from '@/components/Culture';
import Activities from '@/components/Activities';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Destinations />
        <TourismMap />
        <Culture />
        <Activities />
      </main>
      <Footer />
    </div>
  );
}
