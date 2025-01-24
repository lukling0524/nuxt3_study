import { fileURLToPath } from 'url';

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
		format: ['webp', 'avif', 'jpeg', 'jpg', 'png', 'gif'],
	},
	plugins: ['@/plugins/gsap.client.js'],
});
