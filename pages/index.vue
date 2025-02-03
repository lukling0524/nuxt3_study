<template>
	<HomeVisual />
	<div class="container">
		<HomeCustomer />
		<HomeFunction />
	</div>
</template>

<script setup>
	const { t, locale } = useI18n();

	definePageMeta({
		layout: 'home',
		root: 'main',
	});

	useHead({
		title: `${t('metaText.title')} 테스트`,
		meta: [
			{ name: 'description', content: t('metaText.description') },
			{ name: 'keywords', content: t('metaText.keywords') },
		],
	});
</script>
