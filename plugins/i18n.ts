import { createI18n } from 'vue-i18n';
import ko from '@/i18n/locales/ko/ko.json';
import en from '@/i18n/locales/en/en.json';

export default defineNuxtPlugin(({ vueApp }) => {
	const i18n = createI18n({
		legacy: false,
		globalInjection: true,
		locale: 'ko',
		messages: {
			ko,
			en,
		},
	});

	// 클라이언트 사이드에서만 실행
	if (import.meta.env.SSR === false) {
		function getPreferredLanguage() {
			const browserLang = (navigator.language || navigator.userLanguage).substr(0, 2);
			return ['en', 'ko'].includes(browserLang) ? browserLang : 'ko';
		}

		const savedLocale = localStorage.getItem('lang') || getPreferredLanguage();
		i18n.global.locale.value = savedLocale;
	}

	vueApp.use(i18n);
});
