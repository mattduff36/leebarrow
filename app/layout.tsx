import './globals.css'
import type { Metadata } from 'next'
import { Great_Vibes, Marcellus, Montserrat } from 'next/font/google'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
})

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Lee Barrowcliff Photography',
  description: 'Professional photography portfolio showcasing Lee Barrowcliff\'s work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${marcellus.variable} ${montserrat.variable}`}>
      <body className="bg-off-white min-h-screen">
        {children}
      </body>
    </html>
  )
} 