<template>
	<div class="main-visual">
		<video class="main-visual__vid" src="/assets/images/main_visual.mp4" muted autoplay loop></video>
		<div class="main-visual__layer"></div>
		<div class="section text-box">
			<Transition name="mainVisualTitle" appear>
				<h1 class="text-box__title" v-html="t('mainVisual.title')"></h1>
			</Transition>
			<Transition name="mainVisualSub" appear>
				<p class="text-box__sub" v-html="t('mainVisual.sub')"></p>
			</Transition>
			<Transition name="mainVisualDesc" appear>
				<p class="text-box__desc">{{ t('mainVisual.desc') }}</p>
			</Transition>
		</div>
	</div>
</template>

<script setup>
	import { useI18n } from 'vue-i18n';
	const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
