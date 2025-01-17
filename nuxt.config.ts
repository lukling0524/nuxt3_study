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
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/css/abstracts" as *;',
				},
			},
		},
	},
	modules: ['@nuxtjs/i18n'],
	i18n: {
		compilation: {
			strictMessage: false,
		},
		defaultLocale: 'ko',
	},
});
