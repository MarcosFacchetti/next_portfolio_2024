import React, { Fragment } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import * as Assets from '@/app/Assets';


interface CardTiendaProps {
  foto: StaticImageData;
  titulo: string;
  precio: number;
}

const CardTienda: React.FC<CardTiendaProps> = ({ foto, titulo, precio }) => {
  return (
    <a
      className="
        rounded-lg
        p-5
        h-[550px]
        w-96
        flex
        flex-col
        items-center
        text-center
        gap-3
        font-bold
        bg-slate-950
        text-white
        border-4
        hover:bg-blue-950"
    >
      <h1 className="mt-3 text-3xl">{titulo}</h1>
      <h2>{`$${precio}`}</h2>
      <Image className='h-[500px] w-[350px]' src={foto} alt={titulo} placeholder="empty" />
    </a>
  );
};

const Ecommerce: React.FC = () => {
  const productos = [
    { titulo: "Remera Negra", precio: 10, foto: Assets.RemeraNegra },
    { titulo: "Remera Roja", precio: 10, foto: Assets.RemeraRoja },
  ];

  return (
    
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-wrap justify-center items-center pt-56 gap-6">
        {productos.map((producto, index) => (
          <CardTienda
            key={index}
            titulo={producto.titulo}
            precio={producto.precio}
            foto={producto.foto}
          />
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
