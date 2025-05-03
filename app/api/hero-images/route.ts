import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'hero_images');
    const files = fs.readdirSync(imagesDir);
    
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => ({
        src: `/hero_images/${file}`,
        alt: `Hero background ${file.split('.')[0]}`
      }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error reading hero images:', error);
    return NextResponse.json({ error: 'Failed to read hero images' }, { status: 500 });
  }
} 