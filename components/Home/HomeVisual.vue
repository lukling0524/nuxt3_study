<template>
	<div class="main-visual">
		<!-- <video class="main-visual__vid" src="/assets/images/cut.webm" poster="/assets/images/main_visual-thumb.webp" muted autoplay playsinline loop preload="metadata"></video> -->

		<nuxt-img v-if="!isPageLoaded" class="main-visual__vid" src="/assets/images/main_visual-thumb.webp" fallback="/assets/images/main_visual-thumb.webp" format="webp" loading="lazy" />
		<img v-if="isPageLoaded" class="main-visual__vid" src="/assets/images/cut_high.gif" alt="" />
		<!-- <nuxt-img class="main-visual__vid" src="/assets/images/cut.apng" fallback="/assets/images/cut.apng" format="apng" loading="lazy" /> -->
		<div class="main-visual__layer"></div>

		<div class="section text-box">
			<h1 v-if="isPageLoaded" class="text-box__title delayed-animation" v-html="t('mainVisual.title')"></h1>
			<p v-if="isPageLoaded" class="text-box__sub delayed-animation" v-html="t('mainVisual.sub')"></p>
			<p v-if="isPageLoaded" class="text-box__desc delayed-animation">{{ t('mainVisual.desc') }}</p>
			<h1 v-if="isPageLoaded" class="text-box__title delayed-animation" v-html="t('mainVisual.title')"></h1>
			<p v-if="isPageLoaded" class="text-box__sub delayed-animation" v-html="t('mainVisual.sub')"></p>
			<p v-if="isPageLoaded" class="text-box__desc delayed-animation">{{ t('mainVisual.desc') }}</p>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, nextTick } from 'vue';
	const { t } = useI18n();
	const isPageLoaded = ref(false);

	onMounted(() => {
		if (import.meta.env.SSR === false) {
			setTimeout(() => {
				isPageLoaded.value = true;
			}, 300);
		}
	});
</script>

<style lang="scss" scoped>
	@use '@css/abstracts' as *;
	.delayed-animation {
		opacity: 0;
	.delayed-animation {
		opacity: 0;
		transform: translateX(rem(-100px));
		animation: fadeInMove 0.8s cubic-bezier(0.5, 1, 0.89, 1) forwards;
		animation: fadeInMove 0.8s cubic-bezier(0.5, 1, 0.89, 1) forwards;
	}

	$delay: 0.2s;

	.text-box__sub {
		animation-delay: $delay;
	.text-box__sub {
		animation-delay: $delay;
	}

	.text-box__title {
		animation-delay: $delay * 2;

	.text-box__title {
		animation-delay: $delay * 2;
	}

	.text-box__desc {
		animation-delay: $delay * 3;

	.text-box__desc {
		animation-delay: $delay * 3;
	}

	@keyframes fadeInMove {
		from {
			opacity: 0;
			transform: translateX(rem(-100px));
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	@keyframes fadeInMove {
		from {
			opacity: 0;
			transform: translateX(rem(-100px));
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.main-visual {
		position: relative;
		height: fit-content;
		max-height: 100vh;
		min-height: rem(540px);
		overflow: hidden;

		@include tablet {
			margin-top: -$headerMobile;
		}

		@include mobile {
			min-height: 100vh;
		}

		&__vid {
			width: 100vw;
			height: 100vh;
			object-fit: cover;
		}

		&__layer {
			width: 100%;
			height: calc(100% + $headerHeight);
			position: absolute;
			top: 0;
			margin-top: -$headerHeight;
			/* background-image: url('/assets/images/bg-main_visual.webp'); */
			/* background-image: url('/assets/images/bg-main_visual.webp'); */
			background-size: cover;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='900' fill='none'%3E%3Cpath fill='url(%23a)' d='M1920 422h1920v422H1920z' opacity='.7' style='mix-blend-mode:multiply' transform='rotate(180 1920 422)'/%3E%3Cpath fill='%23000' d='M0 0h1920v900H0z' opacity='.3' style='mix-blend-mode:multiply'/%3E%3Cpath fill='url(%23b)' d='M0 478h1920v422H0z' opacity='.8' style='mix-blend-mode:multiply'/%3E%3Cpath fill='url(%23c)' d='M0 0h900v1171H0z' opacity='.9' style='mix-blend-mode:multiply' transform='matrix(0 -1 -1 0 1171 900)'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='2980' x2='2972' y1='844' y2='440' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='1060' x2='1052' y1='900' y2='496' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='496.875' x2='367.193' y1='1171' y2='64.71' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='900' fill='none'%3E%3Cpath fill='url(%23a)' d='M1920 422h1920v422H1920z' opacity='.7' style='mix-blend-mode:multiply' transform='rotate(180 1920 422)'/%3E%3Cpath fill='%23000' d='M0 0h1920v900H0z' opacity='.3' style='mix-blend-mode:multiply'/%3E%3Cpath fill='url(%23b)' d='M0 478h1920v422H0z' opacity='.8' style='mix-blend-mode:multiply'/%3E%3Cpath fill='url(%23c)' d='M0 0h900v1171H0z' opacity='.9' style='mix-blend-mode:multiply' transform='matrix(0 -1 -1 0 1171 900)'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='2980' x2='2972' y1='844' y2='440' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='1060' x2='1052' y1='900' y2='496' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='496.875' x2='367.193' y1='1171' y2='64.71' gradientUnits='userSpaceOnUse'%3E%3Cstop/%3E%3Cstop offset='1' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");

			@include tablet {
				opacity: 0.9;
			}

			@include mobile {
				opacity: 0.8;
			}
		}
	}

	.text-box {
		max-width: $commonSectionMaxWidth + ($commonSpaceLR * 2);
		display: flex;
		flex-direction: column;
		padding: 0 $commonSpaceLR;
		@include positionCenter;
		color: $c-white;

		@include tablet-sm {
			max-width: $commonSectionMaxWidth + ($commonSpaceLRMobile * 2);
			padding: 0 $commonSpaceLRMobile;
		}

		&__title {
			order: 2;
			margin: rem(24px) 0 rem(48px);
			font-size: rem(60px);
			font-weight: 700;
			line-height: 1.3;

			&:deep(.text-gradient) {
				font-weight: 800;
			}

			@include laptop {
				font-size: rem(48px);
			}

			@include tablet {
				font-size: rem(40px);
			}

			@include tablet-sm {
				font-size: rem(24px);
			}
		}

		&__sub {
			order: 1;
			font-size: rem(24px);
			font-weight: 600;

			@include laptop {
				font-size: rem(20px);
			}

			@include tablet-sm {
				font-size: rem(16px);
				font-weight: 500;
			}
		}

		&__desc {
			order: 3;
			font-size: rem(18px);
			font-weight: 400;

			@include tablet-sm {
				font-size: rem(14px);
			}
		}
	}
</style>
