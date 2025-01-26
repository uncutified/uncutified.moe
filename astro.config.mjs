// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://leteeno.net',
	integrations: [mdx(), sitemap()],
	// i18n: {
	// 	locales: ["de", "en"],
	// 	defaultLocale: "en",
	// 	routing: {
	// 		prefixDefaultLocale: true
	// 	}
	//   }
});

