import '../sass/main.scss';
import productController from './controllers/product';
import cartController from './controllers/cart';
import homeController from './controllers/home';

let layoutInit = 0;
const routes = {
    "":"index.hbs",
    "#home":"index.hbs",
    "#products":"products.hbs",
    "#signin":"signin.hbs",
    "#register":"register.hbs",
    "#cart":"cart.hbs"
};


window.onload=function(){
    setLayout();
}
window.addEventListener('hashchange', function(){ setLayout(); });

var setLayout = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    let path,currentRoute;
    path = window.location.hash.split('/');
    currentRoute = routes[path[0]];
    if(window.getComputedStyle(document.getElementById("mobile-nav-icon")).display != "none" && layoutInit!=0){
        document.getElementById('mobile-nav-icon').innerHTML='&#9776;';
        document.getElementById('mobile-nav-icon').classList.remove("cross-icon");
        document.getElementById('header__menu').style.display = "none";
    }

    layoutInit++;
    var template = new Promise(function(resolve,reject){
        var currentPartial = require('../partials/'+currentRoute);
        if(currentPartial)
        {
            document.getElementById("root").innerHTML = currentPartial();
        }
        resolve(currentRoute);
    }).then(function(d){
        switch(d)
        {
            case "products.hbs":
                productController.init();
            break;
            case "index.hbs":
                homeController.init();
            break;

            case "signin.hbs":
            case "register.hbs":
                let customTextBoxes = document.querySelectorAll('.custom-textbox');
                customTextBoxes.forEach((textbox) => {
                    textbox.addEventListener('blur', (event) => {
                        if(event.target.value){
                            siblingObj(event.target.closest('div'),'LABEL').classList.add('display-top');
                        }else{
                            siblingObj(event.target.closest('div'),'LABEL').classList.remove('display-top');
                        }
                    });
                });
            break;
        }
        cartController.init();
    });
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

/*  Mobile Nav Menu Javascript */
document.getElementById("mobile-nav-icon").addEventListener("click", manageNavMenu);

function manageNavMenu(){
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
}