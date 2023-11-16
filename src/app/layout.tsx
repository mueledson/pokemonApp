import './globals.css'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokémon',
  description: 'Pokémon Forever',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="content">
          <nav className="menu">
            <section className="menuContent">
              <Image width={48} height={48} src="https://pngimg.com/d/pokemon_logo_PNG12.png" alt='Logo' />
              <h1>Pokemon</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
