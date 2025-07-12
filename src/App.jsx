import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Becerilerim from './components/Becerilerim';
import Hakkimda from './components/Hakkımda';
import Projelerim from './components/Projelerim';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Hakkimda/>
      <Becerilerim/>
      <Projelerim/>
      <Footer/>
    </main>
  );
}
