import { useRouter } from 'vue-router';

export function useNavigation() {
	const router = useRouter();

	function goToMain() {
		router.push('/');
	}

	function goToProduct() {
		router.push('/product');
	}

	function goToDigitalWarehousing() {
		router.push('/product/digital-warehousing');
	}

	function goToOptShipping() {
		router.push('/product/opt-shipping');
	}

	function goToCloudWms() {
		router.push('/product/cloud-wms');
	}

	function goToEcommerceWms() {
		router.push('/product/ecommerce-wms');
	}

	function goToScaleableWms() {
		router.push('/product/scaleable-wms');
	}

	function goToAnalytics() {
		router.push('/product/analytics');
	}

	function goToOrder() {
		router.push('/solution/order');
	}

	function goToReceive() {
		router.push('/solution/receive');
	}

	function goToShipping() {
		router.push('/solution/shipping');
	}

	function goToInventory() {
		router.push('/solution/Inventory');
	}

	function goToCustomer() {
		router.push('/customer');
	}

	function goToCustomerCase1() {
		router.push('/customer/case-1');
	}

	function goToCustomerCase3() {
		router.push('/customer/case-3');
	}

	function goToContact() {
		router.push('/contact');
	}

	function goToTerms() {
		router.push('/policy/terms-of-use');
	}

	function goToPolicy() {
		router.push('/policy/privacy-policy');
	}

	return {
		goToMain,
		goToProduct,
		goToDigitalWarehousing,
		goToOptShipping,
		goToCloudWms,
		goToEcommerceWms,
		goToScaleableWms,
		goToAnalytics,
		goToOrder,
		goToReceive,
		goToShipping,
		goToInventory,
		goToCustomer,
		goToCustomerCase1,
		goToCustomerCase3,
		goToContact,
		goToTerms,
		goToPolicy,
	};
}
