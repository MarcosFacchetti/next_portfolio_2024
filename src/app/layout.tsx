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
        <main className='bg-gradient-to-b from-slate-950 to-gray-950'>

          <nav className="fixed w-full h-10 bg-transparent border-b-2 py-10 flex items-center justify-center">
            <ul className="flex flex-row items-start justify-evenly w-[90%] gap-10 text-lg">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/Proyectos">Proyectos</a>
              </li>
              <li>
                <a href="/Contacto">Contacto</a>
              </li>
            </ul>
          </nav>

          {children}
        </main>
      </body>
    </html>
  );
}
