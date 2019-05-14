import cartModel from '../src/js/models/cart';

describe("Import File Cart Testing", () => {
    let product,cartModelObj,cartProductQuantity,productsInCart;
    beforeEach(function(){
        cartModelObj = new cartModel();
        product = {
            id: "5b6c6a7f01a7c38429530883", 
            price: "87", 
            title: "Fresho Kiwi - Green, 3 pcs", 
            image: "/static/images/products/fruit-n-veg/kiwi-green.jpg"
        };
        cartModelObj.remove(product,'product');
        productsInCart = cartModelObj.get();
        productsInCart[product.id] ? cartProductQuantity = productsInCart[product.id].quantity : cartProductQuantity = 0;
    });
 
    describe('Testing product add to cart',()=>{
        let addToCart;
        it('Should returns the product quantity 1 if added first time',()=>{     
            addToCart = cartModelObj.add(product);
            let updatedcartProduct = addToCart[product.id];
            expect(updatedcartProduct.quantity).toBe(1);
        });

        it('Should returns the product quantity 2 if added second time',()=>{     
            addToCart = cartModelObj.add(product);
            addToCart = cartModelObj.add(product);
            let updatedcartProduct = addToCart[product.id];
            expect(updatedcartProduct.quantity).toBe(2);
        });
    });

    describe('Testing product remove from cart',()=>{
        let addToCart,removeFromCart;
        it('Should returns the product quantity 1 if quantity is 2',()=>{
            addToCart = cartModelObj.add(product);
            addToCart = cartModelObj.add(product);
            removeFromCart = cartModelObj.remove(product,'quantity');
            let updatedcartProduct = removeFromCart[product.id];
            expect(updatedcartProduct.quantity).toBe(1);
        });

        it('Should delete the product object when quantity is 1',()=>{
            addToCart = cartModelObj.add(product);
            removeFromCart = cartModelObj.remove(product,'product');
            let updatedcartProduct = removeFromCart[product.id];
            expect(updatedcartProduct).toBe(undefined);
        });
    });


    describe('Testing product total price on adding product to cart',()=>{
        let addToCart,removeFromCart;
        it('Should returns the product total price in cart for 2 quantity',()=>{
            addToCart = cartModelObj.add(product);
            addToCart = cartModelObj.add(product);   
            let updatedcartProduct = addToCart[product.id];
            expect(updatedcartProduct.price).toBe(product.price*2);
        });
    });
});