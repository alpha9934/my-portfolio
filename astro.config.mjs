import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alpha9934.github.io', // Replace with your actual GitHub username URL
  base: '/', 
  integrations: [tailwind()],
  output: 'static',
});