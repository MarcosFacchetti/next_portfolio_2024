import React from "react";
import Jebus from "./jebusDance.gif";
import Image from "next/image";

const Sandbox = () => {
  return (
    <div className="flex h-screen w-full justify-center">
      <div>
        <Image className="h-auto mt-40" src={Jebus} alt="jebus" />

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
  );
};

export default Sandbox;
