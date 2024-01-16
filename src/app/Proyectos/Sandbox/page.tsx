"use client";
import { useState, useEffect, useRef } from "react";
import Jebus from "./jebusDance.gif";
import Image from "next/image";
import Gato from "./gato.png";
import Ropa from "./ropa.png";

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

const Sandbox = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div
      className="flex flex-col justify-center items-center"
      id="arriba"
      onMouseMove={handleMouseMove}
    >
      <div className="flex justify-center items-center mt-40 mb-96">
        <div>
          <Image src={Jebus} alt="jebus" height={200} width={200} />

          <iframe
            width="240"
            height="120"
            src="https://www.youtube.com/embed/7T_YtklLyyo?si=5VY9WxRgcbiGmQMP&autoplay=1&controls=1&loop=1&playlist=7T_YtklLyyo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="fixed rounded-2xl opacity-10 bottom-5 right-5 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      <div className="relative flex w-screen items-center justify-center mb-[36rem]">
        <Image src={Gato} alt="gato" className="min-h-80 w-64" />
        <div className="absolute top-[-210px] left-0 right-0 bottom-0 flex items-center justify-center">
          <Eye mouseX={mouseX} mouseY={mouseY} />
          <Eye mouseX={mouseX} mouseY={mouseY} />
          <h1 className="absolute mt-80 text-xl"> Login</h1>
          <input
            className="absolute flex mt-96 text-white w-32 rounded-md px-2 py-1 bg-slate-800 placeholder:text-center placeholder:text-slate-300"
            placeholder="Username"
          />
        </div>
      </div>

      <div className="flex w-96 flex-col font-serif mb-[36rem] md:w-auto">
        <form className="flex-auto p-6 border-2">
          <div className="flex flex-wrap">
            <div className="w-28 h-28 relative mr-5 hover:w-80 hover:absolute hover:m-auto hover:h-80 hover:transition-all ">
              <Image
                src={Ropa}
                alt="Ropa"
                className="absolute inset-0 w-full h-full rounded-3xl object-cover"
                loading="lazy"
              />
            </div>
            <h1 className="flex-auto text-lg font-semibold text-center text-white">
              Utility Jacket
            </h1>
            <div className="text-lg font-semibold text-slate-500">$110.00</div>
            <div className="w-full flex-none text-sm font-medium text-slate-200 mt-2">
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
              {/* ... Otros tamaños ... */}
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <a
                className="h-10 px-6 text-center items-center flex font-semibold rounded-md bg-black text-white"
                href="#arriba"
              >
                Comprar ahora
              </a>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200"
                type="button"
              >
                Añadir al carro
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
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
  );
};

export default Sandbox;
