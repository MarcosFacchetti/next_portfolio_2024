import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marcos Facchetti',
  description: 'Portafolio de Marcos Facchetti | creado con Next en 2024 |',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='w-[25rem] flex flex-col  items-center bg-slate-950 lg:w-[35rem]'>

          <nav className="fixed w-full h-10 bg-slate-950 rounded-lg border-2 py-10 flex items-center justify-center lg:w-[600px] z-50">
            <ul className="flex flex-row items-start justify-evenly w-[90%] gap-10 text-lg">
              <li>
                <a className='hover:pb-1 hover:border-b-2' href="/">Inicio</a>
              </li>
              <li>
                <a className='hover:pb-1 hover:border-b-2' href="/Proyectos">Proyectos</a>
              </li>
              <li>
                <a className='hover:pb-1 hover:border-b-2' href="/Contacto">Contacto</a>
              </li>
            </ul>
          </nav>

          {children}
        </main>
      </body>
    </html>
  );
}
