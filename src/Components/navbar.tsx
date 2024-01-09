import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-10 bg-slate-950 border-b-2 py-10 flex items-center justify-center">
      <ul className="flex flex-row gap-10">
        <li>
          <a href="/">Inicio</a>
        </li>{" "}
        <li>
          <a href="/Proyectos">Proyectos</a>
        </li>
        <li>
          <a href="/Contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
