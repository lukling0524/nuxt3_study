<template>
	<button
		:type="type"
		:class="{
			btn: true,
			[`btn__${color}`]: color !== '',
			[`btn__${size}`]: size !== '',
		}"
		:disabled="diasbled"
	>
		<span class="btn__text">{{ label }}</span>
	</button>
</template>

<script setup>
	defineProps({
		type: {
			type: String,
			default: 'button',
		},
		color: {
			type: String,
			default: '',
		},
		size: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			required: true,
		},
		diasbled: {
			type: Boolean,
			default: false,
		},
	});
</script>

<style lang="scss" scoped></style>
