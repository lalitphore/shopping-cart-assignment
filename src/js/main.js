import '../sass/main.scss';
import './data.js';
import productController from './controllers/product';
import cartController from './controllers/cart';
window.onload=function(){
    cartController.init();
}

