import '../sass/main.scss';
import productController from './controllers/product';
import cartController from './controllers/cart';
import homeController from './controllers/home';
window.onload=function(){
    cartController.init();
    productController.init();
    homeController.init();
}