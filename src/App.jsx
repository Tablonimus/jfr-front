import { useState } from "react";
import navimg from "./assets/images/jfr-white.png";

import "./App.css";
import Bio from "./components/Bio";
import Dates from "./components/Dates";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      <nav className="fixed w-screen lg:px-56 px-10 py-4 flex justify-between items-center z-[9999] ">
       <img src={navimg} alt="" className="w-14 h-14 object-contain" />
        <div className="text-xl text-white">|||</div>
      </nav>
      <header className="h-screen "> </header>
      <main className="flex flex-col gap-3">
        <Bio />
        <Dates />
        <section className="w-1/2">CONTACTO</section>
        <section className="w-1/2">CONTACTO</section>
        <section className="w-1/2">CONTACTO</section>
      </main>
    </div>
  );
}

export default App;
