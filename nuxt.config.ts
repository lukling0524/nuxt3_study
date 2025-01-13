// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url';
import { createI18n } from 'vue-i18n';

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	alias: {
		'@': fileURLToPath(new URL('./', import.meta.url)),
		'@css': fileURLToPath(new URL('./assets/css', import.meta.url)),
	},
	css: ['~/assets/css/style.scss'],
	buildModules: [],
	i18n: {
		legacy: false, // Vue 3 Composition API 방식으로 사용
		locale: 'ko',
	},
	plugins: ['~/plugins/i18n.ts'],
});
