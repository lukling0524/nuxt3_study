import { fileURLToPath } from 'url';
import imagemin from 'vite-plugin-imagemin';

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
		plugins: [
			imagemin({
				mozjpeg: { quality: 80 },
				pngquant: { quality: [0.7, 0.8], speed: 4 },
				webp: { quality: 80 },
				avif: { quality: 80 },
			}),
		],
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
		dir: 'public/assets/images',
		provider: 'ipx',
		format: ['webp', 'avif', 'jpeg', 'jpg', 'png', 'gif'],
		screens: {
			sm: 500,
			md: 768,
			lg: 1100,
			xl: 1400,
		},
	},
	plugins: ['@/plugins/gsap.client.js'],
});
