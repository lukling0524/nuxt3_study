<template>
	<header class="mobile-header" :class="{ 'is-open': isOpen, fixed: isFixed }" ref="mobileHeader">
		<div class="mobile-header__wrap">
			<div class="mobile-header__logo">
				<div class="mobile-header__logo--img logo" @click="goToMain">StockFlow</div>
			</div>

			<button class="mobile-header__hamburger" @click="toggleMenu">
				<span class="line"></span>
				<span class="line"></span>
				<span class="line"></span>
			</button>
		</div>

		<div class="mobile-nav" v-if="isOpen">
			<button class="btn btn__blue contact-btn" @click="goToContact">
				<span class="btn__text">CONTACT US</span>
			</button>

			<HeaderMenu />

			<ul class="language">
				<li class="language__list">
					<button class="language__item btn btn__white" @click="setLocale('ko')">KOR</button>
				</li>
				<li class="language__list">
					<button class="language__item btn btn__white" @click="setLocale('en')">ENG</button>
				</li>
			</ul>
		</div>
	</header>
</template>

<script setup>
	import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
	import { useRoute } from 'vue-router';
	//import { useI18n } from 'vue-i18n';

	const { goToMain, goToContact } = useNavigation();

	const route = useRoute();
	const { locale, t } = useI18n();
	const mobileHeader = ref(null);
	const isOpen = ref(false);
	const isFixed = ref(false);

	// 브라우저 scroll position 50 이상에서 스타일 변경
	const handleScroll = () => {
		isFixed.value = window.scrollY > 50;
		if (mobileHeader.value) {
			mobileHeader.value.classList.toggle('fixed', isFixed.value);
		}
	};

	onMounted(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
		window.removeEventListener('resize', handleScroll);
	});

	function setLocale(newLocale) {
		locale.value = newLocale;
		localStorage.setItem('lang', newLocale);

		// 언어 변경 시 html lang값 변경
		document.documentElement.lang = newLocale;
	}

	function toggleMenu() {
		isOpen.value = !isOpen.value;

		// 햄버거 메뉴 토글 시 fixed header 여부 확인
		if (mobileHeader.value) {
			if (isOpen.value) {
				mobileHeader.value.classList.add('fixed');
			} else if (!isOpen.value && isFixed.value) {
				mobileHeader.value.classList.add('fixed');
			} else {
				mobileHeader.value.classList.remove('fixed');
			}
		}

		// 클라이언트에서만 실행되도록
    if (import.meta.env.SSR === false) {
			document.body.style.overflow = isOpen.value ? 'hidden' : 'unset';
		}
	}

	// 메뉴 이동 시 nav 닫기
	watch(
		route,
		() => {
			isOpen.value = false;
      if (import.meta.env.SSR === false) {
				document.body.style.overflow = 'unset';
			}
		},
		{ immediate: true },
	);
</script>

<style lang="scss" scoped>
	@use '@css/layout/mobileHeader';
</style>
