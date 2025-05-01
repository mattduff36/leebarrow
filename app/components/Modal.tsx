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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={onClose}>
      <button
        className="absolute top-4 right-4 text-white text-4xl font-light"
        onClick={onClose}
      >
        ×
      </button>
      <div className="relative w-full max-w-4xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
} 