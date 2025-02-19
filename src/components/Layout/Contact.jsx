import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgJfr1 from "/images2025/17.jpg";
import imgJfr2 from "/images2025/compressed/01.webp";
import imgJfr3 from "/images2025/compressed/02.webp";
import imgJfr4 from "/images2025/compressed/04.webp";
import imgJfr5 from "/images2025/compressed/05.webp";
import imgJfr6 from "/images2025/03.jpg";
import imgJfr7 from "/images2025/10.jpg";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
 
    const scales = [4, 5, 6, 8, 9, 7, 5];

    gsap.utils.toArray(".el").forEach((el, index) => {
      gsap.to(el, {
        scale: scales[index],
        scrollTrigger: {
          trigger: ".container-images",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      });
    });
  }, []);

  return (
    <>
      <div className="section before">
        <div className="w-full h-screen flex justify-center items-center text-red-500">
          <p>DATES</p>
        </div>
      </div>
      <div className="container-images">
        <div className="sticky">
          <div class="el">
            <div class="imageContainer">
              <img
                src={imgJfr1}
                alt=""
              />
            </div>
          </div>
          <div class="el">
            <div class="imageContainer">
              <img
                src={imgJfr2}
                alt=""
              />
            </div>
          </div>
          <div class="el">
            <div class="imageContainer">
              <img
                src={imgJfr3}
                alt=""
              />
            </div>
          </div>
          <div class="el">
            <div class="imageContainer">
              <img
                src={imgJfr4}
                alt=""
              />
            </div>
          </div>
          <div class="el">
            <div class="imageContainer">
              <img
                src={imgJfr5}
                alt=""
              />
            </div>
          </div>
          <div class="el">
            <div class="imageContainer">
              <img
                src={imgJfr6}
                alt=""
              />
            </div>
          </div>
          <div class="el">
            <div class="imageContainer">
              <img
                src={imgJfr7}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section after">
        <div>
          <p>CONTACT</p>{" "}
        </div>
      </div>
    </>
  );
};

export default Contact;
