<template>
	<HomeVisual />
	<div class="container">
		<HomeCustomer />
		<HomeFunction />
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'home',
		root: 'main',
	});

	useHead({
		htmlAttrs: { lang: newLocale },
		title: `${t('metaText.title')} 테스트`,
		meta: [
			{ name: 'description', content: t('metaText.description') },
			{ name: 'keywords', content: t('metaText.keywords') },
		],
	});
</script>
