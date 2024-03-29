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
      <div className="pt-40 pb-10 h-[70%] w-[100%] flex flex-row flex-wrap gap-5 justify-center">
        <CustomCard
          href="/Proyectos/Sandbox"
          title="Sandbox"
          description="Componentes con código que reutilizo"
        />
        <CustomCard
          href="/Proyectos/Clima"
          title="App del clima"
          description="Consulta el clima de cualquier lugar"
        />
        <CustomCard
          href="/Proyectos/PixelArt"
          title="PixelArt"
          description="Dibuja pixelart"
        />
        <CustomCard
          href="/Proyectos/Ecommerce"
          title="Tienda online"
          description="Ecommerce"
        />
      </div>
    </div>
  );
};

export default Proyectos;
