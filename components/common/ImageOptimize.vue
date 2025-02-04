<template>
	<nuxt-img :src="`/assets/images/${props.src}.png`" :alt="alt" format="webp,avif" loading="lazy" />
</template>

<script setup>
	const props = defineProps({
		src: String,
		alt: String,
	});
</script>
