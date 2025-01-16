<template>
	<div class="main-visual" :key="$route.fullPath">
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
	const beforeEnter = el => {
		// 트랜지션 시작 전에 초기 상태 설정
		el.style.transform = 'translateX(-100px)';
		el.style.opacity = '0';
	};

	const afterLeave = el => {
		// 트랜지션 종료 후 상태 초기화
		el.style.transform = '';
		el.style.opacity = '';
	};
</script>

<style lang="scss" scoped>
	@use '@css/abstracts' as *;

	// transition style
	.mainVisualSub-enter-from,
	.mainVisualTitle-enter-from,
	.mainVisualDesc-enter-from {
		transform: translateX(rem(-100px));
		opacity: 0;
	}

	.mainVisualSub-enter-active,
	.mainVisualTitle-enter-active,
	.mainVisualDesc-enter-active {
		transition: 1s cubic-bezier(0.5, 1, 0.89, 1);
	}

	$delay: 0.2s;

	.mainVisualSub-enter-active {
		transition-delay: $delay;
	}
	.mainVisualTitle-enter-active {
		transition-delay: $delay * 2;
	}
	.mainVisualDesc-enter-active {
		transition-delay: $delay * 3;
	}

	.mainVisualSub-enter-to,
	.mainVisualTitle-enter-to,
	.mainVisualDesc-enter-to {
		transform: translateX(0);
		opacity: 1;
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
