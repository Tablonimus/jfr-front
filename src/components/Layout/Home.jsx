import imgHome from "/images2025/17.jpg";
const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen">
      <figure className="absolute inset-0 ">
        <img
          src={imgHome}
          className="w-full h-full object-center object-cover"
          alt="img-home"
        />
      </figure>

      <article>
        <h1>JFR</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nemo
          id eaque quasi cum deleniti repudiandae sunt numquam.
        </p>
      </article>
    </section>
  );
};

export default Home;
