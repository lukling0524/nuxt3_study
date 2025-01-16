<template>
	<div :class="['transition', pageEnter, pageLeave]">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
	import { RouterView } from 'vue-router';
	import { onMounted, watch } from 'vue';
	import { useI18n } from 'vue-i18n';
	// import { useHead } from '@vueuse/head';

	// import { matchMedia } from '@/utils/matchMedia';

	const { t, locale } = useI18n();

	function updateHtmlLang(newLocale) {
		if (process.client) {
			document.documentElement.lang = newLocale;
		}

		// meta tag 동적 생성
		useHead({
			htmlAttrs: { lang: newLocale },
			title: `${t('metaText.title')} SaaS WMS는 StockFlow`,
			meta: [
				{ name: 'description', content: t('metaText.description') },
				{ name: 'keywords', content: t('metaText.keywords') },
				{ property: 'og:title', content: t('metaText.title') },
				{ property: 'og:description', content: t('metaText.description') },
				{ property: 'og:locale', content: t('metaText.og-locale') },
			],
		});
	}

	// const { isDesktop } = matchMedia();

	onMounted(() => {
		if (process.client) {
			const savedLocale = localStorage.getItem('lang') || (navigator.language || navigator.userLanguage).substr(0, 2);
			locale.value = savedLocale;
			updateHtmlLang(savedLocale);
		}
	});

	watch(locale, newLocale => {
		updateHtmlLang(newLocale);
	});

	import { useRoute } from 'vue-router';
	import { ref } from 'vue';
	import HeaderComponent from './components/Header/HeaderComponent.vue';

	const route = useRoute();
	const pageEnter = ref('');
	const pageLeave = ref('');

	watch(route, () => {
		pageEnter.value = 'page-enter';
		pageLeave.value = 'page-leave';
		setTimeout(() => {
			pageEnter.value = '';
			pageLeave.value = '';
		}, 500); // css animation duration과 일치해야함
	});

	// 	console.log(
	// 		`
	// %c  ______                 _     _______ _
	// %c / _____) _             | |   (_______) |
	// %c( (____ _| |_ ___   ____| |  _ _____  | | ___  _ _ _
	// %c \\____ (_   _) _ \\ / ___) |_/ )  ___) | |/ _ \\| | | |
	// %c _____) )| || |_| ( (___|  _ (| |     | | |_| | | | |
	// %c(______/  \\__)___/ \\____)_| \\_)_|      \\_)___/ \\___/
	//
	//
	//                                                                         Lubentis 2024
	// `,
	// 		'color:#0f539e',
	// 		'color:#4472c2',
	// 		'color:#638cdf',
	// 		'color:#81a7fd',
	// 		'color:#9fc3ff',
	// 		'color:#bde0ff',
	// 	);
</script>

<style>
	/* 화면 전환 transition */
	.page-enter {
		animation: fade-out 0.5s cubic-bezier(0.5, 1, 0.89, 1) both;
	}

	.page-leave {
		animation: fade-in 0.5s cubic-bezier(0.5, 1, 0.89, 1) both;
	}

	@keyframes fade-out {
		0% {
			visibility: visible;
			opacity: 1;
		}

		100% {
			visibility: hidden;
			opacity: 0;
		}
	}

	@keyframes fade-in {
		0% {
			visibility: hidden;
			opacity: 0;
		}
		100% {
			visibility: visible;
			opacity: 1;
		}
	}
</style>
