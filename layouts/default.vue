<template>
	<div id="wrap">
		<ClientOnly>
			<template v-if="mounted">
				<HeaderComponent v-if="isDesktop" />
				<HeaderMobileComponent v-else />
			</template>
			<template #fallback>
				<HeaderMobileComponent />
			</template>
		</ClientOnly>
		<HeaderSub />
		<slot></slot>
		<CommonTheBanner />
		<CommonTheFooter />
	</div>
</template>

<script setup lang="ts">
	import { onMounted, onUnmounted } from 'vue';
	import { useMatchMedia } from '~/composables/useMatchMedia';

	const { isDesktop, mounted, setupEventListeners, cleanupEventListeners } = useMatchMedia();

	// 컴포넌트에서 직접 onMounted와 onUnmounted 처리
	onMounted(() => {
		setupEventListeners();
	});

	onUnmounted(() => {
		cleanupEventListeners();
	});
</script>
