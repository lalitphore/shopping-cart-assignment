import productModel from './product';
export default class CartModel
{
    constructor(){

        this.cartProducts=sessionStorage.getItem("cartProducts");
        if(this.cartProducts==null){ this.cartProducts={}; }else{ this.cartProducts=JSON.parse(this.cartProducts); }
    }

    get()
    {
        return this.cartProducts;
    }
    
    add(product)
    {
       if(this.cartProducts[product.id])
       {
            this.cartProducts[product.id]['quantity']++;
       }
       else
       {
            this.cartProducts[product.id]={'quantity':1,'price':parseFloat(product.price)};
       }
       console.log(this.cartProducts,'Add');
       sessionStorage.setItem("cartProducts",JSON.stringify(this.cartProducts));
       return this.cartProducts;
    }
    remove(product,type='product')
    {
        if(type=='quantity')
        {
            this.cartProducts[product.id]['quantity']--;
            if(this.cartProducts[product.id]['quantity']==0)
            {
                delete this.cartProducts[product.id];
            }
        }
        else
        {
            delete this.cartProducts[product.id];
        }
        sessionStorage.setItem("cartProducts",JSON.stringify(this.cartProducts));
        console.log(this.cartProducts,'Minus');
        return this.cartProducts;
    }

}