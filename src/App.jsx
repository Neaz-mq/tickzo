import { useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Banner from "./components/Banner";
import Poster from "./components/Poster/Poster";

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div className="relative">         
          <Navbar  />
          <main>
            <Banner />  
            <Poster />
           
          </main>   
         
        </div>
      )}
    </>
  );
}