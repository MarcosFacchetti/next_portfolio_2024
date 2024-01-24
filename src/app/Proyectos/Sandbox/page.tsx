"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Gato from "./gato.png";
import Ropa from "./ropa.png";
import Montaña_1 from "./montaña_1.png";
import Montaña_2 from "./montaña_2.png";
import Montaña_3 from "./montaña_3.png";
import Montaña_4 from "./Montaña_4.png";
import Agua from "./Agua.png";
import Sol from "./Sol.png";
import Jebus from "./jebusDance.gif";

interface EyeProps {
  mouseX: number;
  mouseY: number;
}

const Eye: React.FC<EyeProps> = ({ mouseX, mouseY }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupilX, setPupilX] = useState(0);
  const [pupilY, setPupilY] = useState(0);

  useEffect(() => {
    if (eyeRef.current) {
      const eyeRect = eyeRef.current.getBoundingClientRect();

      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

      const pupilX = distance * Math.cos(angle);
      const pupilY = distance * Math.sin(angle);

      setPupilX(pupilX);
      setPupilY(pupilY);
    }
  }, [mouseX, mouseY]);

  return (
    <div
      id="eye"
      ref={eyeRef}
      className="relative w-12 h-5 bg-yellow-300 rounded-full overflow-hidden"
      style={{ borderRadius: "50%" }}
    >
      <div
        className="w-3 h-6 bg-black rounded-full absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`,
        }}
      ></div>
    </div>
  );
};

interface ParallaxProps {}

const ParallaxComponent: React.FC<ParallaxProps> = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollTop);
  };

  return (
    <div
      className="overflow-y-scroll flex flex-col justify-center items-center h-[20rem]"
      onScroll={handleScroll}
    >
      <div className="relative w-96 mt-[80%] pb-40 h-80 flex justify-center ">
        <h1
          className="text-center z-[5] text-blue-300 font-mono"
          style={{ transform: `translateY(-${scrollPosition * 0.22}px)` }}
        >
          Parallax
        </h1>
        <Image
          src={Montaña_1}
          alt="fondo"
          className="absolute bottom-0 z-20"
          style={{ transform: `translateY(-${scrollPosition * 0.8}px)` }}
        />
        <Image
          src={Montaña_2}
          alt="fondo"
          className="absolute h-40 w-64 bottom-0 z-[4] "
          style={{ transform: `translateY(-${scrollPosition * 1}px)` }}
        />
        <Image
          src={Montaña_4}
          alt="fondo"
          className="absolute h-40 w-64 bottom-0 z-[11] "
          style={{ transform: `translateY(-${scrollPosition * 0.6}px)` }}
        />
        <Image
          src={Montaña_3}
          alt="fondo"
          className="absolute h-40 z-[9] bottom-0 "
          style={{ transform: `translateY(-${scrollPosition * 1.3}px)` }}
        />
        <Image
          src={Sol}
          alt="fondo"
          className="absolute h-40 w-[300px] bottom-0 object-cover z-[6]"
          style={{ transform: `translateY(-${scrollPosition * 2}px)` }}
        />
        <Image
          src={Agua}
          alt="fondo"
          className="absolute h-40 w-full bg-repeat z-[21] bottom-0 object-cover"
        />
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div
      className="flex justify-evenly mt-40 border-2 flex-col rounded-lg "
      onMouseMove={handleMouseMove}
    >
      <div className="flex justify-center items-center">
        <div
          className={`flex justify-center items-center text-center ${
            currentIndex === 0 ? "block" : "hidden"
          }`}
        >
          <div className="flex w-96 flex-col font-serif md:w-auto">
            <form className="flex-auto p-6 ">
              <div className="flex flex-wrap">
                <div className="w-28 h-28 relative mr-5 hover:w-80 hover:absolute hover:m-auto hover:h-80 hover:transition-all ">
                  <Image
                    src={Ropa}
                    alt="Ropa"
                    className="absolute inset-0 w-full h-full rounded-3xl object-cover"
                    priority
                  />
                </div>
                <div className="flex ml-7 justify-center items-center flex-col">
                  <h1 className=" mb-5 text-lg font-semibold text-center text-white">
                    Utility Jacket
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    $110.00
                  </div>
                </div>

                <div className="w-full left-0 flex text-sm font-medium text-slate-200 mt-4">
                  En stock
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm">
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="xs"
                      defaultChecked
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      XS
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="s"
                      defaultChecked
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      S
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="m"
                      defaultChecked
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      M
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="l"
                      defaultChecked
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      L
                    </div>
                  </label>
                  <label>
                    <input
                      className="sr-only peer"
                      name="size"
                      type="radio"
                      value="xl"
                      defaultChecked
                    />
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                      XL
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <a
                    className="h-10 px-6 py-7 text-center items-center flex font-semibold rounded-md bg-black text-white hover:bg-slate-900"
                    href="#arriba"
                  >
                    Comprar ahora
                  </a>
                  <button
                    className="h-10 px-6 py-7 flex items-center justify-center font-semibold rounded-md border border-slate-200 hover:bg-slate-900"
                    type="button"
                  >
                    Añadir al carrito
                  </button>
                </div>
                <button
                  className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                  type="button"
                  aria-label="Like"
                  defaultChecked
                >
                  <svg width="20" height="20" fill="red" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-slate-300">
                Envios gratis en Argentina.
              </p>
            </form>
          </div>
        </div>
        <div
          className={`flex justify-center items-center text-center ${
            currentIndex === 1 ? "block" : "hidden"
          }`}
        >
          <ParallaxComponent />
        </div>
        <div
          className={`flex justify-center items-center text-center ${
            currentIndex === 2 ? "block" : "hidden"
          }`}
        >
          <div className="relative flex  w-96 items-center justify-center mb-5">
            <Image src={Gato} alt="gato" className="min-h-80 w-64" />
            <div className="absolute top-[-210px] left-0 right-0 bottom-0 flex items-center justify-center">
              <Eye mouseX={mouseX} mouseY={mouseY} />
              <Eye mouseX={mouseX} mouseY={mouseY} />
              <h1 className="absolute mt-80 text-xl"> Login</h1>
              <input
                className="absolute flex mt-96 text-white w-32 rounded-md px-2 py-1 bg-slate-800 placeholder:text-center placeholder:text-slate-300"
                placeholder="Username"
                id="login"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center items-center text-center ${
            currentIndex === 3 ? "block" : "hidden"
          }`}
        >
          <Image src={Jebus} alt="jebus" />
        </div>
      </div>

      <div className="flex p-10 gap-x-10 justify-center border-t-2 w-full ">
        <button
          className="border-2 rounded-lg text-white px-4 py-2"
          onClick={handlePrev}
        >
          Anterior
        </button>
        <button
          className="border-2 rounded-lg text-white px-4 py-2"
          onClick={handleNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

const Sandbox = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="arriba">
      <div className="w-96 flex items-center justify-center mb-5">
        <Carousel />
      </div>
    </div>
  );
};

export default Sandbox;
