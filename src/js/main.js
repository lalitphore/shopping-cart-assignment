import '../sass/main.scss';
import './data.js';
import cartController from './cartController';
window.onload=function(){
    cartController.init();
}

