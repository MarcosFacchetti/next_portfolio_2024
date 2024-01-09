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
        p-5
        flex
        flex-col
        items-center
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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="h-[70%] w-[80%] flex flex-row flex-wrap gap-10 justify-center">
        <CustomCard
          href="/Proyectos/Tareas"
          title="Gestor de tareas"
          description="Una descripción corta"
        />
      </div>
    </div>
  );
};

export default Proyectos;
