// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://10devet.com',
	base: '/10devet-video',
	integrations: [sitemap()],
});
