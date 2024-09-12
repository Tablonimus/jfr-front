import React from "react";
import bioimg from "../assets/images/header3.jpg";

export default function Bio() {
  return (
    <article
      id="bio"
      className="relative flex flex-col w-full h-full lg:h-[40rem] justify-center items-center gap-10 text-center"
    >
      <img src={bioimg} alt="" className="absolute z-0  grayscale h-full w-full object-cover blur-sm" />
      <h3 className="text-4xl font-bold z-50 mt-10">BIOGRAPHY</h3>

      <p className="px-4 lg:w-1/3 z-50 mb-10 text-lg">
        The talented Argentine DJ and producer JFR has an impressive catalog of
        productions on labels such as All Day I Dream, Anjunadeep, Musique de
        Lune, and more. After touring the best clubs in Argentina,
        JFR recently moved from Argentina to Barcelona, Spain and has been
        lighting up dance floors playing in the best clubs in Europe. JFR's
        soulful sounds have received support from industry icons such as Tony
        Mcguinness, Lee Burridge, Hernan Cattaneo and Nick Warren, to name a
        few. JFR has become a crowd favorite known for his sonic vitality and
        infectious energy behind the decks. He is also a professor of electronic
        music production, director of Musique De Lune and founder of his own
        label and the popular Secret Feelings radio series.
      </p>
    </article>
  );
}
