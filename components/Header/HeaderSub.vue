<template>
	<div
		class="sub-header"
		:style="{
			backgroundImage: `url(/assets/images/img-header_${page}.png)`,
		}"
	>
		<h1 class="sub-header__title">{{ title }}</h1>
	</div>
</template>

<script setup>
	// 현재 라우트 정보 가져오기
	const route = useRoute();

	// `meta`에서 `header`와 `title` 값을 가져오기
	const page = ref('');
	const title = ref('');

	watch(
		() => route.fullPath, // `fullPath`를 사용하여 라우터 상태가 변경될 때마다 추적
		() => {
			page.value = route.meta.header || '';
			title.value = route.meta.title || '';

			console.log(page.value);
		},
		{ immediate: true }, // 즉시 실행하여 처음 값을 설정
	);
</script>

<style lang="scss" scoped>
	// transition style
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.sub-header {
		width: 100%;
		height: rem(350px);
		@include flexCenter(center);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;

		@include tablet-sm {
			height: rem(300px);
		}

		&__title {
			color: $c-white;
			font-size: rem(44px);
			font-weight: 700;

			@include tablet-sm {
				font-size: rem(32px);
			}
		}
	}
</style>
