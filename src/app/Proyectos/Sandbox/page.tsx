"use client"

import React, { useRef, useState, useEffect, ChangeEvent, lazy } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import Image from "next/image";
import Esqueleto from "./esqueleto.gif";
import Dino from "./dinosaurio y Rana.gif";
import Alien from "./alien.gif";
import Michael from "./michael.gif";
import Alien2 from "./alien2.gif";

interface PlayerRef {
  contentWindow: Window | null;
}

const Sandbox = () => {
  const playerRef = useRef<PlayerRef>({ contentWindow: null });
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const storedIsPlaying = localStorage.getItem("isPlaying");
    if (storedIsPlaying !== null) {
      setIsPlaying(JSON.parse(storedIsPlaying));
    }

    const storedVolume = localStorage.getItem("volume");
    if (storedVolume !== null) {
      setVolume(Number(storedVolume));
    }

    if (playerRef.current?.contentWindow && isPlaying) {
      const { contentWindow } = playerRef.current;
      contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
      contentWindow.postMessage(
        `{"event":"command","func":"setVolume","args":[${volume}]}`,
        "*"
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isPlaying", JSON.stringify(isPlaying));
  }, [isPlaying]);

  useEffect(() => {
    if (playerRef.current?.contentWindow) {
      const { contentWindow } = playerRef.current;
      contentWindow.postMessage(
        `{"event":"command","func":"setVolume","args":[${volume}]}`,
        "*"
      );
    }
    localStorage.setItem("volume", String(volume));
  }, [volume]);

  const togglePlayPause = () => {
    if (playerRef.current?.contentWindow) {
      const { contentWindow } = playerRef.current;
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
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  return (
    <div className="bg-slate-950">
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
          ref={(ref) =>
            (playerRef.current.contentWindow = ref?.contentWindow || null)
          }
          width="0"
          height="0"
          title="YouTube Music Player"
          src="https://www.youtube.com/embed/SmHofeOdGzI?controls=0&loop=1&playlist=SmHofeOdGzI&enablejsapi=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-40 relative">
        <Image
          className="relative bottom-[100px]"
          src={Esqueleto}
          alt="Esqueleto"
          width={500}
          loading="lazy"
        />
        <Image
          className="absolute top-1/4 right-3/4"
          src={Alien}
          alt="Alien"
          width={70}
          loading="lazy"

        />
        <Image
          className="absolute bottom-1/4 left-3/4"
          src={Michael}
          alt="Michael"
          width={70}
          loading="lazy"

        />
      </div>
    </div>
  );
};

export default Sandbox;
