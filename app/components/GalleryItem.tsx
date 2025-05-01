'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface GalleryItemProps {
  src: string
  alt: string
  title?: string
  description?: string
  index: number
}

export default function GalleryItem({ src, alt, title, description, index }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a staggered delay based on the index
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 200) // 200ms delay between each item

    return () => clearTimeout(timer)
  }, [index])

  return (
    <div 
      className={`relative group cursor-pointer overflow-hidden transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      {(title || description) && (
        <div className={`absolute inset-0 flex flex-col justify-end p-4 text-white transition-all duration-300
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {title && <h3 className="text-xl font-serif mb-2">{title}</h3>}
          {description && <p className="text-sm font-serif">{description}</p>}
        </div>
      )}
    </div>
  )
} 