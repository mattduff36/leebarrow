'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GalleryImage } from './types'

interface ClientGalleryProps {
  images: GalleryImage[]
}

export default function ClientGallery({ images }: ClientGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative aspect-square overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 