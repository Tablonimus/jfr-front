import navimg from "../assets/images/jfr-white.png";
import Bio from "./Layout/Bio";
import Dates from "./Layout/Dates";
import Contact from "./Layout/Contact";

function JFR() {
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
        <Contact />
      </main>
    </div>
  );
}

export default JFR;
