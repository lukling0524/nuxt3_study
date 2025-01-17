<template>
	<div id="wrap">
		<ClientOnly>
			<template v-if="mounted">
				<HeaderComponent v-if="isDesktop" />
				<HeaderMobileComponent v-else />
			</template>
			<template #fallback>
				<MobileHeaderComponent />
			</template>
		</ClientOnly>
		<div :class="['transition', pageEnter, pageLeave]">
			<slot></slot>
		</div>
		<CommonTheBanner />
		<CommonTheFooter />
	</div>
</template>

<script setup>
	import { ref, onMounted, onUnmounted } from 'vue';
	import { useRoute } from 'vue-router';
	import { useMatchMedia } from '~/composables/useMatchMedia';
	const route = useRoute();
	const pageEnter = ref('');
	const pageLeave = ref('');

	const { isDesktop, mounted, setupEventListeners, cleanupEventListeners } = useMatchMedia();

	// 컴포넌트에서 직접 onMounted와 onUnmounted 처리
	onMounted(() => {
		setupEventListeners();
	});

	onUnmounted(() => {
		cleanupEventListeners();
	});

	watch(route, () => {
		pageEnter.value = 'page-enter';
		pageLeave.value = 'page-leave';
		setTimeout(() => {
			pageEnter.value = '';
			pageLeave.value = '';
		}, 500); // css animation duration과 일치해야함
	});
</script>
