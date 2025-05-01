'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  title?: string
  description?: string
}

export default function Modal({ isOpen, onClose, src, alt, title, description }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

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

        {/* Image container */}
        <div className="relative w-full h-[85vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            priority
            sizes="90vw"
          />
          
          {/* Corner close button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        {(title || description) && (
          <div className="mt-4 text-white text-center">
            {title && <h3 className="text-2xl font-serif mb-2">{title}</h3>}
            {description && <p className="text-lg font-serif">{description}</p>}
          </div>
        )}
      </div>
    </div>
  )
} 