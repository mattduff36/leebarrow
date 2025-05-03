'use client'

import Image from 'next/image'
import { GalleryImage } from './types'

interface GalleryModalProps {
  image: GalleryImage
  onClose: () => void
}

export default function GalleryModal({ image, onClose }: GalleryModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black bg-opacity-75"
        onClick={onClose}
      />
      <div className="relative max-w-4xl w-full mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative aspect-square">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
} 