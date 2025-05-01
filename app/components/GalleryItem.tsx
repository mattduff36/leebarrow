'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface GalleryItemProps {
  image: {
    id: number
    src: string
    alt: string
  }
  onClick: () => void
  delay: number
}

export default function GalleryItem({ image, onClick, delay }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a staggered delay based on the delay prop
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000) // Convert delay to milliseconds

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`relative group cursor-pointer overflow-hidden transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="aspect-square relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  )
} 