# Lee Barrowcliff Photography Portfolio

A modern photography portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Dynamic hero image slideshow with smooth transitions
- Interactive gallery with hover effects
- Full-screen image modal
- Contact form with email functionality
- Custom typography with Google Fonts
- Optimized image loading

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/` - Next.js app directory
  - `components/` - Reusable React components
  - `api/` - API routes for image handling
  - `globals.css` - Global styles and Tailwind imports
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
- `public/` - Static assets
  - `hero_images/` - Hero section background images
  - `gallery_images/` - Gallery images

## Adding Images

1. Add hero images to `public/hero_images/`
2. Add gallery images to `public/gallery_images/`
3. Images will be automatically loaded and displayed

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Google Fonts (Playfair Display & Montserrat) 