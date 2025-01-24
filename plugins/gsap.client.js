import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(nuxtApp => {
	if (import.meta.env.SSR === false) {
		gsap.registerPlugin(ScrollTrigger);
		nuxtApp.provide('gsap', gsap);
		nuxtApp.provide('ScrollTrigger', ScrollTrigger);
	}
});
