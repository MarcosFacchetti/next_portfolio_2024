import React, { ReactNode } from 'react';


interface EcommerceLayoutProps {
  children: ReactNode;
}

export default function EcommerceLayout({ children }: EcommerceLayoutProps) {
  return (
        <main className=" text-white flex flex-col items-center">
          
          <div className='fixed  mt-[30rem] flex justify-center items-center text-7xl rotate-45 bg-black text-red-700' >Pagina en desarrollo</div>

          <nav className='fixed bg-slate-950 mt-[84px] mb-32'>
            <ul className="flex flex-row gap-10 border-x-2 border-b-2 rounded-b-md p-5">
              <li>
                <a className='hover:pb-1 hover:border-b-2' href="/Proyectos/Ecommerce">Tienda</a>
              </li>
              <li>
                <a className='hover:pb-1 hover:border-b-2' href="/Proyectos/Ecommerce/Hombres">Hombres</a>
              </li>
              <li>
                <a className='hover:pb-1 hover:border-b-2' href="/Proyectos/Ecommerce/Mujeres">Mujeres</a>
              </li>
              <li>
                <a className='hover:pb-1 hover:border-b-2' href="/Proyectos/Ecommerce/Ninos">Niños</a>
              </li>
            </ul>
          </nav>

          {children}
        </main>
  );
}
