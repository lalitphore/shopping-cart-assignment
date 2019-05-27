import CartModel from '../models/cart';
import CartView from '../views/cart';
var cartController = (function(){
	const cartModelObj = new CartModel();
	const CartViewObj = new CartView(cartModelObj.get());
	function init()
	{
		const productsInCart = cartModelObj.get();
		CartViewObj.setHtml(productsInCart);
		manageCartPopover();
		document.querySelector('.cart-container').addEventListener('click', cartEventListners, false);
	}

	function manageCartPopover()
	{
		let backgroundOverlay=document.querySelector('.background-overlay');
		if(backgroundOverlay && screen.width > 768)
		{
			backgroundOverlay.addEventListener('click',function(event){
				document.querySelector('.cart-container-popover').classList.add('hidden');
				event.target.classList.add('hidden');
			});
			document.getElementById('close_cart_popover').addEventListener('click',closePopover);

			document.querySelector('.header__cart').addEventListener('mouseover',function(event){
				backgroundOverlay.classList.remove('hidden');
				document.querySelector('.cart-container-popover').classList.remove('hidden');
			});
		}
	}

	function buyNow(product)
	{
		event.target.closest('.plp-container__products__item').dataset;
		let products = cartModelObj.add(product);
		CartViewObj.setHtml(products);
		document.querySelector('.header__cart__icon').classList.add('header__cart__icon-shake');
		setTimeout(function(){ document.querySelector('.header__cart__icon').classList.remove('header__cart__icon-shake'); },500);
	}

	function cartEventListners(event){
		if(event.target.matches('.js-manage-cart')){
			let productSelector,product,productData
			productSelector = event.target.closest('.cart-product');
			product = productSelector.dataset;
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
		document.getElementById('close_cart_popover').addEventListener('click',closePopover);
	}

	function closePopover(event){
		event.target.closest('.cart-container-popover').classList.add('hidden');
		document.querySelector('.background-overlay').classList.add('hidden');
	}

	return{
		init,
		buyNow
	}
})();
export default cartController;