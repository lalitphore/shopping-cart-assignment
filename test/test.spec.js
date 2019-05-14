import cartModel from '../src/js/models/cart';

describe("Import File Cart Testing", () => {
    let product,cartModelObj,cartProductQuantity;
    beforeEach(function(){
        cartModelObj = new cartModel();
        product = {
            id: "5b6c6a7f01a7c38429530883", 
            price: "87", 
            title: "Fresho Kiwi - Green, 3 pcs", 
            image: "/static/images/products/fruit-n-veg/kiwi-green.jpg"
        };
        let productsInCart = cartModelObj.get();
        productsInCart[product.id] ? cartProductQuantity = productsInCart[product.id].quantity : cartProductQuantity = 0;
    });
 
    describe('Testing product add to cart',()=>{
        it('Should returns the product object with quantity increamented by 1',()=>{     
            let addToCart = cartModelObj.add(product);
            let updatedcartProduct = addToCart[product.id];
            expect(updatedcartProduct.quantity).toBe(cartProductQuantity+1);
        });
    });

    describe('Testing product remove from cart',()=>{
        let removeFromCart;
        it('Should returns the product object with quantity decreamented by 1',()=>{
            console.log('cartProductQuantity',cartProductQuantity);
            switch (cartProductQuantity)
            {
                case 0:
                    console.log('Product Not Available In Cart');
                break;
                case 1:
                    removeFromCart = cartModelObj.remove(product,'product');
                    console.log('cartProductQuantity 1',removeFromCart[product.id],cartProductQuantity);
                    expect(removeFromCart[product.id]).toBe(undefined);
                break;
                default:
                    removeFromCart = cartModelObj.remove(product,'quantity');
                    let updatedcartProduct = removeFromCart[product.id];
                    console.log('cartProductQuantity default',updatedcartProduct,cartProductQuantity);
                    expect(updatedcartProduct.quantity).toBe(cartProductQuantity-1);
                break;
            }
        });
    });

    it("Checking", () => {
        //expect(1).toBe(2);
    });
})