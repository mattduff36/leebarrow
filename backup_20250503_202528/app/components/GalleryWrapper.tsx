'use client'

import { useEffect, useState } from 'react'
import ClientGallery from './ClientGallery'
import { GalleryImage } from './types'

export default function GalleryWrapper() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery-images')
        const data = await response.json()
        setImages(data)
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
      </div>
    )
  }

  return <ClientGallery images={images} />
} 