<template>
	<NuxtLayout name="404">
		<div class="container">
			<p class="num">404</p>
			<h3 class="section__title">{{ t('404.title') }}</h3>

			<div class="desc" v-html="t('404.desc')"></div>

			<div class="btn-wrap">
				<button class="btn btn__lg btn__navy" @click="goToMain">
					<span class="btn__text">{{ t('404.btnLabel') }}</span>
				</button>
			</div>
		</div>
	</NuxtLayout>
</template>

<script lang="ts" setup>
//	import { useI18n } from 'vue-i18n';
	const { t } = useI18n();
	import { useNavigation } from '@/composables/router';
	const { goToMain } = useNavigation();
</script>

<style lang="scss" scoped>
	.num {
		margin-bottom: rem(24px);
		color: rgba($color: $c-text-grey, $alpha: 0.6);
		font-size: rem(40px);
		font-weight: 700;
	}

	.section__title {
		color: $c-text-grey;
		text-align: center;
	}

	.desc {
		margin: rem(24px) 0 rem(60px);
		text-align: center;
		color: rgba($color: $c-text-grey, $alpha: 0.8);
		font-weight: 500;
		font-size: rem(18px);
		line-height: 1.6;
	}

	.btn-wrap {
		display: flex;
		gap: rem(24px);

		.btn {
			@include shadow03;
		}
	}
</style>
