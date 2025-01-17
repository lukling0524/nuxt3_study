import { ref } from 'vue';

export const useMatchMedia = () => {
	const isDesktop = ref(false);
	const mounted = ref(false);

	// 상태 업데이트 함수
	const checkScreen = () => {
		if (process.client && window) {
			isDesktop.value = window.innerWidth >= 1100;
		}
	};

	// 이벤트 리스너 설정 함수
	const setupEventListeners = () => {
		checkScreen();
		mounted.value = true;
		window.addEventListener('resize', checkScreen);
	};

	// 이벤트 리스너 정리 함수
	const cleanupEventListeners = () => {
		window.removeEventListener('resize', checkScreen);
	};

	return {
		isDesktop,
		mounted,
		setupEventListeners,
		cleanupEventListeners,
	};
};
