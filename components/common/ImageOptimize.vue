<template>
	<nuxt-img :class="props.class" :src="`/assets/images/${props.src}`" :fallback="`/assets/images/${props.src}`" :alt="alt" format="webp,avif" loading="lazy" />
</template>

<script setup>
	const props = defineProps({
		class: String,
		src: String,
		alt: String,
	});
</script>
