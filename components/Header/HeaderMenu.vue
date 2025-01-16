<template>
	<nav class="nav">
		<div class="nav__item" v-for="(item, idx) in menuList" :key="idx">
			<NuxtLink class="header__item nav__main" :class="{ 'crnt-root': $route.meta.root === item.root }" :to="item.path">{{ item.title }}</NuxtLink>
			<ul class="nav__sub" v-if="item.subMenu">
				<li class="nav__sub--list" v-for="(subItem, subIdx) in item.subMenu" :key="subIdx">
					<NuxtLink class="nav__sub--item" :to="subItem.path">{{ subItem.title }}</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
	import { computed } from 'vue';

	const { t } = useI18n();

	const menuList = computed(() => [
		{
			root: 'product',
			path: '/product',
			title: t('navigation.product'),
			subMenu: [
				{
					path: '/product',
					title: 'StockFlow',
					name: 'Product',
				},
				{
					path: '/product/digital-warehousing',
					title: t('product.DigitalWarehousing.title'),
				},
				{
					path: '/product/opt-shipping',
					title: t('product.optShipping.title'),
				},
				{
					path: '/product/cloud-wms',
					title: t('product.cloudWms.title'),
				},
				{
					path: '/product/ecommerce-wms',
					title: t('product.ecommerceWms.title'),
				},
				{
					path: '/product/scaleable-wms',
					title: t('product.scaleableWms.title'),
				},
				{
					path: '/product/analytics',
					title: t('product.analytics.title'),
				},
			],
		},
		{
			root: 'solution',
			path: '/solution/order',
			title: t('navigation.solution'),
			subMenu: [
				{
					path: '/solution/order',
					title: t('navigation.order'),
				},
				{
					path: '/solution/receive',
					title: t('navigation.receive'),
				},
				{
					path: '/solution/shipping',
					title: t('navigation.shipping'),
				},
				{
					path: '/solution/inventory',
					title: t('navigation.inventory'),
				},
			],
		},
		{
			root: 'customer',
			path: '/customer',
			title: t('navigation.customer'),
		},
	]);
</script>

<style lang="scss">
	@use '@css/layout/header';
</style>
