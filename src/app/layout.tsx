import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
<<<<<<< HEAD
import Navbar from '@/Components/navbar'
=======
>>>>>>> 1a1e4154e3aa88d34a6c5c024c35c44d5e8ab64a

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Marcos Facchetti',
  description: 'Portafolio de Marcos Facchetti | creado con Next en 2024 |',
=======
  title: 'Create Next App',
  description: 'Generated by create next app',
>>>>>>> 1a1e4154e3aa88d34a6c5c024c35c44d5e8ab64a
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={inter.className} >
        <main>

        <Navbar/>
        {children}

        </main>
      </body>
=======
      <body className={inter.className}>{children}</body>
>>>>>>> 1a1e4154e3aa88d34a6c5c024c35c44d5e8ab64a
    </html>
  )
}
