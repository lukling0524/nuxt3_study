<template>
	<component
		:is="componentType"
		:to="to"
		:type="to ? null : type"
		:id="id"
		:class="[
			'btn',
			{
				[`btn__${color}`]: color,
				[`btn__${size}`]: size,
			},
			customClass,
		]"
		:disabled="to ? undefined : disabled"
	>
		<span class="btn__text">{{ label }}</span>
	</component>
</template>

<script lang="ts" setup>
	const props = defineProps({
		to: {
			type: String,
			default: undefined,
		},
		type: {
			type: String as PropType<'button' | 'submit' | 'reset'>,
			default: 'button',
		},
		id: {
			type: String,
			default: undefined,
		},
		color: {
			type: String as PropType<'blue' | 'white' | 'navy'>,
			default: 'navy',
		},
		customClass: {
			type: String,
			default: undefined,
		},
		size: {
			type: String as PropType<'lg'>,
			default: undefined,
		},
		label: {
			type: String,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	});

	const componentType = computed(() => (props.to ? resolveComponent('NuxtLink') : 'button'));
</script>

<style lang="scss" scoped>
	@use '@css/components/btn';
</style>
