<template>
	<div class="container">
		<div class="section">
			<div class="top-section">
				<div class="top-section__text">
					<div class="top-section__title">
						<h2 class="section__title" v-html="t('DigitalWarehousing.topSection.title')"></h2>
					</div>
					<div class="top-section__desc">
						<p>{{ t('DigitalWarehousing.topSection.desc01') }}</p>
						<ul class="top-section__desc--list">
							<li v-for="(item, idx) in topSectionList" :key="idx">{{ item.text }}</li>
						</ul>
						<p>
							{{ t('DigitalWarehousing.topSection.desc02') }}
						</p>
					</div>
				</div>
				<div class="top-section__img">
					<img src="/assets/images/img-product-01.webp" />
				</div>
			</div>
		</div>

		<div class="section">
			<h2 class="section__title text-center">{{ t('DigitalWarehousing.benefits.title') }}</h2>
			<ul class="benefits">
				<li class="benefits__list" v-for="(item, idx) in benefits" :key="idx">
					<div class="benefits__title">
						<span class="benefits__title--num">{{ `0${idx + 1}` }}</span>
						<h3 class="benefits__title--text">{{ item.title }}</h3>
					</div>
					<div class="benefits__desc">
						{{ item.desc }}
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="container bg-gradient">
		<div class="section">
			<div class="box-area">
				<h4 class="box-area__title" v-html="t('DigitalWarehousing.support.title')"></h4>
				<div class="box-area__text">
					{{ t('DigitalWarehousing.support.desc') }}
				</div>
			</div>
		</div>

		<div class="section">
			<h2 class="section__title text-center">{{ t('DigitalWarehousing.mainFunction.title') }}</h2>
			<div class="function-area">
				<div class="function" v-for="(item, idx) in mainFunctions" :key="idx">
					<div class="function__icon" :style="`background-image: url(/assets/images/ico-benefit_1-${idx + 1}.svg)`"></div>
					<div class="function__wrap">
						<h3 class="function__title">{{ item.title }}</h3>
						<ul class="function__desc">
							<li class="function__list" v-for="(desc, key) in item.desc" :key="key">{{ desc }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { t } = useI18n();
	const route = useRoute();
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { computed, onMounted } from 'vue';
	import { clearScrollTriggers, topSectionTextAnimation, topSectionImgAnimation, sectionTitleAnimation, benefitAnimation, boxTextAnimation, prdtFunctionAnimation } from '@/composables/animation';

	definePageMeta({
		root: 'product',
		header: 'product',
		title: 'Product',
		seoTitle: '디지털 창고',
	});

	useHead({
		title: `${t('metaText.title')}${route.meta.seoTitle}`,
		meta: [
			{ name: 'description', content: 'StockFlow WMS는 완전한 창고 운영을 가능하게 합니다. StockFlow WMS 솔루션은 디지털 창고 전환을 위해서 다음과 같은 기능을 제공합니다.' },
			{ property: 'og:title', content: `${t('metaText.title')}${route.seoTitle}` },
		],
	});

	onMounted(() => {
		clearScrollTriggers();
		topSectionTextAnimation();
		topSectionImgAnimation();
		sectionTitleAnimation();
		benefitAnimation(benefits.value);
		boxTextAnimation();
		prdtFunctionAnimation(mainFunctions.value);
	});

	const topSectionList = computed(() => [
		{
			text: t('DigitalWarehousing.topSection.descList.list01'),
		},
		{
			text: t('DigitalWarehousing.topSection.descList.list02'),
		},
		{
			text: t('DigitalWarehousing.topSection.descList.list03'),
		},
		{
			text: t('DigitalWarehousing.topSection.descList.list04'),
		},
	]);

	const benefits = computed(() => [
		{
			title: t('DigitalWarehousing.benefits.accuratedInventory.title'),
			desc: t('DigitalWarehousing.benefits.accuratedInventory.desc'),
		},
		{
			title: t('DigitalWarehousing.benefits.inventoryTracking.title'),
			desc: t('DigitalWarehousing.benefits.inventoryTracking.desc'),
		},
		{
			title: t('DigitalWarehousing.benefits.orderProcess.title'),
			desc: t('DigitalWarehousing.benefits.orderProcess.desc'),
		},
		{
			title: t('DigitalWarehousing.benefits.efficientPicking.title'),
			desc: t('DigitalWarehousing.benefits.efficientPicking.desc'),
		},
	]);

	const mainFunctions = computed(() => [
		{
			title: t('DigitalWarehousing.mainFunction.multiWarehouse.title'),
			desc: {
				desc1: t('DigitalWarehousing.mainFunction.multiWarehouse.desc01'),
				desc2: t('DigitalWarehousing.mainFunction.multiWarehouse.desc02'),
				desc3: t('DigitalWarehousing.mainFunction.multiWarehouse.desc03'),
				desc4: t('DigitalWarehousing.mainFunction.multiWarehouse.desc04'),
			},
		},
		{
			title: t('DigitalWarehousing.mainFunction.mobileOperation.title'),
			desc: {
				desc1: t('DigitalWarehousing.mainFunction.mobileOperation.desc01'),
				desc2: t('DigitalWarehousing.mainFunction.mobileOperation.desc02'),
			},
		},
		{
			title: t('DigitalWarehousing.mainFunction.onlineMall.title'),
			desc: {
				desc1: t('DigitalWarehousing.mainFunction.onlineMall.desc01'),
				desc2: t('DigitalWarehousing.mainFunction.onlineMall.desc02'),
				desc3: t('DigitalWarehousing.mainFunction.onlineMall.desc03'),
			},
		},
		{
			title: t('DigitalWarehousing.mainFunction.globalWarehouse.title'),
			desc: {
				desc1: t('DigitalWarehousing.mainFunction.globalWarehouse.desc01'),
				desc2: t('DigitalWarehousing.mainFunction.globalWarehouse.desc02'),
			},
		},
	]);
</script>

<style lang="scss" scoped>
	@use '@css/page/product';

	.bg-gradient {
		padding-top: 0;
		background: url('/assets/images/bg-blurry-gradient.webp') center bottom no-repeat;
	}
</style>
