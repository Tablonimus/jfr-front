import imgHome from "/images2025/16.jpg";
import navimg from "../../assets/images/jfr-white.png";

const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-end w-full h-screen lg:justify-center">
      <figure className="absolute inset-0 ">
        <img
          src={imgHome}
          className="w-full h-full  object-cover object-center lg:object-[0,-35px]"
          alt="img-home"
        />
      </figure>

      <article className="z-50 flex flex-col lg:pl-[2%] xl:pb-14">
        <figure className="">
          <img src={navimg} alt="img-title" className= "w-[50%] lg:w-[32%]" />
        </figure>

        <p className="ml-3 font-title text-sm  text-stone-400 text-balance max-w-[600px] xl:ml-6 xl:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nemo
          id eaque quasi cum deleniti repudiandae sunt numquam.
        </p>
      </article>
    </section>
  );
};

export default Home;
