import React, { ReactNode } from 'react';


interface EcommerceLayoutProps {
  children: ReactNode;
}

export default function EcommerceLayout({ children }: EcommerceLayoutProps) {
  return (
        <main className="text-white flex flex-col justify-center items-center">
          <nav className='mb-32'>
            <ul className="flex flex-row gap-10 border-x-2 border-b-2 rounded-b-md p-5">
              <li>
                <a href="/Proyectos/Ecommerce">Tienda</a>
              </li>
              <li>
                <a href="/Proyectos/Ecommerce/Hombres">Hombres</a>
              </li>
              <li>
                <a href="/Proyectos/Ecommerce/Mujeres">Mujeres</a>
              </li>
              <li>
                <a href="/Proyectos/Ecommerce/Ninos">Niños</a>
              </li>
            </ul>
          </nav>

          {children}
        </main>
  );
}
