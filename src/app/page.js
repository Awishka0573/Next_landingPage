import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./hero/hero";
import About from "./components/About";
import Contactus from "./components/Contactus";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Contactus />

      <Footer />
    </>
  );
}
