import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/navbar'

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
      <body className={inter.className} >
        <main>

        <Navbar/>
        {children}

        </main>
      </body>
    </html>
  )
}
