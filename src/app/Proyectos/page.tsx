import React from 'react';

interface CustomCardProps {
  href: string;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ href, title, description }) => {
  return (
    <a
      href={href}
      className="
        rounded-lg
        h-80
        w-60
        p-5
        flex
        flex-col
        items-center
        text-center
        gap-10
        font-bold
        bg-slate-950
        border-4
        text-white
        hover:bg-blue-950"
    >
      <h1 className="mt-[10%]">{title}</h1>
      <h2>{description}</h2>
    </a>
  );
};

const Proyectos: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pt-20 pb-10 h-[70%] w-[100%] flex flex-row flex-wrap gap-5 justify-center">
        <CustomCard
          href="/Proyectos/Ecommerce"
          title="Tienda online"
          description="Ecommerce"
        />
        <CustomCard
          href="/Proyectos/Clima"
          title="App del clima"
          description="Consulta el clima en cualquier parte del mundo"
        />
        <CustomCard
          href="/Proyectos/Tareas"
          title="Gestor de tareas"
          description="Crea y elimina tareas."
        />
        <CustomCard
          href="/Proyectos/PixelArt"
          title="PixelArt"
          description="Dibuja pixelart."
          />
      </div>
    </div>
  );
};

export default Proyectos;
