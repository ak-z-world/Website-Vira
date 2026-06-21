import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ArivuOn Academy',
    short_name: 'ArivuOn',
    description: 'Master Python, AI, DevOps, and React with ArivuOn Academy.',
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