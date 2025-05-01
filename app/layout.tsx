import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lee Barrowcliff Photography',
  description: 'Personal photography portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&family=EB+Garamond:wght@400;500;600;700&family=Marcellus&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-700 font-sans">
        {children}
      </body>
    </html>
  )
} 