<template>
	<footer class="footer">
		<div class="footer__wrap">
			<div class="footer__logo">
				<h2 class="footer__logo--img logo">StockFlow</h2>
			</div>
			<div class="footer__info">
				<ul class="footer__info-wrap">
					<li class="footer__list">
						<span class="footer__item title">{{ t('footer.company') }}</span>
						<span class="footer__item">{{ t('footer.companyName') }}</span>
					</li>
					<li class="footer__list">
						<span class="footer__item title">{{ t('footer.ceo') }}</span>
						<span class="footer__item">{{ t('footer.ceoName') }}</span>
					</li>
					<li class="footer__list">
						<span class="footer__item title">{{ t('footer.tel') }}</span>
						<a class="footer__item text-link" href="tel:0269527371">02-6952-7371</a>
					</li>
					<li class="footer__list">
						<span class="footer__item title">{{ t('footer.email') }}</span>
						<a class="footer__item text-link" href="mailto:info@lubentis.com">info@lubentis.com</a>
					</li>
				</ul>
				<ul class="footer__info-wrap">
					<li class="footer__list">
						<span class="footer__item title">{{ t('footer.businessNo') }}</span>
						<span class="footer__item">139-81-43927</span>
					</li>
					<li class="footer__list reg">
						<span class="footer__item title">{{ t('footer.mailOrderSalesNo') }}</span>
						<div class="footer__item">
							<p class="footer__item">
								2023-서울강남-05696 <a class="footer__item text-link salesNo" href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1398143927" target="_blank">[사업자정보확인]</a>
							</p>
						</div>
					</li>
					<li class="footer__list add">
						<span class="footer__item title">{{ t('footer.address') }}</span>
						<span class="footer__item">{{ t('footer.compnayAddress') }}</span>
					</li>
					<li class="footer__list terms">
						<button class="footer__item link" @click="goToTerms" disabled>{{ t('footer.terms') }}</button>
						<button class="footer__item link" @click="goToPolicy" disabled>{{ t('footer.policy') }}</button>
						<a class="footer__item link" href="https://lubentis.com/" target="_blank">{{ t('footer.lubentisWeb') }}</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script setup>
	// import { useI18n } from 'vue-i18n';
	// import { useNavigation } from '@/utils/router';
	const { t } = useI18n();
	// const { goToTerms, goToPolicy } = useNavigation();
</script>

<style lang="scss" scoped>
	@use '@css/layout/footer';

	// 추후 화면 연결 후 스타일 제거
	.link {
		text-decoration: none !important;
	}
</style>
