import { createI18n } from 'vue-i18n';
import en from '../locales/en/en.json';
import ko from '../locales/ko/ko.json';

const messages = {
	en,
	ko,
};

function getPreferredLanguage() {
	const browserLang = (navigator.language || navigator.userLanguage).substr(0, 2);
	return ['en', 'ko'].includes(browserLang) ? browserLang : 'ko';
}

const savedLocale = localStorage.getItem('lang') || getPreferredLanguage();

const i18n = createI18n({
	locale: savedLocale,
	fallbackLocale: 'ko',
	messages,
	legacy: false,
});

nuxtApp.vueApp.use(i18n);

export default i18n;
