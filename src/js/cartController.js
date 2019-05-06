import CartModel from './cartModel';
import CartView from './cartView';
var cartController = (function(){
	const cartModelObj = new CartModel();
	const CartViewObj = new CartView(cartModelObj.get());
	function init()
	{
		const productsInCart = cartModelObj.get();
		CartViewObj.setHtml(productsInCart);

		document.addEventListener('click', function (event) {
			if (event.target.matches('.add-to-cart')) {
				const product = event.target.closest('.plp-container__products__item').dataset;
				let products = cartModelObj.add(product);
				CartViewObj.setHtml(products);
			}
			if (event.target.matches('.remove-from-cart')) {
				const product = event.target.closest('.plp-container__products__item').dataset;
				let products = cartModelObj.remove(product);
				CartViewObj.setHtml(products);
			}
			
			if(event.target.matches('.js-manage-cart')){
				let productSelector = event.target.closest('.cart-product');
				let product = productSelector.dataset;
				let productData;
				if(event.target.classList.contains('js-minus'))
				{ 
					 productData = cartModelObj.remove(product,'quantity');	
				}
				else
				{
					 productData = cartModelObj.add(product,'quantity');	
				}
				
				
				if(productData[product.id])
				{
					CartViewObj.updateCartProduct(productData[product.id],productSelector); 
				}
				else
				{ 
					CartViewObj.removeCartProduct(productSelector); 
				}
			}
		}, false);
	}

	return{
		init
	}
})();
export default cartController;