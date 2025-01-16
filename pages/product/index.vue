<template>
	<div class="container">
		<div class="section">
			<div class="section__title-box">
				<h2 class="section__title">{{ t('product.title') }}</h2>
				<p class="section__desc">{{ t('product.desc') }}</p>
			</div>
			<div class="card-area">
				<div class="card" :class="{ blur: isHovered && currentIndex !== idx }" @click="item.path" v-for="(item, idx) in products" :key="idx">
					<div class="card__wrap" @mouseover="handleMouseOver(idx)" @mouseleave="handleMouseLeave">
						<div class="card__header">
							<div class="card__header--num">{{ `0${idx + 1}` }}</div>
							<div class="card__header--title">
								<h3>{{ item.title }}</h3>
							</div>
						</div>
						<div class="card__body">
							<p>{{ item.desc }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <BannerComponent /> -->
</template>

<script setup>
	definePageMeta({
		root: 'product',
		header: 'product',
		title: 'Product',
		seoTitle: '제품소개',
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

	const isHovered = ref(false);
	const currentIndex = ref(null);

	const handleMouseOver = index => {
		isHovered.value = true;
		currentIndex.value = index;
	};

	const handleMouseLeave = () => {
		isHovered.value = false;
		currentIndex.value = null;
	};

	const products = computed(() => [
		{
			title: t('product.DigitalWarehousing.title'),
			desc: t('product.DigitalWarehousing.desc'),
			// path: goToDigitalWarehousing,
		},
		{
			title: t('product.optShipping.title'),
			desc: t('product.optShipping.desc'),
			// path: goToOptShipping,
		},
		{
			title: t('product.cloudWms.title'),
			desc: t('product.cloudWms.desc'),
			// path: goToCloudWms,
		},
		{
			title: t('product.ecommerceWms.title'),
			desc: t('product.ecommerceWms.desc'),
			// path: goToEcommerceWms,
		},
		{
			title: t('product.scaleableWms.title'),
			desc: t('product.scaleableWms.desc'),
			// path: goToScaleableWms,
		},
		{
			title: t('product.analytics.title'),
			desc: t('product.analytics.desc'),
			// path: goToAnalytics,
		},
	]);
</script>

<style lang="scss" scoped>
	@use '@css/page/product';

	.container {
		background: $c-bg url('/assets/images/bg-blurry-circles.webp') center bottom no-repeat;
	}
</style>
