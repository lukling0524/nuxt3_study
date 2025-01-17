<template>
	<div id="customer" class="section">
		<h2 class="section__title text-center">{{ $t('MainCustomer.title') }}</h2>
		<div class="box-area">
			<div class="box-area__img">
				<img class="img__original" :src="`/assets/images/img-main_features-${currentLang}.png`" :alt="$t('MainCustomer.alt')" />

				<img id="obj1" class="img__obj" src="/assets/images/img-customer-obj-1.png" alt="face object" />
				<img id="obj2" class="img__obj" src="/assets/images/img-customer-obj-2.png" alt="face object" />
				<img id="obj3" class="img__obj" src="/assets/images/img-customer-obj-3.png" alt="face object" />

				<img id="card1" class="img__card" :src="`/assets/images/img-customer-card-1-${currentLang}.svg`" :alt="$t('MainCustomer.alt')" />
				<img id="card2" class="img__card" :src="`/assets/images/img-customer-card-2-${currentLang}.svg`" :alt="$t('MainCustomer.alt')" />
				<img id="card3" class="img__card" :src="`/assets/images/img-customer-card-3-${currentLang}.svg`" :alt="$t('MainCustomer.alt')" />
			</div>

			<div class="box-area__text">
				<h3 id="text" v-html="$t('MainCustomer.text')"></h3>
				<button id="btn" class="btn btn__lg btn__navy" @click="goToCustomer">
					<span class="btn__text">{{ $t('MainCustomer.btn') }}</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { computed, onMounted } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	// import { useI18n } from 'vue-i18n';
	// import { useNavigation } from '@/utils/router';
	// const { goToCustomer } = useNavigation();
	//
	const { locale, t } = useI18n();
	const currentLang = computed(() => (locale.value === 'ko' ? 'ko' : 'en'));

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		// title: 고객 성공 사례
		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#customer',
					start: 'top 80%',
					end: 'bottom bottom',
					markers: false,
					invalidateOnRefresh: true,
				},
			})
			.fromTo('#customer .section__title', { x: -40, opacity: 0, ease: 'power4.in' }, { x: 0, opacity: 1 });

		// 이미지 영역 animation
		const objEase = 'power2.in';
		const objDuration = 0.5;
		const cardEase = 'power4.in';
		const cardDuration = 0.8;

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '.img__original',
					start: 'top 80%',
					end: 'bottom bottom',
					markers: false,
					invalidateOnRefresh: true,
				},
			})
			.fromTo('#customer #obj3', { x: -100, y: -70, opacity: 0, ease: objEase }, { x: 0, y: 0, opacity: 1, duration: objDuration }, 'queue')
			.fromTo('#customer #obj2', { x: 100, y: 20, opacity: 0, ease: objEase }, { x: 0, y: 0, opacity: 1, duration: objDuration }, 'queue+=0.15')
			.fromTo('#customer #obj1', { x: -100, y: 70, opacity: 0, ease: objEase }, { x: 0, y: 0, opacity: 1, duration: objDuration }, 'queue+=0.3')
			.fromTo('#customer #card3', { y: 20, opacity: 0, ease: cardEase }, { y: 0, opacity: 1, duration: cardDuration }, 'queue')
			.fromTo('#customer #card2', { y: 20, opacity: 0, ease: cardEase }, { y: 0, opacity: 1, duration: cardDuration }, 'queue+=0.1')
			.fromTo('#customer #card1', { y: 20, opacity: 0, ease: cardEase }, { y: 0, opacity: 1, duration: cardDuration }, 'queue+=0.2');

		// 고객 성공 사례 box 내부 컨텐츠
		gsap
			.timeline({
				scrollTrigger: {
					trigger: '.section__title ',
					start: 'top 80%',
					end: 'bottom bottom',
					markers: false,
					invalidateOnRefresh: true,
				},
			})
			.fromTo('#customer #text', { opacity: 0, ease: 'power1.out' }, { y: 0, opacity: 1, duration: 1 }, 'queue')
			.fromTo('#customer #btn', { opacity: 0, ease: 'power1.out' }, { y: 0, opacity: 1, duration: 1 }, 'queue+=0.1');
	});
</script>

<style lang="scss" scoped>
	$mobilePadding: 40px;

	.section {
		margin-top: $mainPageSectionSpace;

		@include tablet {
			margin-top: 0;
		}
	}

	$minImgWidth: calc(($commonSpaceLRMobile * 2) + ($mobilePadding * 2) + rem(400px));

	.box-area {
		@include flexCenter(center);
		gap: rem(50px);
		margin-top: rem(44px);
		padding: rem(68px) rem(40px);
		background: rgb(59, 166, 247);
		background: linear-gradient(90deg, rgba(59, 166, 247, 1) 0%, rgba(71, 105, 233, 1) 100%);
		border-radius: rem(40px);

		@include tablet {
			flex-direction: column;
		}

		@include mobile {
			padding: rem(48px) $mobilePadding;
			gap: rem(30px);
		}

		&__img {
			width: 100%;
			max-width: 401px;
			position: relative;
			display: flex;
			justify-content: center;

			@media (max-width: $minImgWidth) {
				visibility: visible;
			}
		}

		&__text {
			color: $c-white;
			font-size: rem(36px);

			@include laptop {
				font-size: rem(28px);
			}

			@include tablet {
				display: flex;
				align-items: center;
				flex-direction: column;
				font-size: rem(20px);
			}

			@include mobile {
				order: -1;
				font-size: rem(18px);
			}

			* {
				font-weight: 600;
			}
		}

		.btn {
			margin-top: rem(32px);
			padding-right: rem(44px);

			transition: $duration;

			&::after {
				@include pseudo('', rem(24px), rem(24px));
				position: absolute;
				top: rem(11px);
				right: rem(14px);
				background-position: center;
				background-repeat: no-repeat;
				background-image: icon(linkArrow, $c-white);
				background-size: 100%;
				transition: transform $duration;

				@include mobile {
					top: rem(7px);
				}
			}

			&:hover {
				&::after {
					transform: translateX(rem(4px));
				}
			}
		}
	}

	.img {
		&__original {
			width: 100%;
			visibility: hidden;

			@media (max-width: $minImgWidth) {
				visibility: visible;
			}
		}

		&__obj {
			position: absolute;
			z-index: 10;

			@media (max-width: $minImgWidth) {
				visibility: hidden;
			}

			&#obj1 {
				top: rem(6px);
				right: 0;
			}

			&#obj2 {
				top: rem(68px);
				left: 0;
			}

			&#obj3 {
				bottom: 0;
				right: rem(4px);
			}
		}

		&__card {
			position: absolute;
			padding-left: rem(32px);

			@media (max-width: $minImgWidth) {
				visibility: hidden;
			}

			&#card1 {
				top: rem(14px);
			}

			&#card2 {
				top: rem(60px);
			}

			&#card3 {
				bottom: rem(28px);
				box-shadow: 0px 4px 24px rgba(104, 117, 152, 0.1);
			}
		}
	}
</style>
