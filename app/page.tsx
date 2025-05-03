'use client'

import Hero from './components/Hero'
import ClientGallery from './components/ClientGallery'
import { GalleryImage } from './components/types'
import { useState, useEffect } from 'react'

export default function Home() {
  const [images, setImages] = useState<GalleryImage[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery-images')
        const data = await response.json()
        setImages(data)
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <div>
      <Hero />
      <section id="gallery" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-gray-400 tracking-wider uppercase font-montserrat text-center mb-8">Gallery</h2>
          <ClientGallery images={images} />
        </div>
      </section>
    </div>
  )
} 