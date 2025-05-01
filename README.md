# Lee Barrowcliff Photography Portfolio

A modern photography portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Image gallery with hover effects
- Full-screen image modal
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
  - `globals.css` - Global styles and Tailwind imports
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
- `public/` - Static assets
  - `gallery/` - Gallery images
  - `hero.jpg` - Hero section background image

## Adding Images

1. Place your hero image in `public/hero.jpg`
2. Add gallery images to `public/gallery/`
3. Update the `galleryImages` array in `app/page.tsx` with your image details

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display & Montserrat) 