<template>
	<div class="transition">
		<div class="container">
			<div class="section">
				<div class="section__title-box">
					<h2 class="section__title">{{ t('order.title') }}</h2>
					<h3 class="section__desc">{{ t('order.desc') }}</h3>
				</div>
			</div>
			<div class="info-graphic-box">
				<picture>
					<source media="(min-width: 1101px)" :srcset="`/assets/images/img-order-${currentLang}.svg`" />
					<source media="(max-width: 1101px)" class="mobile-img" :srcset="`/assets/images/img-order-${currentLang}_mob.svg`" />
					<img :src="`/assets/images/img-order-${currentLang}.svg`" alt="order infographic" />
				</picture>
			</div>
			<template v-if="mounted">
				<div class="text-area" v-show="!isDesktop">
					<div class="box" v-for="(item, idx) in boxText" :key="idx">
						<div class="box__title">
							<img :src="`/assets/images/ico-order-0${idx + 1}.svg`" :alt="`${item.title} icon`" />
							<p class="box__title--text">{{ item.title }}</p>
						</div>
						<div class="box__text">{{ item.desc }}</div>
					</div>
				</div>
			</template>
		</div>
		<BannerComponent />
	</div>
</template>
<script setup>
	definePageMeta({
		root: 'solution',
		header: 'solution',
		title: 'Solution',
		seoTitle: '주문관리',
	});

	import { useMatchMedia } from '~/composables/useMatchMedia';
	const { isDesktop, mounted, setupEventListeners, cleanupEventListeners } = useMatchMedia();
	const { locale, t } = useI18n();
	const route = useRoute();

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { sectionTitleAndDescAnimation, solutionImgAnimation } from '@/composables/animation';

	onMounted(() => {
		setupEventListeners();
	});

	onUnmounted(() => {
		cleanupEventListeners();
	});

	useHead({
		title: `${t('metaText.title')}${route.meta.title}`,
		meta: [
			{ name: 'description', content: '멀티채널 기반의 고도화된 주문관리 시스템으로 오더 통합/분배 및 재고와의 효율적인 연결을 제공하는 시스템입니다.' },
			{ property: 'og:title', content: `${t('metaText.title')}${route.meta.seoTitle}` },
		],
	});

	const currentLang = computed(() => (locale.value === 'ko' ? 'ko' : 'en'));

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		sectionTitleAndDescAnimation();
		solutionImgAnimation();

		// mobile only (card)
		function createCardAnimation(triggerEl) {
			return gsap
				.timeline({
					scrollTrigger: {
						trigger: `.text-area .box:nth-child(${triggerEl})`,
						start: 'top 70%',
						end: 'bottom bottom',
						markers: false,
						invalidateOnRefresh: true,
					},
				})
				.fromTo(`.text-area .box:nth-child(${triggerEl})`, { y: 40, opacity: 0, ease: 'power3.in' }, { y: 0, opacity: 1, duration: 1 });
		}

		const functionCardAnimations = [];

		// products(.card) 개수만큼 반복 출력
		for (let i = 1; i <= boxText.value.length; i++) {
			functionCardAnimations.push(createCardAnimation(i.toString()));
		}
	});

	const boxText = computed(() => [
		{
			title: t('order.infographic.receive.title'),
			desc: t('order.infographic.receive.desc'),
		},
		{
			title: t('order.infographic.shipping.title'),
			desc: t('order.infographic.shipping.desc'),
		},
		{
			title: t('order.infographic.delivery.title'),
			desc: t('order.infographic.delivery.desc'),
		},
		{
			title: t('order.infographic.return.title'),
			desc: t('order.infographic.return.desc'),
		},
		{
			title: t('order.infographic.replenish.title'),
			desc: t('order.infographic.replenish.desc'),
		},
	]);
</script>

<style lang="scss" scoped>
	@use '@css/page/solution';

	.info-graphic-box {
		img {
			max-width: rem(1400px);

			@include laptop {
				padding: 0;
			}

			@include tablet {
				max-width: rem(480px);
			}

			@include tablet-sm {
				margin-bottom: rem(40px);
			}
		}
	}
</style>
