$(function(){
    var currentPage=window.location.pathname;
    currentPage=currentPage.split('/');
    currentPage=currentPage[currentPage.length-1];
    switch(currentPage)
    {
        case "products.html":
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/server/products/index.get.json');
            ourRequest.onload = function(){
                if(ourRequest.status>=200 && ourRequest.status < 400)
                {
                    var data = JSON.parse(ourRequest.responseText);
                    createProductsHtml(data);
                }
                else
                {
                    console.log('We Connected to the server, but it returned an error');
                }
            };
        
            ourRequest.onerror = function(){
                console.log("Connection error");
            }
            ourRequest.send();

            var categoryRequest = new XMLHttpRequest();
            categoryRequest.open('GET','https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/server/categories/index.get.json');
            categoryRequest.onload = function(){
                if(categoryRequest.status>=200 && categoryRequest.status < 400)
                {
                    var data = JSON.parse(categoryRequest.responseText);
                    createCategoryHtml(data);
                }
                else
                {
                    console.log('We Connected to the server, but it returned an error');
                }
            };
        
            categoryRequest.onerror = function(){
                console.log("Connection error");
            }
            categoryRequest.send();
        break;

        case "index.html":
        default:
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/server/banners/index.get.json');
            ourRequest.onload = function(){
                if(ourRequest.status>=200 && ourRequest.status < 400)
                {
                    var data = JSON.parse(ourRequest.responseText);
                    createBannersHtml(data);
                }
                else
                {
                    console.log('We Connected to the server, but it returned an error');
                }
            };
        
            ourRequest.onerror = function(){
                console.log("Connection error");
            }
            ourRequest.send();
        break;
    }
    

    function createCategoryHtml(categoriesData)
    {
        var categoryTemplate = require('../templates/product-categories.hbs');
        var categorySelector = document.getElementById('product-categories');
        console.log(categoriesData);
        categorySelector.innerHTML= categoryTemplate(categoriesData);
    }
    function createProductsHtml(productsData)
    {
        var productTemplate = require('../templates/product-grid.hbs');
        var productSelector = document.getElementById('products-grid');
        productSelector.innerHTML= productTemplate(productsData);
    }
    function createBannersHtml(bannersData)
    {
        var bannerTemplate = require('../templates/banners-slider.hbs');
        var bannersSelector = document.getElementById('banner-slider');
        bannersSelector.innerHTML= bannerTemplate(bannersData);
        showSlides(1, 0);
    }
});