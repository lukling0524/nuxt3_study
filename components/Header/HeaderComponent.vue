<template>
	<header class="header" ref="header">
		<div class="header__wrap">
			<div class="header__logo">
				<div class="header__logo--img logo" @click="goToMain">StockFlow</div>
			</div>

			<div class="nav-area">
				<HeaderMenu @mouseover="handleHeaderOpen" @mouseleave="handleHeaderClose" @click="handleMenuClick" />
			</div>
			<div class="header__btn">
				<button class="btn btn__blue contact-btn" @click="goToContact">
					<span class="btn__text">CONTACT US</span>
				</button>

				<ul class="language">
					<li class="language__list">
						<button class="language__item" @click="setLocale('ko')">KOR</button>
					</li>
					<li class="language__list">
						<button class="language__item" @click="setLocale('en')">ENG</button>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { ref, onMounted, onUnmounted } from 'vue';
	import { useI18n } from 'vue-i18n';
	// import { useNavigation } from '@/utils/router';
	// import SubHeader from '@/components/common/SubHeader.vue';

	const { goToMain, goToContact } = useNavigation();

	const { locale } = useI18n();
	const header = ref(null);
	const isMenuClicked = ref(false);
	const isHoverOut = ref(true);

	// 브라우저 scroll position 50 이상에서 스타일 변경
	const handleScroll = () => {
		const scrolled = window.scrollY > 50;
		if (header.value) {
			header.value.classList.toggle('fixed', scrolled);
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

	// nav영역에 mouse hover 👉 mega menu open
	const handleHeaderOpen = () => {
		if (!isMenuClicked.value && isHoverOut.value) {
			if (header.value) {
				header.value.classList.add('is-open');
			}
		}
		isHoverOut.value = false;
	};

	// nav영역에서 mouse leave 👉 mega menu close
	const handleHeaderClose = () => {
		if (header.value) {
			header.value.classList.remove('is-open');
		}
		isHoverOut.value = true;
		isMenuClicked.value = false;
	};

	// nav link 클릭 시 menu close
	const handleMenuClick = event => {
		if (event.target.closest('a')) {
			isMenuClicked.value = true;
			if (header.value) {
				header.value.classList.remove('is-open');
			}
		}
	};

	function setLocale(newLocale) {
		locale.value = newLocale;
		if (process.client) {
			localStorage.setItem('lang', newLocale);

			// 언어 변경 시 html lang 속성값 변경
			document.documentElement.lang = newLocale;
		}
	}
</script>

<style lang="scss" scoped>
	@use '@css/layout/header';
</style>
