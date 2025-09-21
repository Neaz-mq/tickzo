import { useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Banner from "./components/Banner";
import Poster from "./components/Poster/Poster";
import CursorMagnet from "./components/CursorMagnet/CursorMagnet";
import About from "./components/About";
import Product from "./components/Product";
import Choose from "./components/Choose";


export default function App() {
  const [loading, setLoading] = useState(true);

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
          </main>
        </div>
      )}
    </>
  );
}
