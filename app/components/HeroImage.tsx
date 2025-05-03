'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const heroImages = [
  { src: '/1.jpg', alt: 'Hero background 1' },
  { src: '/4.jpg', alt: 'Hero background 2' },
  { src: '/5.jpg', alt: 'Hero background 3' },
];

export default function HeroImage() {
  const [image, setImage] = useState(heroImages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    setImage(heroImages[randomIndex]);
  }, []);

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover"
      priority
    />
  );
} 