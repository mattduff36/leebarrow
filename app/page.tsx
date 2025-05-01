import Image from 'next/image'
import ClientGallery from './components/ClientGallery'

const images = [
  { id: 1, src: '/1.jpg', alt: 'Photography 1' },
  { id: 2, src: '/2.jpg', alt: 'Photography 2' },
  { id: 3, src: '/3.jpg', alt: 'Photography 3' },
  { id: 4, src: '/4.jpg', alt: 'Photography 4' },
  { id: 5, src: '/5.jpg', alt: 'Photography 5' },
  { id: 6, src: '/6.jpg', alt: 'Photography 6' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/1.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="hero-text animate-fade-in">Lee Barrowcliff</h1>
          <p className="text-2xl md:text-3xl font-marcellus animate-fade-in tracking-wider" style={{ animationDelay: '0.5s' }}>
            Photography
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <h2 className="section-title">Gallery</h2>
        <ClientGallery images={images} />
      </section>
    </main>
  )
} 