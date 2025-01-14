// https://nuxt.com/docs/api/configuration/nuxt-config\

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { fileURLToPath } from 'url';
import { I18nOptions } from '@nuxtjs/i18n';
// import { createI18n } from 'vue-i18n';

export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2024-11-01',
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
		plugins: [
			VueI18nPlugin({
				strictMessage: false, // 메시지 내 HTML 허용
				runtimeOnly: false, // 런타임에서만 동작하지 않도록 설정
				compositionOnly: true,
			}),
		],
	},
	modules: ['@nuxtjs/i18n'],
	i18n: {
		langDir: 'locales',
		locales: [
			{ code: 'en', file: 'en/en.json' },
			{ code: 'ko', file: 'ko/ko.json' },
		],
		defaultLocale: 'ko',
		strategy: 'prefix_except_default',
	} as I18nOptions,
});
