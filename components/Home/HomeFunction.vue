<template>
	<div id="function" class="section">
		<h2 class="section__title text-center">{{ t('MainFunction.title') }}</h2>
		<ul class="functions">
			<li :id="`function_${idx + 1}`" class="functions__wrap" v-for="(item, idx) in functions" :key="idx">
				<div class="functions__img">
					<ImageOptimize :src="`img-main_func-0${idx + 1}.png`" :alt="item.title" />
				</div>
				<div class="functions__text">
					<div class="functions__title">
						<img class="functions__title--ico" :src="`/assets/images/ico-main_func-0${idx + 1}.svg`" :alt="`${item.title} icon`" />
						<h3 class="functions__title--text">{{ item.title }}</h3>
					</div>
					<h4 class="functions__sub">{{ item.sub }}</h4>
					<p class="functions__desc">{{ item.desc }}</p>
					<CommonButton id="btn" label="버튼태그" />
					<CommonButton to="/#" class="btn-more" color="blue" label="AA앵커태그" />
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { computed, onMounted } from 'vue';

	const { t } = useI18n();

	const functions = computed(() => [
		{
			title: t('MainFunction.receive.title'),
			sub: t('MainFunction.receive.sub'),
			desc: t('MainFunction.receive.desc'),
			// path: goToReceive,
		},
		{
			title: t('MainFunction.inventory.title'),
			sub: t('MainFunction.inventory.sub'),
			desc: t('MainFunction.inventory.desc'),
			// path: goToInventory,
		},
		{
			title: t('MainFunction.order.title'),
			sub: t('MainFunction.order.sub'),
			desc: t('MainFunction.order.desc'),
			// path: goToOrder,
		},
		{
			title: t('MainFunction.shipping.title'),
			sub: t('MainFunction.shipping.sub'),
			desc: t('MainFunction.shipping.desc'),
			// path: goToShipping,
		},
	]);
</script>

<style lang="scss" scoped>
	.functions {
		margin-top: rem(74px);

		@include tablet-sm {
			margin-top: rem(40px);
		}

		&__wrap {
			display: flex;
			justify-content: space-between;
			gap: rem(88px);

			@include tablet {
				gap: rem(56px);
			}

			@include tablet-sm {
				flex-direction: column;
				gap: rem(20px);
			}

			&:not(:first-child) {
				margin-top: rem(140px);

				@include tablet {
					margin-top: rem(100px);
				}

				@include tablet-sm {
					margin-top: rem(50px);
				}
			}

			&:nth-child(even) {
				.functions__img {
					order: 2;
				}
			}
		}

		&__img {
			flex: 1;
			@include flexCenter(center);

			img {
				width: 100%;
				border-radius: rem(24px);
				overflow: hidden;
			}
		}

		&__text {
			flex: 1;
			padding-top: rem(24px);

			@include tablet-sm {
				order: 2;
			}
		}

		&__title {
			@include flexCenter;
			gap: rem(8px);

			&--ico {
				@include tablet {
					width: rem(40px);
				}

				@include tablet-sm {
					width: rem(32px);
				}
			}

			&--text {
				font-size: rem(30px);
				font-weight: 700;

				@include tablet {
					font-size: rem(24px);
				}

				@include tablet-sm {
					font-size: rem(20px);
				}
			}
		}

		&__sub {
			margin-top: rem(12px);
			color: $c-primary;
			font-size: rem(20px);
			font-weight: 500;

			@include tablet {
				font-size: rem(18px);
			}

			@include tablet-sm {
				font-size: rem(14px);
			}
		}

		&__desc {
			margin-top: rem(32px);
			color: $c-text-grey;
			font-size: rem(18px);
			font-weight: 500;

			@include tablet {
				font-size: rem(16px);
			}

			@include tablet-sm {
				margin-top: rem(12px);
				font-size: rem(14px);
			}
		}
	}
</style>
