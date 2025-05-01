'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface ModalProps {
  image: {
    id: number
    src: string
    alt: string
  }
  onClose: () => void
}

export default function Modal({ image, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full p-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Top close button */}
        <button
          className="absolute -top-8 right-4 text-white hover:text-gray-300 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Corner close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-[4/3] w-full">
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