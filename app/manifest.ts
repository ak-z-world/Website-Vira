import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Crack Leap Academy',
    short_name: 'Crack Leap',
    description: 'Master Python, AI, DevOps, and React with Crack Leap Academy.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0D1B3E',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
  };
}