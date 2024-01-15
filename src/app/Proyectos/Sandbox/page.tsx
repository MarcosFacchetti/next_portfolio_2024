"use client"
import React, { useRef, useState, useEffect } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import Esqueleto from "./esqueleto.gif";
import Dino from "./dinosaurio y Rana.gif";
import Alien from "./alien.gif";
import Michael from "./michael.gif";
import Alien2 from "./alien2.gif";

import Image from "next/image";

const Sandbox = () => {
  const playerRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(50); // Inicializa el volumen al 50%

  useEffect(() => {
    // Recuperar el estado de reproducción y volumen al cargar el componente
    const storedIsPlaying = localStorage.getItem("isPlaying");
    if (storedIsPlaying !== null) {
      setIsPlaying(JSON.parse(storedIsPlaying));
    }

    const storedVolume = localStorage.getItem("volume");
    if (storedVolume !== null) {
      setVolume(Number(storedVolume));
    }

    // Iniciar la reproducción al cargar el componente
    if (playerRef.current) {
      const contentWindow = playerRef.current.contentWindow;
      if (contentWindow && isPlaying) {
        contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
        contentWindow.postMessage(
          `{"event":"command","func":"setVolume","args":[${volume}]}`,
          "*"
        );
      }
    }
  }, []);

  useEffect(() => {
    // Almacenar el estado de reproducción y volumen en localStorage al cambiar el estado
    localStorage.setItem("isPlaying", JSON.stringify(isPlaying));
  }, [isPlaying]);

  useEffect(() => {
    // Actualizar el volumen al cambiar el estado
    if (playerRef.current) {
      const contentWindow = playerRef.current.contentWindow;
      if (contentWindow) {
        contentWindow.postMessage(
          `{"event":"command","func":"setVolume","args":[${volume}]}`,
          "*"
        );
      }
    }
    localStorage.setItem("volume", String(volume));
  }, [volume]);

  const togglePlayPause = () => {
    if (playerRef.current) {
      const contentWindow = playerRef.current.contentWindow;
      if (contentWindow) {
        if (isPlaying) {
          contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        } else {
          contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  return (
    <div>
      <div className="fixed flex h-56 justify-center items-center w-20 flex-col bottom-0 right-0">
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="rotate-[270deg] w-20 h-40 border-2 "
          />
        </div>
        <div>
          <button onClick={togglePlayPause}>
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <iframe
          ref={playerRef}
          width="0"
          height="0"
          title="YouTube Music Player"
          src="https://www.youtube.com/embed/SmHofeOdGzI?controls=0&loop=1&playlist=SmHofeOdGzI&enablejsapi=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="pt-40 relative">
        <Image
          priority
          className="relative bottom-[100px]"
          src={Esqueleto}
          alt="Esqueleto"
          width={500}
        />
        <Image
          className="absolute top-1/4 left-3/4"
          src={Dino}
          alt="Slender GIF"
          width={70}
        />
        <Image
          className="absolute top-1/4 right-3/4"
          src={Alien}
          alt="Slender GIF"
          width={70}
        />
        <Image
          className="absolute bottom-1/4 left-3/4"
          src={Michael}
          alt="Slender GIF"
          width={70}
        />
        <Image
          className="absolute bottom-1/4 right-2/4 lg:right-3/4"
          src={Alien2}
          alt="Slender GIF"
          width={150}
        />
      </div>
    </div>
  );
};

export default Sandbox;
