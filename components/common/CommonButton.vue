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
	type ButtonColor = 'blue' | 'white' | 'navy';
	type ButtonType = 'button' | 'submit' | 'reset';
	type ButtonSize = 'lg';

	interface ButtonProps {
		to?: string;
		type?: ButtonType;
		id?: string;
		color?: ButtonColor;
		customClass?: string;
		size?: ButtonSize;
		label: string; // required
		disabled?: boolean;
	}

	const props = withDefaults(defineProps<ButtonProps>(), {
		type: 'button',
		color: 'navy',
		disabled: false,
	});

	const componentType = computed(() => (props.to ? resolveComponent('NuxtLink') : 'button'));
</script>

<style lang="scss" scoped>
	@use '@css/components/btn';
</style>
