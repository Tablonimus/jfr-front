import imgBio from "/images2025/10.jpg";

const Bio = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen">
      <article className="flex flex-col items-center justify-center gap-12">
        <span className="w-[30%] h-[1px] bg-stone-400"></span>
        <p className="text-stone-600 text-center max-w-[600px] text-balance font-text2 text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          praesentium, tempore animi eveniet accusamus et reprehenderit neque
          molestiae asperiores in impedit architecto explicabo ipsa, minus fugit
          itaque facilis vitae quo.
        </p>
      </article>
    </section>
  );
};

export default Bio;
