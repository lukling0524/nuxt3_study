<template>
	<div
		v-if="headerInfo.page"
		class="sub-header"
		:style="{
			backgroundImage: `url(/assets/images/img-header_${headerInfo.page}.png)`,
		}"
	>
		<h1 class="sub-header__title">{{ headerInfo.title }}</h1>
	</div>
</template>

<script setup>
	// 현재 라우트 정보 가져오기
	const route = useRoute();

	const headerInfo = computed(() => ({
		page: route.meta.header || '',
		title: route.meta.title || '',
	}));
</script>

<style lang="scss" scoped>
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
