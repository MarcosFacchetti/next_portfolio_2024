"use client";
import React, { useState } from "react";

const PixelArt: React.FC = () => {
  const [color, setColor] = useState<string>("black");
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  const handleMouseDown = () => {
    setIsDrawing(true);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDrawing) {
      const pixel = event.currentTarget as HTMLDivElement;
      pixel.style.backgroundColor = color;
    }
  };

  const handlePixelClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) {
      const pixel = event.currentTarget as HTMLDivElement;
      pixel.style.backgroundColor = color;
    }
  };

  const handleTouchStart = () => {
    setIsDrawing(true);
  };

  const handleTouchEnd = () => {
    setIsDrawing(false);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isDrawing) {
      const pixel = document.elementFromPoint(
        event.touches[0].clientX,
        event.touches[0].clientY
      ) as HTMLDivElement;

      if (pixel) {
        event.currentTarget as HTMLDivElement;
        pixel.style.backgroundColor = color;
      }
    }
  };

  return (
    <main className="flex justify-center pt-40 items-center">
      <div className="p-4 w-[23rem] flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold mb-4">Pixel Art</h1>
        <div className="mb-4">
          <input
            type="color"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="p-2 rounded"
          />
        </div>
        <div
          className="flex justify-center items-center bg-white p-1 flex-wrap gap-[0.5px]"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {Array.from({ length: 240 }, (_, index) => (
            <div
              key={index}
              style={{ width: "20px", height: "20px" }}
              onMouseEnter={handleMouseEnter}
              onClick={handlePixelClick}
              className="border border-gray-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PixelArt;


