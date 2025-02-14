import navimg from "../assets/images/jfr-white.png";
import Home from "./Layout/Home";
import Bio from "./Layout/Bio";
import Dates from "./Layout/Dates";
import Contact from "./Layout/Contact";

function JFR() {
  return (
    <main className="relative">
      <nav
        id="box-glass"
        className="fixed w-screen lg:px-56 px-10 py-4 flex justify-between items-center z-50"
      >
        <img src={navimg} alt="" className="w-14 h-14 object-contain" />
        <div className="text-xl text-white">|||</div>
      </nav>

      <section className="flex flex-col gap-3">
        <Home />
        <Bio />
        <Dates />
        <Contact />
      </section>
    </main>
  );
}

export default JFR;
