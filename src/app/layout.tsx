import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LARQ REAL STATE (Arquitectura y Bienes Raíces)',
  description: 'LARQ REAL STATE es un Hub Inmobiliario y Estudio de Arquitectura que se esfuerza por ser tu aliado en la realización de tus sueños inmobiliarios y arquitectónicos. Nuestro equipo experto está aquí para comprender y atender tus necesidades, ya sea en la compra de tu hogar ideal, la venta de una propiedad o la creación de un espacio arquitectónico único. Con un enfoque personalizado y profesional, buscamos guiarte a través de cada paso, asegurando una experiencia segura y transparente. Tu proyecto es nuestra prioridad.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
