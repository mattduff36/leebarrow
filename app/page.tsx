import ClientHero from './components/ClientHero'
import GalleryWrapper from './components/GalleryWrapper'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ClientHero />
      <GalleryWrapper />
    </div>
  )
} 