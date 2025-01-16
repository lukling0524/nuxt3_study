<template>
	<p>order</p>
</template>

<script setup>
	definePageMeta({
		root: 'solution',
		header: 'solution',
		title: 'Solution',
	});

	const { t } = useI18n();
	const route = useRoute();

	useHead({
		title: `${t('metaText.title')}${route.meta.title}`,
		meta: [
			{ name: 'description', content: t('metaText.description') },
			{ name: 'keywords', content: t('metaText.keywords') },
			{ property: 'og:description', content: t('metaText.description') },
		],
	});
</script>
