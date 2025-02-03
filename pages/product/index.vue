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
</template>

<script setup>
	import { ref, computed, onMounted } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { sectionTitleAndDescAnimation } from '@/composables/animation';

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
			{ name: 'description', content: 'ssr test 루벤티스의 SaaS WMS, StockFlow 입니다.' },
			{ property: 'og:title', content: `${t('metaText.title')}${route.meta.title}` },
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

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		sectionTitleAndDescAnimation();

		// card element animation
		function createCardAnimation(triggerEl) {
			return gsap
				.timeline({
					scrollTrigger: {
						trigger: `.card-area .card:nth-child(${triggerEl})`,
						start: 'top 85%',
						end: 'bottom bottom',
						markers: false,
						invalidateOnRefresh: true,
					},
				})
				.to(`.card-area .card:nth-child(${triggerEl})`, { y: 0, opacity: 1, duration: 1, delay: 0.3 });
		}

		const functionCardAnimations = [];

		// products(.card) 개수만큼 반복 출력
		for (let i = 1; i <= products.value.length; i++) {
			functionCardAnimations.push(createCardAnimation(i.toString()));
		}
	});

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
