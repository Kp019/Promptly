import About from "./components/About";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <About/>
      <Cta/>
      <HowItWorks/>
      <Contact/>
      <Footer/>
    </main>
  );
}
