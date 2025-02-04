import { fileURLToPath } from 'url';
// import imagemin from 'vite-plugin-imagemin';

export default defineNuxtConfig({
	ssr: true,
	experimental: { appManifest: false },
	compatibilityDate: '2025-01-14',
	devtools: { enabled: true },
	alias: {
		'@': fileURLToPath(new URL('./', import.meta.url)),
		'@css': fileURLToPath(new URL('./assets/css', import.meta.url)),
	},
	css: ['@/assets/css/style.scss'],
	vite: {
		build: {
			cssMinify: true,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/css/abstracts" as *;',
				},
			},
		},
	},
	modules: ['@nuxtjs/i18n', '@nuxt/image'],
	i18n: {
		compilation: {
			strictMessage: false,
		},
		locales: ['en', 'ko'],
		defaultLocale: 'ko',
	},
	nitro: {
		compressPublicAssets: true,
	},
	image: {
		format: ['webp', 'avif', 'png'],
		screens: {
			xs: 320,
			sm: 500,
			md: 768,
			lg: 1100,
			xl: 1400,
		},
	},
	plugins: ['@/plugins/gsap.client.js'],
});
