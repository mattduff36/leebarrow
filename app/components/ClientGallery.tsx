'use client'

import { useState } from 'react'
import GalleryItem from './GalleryItem'
import Modal from './Modal'

interface ClientGalleryProps {
  images: {
    id: number
    src: string
    alt: string
  }[]
}

export default function ClientGallery({ images }: ClientGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string } | null>(null)

  return (
    <>
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

      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  )
} 