'use client'

import { useState } from 'react'
import Image from 'next/image'
import Modal from './components/Modal'
import GalleryItem from './components/GalleryItem'

const images = [
  { id: 1, src: '/1.jpg', alt: 'Photography 1' },
  { id: 2, src: '/2.jpg', alt: 'Photography 2' },
  { id: 3, src: '/3.jpg', alt: 'Photography 3' },
  { id: 4, src: '/4.jpg', alt: 'Photography 4' },
  { id: 5, src: '/5.jpg', alt: 'Photography 5' },
  { id: 6, src: '/6.jpg', alt: 'Photography 6' },
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string } | null>(null)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="hero-text animate-fade-in">Lee Barrowcliff</h1>
          <p className="text-xl md:text-2xl font-montserrat animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Capturing Life's Beautiful Moments
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  )
} 