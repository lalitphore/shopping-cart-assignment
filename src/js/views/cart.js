export default class CartView
{
    constructor(products){
        this.products=products;
    }
    setHtml()
    {
        let cartTemplate,cartSelector;
        cartTemplate = require('../../templates/product-cart.hbs');
        cartSelector = document.getElementsByClassName("cart-container");
        if(cartSelector[1])
        {
            cartSelector[0].innerHTML='';
            document.querySelector('.header__cart').classList.add('pointer-none');
            document.querySelector('.background-overlay').classList.add('hidden');
            cartSelector[1].innerHTML= cartTemplate(this.products);
            document.querySelector('.cart_container_head').classList.add('hidden');
        }
        else
        {
            document.querySelector('.header__cart').classList.remove('pointer-none');
            document.querySelector('.cart-container-popover').classList.add('hidden');
            cartSelector[0].innerHTML= cartTemplate(this.products);
        }
        this.updateCounter();
    }

    updateCounter()
    {
        let totalPrice,totalProductsInCart,x,i;
        totalPrice=0;
        totalProductsInCart=0;
        for(let key in this.products){
            totalPrice+=this.products[key]['price'];
            totalProductsInCart++;
        }
        
        
        x = document.getElementsByClassName('cart-total');
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML= totalProductsInCart;
        }

        document.querySelector(".product-cart-total-price").innerHTML=totalPrice;
    }

    updateCartProduct(productData,product)
    {
       let price,quantity;
       price=productData.price;
       quantity=productData.quantity;
       product.querySelector('.product-quantity').innerHTML=quantity;
       product.querySelector('.product-total-price').innerHTML=price;
       this.updateCounter();
    }

    removeCartProduct(product)
    {
        product.remove();
        this.updateCounter();
    }
}