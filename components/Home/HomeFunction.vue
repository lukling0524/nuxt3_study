<template>
	<div id="function" class="section">
		<h2 class="section__title text-center">{{ t('MainFunction.title') }}</h2>
		<ul class="functions">
			<li :id="`function_${idx + 1}`" class="functions__wrap" v-for="(item, idx) in functions" :key="idx">
				<div class="functions__img">
					<!-- <nuxt-img :src="`/assets/images/img-main_func-0${idx + 1}.png`" :fallback="`/assets/images/img-main_func-0${idx + 1}.png`" format="avif" :alt="item.title" loading="lazy" /> -->
					<ImageOptimize :src="`img-main_func-0${idx + 1}.png`" :alt="item.title" />
				</div>
				<div class="functions__text">
					<div class="functions__title">
						<img class="functions__title--ico" :src="`/assets/images/ico-main_func-0${idx + 1}.svg`" :alt="`${item.title} icon`" />
						<h3 class="functions__title--text">{{ item.title }}</h3>
					</div>
					<h4 class="functions__sub">{{ item.sub }}</h4>
					<p class="functions__desc">{{ item.desc }}</p>
					<CommonButton class="btn-more" label="view more" @click="item.path" />
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { computed, onMounted } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import ImageOptimize from '../common/ImageOptimize.vue';
	// import ButtonComponent from '@/components/common/ButtonComponent.vue';
	// import { useI18n } from 'vue-i18n';
	// import { useNavigation } from '@/utils/router';
	// const { goToReceive, goToInventory, goToOrder, goToShipping } = useNavigation();

	const { t } = useI18n();

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		// title: StockFlow의 주요 기능
		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#function',
					start: 'top 80%',
					markers: false,
					invalidateOnRefresh: true,
				},
			})
			.fromTo('#function .section__title', { y: 20, opacity: 0, ease: 'power2.inOut' }, { y: 0, opacity: 1 });

		// 주요기능 컨텐츠
		const posX = -20;
		const ease = 'power1.in';
		const queue = 0.1;

		function createTextAnimation(triggerEl) {
			return gsap
				.timeline({
					scrollTrigger: {
						trigger: triggerEl,
						start: 'top 80%',
						end: 'bottom bottom',
						markers: false,
						invalidateOnRefresh: true,
					},
				})
				.fromTo(`${triggerEl} .functions__img`, { opacity: 0, ease: ease }, { opacity: 1, duration: 1.3 }, 'queue')
				.fromTo(`${triggerEl} .functions__title`, { x: posX, opacity: 0, ease: ease }, { x: 0, opacity: 1, duration: 0.8 }, 'queue')
				.fromTo(`${triggerEl} .functions__sub`, { x: posX, opacity: 0, ease: ease }, { x: 0, opacity: 1, duration: 0.8 }, `queue+=${queue}`)
				.fromTo(`${triggerEl} .functions__desc`, { x: posX, opacity: 0, ease: ease }, { x: 0, opacity: 1, duration: 0.8 }, `queue+=${queue * 2}`)
				.fromTo(`${triggerEl} .btn-more`, { x: posX, opacity: 0, ease: ease }, { x: 0, opacity: 1, duration: 0.8 }, 'queue');
		}

		const functionMainFuncs = [];

		// functions 개수만큼 반복 출력
		for (let i = 1; i <= functions.value.length; i++) {
			functionMainFuncs.push(createTextAnimation(`#function_${i}`));
		}
	});

	const functions = computed(() => [
		{
			title: t('MainFunction.receive.title'),
			sub: t('MainFunction.receive.sub'),
			desc: t('MainFunction.receive.desc'),
			// path: goToReceive,
		},
		{
			title: t('MainFunction.inventory.title'),
			sub: t('MainFunction.inventory.sub'),
			desc: t('MainFunction.inventory.desc'),
			// path: goToInventory,
		},
		{
			title: t('MainFunction.order.title'),
			sub: t('MainFunction.order.sub'),
			desc: t('MainFunction.order.desc'),
			// path: goToOrder,
		},
		{
			title: t('MainFunction.shipping.title'),
			sub: t('MainFunction.shipping.sub'),
			desc: t('MainFunction.shipping.desc'),
			// path: goToShipping,
		},
	]);
</script>

<style lang="scss" scoped>
	.functions {
		margin-top: rem(74px);

		@include tablet-sm {
			margin-top: rem(40px);
		}

		&__wrap {
			display: flex;
			justify-content: space-between;
			gap: rem(88px);

			@include tablet {
				gap: rem(56px);
			}

			@include tablet-sm {
				flex-direction: column;
				gap: rem(20px);
			}

			&:not(:first-child) {
				margin-top: rem(140px);

				@include tablet {
					margin-top: rem(100px);
				}

				@include tablet-sm {
					margin-top: rem(50px);
				}
			}

			&:nth-child(even) {
				.functions__img {
					order: 2;
				}
			}
		}

		&__img {
			flex: 1;
			@include flexCenter(center);

			img {
				width: 100%;
				border-radius: rem(24px);
				overflow: hidden;
			}
		}

		&__text {
			flex: 1;
			padding-top: rem(24px);

			@include tablet-sm {
				order: 2;
			}
		}

		&__title {
			@include flexCenter;
			gap: rem(8px);

			&--ico {
				@include tablet {
					width: rem(40px);
				}

				@include tablet-sm {
					width: rem(32px);
				}
			}

			&--text {
				font-size: rem(30px);
				font-weight: 700;

				@include tablet {
					font-size: rem(24px);
				}

				@include tablet-sm {
					font-size: rem(20px);
				}
			}
		}

		&__sub {
			margin-top: rem(12px);
			color: $c-primary;
			font-size: rem(20px);
			font-weight: 500;

			@include tablet {
				font-size: rem(18px);
			}

			@include tablet-sm {
				font-size: rem(14px);
			}
		}

		&__desc {
			margin-top: rem(32px);
			color: $c-text-grey;
			font-size: rem(18px);
			font-weight: 500;

			@include tablet {
				font-size: rem(16px);
			}

			@include tablet-sm {
				margin-top: rem(12px);
				font-size: rem(14px);
			}
		}
	}
</style>
