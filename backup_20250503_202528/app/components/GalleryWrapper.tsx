'use client'

import ClientGallery from './ClientGallery'
import { GalleryImage } from './types'

interface GalleryWrapperProps {
  images: GalleryImage[]
}

export default function GalleryWrapper({ images }: GalleryWrapperProps) {
  return <ClientGallery images={images} />
} 