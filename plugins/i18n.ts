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
		missingWarn: false,
		warnHtmlInMessage: 'off',
	});

	vueApp.use(i18n);
});
