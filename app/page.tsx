'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import GalleryItem from './components/GalleryItem'
import Modal from './components/Modal'

interface GalleryImage {
  src: string
  alt: string
  title?: string
  description?: string
}

const galleryImages: GalleryImage[] = [
  {
    src: '/1.jpg',
    alt: 'Image 1',
    title: 'First Image',
    description: 'A beautiful landscape'
  },
  {
    src: '/2.jpg',
    alt: 'Image 2',
    title: 'Second Image',
    description: 'An amazing portrait'
  },
  {
    src: '/3.jpg',
    alt: 'Image 3',
    title: 'Third Image',
    description: 'A stunning view'
  },
  {
    src: '/4.jpg',
    alt: 'Image 4',
    title: 'Fourth Image',
    description: 'A moment captured'
  },
  {
    src: '/5.jpg',
    alt: 'Image 5',
    title: 'Fifth Image',
    description: 'A special moment'
  },
  {
    src: '/6.jpg',
    alt: 'Image 6',
    title: 'Sixth Image',
    description: 'A unique perspective'
  }
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.jpg"
            alt="Hero image"
            fill
            className="object-cover"
            priority
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center">
          <h1 
            className={`hero-title mb-4 text-white transform transition-all duration-[2000ms] ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Lee Barrowcliff
          </h1>
          <p 
            className={`hero-subtitle text-white transform transition-all duration-[2000ms] ease-out delay-1000
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Photography
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="gallery-title text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} onClick={() => setSelectedImage(image)}>
                <GalleryItem {...image} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          {...selectedImage}
        />
      )}
    </main>
  )
} 