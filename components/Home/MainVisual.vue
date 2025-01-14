<template>
	<div class="main-visual">
		<video class="main-visual__vid" src="/assets/images/main_visual.mp4" muted autoplay loop></video>
		<div class="main-visual__layer"></div>

		<div class="section text-box">
			<Transition name="mainVisualTitle" appear>
				<h1 class="text-box__title" v-html="$t('mainVisual.title')"></h1>
			</Transition>
			<Transition name="mainVisualSub" appear>
				<p class="text-box__sub" v-html="$t('mainVisual.sub')"></p>
			</Transition>
			<Transition name="mainVisualDesc" appear>
				<p class="text-box__desc">{{ $t('mainVisual.desc') }}</p>
			</Transition>
		</div>
	</div>
</template>

<script setup>
	// import { useI18n } from 'vue-i18n';
	const { t } = useI18n();
</script>

<style lang="scss" scoped>
	@use '@css/abstracts' as *;

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
			background-image: url('/assets/images/bg-main_visual.webp');
			background-size: cover;

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
