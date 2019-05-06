export default class CartView
{
    constructor(products){
        this.products=products;
    }
    setHtml()
    {
        var cartTemplate = require('../templates/product-cart.hbs');
        var cartSelector = document.querySelector(".cart-container");
        cartSelector.innerHTML= cartTemplate(this.products);
        this.updateCounter();
    }

    updateCounter()
    {
        var totalPrice=0;
        var totalProductsInCart=0;
        for(let key in this.products){
            totalPrice+=this.products[key]['price']*this.products[key]['quantity'];
            totalProductsInCart++;
        }
        
        
        let x = document.getElementsByClassName('cart-total');
        let i;
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML= totalProductsInCart;
        }

        document.querySelector(".product-cart-total-price").innerHTML=totalPrice;
    }

    updateCartProduct(productData,product)
    {
       let price=productData.price;
       let quantity=productData.quantity;
       product.querySelector('.product-quantity').innerHTML=quantity;
       product.querySelector('.product-total-price').innerHTML=price*quantity;
       this.updateCounter();
    }

    removeCartProduct(product)
    {
        product.remove();
        this.updateCounter();
    }
}