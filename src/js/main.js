import '../sass/main.scss';
import productController from './controllers/product';
import cartController from './controllers/cart';
import homeController from './controllers/home';
window.onload=function(){
    cartController.init();
    productController.init();
    homeController.init();
}

/* Custom Text box handling */
var siblingObj = function(parentofSelected,sibling){
    let children = parentofSelected.childNodes;
    let myValue;
    for (var i=0; i < children.length; i++) {
        if (children[i].tagName == sibling) {
            myValue= children[i];
            return myValue;
        }
    }
}

if(document.querySelectorAll('.custom-textbox').length)
{
    let customTextBoxes = document.querySelectorAll('.custom-textbox');
    customTextBoxes.forEach((textbox) => {
        textbox.addEventListener('blur', (event) => {
            if(event.target.value){
                siblingObj(event.target.closest('div'),'LABEL').style.display='none';
            }else{
                siblingObj(event.target.closest('div'),'LABEL').style.display='block';
            }
        });
    });
}

/*  Mobile Nav Menu Javascript */
document.getElementById("mobile-nav-icon").addEventListener("click", function(){
    let navElement = document.getElementById('mobile-nav-icon');
    if(navElement.classList.contains("cross-icon"))
    {
        document.getElementById('mobile-nav-icon').innerHTML='&#9776;';
        navElement.classList.remove("cross-icon");
        document.getElementById('header__menu').style.display = "none";
    }
    else
    {
        document.getElementById('mobile-nav-icon').innerHTML='&#10005;';
        navElement.classList.add("cross-icon");
        document.getElementById('header__menu').style.display = "block";
    }
});