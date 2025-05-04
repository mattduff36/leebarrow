'use client'

import { useState } from 'react'
import AboutModal from './AboutModal'
import ContactModal from './ContactModal'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery')
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center h-16">
              <div className="flex space-x-8">
                <button
                  onClick={scrollToGallery}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 tracking-wider uppercase font-montserrat"
                >
                  Gallery
                </button>
                <button
                  onClick={() => setIsAboutModalOpen(true)}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 tracking-wider uppercase font-montserrat"
                >
                  About
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 tracking-wider uppercase font-montserrat"
                >
                  Contact
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              Website developed by{' '}
              <a
                href="https://mpdee.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                mpdee.co.uk
              </a>{' '}
              © 2025. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
} 