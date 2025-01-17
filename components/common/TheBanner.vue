<template>
	<div class="banner">
		<div class="banner__text">
			<h2 class="banner__title" v-html="t('banner.title')"></h2>
			<h3 class="banner__desc">{{ t('banner.desc') }}</h3>
			<button class="btn btn__lg btn__navy" @click="goToContact">
				<span class="btn__text">{{ t('banner.btn') }}</span>
			</button>
		</div>
	</div>
</template>

<script setup>
	import { nextTick, watch } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { useI18n } from 'vue-i18n';
	import { useRoute } from 'vue-router';
	import { useNavigation } from '@/composables/router';

	const { goToContact } = useNavigation();
	const route = useRoute();
	const { t } = useI18n();

	gsap.registerPlugin(ScrollTrigger);

	const initializeAnimation = () => {
		nextTick(() => {
			// 배너 애니메이션 트리거 제거
			ScrollTrigger.getAll().forEach(trigger => {
				if (trigger.vars.label === 'animation_banner') {
					trigger.kill();
					// console.log('---🩻🩻🩻 kill banner animation 🩻🩻🩻---');
				}
			});

			const ease = 'power2.out';
			const duration = 1.5;
			const queue = 0.1;

			// 배너 애니메이션 설정
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.banner__text',
						start: 'top 80%',
						end: 'bottom bottom',
						markers: false,
						label: 'animation_banner',
						invalidateOnRefresh: true,
						// onEnter: () => {
						//   console.log('---⭐⭐⭐ banner animation ⭐⭐⭐---');
						// },
					},
				})
				.fromTo('.banner .banner__title', { opacity: 0, ease: ease }, { opacity: 1, duration: duration }, 'queue')
				.fromTo('.banner .banner__desc', { opacity: 0, ease: ease }, { opacity: 1, duration: duration }, `queue+=${queue}`)
				.fromTo('.banner .btn', { opacity: 0, ease: ease }, { opacity: 1, duration: duration }, `queue+=${queue * 2}`);
		});
	};

	watch(
		route,
		() => {
			initializeAnimation(); // 라우터 이동시마다 애니메이션 초기화
		},
		{ immediate: true },
	);
</script>

<style lang="scss" scoped>
	.banner {
		@include flexCenter(center);
		padding: rem(100px) $commonSpaceLRMobile;
		background: url(/assets/images/bg-banner.webp) no-repeat center/cover;

		@include tablet {
			padding: rem(60px) $commonSpaceLRMobile;
		}

		&__text {
			text-align: center;
		}

		&__title {
			color: $c-white;
			font-size: rem(40px);
			font-weight: 700;

			@include tablet {
				font-size: rem(32px);
			}

			@include tablet-sm {
				font-size: rem(24px);
			}
		}

		&__desc {
			margin: rem(24px) 0 rem(48px);
			color: $c-white;
			font-size: rem(18px);

			@include tablet-sm {
				font-size: rem(14px);
			}
		}

		.btn {
			@include shadow03;
			padding: rem(12px) 10%;
		}
	}
</style>
