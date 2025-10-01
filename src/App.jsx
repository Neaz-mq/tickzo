import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Banner from "./components/Banner";
import Poster from "./components/Poster/Poster";
import CursorMagnet from "./components/CursorMagnet/CursorMagnet";
import About from "./components/About";
import Product from "./components/Product";
import Choose from "./components/Choose";
import Best from "./components/Best";
import Benefits from "./components/Benefits";
import ScrollToTop from "./components/ScrollToTop";
import Fact from "./components/Fact";
import Track from "./components/Track";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // default scrolling duration
      smooth: true,
      smoothTouch: false, // keep native feel on mobile
      lerp: 0.1, // inertia (lower = smoother, higher = snappier)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup on unmount
    };
  }, []);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div className="relative">
          <CursorMagnet />
          <Navbar />
          <main>
            <Banner />
            <Poster />
            <About />
            <Product />
            <Choose />
            <Best />
            <Benefits />
            <Fact />
            <Track />
            <Partners />
            <Contact />
          </main>
           <ScrollToTop /> {/* Arrow button */}
           <Footer />
        </div>
      )}
    </>
  );
}
