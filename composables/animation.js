import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// animation_product 라벨을 가진 ScrollTrigger 인스턴스 해제
export function clearScrollTriggers() {
	ScrollTrigger.getAll().forEach(trigger => {
		if (trigger.vars.label === 'animation_product') {
			trigger.kill();
		}
	});
}

// 상세페이지 - section text, description
export function sectionTitleAndDescAnimation() {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.section',
				start: 'top 80%',
				end: 'bottom bottom',
				markers: false,
				invalidateOnRefresh: true,
			},
		})
		.fromTo(
			'.section .section__title',
			{ x: -40, opacity: 0, ease: 'power1.in' },
			{ x: 0, opacity: 1, duration: 0.8 },
			'queue',
		)
		.fromTo(
			'.section .section__desc',
			{ x: -40, opacity: 0, ease: 'power1.in' },
			{ x: 0, opacity: 1, duration: 0.8 },
			'queue+=0.15',
		);
}

// 제품상세 - top section text
export function topSectionTextAnimation() {
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: '.top-section',
				start: 'top 80%',
				end: 'bottom bottom',
				markers: false,
				label: 'animation_product',
				invalidateOnRefresh: true,
			},
		})
		.fromTo(
			'.top-section .section__title',
			{ x: -40, opacity: 0, ease: 'power4.in' },
			{ x: 0, opacity: 1, duration: 0.8 },
			'queue',
		)
		.fromTo(
			'.top-section .top-section__desc',
			{ x: -40, opacity: 0, ease: 'power4.in' },
			{ x: 0, opacity: 1, duration: 0.8 },
			'queue+=0.2',
		);
}

// 제품상세 - top section image
export function topSectionImgAnimation() {
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: '.top-section__img',
				start: 'top 80%',
				end: 'bottom bottom',
				markers: false,
				label: 'animation_product',
				invalidateOnRefresh: true,
			},
		})
		.fromTo('.top-section__img', { opacity: 0, ease: 'power1.in' }, { opacity: 1, duration: 2.5 });
}

// 제품상세 - section title
export function sectionTitleAnimation() {
	const sectionTitles = document.querySelectorAll('.section__title');
	sectionTitles.forEach(title => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: title,
					start: 'top 80%',
					end: 'bottom bottom',
					markers: false,
					label: 'animation_product',
					invalidateOnRefresh: true,
				},
			})
			.fromTo(title, { x: -40, opacity: 0, ease: 'power4.in' }, { x: 0, opacity: 1, duration: 1 });
	});
}

// 제품상세 - 도입혜택 highlight effect
export function benefitAnimation(benefits) {
	const functionHighlights = [];

	function createHighlight(triggerEl) {
		return gsap
			.timeline({
				scrollTrigger: {
					trigger: `.benefits .benefits__list:nth-child(${triggerEl})`,
					start: 'top 82%',
					end: 'bottom bottom',
					markers: false,
					label: 'animation_product',
					invalidateOnRefresh: true,
					onEnter: () => {
						gsap.utils
							.toArray(`.benefits .benefits__list:nth-child(${triggerEl}) .benefits__title--text`)
							.forEach(title => {
								title.classList.add('is-active');
							});
					},
				},
			})
			.fromTo(
				`.benefits .benefits__list:nth-child(${triggerEl}) .benefits__desc`,
				{ y: 20, opacity: 0, ease: 'power3.in' },
				{ y: 0, opacity: 1, duration: 0.8, delay: 0.1 },
			);
	}

	for (let i = 1; i <= benefits.length; i++) {
		functionHighlights.push(createHighlight(i.toString()));
	}
}

// 제품상세 - support
export function boxTextAnimation() {
	const tl = gsap
		.timeline({
			scrollTrigger: {
				trigger: '.box-area',
				markers: false,
				invalidateOnRefresh: true,
				label: 'animation_product',
				scrub: true,
				start: 'top 80%',
				end: '+=40%',
				onLeave: () => {
					tl.scrollTrigger.disable(false); // scrub reverse 방지
				},
			},
		})
		.fromTo(
			'.box-area',
			{ y: -60, opacity: 0, ease: 'power1.in', scale: 0.85 },
			{ y: 0, opacity: 1, duration: 5, scale: 1 },
		);
}

// 제품상세 - 주요기능
export function prdtFunctionAnimation(mainFunctions) {
	const functionFunctionAnimations = [];

	function createFunctionAnimation(triggerEl) {
		return gsap
			.timeline({
				scrollTrigger: {
					trigger: `.function-area .function:nth-child(${triggerEl})`,
					start: 'top 85%',
					end: 'bottom bottom',
					markers: false,
					label: 'animation_product',
					invalidateOnRefresh: true,
				},
			})
			.fromTo(
				`.function-area .function:nth-child(${triggerEl})`,
				{ y: 40, opacity: 0, ease: 'power3.in' },
				{ y: 0, opacity: 1, duration: 0.8 },
			);
	}

	for (let i = 1; i <= mainFunctions.length; i++) {
		functionFunctionAnimations.push(createFunctionAnimation(i.toString()));
	}
}

// 솔루션 상세 - 프로세스 이미지
export function solutionImgAnimation() {
	return gsap
		.timeline({
			scrollTrigger: {
				trigger: '.info-graphic-box',
				start: 'top 90%',
				end: 'bottom bottom',
				markers: false,
				invalidateOnRefresh: true,
			},
		})
		.fromTo(
			'.info-graphic-box',
			{ y: 60, opacity: 0, ease: 'power1.in' },
			{ y: 0, opacity: 1, duration: 1.5, delay: 0.5 },
		);
}
